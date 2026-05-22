declare global {
  const CONTENT_META_KEY: typeof import('../../server/utils/content-store').CONTENT_META_KEY
  const H3Error: typeof import('../../node_modules/h3').H3Error
  const H3Event: typeof import('../../node_modules/h3').H3Event
  const __buildAssetsURL: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').buildAssetsURL
  const __publicAssetsURL: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').publicAssetsURL
  const appendCorsHeaders: typeof import('../../node_modules/h3').appendCorsHeaders
  const appendCorsPreflightHeaders: typeof import('../../node_modules/h3').appendCorsPreflightHeaders
  const appendHeader: typeof import('../../node_modules/h3').appendHeader
  const appendHeaders: typeof import('../../node_modules/h3').appendHeaders
  const appendResponseHeader: typeof import('../../node_modules/h3').appendResponseHeader
  const appendResponseHeaders: typeof import('../../node_modules/h3').appendResponseHeaders
  const applyObjectPatch: typeof import('../../server/utils/content-store').applyObjectPatch
  const assertAdmin: typeof import('../../server/utils/admin-session').assertAdmin
  const assertImageSize: typeof import('../../server/utils/uploads').assertImageSize
  const assertMethod: typeof import('../../node_modules/h3').assertMethod
  const cachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').cachedEventHandler
  const cachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').cachedFunction
  const callNodeListener: typeof import('../../node_modules/h3').callNodeListener
  const clearResponseHeaders: typeof import('../../node_modules/h3').clearResponseHeaders
  const clearSession: typeof import('../../node_modules/h3').clearSession
  const collectManagedUploadFilenamesFromJson: typeof import('../../server/utils/upload-refs').collectManagedUploadFilenamesFromJson
  const collectManagedUploadFilenamesFromString: typeof import('../../server/utils/upload-refs').collectManagedUploadFilenamesFromString
  const countAdmins: typeof import('../../server/utils/admins-store').countAdmins
  const createAdminSession: typeof import('../../server/utils/admin-session').createAdminSession
  const createApp: typeof import('../../node_modules/h3').createApp
  const createAppEventHandler: typeof import('../../node_modules/h3').createAppEventHandler
  const createError: typeof import('../../node_modules/h3').createError
  const createEvent: typeof import('../../node_modules/h3').createEvent
  const createEventStream: typeof import('../../node_modules/h3').createEventStream
  const createImageReadStream: typeof import('../../server/utils/uploads').createImageReadStream
  const createRouter: typeof import('../../node_modules/h3').createRouter
  const defaultContentType: typeof import('../../node_modules/h3').defaultContentType
  const defineAppConfig: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/config').defineAppConfig
  const defineCachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').defineCachedEventHandler
  const defineCachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').defineCachedFunction
  const defineEventHandler: typeof import('../../node_modules/h3').defineEventHandler
  const defineLazyEventHandler: typeof import('../../node_modules/h3').defineLazyEventHandler
  const defineNitroErrorHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/error/utils').defineNitroErrorHandler
  const defineNitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin').defineNitroPlugin
  const defineNodeListener: typeof import('../../node_modules/h3').defineNodeListener
  const defineNodeMiddleware: typeof import('../../node_modules/h3').defineNodeMiddleware
  const defineRenderHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/renderer').defineRenderHandler
  const defineRequestMiddleware: typeof import('../../node_modules/h3').defineRequestMiddleware
  const defineResponseMiddleware: typeof import('../../node_modules/h3').defineResponseMiddleware
  const defineRouteMeta: typeof import('../../node_modules/nitropack/dist/runtime/internal/meta').defineRouteMeta
  const defineTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task').defineTask
  const defineWebSocket: typeof import('../../node_modules/h3').defineWebSocket
  const defineWebSocketHandler: typeof import('../../node_modules/h3').defineWebSocketHandler
  const deleteAdmin: typeof import('../../server/utils/admins-store').deleteAdmin
  const deleteCookie: typeof import('../../node_modules/h3').deleteCookie
  const deleteOtherSessionsForAdmin: typeof import('../../server/utils/admins-store').deleteOtherSessionsForAdmin
  const deleteSessionsForAdmin: typeof import('../../server/utils/admins-store').deleteSessionsForAdmin
  const deleteUploadFilesNotIn: typeof import('../../server/utils/uploads').deleteUploadFilesNotIn
  const destroyAdminSession: typeof import('../../server/utils/admin-session').destroyAdminSession
  const dynamicEventHandler: typeof import('../../node_modules/h3').dynamicEventHandler
  const ensureUploadDir: typeof import('../../server/utils/uploads').ensureUploadDir
  const eventHandler: typeof import('../../node_modules/h3').eventHandler
  const extForImageMime: typeof import('../../server/utils/uploads').extForImageMime
  const fetchWithEvent: typeof import('../../node_modules/h3').fetchWithEvent
  const fromNodeMiddleware: typeof import('../../node_modules/h3').fromNodeMiddleware
  const fromPlainHandler: typeof import('../../node_modules/h3').fromPlainHandler
  const fromWebHandler: typeof import('../../node_modules/h3').fromWebHandler
  const getAdminById: typeof import('../../server/utils/admins-store').getAdminById
  const getAdminToken: typeof import('../../server/utils/admin-session').getAdminToken
  const getAdminWithHashByEmail: typeof import('../../server/utils/admins-store').getAdminWithHashByEmail
  const getCookie: typeof import('../../node_modules/h3').getCookie
  const getHeader: typeof import('../../node_modules/h3').getHeader
  const getHeaders: typeof import('../../node_modules/h3').getHeaders
  const getMergedProjects: typeof import('../../server/utils/merged-content').getMergedProjects
  const getMergedServices: typeof import('../../server/utils/merged-content').getMergedServices
  const getMethod: typeof import('../../node_modules/h3').getMethod
  const getOverridesJson: typeof import('../../server/utils/db').getOverridesJson
  const getProjectDraftsMap: typeof import('../../server/utils/merged-content').getProjectDraftsMap
  const getProxyRequestHeaders: typeof import('../../node_modules/h3').getProxyRequestHeaders
  const getQuery: typeof import('../../node_modules/h3').getQuery
  const getReferencedManagedUploadFilenames: typeof import('../../server/utils/upload-refs').getReferencedManagedUploadFilenames
  const getRequestFingerprint: typeof import('../../node_modules/h3').getRequestFingerprint
  const getRequestHeader: typeof import('../../node_modules/h3').getRequestHeader
  const getRequestHeaders: typeof import('../../node_modules/h3').getRequestHeaders
  const getRequestHost: typeof import('../../node_modules/h3').getRequestHost
  const getRequestIP: typeof import('../../node_modules/h3').getRequestIP
  const getRequestPath: typeof import('../../node_modules/h3').getRequestPath
  const getRequestProtocol: typeof import('../../node_modules/h3').getRequestProtocol
  const getRequestURL: typeof import('../../node_modules/h3').getRequestURL
  const getRequestWebStream: typeof import('../../node_modules/h3').getRequestWebStream
  const getResponseHeader: typeof import('../../node_modules/h3').getResponseHeader
  const getResponseHeaders: typeof import('../../node_modules/h3').getResponseHeaders
  const getResponseStatus: typeof import('../../node_modules/h3').getResponseStatus
  const getResponseStatusText: typeof import('../../node_modules/h3').getResponseStatusText
  const getRouteRules: typeof import('../../node_modules/nitropack/dist/runtime/internal/route-rules').getRouteRules
  const getRouterParam: typeof import('../../node_modules/h3').getRouterParam
  const getRouterParams: typeof import('../../node_modules/h3').getRouterParams
  const getServiceDraftsMap: typeof import('../../server/utils/merged-content').getServiceDraftsMap
  const getSession: typeof import('../../node_modules/h3').getSession
  const getUploadRoot: typeof import('../../server/utils/uploads').getUploadRoot
  const getValidatedQuery: typeof import('../../node_modules/h3').getValidatedQuery
  const getValidatedRouterParams: typeof import('../../node_modules/h3').getValidatedRouterParams
  const handleCacheHeaders: typeof import('../../node_modules/h3').handleCacheHeaders
  const handleCors: typeof import('../../node_modules/h3').handleCors
  const hashPassword: typeof import('../../server/utils/auth-password').hashPassword
  const insertAdmin: typeof import('../../server/utils/admins-store').insertAdmin
  const isCorsOriginAllowed: typeof import('../../node_modules/h3').isCorsOriginAllowed
  const isError: typeof import('../../node_modules/h3').isError
  const isEvent: typeof import('../../node_modules/h3').isEvent
  const isEventHandler: typeof import('../../node_modules/h3').isEventHandler
  const isMethod: typeof import('../../node_modules/h3').isMethod
  const isPreflightRequest: typeof import('../../node_modules/h3').isPreflightRequest
  const isSafeStoredFilename: typeof import('../../server/utils/uploads').isSafeStoredFilename
  const isStream: typeof import('../../node_modules/h3').isStream
  const isValidAdminEmail: typeof import('../../server/utils/admin-email').isValidAdminEmail
  const isWebResponse: typeof import('../../node_modules/h3').isWebResponse
  const lazyEventHandler: typeof import('../../node_modules/h3').lazyEventHandler
  const listAdmins: typeof import('../../server/utils/admins-store').listAdmins
  const listSafeStoredFilenamesInUploadDir: typeof import('../../server/utils/uploads').listSafeStoredFilenamesInUploadDir
  const mergeOverrides: typeof import('../../server/utils/merged-content').mergeOverrides
  const mimeForStoredFile: typeof import('../../server/utils/uploads').mimeForStoredFile
  const nitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin').nitroPlugin
  const normalizeAdminEmail: typeof import('../../server/utils/admin-email').normalizeAdminEmail
  const normalizePersistedProjects: typeof import('../../server/utils/merged-content').normalizePersistedProjects
  const normalizePersistedServices: typeof import('../../server/utils/merged-content').normalizePersistedServices
  const parseCookies: typeof import('../../node_modules/h3').parseCookies
  const promisifyNodeListener: typeof import('../../node_modules/h3').promisifyNodeListener
  const proxyRequest: typeof import('../../node_modules/h3').proxyRequest
  const pruneUnusedManagedUploads: typeof import('../../server/utils/upload-refs').pruneUnusedManagedUploads
  const readBody: typeof import('../../node_modules/h3').readBody
  const readFormData: typeof import('../../node_modules/h3').readFormData
  const readMultipartFormData: typeof import('../../node_modules/h3').readMultipartFormData
  const readRawBody: typeof import('../../node_modules/h3').readRawBody
  const readValidatedBody: typeof import('../../node_modules/h3').readValidatedBody
  const removeResponseHeader: typeof import('../../node_modules/h3').removeResponseHeader
  const resolveStoredImagePath: typeof import('../../server/utils/uploads').resolveStoredImagePath
  const runTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task').runTask
  const sanitizeStatusCode: typeof import('../../node_modules/h3').sanitizeStatusCode
  const sanitizeStatusMessage: typeof import('../../node_modules/h3').sanitizeStatusMessage
  const saveOverridesJson: typeof import('../../server/utils/db').saveOverridesJson
  const saveUploadedImage: typeof import('../../server/utils/uploads').saveUploadedImage
  const sealSession: typeof import('../../node_modules/h3').sealSession
  const send: typeof import('../../node_modules/h3').send
  const sendError: typeof import('../../node_modules/h3').sendError
  const sendIterable: typeof import('../../node_modules/h3').sendIterable
  const sendNoContent: typeof import('../../node_modules/h3').sendNoContent
  const sendProxy: typeof import('../../node_modules/h3').sendProxy
  const sendRedirect: typeof import('../../node_modules/h3').sendRedirect
  const sendStream: typeof import('../../node_modules/h3').sendStream
  const sendWebResponse: typeof import('../../node_modules/h3').sendWebResponse
  const serveStatic: typeof import('../../node_modules/h3').serveStatic
  const setCookie: typeof import('../../node_modules/h3').setCookie
  const setHeader: typeof import('../../node_modules/h3').setHeader
  const setHeaders: typeof import('../../node_modules/h3').setHeaders
  const setResponseHeader: typeof import('../../node_modules/h3').setResponseHeader
  const setResponseHeaders: typeof import('../../node_modules/h3').setResponseHeaders
  const setResponseStatus: typeof import('../../node_modules/h3').setResponseStatus
  const splitCookiesString: typeof import('../../node_modules/h3').splitCookiesString
  const splitOverridesPayload: typeof import('../../server/utils/content-store').splitOverridesPayload
  const toEventHandler: typeof import('../../node_modules/h3').toEventHandler
  const toNodeListener: typeof import('../../node_modules/h3').toNodeListener
  const toPlainHandler: typeof import('../../node_modules/h3').toPlainHandler
  const toWebHandler: typeof import('../../node_modules/h3').toWebHandler
  const toWebRequest: typeof import('../../node_modules/h3').toWebRequest
  const trimEnvValue: typeof import('../../server/utils/admin-email').trimEnvValue
  const tryDeleteStoredUpload: typeof import('../../server/utils/uploads').tryDeleteStoredUpload
  const unsealSession: typeof import('../../node_modules/h3').unsealSession
  const updateAdmin: typeof import('../../server/utils/admins-store').updateAdmin
  const updateSession: typeof import('../../node_modules/h3').updateSession
  const useAppConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config').useAppConfig
  const useBase: typeof import('../../node_modules/h3').useBase
  const useDb: typeof import('../../server/utils/db').useDb
  const useEvent: typeof import('../../node_modules/nitropack/dist/runtime/internal/context').useEvent
  const useNitroApp: typeof import('../../node_modules/nitropack/dist/runtime/internal/app').useNitroApp
  const useRuntimeConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config').useRuntimeConfig
  const useSession: typeof import('../../node_modules/h3').useSession
  const useStorage: typeof import('../../node_modules/nitropack/dist/runtime/internal/storage').useStorage
  const verifyPassword: typeof import('../../server/utils/auth-password').verifyPassword
  const writeEarlyHints: typeof import('../../node_modules/h3').writeEarlyHints
}
// for type re-export
declare global {
  // @ts-ignore
  export type { EventHandler, EventHandlerRequest, EventHandlerResponse, EventHandlerObject, H3EventContext } from '../../node_modules/h3'
  import('../../node_modules/h3')
  // @ts-ignore
  export type { AdminSessionUser } from '../../server/utils/admin-session'
  import('../../server/utils/admin-session')
  // @ts-ignore
  export type { AdminRow } from '../../server/utils/admins-store'
  import('../../server/utils/admins-store')
  // @ts-ignore
  export type { ContentMeta } from '../../server/utils/content-store'
  import('../../server/utils/content-store')
}
export { H3Event, H3Error, appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { useNitroApp } from 'nitropack/runtime/internal/app';
export { useRuntimeConfig, useAppConfig } from 'nitropack/runtime/internal/config';
export { defineNitroPlugin, nitroPlugin } from 'nitropack/runtime/internal/plugin';
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler } from 'nitropack/runtime/internal/cache';
export { useStorage } from 'nitropack/runtime/internal/storage';
export { defineRenderHandler } from 'nitropack/runtime/internal/renderer';
export { defineRouteMeta } from 'nitropack/runtime/internal/meta';
export { getRouteRules } from 'nitropack/runtime/internal/route-rules';
export { useEvent } from 'nitropack/runtime/internal/context';
export { defineTask, runTask } from 'nitropack/runtime/internal/task';
export { defineNitroErrorHandler } from 'nitropack/runtime/internal/error/utils';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/@nuxt/nitro-server/dist/runtime/utils/paths';
export { defineAppConfig } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/node_modules/@nuxt/nitro-server/dist/runtime/utils/config';
export { trimEnvValue, normalizeAdminEmail, isValidAdminEmail } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/admin-email';
export { createAdminSession, destroyAdminSession, getAdminToken, assertAdmin } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/admin-session';
export { listAdmins, countAdmins, getAdminById, getAdminWithHashByEmail, insertAdmin, updateAdmin, deleteSessionsForAdmin, deleteOtherSessionsForAdmin, deleteAdmin } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/admins-store';
export { hashPassword, verifyPassword } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/auth-password';
export { CONTENT_META_KEY, splitOverridesPayload, applyObjectPatch } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/content-store';
export { useDb, getOverridesJson, saveOverridesJson } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/db';
export { getMergedServices, getMergedProjects, getServiceDraftsMap, getProjectDraftsMap, mergeOverrides, normalizePersistedServices, normalizePersistedProjects } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/merged-content';
export { collectManagedUploadFilenamesFromString, collectManagedUploadFilenamesFromJson, getReferencedManagedUploadFilenames, pruneUnusedManagedUploads } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/upload-refs';
export { getUploadRoot, ensureUploadDir, isSafeStoredFilename, extForImageMime, assertImageSize, saveUploadedImage, resolveStoredImagePath, mimeForStoredFile, createImageReadStream, listSafeStoredFilenamesInUploadDir, tryDeleteStoredUpload, deleteUploadFilesNotIn } from 'C:/Users/amirk/OneDrive/Desktop/UrbanTechStroy/server/utils/uploads';