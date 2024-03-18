import { createRouter, createWebHistory } from "vue-router";
import TabNow from '@/components/tabs/tab-now.vue';
import TabDetails from '@/components/tabs/tab-details.vue';
import TabForecast from '@/components/tabs/tab-forecast.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'tab-now',
      component: TabNow,
    },
    {
      path: '/details',
      name: 'tab-details',
      component: TabDetails,
    },
    {
      path: '/forecast',
      name: 'tab-forecast',
      component: TabForecast,
    }
  ]
});

export default router;