const routes = [
    {
        path: '/',
        permission: [],
        Component: require('pages/Home').default
    },
    {
        path: '/products',
        permission: [],
        Component: require('pages/Products').default
    },
    {
        path: '/login',
        permission: [],
        Component: require('pages/Login').default
    },
    {
        path: '/forgot',
        permission: [],
        Component: require('pages/Forgot').default
    },
    {
        path: '/register',
        permission: [],
        Component: require('pages/Login').default
    },
    {
        path: '/contacts',
        permission: [],
        Component: require('pages/Login').default
    },
    {
        path: '/member',
        permission: ['customer', 'affiliate', 'admin'],
        Component: require('pages/Login').default
    },
    {
        path: '/affiliate',
        permission: ['customer', 'affiliate', 'admin'],
        Component: require('pages/Login').default
    }
]

export default routes;