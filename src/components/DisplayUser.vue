<template>
  <div class="position-absolute top-0 end-0 w-75 border">
    <h3> Display User Details</h3>





        <div class="container border">
          <div class="row">

           <div class="col">
            <h4> User </h4>
            <ul class="list-group" v-if="Object.keys(user).length!== 0">
              <li class="list-group-item list-group-item-action"> name: {{ user.name }} </li>
              <li class="list-group-item list-group-item-action"> username: {{ user.username }} </li>
              <li class="list-group-item list-group-item-action"> email: {{ user.email }} </li>
              <li class="list-group-item list-group-item-action"> phone: {{ user.phone }} </li>
              <li class="list-group-item list-group-item-action"> website: {{ user.website }} </li>
            </ul>
           </div> 

          <div class="col">
            <h4> Address </h4>
            <ul class="list-group" v-if="Object.keys(user).length!== 0">
              <div v-for="(value, key) in user.address" >
                <div v-if="key === 'geo'"> 
<!--                   <div v-for="(nestedValue, nestedKey) in value">
                    <li v-if="nestedKey === 'lat'" class="list-group-item list-group-item-action"> 
                      latitude: {{ nestedValue }} 
                    </li>
                    <li v-else class="list-group-item list-group-item-action"> longitude: {{ nestedValue }} </li>
                  </div> -->
                </div>
                <li v-else class="list-group-item list-group-item-action"> {{ key }}: {{ value }} </li>
              </div>
            </ul>
           </div> 

           <div class="col">
            <h4> Company </h4>
            <div v-if="Object.keys(user).length!== 0" v-for="(value, key) in user.company">
              <li class="list-group-item list-group-item-action"> {{ key }}: {{ value }} </li>
            </div>
           </div> 


          </div>
        </div>


  </div>
</template>



<script>
  
export default {
  name: 'DisplayUser',
  props: ['user'],
  data() {
    return {
    }
  },
  methods: {

  }
}


</script>



<style scoped>


</style>