import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/page/:page',
      name: 'home-page',
      component: HomeView,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditView.vue'),
    },
    {
      path: '/add',
      name: 'create',
      component: () => import('../views/CreateView.vue'),
    },
  ],
});

export default router;
