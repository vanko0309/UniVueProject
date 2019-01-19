<template>
  <div>
  <b-card :title=name
          img-top
          :img-src=getImage
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      This song is from {{ artistName }}.
      Played: {{ timesPlayed }}
    </p>
    <b-button :href=songUrl target='_blank' variant="primary">Click to play</b-button>
  </b-card>
  </div>
</template>

<script>
  export default {
    name: 'st-song-card',
    props: {
      id: String,
      name: String,
      imageUrl: String,
      timesPlayed: String,
      songUrl: String,
      artistName: String,
    },
    computed: {
      getImage() {
        let imageUrl = this.imageUrl;
        if (!imageUrl) {
          imageUrl = 'https://advokatarnaudov.com/wp-content/uploads/2015/11/thumbnail-default.jpg';
        }

        return imageUrl;
      },
    },
  };
</script>
