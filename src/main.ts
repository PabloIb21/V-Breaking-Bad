import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';
import router from './router';
import './assets/main.css';

const app = createApp(App);

import '@/store/characters.store';

// app.use(VueQueryPlugin);
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120, // 2 minutos
        refetchOnReconnect: 'always',
      },
    }
  }
});

app.use(router);

app.mount('#app')
