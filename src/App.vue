<template>
  <div class="window">
    <Header />
    <Body />
    <Footer />
  </div>  
</template>
<script lang="ts">
import Header from './components/document/Header.vue';
import Body from './components/document/Body.vue';
import Footer from './components/document/Footer.vue';

export default {
	name: 'app-vue',
  components:{
      Header,
      Body,
      Footer
  },
  data () {
    return {
      title:'',
      h1_title:''
    }
  }
}
</script>
