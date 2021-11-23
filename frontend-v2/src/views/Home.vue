<template>
  <div class="home" align="center">
    <body background="2.jpg"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to SmartSoft BioInformatics"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
