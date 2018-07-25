<template>
    <div>
      <div class="nav">
        <div><router-link to="/detail/price">图片详情</router-link></div>
        <div><router-link to="/detail/evaluate">查看评价</router-link></div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "DetailBottom"
    }
</script>

<style scoped>
  .nav{
    overflow: hidden;
    line-height: 3rem;
    text-align: center;
    font-size: 1.2rem;
    color: #333;
    margin-top: 2rem;
    box-shadow: 1px 1px 2px #ccc;
    display: flex;
    background: #fff;
  }
  .nav div{
    flex: 1;
  }
</style>
