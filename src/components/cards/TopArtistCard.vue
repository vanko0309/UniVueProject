<template>
  <div>
    <b-card :title=name
            :img-src=getImage
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            v-on:click="showDetails()">
      <p class="card-text">
        To listen to {{ name }}'s music click the button below.
      </p>
    </b-card>
    <b-button :href=musicLink target='_blank' variant="primary">{{ name }}'s Music</b-button>
  </div>
</template>

<script>
  import './style.css';

  export default {
    name: 'st-artist-card',
    props: {
      id: String,
      name: String,
      musicLink: String,
      imageUrl: String,
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
    methods: {
      showDetails() {
        this.$router.push({path: `/Details/${this.id}`});
      },
    },
  };
</script>
