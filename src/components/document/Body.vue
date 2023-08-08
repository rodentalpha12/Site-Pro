<template>
    <div class="window-content">
        <div class="pane-group">
            <div v-if="!short_menu_enabled">
                <img id="pmargalef-photo" width="150" src="/img/photo.jpg"/>
                <Menu/><br/>
                <nav class="nav-group" style="text-align: center;">
                    <a v-on:click="enableShortMenu">
                        <span class="badge bg-primary"><span class="icon icon-left-bold" title="Réduire"></span></span>
                    </a>
                </nav>
            </div>
            <div class="pane-sm sidebar short-menu" v-else>
                <ShortMenu/><br/>
                <nav class="nav-group" style="text-align: center;">
                    <a v-on:click="enableShortMenu">
                        <span class="badge bg-primary"><span class="icon icon-right-bold" title="Agrandir"></span></span>
                    </a>
                </nav>
            </div>
            <div class="pane" id="document-body">
                <div id="h1-container">
                    <h1>{{computeH1Title()}}</h1>
                </div>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Menu from './Menu.vue';
import ShortMenu from './ShortMenu.vue';

export default {
    name: 'document-body',
    components:{
        Menu,
        ShortMenu
    },
    data () {
        return {
            short_menu_enabled : false
        }
    },
    methods:{
        computeH1Title():string {
            return this.$root.h1_title;
        },
        enableShortMenu: function () {
            if(this.short_menu_enabled){
                this.short_menu_enabled = false;
            }
            else{
                this.short_menu_enabled = true;
            }
        }
    }
}
</script>