<template>
  <div class="intro">
    <div class="img-box">
      <img :src="arr.shareImage" alt="">
    </div>
    <div class="price">
      <span class="price-txt">￥{{arr.memberPrice}}</span>
      <span class="bazaar">市场价：<b>￥{{arr.marketPrice}}</b></span>
    </div>
    <div class="title">
      <p>{{arr.productName}}</p>
      <div class="title-content">
        <span class="repertory">剩余库存：{{arr.stock}}</span>
        <span class="express">快递：限时包邮</span>
        <button @click="fn()">编辑</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTop",
    data(){
      return {
        arr: []
      }
    },
    methods:{
      fn(){
        this.$router.push({
          name: 'compile',
          query: { id: this.arr.producId}
        })
      }
    },
    created(){
      // 传入ID作比较  找到该ID所在的区域
      var id = this.$route.query.id;
      this.$axios.get('../../../static/shopdetail.json')
        .then((res) =>{
          var item = eval('('+res.data+')');
          this.arr = item.data;
        })
    },
  }
</script>

<style scoped>
  .intro{
    box-shadow: 1px 1px 2px #ccc;
  }
  .img-box{
    width: 100%;
  }
  .img-box img{
    width: 100%;
  }
  .price{
    overflow: hidden;
    line-height: 3rem;
    border-bottom: 1px solid #f3f3f3;
    background: #fff;
    padding-left: 1rem;
  }
  .price-txt{
    font-size: 2rem;
    color: #b30927;
    font-weight: bold;
  }
  .bazaar{
    color: #ccc;
    font-size: 1.6rem;
    margin-left: 1rem;
  }
  .bazaar b{
    text-decoration: line-through;
  }
  .title{
    padding-left: 1rem;
    background: #fff;
  }
  .title p{
    font-size: 1.4rem;
    line-height: 3rem;
  }
  .title-content{
    line-height: 3rem;
  }
  .repertory{
    font-size: 1.4rem;
    color: #333;
  }
  .express{
    font-size: 1.4rem;
    color: #333;
    margin-left: 2rem;
    margin-right: 1rem;
  }
</style>
