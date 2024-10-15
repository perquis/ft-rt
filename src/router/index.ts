import { createRouter, createWebHistory } from 'vue-router';
import UsersListView from '../views/UsersListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users-list',
      component: UsersListView,
    },
    {
      path: '/page/:page',
      name: 'users-list-page',
      component: UsersListView,
    },
    {
      path: '/edit/:id',
      name: 'edit-user',
      component: () => import('../views/EditUserDetailsView.vue'),
    },
    {
      path: '/add',
      name: 'add-user',
      component: () => import('../views/AddUserView.vue'),
    },
  ],
});

export default router;
