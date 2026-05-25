# Деплой UrbanTechStroy (Git + VPS)

Сайт — **Nuxt 3** с Nitro preset **`node-server`**: один процесс Node обслуживает и HTML, и API (`/api/...`), SQLite и загрузки из админки. Статической раздачи «только из `dist`» без Node **недостаточно**.

---

## 1. Что изменилось по сравнению со старым продом

| Раньше (типично)        | Сейчас                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| Только фронт / статика  | **Обязателен Node.js** на VPS                                                                |
| Без БД                  | **SQLite** (`site.db`) — контент, админы, сессии, лиды                                       |
| Без серверных загрузок  | Папка **`.data/uploads`** — картинки из админки                                              |
| Один репозиторий = сайт | Тот же Git, но на сервере: **`git pull` → `npm ci` → `npm run build` → перезапуск процесса** |

Важно: каталог **`.data`** (или пути из `NUXT_DATABASE_PATH` / `NUXT_UPLOAD_DIR`) должен жить **вне** сценария «каждый деплой удаляю всю папку проекта», иначе потеряете БД и файлы.

---

## 2. Требования к VPS

- **Ubuntu/Debian** (или другой Linux) с SSH.
- **Node.js** актуальной LTS (рекомендуется **20.x или 22.x**), совпадающая или близкая к версии на машине, где вы собираете проект.
- **npm** (или `pnpm`/`yarn`, если переведёте проект).
- **Git**.
- Для продакшена: **Nginx** (или Caddy) как reverse proxy на `127.0.0.1:PORT` + **HTTPS** (Let’s Encrypt).
- Пакет **`better-sqlite3`** содержит нативные модули: на **Ubuntu** один раз поставьте компилятор и `make`, иначе `npm ci` упадёт с **`not found: make`**:

  ```bash
  sudo apt update
  sudo apt install -y build-essential python3
  ```

  После смены версии Node на сервере иногда нужен **`npm rebuild better-sqlite3`**.

- **Не запускайте `npm` через `sudo` в каталоге сайта** — иначе `node_modules` станут владением `root`, а приложение от `ubuntu` не сможет их читать/обновлять. Сборку делайте под тем же пользователем, что владеет `/var/www/urbantechstroy` (или поправьте `chown` после ошибочного `sudo npm`).

Проверка версий на сервере:

```bash
node -v
npm -v
git --version
```

---

## 3. Первый деплой «с нуля» на VPS (обновление со старого статического варианта)

### 3.1. Пользователь и каталог

Работайте под отдельным пользователем (например `deploy`), не под root:

```bash
sudo mkdir -p /var/www/urbantechstroy
sudo chown deploy:deploy /var/www/urbantechstroy
cd /var/www/urbantechstroy
```

### 3.2. Клонирование репозитория

```bash
git clone https://github.com/ВАШ_АККАУНТ/UrbanTechStroy.git .
# или SSH: git@github.com:...
```

### 3.3. Данные, которые не должны пропадать при деплое

Создайте каталог для постоянных данных **вне** `git clean` (или используйте путь вне репозитория):

```bash
sudo mkdir -p /var/lib/urbantechstroy
sudo chown deploy:deploy /var/lib/urbantechstroy
```

Дальше в `.env` (см. ниже) укажите, например:

- `NUXT_DATABASE_PATH=/var/lib/urbantechstroy/site.db`
- `NUXT_UPLOAD_DIR=/var/lib/urbantechstroy/uploads`

Тогда репозиторий можно пересобирать сколько угодно — БД и загрузки останутся.

Если не задавать переменные, по умолчанию приложение пишет в **`.data/site.db`** и **`.data/uploads`** **относительно текущей рабочей директории** при запуске Node. Тогда запускайте процесс **из корня проекта** и не удаляйте `.data` при деплое.

### 3.4. Переменные окружения

Скопируйте пример и отредактируйте:

```bash
cp .env.example .env
nano .env
```

Минимум для продакшена:

| Переменная                                 | Назначение                                                      |
| ------------------------------------------ | --------------------------------------------------------------- |
| `NUXT_PUBLIC_SITE_URL`                     | `https://ваш-домен.ru` без слэша в конце (OG, canonical)        |
| `NUXT_ADMIN_EMAIL` + `NUXT_ADMIN_PASSWORD` | Первый админ создаётся/синхронизируется при старте (см. README) |
| _или_ `NUXT_ADMIN_SETUP_KEY`               | Регистрация первого админа на `/admin/register`                 |
| `NUXT_DATABASE_PATH`                       | (опционально) абсолютный путь к SQLite                          |
| `NUXT_UPLOAD_DIR`                          | (опционально) каталог загрузок из админки                       |

Файл `.env` **не коммитьте**; на сервере держите его только локально или в секретах CI.

### 3.5. Установка зависимостей и сборка

```bash
cd /var/www/urbantechstroy
npm ci
npm run build
```

Артефакт: каталог **`.output/`** (Nitro). Запуск:

```bash
node .output/server/index.mjs
```

По умолчанию слушает **порт 3000** (или `PORT` / `NITRO_PORT` из окружения). Для прода обычно `127.0.0.1:3000` за Nginx.

### 3.6. Systemd (пример)

`/etc/systemd/system/urbantechstroy.service`:

```ini
[Unit]
Description=UrbanTechStroy Nuxt Nitro
After=network.target

[Service]
Type=simple
User=deploy
WorkingDirectory=/var/www/urbantechstroy
EnvironmentFile=/var/www/urbantechstroy/.env
Environment=NODE_ENV=production
Environment=HOST=127.0.0.1
Environment=PORT=3000
ExecStart=/usr/bin/node .output/server/index.mjs
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now urbantechstroy
sudo systemctl status urbantechstroy
```

После **любого** изменения `.env`: `sudo systemctl restart urbantechstroy`.

### 3.7. Nginx (пример reverse proxy)

```nginx
server {
    listen 443 ssl http2;
    server_name ваш-домен.ru;

    # ssl_certificate ... (certbot)

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    client_max_body_size 12M;
}
```

Админка использует **cookie** сессии: сайт и `/admin` должны быть с **одного домена** и по возможности **HTTPS**, иначе браузер может не отправлять cookie.

---

## 4. Повторный деплой (редеплой) — подробная схема

Ниже — схема для типичного случая, как у вас на скриншоте: **в `/var/www/urbantechstroy` лежит клон Git** (`app`, `components`, `pages`, `public`, `nuxt.config.ts`, `package.json`, `node_modules` и т.д.). Сайт в продакшене крутится как **процесс Node**, который запускает уже собранный сервер из **`.output/server/index.mjs`** (после `npm run build`).

### 4.1. Логика в одном абзаце

1. **Git** подтягивает новый код в ту же папку.
2. **`npm ci`** ставит зависимости ровно по `package-lock.json` (чисто и воспроизводимо).
3. **`npm run build`** пересобирает Nuxt → появляется/обновляется каталог **`.output/`**.
4. **Перезапуск** systemd или PM2 подхватывает новый `.output` и при необходимости новый `.env`.

Файлы **`.env`**, **`.data/`** (или пути из `NUXT_DATABASE_PATH` / `NUXT_UPLOAD_DIR`) **Git обычно не трогает** — они остаются на диске, если вы сами их не удаляете и не делаете жёсткий `git clean -fdx`.

### 4.2. Блок-схема (поток)

```mermaid
flowchart TD
  A[SSH на VPS] --> B[cd /var/www/urbantechstroy]
  B --> C[git fetch / pull]
  C --> D[npm ci]
  D --> E[npm run build]
  E --> F[systemctl restart или pm2 restart]
  F --> G[Проверка сайта и /admin]
```

### 4.3. Пошаговые команды (копируйте по порядку)

Подключитесь по SSH (у вас пользователь может быть `ubuntu` или другой — подставьте своего):

```bash
ssh ubuntu@ВАШ_IP
cd /var/www/urbantechstroy
```

**Шаг 1 — посмотреть, что сейчас в репозитории (по желанию):**

```bash
git status
git branch
```

Убедитесь, что нет незакоммиченных правок на сервере, которые вы хотите сохранить. Если сервер — только для деплоя, обычно `git status` чистый.

**Шаг 2 — забрать код с удалённого репозитория:**

```bash
git fetch origin
git checkout main
git pull origin main
```

Если основная ветка не `main`, замените на свою (например `master`).

**Шаг 3 — зависимости:**

```bash
npm ci
```

Используйте именно **`npm ci`**, а не `npm install`: так на проде ставится ровно то, что зафиксировано в `package-lock.json`, без «плавающих» версий.

Если после обновления Node на сервере падает сборка на **`better-sqlite3`**, выполните:

```bash
npm rebuild better-sqlite3
```

**Шаг 4 — сборка продакшена:**

```bash
npm run build
```

В конце должно быть без ошибок; в каталоге проекта обновится **`.output/`** — его и читает запущенный процесс.

**Шаг 5 — перезапуск приложения:**

Если настроен **systemd** (как в разделе 3.6):

```bash
sudo systemctl restart urbantechstroy
sudo systemctl status urbantechstroy
```

Если используете **PM2**:

```bash
pm2 restart urbantechstroy
pm2 logs urbantechstroy --lines 50
```

Имя процесса в PM2 может отличаться — посмотрите `pm2 list`.

**Шаг 6 — быстрая проверка:**

- Открыть главную и пару внутренних страниц.
- Форма заявки / калькулятор (если используете).
- **`/admin/login`** — вход и раздел с контентом.

Nginx при этом **не обязательно** перезапускать: он только проксирует на тот же порт Node.

### 4.4. Что у вас на сервере «видно по списку файлов»

- Папки **`components`**, **`pages`**, **`public`** — исходники и статика; после деплоя они должны совпасть с Git.
- **`node_modules`** — ставится заново через `npm ci`, не коммитится в Git.
- **`.output`** — появляется после `npm run build`; именно оттуда в проде должен стартовать Node.
- Папка **`3001`** в корне не стандартна для Nuxt: часто это старый эксперимент, копия проекта или артефакт. Если приложение из неё не запускается, её можно не трогать или удалить **только** после проверки, что она нигде не используется.

### 4.5. Время простоя

Пока идёт `npm run build`, старый процесс Node может ещё работать на **старом** `.output` (если вы не останавливали сервис заранее). После **`restart`** на доли секунды возможен обрыв соединений — это нормально. Если нужен «нулевой» даунтайм, настраивают два инстанса и поочерёдное переключение (blue-green) — для одного VPS обычно избыточно.

### 4.6. Если деплой сломал сайт

```bash
cd /var/www/urbantechstroy
git log --oneline -5
git checkout ХЕШ_ПРЕДЫДУЩЕГО_КОММИТА
npm ci
npm run build
sudo systemctl restart urbantechstroy
```

Потом разберите ошибку на тестовой ветке и снова задеплойте `main`.

### 4.7. Чего не делать без нужды

- **`git clean -fdx`** — сотрёт неотслеживаемые файлы, в том числе **`.env`** и **`.data`**, если они не в `.gitignore` неправильно или вы удалили ignore.
- Удалять **`.data`** вручную — потеряете БД (лиды, админы, правки контента) и загрузки из админки.
- **`rm -rf node_modules .output`** без следующих **`npm ci`** и **`npm run build`** — процесс перезапустится уже «в пустоту».

---

## 5. PM2 (альтернатива systemd)

В production **Nuxt/Nitro не читает файл `.env` сам по себе** для переменных процесса. Если запускать только `node .output/server/index.mjs` или `pm2 start .output/server/index.mjs`, то **`NUXT_ADMIN_EMAIL` / `NUXT_ADMIN_PASSWORD` не попадают в `process.env`** — первый админ из `.env` не создаётся, на логине будет «Нет учётных записей…».

В репозитории есть **`ecosystem.config.cjs`**: он при старте PM2 подставляет пары ключ=значение из **`.env` в корне проекта`** в окружение процесса.

```bash
cd /var/www/urbantechstroy
npm ci && npm run build
# если раньше запускали вручную с другим именем (например blog) — удалите старый процесс:
# pm2 delete blog
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # один раз — следовать подсказке
```

Имя приложения в PM2 по умолчанию — **`urbantechstroy`**. Чтобы оставить своё имя (например `blog`), отредактируйте поле `name` в `ecosystem.config.cjs`.

Обновление: `git pull`, `npm ci`, `npm run build`, затем **`pm2 restart urbantechstroy`** (или ваше имя из `ecosystem.config.cjs`). После **изменения `.env`** обязателен **перезапуск** PM2 — переменные читаются только при старте процесса.

---

## 6. Бэкапы

Регулярно копируйте:

- файл SQLite (`site.db` или путь из `NUXT_DATABASE_PATH`);
- каталог загрузок (`NUXT_UPLOAD_DIR` или `.data/uploads`).

Пример:

```bash
tar -czf backup-$(date +%F).tar.gz /var/lib/urbantechstroy
```

---

## 7. Частые проблемы

| Симптом                             | Что проверить                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 502 от Nginx                        | Запущен ли Node (**systemd** или **PM2**), слушает ли `PORT`, совпадает ли `proxy_pass` с портом процесса (см. ниже **7.1**) |
| Админка не логинит                  | HTTPS, один домен, cookie; **PM2 должен стартовать через `ecosystem.config.cjs`**, иначе `NUXT_ADMIN_*` из `.env` не видны Node; после смены `.env` — `pm2 restart …` |
| «Cannot find module better_sqlite3» | `npm ci` на сервере, та же архитектура; `npm rebuild better-sqlite3`                                                         |
| После деплоя пропали лиды/картинки  | БД и uploads не в том месте / удалили `.data` при деплое                                                                     |
| Сборка падает по памяти             | На маленьком VPS добавьте swap или собирайте в CI и выкладывайте `.output` (отдельный pipeline)                              |

### 7.1. 502 и **PM2**

Nginx отдаёт 502, если до upstream (Node) нет соединения. С **PM2** проверьте по шагам:

```bash
pm2 list
pm2 describe ИМЯ_ПРОЦЕССА
pm2 logs ИМЯ_ПРОЦЕССА --lines 80
```

- Статус должен быть **online**, не **errored** / **stopped**.
- В `describe` посмотрите **cwd** (рабочий каталог) — обычно `/var/www/urbantechstroy`, и что **скрипт** указывает на актуальный **`.output/server/index.mjs`** после `npm run build`.

Порт (часто **3000**):

```bash
ss -tlnp | grep node
curl -sI http://127.0.0.1:3000/ | head -3
```

В nginx **`proxy_pass`** должен совпадать с этим портом.

После деплоя:

```bash
cd /var/www/urbantechstroy
npm ci && npm run build
pm2 restart ИМЯ_ПРОЦЕССА
pm2 save
```

Если процесс **падает в цикле** — смотрите **логи** (`pm2 logs`): часто нет прав на `.data`, или не собран `better-sqlite3` (нужны `build-essential` и установка **без** `sudo npm` в каталоге проекта).

### 7.2. «Нет учётных записей» и переменные из `.env`

Сообщение на форме входа означает, что в SQLite **ещё нет ни одного админа**. Обычно первый пользователь создаётся из **`NUXT_ADMIN_EMAIL`** и **`NUXT_ADMIN_PASSWORD`** при первом обращении к БД — но только если эти переменные **реально есть в окружении процесса Node**.

Проверка на сервере (в `pm2 list` смотрите **id** в первом столбце):

```bash
pm2 env <id> | grep NUXT_ADMIN
```

Если пусто — процесс запущен без `.env`. Перейдите на **`pm2 start ecosystem.config.cjs`** (см. раздел **5**) и **`pm2 restart`** после правок `.env`.

Альтернатива без смены PM2: один раз зарегистрировать админа по **`NUXT_ADMIN_SETUP_KEY`** (ссылка «Первый вход? Регистрация администратора» на форме входа).

---

## 8. Краткий чеклист перед первым запуском на проде

- [ ] Node LTS установлен, `npm ci` проходит.
- [ ] `npm run build` проходит без ошибок.
- [ ] `.env` заполнен (`NUXT_PUBLIC_SITE_URL`, админ bootstrap или `NUXT_ADMIN_SETUP_KEY`).
- [ ] Пути к БД и uploads — на постоянном диске, права на запись у пользователя процесса.
- [ ] Systemd/PM2 настроен, `Restart=on-failure`; при PM2 — старт через **`ecosystem.config.cjs`**, чтобы подтянулся `.env`.
- [ ] Nginx → `127.0.0.1:PORT`, HTTPS, `client_max_body_size` для загрузки картинок.
- [ ] Настроен бэкап `/var/lib/urbantechstroy` (или ваших путей).

Подробности по админке и переменным — в **README.md** (раздел «Админ-панель»).

---

## 9. Шпаргалка: сначала GitHub, потом VPS (SSH / Git Bash)

### На своём ПК (Git Bash), в папке проекта

1. Убедитесь, что в **`.gitignore`** есть `.nuxt`, `.output`, `node_modules`, `.env`, `.data` (в этом репозитории уже добавлено). На скрине старого репо они попали в Git — так лучше не хранить.
2. Если **`.nuxt` / `.output` уже когда-то закоммичены**, один раз уберите из индекса (файлы на диске останутся):

   ```bash
   git rm -r --cached .nuxt .output 2>/dev/null
   git rm -r --cached 3001 2>/dev/null
   ```

3. Закоммитьте актуальный код и отправьте на GitHub (ветка `main` или ваша):

   ```bash
   git add -A
   git status
   git commit -m "Обновление: админка, БД, правки"
   git push origin main
   ```

### На VPS (SSH), в каталоге сайта (у вас `/var/www/urbantechstroy`)

```bash
cd /var/www/urbantechstroy
git pull origin main
npm ci
npm run build
sudo systemctl restart urbantechstroy
```

Если сервис называется иначе — вместо последней строки: `pm2 restart ИМЯ` или как у вас настроено.

После `git pull` на сервере папки **`.nuxt` / `.output` из репозитория** могут обновиться или исчезнуть — не страшно: **`npm run build` всё пересоберёт** локально на VPS.

### 9.1. Если открываете `/admin` и видите «Page not found: /admin»

Это значит: **в текущем `.output` нет маршрута** (на сервере не тот код или не пересобрали после обновления).

**На VPS по SSH:**

```bash
cd /var/www/urbantechstroy   # ваш каталог

# 1) Есть ли вообще страницы админки в исходниках после pull
ls -la pages/admin/

# 2) Последний коммит — ваш ли?
git log -1 --oneline

# 3) Пересборка и перезапуск (обязательно после pull с новыми страницами)
npm ci
npm run build
sudo systemctl restart urbantechstroy
```

**На своём ПК:** убедитесь, что папка `pages/admin/` **закоммичена и запушена** (`git status`, затем `git push`). Репозиторий на скрине раньше выглядел как старый снимок без админки — если туда не попал merge с `pages/admin`, на сервере после `pull` маршрутов не будет.

**Проверка без браузера** (на VPS, порт подставьте свой):

```bash
curl -sS -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/admin/login
```

Ожидается **200** или **302** на логин, не **404**.

**Nginx:** для всего сайта должен быть **один** `proxy_pass` на Node, без отдельного `location` со статикой, который перехватывает `/admin` и отдаёт файлы с диска (такого файла нет → 404). Обычно достаточно одного блока `location / { proxy_pass http://127.0.0.1:3000; ... }`.

---

## 10. Как удобно передать данные для разбора («сайт не обновился»)

Скопируйте вывод команд **текстом в чат** (или в один файл `.txt`). **Не присылайте** пароли, полный `.env`, приватные ключи SSH.

### На своём ПК (в папке проекта)

```bash
git remote -v
git branch -vv
git log -3 --oneline
git status -sb
```

Если есть сомнение, что push дошёл:

```bash
git ls-remote origin HEAD
git rev-parse HEAD
```

Хеши должны совпадать с тем, что на сервере после `pull`.

### На VPS (SSH), в каталоге сайта

Подставьте свой путь вместо `/var/www/urbantechstroy`:

```bash
cd /var/www/urbantechstroy
pwd
git remote -v
git branch -vv
git log -3 --oneline
git status -sb
ls -la pages/admin 2>/dev/null || echo "NO pages/admin"
ls -la .output/server 2>/dev/null | head -5
```

Как запускается приложение (выберите то, что у вас есть):

```bash
# systemd
systemctl status urbantechstroy --no-pager 2>/dev/null || systemctl status nginx --no-pager | head -20

# или PM2
pm2 list 2>/dev/null
pm2 describe urbantechstroy 2>/dev/null | head -40
```

Проверка, отвечает ли Node локально (порт из unit-файла или `pm2`, часто 3000):

```bash
curl -sI http://127.0.0.1:3000/ | head -5
curl -sI http://127.0.0.1:3000/admin/login | head -8
```

### Nginx (без секретов)

```bash
grep -R "proxy_pass\|root\|try_files" /etc/nginx/sites-enabled/ 2>/dev/null | head -40
```

Или вставьте **только** блок `server { ... }` для вашего домена, **замазав** пути к сертификатам, если хотите.

### После последнего деплоя (если помните)

- Точные команды, которые выполняли (`git pull`, `npm run build`, `restart` и т.д.).
- Были ли **ошибки** в конце `npm run build` (последние 30 строк лога).

По этому набору обычно видно: не тот репозиторий/ветка, не тот коммит на сервере, не пересобрали `.output`, процесс смотрит в **другой каталог**, или Nginx отдаёт **старый root**, минуя Node.

---

## 11. `git pull`: «Your local changes would be overwritten» — `.nuxt` / `.output`

Так бывает, если эти папки **когда‑то попали в репозиторий** и на VPS они отслеживаются Git. Сборка меняет файлы → Git считает их «изменёнными» → merge с `pull` запрещён.

**На VPS** (каталог сайта), если **нет ценных незакоммиченных правок** в проекте (на проде обычно так):

```bash
cd /var/www/urbantechstroy
git fetch origin
git reset --hard origin/main
```

Вместо `main` — ваша ветка (`master` и т.д.). Это сбросит рабочую копию к удалённой ветке и уберёт конфликтующие «локальные изменения» у отслеживаемых файлов.

Затем как обычно:

```bash
npm ci
npm run build
sudo systemctl restart urbantechstroy
```

**В репозитории на GitHub** (с ПК) желательно **убрать `.nuxt` и `.output` из индекса** и больше не коммитить их (см. раздел 9 в этом файле: `git rm -r --cached .nuxt .output`, обновлённый `.gitignore`, commit, push). Иначе проблема повторится после каждой `npm run build` на сервере.

**Если `reset --hard` страшно** — можно только откатить артефакты и lockfile, потом pull:

```bash
git restore .nuxt .output package-lock.json
git pull origin main
```

**Если `reset --hard` страшно** — можно только откатить артефакты и lockfile, потом pull:

```bash
git restore .nuxt .output package-lock.json
git pull origin main
```

Сработает, только если Git реально видит эти пути как изменённые tracked-файлы (как в вашем сообщении).

### 11.1. `npm ci`: «Missing: @emnapi/core from lock file» (npm 10 на сервере)

`package-lock.json`, сгенерированный **npm 11+**, иногда **не проходит `npm ci` под npm 10** (как на Ubuntu LTS): в lock не хватает явных записей для транзитивных пакетов (`@emnapi/core` / `@emnapi/runtime`).

**Варианты:**

1. **Обновить lock под npm 10** на машине разработки и запушить (в репозитории UrbanTechStroy lock уже приведён к совместимости с `npm ci` при npm 10.8.x).
2. Либо на сервере поставить **npm 11** (`npm install -g npm@11`) или **Node 22** с актуальным npm — тогда старый lock часто тоже ставится.

Временный обход на VPS (если нужно срочно собрать, а lock ещё старый): **`npm install`** вместо **`npm ci`** (подтянет зависимости и может подправить `package-lock.json` на диске; с сервера lock в Git лучше не пушить — правьте lock локально и пушьте).
