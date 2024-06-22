<template>
  <section class="recently-viewed-styles" v-if="products.length">
    <div class="container">
      <div class="col-12">
        <h1 class="title">
          Recently
          <span class="sub">
            Viewed
            <span class="color">Products</span>
          </span>
        </h1>
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
                :to="`/product/${product.slug}`"
                class="item-card slide--thumbniail"
                v-for="(product, index) in products"
                :key="index"
                :class="`slide--${index}`"
              >
                <p class="p-title">{{product.name}}</p>
                <p class="type">Chair</p>
                <div class="item-img" v-if="product.feature_image">
                  <img
                    :src="`${cdn}/${product.feature_image[0].path}hdpi/${product.feature_image[0].file}`"
                    alt="Image"
                  />
                </div>

                <div class="pricing-container">
                  <div class="info_buy">
                    <p class="lbl">
                      Regular Price
                      <span class="prev-price">
                        ৳
                        <span class="strikethrough">{{product.price}}</span>
                      </span>
                    </p>
                  </div>

                  <div class="pricing_info">
                    <p class="price-tag">
                      <span class="regular">৳ {{ product.price - product.discount_price }}</span>
                      <span class="discount">({{ product.discount_amount }}% off)</span>
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
import { http2 } from "@/api/axios";
export default {
  data() {
    return {
      products: [],
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
            breakpoint: 1199,
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
        "/images/product/product.png",
        "/images/product/Tacoma_Carver_Dining_chair_Walnut.jpg",
        "/images/product/557e6.png",
        "/images/product/product.png",
        "/images/product/Tacoma_Carver_Dining_chair_Walnut.jpg",
        "/images/product/557e6.png",
        "/images/product/product.png",
      ],
    };
  },

  created: function () {
    http2.get("/recent-views?type=products").then((response) => {
      this.products = response.data.data;
    });
  },

  mounted() {
    this.asNavFor.push(this.$refs.slider);
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.recently-viewed-styles {
  background-color: #f1f1f1;
  padding-top: 60px;
  padding-bottom: 60px;

  .title {
    margin-bottom: 5px;
    color: #232323;
    font-size: 70px;
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

  .view-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #2c2b2b;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.97px;
    line-height: normal;
    border-radius: 0px;
    padding-left: 30px;
    padding-right: 30px;
    color: #ffffff;
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
        display: block;
        padding: 15px 30px;
        min-height: 465px;
        background: #fff;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        user-select: none;

        .p-title {
          color: #232323;
          font-size: 18px;
          font-weight: 300;
          line-height: 24.44px;
          text-align: center;
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
              font-size: 15px;
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

            .regular {
              color: $site-primary;
              font-size: 22px;
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
</style>
