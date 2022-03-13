<template>

<ContactList/>

<DisplayUser/>


</template>

<script>

import ContactList from './components/ContactList.vue'
import DisplayUser from './components/DisplayUser.vue'

export default {
  name: 'App',
  data() {
    return {
      selectedUser: ""
    }
  },

  methods: {
    setSelectedUser(value){
      this.selectedUser = value
    }
  },
  components: {
    ContactList,
    DisplayUser
  },

  mounted() {
    this.$store.dispatch('setUsers')
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
