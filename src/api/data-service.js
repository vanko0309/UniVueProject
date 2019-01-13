import networkClient from './network-client';

export default {
  getTopArtists(success, failure) {
    networkClient.get('2.0/?method=chart.gettopartists&format=json', success, failure, '');
  },
  getTopAlbums(params, success, failure) {
    networkClient.get('2.0/?method=artist.gettopalbums&artist=cher&format=json', success, failure, params);
  },
  getTopSongs(success, failure) {
    networkClient.get('2.0/?method=chart.gettoptracks&format=json', success, failure, '');
  },
};
