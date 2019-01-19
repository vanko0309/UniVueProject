 /* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/home';
import TopSongs from '../components/topSongs/TopSongs';
import Details from '../components/details/Details';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
      },
    },
    {
      path: '/TopSongs',
      name: 'Top Songs',
      components: {
        navigation: TopSongs,
      },
    },
    {
      path: '/Details/:id',
      name: 'Details',
      components: {
        navigation: Details,
      },
    },
  ],
});
