<template>
  <section class="checkout-payment">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="goBack" @click="gotoBack()">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span> Back to Delivery address
          </div>
        </div>
        <div class="col-12">
          <h1 class="title">Payment</h1>
        </div>
      </div>

      <div class="payment-select-box">
        <div
          class="payment"
          :class="{ selected: selectedPayment == 'cod' }"
          @click="togglePayment('cod')"
        >
          <span class="icon" v-if="selectedPayment == 'cod'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.576 408.576" width="23px">
              <g>
                <path
                  d="M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288    S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6    c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344    c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z"
                />
              </g>
            </svg>
          </span>
          <span class="text">Cash On Delivery</span>
        </div>
        <div
          class="payment"
          :class="{ selected: selectedPayment == 'online' }"
          @click="togglePayment('online')"
        >
          <span class="icon" v-if="selectedPayment == 'online'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.576 408.576" width="23px">
              <g>
                <path
                  d="M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288    S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6    c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344    c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z"
                />
              </g>
            </svg>
          </span>
          <span class="text">Online Payment</span>
        </div>
      </div>

      <div class="form-check ssl-agree">
          <input class="form-check-input" type="checkbox" v-model="term_agree">
          <label class="form-check-label ml-1" for="flexCheckDefault">
            Agree <a href="/terms-conditions" style="color:blue" target="_blank">Terms and Conditions.</a>
          </label>
     </div>


    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedPayment: null,
      term_agree: false
    };
  },

  methods: {
    gotoBack() {
      this.$emit("goBack");
    },

    passEmit(){
        let emitData = {
            payment_method: this.selectedPayment,
            term_agree: this.term_agree
        }
        this.$emit("payment", emitData);
    },

    togglePayment(data) {
      this.selectedPayment = data;
    },
  },

  watch: {
      selectedPayment(){
          this.passEmit()
      },
      term_agree(){
          this.passEmit()
      }
  }
};
</script>

<style lang="scss" scoped>
//
.title {
  color: #454545;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 25px;
}

.goBack {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  background-color: rgb(247, 247, 247);
  border-radius: 2px;
  margin-top: 15px;
  cursor: pointer;
  .icon {
    margin-right: 0.5rem;
  }
}

.checkout-payment {
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

  .ssl-agree{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: -20px;
  }

  .payment-select-box {
    padding-top: 45px;
    padding-bottom: 45px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .payment {
      position: relative;
      min-width: 205px;
      height: 180px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
      background-color: #f4f4f4;
      border-radius: 4px;
      padding: 10px;
      cursor: pointer;
      border: 2px solid #f4f4f4;
      transition: all 0.3s ease-in-out;
      user-select: none;

      .text {
        font-size: 18px;
        font-weight: 700;
        color: #000;
      }

      .icon {
        position: absolute;
        top: 10px;
        left: 12px;

        svg {
          path {
            fill: $site-primary;
          }
        }
      }

      &.selected {
        border: 2px solid $site-primary;
      }
    }
  }
}
</style>
