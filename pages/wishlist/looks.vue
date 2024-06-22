<template>
  <div>
    <LooksWishList></LooksWishList>
    <RecentViewedLooksSlide></RecentViewedLooksSlide>
    <PopularLooks></PopularLooks>
  </div>
</template>

<script>
// import LooksWishList from "@/components/wishlist/LooksWishList";
// import RecentViewedLooksSlide from "@/components/wishlist/RecentViewedLooksSlide";
// import PopularLooks from "@/components/wishlist/PopularLooks";
export default {
  components: {
    LooksWishList: () => import('@/components/wishlist/LooksWishList'),
    RecentViewedLooksSlide: () => import('@/components/wishlist/RecentViewedLooksSlide'),
    PopularLooks: () => import('@/components/wishlist/PopularLooks')
  }
};
</script>

<style lang="scss" scoped></style>
