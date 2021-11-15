const Layout = () => import('./client.vue');
const Index = () => import('./pages/index.vue');

export default () => [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Index,
                props: {testProperty: 'Hello world'},
            }
        ]
    },
    {
        path: '/external/',
        component: Layout, //TODO: it can be replaced by any ExternalLayout.vue
        children: [
            {
                path: '',
                props: {testProperty: 'Hello external world'},
                component: Index
            }
        ]
    }
];
