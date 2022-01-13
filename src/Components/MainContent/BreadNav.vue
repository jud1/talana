<template>
   <b-breadcrumb :items="bread_menu"></b-breadcrumb>
</template>
<script>
export default {
   name: "bread-nav",
   data(){
      return{
         title: "",
         bread_menu: [
            {
               text: 'Home',
               href: 'https://google.com'
            },
            {
               text: 'Posts',
               to: { name: 'home' }
            },
            {
               text: 'Another Story',
               active: true
            }
         ]
      }
   },

}
</script>