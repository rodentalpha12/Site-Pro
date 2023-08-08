<template>
  <div>
    <br/>
    <div class="alert alert-primary" role="alert">
      Programmation back
    </div>
    <div class="group-badge">
      <span class="badge text-bg-success">Javascript</span>
      <span class="badge text-bg-success">NodeJS</span>
      <span class="badge text-bg-success">TypeScript</span>
      <span class="badge text-bg-success">PHP</span>
      <span class="badge text-bg-success">Shell</span>
      <span class="badge text-bg-success">Electron (Application de bureau)</span>
    </div>
    <hr/>
    <div class="alert alert-primary" role="alert">
      Programmation front
    </div>
    <div class="group-badge">
      <span class="badge text-bg-success">Javascript</span>
      <span class="badge text-bg-success">CSS</span>
      <span class="badge text-bg-success">HTML</span>
    </div>
    <hr/>
    <div class="alert alert-primary" role="alert">
      Framework front
    </div>
    <div class="group-badge">
      <span class="badge text-bg-success">Bootstrap (HTML,CSS)</span>
      <span class="badge text-bg-success">Photon (HTML,CSS) </span>
      <span class="badge text-bg-success">jQuery</span>
      <span class="badge text-bg-success">jQuery UI</span>
      <span class="badge text-bg-success">VueJS</span>
    </div>
    <hr/>
    <div class="alert alert-primary" role="alert">
      Base de données
    </div>
    <div class="group-badge">
      <span class="badge text-bg-success">MySQL</span>
      <span class="badge text-bg-success">SQLite</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
	name: 'profil-skill',
    components:{
    },
    created () {
        this.$root.h1_title = 'Comptétences';
    }
}
</script>
