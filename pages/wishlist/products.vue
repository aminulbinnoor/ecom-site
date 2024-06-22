<template>
  <div>
    <ProductWishList></ProductWishList>
    <RecentViewedProductsSlide></RecentViewedProductsSlide>
    <PopularProducts></PopularProducts>
  </div>
</template>

<script>
// import ProductWishList from "@/components/wishlist/ProductWishList";
// import RecentViewedProductsSlide from "@/components/wishlist/RecentViewedProductsSlide";
// import PopularProducts from "@/components/wishlist/PopularProducts";
export default {
  components: {
    ProductWishList: () => import('@/components/wishlist/ProductWishList'),
    RecentViewedProductsSlide: () => import('@/components/wishlist/RecentViewedProductsSlide'),
    PopularProducts: () => import('@/components/wishlist/PopularProducts')
  }
};
</script>

<style lang="scss" scoped></style>
