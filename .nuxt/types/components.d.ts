
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AdminGalleryField: typeof import("../../components/AdminGalleryField.vue")['default']
  AdminImageField: typeof import("../../components/AdminImageField.vue")['default']
  Reveal: typeof import("../../components/Reveal.vue")['default']
  HomeAbout: typeof import("../../components/home/HomeAbout.vue")['default']
  HomeAdvantages: typeof import("../../components/home/HomeAdvantages.vue")['default']
  HomeCalculator: typeof import("../../components/home/HomeCalculator.vue")['default']
  HomeContacts: typeof import("../../components/home/HomeContacts.vue")['default']
  HomeHero: typeof import("../../components/home/HomeHero.vue")['default']
  HomeProjectsPreview: typeof import("../../components/home/HomeProjectsPreview.vue")['default']
  HomeRegions: typeof import("../../components/home/HomeRegions.vue")['default']
  HomeServices: typeof import("../../components/home/HomeServices.vue")['default']
  ProjectCard: typeof import("../../components/projects/ProjectCard.vue")['default']
  ServiceCard: typeof import("../../components/services/ServiceCard.vue")['default']
  SiteFooter: typeof import("../../components/site/SiteFooter.vue")['default']
  SiteHeader: typeof import("../../components/site/SiteHeader.vue")['default']
  YandexMap: typeof import("../../components/site/YandexMap.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAdminGalleryField: LazyComponent<typeof import("../../components/AdminGalleryField.vue")['default']>
  LazyAdminImageField: LazyComponent<typeof import("../../components/AdminImageField.vue")['default']>
  LazyReveal: LazyComponent<typeof import("../../components/Reveal.vue")['default']>
  LazyHomeAbout: LazyComponent<typeof import("../../components/home/HomeAbout.vue")['default']>
  LazyHomeAdvantages: LazyComponent<typeof import("../../components/home/HomeAdvantages.vue")['default']>
  LazyHomeCalculator: LazyComponent<typeof import("../../components/home/HomeCalculator.vue")['default']>
  LazyHomeContacts: LazyComponent<typeof import("../../components/home/HomeContacts.vue")['default']>
  LazyHomeHero: LazyComponent<typeof import("../../components/home/HomeHero.vue")['default']>
  LazyHomeProjectsPreview: LazyComponent<typeof import("../../components/home/HomeProjectsPreview.vue")['default']>
  LazyHomeRegions: LazyComponent<typeof import("../../components/home/HomeRegions.vue")['default']>
  LazyHomeServices: LazyComponent<typeof import("../../components/home/HomeServices.vue")['default']>
  LazyProjectCard: LazyComponent<typeof import("../../components/projects/ProjectCard.vue")['default']>
  LazyServiceCard: LazyComponent<typeof import("../../components/services/ServiceCard.vue")['default']>
  LazySiteFooter: LazyComponent<typeof import("../../components/site/SiteFooter.vue")['default']>
  LazySiteHeader: LazyComponent<typeof import("../../components/site/SiteHeader.vue")['default']>
  LazyYandexMap: LazyComponent<typeof import("../../components/site/YandexMap.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
