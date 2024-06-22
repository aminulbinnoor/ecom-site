<template>
  <section class="slider_and_des">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- <p class="apartment_type">Living</p> -->

          <h1 class="title">{{ cmp.name }}</h1>
        </div>
      </div>

      <div class="row">
        <div class="cs-col-left">
          <div class="slider-container">
            <div class="slider-image">
              <img
                v-for="(room, index) in rooms"
                :key="index"
                v-if="index == selectedImage"
                :data-src="
                  cdn +
                    '/' +
                    room.images[0].path +
                    'hdpi/' +
                    room.images[0].file
                "
                alt="Image"
                v-lazy-load
              />

              <!-- add to favorite button -->
              <button type="button" class="btn btn-fav without-focus">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26">
                  <g>
                    <path
                      fill="#fff"
                      d="M14.678 5.61C10.878-3.295.076-1.218.004 9.12c-.039 5.678 5.144 7.8 8.595 10.07 3.347 2.201 5.728 5.213 6.102 6.496.32-1.257 2.972-4.354 6.07-6.557 3.387-2.41 8.634-4.392 8.594-10.07-.071-10.364-11.061-12-14.687-3.448z"
                    />
                  </g>
                </svg>
              </button>

              <!-- view full screen button -->
              <button type="button" class="btn btn-view without-focus">
                <img :src="'/images/view-full-screen.png'" alt="Icon" />
              </button>
            </div>

            <div class="slider-image-stack">
              <button type="button" class="btn btn-prev without-focus" @click="goToPrev()">
                <img :src="'/images/arrow.png'" alt="left arrow" />
              </button>

              <div class="privew-stack">
                <ul class="image-list">
                  <li
                    class="image-item"
                    v-for="(room, id) in rooms"
                    :class="selectedImage == id ? 'active' : ''"
                    v-show="id >=to && id<=from"
                  >
                    <div class="slide-image" @click="selectRoom(id)">
                      <img
                        :data-src="
                          cdn +
                            '/' +
                            room.images[0].path +
                            'hdpi/' +
                            room.images[0].file
                        "
                        alt="image"
                        v-lazy-load
                      />
                    </div>
                    <p class="lbl">{{ room.name }}</p>
                  </li>
                </ul>
              </div>

              <button type="button" class="btn btn-next without-focus" @click="goToNext()">
                <img :src="'/images/arrow.png'" alt="left right" />
              </button>
            </div>
          </div>
        </div>
        <div class="cs-col-right">
          <div class="right-side">
            <div class="scrollable">
              <div class="description">
                <!-- The citrus and cobble stone grey of this kitchen makes the space
                look sophisticated and alluring.The dark tones are forgiving of
                stains and spills that are bound to happen in a kitchen.-->
                <p>
                  {{ cmp.short_description }}
                  <!-- <span class="see-more-btn">See More ...</span> -->
                </p>
                <!-- <button
                  type="button"
                  class="btn p-0 without-focus see-more-btn"
                >
                  See More ...
                </button>-->
              </div>

              <div class="specification">
                <p class="title">Specification</p>

                <div class="specification-list">
                  <div class="specification-item">
                    <span>Size</span>
                    <span>10’x15’</span>
                  </div>
                  <div class="specification-item">
                    <span>Type</span>
                    <span>Modern</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pricing">
              <span class="regular min-price">&#2547; {{ cmp.min_price }}</span>
              <span class="dash">&nbsp;-&nbsp;</span>
              <span class="regular max-price">&#2547; {{ cmp.max_price }}</span>
            </div>

            <div class="btn-container">
              <button type="button" class="btn btn-buy without-focus">Get Consultation</button>
            </div>

            <div class="social-share">
              <ul class="social-list">
                <li class="social-lnk" @click="shareSocial('facebook')">
                  <a href="javascript:void(0)">
                    <svg
                      height="37"
                      viewBox="0 0 512 512"
                      width="37"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="social-lnk" @click="shareSocial('linkedin')">
                  <a href="javascript:void(0)">
                    <svg
                      height="28pt"
                      viewBox="0 0 512 512"
                      width="28pt"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"
                      />
                    </svg>
                  </a>
                </li>
                <li class="social-lnk" @click="shareSocial('twitter')">
                  <a href="javascript:void(0)">
                    <svg
                      height="28pt"
                      viewBox="0 0 512 512"
                      width="28pt"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb";

import collect from "collect.js";
//
export default {
  props: ["rooms", "cmp"],
  data() {
    return {
      selectedImage: 0,
      to: 0,
      from: 3,
    };
  },
  components: {
    Breadcrumb,
  },

  mounted() {
    window.addEventListener("resize", this.initData);
    window.addEventListener("load", this.initData);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initData);
    window.removeEventListener("load", this.initData);
  },

  methods: {
    initData() {
      this.selectedImage = 0;
      this.to = 0;

      if (window.matchMedia("(max-width: 767px)").matches) {
        this.from = 2;
      } else {
        this.from = 3;
      }
    },

    shareSocial(social) {
      let url = "";
      if (social == "facebook") {
        url =
          "https://www.facebook.com/sharer/sharer.php?u=" +
          window.location.href;
      } else if (social == "twitter") {
        url = "https://twitter.com/share?url=" + window.location.href;
      } else if (social == "linkedin") {
        url =
          "https://www.linkedin.com/shareArticle?url=" + window.location.href;
      }
      var a = document.createElement("a");
      a.target = "_blank";
      a.href = url;
      a.click();
    },

    selectRoom(index) {
      this.selectedImage = index;

      // this.$emit("selectRoom", this.rooms[index].slug);

      if (this.from == index) {
        this.goToNext();
      }
      if (this.to == index) {
        this.goToPrev();
      }

      this.$forceUpdate();
    },

    goToNext() {
      if (this.from < this.rooms.length - 1) {
        // remove form start
        this.to += 1;

        // add new image
        this.from += 1;
      }
    },

    goToPrev() {
      if (this.to > 0) {
        // add new image
        this.to -= 1;

        // remove form start
        this.from -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
.cs-col-right,
.cs-col-left {
  width: 100%;
}
.slider_and_des {
  margin-bottom: 65px;
  .apartment_type {
    color: #be926f;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .title {
    color: #454545;
    font-size: 50px;
    font-weight: 200;
    line-height: 1.15;
    margin-bottom: 10px;
  }

  .slider-container {
    .slider-image {
      position: relative;
      margin-bottom: 18px;
      width: 100%;
      height: 500px;
      border-radius: 2px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: inherit;
      }

      .btn-fav {
        position: absolute;
        right: 30px;
        top: 20px;
      }

      .btn-view {
        position: absolute;
        bottom: 26px;
        right: 32px;
      }

      .btn-cart,
      .btn-view {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
      }
    }
  }

  .slider-image-stack {
    display: flex;

    .btn-prev {
      img {
        transform: rotate(180deg);
      }
    }
  }

  .privew-stack {
    width: 100%;
    .image-list {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
      display: flex;
      justify-content: center;
    }

    .image-item {
      padding-left: 15px;
      padding-right: 15px;
      flex: 0 0 auto;
      width: 25%;

      .lbl {
        color: #232323;
        font-size: 15px;
        font-weight: 300;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 0;
      }

      .slide-image {
        width: 100%;
        height: 106px;
        filter: opacity(0.35);
        border: 2px solid $site-primary;
        transition: all 0.3s ease-in-out;
        padding: 3px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: cover;
        }
      }

      &.active,
      &:hover {
        .slide-image {
          filter: opacity(1);
          cursor: pointer;
        }
      }
    }
  }

  .right-side {
    margin-left: 20px;

    .see-more-btn {
      color: #000;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: $site-primary;
      }
    }

    .description {
      color: #454545;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 16px;
      line-height: 25px;
    }

    .specification {
      margin-bottom: 15px;

      .title {
        color: #5b5b5b;
        font-size: 22px;
        font-weight: 500;
      }

      .specification-list {
        display: inline-flex;
        flex-direction: column;
        list-style-type: none;
        padding-left: 0;
        margin-top: 10px;
        margin-bottom: 0;

        .specification-item {
          position: relative;
          display: flex;
          align-items: baseline;

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          span {
            &:first-child {
              position: relative;
              color: #8e8e8e;
              font-size: 16px;
              font-weight: 300;
              padding-right: 20px;

              &::after {
                content: ":";
                position: absolute;
                right: 18%;
                top: 0;
                bottom: 0;
                margin: auto;
              }
            }

            &:last-child {
              color: #454545;
              font-size: 16px;
              font-weight: 300;
              text-align: right;
            }
          }
        }
      }
    }

    .pricing {
      margin-bottom: 25px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .regular {
        color: #232323;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        padding-bottom: 5px;
        border-bottom: 1px solid $site-primary;
      }
    }
  }

  .dash {
    color: #232323;
    font-size: 20px;
    font-weight: 700;
  }

  .btn-container {
    .btn-buy {
      width: 100%;
      height: 50px;
      background: #2c2b2b;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.97px;
      border-radius: 0px;
      padding-left: 30px;
      padding-right: 30px;
      color: #ffffff;

      &:hover {
        background-color: #be926f;
      }
    }
  }

  .social-share {
    padding-top: 1.75rem;
    .social-list {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      .social-lnk {
        &:not(:last-child) {
          margin-right: 20px;
        }

        svg {
          path {
            fill: #2c2b2b;
          }
        }

        &:hover {
          svg {
            path {
              fill: #be926f;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .cs-col-right {
    width: 30%;
  }
  .cs-col-left {
    width: 70%;
  }

  .slider_and_des {
    .right-side {
      .scrollable {
        margin-bottom: 20px;
        height: 315px;
        overflow-x: hidden;
        overflow-y: auto;
      }

      .description {
        margin-bottom: 35px;
      }
    }
  }
}

@media (min-width: 1400px) {
  .cs-col-right {
    width: 23%;
  }
  .cs-col-left {
    width: 77%;
  }
}

@media (max-width: 1199px) {
  .slider_and_des {
    .right-side {
      margin-left: 0;
      padding-top: 16px;
    }

    .btn-container {
      .btn-buy {
        max-width: 300px;
      }
    }
  }
}

@media (max-width: 767px) {
  .slider_and_des {
    .slider-container {
      .slider-image {
        height: 375px;
      }
    }

    .privew-stack {
      .image-item {
        width: 33.333%;
        padding-left: 8px;
        padding-right: 8px;
      }
    }

    .slider-image-stack {
      .btn-prev,
      .btn-next {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        img {
          width: 26px;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .slider_and_des {
    .title {
      font-size: 30px;
    }
    .slider-image-stack {
      .btn-prev,
      .btn-next {
        display: none;
      }

      .privew-stack {
        .image-list {
          justify-content: flex-start;
          overflow-x: scroll;
          overflow-y: hidden;
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        .image-item {
          width: 40%;
        }
      }
    }

    .right-side {
      .specification {
        .title {
          font-size: 18px;
        }

        .specification-list {
          margin-top: 5px;
        }
      }

      .pricing {
        .regular,
        .dash {
          font-size: 18px;
        }
      }
    }
  }
}
@media (max-width: 425px) {
  .slider_and_des {
    .btn-container {
      .btn-buy {
        max-width: 100%;
      }
    }

    .social-share {
      .social-list {
        justify-content: center;
      }
    }
  }
}

@media (max-width: 375px) {
  .slider_and_des {
    .slider-container {
      .slider-image {
        height: 275px;
      }
    }

    .slider-image-stack {
      .privew-stack {
        .image-item {
          width: 46%;
        }
      }
    }
  }
}
</style>
