import MainLayout from '@/layouts/MainLayout/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@/pages/Home/index.vue'),
      },
    ],
  },
];

export default routes;
