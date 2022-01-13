<template>
   <div>
      <h2>{{nameCategorie}}</h2>
      <b-alert variant="danger" :show="empty" v-if="empty">No existen productos para mostrar</b-alert>
      <b-row v-if="products" >
         <b-col class="product-thumbnail mt-3" sm="6" md="6" lg="3" v-for="product in products" :key="product.id">
            <b-card img-top tag="article" style="max-width: 20rem;" class="mb-2">
               <figure v-bind:style="{ 'background-image': 'url(' + product.photo + ')' }"></figure>
               <b-card-title>{{product.name | truncate(20, '...')}}</b-card-title>
               <b-badge v-if="product.stock==0" variant="secondary">Agotado</b-badge>
               <b-badge v-else variant="primary">Disponible</b-badge>
               <b-card-text>{{product.description | truncate(50, '...')}}</b-card-text>
               <b-card-text>Precio: {{product.price | clp}}</b-card-text>
               <b-button type="submit" variant="primary" class="w-100" v-b-modal="product.code">
                  <span>Agregar</span>
                  <b-icon icon="plus"></b-icon>
               </b-button>
               <modal-confirm :params="product"></modal-confirm>
            </b-card>
         </b-col>
      </b-row>
   </div>
</template>

<script>
import axios from 'axios'
import ModalConfirm from './ModalConfirm.vue'
export default {
   components: { ModalConfirm },
   name: "product-grid",
   mounted() {
      this.getProducts();
   },
   data() {
      return {
         nameCategorie: this.$route.params.name,
         idCategorie: this.$route.params.id,
         products: null,
         empty: false
      };
   },
   methods: {
      getProducts(){
         axios.get('http://sva.talana.com:8000/api/product/')
            .then((response) =>{
               const productsUnfiltered = response.data;
               const productsFiltered = productsUnfiltered.filter(product => product.category.id==this.idCategorie)
               this.products = productsFiltered
               if( this.products.length<1 ){
                  this.empty = true;
               }
            });
      },
   },
}
</script>
<style lang="scss" scoped>
   figure{
      height: 200px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
   }
   .product-thumbnail{
      >*{
         width: 100% !important;
         max-width: 100% !important;
      }
   }
</style>
