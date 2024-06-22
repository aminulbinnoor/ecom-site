<template>
  <section class="shop-element">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-3">
          <div class="border h-50 rounded"></div>
        </div> -->

        <div class="col-md-12 col-12">
          <div class="col-12 mb-4 mt-2">
            <div class="hero-img-container">
              <img
                src="https://www.regalfurniturebd.com/storage/uploads/fullsize/2019-07/bedroom.png"
                alt="image"
              />
            </div>
          </div>

          <div class="list-card row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-3">
            <div class="col-12" v-for="(product, index) in products" :key="index">
              <div class="item-card">
                <p class="title">{{ product.name }}</p>
                <div class="item-img" v-if="product.feature_image">
                  <img
                    class="cover-img"
                    :src="'/images/lazy/best-selling-products-lazy.jpg'"
                    :data-src="
                  `${cdn}/${product.feature_image[0].path}hdpi/${product.feature_image[0].file}`
                "
                    alt="Image"
                    v-lazy-load

                  />

                  <!-- hover -->
                  <div class="show-details-lnk">
                    <router-link class="view-btn" :to="`/product/${product.slug}`">
                      View Details
                      <img :src="'/images/arrow.svg'" alt="icon" />
                    </router-link>

                    <button type="button" class="btn without-focus fav-btn">
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="14"
                          viewBox="0 0 17 14"
                        >
                          <g>
                            <path
                              fill="#999"
                              d="M11.99.02a4.322 4.322 0 0 0-3.434 1.689A4.323 4.323 0 0 0 5.122.019C2.728.02.78 1.975.78 4.38c0 1.13.43 2.202 1.211 3.018l6.124 6.18.441.445.441-.444 6.008-6.063a4.324 4.324 0 0 0 1.327-3.136c0-2.404-1.948-4.36-4.342-4.36z"
                            />
                          </g>
                        </svg>
                      </span>

                      <span>Add to wishlist</span>
                    </button>
                  </div>
                </div>

                <div class="pricing-container">
                  <div class="info_buy">
                    <p class="lbl">
                      Regular Price
                      <span class="prev-price">
                        ৳
                        <span class="strikethrough">{{ product.price }}</span>
                      </span>
                    </p>
                    <!-- <button type="button" class="btn without-focus btn-cart">
                  <img :src="'/images/cart.svg'" alt="cart icon" />
                    </button>-->
                  </div>

                  <div class="pricing_info">
                    <p class="price-tag">
                      <span class="regular">৳ {{ product.price - product.discount_price }}</span>
                      <!-- <span class="discount">({{ product.discount_amount }}% off)</span> -->
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    };
  },

  mounted() {
    http2.get("/product/get-all-data").then((res) => {
      this.products = res.data.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");

.shop-element {
  margin-bottom: 60px;

  //   .heading {
  //     color: #454545;
  //     font-size: 50px;
  //     font-weight: 200;
  //     margin-bottom: 20px;

  //     .sub {
  //       font-weight: 100;
  //       font-size: 30px;
  //     }
  //   }

  .hero-img-container {
    width: 100%;
    border-radius: 2px;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: inherit;
    }
  }
}

.item-card {
  padding: 20px 36px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  min-height: 405px;
  transition: all 0.35s ease-in-out;
  user-select: none;
  display: flex;
  flex-direction: column;

  .title {
    color: #232323;
    font-size: 18px;
    font-weight: 300;
    line-height: 24.44px;
    text-align: center;
    margin-bottom: auto;
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
    height: 190px;
    margin-bottom: 10px;
    text-align: center;

    .cover-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .show-details-lnk {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.85);
      opacity: 0;
      visibility: hidden;
      transform: scale(0.85);
      transition: all 0.35s ease-in-out;

      .view-btn {
        width: 145px;
        height: 46px;
        background-color: #232323;
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        padding: 13px 20px;
        margin-bottom: 16px;

        img {
          margin-left: 5px;
          transform: translateX(0px);
          transition: transform 0.35s ease-in-out;
        }
        &:hover {
          background-color: $site-primary;

          img {
            transform: translateX(8px);
          }
        }
      }

      .fav-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999999;
        font-size: 14px;
        font-weight: 500;

        .icon {
          margin-right: 10px;
        }

        &:hover {
          svg {
            path {
              fill: #656565;
            }
          }

          color: #656565;
        }
      }
    }
  }

  .pricing-container {
    .info_buy {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }

    .lbl {
      color: #7d7d7d;
      font-size: 14px;
      font-weight: 400;
      line-height: 26.66px;
      text-align: center;
      margin-bottom: 0;
      width: 100%;
    }

    .prev-price {
      font-weight: 500;
    }

    .btn-cart {
      display: inline-flex;
      padding: 0 2px;

      img {
        width: 14px;
      }
    }

    .pricing_info {
      .price-tag {
        display: flex;
        justify-content: center;
        align-items: baseline;
      }

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

  &:hover {
    //transform: scale(1.015);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    .title {
      color: $site-primary;
    }

    .show-details-lnk {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }
}
</style>
