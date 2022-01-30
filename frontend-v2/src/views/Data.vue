<template>
  <div class="container">
    <h1>Master Data Table</h1>


    <table class="table table-striped table-borders">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="user_alias in User" v-bind:key="user_alias._id">
          <td> {{user_alias._id}}</td>
          <td>{{user_alias.item}}</td>
          <td>{{user_alias.price}}</td>
          <td>{{user_alias.quantity}}</td>
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
  },
  methods() {
    axios.delete('http://localhost:3000/record')
    .then((resp) => {
      console.log(resp.data);
      this.User = resp.data;
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

</script>

<style>

</style>
