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
                component: Index,

            }
        ]
    },
    {
        path: '/',
        component: Layout,
        props: {testProperty: 'Hello external world'},
        children: [
            {
                path: 'external/',
                component: Index //TODO: in real app it is another page component
            }
        ]
    }
];
