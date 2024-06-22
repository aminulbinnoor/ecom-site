<template>
  <section class="customer-feed-back" v-if="customer_stories.length">
    <div class="container">
      <div class="col-12">
        <h1 class="title">Customer Stories</h1>
      </div>
      <div class="slider-container">
        <div class="slider-image-stack">
          <button type="button" class="btn btn-prev without-focus" @click="$refs.slider.goToPrev()">
            <img :src="'/images/arrow.png'" alt="left arrow" />
          </button>
          <div class="privew-stack">
            <!--  -->
            <agile ref="slider" :options="options" :as-nav-for="asNavFor">
              <div
                class="image-item slide--thumbniail"
                v-for="(cs, index) in customer_stories"
                :key="index"
                :class="`slide--${index}`"
              >
                <div class="slide-image-container">
                  <div class="message-container">
                    <div class="icon">
                      <img :src="'/images/quot.svg'" alt="icon" />
                    </div>
                    <p class="text">{{cs.stories}}</p>

                    <div class="feedback-user">
                      <p class="name">{{cs.name}}</p>
                    </div>
                  </div>
                </div>
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
import { http2 } from "@/api/axios";
export default {
  data() {
    return {
      customer_stories: [],
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
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },

  created() {
    http2.get("/customer-story/lists").then((response) => {
      this.customer_stories = response.data.data;
    });
  },

  mounted() {
    this.asNavFor.push(this.$refs.slider);
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.customer-feed-back {
  padding-top: 60px;
  padding-bottom: 60px;

  .title {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    text-align: center;
    margin-bottom: 25px;
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

  .privew-stack {
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
      padding: 25px 35px;

      .slide-image-container {
        display: block;
        padding: 0 30px;
      }

      .message-container {
        width: 100%;
        background-color: #f6f6f6;
        padding: 45px 68px;
        border-radius: inherit;
        box-shadow: 0px 1px 10px 5px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scale(1.03);
        }

        .lbl {
          display: block;
          margin-bottom: 0;
          font-size: 16px;
          font-weight: 500;
          color: #5b5b5b;
        }

        .text {
          color: #8e8c8c;
          font-size: 14px;
          margin-bottom: 0;
        }

        .icon {
          margin-bottom: 25px;
          img {
            max-width: 100%;
          }
        }

        .feedback-user {
          padding-top: 25px;
          .name {
            color: #454545;
            font-size: 20px;
            font-weight: 700;
            line-height: 25px;
            margin-bottom: 0;
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
  //
  .customer-feed-back {
    .title {
      font-size: 45px;
      line-height: 1.15;
    }

    .slider-container {
      .privew-stack {
        .image-item {
          padding-left: 0;
          padding-right: 0;

          .slide-image-container {
            padding-left: 5px;
            padding-right: 5px;

            .message-container {
              padding: 18px;
              box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);

              .icon {
                margin-bottom: 16px;
              }

              .feedback-user {
                padding-top: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
