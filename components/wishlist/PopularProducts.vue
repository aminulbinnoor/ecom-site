<template>
  <section class="popular-looks">
    <div class="container">
      <div class="col-12">
        <h1 class="title">Popular Products</h1>
      </div>

      <div class="popular-looks-list">
        <div
          class="list-card row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 gy-5"
          v-if="products"
        >
          <div class="col-12 position-relative" v-for="(product, index) in products" :key="index">
            <button type="button" class="btn without-focus close-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>

            <router-link :to="`/product/${product.slug}`" tag="div" class="item-card">
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
              </div>

              <div class="item-info">
                <p class="title">{{ product.name }}</p>
                <div class="pricing-container">
                  <span class="regular">৳ {{ product.price - product.discount_price }}</span>
                  <span class="prev-price">
                    ৳&nbsp;
                    <span class="strikethrough">{{ product.price }}</span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- <div class="btn-container">
        <router-link to="#" class="btn btn-view-more">VIEW MORE</router-link>
      </div>-->
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
    http2.get("/popular-products?type=products").then((response) => {
      this.products = response.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.popular-looks {
  padding-top: 85px;
  padding-bottom: 85px;

  .title {
    color: #232323;
    font-size: 70px;
    font-weight: 200;
    line-height: 108.56px;
    text-align: center;
  }

  .popular-looks-list {
    width: 100%;
    padding-top: 60px;

    .close-btn {
      position: absolute;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      box-shadow: 0 0 6px 2px #0000001a;
      top: 10px;
      right: 22px;
      z-index: 9;
      background: #fff;
    }

    .item-card {
      transition: all 0.35s ease-in-out;
      user-select: none;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;

      .title {
        color: #232323;
        font-size: 16px;
        font-weight: 400;
        line-height: 24.44px;
        margin-bottom: auto;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 48px;
        text-overflow: ellipsis;
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
        padding: 0px;
        box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        min-height: 320px;

        .cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: inherit;
        }
      }

      .item-info {
        display: flex;
        align-items: flex-start;

        .pricing-container {
          display: inline-flex;
          align-items: center;
          padding-left: 0.5rem;

          .regular {
            color: $site-primary;
            font-size: 16px;
          }

          .prev-price {
            font-size: 14px;
            margin-left: 0.35rem;
          }

          .prev-price,
          .regular {
            display: inline-flex;
            font-weight: 500;
            white-space: nowrap;
          }
        }
      }

      &:hover {
        .item-img {
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
        }

        .title {
          color: $site-primary;
        }
      }
    }
  }

  .btn-container {
    width: 100%;
    padding-top: 60px;
    text-align: center;
    .btn-view-more {
      width: 235px;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
      background: rgba($color: #000000, $alpha: 0.85);
      color: #ffffff;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 0;

      &:hover {
        background: #000;
      }
    }
  }
}

@media (max-width: 575px) {
  .popular-looks {
    padding-top: 15px;
    .title {
      font-size: 45px;
      line-height: normal;
    }

    .popular-looks-list {
      padding-top: 30px;
    }
  }
}
</style>
