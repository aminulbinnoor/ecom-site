<template>
  <div class="position-relative">
    <section class="appointment-hero-section">
      <div class="container">
        <div class="row">
          <div class="col-md-7 px-lg-0">
            <h1 class="title">Service Title here</h1>

            <div
              class="text"
            >Coming up with the design, build &amp; materials concept that connects creativity and ensured quality, making construction faster and hassle-free.To provide customer service excellence and contemporary products with constant improvement &amp; innovations.</div>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="floating-container">
      <div class="floating-card">
        <h1 class="card-title">
          Architect &amp;
          <br />Interior Service
        </h1>

        <ul class="list-unstyled mb-0">
          <li class="service-list">
            <button
              type="button"
              class="btn service"
              data-toggle="modal"
              data-target="#serviceCartModal"
            >
              <span class="lbl">Water Meter Servicing</span>
              <span class="icon">
                <img :src="'/images/left-arrow.png'" alt />
              </span>
            </button>
          </li>
          <li class="service-list">
            <button
              type="button"
              class="btn service"
              data-toggle="modal"
              data-target="#serviceCartModal"
            >
              <span class="lbl">Water Meter Servicing</span>
              <span class="icon">
                <img :src="'/images/left-arrow.png'" alt />
              </span>
            </button>
          </li>
          <li class="service-list">
            <button
              type="button"
              class="btn service"
              data-toggle="modal"
              data-target="#serviceCartModal"
            >
              <span class="lbl">Water Meter Servicing</span>
              <span class="icon">
                <img :src="'/images/left-arrow.png'" alt />
              </span>
            </button>
          </li>
          <li class="service-list">
            <button
              type="button"
              class="btn service"
              data-toggle="modal"
              data-target="#serviceCartModal"
            >
              <span class="lbl">Water Meter Servicing</span>
              <span class="icon">
                <img :src="'/images/left-arrow.png'" alt />
              </span>
            </button>
          </li>
          <li class="service-list">
            <button
              type="button"
              class="btn service"
              data-toggle="modal"
              data-target="#serviceCartModal"
            >
              <span class="lbl">Water Meter Servicing</span>
              <span class="icon">
                <img :src="'/images/left-arrow.png'" alt />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </section>
    <!--  -->
    <section class="appointment-body">
      <div class="container">
        <div class="row">
          <div class="col-xxl-8 cs-mx">
            <div class="card-holder">
              <div class="feature-card">
                <div class="img-container">
                  <img :src="'/images/appointment/on-time-delivery.svg'" alt="image" />
                </div>
                <div class="lbl">On-time Delivery</div>
              </div>
              <div class="feature-card">
                <div class="img-container">
                  <img :src="'/images/appointment/best-price.svg'" alt="image" />
                </div>
                <div class="lbl">Best Price</div>
              </div>
              <div class="feature-card">
                <div class="img-container">
                  <img :src="'/images/appointment/superior-quality.svg'" alt="image" />
                </div>
                <div class="lbl">Superior Quality</div>
              </div>
              <div class="feature-card">
                <div class="img-container">
                  <img :src="'/images/appointment/safety-assured.svg'" alt="image" />
                </div>
                <div class="lbl">Safety Assured</div>
              </div>
            </div>

            <!-- list -->
            <div class="list-container">
              <ul class="list-element">
                <li>
                  <div class="list-item">
                    <span class="dot"></span>
                    <div class="list-content">
                      <h3 class="heading">Your dream dinning is here</h3>
                      <p class="text">
                        Let's get acquainted. The more we learn about you, the better we can design your home.
                        <span
                          class="focus-text"
                        >showcase/dinning/top-dinning-design/modern-dinning</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-item">
                    <span class="dot"></span>
                    <div class="list-content">
                      <h3 class="heading">Your dream dinning is here</h3>
                      <p class="text">
                        Let's get acquainted. The more we learn about you, the better we can design your home.
                        <span
                          class="focus-text"
                        >showcase/dinning/top-dinning-design/modern-dinning</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-item">
                    <span class="dot"></span>
                    <div class="list-content">
                      <h3 class="heading">Your dream dinning is here</h3>
                      <p class="text">
                        Let's get acquainted. The more we learn about you, the better we can design your home.
                        <span
                          class="focus-text"
                        >showcase/dinning/top-dinning-design/modern-dinning</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-item">
                    <span class="dot"></span>
                    <div class="list-content">
                      <h3 class="heading">Your dream dinning is here</h3>
                      <p class="text">
                        Let's get acquainted. The more we learn about you, the better we can design your home.
                        <span
                          class="focus-text"
                        >showcase/dinning/top-dinning-design/modern-dinning</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-item">
                    <span class="dot"></span>
                    <div class="list-content">
                      <h3 class="heading">Your dream dinning is here</h3>
                      <p class="text">
                        Let's get acquainted. The more we learn about you, the better we can design your home.
                        <span
                          class="focus-text"
                        >showcase/dinning/top-dinning-design/modern-dinning</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      class="serviceCartModal modal fade"
      id="serviceCartModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="serviceCartModalLabel"
      aria-hidden="true"
      :class="[toggleModalCartCard ? 'show' : '']"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="serviceCartModalLabel">Architecture &amp; Interior Service</h5>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              @click="resetModalState()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6" :class="[toggleListCard ? '' : 'd-none']">
                  <div class="service-item-list">
                    <div class="scrollable-1">
                      <ul class="list-unstyled mb-0">
                        <li class="service-item">
                          <div class="d-block">
                            <div class="service-name">Service Name Here</div>
                            <div
                              class="service-details"
                            >Let's get acquainted. The more we learn about you, the better we can design your home.</div>

                            <div class="info-price">
                              <div class="price">৳ 6000 / unit</div>

                              <button type="button" class="btn add-btn">Add</button>
                            </div>
                          </div>
                        </li>

                        <li class="service-item">
                          <div class="d-block">
                            <div class="service-name">Service Name Here</div>
                            <div
                              class="service-details"
                            >Let's get acquainted. The more we learn about you, the better we can design your home.</div>

                            <div class="info-price">
                              <div class="price">৳ 6000 / unit</div>

                              <button type="button" class="btn add-btn">Add</button>
                            </div>
                          </div>
                        </li>

                        <li class="service-item">
                          <div class="d-block">
                            <div class="service-name">Service Name Here</div>
                            <div
                              class="service-details"
                            >Let's get acquainted. The more we learn about you, the better we can design your home.</div>

                            <div class="info-price">
                              <div class="price">৳ 6000 / unit</div>

                              <button type="button" class="btn add-btn">Add</button>
                            </div>
                          </div>
                        </li>

                        <li class="service-item">
                          <div class="d-block">
                            <div class="service-name">Service Name Here</div>
                            <div
                              class="service-details"
                            >Let's get acquainted. The more we learn about you, the better we can design your home.</div>

                            <div class="info-price">
                              <div class="price">৳ 6000 / unit</div>

                              <button type="button" class="btn add-btn">Add</button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <!--  -->
                    <div class="btn-container" v-if="!toggleModalCartCard">
                      <div class="btn" @click.prevent="goToCheckOutModalCard()">PROCEED TO CART</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6" :class="[toggleModalCartCard ? '' : 'd-none']">
                  <div class="checkout-container">
                    <div class="scrollable-2">
                      <ul class="list-unstyled mb-0">
                        <li class="checkout-list">
                          <div class="checkout-details">
                            <div class="w-100">
                              <div class="name">Service Name 1 Here</div>
                            </div>
                            <div class="info">
                              <div class="input-group">
                                <button class="btn" type="button">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 124 124"
                                    >
                                      <path
                                        d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <input type="text" class="form-control" v-model="itemCount" />
                                <button class="btn" type="button">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="16"
                                      width="16"
                                      viewBox="0 0 448 448"
                                    >
                                      <path
                                        d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>

                              <div class="item-total-price">৳ 6000</div>
                            </div>
                          </div>
                        </li>
                        <li class="checkout-list">
                          <div class="checkout-details">
                            <div class="w-100">
                              <div class="name">Service Name 1 Here</div>
                            </div>
                            <div class="info">
                              <div class="input-group">
                                <button class="btn" type="button">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 124 124"
                                    >
                                      <path
                                        d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <input type="text" class="form-control" v-model="itemCount" />
                                <button class="btn" type="button">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="16"
                                      width="16"
                                      viewBox="0 0 448 448"
                                    >
                                      <path
                                        d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>

                              <div class="item-total-price">৳ 6000</div>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <!--  -->
                      <div class="subtotal-container">
                        <div class="lbl">Subtotal</div>
                        <div class="sub-total">৳ 12000</div>
                      </div>
                    </div>

                    <!--  -->
                    <div class="btn-container">
                      <button type="button" class="btn" @click="closeModal()">PROCEED TO CHECKOUT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
//
//
export default {
  data() {
    return {
      itemCount: 2,

      // toggle mobile modal
      toggleModalCartCard: false,
      toggleListCard: true,
    };
  },

  mounted() {
    ScrollTrigger.create({
      start: 10,
      end: 99999,
      toggleClass: {
        className: "top-transition",
        targets: ".floating-container",
      },
    });

    window.addEventListener("resize", this.mobileResponcive);
    window.addEventListener("load", this.mobileResponcive);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.mobileResponcive);
    window.removeEventListener("load", this.mobileResponcive);
  },

  methods: {
    mobileResponcive() {
      if (window.matchMedia("(max-width: 991px)").matches) {
        this.toggleModalCartCard = false;
        this.toggleListCard = true;
      } else {
        this.toggleModalCartCard = true;
      }
    },

    goToCheckOutModalCard() {
      this.toggleListCard = false;
      this.toggleModalCartCard = true;
    },

    resetModalState() {
      if (window.matchMedia("(max-width: 991px)").matches) {
        this.toggleModalCartCard = false;
        this.toggleListCard = true;
      } else {
        this.toggleModalCartCard = true;
        this.toggleListCard = true;
      }
    },

    closeModal() {
      //
      var serviceCartModal = document.getElementById("serviceCartModal");
      var modal = bootstrap.Modal.getInstance(serviceCartModal);

      modal.hide();
      //
      this.$router.push("/appointment/service-checkout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.appointment-hero-section {
  width: 100%;
  height: 700px;
  background-image: url("~assets/book_appointment_bg.png");
  background-repeat: no-repeat;
  margin-top: -14px;
  padding-top: 55px;
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffffbf;
    z-index: -3;
  }

  .title {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.61px;
  }
}

.appointment-body {
  padding-top: 80px;
  padding-bottom: 80px;

  .card-holder {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;

    .feature-card {
      width: 200px;
      text-align: center;
      padding: 0.5rem;
      position: relative;

      &:not(:last-child) {
        &::after {
          content: "";
          position: absolute;
          right: -1px;
          top: 0;
          bottom: 0;
          width: 2px;
          height: 57px;
          margin: auto;
          background-color: #e8e8e8;
        }
      }

      .img-container {
        margin-bottom: 20px;
        img {
          width: 120px;
          height: 85px;
          object-fit: contain;
          object-position: center;
        }
      }

      .lbl {
        color: #454545;
        font-size: 20px;
        font-weight: 300;
        line-height: 22.22px;
        text-align: center;
      }
    }
  }

  .list-container {
    .list-element {
      list-style-type: none;
      padding: 0;
      margin: 0;

      .list-item {
        padding: 40px 28px;
        display: flex;
        border-top: 1px solid #c3c3c3;

        .dot {
          min-width: 25px;
          height: 25px;
          background-color: #c2c4c6;
          border-radius: 50%;
          margin-top: 8px;
        }

        .list-content {
          width: 100%;
          padding-left: 16px;
          .heading {
            color: #5b5b5b;
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 22px;
          }

          .text {
            color: #454545;
            font-size: 20px;
            font-weight: 300;
            margin-bottom: 0;

            .focus-text {
              color: #c98d5d;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
.floating-container {
  &.top-transition {
    top: 0 !important;
    transition: top 0.25s ease-in;
  }

  .floating-card {
    margin-left: auto;
    margin-right: auto;
    position: sticky;
    top: 105px;
    min-height: 500px;
    width: 500px;
    padding: 50px;
    border-radius: 16px;
    box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.34);
    background-color: rgba($color: #ac7d58, $alpha: 0.8);

    .card-title {
      color: #ffffff;
      font-size: 40px;
      font-weight: 300;
      text-align: center;
    }

    .service-list {
      margin-top: 25px;

      .service {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-radius: 3px;
        border: 1px solid #ffffff;
        background-color: #d2d2d2;
        padding: 16px 20px;
        text-align: left;

        .lbl {
          width: 100%;
          color: #000000;
          font-size: 20px;
          font-weight: 300;
        }

        .icon {
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}

.scrollable-1,
.scrollable-2 {
  overflow: hidden auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.scrollable-1 {
  height: 500px;
}
.scrollable-2 {
  height: 454px;
}

.serviceCartModal {
  .modal-content {
    border-radius: 10px;
    border: 1px solid $site-primary;
    background-color: #f7f7f7;

    .modal-header {
      align-items: flex-start;
      border-bottom: 0;
    }

    .modal-title {
      width: 100%;
      text-align: center;
      color: #000000;
      font-size: 40px;
      font-weight: 300;
    }

    .modal-body {
      padding-bottom: 45px;
    }
  }

  .service-item {
    padding: 15px 0;
    &:not(:last-child) {
      border-bottom: 1px solid $site-primary;
    }
    .service-name {
      color: #5b5b5b;
      font-size: 22px;
      font-weight: 400;
      text-align: left;
      margin-bottom: 12px;
    }

    .service-details {
      color: #454545;
      font-size: 18px;
      font-weight: 300;
      text-align: left;
      margin-bottom: 15px;
    }

    .info-price {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        width: 100%;
        color: $site-primary;
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
        text-align: left;
      }

      .add-btn {
        background-color: #ff4552;
        color: #fff;
        width: 100px;
        border-radius: 50px;
        &:hover {
          background-color: #f33441;
        }
      }
    }
  }

  .input-group {
    width: 210px;
    border-radius: 22px;
    border: 1px solid #acaaa9;
    background: #fff;

    .btn {
      background: #fff;
      padding-top: 0;
      padding-bottom: 0;

      &:first-child {
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
      }
      &:last-child {
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
      }
    }

    .form-control {
      border: 0;
      text-align: center;
      padding: 0 0.5rem;
      color: #363636;
      font-size: 22px;
      font-weight: 300;
      line-height: normal;
      min-height: 40px;

      &:focus {
        outline: 0;
        box-shadow: none;
      }
    }
  }

  .checkout-container {
    position: relative;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #cf9e78;
    background-color: #ffffff;

    .checkout-list {
      padding-top: 70px;
      padding-left: 20px;
      padding-right: 20px;

      .checkout-details {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 16px;
        border-bottom: 1px solid $site-primary;

        .info {
          .input-group {
            width: 148px;
          }
        }

        .item-total-price {
          color: $site-primary;
          font-size: 20px;
          font-weight: 500;
          line-height: normal;
          text-align: right;
          margin-top: 10px;
        }

        .name {
          color: #5b5b5b;
          font-size: 22px;
          font-weight: 400;
          line-height: normal;
          margin-bottom: 6px;
          margin-right: 0.5rem;
        }
      }
    }

    .subtotal-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 65px;
      .lbl {
        color: #5b5b5b;
        font-size: 20px;
        font-weight: 400;
        line-height: normal;
        text-align: left;
      }

      .sub-total {
        color: $site-primary;
        font-size: 25px;
        font-weight: 500;
        line-height: normal;
      }
    }
  }

  .service-item-list,
  .checkout-container {
    .btn-container {
      width: 100%;
      display: flex;
      justify-content: center;
      transform: translateY(20px);

      .btn {
        width: 310px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        background-color: #ff4552;
        border-radius: 50px;
      }
    }
  }
}

@media (min-width: 767px) {
  .serviceCartModal {
    .modal-dialog {
      max-width: 85%;
    }
  }
}

@media (min-width: 991px) {
  .serviceCartModal {
    .modal-dialog {
      max-width: 80%;
    }
  }
}

@media (min-width: 1400px) {
  .serviceCartModal {
    .modal-dialog {
      max-width: 55%;
    }
  }
}

@media (min-width: 1600px) {
  .floating-container {
    position: absolute;
    top: 125px;
    right: 4%;
    bottom: 0;
    height: calc(100% - 100px);
  }
}

@media (min-width: 1700px) {
  .floating-container {
    right: calc(100vw - 92.7vw);
  }
}

@media (max-width: 1599px) {
  .floating-container {
    padding: 0 15px;
    transform: translateY(-100px);
    z-index: 999;
  }

  .appointment-body {
    padding-top: 15px;
    .cs-mx {
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@media (max-width: 991px) {
  .appointment-body {
    .card-holder {
      margin-bottom: 40px;
      .feature-card {
        width: 174px;
        .img-container {
          margin-bottom: 10px;
          img {
            width: 65px;
            height: 55px;
          }
        }

        .lbl {
          font-size: 16px;
        }
      }
    }
  }

  .serviceCartModal {
    .modal-content {
      .modal-title {
        font-size: 28px;
        line-height: normal;
      }
    }
  }
}

@media (max-width: 767px) {
  .appointment-body {
    .card-holder {
      .feature-card {
        width: 128px;
        .img-container {
          img {
            width: 45px;
            height: 35px;
          }
        }

        .lbl {
          font-size: 13px;
        }
      }
    }
  }

  .scrollable-1,
  .scrollable-2 {
    height: 60vh;
  }

  .serviceCartModal {
    .modal-content {
      .modal-title {
        font-size: 22px;
      }
    }

    .service-item-list,
    .checkout-container {
      .btn-container {
        .btn {
          font-size: 16px;
          width: 240px;
        }
      }
    }

    .service-item {
      .service-name {
        font-size: 18px;
        line-height: normal;
      }

      .service-details {
        font-size: 16px;
        line-height: normal;
      }

      .info-price {
        .price {
          font-size: 18px;
        }

        .add-btn {
          padding: 0.15rem 0.35rem;
        }
      }
    }

    .checkout-container {
      .checkout-list {
        padding-top: 25px;

        .checkout-details {
          .name,
          .item-total-price {
            font-size: 18px;
          }

          .info {
            .input-group {
              width: 120px;
              .form-control {
                font-size: 16px;
                min-height: 35px;
              }

              .btn {
                padding-left: 0.45rem;
                padding-right: 0.45rem;
                svg {
                  height: 12px;
                }
              }
            }
          }
        }
      }

      .subtotal-container {
        .lbl {
          font-size: 18px;
        }
        .sub-total {
          font-size: 20px;
        }
      }
    }
  }

  .appointment-hero-section {
    .title {
      font-size: 50px;
      line-height: normal;
    }
  }
}

@media (max-width: 575px) {
  .appointment-hero-section {
    min-height: 500px;
    height: auto;
    background-position: 14.75%;
    background-size: cover;

    .title {
      text-align: center;
      font-size: 40px;
      line-height: normal;
    }

    .text {
      text-align: center;
    }
  }
  .appointment-body {
    .card-holder {
      flex-wrap: nowrap;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .feature-card {
        min-width: 130px;
      }
    }
    .list-container {
      .list-element {
        .list-item {
          padding: 20px 0px;

          .dot {
            min-width: 20px;
            height: 20px;
            margin-top: 0;
          }

          .list-content {
            .heading,
            .text {
              font-size: 18px;
            }

            .heading {
              margin-bottom: 12px;
            }

            .text {
              line-height: 1.35;
            }
          }
        }
      }
    }
  }

  .floating-container {
    .floating-card {
      width: 100%;
      padding: 30px 25px;
      min-height: auto;

      .card-title {
        font-size: 25px;
      }

      .service-list {
        margin-top: 16px;
        .service {
          padding: 10px 14px;
          .lbl {
            font-size: 16px;
          }

          .icon {
            img {
              width: 8px;
            }
          }
        }
      }
    }
  }
}
</style>