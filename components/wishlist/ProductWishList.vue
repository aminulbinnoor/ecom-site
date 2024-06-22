<template>
  <section class="wishlist-section">
    <div class="container">
      <div class="col-12">
        <h1 class="title">Wish list</h1>
      </div>

      <div class="col-12">
        <div class="tab-btn-container">
          <router-link to="/wishlist/looks" class="btn tab-btn">Look(s)</router-link>
          <router-link to="/wishlist/products" class="btn tab-btn">Product(s)</router-link>
        </div>
      </div>

      <div class="col-12 pt-3">
        <!--  -->
        <div class="wish-list">
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
    http2.get("/wishlists?type=products").then((response) => {
      this.products = response.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.wishlist-section {
  .title {
    text-align: center;
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    margin-bottom: 40px;
  }

  .tab-btn-container {
    margin-left: -25px;
    margin-right: -25px;
  }

  .tab-btn {
    position: relative;
    margin-bottom: 55px;
    width: 160px;
    height: 35px;
    border-radius: 2px;
    border: 1px solid $site-primary;
    background-color: #dfdfdf;
    margin-left: 25px;
    margin-right: 25px;
    font-size: 18px;
    font-weight: 700;
    padding: 4px 1rem;

    &.active {
      background-color: $site-primary;
      color: #fff;
      &::before {
        content: "";
        position: absolute;
        height: 28px;
        width: 120px;
        left: 0;
        right: 0;
        top: 100%;
        background-color: rgba($color: $site-primary, $alpha: 0.3);
        margin: auto;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 28px);
        width: 0;
        height: 0;
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-top: 24px solid rgba($color: $site-primary, $alpha: 0.3);
        margin: auto;
      }
    }
  }
  .wish-list {
    width: 100%;
    display: block;
    margin-bottom: 85px;

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
}

@media (max-width: 575px) {
  .wishlist-section {
    .title {
      font-size: 45px;
      line-height: normal;
    }

    .tab-btn-container {
      margin-left: 0;
      margin-right: 0;

      .tab-btn {
        width: 120px;
        font-size: 15px;
        line-height: 26px;
        margin-left: 10px;
        margin-right: 10px;

        &.active {
          &::before {
            width: 100px;
            height: 20px;
          }
          &::after {
            top: calc(100% + 20px);
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
          }
        }
      }
    }
  }
}
</style>
