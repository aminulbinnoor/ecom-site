<template>
  <div>
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs"></Breadcrumb>
    </div>
    <ListStyle></ListStyle>
  </div>
</template>

<script>
// import Breadcrumb from "@/components/global/Breadcrumb";
// import ListStyle from "@/components/apartment/list/ListStyle";

//
export default {
  components: {
    Breadcrumb: () => import('@/components/global/Breadcrumb'),
    ListStyle: () => import('@/components/apartment/list/ListStyle')
},
data () {
  return {
      breadcrumbs: [
          {name: 'Home', link: '/'},
          {name: this.$route.params.category, link: '/'+this.$route.params.category},
          {name: this.$route.params.theme, link: ''},
      ],
  }
}
};
</script>

<style lang="scss" scoped></style>
