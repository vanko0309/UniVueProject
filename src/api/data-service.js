import networkClient from './network-client';

export default {
  getTopArtists(success, failure) {
    networkClient.get('2.0/?method=chart.gettopartists&format=json', success, failure, '');
  },
  getTopSongs(success, failure) {
    networkClient.get('2.0/?method=chart.gettoptracks&format=json', success, failure, '');
  },
  getArtistDetails(params, success, failure) {
    networkClient.get('2.0/?method=artist.getInfo&format=json', success, failure, params);
  },
};
