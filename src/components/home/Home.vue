<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-8">
      </div>
      <div class="col">
        {{ artists ? artists[0].name : '' }}
      </div>
    </div>
  </div>
</template>

<script>
  import service from '../../api/data-service';

  export default {
    name: 'st-home',
    components: {
    },
    props: {
      artists: [],
    },
    created() {
      this.getTopArtists();
    },
    methods: {
      getTopArtists() {
        service.getTopArtists((response) => {
          this.$artists = response.artists; console.log(this.$artists);
        });
      },
    },
  };
</script>
