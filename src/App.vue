<template>

<div v-if="users.length"></div>
<ContactList :users=users />

</template>

<script>

import ContactList from './components/ContactList.vue'

export default {
  name: 'App',
  data() {
    return {
      users: [],
      selectedUser: ""
    }
  },
  components: {
    ContactList
  },

  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>this.users = data)
    .catch(err => console.log(err.message))
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
