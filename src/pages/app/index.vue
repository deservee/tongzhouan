<template>
  <div id="app">
    <Head />
    <router-view/>
    <Footer />
    <!-- <Must /> -->
  </div>  
</template>

<script>
// import Head from 'components/head'
// import Footer from 'components/footer'
import Head from '../../components/head'
import Footer from '../../components/footer'
// import Must from 'components/must'
export default {
  name: 'App',
  components: {
    Head,
    Footer,
    // Must,     
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
