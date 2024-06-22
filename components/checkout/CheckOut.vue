<template>
  <section class="checkout-section">
    <div class="container">
      <div class="col-12">
        <h1 class="title">My Cart</h1>
      </div>
    </div>
    <div class="container" v-if="cartProductApi.length">
      <div class="col-12 pt-3">
        <!-- checked  -->
        <div class="cart-list-header">
          <div class="lbl">Product</div>
          <div class="lbl">Details</div>
          <div class="lbl text-center">Quantity</div>
          <div class="lbl text-center">Unit price</div>
          <div class="lbl text-right">Total</div>
          <div class="lbl">
            <span class="hidden">Action</span>
          </div>
        </div>
        <div class="cart-list" v-for="(lsp, index) in cartProductApi" :key="index">
          <!--  -->
          <div class="img-container">
            <img :src="`${cdn}/${lsp.image.path}hdpi/${lsp.image.file}`" alt />
          </div>
          <!--  -->
          <div class="cart-item-description">
            <div>
              <h5 class="name">{{ lsp.name }}</h5>
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
            <div v-if="cartProductApi[index]">
              <span class="regular-price">
                &#2547;
                {{
                cartProductApi[index].price -
                Math.floor(cartProductApi[index].discount_price)
                }}
              </span>

              <span class="cut-off" v-if="cartProductApi[index]">
                &#2547;
                <span class="strikethrough">
                  {{
                  cartProductApi[index].price
                  }}
                </span>
              </span>
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
          <router-link to="/" class="btn btn-continue without-focus">
            <span class="mr-2">
              <img :src="'/images/left-arrow.svg'" alt="icon" />
            </span>
            Continue Shopping
          </router-link>

          <div>
            <div class="total-price">
              <span class="lbl">Subtotal</span>
              <span class="amount">&#2547; {{ totalPrice }}</span>
            </div>

            <div class="delivery-fee border-bottom pb-1">
              <span class="lbl">Delivery fee</span>
              <span class="amount">&#2547; 250</span>
            </div>

            <div class="total-price">
              <span class="lbl">Total to pay</span>
              <span class="amount">&#2547; {{ totalPrice+250 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- empty card design -->
    <div class v-if="cartEmpty">
      <div class="col-md-6 offset-md-5">
        <h1>Your cart is empty</h1>
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
      this.$emit("total", this.totalPrice);
    },
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
.title {
  color: #454545;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 25px;
}

.checkout-section {
  .cart-list-header,
  .cart-list {
    display: grid;
    grid-template-columns: 165px 1fr 110px 205px 165px 25px;
    grid-column-gap: 20px;
    padding: 15px;
    border-bottom: 1px solid #e6e6e6;
  }

  .cart-list-header {
    .lbl {
      font-size: 16px;
      font-weight: 500;
    }
    .hidden {
      opacity: 0;
    }
  }

  .cart-list {
    .img-container {
      width: 165px;
      height: 120px;
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
        background-color: #fff;
        padding: 0 18px;
        border: 1px solid #bbb;
        border-radius: 2px;

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
        line-height: 1;

        img {
          width: 14px;
        }
      }

      .btn-down {
        img {
          transform: rotate(180deg);
        }
      }
    }

    .unit-price,
    .cart-item-qt,
    .item-remove {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .total-price {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .cart-item-description {
      display: flex;
      align-items: center;
    }

    .unit-price,
    .total-price {
      .regular-price {
        display: inline-block;
        margin-bottom: 0;
        color: #000000;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
      .cut-off {
        display: inline-block;
        color: #7d7d7d;
        font-size: 16px;
        text-align: center;
        font-weight: 500;
        margin-left: 8px;
      }
    }

    .cart-item-description {
      .name {
        color: #232323;
        font-size: 17px;
        font-weight: 500;
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
        display: inline-flex;
        flex-wrap: wrap;
        .spec-box {
          display: flex;
          align-items: center;
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
        .lbl {
          color: #5b5b5b;
          font-size: 16px;
          font-weight: 500;
        }

        .color {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          box-shadow: 0 0 4px 0px #00000049;
        }

        .selected-spec {
          color: #5b5b5b;
          font-size: 16px;
          font-weight: 400;
          margin-left: 10px;
        }
      }
    }
  }

  .btm-action {
    display: flex;
    justify-content: space-between;
    padding-top: 23px;
    padding-bottom: 23px;
    padding-right: 55px;

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

    .total-price,
    .delivery-fee {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      margin-bottom: 5px;

      .lbl {
        color: #232323;
        font-weight: 300;
        line-height: 24.44px;
        margin-right: 25px;
      }

      .amount {
        color: #000000;
        font-weight: 500;
        line-height: 26.66px;
      }
    }
  }
}

@media (max-width: 1199px) {
  .checkout-section {
    .cart-list-header {
      display: none;
    }
    .cart-list {
      grid-template-columns: 165px auto auto auto;
      grid-row-gap: 20px;

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

@media (max-width: 767px) {
  .checkout-section {
    .btm-action {
      padding-right: 0;
    }
    .cart-list {
      grid-row-gap: 10px;
      .cart-item-qt {
        justify-content: center;
        grid-column: 1 / span 1;
      }

      .unit-price {
        grid-column: 2 / span 3;
      }

      .total-price {
        display: none;
      }
    }
  }
}

@media (max-width: 575px) {
  .checkout-section {
    .btm-action {
      flex-direction: column-reverse;

      .btn-continue {
        justify-content: center;
        margin-top: 2rem;
      }
    }
    .cart-list {
      grid-template-columns: 1fr 1fr;

      .cart-item-description {
        grid-row: 2;
        grid-column: 1 / span 4;
        > div,
        .specification {
          width: 100%;
          text-align: center;
          justify-content: center;

          .spec-box {
            margin-bottom: 0;
          }
        }
      }

      .img-container {
        width: auto;
        max-width: 100%;
        height: 125px;
        text-align: center;
        grid-row: 1 / span 1;
        grid-column: 1 / span 4;
        img {
          width: 45%;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .checkout-section {
    .cart-list {
      .cart-item-qt,
      .unit-price {
        grid-column: 1 / span 4;
      }

      .cart-item-qt {
        .btn {
          line-height: 14px;
        }
      }
    }
  }
}
</style>
