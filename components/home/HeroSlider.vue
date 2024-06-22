<template>
  <div class>
    <!-- <div class="containerm" style="width:100%" v-if="heroSilders.length == 0">
      <div class="loader">
        <div class="bar bar-1"></div>
      </div>
    </div>-->
    <section class="hero-section">
      <div class="container-fluid slider-container" v-if="heroSilders.length">
        <!--  -->
        <agile ref="slider" :options="options" :as-nav-for="asNavFor">
          <div
            class="image-item"
            v-for="(slide, index) in heroSilders"
            :key="index"
            :class="`slide--${index}`"
          >
            <div class="slide-image">
              <img
                :data-src="`${cdn}/${slide.images[0].path}hdpi/${slide.images[0].file}`"
                alt="image"
                :src="'/images/lazy/hero-slider-lazy.jpeg'"
                v-lazy-load
              />

              <!-- <img :src="'/images/home/CONSTRUCTION-FEE-(1920-X-824).jpg'" alt /> -->
            </div>
          </div>
        </agile>
        <!--  -->
      </div>
    </section>
  </div>
</template>

<script>
import { http2 } from "@/api/axios";
export default {
  props: ["heroSilders"],
  data() {
    return {
      asNavFor: [],

      options: {
        autoplay: false,
        centerMode: true,
        navButtons: false,
        slidesToShow: 1,
        initialSlide: 0,
        responsive: [
          //   {
          //     breakpoint: 600,
          //     settings: {
          //       //   slidesToShow: 5
          //     }
          //   }
        ],
      },

      slides: [
        "/images/home/slide-image-1.png",
        "/images/home/slide-image-1.png",
        "/images/home/slide-image-0.png",
      ],

      // for modal
      toggleModalInput: false,
    };
  },

  mounted() {
    this.asNavFor.push(this.$refs.slider);
  },

  methods: {
    submit() {
      this.toggleModalInput = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.hero-section {
  height: calc(100vw / 2.33);
  .slider-container {
    position: relative;
    height: 100%;
  }
  .image-item {
    .slide-image {
      width: 100%;
      height: auto;

      overflow: hidden;
      img {
        display: block;
        max-width: 100%;
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .btn-bookAppointment {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    min-width: 385px;
    height: 66px;
    background-color: #2c2b2b;
    color: #ffffff;
    font-size: 23px;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 80px;
    &:hover {
      background-color: $site-primary;
    }

    span {
      display: inline-flex;
      margin-right: 0.75rem;
    }

    img {
      width: 20px;
    }
  }
}

.bookAppointmentModal {
  form {
    display: grid;
    grid-template-columns: 100% 100%;
  }
  .form-control {
    height: 42px;
    border-radius: 3px;
    &:focus {
      border-color: $site-primary;
    }
  }
  .allow-whatsapp {
    padding-top: 8px;
    display: flex;
    // align-items: center;
    .form-check-input {
      width: 12px;
      height: 12px;
      border-radius: 2px;

      &:checked {
        background-color: $site-primary;
      }
      &:checked,
      &:focus {
        border-color: $site-primary;
        box-shadow: 0 0 0 0.25rem rgba($color: $site-primary, $alpha: 0.25);
      }
    }

    .form-check-label {
      font-size: 13px;
      padding-left: 8px;
    }
  }

  .error {
    display: block;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 13px;
    color: #dc3545;
  }

  .btn-modal-submit {
    width: 100%;
    background-color: #ff4552;
    color: #fff;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 22px;
  }

  .modal-body {
    overflow: hidden;
  }

  .otp-form-conatiner {
    transform: translateX(110%);
    opacity: 0;
    visibility: hidden;
  }

  .hide {
    transform: translateX(-110%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out,
      visibility 0.3s ease-in-out;
  }
  .show {
    transform: translateX(-100%);
    visibility: visible;
    opacity: 1;
    z-index: 9;
  }

  .input-form-container,
  .otp-form-conatiner {
    transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out,
      visibility 0.3s ease-in-out;
  }

  .help-box {
    margin-top: 40px;
    text-align: center;
    .text {
      color: #ff4552;
      font-size: 14px;
    }
    .resend-otp {
      background: #66afef;
    }
  }
}

.modal {
  &.mobileLayout {
    .modal-content {
      border: 0;
      box-shadow: 0 0 10px 5px #0000001f;
    }
    .modal-body {
      padding: 25px;
    }
    .modal-footer {
      border-top-color: transparent;
      justify-content: center;
      padding-top: 0;

      .btn-close {
        border-radius: 50%;
        background: #00000075;
        padding: 0;
        width: 35px;
        height: 35px;
        box-shadow: 0 0 10px 6px #0000001a;
        opacity: 0.8;
        transition: opacity 0.35s ease-in-out;

        svg {
          fill: #fff;
        }

        &:hover {
          opacity: 1;
          box-shadow: 0 0 10px 6px #00000026;
        }
      }
    }
  }
}

@media (min-width: 575px) {
  .modal {
    &.mobileLayout {
      .modal-dialog {
        max-width: 380px;
      }
    }
  }
}

@media (max-width: 992px) {
  .hero-section {
    .btn-bookAppointment {
      width: 300px;
      height: 50px;
      font-size: 18px;

      img {
        width: 16px;
      }
    }
  }
}

.loader {
  width: 100%;
  padding: 4px;
  border: 2px;
  margin-bottom: 2px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.05);
}
.bar {
  position: relative;
  width: 100%;
  height: 817px;
  overflow: hidden;
  background-color: #d0d8dd;
}
.bar:after {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  animation: load 1s infinite;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}
.bar-2 {
  width: 250px;
}
.bar-3 {
  width: 77%;
}
@keyframes load {
  from {
    left: -100px;
  }
  to {
    left: 100%;
  }
}

@media (max-width: 767px) {
  .hero-section {
    min-height: 350px;
    .slider-container {
      .image-item {
        min-height: 100%;

        .slide-image,
        img {
          min-height: 350px;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .hero-section {
    min-height: 280px;
    .slider-container {
      .image-item {
        min-height: 100%;

        .slide-image,
        img {
          min-height: 280px;
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .hero-section {
    min-height: 220px;
    .slider-container {
      .image-item {
        min-height: 100%;

        .slide-image,
        img {
          min-height: 220px;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .hero-section {
    min-height: 200px;
    .slider-container {
      .image-item {
        min-height: 100%;

        .slide-image,
        img {
          min-height: 200px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.hero-section {
  .agile {
    &__dots {
      bottom: 30px;
      left: 50%;
      position: absolute;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    &__dot {
      margin: 0 10px;

      &--current,
      &:hover {
        button {
          background-color: $site-primary !important;
          border: 1px solid $site-primary;
          transform: scale(1.35);
        }
      }
    }

    &__dot button {
      background-color: #909090;
      border: 1px solid transparent;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      width: 8px;
      height: 8px;
    }
  }
  .agile__slides {
    align-items: normal;
    flex: auto;
    justify-content: normal;
  }
}

@media (max-width: 575px) {
  .hero-section {
    .agile {
      &__dots {
        bottom: 0;
      }
    }
  }
}
</style>
