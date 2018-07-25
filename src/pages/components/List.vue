<template>
    <div>
      <div class="list-wrapper">
        <div class="list-box" v-for="item in arrList">
          <router-link :to="{name:'detail',query:{id: item.goodsId}}">
            <img :src="item.goodsImage" alt="">
            <p>{{item.goodsTitle}}</p>
            <p>￥{{item.price}}</p>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "List",
      props:['arrList']
    }
</script>

<style scoped>
  .list-wrapper{
    overflow: hidden;
    width: 100%;
  }
  .list-box{
    width: 48%;
    margin-top: 1%;
    margin-left: 1%;
    float: left;
  }
  .list-box img{
    width: 100%;
  }
  .list-box p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 2.4rem;
    height: 2.4rem;
    background: #fff;
  }
  .list-box p:nth-of-type(2){
    color: red;
    font-size: 1.4rem;
  }
</style>
