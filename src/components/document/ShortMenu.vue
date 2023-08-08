<template>
    <nav class="nav-group">
        <a v-bind:class="$route.path == '/' ? 'nav-group-item active' : 'nav-group-item'">
            <router-link to="/" class="icon icon-home" title="Présentation"></router-link>
        </a>
        <a v-bind:class="$route.path == '/comptetence' ? 'nav-group-item active' : 'nav-group-item'">
            <router-link to="/comptetence" class="icon icon-tools" title="Comptétence"></router-link>
        </a>
        <a v-bind:class="$route.path == '/formation' ? 'nav-group-item active' : 'nav-group-item'">
            <router-link to="/formation" class="icon icon-book" title="Formation"></router-link>
        </a>
        <a v-bind:class="$route.path == '/experience' ? 'nav-group-item active' : 'nav-group-item'">
           <router-link to="/experience" class="icon icon-briefcase" title="Expérience"></router-link>
        </a>
        <a v-bind:class="$route.path == '/projets' ? 'nav-group-item active' : 'nav-group-item'">
            <router-link to="/projets" class="icon icon-folder" title="Projets"></router-link>
        </a>
        <span class="nav-group-item">
            <a class="icon icon-mail" href="mailto:p.margalef@zan-softwares.io" title="Mail"></a>
            
        </span>
    </nav>
</template>
<script lang="ts">
export default {
    name: 'document-short-menu'
}
</script>