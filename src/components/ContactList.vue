<template>
  <div class="col-lg-3 col-md-3 col-sm-3 border">

    <div class="container">
      <div class="row">

        <div class="col">
          <h4> Contact List</h4>
          <input 
            class="form-control" 
            type="text" 
            placeholder="Search" 
            aria-label="Search" 
            v-model="searchUser"
            @click="resetClickedUser"
          >

          <div v-if="getUsers.length">
            <ul class="list-group">
              <div v-for="value in filteredUsers" >
                  <li class="list-group-item list-group-item-action" @click="setClickedUser(value)"> 
                    {{ value.name }}</li>
              </div>
            </ul>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>



<script>

import { mapGetters } from 'vuex'
  
export default {
  name: 'ContactList',
  data() {
    return {
      searchUser: ""
    }
  },
  methods: {
    setClickedUser(value){
      this.$store.dispatch('setClickedUser', value)
    },
    resetClickedUser(){
      this.$store.dispatch('resetClickedUser')
    }

  },
    computed: {

      ...mapGetters([
        'getUsers',

      ]),
  
      filteredUsers() {
        return this.getUsers.filter(item => {
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