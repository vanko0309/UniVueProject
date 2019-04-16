<template>
  <div class="container mt-3">
    <div class="row">
      <form id="app" @submit="submitForm" method="post">
        <p>
          <label for="name">Name</label>
          <input id="name" v-model="track.name" type="text" name="name">
        </p>

        <p>
          <label for="bio">Artist</label>
          <select v-model="artist">
            <option disabled value="">Please select one</option>
            <option v-for="artist in artists" :value="artist" v-bind:key="artist._id">{{artist.name}}</option>
          </select>
        </p>
        
        <p>
          <label for="imageUrl">Image url</label>
          <input id="imageUrl" v-model="image.url" type="text" name="imageUrl">
        </p>
        <p>
          <label for="imageText">Image text</label>
          <input id="imageText" v-model="image.text" type="text" name="imageText">
        </p>

        <p>
          <label for="url">Website</label>
          <input id="url" v-model="track.url" name="url">
        </p>

        <p>
          <input v-on:click="submitForm" type="button" value="Submit">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  import service from '../../api/data-service';
  import utils from '../../utils.js';

  export default {
    name: 'st-create-new-track',
    components: {
    },
    data() {
      return {
        artists: [],
        artist: {},
        image: {},
        track: {}
      };
    },
    computed: {
    },
    created() {
        this.artist = this.getTopArtists();

        this.track = {
        artist: undefined,
        image: {
            url: undefined,
            text: undefined
        },
        name: undefined,
        playcount: utils.randomNumber().toString(),
        url: undefined
        }
    },
    methods: {
      getTopArtists() {
        service.getTopArtists((response) => {
          this.artists = response.artists;
        });
      },
      submitForm() {
        let track = this.track;
        let artist = this.artist;
        let image = this.image;

        track.artist = {
            url: artist.url,
            image: {
                url: artist.image.url,
                text: artist.image.text
            },
            bio: artist.bio,
            name: artist.name,
            playcount: artist.playcount
        };

        track.image = {
            url: image.url,
            text: image.text
        };
        
        service.createNewTrack(track, (response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        })
    }
    },
  };
</script>
