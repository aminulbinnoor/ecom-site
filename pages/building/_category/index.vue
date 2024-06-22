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
    ListStyle: () => import('@/components/building/ListStyle')
},
data () {
  return {
      breadcrumbs: [
          {name: 'Home', link: '/'},
          {name: 'Building', link: '/building'},
          {name: this.$route.params.category, link: ""},
          // {name: this.$route.params.theme, link: ''},
      ],
  }
}
};
</script>

<style lang="scss" scoped></style>
