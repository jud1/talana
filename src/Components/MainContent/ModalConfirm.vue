<template>
   <b-modal :id="product.code" :title="title" hide-footer>
      <b-row class="justify-content-md-center">
         <b-col col sm="6">
            <figure v-bind:style="{ 'background-image': 'url(' + product.photo + ')' }"></figure>
         </b-col>
         <b-col col sm="6">
            <span><b>{{product.name | truncate(40, '...')}}</b></span>
            <span class="mt-1">#{{product.code}}</span>
            <span class="mt-1">{{product.price | clp}}</span>
            <b-form-input class="mt-1" type="number" min="1" max="10" value="1" v-model="quantity"></b-form-input>
            <h4 class="mt-3"><b>{{(product.price*quantity) | clp}}</b></h4>
         </b-col>
         <b-col col sm="12" style="height: 85px; overflow-y: scroll;">
            <p>{{product.description}}</p>
         </b-col>
         <b-col col sm="12">
            <b-button class="mt-3" block variant="primary">Agregar</b-button>
            <b-button class="mt-3" block @click="$bvModal.hide(product.code)">Cancelar</b-button>
         </b-col>
      </b-row>
   </b-modal>
</template>
<script>
export default {
   name: "modal-confirm",
   props: ['params'],
   data(){
      return{
         title: "Agregar producto",
         product: this.params,
         quantity: 2,
         total: ""
      }
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
   span{
      display: block;
   }
</style>