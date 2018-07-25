<template>
  <div class="box">
    <div v-html="arr.detail"></div>
  </div>
</template>

<script>
    export default {
      name: "Price",
      data(){
        return{
          arr:[]
        }
      },
      created(){
        this.$axios.get('../../../static/shopdetail.json')
          .then((res) =>{
            var item = eval('('+res.data+')');
            this.arr = item.data;
          })
      }
    }
</script>

<style scoped>
  .box{
    padding: 1rem 1rem;
  }
  .box >>> img{
    width: 100%;
  }
  .box >>> span{
    font-size: 2rem !important;
    margin-bottom: 1rem;
    letter-spacing: 0.5rem;
  }
  .box >>> .MsoNormal{
    margin-top: 1rem;
  }
</style>
