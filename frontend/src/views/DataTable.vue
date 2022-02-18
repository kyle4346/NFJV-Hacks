<template>
  <div class="container">
    <h1>Master Data Table</h1>


    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>RED</th>
          <th>IR</th>
          <th>HR</th>
          <th>HR Valid</th>
          <th>SPO2</th>
          <th>SPO2 Valid</th>
          <th>Actions</th>
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

          <td><img alt="trash" class="ic" src="../assets/trash.jpg">
          <img alt="Add" class="ic2" src="../assets/Add.png">
          <img alt="info" class="ic3" src="../assets/info.png"></td>
          
          

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name:'DataTable',
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

<style scoped>
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: center;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.ic {
  width: 64px;
  height: 64px;
}
.ic2 {
  width: 64px;
  height: 64px;
}
.ic3 {
  width: 64px;
  height: 64px;
}
</style>