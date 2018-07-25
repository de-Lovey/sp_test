<template>
    <div>
      <go-back url="/"></go-back>
      <detail-top></detail-top>
      <detail-bottom></detail-bottom>
    </div>
</template>

<script>
  import DetailTop from './components/DetailTop'
  import DetailBottom from './components/DetailBottom'
  import GoBack from '../components/GoBack'
    export default {
      name: "Detail",
      components:{
        DetailTop,
        DetailBottom,
        GoBack
      },

    }
</script>

<style scoped>

</style>
