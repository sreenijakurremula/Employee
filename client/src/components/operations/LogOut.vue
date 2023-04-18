<template>
<p></p>

</template>
<script>
export default {
  methods: {
    logout() {
      // remove all items from local storage
      localStorage.clear();
      this.$router.push('/');
      // redirect to login page or do other actions
    }
  },mounted(){
    this.logout()
  }
}


</script>
<style>
</style>
