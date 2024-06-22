<template>
  <section class="similar-products">
    <div class="container">
      <div class="col-12">
        <h1 class="title">{{ title }}</h1>
      </div>
      <div class="slider-container">
        <div class="slider-image-stack">
          <button type="button" class="btn btn-prev without-focus" @click="$refs.slider.goToPrev()">
            <img :src="'/images/arrow.png'" alt="left arrow" />
          </button>
          <div class="privew-stack">
            <!--  -->
            <agile ref="slider" :options="options" :as-nav-for="asNavFor">
              <router-link
                to="#"
                class="item-card slide--thumbniail"
                v-for="(slide, index) in slides"
                :key="index"
                :class="`slide--${index}`"
              >
                <p class="p-title">Shegun wooden Premium</p>
                <!-- <p class="type">Chair</p> -->
                <div class="item-img">
                  <img :src="'/images/product/product.png'" alt="Image" />
                </div>

                <div class="pricing-container">
                  <div class="info_buy">
                    <p class="lbl">
                      Regular Price
                      <span class="prev-price">
                        ৳
                        <span class="strikethrough">12000</span>
                      </span>
                    </p>
                  </div>

                  <div class="pricing_info">
                    <p class="price-tag">
                      <span class="regular">৳ 12000</span>
                      <!-- <span class="discount">(5% off)</span> -->
                    </p>
                  </div>
                </div>
              </router-link>
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
export default {
  props: {
    title: {
      type: String,
      default: null,
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
        slidesToShow: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      },

      slides: [
        "/images/product/557e6.png",
        "/images/product/557e6.png",
        "/images/product/557e6.png",
        "/images/product/557e6.png",
        "/images/product/557e6.png",
        "/images/product/557e6.png",
        "/images/product/557e6.png",
        "/images/product/557e6.png",
      ],
    };
  },

  mounted() {
    this.asNavFor.push(this.$refs.slider);
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.similar-products {
  padding-top: 60px;
  padding-bottom: 65px;

  .title {
    color: #454545;
    font-size: 40px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 35px;
    text-transform: capitalize;
  }

  .slider-container {
    .slider-image-stack {
      position: relative;
      display: flex;
      padding-left: 30px;
      padding-right: 30px;

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

    .privew-stack {
      position: relative;
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;

      .image-list {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
      }

      .item-card {
        display: flex;
        flex-direction: column;
        padding: 15px 30px;
        background: #fff;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        user-select: none;

        .p-title {
          color: #232323;
          font-size: 16px;
          font-weight: 300;
          line-height: 24.44px;
          text-align: center;
          margin-bottom: 20px;
        }

        .type {
          color: #999999;
          font-size: 15px;
          font-weight: 300;
          line-height: 26.66px;
          text-align: center;
        }

        .item-img {
          position: relative;
          width: 100%;
          height: 234px;
          margin-bottom: 10px;
          text-align: center;
        }

        img {
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: cover;
        }

        .pricing-container {
          .info_buy {
            margin-bottom: 5px;
            .lbl {
              color: #7d7d7d;
              font-size: 14px;
              font-weight: 400;
              line-height: 26.66px;
              text-align: center;
              margin-bottom: 0;
              width: 100%;
            }
          }

          .price-tag {
            display: flex;
            justify-content: center;
            align-items: baseline;
            margin-bottom: 0;

            .regular {
              color: $site-primary;
              font-size: 20px;
              font-weight: 500;
            }

            .discount {
              font-size: 14px;
              font-weight: 500;
              color: #7d7d7d;
              margin-left: 5px;
            }
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
  .similar-products {
    padding-top: 40px;
    padding-bottom: 40px;

    .title {
      font-size: 30px;
      margin-bottom: 20px;
    }

    .slider-container {
      .privew-stack {
        .item-card {
          padding: 15px;
        }
      }
    }
  }
}
</style>
