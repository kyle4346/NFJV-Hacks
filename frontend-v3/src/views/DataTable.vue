<template>
    <TableData :columns="columns" :entries="entries"/>
</template>

<script>
import TableData from '../components/table/TableData.vue'
import { $array, $object } from '../assets/alga.min.js'

export default {
    name: 'DataTable',
  data() {
    return {
      columns: [
        { name: 'id', text: 'ID' },
        { name: 'name', text: 'Name' },
        { name: 'position', text: 'Position' },
        { name: 'office', text: 'Office' },
        { name: 'extension', text: 'Extension' },
        { name: 'startdate', text: 'Start Date' },
        { name: 'salary', text: 'Salary' },
      ],
      entries: []
    },
    components: {
        TableData
    },
    created() {
        this.getAllEmployees().then(res => {
            this.entires = res.data
        })
    },
    methods: {
        async getAllEmployees() {
            const response = await fetch('http://localhost:3000/RPMS')
            return response.json()
        }
    }
}
</script>