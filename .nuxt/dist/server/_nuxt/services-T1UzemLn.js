const services = [
  {
    slug: "stroitelstvo-zhilyh-kompleksov",
    title: "Строительство жилых комплексов",
    shortDescription: "Комплексное строительство многоквартирных жилых домов и ЖК под ключ с современной инфраструктурой",
    image: "/images/services/service-residential-complexes.png",
    heroImage: "/images/services/service-residential-complexes.png",
    description: "URBANTECHSTROY специализируется на комплексном строительстве жилых домов различной этажности. Мы реализуем проекты от разработки концепции до сдачи объекта в эксплуатацию. Наша команда обеспечивает высокое качество строительства с использованием современных технологий и материалов, соблюдая все строительные нормы и стандарты безопасности.",
    benefits: [
      "Полный цикл строительства от проекта до сдачи",
      "Соблюдение всех строительных норм и стандартов",
      "Использование качественных сертифицированных материалов",
      "Современные технологии энергоэффективности",
      "Развитая инфраструктура и благоустройство территории",
      "Контроль качества на каждом этапе строительства",
      "Гарантийное обслуживание объектов"
    ],
    stages: [
      { step: 1, title: "Разработка проектной документации и согласование" },
      {
        step: 2,
        title: "Подготовка строительной площадки и инженерные изыскания"
      },
      { step: 3, title: "Возведение фундамента и несущих конструкций" },
      { step: 4, title: "Строительство стен и перекрытий" },
      {
        step: 5,
        title: "Монтаж инженерных систем (электричество, водоснабжение, отопление)"
      },
      { step: 6, title: "Фасадные и кровельные работы" },
      { step: 7, title: "Внутренняя отделка и благоустройство территории" }
    ],
    gallery: [
      "/images/services/service-gallery-1.png",
      "/images/services/service-gallery-2.png"
    ]
  },
  {
    slug: "stroitelstvo-chastnyh-domov",
    title: "Строительство частных домов",
    shortDescription: "Индивидуальное проектирование и строительство частных домов и коттеджей любой сложности",
    image: "/images/services/service-private-houses.png"
  },
  {
    slug: "stroitelstvo-obshchezhitij",
    title: "Строительство общежитий",
    shortDescription: "Проектирование и возведение общежитий с учетом всех норм и требований безопасности",
    image: "/images/services/service-dormitories.png"
  },
  {
    slug: "kapitalnyj-remont-zdanij",
    title: "Капитальный ремонт зданий",
    shortDescription: "Полная реконструкция и капитальный ремонт зданий любого назначения с восстановлением конструкций",
    image: "/images/services/service-capital-repair.png"
  },
  {
    slug: "betonnye-raboty",
    title: "Бетонные работы",
    shortDescription: "Устройство фундаментов, стяжек, монолитных конструкций с использованием качественного бетона",
    image: "/images/services/service-concrete.png"
  },
  {
    slug: "kladochnye-raboty",
    title: "Кладочные работы",
    shortDescription: "Кирпичная кладка стен, перегородок и других конструкций с соблюдением технологии",
    image: "/images/services/service-masonry.png"
  },
  {
    slug: "blagoustrojstvo-territorij",
    title: "Благоустройство территорий",
    shortDescription: "Ландшафтное проектирование, озеленение, устройство дорожек и благоустройство прилегающих территорий",
    image: "/images/services/service-landscaping.png"
  },
  {
    slug: "fasadnye-raboty",
    title: "Фасадные работы",
    shortDescription: "Утепление и отделка фасадов современными материалами, навесные вентилируемые фасады",
    image: "/images/services/service-facade.png"
  },
  {
    slug: "montazh-metallokarkasov",
    title: "Монтаж металлокаркасов",
    shortDescription: "Изготовление и монтаж металлических каркасов для зданий, ангаров и промышленных объектов",
    image: "/images/services/service-metal-frames.png"
  },
  {
    slug: "vnutrennyaya-otdelka",
    title: "Внутренняя отделка",
    shortDescription: "Комплексная внутренняя отделка помещений: штукатурка, шпаклевка, покраска, поклейка обоев",
    image: "/images/services/service-interior.png"
  },
  {
    slug: "naruzhnaya-otdelka",
    title: "Наружная отделка",
    shortDescription: "Качественная наружная отделка зданий с применением современных технологий и материалов",
    image: "/images/services/service-exterior-finish.png"
  },
  {
    slug: "krovelnye-raboty",
    title: "Кровельные работы",
    shortDescription: "Устройство и ремонт кровли любой сложности, монтаж водосточных систем",
    image: "/images/services/service-roofing.png"
  }
];
const getServiceBySlug = (slug) => services.find((s) => s.slug === slug) ?? null;
export {
  getServiceBySlug as g,
  services as s
};
//# sourceMappingURL=services-T1UzemLn.js.map
