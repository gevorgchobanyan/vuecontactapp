<template>
  <div>
    <p> Display User Details</p>

      <div v-for="value in user">
        <p>{{ value }}</p>
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