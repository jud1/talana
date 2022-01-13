<template>
  <div id="main_content">
    <header-nav></header-nav>
    <sidebar-nav></sidebar-nav>
    <main-content></main-content>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>
<style lang="scss">
  #main_content{
    display: flex;
    flex-wrap: wrap;
    header{
      width: 100%;
    }
    >nav{
      width: 100%;
      @media (min-width: 640px){
        max-width: 200px;
      }
    }
    main{
      flex: 1;
    }
  }
</style>
