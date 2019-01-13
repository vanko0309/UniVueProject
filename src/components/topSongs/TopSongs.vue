<template>
  <div class="container mt-3">
    <div class="row">
        <st-song-card v-if="getSongs.length"
                               v-for="(song) in getSongs"
                               :key="song.id"
                               :id="song.mbid"
                               :name="song.name"
                               :songUrl="song.url"
                               :artistName="song.artist.name"
                               :timesPlayed="song.playcount">
        </st-song-card>
    </div>
  </div>
</template>

<script>
  import service from '../../api/data-service';
  import StSongCard from '../cards/TopSongCard';

  export default {
    name: 'st-song',
    components: {
      'st-song-card': StSongCard,
    },
    data() {
      return {
        songs: [],
      };
    },
    computed: {
      getSongs() {
        return this.songs;
      },
    },
    created() {
      this.getTopSongs();
    },
    methods: {
      getTopSongs() {
        service.getTopSongs((response) => {
          this.songs = response.tracks.track;
        });
      },
    },
  };
</script>
