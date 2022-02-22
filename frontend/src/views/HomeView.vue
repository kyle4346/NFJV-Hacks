<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <h1>Team 6 Homepage</h1>

    <h2> Navigation information:</h2>
    <ul>
      <ol>Home: Talks about how to navigate the website and our interest in the project implementation</ol>
      <ol>About: Talks about the Team members and their roles</ol>
      <ol>Data: Displays the master data table taken from the Mongodb database directly</ol>
      <ol>Simple Data: Displays the local table taken from the arduino either wirelessly or through usb</ol>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>
