<template>
  <div class="slider-container" v-if="showSlides">
    <div class="slide-image">
      <splide :options="primaryOptions" ref="image">
        <splide-slide v-for="(pimage, i) in slides" :key="i">
          <img :src="`${cdn}/${pimage.path}hdpi/${pimage.file}`" alt="slide.alt" />
        </splide-slide>
      </splide>
    </div>

    <splide :options="secondaryOptions" ref="preview">
      <splide-slide v-for="(pimage, i) in slides" :key="i">
        <img :src="`${cdn}/${pimage.path}hdpi/${pimage.file}`" alt="slide.alt" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { http2 } from "@/api/axios.js";
export default {
  // props: ["pimages"],
  data() {
    return {
      pimages: [],
      slides: [],
      showSlides: false,
      primaryOptions: {
        type: "loop",
        heightRatio: 0.65,
        pagination: false,
        arrows: false,
        cover: true,
      },
      secondaryOptions: {
        type: "slide",
        rewind: true,
        gap: "1.75rem",
        fixedHeight: 105,
        pagination: false,
        cover: true,
        focus: "center",
        isNavigation: true,
        updateOnMove: true,

        // breakpoints: {
        //   600: {
        //     fixedWidth: 66,
        //     fixedHeight: 40,
        //   },
        // },
      },
    };
  },

  watch: {
    pimages(newValue, oldValue) {
      this.slides = [...newValue];
      // Set the sync target.
      setTimeout(() => {
        this.slideWidth();
        this.showSlides = true;
        setTimeout(() => {
          this.$refs.image.sync(this.$refs.preview.splide);
        }, 250);
      }, 300);
    },
  },

  methods: {
    slideWidth() {
      if (this.slides.length < 5) {
        // this.secondaryOptions.perPage = this.slides.length + 1;
        this.secondaryOptions.fixedWidth = 170;
        this.secondaryOptions.arrows = false;
      } else {
        this.secondaryOptions.fixedWidth = 170;
      }
    },
  },

  created: function () {
    http2
      .get("/product/get-single", {
        params: {
          slug: this.$route.params.slug,
        },
      })
      .then((response) => {
        this.pimages = response.data.data.images;
      });
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.slider-container {
  //
  .slide-image {
    margin-bottom: 26px;
  }
}
</style>

<style lang="css">
@import url("@splidejs/splide/dist/css/themes/splide-default.min.css");
.splide--nav > .splide__track > .splide__list > .splide__slide.is-active {
  border-color: #be926f;
  opacity: 1;
}

.splide--nav > .splide__track > .splide__list > .splide__slide {
  opacity: 0.5;
  border: 2px solid #b9b9b9 !important;
  border-radius: 2px;
}

.splide__arrow {
  background: #be926f;
  box-shadow: 0 0 5px 2px #0000002b;
  opacity: 1;
}

.splide__arrow svg path {
  fill: #fff;
}

.splide__arrow--prev {
  left: 6px;
}

.splide__arrow--next {
  right: 6px;
}
</style>
