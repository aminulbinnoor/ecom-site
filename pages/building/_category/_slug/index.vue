<template>
  <div>
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs"></Breadcrumb>
    </div>
    <client-only>
      <Description :villa="villa"></Description>
      <Specification :villa="villa"></Specification>

      <ProductSlider :slideData="similarProducts" title="Similar|Product" refkey="similarProducts"></ProductSlider>
    </client-only>
  </div>
</template>

<script>
// import Description from "@/components/room/productDescription";
// import Specification from "@/components/room/Specification";
import { http2 } from "@/api/axios.js";

export default {
  components: {
    Description: () => import("@/components/building/villaDescription"),
    Specification: () => import("@/components/building/Specification"),
    ProductSlider: () => import("@/components/global/productSlider"),
  },
  data() {
    let productl;
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        { name: "Building", link: "/building" },
        {
          name: this.$route.params.category,
          link: "/building/" + this.$route.params.category,
        },
        { name: this.$route.params.slug, link: "" },
      ],
      villa: {},

      similarProducts: [
        {
          id: 4,
          name: "Shegun wooden Premium",
          slug: "minimal-4",
          images: [
            {
              path: "/images/product/",
              file: "chair.png",
            },
          ],
          oldPrice: "15500",
          currentPrice: "12500",
          is_active: 1,
        },
        {
          id: 4,
          name: "Shegun wooden Premium",
          slug: "minimal-4",
          images: [
            {
              path: "/images/product/",
              file: "product.png",
            },
          ],
          oldPrice: "20500",
          currentPrice: "18300",
          is_active: 1,
        },
        {
          id: 4,
          name: "Shegun wooden Premium",
          slug: "minimal-4",
          images: [
            {
              path: "/images/product/",
              file: "Tacoma_Carver_Dining_chair_Walnut.jpg",
            },
          ],
          oldPrice: "24385",
          currentPrice: "2150",
          is_active: 1,
        },
        {
          id: 4,
          name: "Shegun wooden Premium",
          slug: "minimal-4",
          images: [
            {
              path: "/images/product/",
              file: "UK_Setof2_Lule_dining_chair_Pine_Green.jpg",
            },
          ],
          oldPrice: "10500",
          currentPrice: "9599",
          is_active: 1,
        },
        {
          id: 4,
          name: "Shegun wooden Premium",
          slug: "minimal-4",
          images: [
            {
              path: "/images/product/",
              file:
                "Set_of_2_Braga_Dining_Chairs_velvet_Blue_boucle_Textyle_Boucle.jpg",
            },
          ],
          oldPrice: "14000",
          currentPrice: "11200",
          is_active: 1,
        },
        {
          id: 4,
          name: "Shegun wooden Premium",
          slug: "minimal-4",
          images: [
            {
              path: "/images/product/",
              file:
                "Amalyn_Dining_chair_Walnut_and_Vintage_Gold_Velvet_Stax.jpg",
            },
          ],
          oldPrice: "17400",
          currentPrice: "13680",
          is_active: 1,
        },
      ],
    };
  },

  mounted: function () {
      http2
        .get("building/get-building-details", {
          params: { slug: this.$route.params.slug },
        })
        .then((response) => {
          this.villa = response.data.data;
        });
  }
};
</script>

<style lang="scss" scoped></style>
