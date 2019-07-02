<template>
  <div id="app">
    <div id="nav">
       <Header></Header>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  name: 'App',
  data () {
     return {
       
     }
  },
  components: {
    Header
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  #nav {
    border: 1px solid gray;
  }
  .content {
    width: 100%;
    height: 360px;
    border: 1px solid gray;
  }

}
</style>
