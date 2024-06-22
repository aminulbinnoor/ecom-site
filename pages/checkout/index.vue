<template>
  <div>
    <CheckOut v-show="step == 1" @total="getTotalPrice"></CheckOut>
    <Address v-show="step == 2" @address="getAddress" @goBack="prevStep()"></Address>
    <Payment v-show="step == 3" @payment="getPaymentMethod" @goBack="prevStep()"></Payment>

    <!--  -->
    <div class="container">
      <div class="ckeck-out-box" v-if="step == 1 && totalPrice">
        <button type="button" class="btn without-focus" @click="nextStep()">PROCEED TO CHECKOUT</button>
      </div>
      <div class="ckeck-out-box" v-if="step == 2">
        <button type="button" class="btn without-focus" @click="nextStep()">Continue</button>
      </div>

      <div class="ckeck-out-box" v-if="step == 3">
        <button
          type="button"
          class="btn without-focus"
          v-if="!isProcessing"
          @click="orderSubmit()"
        >CHECKOUT</button>

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
import { http2 } from "@/api/axios";
export default {
  components: {
    CheckOut,
    Address,
    Payment,
  },

  data() {
    return {
      isProcessing: false,
      step: 1,
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      postcode: '',
      phone: '',
      email: '',
      payment_method: "",
      totalPrice: "",
      oid: "",
      termAgree: ''
    };
  },

  methods: {
    nextStep() {
      this.step = this.step + 1;
    },

    prevStep() {
      this.step = this.step - 1;
    },

    getAddress(content) {
        this.first_name = content.first_name
        this.last_name = content.last_name
        this.address = content.address
        this.phone = content.phone
        this.email = content.email
        this.city = content.city
        this.postcode = content.postcode
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

      if(this.first_name == ''){
          this.$toast.error("firstname is required", { duration: 3000 });
          this.prevStep()
          return;
      }else if (this.address == ''){
          this.$toast.error("address is required", { duration: 3000 });
          this.prevStep()
          return;
      }else if (this.city == ''){
          this.$toast.error("city is required", { duration: 3000 });
          this.prevStep()
          return;
      }else if (this.phone == ''){
          this.$toast.error("phone is required", { duration: 3000 });
          this.prevStep()
          return;
      }


      if (this.payment_method == "") {
        this.$toast.error("payment method is required", { duration: 3000 });
        return;
    }else if (this.termAgree == false){
        this.$toast.error("Check terms and conditions", { duration: 3000 });
        return;
    }

      this.isProcessing = true;

      http2
        .post("/order/submit", {
          total: this.totalPrice,
          payment_method: this.payment_method,
          first_name: this.first_name,
          last_name: this.last_name,
          address: this.address,
          city: this.city,
          postcode: this.postcode,
          email: this.email,
          phone: this.phone,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.data.payment_method == "online") {
              if (response.data.data.link != "") {
                  location.replace(response.data.data.link);
              }else{
                  this.$toast.error(response.data.msg.message,{duration: 3000})
                  this.isProcessing = false
                  return
              }

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

            // this.modalToggle();
            // open modal
            var orderModal = new bootstrap.Modal(
              document.getElementById("orderPlacedModal"),
              {
                keyboard: false,
                backdrop: "static",
              }
            );

            orderModal.toggle();
          }
        });
    },

    getPaymentMethod(content) {
      this.payment_method = content.payment_method;
      this.termAgree = content.term_agree;
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
</style>
