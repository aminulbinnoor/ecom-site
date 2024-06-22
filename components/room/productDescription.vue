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
            </div>

            <div class="pricing">
              <!-- display current price all time, even if no discount. -->
              <span class="current-price">
                &#2547; {{ product.price - product.discount_price }}
                <!-- <span class="shipping">+ FREE Shipping</span> -->
              </span>

              <!-- if no discount, hide below 2 <span> -->
              <span v-if="product.discount_price" class="cut-of-price strikethrough">&#2547; {{ product.price }}</span>
              <!-- <span class="price-off">{{ product.discount_amount }}% off</span> -->
            </div>

            <div class="delivery-info">
              <span class="icon">
                <img src="/images/car.png" alt />
              </span>Ready to ship to the contiguous Dhaka in 2-7 Days
            </div>

            <div class="selection-option">
              <!--  -->
              <div class="color-option" v-if="hasVariation('color')">
                <p class="lbl" >Color </p>
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

              <div class="size-option" v-if="hasVariation('size')">
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

            <div class="basket-container">
              <div class="basket-content" v-if="checkProductInCart">
                <span>{{checkProductInCart}} in busket</span>

                <router-link to="/checkout" class="text-dark">View</router-link>
              </div>
              <div class="btn-container">
                <button
                  type="button"
                  class="btn btn-buy without-focus"
                  @click="addCart(product)"
                >Add To Basket</button>
              </div>
            </div>

            <!-- <div class="emi-info">
              <div>
                <div class="lbl">
                  Avail EMI
                  <img :src="'/images/arrow-point-to-right.png'" alt="arrow" />
                </div>

                <div
                  class="text"
                >Earn 5% Back in P2P Reward on every purchase with the P2P Credit Cards!</div>

                <router-link to="#" class="link">Learn more...</router-link>
              </div>

              <div class="img-container">
                <img src="/images/card.png" alt />
              </div>
            </div>-->

            <!-- <div class="other-info">
              <div class="text">
                Home Delivery-
                <span class="font-weight-bolder">500</span> Tk
              </div>

              <ul class="toggle-list">
                <li>
                  <div class="tgl-item" @click="toggleSideBar(0)">
                    <span>Click and Collect- 350 Tk</span>
                    <span class="icon">
                      <img src="/images/arrow-point-to-right.png" alt="arrow" />
                    </span>
                  </div>
                </li>
                <li>
                  <div class="tgl-item" @click="toggleSideBar(1)">
                    <span>Hassle-free returns</span>
                    <span class="icon">
                      <img src="/images/arrow-point-to-right.png" alt="arrow" />
                    </span>
                  </div>
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- side-bar -->
    <div
      class="back-drop"
      :class="activeSideBarIndex == null ? '' : 'd-block'"
      @click="toggleSideBar(null)"
    ></div>
    <div class="sider-bar-container" :class="activeSideBarIndex == null ? '' : 'fadeIn'">
      <div class="w-100 text-right">
        <button type="button" class="btn close-btn" @click="toggleSideBar(null)">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
            />
          </svg>
        </button>
      </div>
      <div class="sider-bar">
        <div class="content" v-if="activeSideBarIndex == 1">
          <h1 class="title">Returns</h1>

          <p class="text">
            <span class="lbl">STANDARD POLICY</span>
            <span>No-hassle returns accepted within 14 days of delivery</span>
          </p>

          <p class="text">
            <span
              class="lbl"
            >Please note: We have extended our returns period from 14 days to 30 days to give you plenty of time to book in a return with us during the lockdown</span>
          </p>

          <p class="text">
            <span class="lbl">CUSTOM MADE PRODUCT POLICY</span>
            <span>
              We do not accept returns for Custom MADE products
              However, you have up until 14 days after placing your order to cancel if you do change your mind
            </span>
          </p>

          <router-link class="link" to="#">See our Returns Policy</router-link>
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
      activeSideBarIndex: null,
      checkProductInCart: 0,
    };
  },
  computed: {
    hasVariation(){
        return (data) => {
            let variations = this.product.variations
            if(variations){
                const found = variations.find(item => item.type === data);
                return found;
            }else{
                return false
            }

        }
    }
},
  watch: {
    product() {
      this.checkProductInCartList();
    },
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

        this.checkProductInCartList();

        this.variations = {};
      }
    },

    checkProductInCartList() {
      if (localStorage.cartItems) {
        const collection = collect(JSON.parse(localStorage.cartItems));
        const counted = collection.filter(
          (item, key) => item.id == this.product.id
        );
        this.checkProductInCart = counted.items.length;
      }
    },

    toggleSideBar(index) {
      this.activeSideBarIndex = index;

      var el = document.querySelector("body");
      if (index == null) {
        el.removeAttribute("style");
      } else {
        el.style.overflow = "hidden";
        el.style.paddingRight = "17px";
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
      margin-bottom: 15px;
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
        margin-bottom: 0.25rem;
      }

      .color-option {
        display: flex;
        margin-bottom: 30px;
      }

      .colors-list {
        display: flex;
        flex-wrap: wrap;

        .color-item {
          margin-left: 8px;
          margin-right: 8px;

          .btn {
            padding: 2px;
            border: 2px solid #ebebeb;
            border-radius: 50%;
            span {
              width: 22px;
              height: 22px;
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
      margin-left: -8px;
      margin-right: -8px;

      .current-price,
      .price-off {
        color: #2c2b2b;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }

      .cut-of-price {
        color: #7d7d7d;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
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

      .shipping {
        font-size: 18px;
        letter-spacing: 0;
      }
    }

    .delivery-info {
      display: flex;
      margin-bottom: 35px;

      .icon {
        margin-right: 0.5rem;
      }
    }

    .basket-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
      margin-bottom: 20px;

      .basket-content {
        padding: 15px;
        box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.11);
        background-color: #f9f9f9;
        border-radius: 3px;
        color: #454545;
        font-size: 18px;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .btn-container {
        .btn-buy {
          width: 100%;
          height: 56px;
          background: #2c2b2b;
          font-size: 18px;
          font-weight: 700;
          text-transform: capitalize;
          letter-spacing: 1px;
          border-radius: 3px;
          padding-left: 30px;
          padding-right: 30px;
          color: #ffffff;

          &:hover {
            background-color: #be926f;
          }
        }
      }
    }
  }

  .emi-info {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-column-gap: 12px;

    .lbl {
      display: inline-flex;
      align-items: center;
      color: #686868;
      font-size: 18px;
      font-weight: 500;
      text-decoration: underline;
      padding: 5px 0 0 0;

      img {
        width: 12px;
        margin-left: 5px;
      }
    }

    .text {
      color: #454545;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.15;
    }

    .link {
      color: #454545;
      font-size: 15px;
      font-weight: 400;
      line-height: normal;
    }

    .img-container {
      width: 100%;
      img {
        max-width: 100%;
      }
    }
  }

  .other-info {
    .text {
      color: #454545;
      font-size: 16px;
      font-weight: 300;
      line-height: normal;
    }

    .toggle-list {
      list-style-type: none;
      padding: 0;

      .tgl-item {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        color: #454545;
        font-size: 16px;
        font-weight: 300;
        line-height: normal;
        padding-top: 6px;
        padding-bottom: 6px;
        cursor: pointer;
        border-bottom: 1px solid#afafaf;
        margin-top: 0.25rem;

        .icon {
          img {
            width: 10px;
          }
        }
      }
    }
  }
}

.back-drop {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: #00000073;
  z-index: 999;
}

.sider-bar-container {
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1010;
  padding: 25px 20px;
  background-color: #fff;
  visibility: hidden;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out, visibility 0.35s ease-in-out;

  &.fadeIn {
    visibility: visible;
    transform: translateX(0%);
  }

  .close-btn {
    padding: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: inline-flex;

    svg {
      path {
        fill: #737373;
      }
    }
  }

  .sider-bar {
    height: calc(100vh - 75px);
    overflow: hidden auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .content {
      .title {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }

      .text {
        font-size: 15px;
        .lbl {
          font-weight: 700;
        }
        span {
          display: block;
        }
      }

      .link {
        font-size: 15px;
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: 767px) {
  .sider-bar-container {
    width: 425px;
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

    .emi-info {
      grid-template-columns: 1fr 100px;
      align-items: center;
    }
  }
}
</style>
