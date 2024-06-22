<template>
  <div>
    <div class="mt-up position-relative">
      <HeroSlider :heroSilders="heroSilders"></HeroSlider>
      <!-- <WeHave></WeHave> -->
      <StyleSlider  :slideData="departments" title="Shop By|Department" refkey="department" extraRoute="/shop/category/"></StyleSlider>

      <StyleSlider :deactiveLink="true" :slideData="rooms" title="Browse|By Room" refkey="room" extraRoute="/room/"></StyleSlider>
      <StyleSlider :deactiveLink="true" :slideData="themes" title="Browse|By Style" refkey="style" extraRoute="/appartment/"></StyleSlider>

      <!--  -->
      <!-- <SliderFavStyle :looks="topLooks"></SliderFavStyle> -->
      <!-- <BestSliderComponent title="Products" :products="topProducts"></BestSliderComponent>
      <BestSliderComponent
        title="Kitchens"
        :products="topProducts"
        :cssstyle="{
            background: true
          }"
      ></BestSliderComponent>-->
      <VillaSection></VillaSection>
      <StyleSlider :deactiveLink="true" :slideData="categories" title="Browse By|Category" refkey="category" extraRoute="/building/"></StyleSlider>
      <!-- <EasyStepSlider></EasyStepSlider> -->
      <!-- <OurServices></OurServices> -->
      <!-- <Appriciations></Appriciations> -->
      <Appriciations title="CUSTOMER|REVIEW" refkey="appriciation"></Appriciations>
      <!-- <OurPartners></OurPartners> -->

      <!--  -->
      <!-- Booking Appointment -->
      <!--  -->

      <!-- <router-link
        to="/appointment"
        type="button"
        class="btn btn-floating-bookAppointment"
        :class="{ visible: visibleBookAppointment }"
      >
        <span>
          <img :src="'/images/calendar-icon.png'" alt />
        </span> BOOK
        APPOINTMENT NOW
      </router-link> -->
    </div>
  </div>
</template>

<script>
// import HeroSlider from "@/components/home/HeroSlider";
// import WeHave from "@/components/home/WeHave";
// import StyleSlider from "@/components/home/StyleSlider";
// import VillaSection from "@/components/home/VillaSection";
// import EasyStepSlider from "@/components/home/EasyStepSlider";
// import Appriciations from "@/components/home/Appriciations";
// import BestSliderComponent from "@/components/home/bestSliderComponent";
// import OurServices from "@/components/home/OurServices";
// import OurPartners from "@/components/home/OurPartners";
// import SliderFavStyle from "@/components/apartment/SliderFavStyle";

import { http2 } from "@/api/axios";
//
export default {
  components: {
    HeroSlider: () => import("@/components/home/HeroSlider"),
    // WeHave: () => import("@/components/home/WeHave"),
    StyleSlider: () => import("@/components/global/StyleSlider"),
    // SliderFavStyle: () => import("@/components/apartment/SliderFavStyle"),
    VillaSection: () => import("@/components/home/VillaSection"),
    EasyStepSlider: () => import("@/components/home/EasyStepSlider"),
    Appriciations: () => import("@/components/home/Appriciations"),
    // BestSliderComponent: () => import("@/components/home/bestSliderComponent"),
    OurServices: () => import("@/components/home/OurServices"),
    // OurPartners: () => import("@/components/home/OurPartners"),
  },

  head() {
    return {
      title: "P2P",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "P2P strongly stands for the phrase 'Plan To Perfection'. It is what we believe as our motto for our clients.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `./images/og/facebook.jpg`,
        },
      ],
    };
  },

  data() {
    return {
      visibleBookAppointment: false,
      heroSilders: [],
      topLooks: [],
      topProducts: [],
      themes: [],
      rooms: [],
      departments: [],
      categories: []
    };
  },

  created() {
    http2
      .get("/category/theme", {
        params: { slug: "interior" },
      })
      .then((response) => {
        this.themes = response.data.data;
      });

    http2.get("/hero-slider/lists").then((response) => {
      this.heroSilders = response.data.data;
    });

    http2.get("/room/tags").then((response) => {
      this.rooms = response.data.data;
    });
    http2.get("/product/category-list").then((response) => {
      this.departments = response.data.data;
      this.$store.commit('setCategories',this.departments)
    });

    http2.get("/building/category-list").then((response) => {
      this.categories = response.data.data;
    });


    http2.get("/top-feataure/looks").then((response) => {
      this.topLooks = response.data.data;
    });

    http2.get("/top-feataure/products").then((response) => {
      this.topProducts = response.data.data;
    });
  },

  mounted() {
    window.addEventListener("scroll", this.toggleBookAppointmentBtn);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.toggleBookAppointmentBtn);
  },

  methods: {
    /**
     *
     * toggle bookAppointment visibility
     *
     */
    toggleBookAppointmentBtn(event) {
      if (window.scrollY > 800) {
        this.visibleBookAppointment = true;
      } else {
        this.visibleBookAppointment = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mt-up {
  margin-top: -15px;
}

.btn-floating-bookAppointment {
  position: fixed;
  bottom: -15%;
  right: 0;
  left: 50%;
  transform: translateX(-50%);

  height: 50px;
  background-color: #2c2b2b;
  box-shadow: 0 0 10px 5px rgba(44, 43, 43, 0.25098);
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.97px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: normal;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  z-index: 999;

  &:hover {
    color: #fff;
    background-color: $site-primary;
  }

  span {
    display: flex;
    margin-right: 10px;
    img {
      width: 20px;
    }
  }

  &.visible {
    bottom: 0px;
    visibility: visible;
    opacity: 1;
  }
}

@media (min-width: 576px) {
  .btn-floating-bookAppointment {
    width: 370px;
  }
}
@media (max-width: 575px) {
  .btn-floating-bookAppointment {
    min-width: 270px;
    font-size: 13px;
    span {
      img {
        width: 16px;
      }
    }
  }
}
</style>
