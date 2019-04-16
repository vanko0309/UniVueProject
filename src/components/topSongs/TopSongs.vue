<template>
  <div class="container mt-3">
    <div class="row">
      <b-input-group>
        <b-form-input v-model="searchedWord" type="text"></b-form-input>

        <b-input-group-append>
          <b-btn variant="outline-primary" v-on:click="search">Search</b-btn>
          <b-btn variant="outline-danger" v-on:click="clearResult">Clear</b-btn>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div class="row" v-if="getSongs.length">
        <st-song-card 
                    v-for="(song) in getSongs"
                    :key="song.id"
                    :id="song.mbid"
                    :name="song.name"
                    :imageUrl="song.image.url"
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
  import './style.css';

  export default {
    name: 'st-song',
    components: {
      'st-song-card': StSongCard,
    },
    data() {
      return {
        songs: [],
        searchedWord: undefined,
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
          this.songs = response.data.tracks;
        });
      },
      search() {
        service.getTopSongs((response) => {
          const songs = response.data.tracks;
          const searchedResult = songs.filter(x => x.name.toLowerCase().includes(this.searchedWord.toLowerCase()));
          this.songs = searchedResult;
        });
      },
      clearResult() {
        this.getTopSongs();
      },
    },
  };
</script>
