<template>
    <div>
      <div class="header">
        <img src="https://vpclub-img.oss-cn-shenzhen.aliyuncs.com/upload/0/201807/19/201807191546548005.jpg" alt="">
      </div>
      <List :arrList="arrList"></List>
    </div>
</template>

<script>
  import List from './components/List'
    export default {
        name: "Home",
        components:{
          List
        },
      data(){
        return{
          arrList:[]
        }
      },
      created(){
        this.$axios.get('../../static/shoplist.json')
          .then((res)=>{
            var item = res.data;
            this.arrList = item.data.goodsList;
            // console.log(this.arrList)
          })
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    position: relative;
    top: 0;
  }
  .header img{
    height: 10.54rem;
    width: 100%;
    display: block;
    margin-bottom: .1rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    border-radius: 0.4rem;
  }
</style>
