<template>
  <div>
    <b-navbar type="dark" variant="primary" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/TopSongs">Top songs</b-nav-item>
          <b-nav-item to="/AddArtist">Add artist</b-nav-item>
          <b-nav-item to="/AddTrack">Add track</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {

  };
</script>
