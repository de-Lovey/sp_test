<template>
  <div class="compile-box">
    <go-back url="/detail"></go-back>
    <div class="show-txt">
      <p>商品名称：{{arr.productName}}</p>
      <p>商品价格：￥{{arr.sellPrice}}</p>
      <p>市场价格：￥{{arr.marketPrice}}</p>
      <p>会员价：￥{{arr.memberPrice}}</p>
      <p>售出：{{arr.sellCount}}</p>
    </div>
    <div class="compile-wrapper">
      <p>编辑信息：</p>
      <div class="list-compile">
        商品名称：
        <input type="text" v-model="arr.productName">
      </div>

      <div class="list-compile">
        商品价格：
        <input type="text" v-model="arr.sellPrice">
      </div>

      <div class="list-compile">
        市场价格：
        <input type="text" v-model="arr.marketPrice">
      </div>

      <div class="list-compile">
        会员价：
        <input type="text" v-model="arr.memberPrice">
      </div>

      <div class="list-compile">
        售出：
        <input type="text"  v-model="arr.sellCount">
      </div>
      <div class="list-compile">
        <button @click="comfirm()">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import GoBack from '../components/GoBack'
    export default {

      name: "compile",
      components:{
        GoBack
      },
      data(){
        return {
          arr: []
        }
      },
      methods:{
        comfirm(){
          var content = JSON.stringify(this.arr)
          this.$router.push({
            name: 'succ',
            query: {test : content}
          })
        }
      },
      created(){
        // 输出id 做比较
        // var id = this.$route.query.id;
        // console.log(id)

        this.$axios.get('../../static/shopdetail.json')
          .then((res) =>{
            var item = eval('('+res.data+')');
            this.arr = item.data;
          })
      }
    }
</script>

<style scoped>
  .compile-box{
    padding: 2rem;
    font-size: 1.6rem;
    margin-top: 1rem;
  }
  .compile-box p{
    line-height: 3rem;
  }
  .compile-wrapper{
    border-top: 1px solid #333;
  }
  .list-compile{
    margin-bottom: 2rem;
  }
  .list-compile input{
    padding: 4px 11px;
    font-size: 1.2rem;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    vertical-align: middle;
  }
  .list-compile input:hover{
    border: 1px solid #40a9ff;
    box-shadow: 0px 0px 4px #40a2fd;
  }
</style>
