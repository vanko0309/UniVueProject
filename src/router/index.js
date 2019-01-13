 /* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/home';
import TopSongs from '../components/topSongs/TopSongs';
import Top from '../components/cards/TopArtistCard';

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
        navigation: Top,
      },
    },
    // {
    //   path: '/movies',
    //   name: 'Movies',
    //   components: {
    //     navigation: Navigation,
    //     default: Movies,
    //   },
    // },
    // {
    //   path: '/series',
    //   name: 'Series',
    //   components: {
    //     navigation: Navigation,
    //     default: Series,
    //   },
    // },
    // {
    //   path: '/profile',
    //   name: 'Profile',
    //   components: {
    //     navigation: Navigation,
    //     default: Profile,
    //   },
    // },
  ],
});
