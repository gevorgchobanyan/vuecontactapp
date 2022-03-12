<template>
  <div>
    <p> Contact List</p>

    <input type="text" v-model="searchUser">

    <div v-if="users.length">

      <div v-for="(value) in filteredUsers" >
          <p @click="$emit('setUser', value)"> {{ value.name }}</p>
      </div>

    </div>


  </div>
</template>



<script>
  
export default {
  name: 'ContactList',
  props: ['users'],
  data() {
    return {
      searchUser: ""
    }
  },
  methods: {

  },
    computed: {
    filteredUsers() {
      return this.users.filter(item => {
         return item.name.toLowerCase().indexOf(this.searchUser.toLowerCase()) > -1
      })
    }
  }

}


</script>



<style scoped>

p{
  cursor: pointer;
}

</style>