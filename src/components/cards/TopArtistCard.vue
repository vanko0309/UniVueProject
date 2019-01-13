<template>
  <div>
  <b-card :title=name
          :img-src=getImage
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      To listen to {{ name }}'s music click the button below.
    </p>
    <b-button :href=musicLink target='_blank' variant="primary">{{ name }}'s Music</b-button>
  </b-card>
  </div>
</template>

<script>
  export default {
    name: 'st-artist-card',
    props: {
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
  };
</script>
