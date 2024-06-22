<template>
  <section class="checkout-section">
    <div class="container" v-if="cartProductApi.length">
      <div class="col-12">
        <div class="tab-btn-container">
          <!-- <button type="button" class="btn tab-btn">Look(s)</button> -->
          <button type="button" class="btn tab-btn active">Product(s)</button>
        </div>
      </div>

      <div class="col-12 pt-3">
        <!-- checked  -->
        <div class="cart-list" v-for="(lsp, index) in cartProductApi" :key="index">
          <!--  -->
          <div>
            <div class="img-container">
              <img :src="`${cdn}/${lsp.image.path}hdpi/${lsp.image.file}`" alt />
            </div>
          </div>
          <!--  -->
          <div class="cart-item-description">
            <div>
              <h5 class="name">{{ lsp.name }}</h5>
              <p class="sku">sku-{{ index + 1 }}</p>

              <div class="specification">
                <p class="spec-box" v-if="lsp.variations !== undefined">
                  <span class="lbl">Color</span>
                  <span
                    class="selected-spec color"
                    :style="`background-color: ${lsp.variations.color}`"
                  ></span>
                </p>
                <!--  -->
                <p class="spec-box" v-if="lsp.variations !== undefined">
                  <span class="lbl">Size</span>
                  <span class="selected-spec">{{ lsp.variations.size }}</span>
                </p>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="cart-item-qt">
            <div class="qunty">
              <input
                class="form-control without-focus"
                readonly
                type="number"
                v-model="lsp.quantity"
              />

              <div class="btn-group-vertical" role="group">
                <button
                  type="button"
                  class="btn without-focus btn-up"
                  @click="quantityIncrease(index)"
                >
                  <img :src="'/images/arrow-up.svg'" class="img-fluid" alt="icon" />
                </button>
                <button
                  type="button"
                  class="btn without-focus btn-down"
                  @click="quantityDecrease(index)"
                >
                  <img :src="'/images/arrow-up.svg'" class="img-fluid" alt="icon" />
                </button>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="unit-price">
            <div>
              <p class="prev-price" v-if="cartProductApi[index]">
                Regular Price ৳
                <span class="strikethrough">
                  {{
                  cartProductApi[index].price
                  }}
                </span>
              </p>
              <p class="regular-price" v-if="cartProductApi[index]">
                ৳
                {{
                cartProductApi[index].price -
                Math.floor(cartProductApi[index].discount_price)
                }}
                <span
                  class="cut-off"
                >(5% off)</span>
              </p>
            </div>
          </div>
          <!--  -->
          <div class="total-price">
            <p class="regular-price" v-if="cartProductApi[index]">
              ৳
              {{
              (cartProductApi[index].price -
              Math.floor(cartProductApi[index].discount_price)) *
              cartProductApi[index].quantity
              }}
            </p>
          </div>

          <div class="item-remove">
            <button
              type="button"
              class="btn-close without-focus"
              aria-label="Close"
              @click="deleteProduct(index)"
            ></button>
          </div>
        </div>
        <!--  -->
      </div>

      <div class="col-12">
        <div class="btm-action">
          <router-link to="#" class="btn btn-continue without-focus">
            <span class="mr-2">
              <img :src="'/images/left-arrow.svg'" alt="icon" />
            </span>
            Continue Shopping
          </router-link>

          <div class="total-price">
            <span class="lbl">Grand Total</span>
            <span class="amount">৳ {{ totalPrice }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- empty card design -->
    <div class v-if="cartEmpty">
      <div class="col-md-6 offset-md-5">
        <h1>your cart ie empty</h1>
      </div>
    </div>
  </section>
</template>

<script>
import { http2 } from "@/api/axios";
import collect from "collect.js";
export default {
  data() {
    return {
      quantity: 2,
      localStorageProducts: [],
      cartProductApi: [],
      totalPrice: 0,
      cartEmpty: false,
    };
  },

  methods: {
    quantityIncrease(index) {
      let theCartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      let a = collect(theCartItems)
        .where("id", this.cartProductApi[index].id)
        .sum("quantity");
      /* order limit check */
      if (this.cartProductApi[index].order_limit <= a) {
        this.$toast.error("Order limit exceed", { duration: 3000 });
        return;
      }

      this.cartProductApi[index].quantity =
        this.cartProductApi[index].quantity + 1;
      this.$toast.success("Product increment", { duration: 3000 });
      this.productSync();
    },
    quantityDecrease(index) {
      if (this.cartProductApi[index].quantity > 1) {
        this.cartProductApi[index].quantity =
          this.cartProductApi[index].quantity - 1;
        this.productSync();
        this.$toast.success("Product decrement", { duration: 3000 });
      } else {
        this.$toast.error("Product quantity minimum 1", { duration: 3000 });
      }
    },
    productsTotalPrice() {
      let total = 0;
      this.cartProductApi.forEach((item, i) => {
        total =
          total +
          (item.price - Math.floor(item.discount_price)) * item.quantity;
      });
      this.totalPrice = Math.floor(total);
    },
    productSync() {
      if (process.client) {
        let count = 0;
        this.cartProductApi.forEach((item, i) => {
          count = count + item.quantity;
        });
        this.productsTotalPrice();
        this.$store.commit("setTotalProduct", count);
        localStorage.setItem("cartItems", JSON.stringify(this.cartProductApi));
      }
    },
    deleteProduct(index) {
      this.cartProductApi.splice(index, 1);

      if (this.cartProductApi.length < 1) {
        this.cartEmpty = true;
      }

      this.productSync();
    },
    orderSubmit() {
      http2
        .post("/order/submit", {
          total: this.totalPrice,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.data.payment_method == "online") {
            location.replace(response.data.data.link);
          }
        });
    },
  },
  watch: {
    totalPrice: function () {
      this.$emit('total', this.totalPrice)
    }
   },
  mounted: function () {
    if (process.client) {
      let theCartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      this.localStorageProducts = theCartItems;

      if (theCartItems) {
        http2
          .get("/checkout/products", {
            params: { products: localStorage.getItem("cartItems") },
          })
          .then((response) => {
            this.cartProductApi = response.data.data;
            if (this.cartProductApi.length < 1) {
              this.cartEmpty = true;
            }
            this.productsTotalPrice();
            if (process.client) {
              localStorage.setItem(
                "cartItems",
                JSON.stringify(response.data.data)
              );
            }
          });
      }

      // let c = collect(theCartItems).pluck('id').all()
      // console.log(c)
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.checkout-section {
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

  .cart-list {
    display: grid;
    grid-template-columns: auto 0.8fr auto 205px 165px auto;
    grid-column-gap: 15px;
    padding: 15px;
    border: 1px solid #e6e6e6;
    margin-bottom: 20px;

    &.checked {
      background-color: #f8f8f8;
    }

    .img-container {
      width: 165px;
      height: 165px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .cart-item-qt {
      .qunty {
        display: inline-flex;
        background-color: #eeeeee;
        padding: 0 18px;

        .form-control {
          max-width: 48px;
          padding: 0;
          background: transparent !important;
          border: 0;
          text-align: right;
          color: #7b7b7b;
          font-size: 20px;
          font-weight: 500;
        }
      }

      .btn-up,
      .btn-down {
        padding: 0.25rem;
      }

      .btn-down {
        img {
          transform: rotate(180deg);
        }
      }
    }

    .unit-price,
    .total-price,
    .cart-item-qt,
    .item-remove {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cart-item-description {
      display: flex;
      align-items: center;
    }

    .unit-price,
    .total-price {
      .prev-price {
        color: #7d7d7d;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        font-weight: 500;
        margin-bottom: 3px;
      }

      .regular-price {
        margin-bottom: 0;
        color: $site-primary;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        .cut-off {
          color: #7d7d7d;
          font-size: 18px;
        }
      }
    }

    .cart-item-description {
      .name {
        color: #232323;
        font-size: 22px;
        font-weight: 300;
        line-height: 24.44px;
      }

      .sku {
        color: #454545;
        font-size: 14px;
        font-weight: 500;
      }

      .text {
        color: #454545;
        font-size: 14px;
        font-weight: 300;
      }

      .read-more-link {
        color: #292929;
        font-size: 14px;
        font-weight: 300;
        text-decoration: underline;
        padding-top: 0;
        padding-bottom: 0;
        border: 0;

        &:hover {
          color: $site-primary;
        }
      }

      .specification {
        .spec-box {
          display: flex;
          align-items: center;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .lbl {
          color: #5b5b5b;
          font-size: 18px;
          font-weight: 500;
        }

        .color {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }

        .selected-spec {
          color: #5b5b5b;
          font-size: 18px;
          font-weight: 300;
          margin-left: 20px;
        }
      }
    }
  }

  .btm-action {
    display: flex;
    justify-content: space-between;
    padding-top: 23px;
    padding-bottom: 23px;
    .btn-continue {
      display: inline-flex;
      align-items: center;
      color: #282828;
      font-size: 18px;
      font-weight: 300;
      line-height: 25px;
      padding: 0;
      img {
        display: flex;
      }
    }

    .total-price {
      display: inline-flex;
      align-items: center;
      padding-right: 25px;

      .lbl {
        color: #232323;
        font-size: 20px;
        font-weight: 300;
        line-height: 24.44px;
        margin-right: 25px;
      }

      .amount {
        color: $site-primary;
        font-size: 35px;
        font-weight: 500;
        line-height: 26.66px;
      }
    }
  }
}

@media (max-width: 1199px) {
  .checkout-section {
    .cart-list {
      grid-template-columns: 165px auto auto auto;
      grid-row-gap: 20px;

      div {
        &:nth-child(1) {
          grid-row: 1 / span 2;
          grid-column: 1;
        }
      }

      .cart-item-description {
        grid-row: 1;
        grid-column: 2 / span 2;
      }

      .cart-item-qt {
        justify-content: flex-start;

        .qunty {
          .form-control {
            max-width: 68px;
            padding-right: 6px;
          }
        }
      }

      .item-remove {
        grid-row: 1;
        grid-column: 4;
        align-items: flex-start;
        justify-content: flex-end;
      }
    }
  }
}
</style>
