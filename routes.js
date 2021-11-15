const Layout = () => import('./client.vue');
const Index = () => import('./pages/index.vue');

export default () => [
    {
        path: '/',
        component: Layout,
        props: {testProperty: 'Hello world'},
        children: [
            {
                path: '',
                component: Index
            }
        ]
    },
    {
        path: '/external/',
        component: Layout, //TODO: it can be replaced by any ExternalLayout.vue
        props: {testProperty: 'Hello external world'},
        children: [
            {
                path: '',
                component: Index
            }
        ]
    }
];
