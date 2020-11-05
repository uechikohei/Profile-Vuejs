import Vue from 'vue';
import Router from 'vue-router';

import Top from '@/components/Top';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

//プラグインを適用する
Vue.use(Router)

export default new Router({
  //URLから、#を消す
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/Works',
      component: Works
    },
    {
      path: '/Skills',
      component: Skills
    },
    {
      path: '/Contact',
      component: Contact
    },
    {
      path: '/Footer',
      component: Footer
    }
  ]
});
