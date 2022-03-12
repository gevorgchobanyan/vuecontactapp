<template>
  <div class="position-absolute top-0 start-0 w-25">

    <h3> Contact List</h3>
    <input 
      class="form-control mr-sm-2" 
      type="text" 
      placeholder="Search" 
      aria-label="Search" 
      v-model="searchUser"
    >


    <div v-if="users.length">


      <ul class="list-group">
        <div v-for="value in filteredUsers" >
            <li class="list-group-item list-group-item-action" @click="$emit('setUser', value)"> 
              {{ value.name }}</li>
        </div>
      </ul>


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

li{
  cursor: pointer;
}

</style>