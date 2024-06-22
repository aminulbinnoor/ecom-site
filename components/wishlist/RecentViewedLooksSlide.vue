<template>
  <section class="recently-viewed-styles">
    <div class="container">
      <div class="col-12">
        <h1 class="title">
          Recently
          <span class="sub">
            Viewed
            <span class="color">Looks</span>
          </span>
        </h1>
      </div>
      <div class="slider-container">
        <div class="slider-image-stack">
          <button type="button" class="btn btn-prev without-focus" @click="$refs.slider.goToPrev()">
            <img :src="'/images/arrow.png'" alt="left arrow" />
          </button>
          <div class="card-stack">
            <!--  -->
            <agile ref="slider" :options="options" :as-nav-for="asNavFor">
              <div
                class="image-item slide--thumbniail"
                v-for="(slide, index) in slides"
                :key="index"
                :class="`slide--${index}`"
              >
                <router-link to="#" class="slide-image-container">
                  <div class="slide-image">
                    <img :src="slide" alt="image" />
                  </div>
                  <div class="info-container">
                    <p class="lbl">Amber Glass Bedroom</p>
                    <div class="list-style-item">
                      <div class="item">
                        <img src="/images/q-icon-bedroom.png" alt="icon" />
                        <span class="count">3</span>
                      </div>
                      <div class="item">
                        <img src="/images/q-icon-dining.png" alt="icon" />
                        <span class="count">1</span>
                      </div>
                      <div class="item">
                        <img src="/images/q-icon-washroom.png" alt="icon" />
                        <span class="count">3</span>
                      </div>
                      <div class="item">
                        <img src="/images/q-icon-drawing-room.png" alt="icon" />
                        <span class="count">1</span>
                      </div>
                      <div class="item">
                        <img src="/images/q-icon-kitchen.png" alt="icon" />
                        <span class="count">1</span>
                      </div>
                    </div>
                    <!--  -->
                    <div class="pricing-container">
                      <span class="price-lbl">Estimate Price</span>
                      <span class="price">120,000 BDT</span>
                    </div>
                  </div>
                </router-link>
              </div>
            </agile>
            <!--  -->
          </div>
          <button type="button" class="btn btn-next without-focus" @click="$refs.slider.goToNext()">
            <img :src="'/images/arrow.png'" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      asNavFor: [],

      options: {
        autoplay: false,
        centerMode: true,
        navButtons: false,
        dots: false,
        slidesToShow: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      },

      slides: [
        "/images/apartment/apartment-1.png",
        "/images/apartment/apartment-2.png",
        "/images/apartment/apartment-3.png",
        "/images/apartment/7fba1c100717611.png",
        "/images/apartment/apartment-2.png",
        "/images/apartment/5f2847c3268f1.png",
      ],
    };
  },

  mounted() {
    this.asNavFor.push(this.$refs.slider);
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.recently-viewed-styles {
  background-color: #f1f1f1;
  padding-top: 60px;
  padding-bottom: 60px;

  .title {
    margin-bottom: 5px;
    color: #232323;
    font-size: 70px;
    font-weight: 200;
    line-height: 108.56px;
    display: flex;
    padding-left: 40px;
    align-items: center;

    .sub {
      display: inline-flex;
      flex-direction: column;
      font-size: 30px;
      line-height: 1;
      padding-left: 10px;
      font-weight: 300;
    }
  }

  .color {
    color: $site-primary;
    font-weight: 600;
  }

  .view-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #2c2b2b;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.97px;
    line-height: normal;
    border-radius: 0px;
    padding-left: 30px;
    padding-right: 30px;
    color: #ffffff;
  }
}
.slider-container {
  .slider-image-stack {
    position: relative;
    display: flex;
    padding-left: 30px;
    padding-right: 30px;

    .btn-prev {
      left: 0;
      img {
        transform: rotate(180deg);
      }
    }

    .btn-next {
      right: 0;
    }

    .btn-next,
    .btn-prev {
      position: absolute;
      padding: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.75;

      img {
        width: 30px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .card-stack {
    position: relative;
    width: 100%;

    .image-list {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
      display: flex;
      justify-content: center;
    }

    .image-item {
      padding: 15px;

      .slide-image-container {
        display: block;
        box-shadow: 0px 1px 10px 5px rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scale(1.03);
        }
      }

      .slide-image {
        width: 100%;
        height: 250px;
        display: block;

        img {
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: cover;
        }
      }

      .info-container {
        width: 100%;
        padding: 10px;
        border-radius: inherit;
        border-top: 3px solid $site-primary;

        .lbl {
          display: block;
          margin-bottom: 0;
          font-size: 16px;
          font-weight: 500;
          color: #5b5b5b;
          text-align: center;
        }

        .list-style-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;

          .item {
            display: inline-flex;
            align-items: baseline;
            user-select: none;
            &:not(:last-child) {
              margin-right: 6px;
            }

            img {
              max-width: 25px;
              margin-right: 6px;
              object-fit: scale-down;
            }

            .count {
              color: #454545;
              font-size: 16px;
              font-weight: 400;
            }
          }
        }

        .pricing-container {
          display: flex;
          align-items: baseline;
          justify-content: center;

          .price-lbl {
            color: #232323;
            font-size: 13px;
            font-weight: 400;
            margin-right: 10px;
          }

          .price {
            color: #232323;
            font-size: 17px;
            font-weight: 700;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .agile__actions {
    display: none;
  }
}

@media (max-width: 575px) {
  .recently-viewed-styles {
    .title {
      padding-left: 0;
      justify-content: center;
      font-size: 45px;
      line-height: normal;

      .sub {
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 385px) {
  .slider-container {
    .card-stack {
      .image-item {
        padding-left: 0;
        padding-right: 0;
        .slide-image-container {
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
        }
        .slide-image {
          height: 190px;
        }
      }
    }
  }
}
</style>
