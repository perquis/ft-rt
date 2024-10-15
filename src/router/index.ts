import { createRouter, createWebHistory } from 'vue-router';
import GetInternsListView from '../views/GetInternsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GetInternsListView,
    },
    {
      path: '/page/:page',
      name: 'home-page',
      component: GetInternsListView,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/CreateOrEditInternView.vue'),
    },
    {
      path: '/add',
      name: 'create',
      component: () => import('../views/CreateOrEditInternView.vue'),
    },
  ],
});

export default router;
