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
          <div class="privew-stack" v-if="appriciations.length">
            <vue-glide
              :ref="refkey+'slider'"
              :options="appriciantionGlidOptions"
              @glide:move="arrowControlFunction"
            >
              <vue-glide-slide
                class="image-item slide--thumbniail"
                v-for="(slide, index) in appriciations"
                :key="index"
              >
                <div
                  class="slide-image"
                  data-toggle="modal"
                  data-target="#videoModal"
                  @click="videoNo = index"
                >
                  <img
                    :data-src="`${cdn}/${slide.thumbnail_image[0].path}hdpi/${slide.thumbnail_image[0].file}`"
                    alt="image"
                    :src="'/images/lazy/appriciation-thumbnails-lazy.jpg'"
                    v-lazy-load
                  />

                  <!-- play icon  -->
                  <div class="play-icon-holder">
                    <span class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.861 163.861">
                        <g>
                          <path
                            d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
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

    <!-- Modal -->
    <div
      class="modal appriciationVideoModal fade"
      id="videoModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="videoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close without-focus"
            data-dismiss="modal"
            aria-label="Close"
            @click="videoNo = undefined"
          ></button>
          <div class="modal-body" v-if="appriciations[videoNo]">
            <iframe
              width="100%"
              height="600"
              :src="appriciations[videoNo].url"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
  },

  data() {
    return {
      appriciantionGlidOptions: {
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

      glideArrowOption: {
        left: false,
        right: true,
      },

      appriciations: [],
      // current video src index
      videoNo: undefined,
    };
  },

  created() {
    http2.get("/appriciation/lists").then((response) => {
      //   this.appriciations = response.data.data;
      this.appriciations = [...response.data.data, response.data.data[0]];
    });
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
    color: #2c2c2c;
    font-size: 40px;
    font-weight: 300;
    line-height: 1;
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

    .image-list {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
      display: flex;
      justify-content: center;
    }

    .image-item {
      padding: 12px 0;
      height: 316px;

      .slide-image {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.11);
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: cover;
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
          transition: all 0.8s ease-in-out;
        }

        .play-icon-holder {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;

          .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #0000000c;
            border: 2px solid #fff;
            transition: all 0.6s ease-in-out;
            cursor: pointer;
          }
          svg {
            width: 25px;
            height: 25px;

            path {
              fill: #fff;
            }
          }
        }

        &:hover {
          img {
            transform: scale(1.05);
          }

          .play-icon-holder {
            .icon {
              box-shadow: 0 0 10px 5px #00000026;
            }
          }
        }
      }
    }
  }
}

.appriciationVideoModal {
  .modal-dialog {
    max-width: 70%;
  }

  .modal-body {
    padding: 0;
    background: transparent;
  }

  .modal-content {
    position: relative;
    background: transparent;
    border: 0;
    .btn-close {
      position: absolute;
      right: -18px;
      z-index: 9999;
      top: -18px;
      background-color: #fff;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
}

@media (max-width: 575px) {
  .slider-section {
    .title {
      font-size: 30px;
      line-height: normal;
      text-align: center;
    }
  }

  .slider-container {
    .privew-stack {
      .image-item {
        height: 280px;
      }
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
