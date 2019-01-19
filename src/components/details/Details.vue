<template>
<div>
    <b-card :title="this.artist.name"
            :img-src=getImage
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30%; margin: 0 auto"
            class="mb-2">
        <p class="card-text" v-html=getBio>
        </p>
    </b-card>
    <b-button v-on:click="goBack" style="float: right">Go Back</b-button>
  </div>
</template>
<script>
  import service from '../../api/data-service';

  export default {
    name: 'st-details-view',
    props: {
      id: String,
    },
    data() {
      return {
        artist: {},
      };
    },
    created() {
      this.getArtistDetails();
    },
    computed: {
      getImage() {
        if (this.artist.image !== undefined) {
          return this.artist.image[this.artist.image.length - 1]['#text'];
        }
        return null;
      },
      getBio() {
        if (this.artist.bio !== undefined) {
          return this.artist.bio.summary;
        }
        return null;
      },
    },
    methods: {
      getArtistDetails() {
        service.getArtistDetails({mbid: this.$route.params.id}, (response) => {
          this.artist = response.artist;
        });
      },
      goBack() {
        this.$router.go(-1);
      },
    },
  };
</script>
