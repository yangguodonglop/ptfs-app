<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
//    watch:{
//             '$route':function(to,from){
//                 let token = window.localStorage.getItem('token');
// 　　　　　　　　   if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
// 　　　　　　　　　　   next({
                        
//   　　　　　　　　　　   path: '/saomiao',
//   　　　　　　　　　　   query: { redirect: to.fullPath }
// 　　　　　　　　　　   })
// 　　　　　　　　   } else {
// 　　　　　　          next()
// 　　　　　　　　   }
//       　　　}
//     　　}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
