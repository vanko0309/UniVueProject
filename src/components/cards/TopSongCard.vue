<template>
  <div>
  <b-card :title=name
          img-top
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
      timesPlayed: String,
      songUrl: String,
      artistName: String,
    },
    computed: {
    },
  };
</script>
