<template>
    <div class="col-lg-12 text-left text-lg-start">
        <p class="col-lg-12 fs-8"><br/>
            Développeur Web depuis 2012, passionné par l'informatique et autodidacte depuis mes 15ans.<br/><br/>
Après des débuts PHP MySQL, mon orientation s'est portée sur Node.js et TypeScript<br/><br/>
Je pratique également adminstration et maintenance sur ce panel.<br/>
Installation, configuration, maintenance sur les logiciels<br/><br/>
Sur mon temps libre, je développe de l'outillage ainsi qu'un framework personnel de gestion et administration complète (Serveur d'api, Script...)
        </p>
    </div>
</template>
<script lang="ts">


export default {
	name: 'profil-home',
    components:{
    },
    created () {
        this.$root.h1_title = 'Profil Web';
        
    }
}
</script>
