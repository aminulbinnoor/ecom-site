<template>
  <section class="partner-section" v-if="slides.length">
    <div class="container">
      <div class="co-12">
        <h1 class="title">Our Brand Partners</h1>
      </div>
      <!--  -->

      <div class="slider-container">
        <div class="slider-image-stack">
          <button type="button" class="btn btn-prev without-focus" @click="$refs.slider.goToPrev()">
            <img :src="'/images/arrow.png'" alt="left arrow" />
          </button>
          <div class="image-stack">
            <!--  -->
            <agile ref="slider" :options="options" :as-nav-for="asNavFor">
              <div
                class="image-item slide--thumbniail"
                v-for="(slide, index) in slides"
                :key="index"
                :class="`slide--${index}`"
              >
                <div class="slide-image">
                  <img
                    :data-src="cdn +'/' +slide.images[0].path +'hdpi/' +slide.images[0].file"
                    alt="image"
                    v-lazy-load
                  />
                </div>
              </div>
            </agile>
            <!--  -->
          </div>
          <button type="button" class="btn btn-next without-focus" @click="$refs.slider.goToNext()">
            <img :src="'/images/arrow.png'" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { http2 } from "@/api/axios";
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    cssstyle: {
      type: Object,
      default: function () {
        return { background: false };
      },
    },
  },
  data() {
    return {
      asNavFor: [],

      options: {
        autoplay: false,
        centerMode: true,
        navButtons: false,
        dots: false,
        slidesToShow: 2,
        initialSlide: 0,
        autoplay: true,
        timing: "ease-in-out",
        responsive: [
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 7,
            },
          },
        ],
      },

      slides: [],
    };
  },

  created: function () {
    http2.get("/brand-partner/lists").then((response) => {
      this.slides = response.data.data;
    });
  },

  mounted() {
    this.asNavFor.push(this.$refs.slider);
  },
};
</script>

<style lang="scss" scoped>
.partner-section {
  padding-top: 60px;
  padding-bottom: 60px;

  .title {
    color: #454545;
    font-size: 70px;
    font-weight: 200;
    line-height: 60px;
    text-align: center;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      width: 86px;
      height: 2px;
      margin: auto;
      background-color: $site-primary;
    }
  }

  .slider-container {
    padding-top: 50px;
    .slider-image-stack {
      position: relative;
      display: flex;
      padding-left: 35px;
      padding-right: 35px;

      .btn-prev {
        left: 0;
        img {
          transform: rotate(180deg);
        }
      }

      .btn-next {
        right: 0;
      }

      .btn-next,
      .btn-prev {
        position: absolute;
        padding: 0;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.75;

        img {
          width: 30px;
        }

        &:hover {
          opacity: 1;
        }
      }
    }

    .image-stack {
      position: relative;
      width: 100%;

      .image-list {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
      }

      .image-item {
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;

        .slide-image {
          position: relative;
          display: block;
          width: 100%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            transition: all 0.3s ease-in-out;
            // filter: grayscale(1) opacity(0.8);
          }
        }
        &:hover {
          img {
            filter: grayscale(0) opacity(1);
          }
        }
      }
    }

    .agile__actions {
      display: none;
    }
  }
}

@media (max-width: 575px) {
  .partner-section {
    .title {
      font-size: 40px;
      line-height: 1.15;
    }

    .slider-container {
      .image-stack {
        .image-item {
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .partner-section {
    .slider-container {
      .slider-image-stack {
        .btn-next,
        .btn-prev {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.partner-section {
  .slider-container {
    .image-stack {
      .image-item {
        &.agile__slide--active {
          .slide-image {
            img {
              filter: grayscale(0) opacity(1);
            }
          }
        }
      }
    }
  }
}
</style>
