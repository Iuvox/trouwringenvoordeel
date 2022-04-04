import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'
import { gtmEvent } from '../plugins/gtm'

const components = {
    home: () =>
        import ('/src/views/HomeView.vue'),
    winactie: () =>
        import ('/src/views/WinactieView.vue'),
    winactiesucces: () => import('/src/views/Winactie-Succes.vue')
}

const routes = [{
        path: '/',
        name: 'Home',
        component: components.home
    },
    {
        path: '/shoptegoedwinnen',
        name: 'Win Shoptegoed',
        component: components.winactie,
        meta: {
            title: 'Win €250 shoptegoed!'
        }
    },
    {
        path: '/shoptegoedwinnen-succes',
        name: 'Winactie Succes',
        component: components.winactiesucces
    }
]


const createRouter = () => {
    return _createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition && !
                import.meta.env.SSR) {
                return savedPosition
            } else {
                return { top: 0 }
            }
        }
    })
}

const routerBeforeEach = async(to, from) => {}

const routerAfterEach = (to, from) => {
    if(!import.meta.env.SSR) {
        fbq('track', 'PageView');
    }
}

export { createRouter, routerBeforeEach, routerAfterEach, components, routes }