<template>
  <section class="slider-section">
    <div class="container">
      <div class="col-12">
        <h1 class="title">
          <span>{{titleText[0]}}</span>
          <br />
          <span class="font-weight-bold">{{titleText[1]}}</span>
        </h1>
      </div>
      <div class="slider-container">
        <div class="slider-image-stack">
          <div class="privew-stack" v-if="slideData.length">
            <vue-glide
              :ref="refkey+'slider'"
              :options="glidOptions"
              @glide:move="arrowControlFunction"
            >
              <vue-glide-slide
                class="image-item slide--thumbniail"
                v-for="(theme, index) in slideData"
                :key="index"
              >
                <router-link :to="`/appartment/${theme.slug}`" class="slide-image">
                  <img
                    :data-src="
                    theme.images[0].path +
                    theme.images[0].file"
                    alt="image"
                    src="/images/lazy/best-selling-kitchen-lazy.jpg"
                    v-lazy-load
                  />

                  <div class="info-container">
                    <p class="lbl">{{theme.name}}</p>
                    <p class="price">
                      <span class="current">&#2547;{{theme.currentPrice}}</span>
                      <span class="strikethrough old">&#2547;{{theme.oldPrice}}</span>
                    </p>
                  </div>
                </router-link>
              </vue-glide-slide>

              <template slot="control">
                <button
                  class="glide__arrow glide__arrow--left"
                  v-show="glideArrowOption.left"
                  data-glide-dir="<"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    y="0px"
                    viewBox="0 0 512 512"
                    width="18"
                    height="20"
                  >
                    <g>
                      <path
                        d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                      />
                    </g>
                  </svg>
                </button>
                <button
                  class="glide__arrow glide__arrow--right"
                  v-show="glideArrowOption.right"
                  data-glide-dir=">"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    y="0px"
                    viewBox="0 0 512 512"
                    width="18"
                    height="20"
                  >
                    <g>
                      <path
                        d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                      />
                    </g>
                  </svg>
                </button>
              </template>
            </vue-glide>
          </div>
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
      default: "Null",
    },
    refkey: {
      type: String,
      default: "Null",
    },
    slideData: {
      type: Array,
      default: "Null",
    },
  },

  data() {
    return {
      glidOptions: {
        type: "slider",
        perView: 5,
        bound: true,
        rewind: false,
        disabled: true,
        breakpoints: {
          1200: { perView: 3 },
          991: { perView: 2 },
          575: { perView: 1.25, focusAt: "center" },
        },
      },

      glideArrowOption: {
        left: false,
        right: true,
      },
    };
  },

  computed: {
    titleText() {
      return this.title.split("|");
    },
  },

  methods: {
    arrowControlFunction() {
      if (this.$refs[this.refkey + "slider"].glide.index === 0) {
        this.glideArrowOption.left = false;
      } else {
        this.glideArrowOption.left = true;
      }
      if (
        this.$refs[this.refkey + "slider"].glide.index ===
        this.$refs[this.refkey + "slider"].$children.length -
          this.$refs[this.refkey + "slider"].glide.settings.perView
      ) {
        this.glideArrowOption.right = false;
      } else {
        this.glideArrowOption.right = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.slider-section {
  padding-top: 45px;
  padding-bottom: 45px;

  .title {
    margin-bottom: 25px;
    text-transform: uppercase;
  }
}
.slider-container {
  .slider-image-stack {
    position: relative;
    display: flex;
  }

  .privew-stack {
    position: relative;
    width: 100%;

    ul {
      margin-bottom: 0;
    }

    .image-list {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
      display: flex;
      justify-content: center;
    }

    .image-item {
      padding: 12px 0;
      min-height: 316px;
      height: 100%;

      .slide-image {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.11);
        border-radius: 10px;

        img {
          width: 100%;
          height: 210px;
          object-position: center;
          object-fit: cover;
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
        }

        .info-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          min-height: calc(100% - 210px);

          .lbl {
            color: #000000;
            font-weight: 400;
            line-height: normal;
            margin-bottom: 0;
            font-size: 18px;
            text-align: center;
          }

          .price {
            margin-bottom: 0;

            .current,
            .old {
              font-weight: 700;
              text-transform: uppercase;
              margin-left: 2px;
              margin-right: 2px;
            }

            .current {
              color: #2c2b2b;
              font-size: 20px;
            }
            .old {
              color: #7d7d7d;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .slider-section {
    .title {
      line-height: normal;
      text-align: center;
    }
  }
}

@media (max-width: 380px) {
  .slider-container {
    .slider-image-stack {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>

<style lang="css">
.glide__slides {
  margin-bottom: 0;
}
.glide__arrow {
  position: absolute;
  display: block;
  top: 50%;
  z-index: 2;
  width: 56px;
  height: 56px;
  text-transform: uppercase;
  border-radius: 50% !important;
  padding: 0 !important;
  background-color: #fff;
  border: 0;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.29);
  opacity: 1;
  cursor: pointer;
  transition: opacity 150ms ease, border 300ms ease-in-out;
  transform: translateY(-50%);
  line-height: 1 !important;
  margin-top: -9px !important;
}
.glide__arrow:focus {
  outline: none !important;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.29);
}
.glide__arrow--left {
  left: -1.75rem;
}
.glide__arrow--left svg {
  transform: scaleX(-1);
}
.glide__arrow--right {
  right: -1.75rem;
}
.glide__arrow--disabled {
  opacity: 0.33;
}

@media (max-width: 575px) {
  .glide__arrow {
    display: none;
  }
}
</style>
