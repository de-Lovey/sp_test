<template>
  <div>
    <router-link :to="url">
      <div class="go-back">
        <
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
      name: "GoBack",
      props: ['url']
    }
</script>

<style scoped>
  .go-back{
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 1rem;
    top: 1rem;
    background: rgba(0,0,0,0.5);
    line-height: 2rem;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: #fff;
  }
</style>
