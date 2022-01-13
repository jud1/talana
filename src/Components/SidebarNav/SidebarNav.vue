<template>
   <nav>
      <b-container class="pt-3 pb-3">
         <h2> {{title}} </h2>
         <b-nav vertical class="w-100">
            <b-nav-item v-for="item in categories" :key="item.id">
               <router-link :to="{ name: 'product-grid', params: { id: item.id, name: item.name} }">
                  {{item.name}}
               </router-link>
            </b-nav-item>
         </b-nav>
      </b-container>
   </nav>
</template>
<script>
import axios from "axios"
export default {
   name: "sidebar-nav",
   mounted(){
      this.getCategories();
   },
   data(){
      return{
         title: "Categorías",
         categories: null
      }
   },
   methods: {
      getCategories(){
         axios.get('http://sva.talana.com:8000/api/product-category/')
            .then((response) =>{
               this.categories = response.data;
            });
      }
   }
}
</script>
<style lang="scss" scoped></style>