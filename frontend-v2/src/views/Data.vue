<template>
  <div class="container">
    <h1>Master Data Table</h1>


    <table class="table table-striped table-borders">
      <thead>
        <tr>
          <th>ID</th>
          <th>RED</th>
          <th>IR</th>
          <th>HR</th>
          <th>HR Valid</th>
          <th>SPO2</th>
          <th>SPO2 Valid</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="user_alias in User" v-bind:key="user_alias._id">
          <td> {{user_alias._id}}</td>
          <td> {{user_alias.red}}</td>
          <td>{{user_alias.ir}}</td>
          <td>{{user_alias.HR}}</td>
          <td>{{user_alias.HRvalid}}</td>
          <td>{{user_alias.SPO2}}</td>
          <td>{{user_alias.SPO2valid}}</td>

          <td><img alt="trash" src="../assets/trash.jpg">
          <img alt="Add" src="../assets/Add.png">
          <img alt="info" src="../assets/info.png" >
          </td>
          

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name:'Data',
  data() {
    return{
      User: [],
    }
  },
  mounted() {
    axios.get('http://localhost:3000/record')
    .then((resp) => {
      console.log(resp.data);
      this.User = resp.data;
    })
    .catch((error) => {
      console.log(error)
    })

    axios.delete()
    

  }
}

</script>

<style>

</style>
