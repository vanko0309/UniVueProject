 /* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/home';
import TopSongs from '../components/topSongs/TopSongs';
import Details from '../components/details/Details';
import CreateNewArtist from '../components/createRecords/CreateNewArtist';
import CreateNewTrack from '../components/createRecords/CreateNewTrack';

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
    {
      path: '/AddArtist',
      name: 'Add Artist',
      components: {
        navigation: CreateNewArtist,
      },
    },
    {
      path: '/AddTrack',
      name: 'Add Track',
      components: {
        navigation: CreateNewTrack,
      },
    },
  ],
});
