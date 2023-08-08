<template>
    <nav class="nav-group">
        <a v-bind:class="$route.path == '/' ? 'nav-group-item active' : 'nav-group-item'">
            <span class="icon icon-home"></span>
            <router-link to="/">Accueil</router-link>
        </a>
        <a v-bind:class="$route.path == '/comptetence' ? 'nav-group-item active' : 'nav-group-item'">
            <span class="icon icon-tools"></span>
            <router-link to="/comptetence">Comptétences</router-link>
        </a>
        <!-- <a v-bind:class="$route.path == '/formation' ? 'nav-group-item active' : 'nav-group-item'">
            <span class="icon icon-book"></span>
            <router-link to="/formation">Formation</router-link>
        </a> -->
        <a v-bind:class="$route.path == '/experience' ? 'nav-group-item active' : 'nav-group-item'">
            <span class="icon icon-briefcase"></span>
            <router-link to="/experience">Expérience</router-link>
        </a>
        <a v-bind:class="$route.path == '/projets' ? 'nav-group-item active' : 'nav-group-item'">
            <span class="icon icon-folder"></span>
            <router-link to="/projets">Projets</router-link>
        </a>
        <span class="nav-group-item">
            <span class="icon icon-mail"></span>
            <a href="mailto:p.margalef@zan-softwares.io">Contact</a>
        </span>
        <span class="nav-group-item">
            <span class="icon icon-phone"></span>
            06 59 19 26 36
        </span>
        <span class="nav-group-item">
            <span class="icon icon-user"></span>
            RQTH
        </span>
    </nav>
</template>
<script lang="ts">
export default {
    name: 'document-menu'
}
</script>