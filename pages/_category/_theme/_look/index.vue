<template>
  <div>
    <div class="container">
      <Breadcrumb :breadcrumbs="breadcrumbs"></Breadcrumb>
    </div>
    <Description :rooms="rooms" :cmp="cmp" @selectRoom="selectRoom"></Description>
    <!-- <UsedIn v-for="(product, index) in products" :key="index" :products="product"></UsedIn> -->
    <FloorPlan></FloorPlan>
    <Similar></Similar>
  </div>
</template>

<script>
// import Description from "@/components/composition/Description";
// import UsedIn from "@/components/composition/UsedIn";
// import FloorPlan from "@/components/composition/FloorPlan";
// import Similar from "@/components/composition/Similar";
import { http2 } from "@/api/axios";

export default {
  components: {
    Description: () => import("@/components/composition/Description"),
    // UsedIn: () => import("@/components/composition/UsedIn"),
    FloorPlan: () => import("@/components/composition/FloorPlan"),
    Similar: () => import("@/components/composition/Similar"),
  },

  asyncData(context) {
    return http2
      .get("/composition/room", {
        params: { slug: context.params.look },
      })
      .then((res) => {
        return { fetchedData: res.data.data.cmp };
      });
  },
  head() {
    return {
      title: this.fetchedData.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.fetchedData.short_description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://dev-p2p.s3-ap-southeast-1.amazonaws.com/${this.fetchedData.images[0].path}hdpi/${this.fetchedData.images[0].file}`,
        },
      ],
    };
  },

  data() {
    return {
      breadcrumbs: [
        { name: "Home", link: "/" },
        {
          name: this.$route.params.category,
          link: "/" + this.$route.params.category,
        },
        {
          name: this.$route.params.theme,
          link:
            "/" + this.$route.params.category + "/" + this.$route.params.theme,
        },
        { name: this.$route.params.look, link: "" },
      ],
      rooms: [],
      cmp: "",
      products: [],
    };
  },
  methods: {
    selectRoom(slug) {
      http2
        .get("room/products", { params: { slug: slug } })
        .then((response) => {
          this.products = response.data.data;
        });
    },
  },
  mounted() {
    http2
      .get("/composition/room", {
        params: { slug: this.$route.params.look },
      })
      .then((response) => {
        this.rooms = response.data.data.rooms;
        this.cmp = response.data.data.cmp;
        // this.$router.push({ query: { room: this.rooms[0].slug } });
        http2
          .get("room/products", { params: { slug: this.rooms[0].slug } })
          .then((response) => {
            this.products = response.data.data;
          });
      });
  },
};
</script>

<style lang="scss" scoped></style>
