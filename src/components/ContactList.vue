<template>
  <div>
    <p> Contact List</p>

    <input type="text" id="username" v-model="username">
    <p> {{ username }}</p>

    <div v-if="users.length">
      <p> {{ users }}</p>
    </div>


  </div>
</template>



<script>
  
export default {
  name: 'ContactList',
  props: ['users'],
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