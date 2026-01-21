import { StartServer, createRequestHandler } from '@tanstack/react-start/server'
import { defaultStreamHandler } from '@tanstack/react-start/server'
import { getRouter } from './router'

export const render = createRequestHandler({
    createRouter: getRouter,
    getRouterManifest: () => import('./routeTree.gen'),
})

export const requestHandler = createRequestHandler({
    createRouter: getRouter,
    getRouterManifest: () => import('./routeTree.gen'),
})(defaultStreamHandler)
