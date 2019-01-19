<template>
  <div class="container mt-3">
    <div class="row">
        <st-artist-card v-if="getArtists.length"
                               v-for="(artist) in getArtists"
                               :key="artist.id"
                               :id="artist.mbid"
                               :name="artist.name"
                               :musicLink="artist.url"
                               :imageUrl="artist.image[4]['#text']">
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
          this.artists = response.artists.artist.filter(x => x.mbid.length > 0);
        });
      },
    },
  };
</script>
