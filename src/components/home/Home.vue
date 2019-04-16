<template>
  <div class="container mt-3">
    <div class="row" v-if="getArtists.length">
        <st-artist-card 
          v-for="(artist) in getArtists"
          :key="artist._id"
          :id="artist._id"
          :name="artist.name"
          :musicLink="artist.url"
          :imageUrl="artist.image.url">
        </st-artist-card>
    </div>
  </div>
</template>

<script>
  import service from '../../api/data-service';
  import StArtistCard from '../cards/TopArtistCard';

  export default {
    name: 'st-home',
    components: {
      'st-artist-card': StArtistCard,
    },
    data() {
      return {
        artists: [],
      };
    },
    computed: {
      getArtists() {
        return this.artists;
      },
    },
    created() {
      this.getTopArtists();
    },
    methods: {
      getTopArtists() {
        service.getTopArtists((response) => {
          this.artists = response.artists;
        });
      },
    },
  };
</script>
