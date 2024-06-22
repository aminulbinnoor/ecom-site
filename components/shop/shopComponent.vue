<template>
  <section class="shop-element">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <div class="col-12 mb-4 mt-2">
            <div class="hero-img-container">
              <img v-if="category.banner_image"
                :src="`${cdn}/${category.banner_image[0].path}hdpi/${category.banner_image[0].file}`"
                alt="image"
              />
            </div>
          </div>

          <div class="d-block pt-4">
            <div class="list-card row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 gy-5">
              <div
                class="col-12 position-relative"
                v-for="(product, index) in products"
                :key="index"
              >
                <div class="tag" v-if="product.discount_price">Sale</div>
                <!-- <button type="button" class="btn without-focus btn-fav">
                  <img :src="'/images/like-icon.svg'" alt="favorite icon" />
                </button> -->

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
                      <span class="prev-price" v-if="product.discount_price">
                        ৳&nbsp;
                        <span class="strikethrough">{{ product.price }}</span>
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <client-only>
                <infinite-loading @infinite="infiniteHandler">
                    <div slot="no-more"></div>
                </infinite-loading>
            </client-only>
          </div>



        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { http2 } from "@/api/axios";
import InfiniteLoading from 'vue-infinite-loading';


export default {
    components:{
        'infinite-loading': InfiniteLoading
    },
  data() {
    return {
      products: [],
      category: '',
      page: 1,
    };
  },
  methods: {
      infiniteHandler($state){

              http2.get("/product/get-all-data",{
                  params:{
                      category: this.$route.params.id,
                      page: this.page
                  },
              }).then((res) => {
                  if(this.page > res.data.data.last_page) {
                      $state.complete()
                  }else{
                      this.products.push(...res.data.data.data);
                      this.page += 1
                      $state.loaded();
                  }
              });
      },


  },

  mounted() {
      http2.get("/product/get-category",{params:{category: this.$route.params.id}}).then((res) => {
        this.category = res.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");

.shop-element {
  margin-bottom: 60px;

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

.tag {
  position: absolute;
  left: 23px;
  top: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  background-color: #212121;
  padding: 4px 5px;
  z-index: 99;
  user-select: none;
  line-height: 1;
}

.btn-fav {
  position: absolute;
  right: 23px;
  top: 11px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.09);
  background-color: #ffffff;
  border-radius: 50%;
  z-index: 99;

  img {
    width: 20px;
  }
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
</style>
