<template>

<p> {{ message }}</p>
<ContactList/>

</template>

<script>

import ContactList from './components/ContactList.vue'

export default {
  name: 'App',
  data() {
    return {
      message: "xxxxxxxx"
    }
  },
  components: {
    ContactList
  },

  mounted() {
    console.log(`App component is now mounted.`)
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
