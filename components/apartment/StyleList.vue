<template>
  <section class="apartment-style">
    <div class="container">
      <h1 class="heading">{{ $route.params.category }} Styles</h1>
      <p class="text">
        Today’s {{ $route.params.category }} can be designed in many ways. You
        can get the minimal idea from this page 2021
      </p>

      <div class="style-list">
        <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-3 gx-4 gy-4">
          <!-- // placeholder start -->
          <div v-if="themes.length == 0" class="col" v-for="(theme, index) in 9" :key="index">
            <a href="javascript:void()" class="link">
              <div class="style-card">
                <!-- black drop layer -->
                <div class="layer"></div>
              </div>
            </a>
          </div>
          <!-- // placeholder end -->

          <div class="col-sm" v-for="(theme, index) in themes" :key="index">
            <router-link :is="true ? 'span' : 'router-link'" :to="'/' + $route.params.category + '/' + theme.slug" class="link">
              <div class="style-card">
                <!-- image -->
                <img
                  :data-src="
                    cdn +
                      '/' +
                      theme.images[0].path +
                      'hdpi/' +
                      theme.images[0].file
                  "
                  alt="Image"
                  v-lazy-load
                  src="/images/lazy/best-selling-kitchen-lazy.jpg"
                />
                <!-- info -->
                <div class="info-container">
                  <p
                    href="/Showcase/Living/Modern/Estelle-L-shaped-Kitchen#"
                    class="lbl"
                  >{{ theme.name }}</p>
                  <p class="looks-total">
                    {{theme.total_looks}} Looks
                    <span class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 492.004 492.004"
                        width="12"
                        height="12"
                      >
                        <g>
                          <path
                            fill="#be926f"
                            d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
                          />
                        </g>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </router-link>
          </div>
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
      themes: [],
    };
  },
  mounted: function () {
    http2
      .get("/category/theme", {
        params: { slug: this.$route.params.category },
      })
      .then((response) => {
        this.themes = response.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.apartment-style {
  margin-bottom: 60px;
  .heading {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    text-align: center;
    text-transform: capitalize;
  }

  .text {
    color: #232323;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
  }

  .style-list {
    padding-top: 25px;
    padding-bottom: 25px;

    .link {
      display: block;
      border-radius: 2px;
    }

    .style-card {
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      height: 100%;
      border-radius: inherit;

      img {
        transition: all 0.5s ease-in-out;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: inherit;
      }

      .info-container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 1rem;
        border-radius: inherit;
        .lbl {
          color: #ffffff;
          text-align: center;
          font-size: 38px;
          font-weight: 900;
          font-style: normal;
          letter-spacing: normal;
          line-height: normal;
          text-transform: uppercase;
          margin-bottom: 0;
          background: #00000040;
          padding: 14px 4px;
        }

        .looks-total {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          left: 0;
          right: 0;
          bottom: 8%;
          background: #fff;
          color: #be926f;
          margin: auto;
          width: 130px;
          padding: 2px;
          border-radius: 2px;
          font-size: 14px;
          margin-bottom: 0;
          text-align: center;
          font-weight: 500;

          .icon {
            margin-left: 0.5rem;
            svg {
              transition: all 0.5s ease-in-out;
              transform: translateX(0px);
            }
          }
        }
      }

      &:hover {
        img {
          transform: scale(1.03);
        }

        .looks-total {
          .icon {
            svg {
              transform: translateX(6px);
            }
          }
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .apartment-style {
    .heading {
      font-size: 45px;
      line-height: 1.15;
    }

    .text {
      font-size: 16px;
    }

    .style-list {
      .style-card {
        .info-container {
          .lbl {
            font-size: 14px;
          }

          .looks-total {
            font-size: 13px;

            .icon {
              svg {
                width: 11px;
                height: 11px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
