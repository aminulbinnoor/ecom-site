<template>
  <section class="wishlist-section">
    <div class="container">
      <div class="col-12">
        <h1 class="title">Wish list</h1>
      </div>
      <div class="col-12">
        <div class="tab-btn-container">
          <router-link to="/wishlist/looks" class="btn tab-btn">Look(s)</router-link>
          <router-link to="/wishlist/products" class="btn tab-btn">Product(s)</router-link>
        </div>
      </div>

      <div class="col-12 pt-3">
        <!--  -->
        <div class="wish-list">
          <div class="row row-cols-sm-2 row-cols-lg-3 gx-sm-5 gy-5">
            <div class="col-12" v-for="(n, i) in 6" :key="i">
              <div class="style-card">
                <button type="button" class="btn close-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>

                <div class="img-container">
                  <img
                    src="https://dev-p2p.s3-ap-southeast-1.amazonaws.com/theme/a87ff679a2f3e71d9181a67b7542122c/hdpi/apartment-style-1-0.png"
                    alt="Image"
                  />

                  <div class="btn-container">
                    <router-link
                      to="/appartment/apartment-style-1/apartment-looks-2-1?room=test-category"
                      class="btn btn-view-lnk"
                    >VIEW DETAILS</router-link>
                  </div>
                </div>

                <router-link
                  to="/appartment/apartment-style-1/apartment-looks-2-1?room=test-category"
                  class="info-container"
                >
                  <h6 class="lbl">Amber Glass Bedroom</h6>

                  <div class="list-style-item">
                    <div class="item">
                      <img src="/images/q-icon-bedroom.png" alt="icon" />
                      <span class="count">1</span>
                    </div>
                    <div class="item">
                      <img src="/images/q-icon-dining.png" alt="icon" />
                      <span class="count">1</span>
                    </div>
                    <div class="item">
                      <img src="/images/q-icon-washroom.png" alt="icon" />
                      <span class="count">1</span>
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

                  <div class="pricing-container">
                    <span class="price-lbl">Estimate Price</span>
                    <span class="price">12,000 BDT</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { http2 } from "@/api/axios";
export default {
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.wishlist-section {
  .title {
    text-align: center;
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    margin-bottom: 40px;
  }

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

  .wish-list {
    width: 100%;
    display: block;
    margin-bottom: 85px;

    .style-card {
      position: relative;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;

      .close-btn {
        position: absolute;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        box-shadow: 0 0 6px 2px #0000001a;
        top: -11px;
        right: -7px;
        z-index: 999;
        background: #fff;

        &:hover {
          background: #444242;
          svg {
            path {
              fill: #fff;
            }
          }
        }
      }

      .img-container {
        width: 100%;
        position: relative;
        border-radius: 2px;
      }

      img {
        transition: all 0.5s ease-in-out;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: inherit;
      }
      .btn-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: #fdfcfda6;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.35s ease-in-out;
        opacity: 0;
        transform: scale(0.5);
        z-index: -3;
      }
      .btn-view-lnk {
        background-color: rgba($color: $site-primary, $alpha: 0.85);
        color: #ffffff;
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 0;
        &:hover {
          background-color: $site-primary;
        }
      }

      &:hover {
        .btn-container {
          opacity: 1;
          transform: scale(1);
          z-index: 4;
        }
      }
    }

    .info-container {
      display: block;
      padding-top: 15px;
      padding-bottom: 15px;

      .lbl {
        font-size: 18px;
        color: #454545;
        text-align: center;
      }

      .list-style-item {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 8px;

        .item {
          display: inline-flex;
          align-items: baseline;
          user-select: none;

          img {
            max-width: 38px;
            margin-right: 8px;
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
          color: #454545;
          font-size: 15px;
          font-weight: 300;
          margin-right: 15px;
        }

        .price {
          color: $site-primary;
          font-size: 22px;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .wishlist-section {
    .title {
      font-size: 45px;
      line-height: normal;
    }
    .tab-btn-container {
      margin-left: 0;
      margin-right: 0;

      .tab-btn {
        width: 120px;
        font-size: 15px;
        line-height: 26px;
        margin-left: 10px;
        margin-right: 10px;

        &.active {
          &::before {
            width: 100px;
            height: 20px;
          }
          &::after {
            top: calc(100% + 20px);
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
          }
        }
      }
    }

    .wish-list {
      .info-container {
        .list-style-item {
          display: inline-block;
          white-space: nowrap;
          overflow-x: scroll;
          overflow-y: hidden;
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }

          .item {
            &:not(:last-child) {
              margin-right: 35px;
            }
          }
        }
      }
    }
  }
}
</style>
