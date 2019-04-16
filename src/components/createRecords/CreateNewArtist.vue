<template>
  <div class="container mt-3">
    <div class="row">
      <form id="app" @submit="submitForm" method="post">
        <p>
          <label for="name">Name</label>
          <input id="name" v-model="artist.name" type="text" name="name">
        </p>

        <p>
          <label for="imageUrl">Image url</label>
          <input id="imageUrl" v-model="artist.image.url" type="text" name="imageUrl">
        </p>
        <p>
          <label for="imageText">Image text</label>
          <input id="imageText" v-model="artist.image.text" type="text" name="imageText">
        </p>

        <p>
          <label for="bio">Bio</label>
          <input id="bio" v-model="artist.bio" type="textarea" name="bio">
        </p>

        <p>
          <label for="url">Website</label>
          <input id="url" v-model="artist.url" name="url">
        </p>

        <p>
          <input v-on:click="submitForm" type="button" value="Submit">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import service from "../../api/data-service";
import utils from "../../utils";

export default {
  name: "st-create-new-artist",
  components: {},
  data() {
    return {
      artist: {}
    };
  },
  computed: {},
  created() {
    this.artist = {
      url: undefined,
      image: {
        url: undefined,
        text: undefined
      },
      bio: undefined,
      name: undefined,
      playcount: utils.randomNumber().toString()
    };
  },
  methods: {
    submitForm() {
      service.createNewArtist(this.artist, (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      })
    }
  }
};
</script>
