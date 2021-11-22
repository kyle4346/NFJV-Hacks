<template>
  <div class="data" align="center">
    <table>
  <tr>
    <th>ID|</th>
    <th>First Name|</th>
    <th>Last Name|</th>
    <th>Heart Rate|</th>
    <th>Oxygen Saturation</th>
  </tr>
  <tr>
    
  </tr>
  <tr>
    
  </tr>
</table>

    <div id="app">
    <p>
      <span class="pg" v-for="paragraph in letter" :key="paragraph">
          {{paragraph}}
      </span>
    </p>
    </div>
  </div>

  
</template>

<script>
import Letter from '../assets/H3.txt'

export default {
  name: 'App',
  data: function () {
      return {
          letter: Letter.split("\n\n")
      }
  },
  components: {
  }
}
</script>

<style>
.pg {
    display: block;
}
</style>

