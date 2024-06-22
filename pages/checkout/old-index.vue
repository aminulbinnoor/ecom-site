<template>
  <div>
    <div class="container">
      <div class="col-12">
        <h1 class="title-text">My Cart</h1>
      </div>

      <div class="step-container" v-if="totalPrice != ''">
        <div class="timeline-step" :class="{ active: step >= 1 }">
          <div class="step">
            <span class="step-count">1</span>
          </div>
          <div class="step-lbl">Cart</div>
        </div>
        <div class="timeline-step" :class="{ active: step >= 2 }">
          <div class="step">
            <span class="step-count">2</span>
          </div>
          <div class="step-lbl">Address</div>
        </div>
        <div class="timeline-step" :class="{ active: step >= 3 }">
          <div class="step">
            <span class="step-count">3</span>
          </div>
          <div class="step-lbl">Payment</div>
        </div>
      </div>
    </div>

    <CheckOut v-show="step == 1" @total="getTotalPrice"></CheckOut>
    <Address v-show="step == 2" @address="getAddress"></Address>
    <Payment v-show="step == 3" @payment="getPaymentMethod"></Payment>

    <!--  -->
    <div class="container">
      <div class="ckeck-out-box">
        <button type="button" class="btn without-focus mr-4" v-if="step> 1" @click="goToPrev()">Back</button>
        <button type="button" class="btn without-focus" @click="goToNext()" v-if="step < 3">Next</button>
        <button
          type="button"
          class="btn without-focus"
          v-if="step >2 && !isProcessing"
          @click="orderSubmit()"
        >PROCEED TO CHECKOUT</button>

        <button
          class="btn d-flex align-items-center without-focus"
          v-if="isProcessing"
          type="button"
          disabled
        >
          <span class="spinner-border spinner-border-sm mr-3" role="status" aria-hidden="true"></span>
          Processing...
        </button>
      </div>
    </div>

    <Timeline v-if="step == 1"></Timeline>

    <section class="checkout-info-box">
      <div class="container">
        <h1 class="title">almost done</h1>

        <div class="text">
          Coming up with the design, build &amp; materials concept that connects
          creativity and ensured quality, making construction faster and
          hassle-free.To provide customer service excellence and contemporary
          products with constant improvement &amp; innovations. Coming up with
          the design, build &amp; materials concept that connects creativity and
          ensured quality, making construction faster and hassle-free.To provide
          customer service excellence and contemporary products with constant
          improvement &amp; innovations.
        </div>
      </div>
    </section>

    <SliderSimilarProducts title="You might also like"></SliderSimilarProducts>

    <!--  -->
    <!-- Modal -->
    <!--  -->
    <client-only>
      <div class="modal fade" id="orderPlacedModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div
              class="modal-body d-flex flex-column justify-content-center align-items-center pt-5"
            >
              <span class="mb-4 animate">
                <svg xmlns="http://www.w3.org/2000/svg" width="105" viewBox="0 0 507.2 507.2">
                  <circle class="circle" fill="#be926f" cx="253.6" cy="253.6" r="253.6" />
                  <path
                    style="fill: #b18460;"
                    d="M188.8,368l130.4,130.4c108-28.8,188-127.2,188-244.8c0-2.4,0-4.8,0-7.2L404.8,152L188.8,368z"
                  />
                  <g>
                    <path
                      style="fill:#FFFFFF;"
                      d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8   c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"
                    />
                    <path
                      style="fill:#FFFFFF;"
                      d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2   c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"
                    />
                  </g>
                </svg>
              </span>

              <h1 class="text-center">Your order is placed successfully!</h1>
            </div>
            <div class="modal-footer justify-content-center border-0 pt-0 pb-5">
              <button
                type="button"
                class="btn accept-btn"
                data-dismiss="modal"
                @click="redirectTo(`/order/${oid}`)"
              >Order - {{oid}}</button>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import CheckOut from "@/components/checkout/CheckOut";
import Address from "@/components/checkout/Address";
import Payment from "@/components/checkout/Payment";
import Timeline from "@/components/global/Timeline";
import SliderSimilarProducts from "@/components/global/SliderSimilarProducts";
import { http2 } from "@/api/axios";
export default {
  components: {
    CheckOut,
    Timeline,
    SliderSimilarProducts,
  },

  data() {
    return {
      step: 1,
      isProcessing: false,
      name: "",
      phone: "",
      zip: "",
      address: "",
      payment_method: "",
      totalPrice: "",
      oid: "",
    };
  },

  methods: {
    goToNext() {
      if (this.step == 2) {
        if (this.name == "") {
          this.$toast.error("name is required", { duration: 3000 });
          return;
        } else if (this.phone == "") {
          this.$toast.error("phone is required", { duration: 3000 });
          return;
        } else if (this.zip == "") {
          this.$toast.error("zip is required", { duration: 3000 });
          return;
        } else if (this.address == "") {
          this.$toast.error("address is required", { duration: 3000 });
          return;
        } else {
          this.step += 1;
          return;
        }
      }

      this.step += 1;
    },
    goToPrev() {
      this.step -= 1;
    },
    getPaymentMethod(content) {
      this.payment_method = content;
    },
    getAddress(content) {
      this.name = content.name;
      this.phone = content.phone;
      this.zip = content.zip;
      this.address = content.address;
    },

    getTotalPrice(content) {
      this.totalPrice = content;
    },

    orderSubmit() {
      if (!this.$cookies.get("auth")) {
        var loginModal = new bootstrap.Modal(
          document.getElementById("SigninSignup"),
          {
            keyboard: false,
            backdrop: "static",
          }
        );

        loginModal.toggle();

        return;
      }

      if (this.payment_method == "") {
        this.$toast.error("payment method is required", { duration: 3000 });
        return;
      }

      this.isProcessing = true;

      http2
        .post("/order/submit", {
          total: this.totalPrice,
          payment_method: this.payment_method,
          name: this.name,
          phone: this.phone,
          zip: this.zip,
          address: this.address,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.data.payment_method == "online") {
            location.replace(response.data.data.link);
          } else if (response.data.data.payment_method == "cod") {
            localStorage.setItem("cartItems", "");

            if (process.client) {
              let theCartItems = localStorage.getItem("cartItems")
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [];
              let count = 0;
              theCartItems.forEach((item, i) => {
                count = count + item.quantity;
              });
              this.$store.commit("setTotalProduct", count);
            }

            this.oid = response.data.data.oid;

            this.modalToggle();
          }
        });
    },

    redirectTo(uri) {
      setTimeout(() => {
        this.$router.push(uri);
      }, 500);
    },

    modalToggle() {
      var orderModal = new bootstrap.Modal(
        document.getElementById("orderPlacedModal"),
        {
          keyboard: false,
          backdrop: "static",
        }
      );

      orderModal.toggle();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.accept-btn {
  color: #fff;
  font-size: 22px;
  padding: 6px 16px;
  background: rgba($color: #000000, $alpha: 0.8);

  &:hover {
    background: #000;
    color: #fff;
  }
}

.title-text {
  text-align: center;
  color: #454545;
  font-size: 80px;
  font-weight: 200;
  line-height: 108.56px;
  margin-bottom: 40px;
}
.ckeck-out-box {
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 45px;
  .btn {
    min-width: 125px;
    background-color: rgba($color: #000000, $alpha: 0.85);
    color: #fff;
    border-radius: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 39.53px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.97px;

    &:hover {
      background-color: #000;
    }
  }

  .text {
    color: #454545;
    font-size: 20px;
    font-weight: 300;
    line-height: 19.02px;
    text-align: center;
  }
}
.step-container {
  width: 40%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  .timeline-step {
    position: relative;
    z-index: 99;
    user-select: none;
    cursor: pointer;
    margin-bottom: 45px;
    margin-top: 15px;

    .step {
      text-align: center;
      margin-bottom: 14px;
      .step-count {
        font-size: 22px;
        font-weight: 700;
        border: 2px solid $site-primary;
        color: $site-primary;
        width: 45px;
        height: 45px;
        display: inline-flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #fff;
        z-index: 99;
        transition: all 0.3s ease-in-out;
      }
    }
    .step-lbl {
      font-size: 18px;
      text-align: center;
      transition: all 0.3s ease-in-out;
    }

    &.active {
      .step {
        .step-count {
          background-color: $site-primary;
          color: #fff;
        }
      }

      .step-lbl {
        color: $site-primary;
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    height: 3px;
    background-color: #be926f;
    width: calc(100% - 30px);
    top: 36px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
  }
}

.checkout-info-box {
  background-color: #f4f4f4;
  padding: 45px 0;
  margin-top: 25px;

  .title {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    text-align: center;
    text-transform: capitalize;
  }
  .text {
    color: #454545;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
  }
}
</style>
