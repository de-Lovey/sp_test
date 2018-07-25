<template>
  <div class="show-txt">
    <p>商品名称：{{compileArr.productName}}</p>
    <p>商品价格：￥{{compileArr.sellPrice}}</p>
    <p>市场价格：￥{{compileArr.marketPrice}}</p>
    <p>会员价：￥{{compileArr.memberPrice}}</p>
    <p>售出：{{compileArr.sellCount}}</p>
    <router-link to="/">
      <button>返回主页</button>
    </router-link>

  </div>
</template>

<script>
    export default {
      name: "Succ",
      data(){
        return{
          compileArr: []
        }
      },
      created(){
        var item = eval('('+this.$route.query.test+')');
        console.log(item);
        this.compileArr = item;
        console.log(this.compileArr)
      }
    }
</script>

<style scoped>
  .show-txt{
    padding: 1rem;
    margin: 1rem;
  }
  .show-txt p{
    line-height: 3rem;
    font-size: 1.6rem;
  }
</style>
