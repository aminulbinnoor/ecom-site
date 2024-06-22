<template>
  <client-only>
    <section class="easy-step-slide">
      <div class="easy-step-box" :style="cssVars">
        <div class="container">
          <div class="col-12">
            <h1 class="title">
              <span class="cap-letter">5</span>
              <div>
                <span class="head">easy steps</span>
                <span class="sub-head">to complete your interiors</span>
              </div>
            </h1>
          </div>

          <!-- slide -->
          <div class="slider-container">
            <ul class="steper">
              <li class="step-item">
                <div
                  class="step"
                  @click="$refs.main.goTo(0)"
                  :class="{ active: currentSlideIndex >= 0 }"
                >
                  <div class="step-count">1</div>
                  <div class="lbl">Meet designer</div>
                </div>
              </li>
              <li class="step-item">
                <div
                  class="step"
                  @click="$refs.main.goTo(1)"
                  :class="{ active: currentSlideIndex >= 1 }"
                >
                  <div class="step-count">2</div>
                  <div class="lbl">Seal the deal</div>
                </div>
              </li>
              <li class="step-item">
                <div
                  class="step"
                  @click="$refs.main.goTo(2)"
                  :class="{ active: currentSlideIndex >= 2 }"
                >
                  <div class="step-count">3</div>
                  <div class="lbl">Place the order</div>
                </div>
              </li>
              <li class="step-item">
                <div
                  class="step"
                  @click="$refs.main.goTo(3)"
                  :class="{ active: currentSlideIndex >= 3 }"
                >
                  <div class="step-count">4</div>
                  <div class="lbl">Installation begins</div>
                </div>
              </li>
              <li class="step-item">
                <div
                  class="step"
                  @click="$refs.main.goTo(4)"
                  :class="{ active: currentSlideIndex >= 4 }"
                >
                  <div class="step-count">5</div>
                  <div class="lbl">Move in</div>
                </div>
              </li>
            </ul>

            <!-- slider -->
            <div class="slider">
              <!--  -->
              <agile
                class="slider-image"
                ref="main"
                :options="options"
                :as-nav-for="asNavFor"
                @after-change="getCurrentSlide($event)"
              >
                <div
                  class="slide"
                  v-for="(slide, index) in slides"
                  :key="index"
                  :class="`slide--${index}`"
                >
                  <div class="slide-caption">
                    <p class="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur earum dolores, officiis dolorum cupiditate quo.
                      Numquam, maiores temporibus. Accusamus asperiores nemo ipsum
                      molestias mollitia et consectetur non, voluptatum quisquam
                      doloremque culpa natus amet, reprehenderit maiores?
                    </p>
                  </div>
                  <!-- slide image -->
                  <img :data-src="slide" alt="Image"  v-lazy-load/>
                </div>
              </agile>
              <!--  -->
              <!-- slider control -->
              <button
                type="button"
                class="btn prev-btn without-focus"
                @click="$refs.main.goToPrev()"
              >
                <img :src="'/images/lg-arrow.png'" alt="icon" />
              </button>
              <button
                type="button"
                class="btn next-btn without-focus"
                @click="$refs.main.goToNext()"
              >
                <img :src="'/images/lg-arrow.png'" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </section>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      currentSlideIndex: 0,

      asNavFor: [],

      options: {
        autoplay: false,
        centerMode: true,
        navButtons: false,
        dots: false,
        slidesToShow: 1,
        initialSlide: 0,
        // responsive: [
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       //   slidesToShow: 5
        //     }
        //   },

        //   {
        //     breakpoint: 1000,
        //     settings: {
        //       slidesToShow: 4
        //     }
        //   },
        //   {
        //     breakpoint: 1300,
        //     settings: {
        //       slidesToShow: 5
        //     }
        //   }
        // ]
      },

      slides: [
        "/images/home/meet-designer.png",
        "/images/home/seal-deal.png",
        "/images/home/place-order.png",
        "/images/home/installation.png",
        "/images/home/move-in.png",
      ],

      stepWidth: "20%",
    };
  },

  computed: {
    cssVars() {
      return {
        "--width": this.stepWidth,
      };
    },
  },

  mounted() {
    this.asNavFor.push(this.$refs.main);
  },

  methods: {
    getCurrentSlide(event) {
      this.currentSlideIndex = event.currentSlide;

      this.stepWidth = (this.currentSlideIndex + 1) * 20 + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.easy-step-slide {
  padding-top: 60px;
  padding-bottom: 60px;

  .easy-step-box {
    position: relative;
    transition: all 0.4s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 3px;
      background-color: $site-primary;
      width: 100%;
      left: 0;
      right: 0;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: var(--width);
      height: 13px;
      background-color: $site-primary;
      z-index: 99;
      transition: all 0.4s ease-in-out;
      box-shadow: 2px -2px 10px 4px #00000026;
    }
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    line-height: normal;

    .head {
      display: block;
      color: #454545;
      font-size: 80px;
      font-weight: 200;
      line-height: normal;
    }

    .sub-head {
      display: block;
      color: #454545;
      font-size: 40px;
      font-weight: 300;
      line-height: normal;
    }

    .cap-letter {
      margin-right: 6px;
      color: $site-primary;
      font-size: 150px;
      font-weight: 700;
      line-height: normal;
    }
  }

  .slider-container {
    padding-top: 1.25rem;
    .steper {
      list-style-type: none;
      padding: 0;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      user-select: none;

      .step-count {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        width: 50px;
        height: 50px;
        color: #454545;
        font-size: 28px;
        font-weight: 300;
        text-align: center;
        background-color: #dddddd;
        border-radius: 50%;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .lbl {
        color: #5b5b5b;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        user-select: none;
      }

      .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 22px;
        user-select: none;
        cursor: pointer;

        &.active {
          .step-count {
            color: #fff;
            background-color: $site-primary;
          }

          .lbl {
            color: $site-primary;
          }
        }
      }

      .step-item {
        position: relative;
        min-width: 208px;
        &:not(:last-child) {
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            left: calc(100% - 78px);
            background-repeat: no-repeat;
            width: 100%;
            background-size: contain;
            z-index: -1;
          }

          &:nth-child(2n + 1) {
            &::after {
              background-image: url("/images/wave-up.png");
              top: 52px;
            }
          }
          &:nth-child(2n) {
            &::after {
              background-image: url("/images/wave-down.png");
              top: 5px;
            }
          }
        }
      }
    }
    .slider {
      position: relative;

      .next-btn {
        right: 0;
      }

      .prev-btn {
        left: 0;

        img {
          transform: rotate(180deg);
        }
      }

      .next-btn,
      .prev-btn {
        padding: 0;
        margin: auto;
        display: block;
        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        bottom: auto;

        img {
          width: 48px;
        }
      }
    }
    .slider-image {
      position: relative;
      width: 100%;

      .slide {
        height: 560px;
        padding: 1.5rem 3rem;

        .slide-caption {
          max-width: 70%;
          margin-left: auto;
          margin-right: auto;

          .text {
            color: #454545;
            font-size: 16px;
            font-weight: 300;
            text-align: center;
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
        object-position: center;
      }
    }
  }
}

@media (max-width: 1200px) {
  .easy-step-slide {
    .slider-container {
      .steper {
        align-items: baseline;
        .step {
          padding-left: 10px;
          padding-right: 10px;
        }
        .lbl {
          font-size: 15px;
        }
        .step-item {
          min-width: 20%;
          width: 20%;
          flex: 0 0 auto;
          &:not(:last-child) {
            &::after {
              left: calc(100% - 50%);
              width: 100%;
            }

            &:nth-child(2n + 1) {
              &::after {
                background-image: url("/images/wave-up.png");
                top: 46px;
              }
            }
            &:nth-child(2n) {
              &::after {
                background-image: url("/images/wave-down.png");
                top: 25px;
              }
            }
          }
        }

        .step-count {
          width: 40px;
          height: 40px;
          font-size: 24px;
        }
      }

      .slider {
        .prev-btn,
        .next-btn {
          img {
            width: 28px;
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .easy-step-slide {
    .slider-container {
      .steper {
        // align-items: baseline;
        .step {
          // padding-left: 10px;
          // padding-right: 10px;
        }
        .lbl {
          font-size: 13px;
        }
        // .step-item {
        //   min-width: 20%;
        //   width: 20%;
        //   flex: 0 0 auto;
        //   &:not(:last-child) {
        //     &::after {
        //       left: calc(100% - 50%);
        //       width: 100%;
        //     }

        //     &:nth-child(2n + 1) {
        //       &::after {
        //         background-image: url("/images/wave-up.png");
        //         top: 46px;
        //       }
        //     }
        //     &:nth-child(2n) {
        //       &::after {
        //         background-image: url("/images/wave-down.png");
        //         top: 25px;
        //       }
        //     }
        //   }
        // }

        .step-count {
          width: 30px;
          height: 30px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
