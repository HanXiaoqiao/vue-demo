<template>
  <div id="app">
    <div class="all">
      <Top></Top>
      <About></About>
      <Works></Works>
      <Edu></Edu>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  </div>
</template>
<style>
  .all{
    max-width:1500px;
    margin:0 auto;
  }
</style>
<script>
  import Top from './components/Top.vue'
  import About from './components/About.vue'
  import Works from './components/Works.vue'
  import Edu from './components/Education.vue'
  import Experience from './components/Experience.vue'
  import Contact from './components/Contact.vue'
  export default {
    name:"app",
    components:{Top,About,Works,Edu,Experience,Contact}
  }
</script>
