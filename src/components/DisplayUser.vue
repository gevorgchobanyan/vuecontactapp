<template>

  <div class="col-lg-9 col-md-9 col-sm-9 border">

    <div class="container">
      <div class="row">
        <h4>Detailed User Information</h4>
        
           <div class="col-lg-4 col-md-6 col-sm-12 border">
            <h4> User </h4>
            <ul class="list-group" v-if="Object.keys(getClickedUser).length!== 0">
              <li class="list-group-item list-group-item-action"> name: {{ getClickedUser.name }} </li>
              <li class="list-group-item list-group-item-action"> username: {{ getClickedUser.username }} </li>
              <li class="list-group-item list-group-item-action"> email: {{ getClickedUser.email }} </li>
              <li class="list-group-item list-group-item-action"> phone: {{ getClickedUser.phone }} </li>
              <li class="list-group-item list-group-item-action"> website: {{ getClickedUser.website }} </li>
            </ul>
           </div> 

          <div class="col-lg-4 col-md-6 col-sm-12 border">
            <h4> Address </h4>
            <ul class="list-group" v-if="Object.keys(getClickedUser).length!== 0">
              <div v-for="(value, key) in getClickedUser.address" >
                <div v-if="key === 'geo'"> 
                </div>
                <li v-else class="list-group-item list-group-item-action"> {{ key }}: {{ value }} </li>
              </div>
            </ul>
           </div> 

           <div class="col-lg-4 col-md-12 col-sm-12 border">
            <h4> Company </h4>
            <div v-if="Object.keys(getClickedUser).length!== 0" v-for="(value, key) in getClickedUser.company">
              <li class="list-group-item list-group-item-action"> {{ key }}: {{ value }} </li>
            </div>
           </div>

      </div>
    </div>

  </div>
</template>



<script>

import { mapGetters } from 'vuex'  

export default {
  name: 'DisplayUser',
  data() {
    return {
    }
  },
  computed: {

      ...mapGetters([
        'getClickedUser',

      ])
  },
  methods: {

  }
}


</script>



<style scoped>


</style>