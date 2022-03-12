<template>
  <div class="position-absolute top-0 end-0 w-50">
    <h3> Display User Details</h3>


      <div v-if="Object.keys(user).length!== 0">


        <h4> User </h4>
        <ul class="list-group">

          <li class="list-group-item list-group-item-action"> name: {{ user.name }} </li>
          <li class="list-group-item list-group-item-action"> username: {{ user.username }} </li>
          <li class="list-group-item list-group-item-action"> email: {{ user.email }} </li>
          <li class="list-group-item list-group-item-action"> phone: {{ user.phone }} </li>
          <li class="list-group-item list-group-item-action"> website: {{ user.website }} </li>

          <h4> Address </h4>
          <div v-for="(value, key) in user.address" >
            <div v-if="key === 'geo'"> 
              <div v-for="(nestedValue, nestedKey) in value">
                <li v-if="nestedKey === 'lat'" class="list-group-item list-group-item-action"> 
                  latitude: {{ nestedValue }} 
                </li>
                <li v-else class="list-group-item list-group-item-action"> longitude: {{ nestedValue }} </li>
              </div>
            </div>
            <li v-else class="list-group-item list-group-item-action"> {{ key }}: {{ value }} </li>
          </div>

          <h4> Company </h4>
          <div v-for="(value, key) in user.company">
            <li class="list-group-item list-group-item-action"> {{ key }}: {{ value }} </li>
          </div>

        </ul>


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