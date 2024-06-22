<template>
  <section class="slider_and_des">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- slider -->
          <Slider :slides="villa.images"></Slider>
        </div>
        <div class="col-lg-4">
          <div class="right-side">
            <div class="product-element mb-2">
              <h1 class="product-name">{{villa.name}}</h1>

              <!-- <button type="button" class="add-to-fav btn without-focus">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 30 27">
                  <g>
                    <path
                      fill="#454545"
                      d="M14.676 6.235C10.876-2.672.073-.594.002 9.745c-.04 5.678 5.144 7.8 8.595 10.07 3.347 2.201 5.728 5.212 6.101 6.495.32-1.256 2.973-4.353 6.07-6.556 3.387-2.41 8.635-4.393 8.595-10.07-.071-10.365-11.061-12-14.687-3.449z"
                    />
                  </g>
                </svg>
              </button> -->
            </div>

            <div class="rate-and-review">
              <!-- <client-only>
                <StarRating
                  :rating="3.5"
                  :increment="0.1"
                  :read-only="true"
                  :star-size="14"
                  :show-rating="false"
                  :active-color="['#777777']"
                  :active-border-color="['#777777']"
                ></StarRating>
              </client-only> -->
            </div>

            <div class="pricing">
              <!-- display current price all time, even if no discount. -->
              <!-- <span class="current-price">&#2547; 12,000</span> -->
            </div>

            <div class="basket-container">
              <div class="btn-container">
                <button type="button" class="btn btn-buy without-focus">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "@/components/building/SliderWithPreview";
import collect from "collect.js";
import {http2} from '@/api/axios'
export default {
  components: {
    Slider,
  },
  props: ["villa"],
  data () {
    return {
      villa: ''
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.slider_and_des {
  margin-bottom: 60px;
  .apartment_type {
    color: #be926f;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .title {
    color: #454545;
    font-size: 60px;
    font-weight: 300;
    margin-bottom: 0;
  }

  .right-side {
    .product-element {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-column-gap: 10px;

      .add-to-fav {
        height: 25px;
        padding: 0;
        margin-top: 4px;
      }
    }
    .product-name {
      color: #454545;
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 0;
    }
    .sku {
      color: #454545;
      font-size: 14px;
      font-weight: 500;
    }

    .see-more-btn {
      color: #000;
      font-weight: 500;

      &:hover {
        color: $site-primary;
      }
    }

    .rate-and-review {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      .btn-link {
        margin-left: 15px;
        text-decoration: none;
        padding: 0;
        color: #797979;
        font-size: 14px;
        font-weight: 300;
      }
    }

    .description {
      color: #454545;
      font-size: 14px;
      line-height: 1.5em;
      font-weight: 300;
      padding-bottom: 5px;
    }

    .pricing {
      margin-left: -8px;
      margin-right: -8px;
      margin-bottom: 15px;

      .current-price,
      .price-off {
        color: #2c2b2b;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }

      .current-price,
      .price-off,
      .cut-of-price {
        margin-left: 8px;
        margin-right: 8px;
        word-break: keep-all;
        display: inline-block;
      }
    }

    .basket-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
      margin-bottom: 20px;

      .btn-container {
        .btn-buy {
          width: 100%;
          height: 56px;
          background: #2c2b2b;
          font-size: 18px;
          font-weight: 700;
          text-transform: capitalize;
          letter-spacing: 1px;
          border-radius: 3px;
          padding-left: 30px;
          padding-right: 30px;
          color: #ffffff;

          &:hover {
            background-color: #be926f;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .slider_and_des {
    .right-side {
      margin-top: 1.75rem;
    }
  }
}

@media (max-width: 575px) {
  .slider_and_des {
    .btn-container {
      .btn-buy {
        height: 56px;
      }
    }
  }
}
</style>
