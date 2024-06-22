<template>
  <div>
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs"></Breadcrumb>
    </div>
    <StyleList></StyleList>
    <!-- <SliderFavStyle :looks="topLooks"></SliderFavStyle> -->
    <!-- <CustomerStorieSlide></CustomerStorieSlide> -->
  </div>
</template>

<script>
// import Breadcrumb from "@/components/global/Breadcrumb";
// import StyleList from "@/components/apartment/StyleList";
// import SliderFavStyle from "@/components/apartment/SliderFavStyle";
// import CustomerStorieSlide from "@/components/apartment/CustomerStorieSlide";
import { http2 } from "@/api/axios";
//
export default {
  components: {
    Breadcrumb: () => import("@/components/global/Breadcrumb"),
    StyleList: () => import("@/components/apartment/StyleList"),
    SliderFavStyle: () => import("@/components/apartment/SliderFavStyle"),
    CustomerStorieSlide: () =>
      import("@/components/apartment/CustomerStorieSlide"),
  },
  data() {
    return {
      topLooks: [],
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: this.$route.params.category, link: "" },
      ],
    };
  },
  created() {
    http2.get("/top-feataure/looks").then((response) => {
      this.topLooks = response.data.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
