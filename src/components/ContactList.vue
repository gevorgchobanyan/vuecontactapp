<template>
  <div>
    <p> ContactList component </p>
    <input type="text" id="username" v-model="username">


    <p> {{ username }}</p>

  </div>
</template>



<script>
  
export default {

  name: 'ContactList',

  data() {
    return {
      username: ""
    }
  },
  methods: {

  }


}


</script>



<style scoped>

</style>