import gql from 'graphql-tag';
import graphqlClient from './graphql';

export default {
    async getArtistList(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        artists {
                            ${params}
                        }
                    }
                `
            });

            success(response.data);
        } catch (error) {
            console.log(error);
        }
    },
    async getTopSongs(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        tracks {
                            ${params}
                        }
                    }
                `
            });

            success(response);
        } catch (error) {
            console.log(error);
        }
    },
    async getArtistDetails(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        artist {
                            ${params}
                        }
                    }
                `
            });

            success(response);
        } catch (error) {
            console.log(error);
        }
    },
    async createNewArtist(variables, success, failure) {
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`mutation($bio: String, $image: ImageInput, $name: String, $playcount: String, $url: String) {
                    addArtist(bio: $bio, url: $url, name: $name, image: $image, playcount: $playcount){
                        _id name bio
                    }
                }`,
                variables,
            });

            success(response);
        } catch (error) {
            console.log(error);
        }
    },
    async createNewTrack(variables, success, failure) {
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`mutation($artist: ArtistInput, $image: ImageInput, $name: String, $playcount: String, $url: String) {
                    addTrack(artist: $artist, url: $url, name: $name, image: $image, playcount: $playcount){
                        _id name
                    }
                }`,
                variables,
            });

            success(response);
        } catch (error) {
            console.log(error);
        }
    },
}