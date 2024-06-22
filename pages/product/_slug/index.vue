<template>
  <div>
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs"></Breadcrumb>
    </div>
    <client-only>
      <Description :product="product"></Description>
      <Specification :product="product"></Specification>
      <!-- <Timeline></Timeline> -->

      <!-- <ProductSlider :slideData="similarProducts" title="Similar|Product" refkey="similarProducts"></ProductSlider> -->
    </client-only>
  </div>
</template>

<script>
// import Description from "@/components/room/productDescription";
// import Specification from "@/components/room/Specification";
// import Timeline from "@/components/global/Timeline";
// import SliderSimilarLooks from "@/components/global/SliderSimilarLooks";
// import SliderSimilarProducts from "@/components/global/SliderSimilarProducts";
import { http2 } from "@/api/axios.js";

export default {
  components: {
    Description: () => import("@/components/room/productDescription"),
    Specification: () => import("@/components/room/Specification"),
    // Description: () => import("@/components/room/old/old-productDescription"),
    // Specification: () => import("@/components/room/old/old-Specification"),
    // Timeline: () => import('@/components/global/Timeline'),
    ProductSlider: () => import("@/components/global/productSlider"),
  },
  data() {
    let productl;
    return {
      product: {},
      breadcrumbs: [],

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

  asyncData(context) {
    return http2
      .get("/product/get-single", {
        params: {
          slug: context.params.slug,
        },
      })
      .then((res) => {
        return { fetchedData: res.data.data };
      });
  },
  head() {
    return {
      title: this.fetchedData.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.fetchedData.name,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://dev-p2p.s3-ap-southeast-1.amazonaws.com/${this.fetchedData.feature_image[0].path}hdpi/${this.fetchedData.feature_image[0].file}`,
        },
      ],
    };
  },
  created: function () {
    http2
      .get("/product/get-single", {
        params: {
          slug: this.$route.params.slug,
        },
      })
      .then((response) => {
        this.product = response.data.data;
        this.breadcrumbs = [
          { name: "Home", link: "/" },
          {
            name: "Shop",
            link: "",
          },
          {
            name: response.data.data.name,
            link: "",
          },
        ];
      });
  },
};
</script>

<style lang="scss" scoped></style>
