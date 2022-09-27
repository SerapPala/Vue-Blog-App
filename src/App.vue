<template>
<NavbarComponent></NavbarComponent>
<router-view/>

</template>

<script>
  import NavbarComponent from './components/NavbarComponent.vue'

  export default{
    setup() {
    },
    components: { NavbarComponent }
}
</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
</style>
