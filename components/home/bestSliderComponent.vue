<template>
  <section
    v-if="products.length"
    class="best-slider-section"
    :class="{ bg_whitesmoke: cssstyle.background }"
  >
    <div class="container">
      <div class="col-12">
        <h1 class="title">
          Best
          <span class="sub">
            Selling
            <span class="color">{{ title }}</span>
          </span>
        </h1>
      </div>
      <div class="slider-container">
        <div class="slider-image-stack">
          <div class="image-stack">
            <vue-glide :options="glidOptions">
              <vue-glide-slide
                class="image-item slide--thumbniail"
                v-for="(product, index) in products"
                :key="index"
              >
                <router-link :to="`/product/${product.slug}`" class="slide-image">
                  <img
                    :data-src="`${cdn}/${product.feature_image[0].path}hdpi/${product.feature_image[0].file}`"
                    alt="image"
                    src="/images/lazy/best-selling-kitchen-lazy.jpg"
                    v-lazy-load
                  />

                  <div class="info-container">
                    <p class="lbl">{{ product.name }}</p>
                  </div>
                </router-link>
              </vue-glide-slide>

              <template slot="control">
                <button class="glide__arrow glide__arrow--left without-focus" data-glide-dir="<">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width="18"
                    height="18"
                  >
                    <path
                      d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
                    />
                  </svg>
                </button>
                <button class="glide__arrow glide__arrow--right without-focus" data-glide-dir=">">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    width="18"
                    height="18"
                  >
                    <path
                      d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
                    />
                  </svg>
                </button>
              </template>
            </vue-glide>

            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    products: {
      type: Array,
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
      glidOptions: {
        type: "slider",
        perView: 4,
        bound: true,
        rewind: false,
        disabled: true,
        breakpoints: {
          1200: { perView: 3 },
          991: { perView: 2 },
          575: { perView: 1.25, focusAt: "center" },
        },
      },

      // slides: [
      //   {
      //     caption:
      //       "Abilio L Shaped White and Silver Auburn Oak Modular Kitchen",
      //     image:
      //       "/images/best-slider/abilio-l-shaped-white-and-silver-auburn-oak-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Agusti L Shaped Creamy White and Silver Modular Kitchen",
      //     image: "/images/best-slider/agusti-l-shaped-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Brina L-shaped Black Modular Kitchen",
      //     image:
      //       "/images/best-slider/brina-l-shaped-black-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Kelly L Shaped Modular Kitchen",
      //     image: "/images/best-slider/kelly-l-shaped-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Munnar L Shaped Modular Kitchen",
      //     image: "/images/best-slider/munnar-l-shaped-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Ticino Straight Modular Kitchen",
      //     image: "/images/best-slider/ticino-straight-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Paradiso Straight Modular Kitchen",
      //     image: "/images/best-slider/paradiso-straight-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Rivoli L Shaped Modular Kitchen",
      //     image: "/images/best-slider/rivoli-l-shaped-modular-kitchen.webp",
      //   },
      //   {
      //     caption: "Dremlin U Shaped Modular Kitchen",
      //     image: "/images/best-slider/dremlin-u-shaped-modular-kitchen.webp",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.best-slider-section {
  padding-top: 60px;
  padding-bottom: 60px;

  &.bg_whitesmoke {
    background-color: #f1f1f1;
  }

  .title {
    margin-bottom: 5px;
    color: #232323;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    display: flex;
    padding-left: 40px;
    align-items: center;

    .sub {
      display: inline-flex;
      flex-direction: column;
      font-size: 30px;
      line-height: 1;
      padding-left: 10px;
      font-weight: 300;
    }
  }

  .color {
    color: $site-primary;
    font-weight: 600;
  }

  .slider-container {
    .slider-image-stack {
      position: relative;
      display: flex;
      padding-left: 35px;
      padding-right: 35px;
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
        padding: 0;
        height: 335px;

        .slide-image {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          border: 1px solid #000;
          overflow: hidden;
          border-radius: 2px;
          box-shadow: 0 0 10px 4px #0000001a;

          img {
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
            transition: all 0.6s ease-in-out;
            border-radius: inherit;
          }

          &:hover {
            img {
              transform: scale(1.05);
            }
          }

          .info-container {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            text-align: center;
            padding-bottom: 1rem;
            background: linear-gradient(180deg, #00000006, rgba(0, 0, 0, 0.76));

            .lbl,
            .looks-count {
              color: #fff;
              font-weight: 600;
              margin-bottom: 0;
            }

            .lbl {
              font-size: 16px;
              padding-left: 12px;
              padding-right: 12px;
              line-height: 1.35;
            }

            .looks-count {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .best-slider-section {
    .title {
      padding-left: 0;
      justify-content: center;
      font-size: 50px;
      line-height: normal;
      .sub {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 380px) {
  .best-slider-section {
    .slider-container {
      .slider-image-stack {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}
</style>


