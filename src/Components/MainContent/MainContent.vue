<template>
   <main>
      <b-container class="pt-3 pb-3" fluid>
         <!-- <bread-nav></bread-nav> -->
         <router-view :key="$route.path"></router-view>
      </b-container>
   </main>
</template>
<script>
import BreadNav from './BreadNav.vue'
export default {
   components: { BreadNav },
   name: "main-content",
   data(){
      return{}
   }
}
</script>