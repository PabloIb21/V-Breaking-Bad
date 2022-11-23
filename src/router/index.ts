import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/shared/pages/HomePage.vue';
import AboutPage from '@/shared/pages/AboutPage.vue';
import { characterRoute } from '@/characters/router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },

    // Characters
    {
      ...characterRoute,
      path: '/characters',
    },
    // {
    //   path: '/characters',
    //   name: 'characters',
    //   component: () => import('@/characters/layout/CharacterLayout.vue')
    // },

    // Default
    { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
  ]
});

export default router;
