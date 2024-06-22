<template>
  <section class="shop">
    <!-- <div class="container">
      <h1 class="title">Shop</h1>
    </div> -->

    <shopComponent></shopComponent>
  </section>
</template>

<script>
import shopComponent from "@/components/shop/shopComponent";
export default {
  components: {
    shopComponent,
  },
  mounted () {
      if(this.$route.name){
          this.$store.commit('setActiveMenu',2)
      }
  }
};
</script>

<style lang="scss" scoped>
.shop {
  .title {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108px;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
