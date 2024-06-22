<template>
  <section class="slider_and_des">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Breadcrumb></Breadcrumb>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8" v-if="product">
          <!-- slider -->
          <Slider :pimages="product.images"></Slider>
        </div>
        <div class="col-lg-4">
          <div class="right-side">
            <div class="product-element mb-2">
              <h1 class="product-name">{{ product.name }}</h1>

              <button type="button" class="add-to-fav btn without-focus">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 30 27">
                  <g>
                    <path
                      fill="#454545"
                      d="M14.676 6.235C10.876-2.672.073-.594.002 9.745c-.04 5.678 5.144 7.8 8.595 10.07 3.347 2.201 5.728 5.212 6.101 6.495.32-1.256 2.973-4.353 6.07-6.556 3.387-2.41 8.635-4.393 8.595-10.07-.071-10.365-11.061-12-14.687-3.449z"
                    />
                  </g>
                </svg>
              </button>
            </div>

            <div class="rate-and-review">
              <client-only>
                <StarRating
                  :rating="3.5"
                  :increment="0.1"
                  :read-only="true"
                  :star-size="14"
                  :show-rating="false"
                  :active-color="['#777777']"
                  :active-border-color="['#777777']"
                ></StarRating>
              </client-only>

              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-link without-focus"
                data-toggle="modal"
                data-target="#exampleModal"
              >156 reviews</button>
            </div>

            <div class="scrollable">
              <div class="description">
                {{ product.short_description }}
                <!-- <button
                  type="button"
                  class="btn p-0 without-focus see-more-btn"
                >See More ...</button>-->
              </div>
            </div>

            <div class="selection-option">
              <!--  -->
              <div class="color-option">
                <p class="lbl">Color</p>
                <div class="colors-list">
                  <div
                    class="color-item"
                    v-for="(pv, index) in product.variations"
                    :key="index"
                    :class="variations[pv.type] == pv.value ? 'active' : ''"
                    v-if="pv.type === 'color'"
                    @click="pickVariation(pv.type,pv.value)"
                  >
                    <div class="btn">
                      <span
                        :style="{
                          backgroundColor: `${pv.value}`
                        }"
                      ></span>
                    </div>
                  </div>
                  <!--  -->
                </div>
              </div>

              <div class="size-option">
                <p class="lbl">Size</p>

                <div class="size-list">
                  <div
                    class="size-item"
                    v-for="(pv, index) in product.variations"
                    v-if="pv.type === 'size'"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      name="options"
                      :id="`${pv.type}-${index}`"
                      autocomplete="off"
                      :checked="variations[pv.type] == pv.value ? true : false"
                      @click="pickVariation(pv.type,pv.value)"
                    />
                    <label
                      class="btn without-focus"
                      for="KingSize"
                      @click="pickVariation(pv.type,pv.value)"
                    >{{pv.value}}</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="pricing">
              <!-- display current price all time, even if no discount. -->
              <span class="current-price">&#2547; {{ product.price }}</span>

              <!-- if no discount, hide below 2 <span> -->
              <span class="cut-of-price strikethrough">&#2547; 245,000</span>
              <!-- <span class="price-off">{{ product.discount_amount }}% off</span> -->
            </div>

            <div class="emi-info">
              <router-link to="#" class="btn emi-btn without-focus">
                Avail EMI
                <img :src="'/images/arrow-point-to-right.png'" alt="arrow" />
              </router-link>
            </div>

            <div class="btn-container">
              <button
                type="button"
                class="btn btn-buy without-focus"
                @click="addCart(product)"
              >Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb";
import Slider from "@/components/global/SliderWithPreview";
import collect from "collect.js";
export default {
  props: ["product"],
  components: {
    Breadcrumb,
    Slider,
  },
  data() {
    return {
      variations: {},
    };
  },
  methods: {
    pickVariation(name, value) {
      this.variations[name] = value;
      this.$forceUpdate();
    },
    addCart(cartProduct) {
      let theCartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      let a = collect(theCartItems).where("id", cartProduct.id).sum("quantity");
      /* order limit check */
      if (cartProduct.order_limit <= a) {
        this.$toast.error("Order limit exceed", { duration: 3000 });
        return;
      }
      let variations = collect(cartProduct.variations)
        .pluck("type")
        .unique()
        .all();
      let variationRequired = true;
      variations.forEach((item, i) => {
        if (variationRequired) {
          if (this.variations[item]) {
          } else {
            this.$toast.error(`Pick the ${item}`, { duration: 3000 });
            variationRequired = false;
          }
        }
      });

      if (variationRequired) {
        let product = {
          id: cartProduct.id,
          name: cartProduct.name,
          quantity: 1,
          price: cartProduct.price,
          discount_price: cartProduct.discount_price ?? 0,
          variations: this.variations,
          image: {
            path: cartProduct.feature_image[0].path,
            file: cartProduct.feature_image[0].file,
          },
        };
        this.$toast.success("Product added to cart", { duration: 3000 });
        this.$store.dispatch("addCart", product);

        this.variations = {};
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.slider_and_des {
  margin-bottom: 60px;
  .apartment_type {
    color: #be926f;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .title {
    color: #454545;
    font-size: 60px;
    font-weight: 300;
    margin-bottom: 0;
  }

  .right-side {
    .product-element {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-column-gap: 10px;

      .add-to-fav {
        height: 25px;
        padding: 0;
        margin-top: 4px;
      }
    }
    .product-name {
      color: #454545;
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 0;
    }
    .sku {
      color: #454545;
      font-size: 14px;
      font-weight: 500;
    }

    .scrollable {
      margin-bottom: 30px;
      height: 83px;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .see-more-btn {
      color: #000;
      font-weight: 500;

      &:hover {
        color: $site-primary;
      }
    }

    .rate-and-review {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .btn-link {
        margin-left: 15px;
        text-decoration: none;
        padding: 0;
        color: #797979;
        font-size: 14px;
        font-weight: 300;
      }
    }

    .description {
      color: #454545;
      font-size: 14px;
      line-height: 1.5em;
      font-weight: 300;
      padding-bottom: 5px;
    }

    .selection-option {
      .lbl {
        color: #5b5b5b;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .color-option {
        margin-bottom: 30px;
      }

      .colors-list {
        display: flex;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;

        .color-item {
          margin-left: 8px;
          margin-right: 8px;

          .btn {
            padding: 2px;
            border: 2px solid #ebebeb;
            border-radius: 50%;
            span {
              width: 32px;
              height: 32px;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: inherit;
            }
          }

          &.active {
            .btn {
              border-color: $site-primary;
            }
          }
        }
      }

      .size-option {
        display: flex;
        margin-bottom: 30px;

        .lbl {
          margin-bottom: 0;
          margin-right: 8px;
          padding: 5px 0;
        }

        .size-list {
          margin-left: 8px;

          .size-item {
            display: inline-flex;
            min-width: 70px;
            height: 37px;
            background-color: #eaeef1;
            align-items: center;
            justify-content: center;
            color: #6c6d6e;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 10px;
            margin-left: 5px;
            margin-right: 5px;
            user-select: none;
            cursor: pointer;

            // &.active {
            //   color: #ffffff;
            //   background-color: $site-primary;
            // }

            label {
              width: 100%;
              color: #6c6d6e;
              background-color: #eaeef1;
              border-radius: 0;
              border: 2px solid rgba($site-primary, 0.2);
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              font-size: 14px;
              font-weight: 500;
            }

            .btn-check {
              &:checked + label {
                border: 2px solid $site-primary;
                //color: #ffffff;
                //background-color: $site-primary;
              }
            }
          }
        }
      }
    }

    .pricing {
      margin-bottom: 35px;
      margin-left: -8px;
      margin-right: -8px;

      .current-price,
      .price-off {
        color: $site-primary;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        padding-bottom: 5px;
        border-bottom: 1px solid $site-primary;
      }

      .cut-of-price {
        color: #7d7d7d;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        padding-bottom: 5px;
        border-bottom: 1px solid #7d7d7d;
      }

      .price-off {
        text-transform: lowercase !important;
      }

      .current-price,
      .price-off,
      .cut-of-price {
        margin-left: 8px;
        margin-right: 8px;
        word-break: keep-all;
        display: inline-block;
      }
    }
  }

  .btn-container {
    .btn-buy {
      width: 100%;
      height: 65px;
      background: #2c2b2b;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 0px;
      padding-left: 30px;
      padding-right: 30px;
      color: #ffffff;

      &:hover {
        background-color: #be926f;
      }
    }
  }

  .emi-info {
    margin-bottom: 30px;

    .emi-btn {
      display: inline-flex;
      align-items: center;
      color: $site-primary;
      font-size: 18px;
      font-weight: 500;
      text-decoration: underline;
      padding: 0;

      img {
        width: 12px;
        margin-left: 8px;
      }
    }
  }
}

@media (max-width: 991px) {
  .slider_and_des {
    .right-side {
      margin-top: 1.75rem;
    }
  }
}

@media (max-width: 575px) {
  .slider_and_des {
    .btn-container {
      .btn-buy {
        height: 56px;
      }
    }
  }
}
</style>
