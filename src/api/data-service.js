import networkClient from './network-client';
import graphqlService from './graphql-service';

export default {
  getTopArtists(success, failure) {
    graphqlService.getArtistList('_id url name image { url text } playcount bio', success, failure);
  },
  getTopSongs(success, failure) {
    graphqlService.getTopSongs('_id artist { _id url name image { url text } playcount bio } image { url text } name playcount url', success, failure)
  },
  getArtistDetails(params, success, failure) {
    graphqlService.getArtistDetails('_id url name image { url text } playcount bio', success, failure);
  },
  createNewArtist(params, success, failure){
    graphqlService.createNewArtist(params, success, failure);
  },
  createNewTrack(params, success, failure) {
    graphqlService.createNewTrack(params, success, failure);
  }
};
