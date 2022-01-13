<template>
   <header>
      <b-navbar toggleable="md" type="dark" variant="info">
         <b-navbar-brand href="#"> {{ title }} </b-navbar-brand>

         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

         <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
               
               <b-nav-item-dropdown id="cartDropdown" right>
                  <!-- Using 'button-content' slot -->
                  <template #button-content>
                     <b-button variant="primary">
                        <b-icon icon="bag" class="text-white"></b-icon>
                     </b-button>
                  </template>
                  <div class="pl-2 pr-2">
                     <b-list-group >
                        <b-list-group-item v-for="(item, index) in cartItems" :key="index" style="display: flex; align-items: center">
                           <div style="font-size: 12px; flex: 1;">
                              <span>{{item.name | truncate(30, '...')}}</span>
                              <br>
                              <span>Total: <b>{{priceProduct | clp}}</b></span>
                           </div>
                           <b-badge variant="light">1</b-badge>
                           <b-button class="ml-2" size="xs">
                              <b-icon icon="trash"></b-icon>
                           </b-button>
                        </b-list-group-item>
                     </b-list-group>
                  </div>
               </b-nav-item-dropdown>
            </b-navbar-nav>
         </b-collapse>
      </b-navbar>
   </header>
</template>
<script>
import axios from 'axios'
export default {
   name: "header-nav",
   mounted(){
      this.getCartItems();
   },
   data(){
      return{
         title: "Talana",
         priceProduct: 9000,
         cartItems: null
      }
   },
   methods: {
      getCartItems(){
         axios.get('http://sva.talana.com:8000/api/product/')
            .then((response) =>{
               this.cartItems = response.data;
            });
      }
   }
}
</script>
<style lang="scss">
   #cartDropdown{
      >ul{
         min-width: 270px;
      }
   }
</style>