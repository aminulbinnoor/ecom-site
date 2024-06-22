<template>
  <section class="list-style-section">
    <div class="container">
      <h1 class="title">Building</h1>

      <!-- list -->
      <div class="list-element">
        <div class="row" v-for="(cmp, index) in compositions" :key="index">
          <div class="col-xl-4 col-md-6">
            <div class="img-container">
              <router-link
                :to="
                  '/' +
                    `building/${$route.params.category}/${cmp.slug}`
                "
                class="d-block w-100 h-100"
              >
                <div class="layer"></div>
                <!--  -->
                <img
                  :data-src="
                    cdn +
                      '/' +
                      cmp.images[0].path +
                      'hdpi/' +
                      cmp.images[0].file
                  "
                  alt="image"
                  v-lazy-load
                />
              </router-link>
              <button type="button" class="btn btn-fav without-focus">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 30 26"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M14.678 5.61C10.878-3.295.076-1.218.004 9.12c-.039 5.678 5.144 7.8 8.595 10.07 3.347 2.201 5.728 5.213 6.102 6.496.32-1.257 2.972-4.354 6.07-6.557 3.387-2.41 8.634-4.392 8.594-10.07-.071-10.364-11.061-12-14.687-3.448z"
                      />
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div class="col-md">
            <div class="list-style-info">
              <h1 class="style-name">
                <router-link
                  :to="
                    '/' +
                      `building/${$route.params.category}/${cmp.slug}`
                  "
                >{{ cmp.name }}</router-link>
              </h1>

              <!-- <div class="type-pd-code">
                <span class="type">Modern Eminent Apartment</span>
                <span class="pd-code">({{ cmp.composition_code }})</span>
              </div>-->

              <div class="description">
                {{ cmp.short_description }}
                <!-- The citrus and cobble stone grey of this kitchen makes the space
                look sophisticated and alluring.The dark tones are forgiving of
                The citrus and cobble stone grey of this kitchen makes the space
                look cated and alluring.-->
              </div>

              <div class="action">
                <router-link
                  :to="
                    '/' +
                      `building/${$route.params.category}/${cmp.slug}`
                  "
                  class="btn btn-common without-focus"
                >View Details</router-link>
                <router-link to="#" class="btn btn-common without-focus">Get Consultation</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- paginate -->
      <!-- <nav aria-label="Page navigation" class="navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 492 492">
                  <g>
                    <path
                      fill="#4d4d4d4d"
                      d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
                    />
                  </g>
                </svg>
              </span>
              <span>Prev</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <span>Next</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 451.846 451.847">
                  <g>
                    <path
                      fill="#4d4d4d4d"
                      d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                    />
                  </g>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>-->
    </div>
  </section>
</template>

<script>
// gsap
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);
//
import { http2 } from "@/api/axios";
//
export default {
  data() {
    return {
      page: 10,
      filterShow: false,
      compositions: [],
      selectedFilter: "#styleIds",
    };
  },

  methods: {
    /**
     *
     * scroll to the element
     *
     */
    goto(element) {
      this.selectedFilter = element;

      gsap.to("#filterValues", {
        duration: 1,
        scrollTo: {
          y: element,
          offsetY: 20,
        },
      });
    },

    showFilterView() {
      this.filterShow = true;

      this.calculateHeight();
    },

    calculateHeight() {
      // console.log(this.$refs[el].offsetHeight);
      // let height = 0;
      // typeof this.$refs;
      // this.$refs.forEach((element) => {
      //   height += element.offsetHeight;
      // });
      // console.log(height);
      // return "120px";
    },
  },
  mounted: function () {
    http2
      .get("building/get-building", {
        params: { slug: this.$route.params.category },
      })
      .then((response) => {
        this.compositions = response.data.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.list-style-section {
  .title {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
  }

  .btn-filter {
    color: #454545;
    font-size: 17px;
    font-weight: 300;
    line-height: 28.34px;
    text-align: center;
    padding: 0;
    float: right;

    img {
      margin-left: 15px;
    }
  }

  .img-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 310px;
    border-radius: 3px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: inherit;
    }
  }

  .list-element {
    margin-bottom: 45px;

    .row {
      position: relative;
      padding-bottom: 45px;

      &:not(:first-child) {
        padding-top: 45px;
      }

      &:not(:last-child) {
        &::after {
          content: "";
          position: absolute;
          left: 15px;
          right: 15px;
          bottom: -1px;
          width: calc(100% - 30px);
          height: 2px;
          background-color: #e7e7e7;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    .btn-fav {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }

    .btn-fav {
      position: absolute;
      top: 15px;
      right: 16px;
    }

    .layer {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #00000024;
    }

    .list-style-info {
      .style-name {
        margin-bottom: 10px;
        font-size: 28px;
        line-height: 28.34px;
        a {
          color: #454545;
          font-weight: 500;
        }
      }

      .type-pd-code {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        margin-left: -10px;
        margin-right: -10px;
        margin-bottom: 20px;
      }

      .type {
        color: #454545;
        font-size: 18px;
        font-weight: 300;
        line-height: 28.34px;
        margin-left: 10px;
        margin-right: 10px;
      }

      .pd-code {
        color: #454545;
        font-size: 16px;
        font-weight: 500;
        margin-left: 10px;
        margin-right: 10px;
      }

      .description {
        color: #454545;
        font-size: 15px;
        font-weight: 300;
        line-height: 1.5;
        margin-top: 15px;
        margin-bottom: 26px;
      }

      .list-style-item {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        margin-left: -20px;
        margin-right: -20px;
        margin-bottom: 10px;
      }

      .item {
        display: inline-flex;
        align-items: baseline;
        user-select: none;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 15px;
        img {
          margin-right: 8px;
        }

        .count {
          color: #454545;
          font-size: 18px;
          font-weight: 300;
        }
      }

      .dash {
        color: #222222;
        font-size: 25px;
        font-weight: 600;
      }

      .est-price-container {
        display: flex;
        align-items: baseline;
        margin-bottom: 25px;

        .lbl {
          color: #222222;
          font-size: 16px;
          font-weight: 300;
        }

        .est-price {
          color: #222222;
          font-size: 25px;
          font-weight: 600;
          text-transform: uppercase;
          margin-left: 16px;
        }
      }

      .action {
        display: flex;
        margin-left: -20px;
        margin-right: -20px;
        .btn-common {
          background-color: rgba($color: #222222, $alpha: 0.9);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          line-height: 24px;
          padding-left: 1rem;
          padding-right: 1rem;
          border-radius: 0;
          margin-left: 20px;
          margin-right: 20px;

          &:hover {
            background-color: rgba($site-primary, 1);
            // background-color: rgba($color: #222222, $alpha: 1);
          }
        }
      }
    }
  }

  .pagination {
    margin-bottom: 75px;
    .page-item {
      font-size: 22px;
      font-weight: 300;
      padding-left: 15px;
      padding-right: 15px;
      &:focus {
        outline: 0;
        box-shadow: none;
      }
      .page-link {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        padding: 0;
        color: #222222;
        border-color: transparent;
        border-radius: 50%;

        &:focus,
        &:hover {
          outline: 0;
          box-shadow: none;
          background-color: rgba($site-primary, 0.85);
          color: #fff;
          path {
            fill: #fff;
          }
        }
      }
      &:first-child,
      &:last-child {
        .page-link {
          width: auto;
          border-radius: 0;
          span {
            padding: 0 8px;
          }
        }
      }
      &.disabled {
        .page-link {
          color: #979797e7;
        }
      }

      &.active {
        border: 0;
        .page-link {
          color: #fff;
          background: #be926f;
          border-radius: 50%;
        }
      }
    }
  }

  .filter-view {
    position: absolute;
    top: 6%;
    right: 0;
    padding: 0;
    transition: all 0.3s;
    z-index: 900;
    width: 300px;
    border-radius: 2px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.53);
    overflow-y: auto;
    width: 80%;
    opacity: 1;
    background: #fff;

    .close {
      position: absolute;
      top: 2%;
      font-size: 20px;
      right: 2%;
      cursor: pointer;

      .close-icon {
        background: #fff;
        padding: 0 5px;
      }
    }

    .reset-btn,
    .apply-btn {
      background-color: #2c2b2b;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.75px;
      line-height: 24px;
      padding: 12px 48px;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      border-radius: 0;
      margin-left: 15px;
      margin-right: 15px;

      &:hover,
      &:focus {
        background-color: $site-primary;
        color: #fff;
      }
    }
  }

  .filter-list {
    width: 100%;
    margin-bottom: 15px;

    .form-check {
      margin-bottom: 0;

      .form-check-label {
        line-height: 24px;
        margin-left: 10px;
      }

      .form-check-input {
        width: 20px;
        height: 20px;
        border-color: $site-primary;
        margin-top: 2px;

        &[type="checkbox"] {
          border-radius: 0;
        }

        &:focus {
          outline: 0;
          box-shadow: none;
        }

        &:checked {
          background-color: $site-primary;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .filter-list {
    width: 25%;
  }
}
@media screen and (min-width: 600px) {
  .looks-filter-container {
    position: relative;
  }

  .filter-items-block {
    width: 100%;
    display: flex;
    height: 450px;
  }

  .filter-key-left {
    width: 20%;
    background-color: #f5f4f5;
  }

  .filter-values-right {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 80%;
    max-height: 340px;
    overflow-y: scroll;
    padding-bottom: 250px;
    margin-top: 30px;
  }

  .filter-values-block {
    padding: 4%;
    border-bottom: 1px solid #f0f0f0;
  }

  .subtitle_default {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }

  .apply-filter {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 2%;
    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.15);
    background-color: #fff;
    text-align: right;
  }

  .filter-item {
    width: 100%;
    padding: 15px 20px;
    .lbl {
      color: #41303e;
    }
  }

  .active,
  .filter-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .active {
    border-left: 2px solid $site-primary;
    background-color: #fff;
    font-weight: 700;

    .lbl {
      color: $site-primary;
    }
  }
}

@media (min-width: 1200px) {
  .list-style-info {
    width: 60%;
  }
}

@media (max-width: 991px) {
  .list-style-section {
    .list-element {
      padding-top: 25px;
      .row {
        padding-bottom: 100px;
      }

      .list-style-info {
        .action {
          position: absolute;
          left: 0;
          right: 0;
          justify-content: flex-start;
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 25px;
        }

        .est-price-container {
          flex-direction: column;

          .price-container {
            padding-top: 4px;
          }

          .est-price {
            margin-left: 0;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .list-style-section {
    .title {
      font-size: 45px;
      line-height: 1.15;
    }

    .list-element {
      padding-top: 15px;

      .list-style-info {
        padding-top: 15px;

        .style-name {
          font-size: 22px;
        }

        .est-price-container {
          margin-bottom: 10px;

          .est-price,
          .dash {
            font-size: 20px;
          }
        }

        .list-style-item,
        .action {
          margin-left: 0;
          margin-right: 0;
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .list-style-section {
    .list-element {
      .list-style-info {
        .list-style-item {
          flex-wrap: nowrap;
          overflow-x: scroll;
          overflow-y: hidden;
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        .action {
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .list-style-section {
    .list-element {
      .row {
        padding-bottom: 155px;
      }
      .list-style-info {
        .action {
          flex-direction: column;

          .btn-common {
            &:not(:last-child) {
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
