<template>
  <section class="similar-project">
    <div class="container">
      <h1 class="heading">Similar Projects</h1>

      <div class="list-card row row-cols-sm-2 row-cols-lg-3 g-4">
        <div class="col-sm" v-for="(n, index) in 6" :key="index">
          <div class="item-card">
            <router-link to="#" class="item-img">
              <img src="/images/product/557e6.png" alt="Image" />
            </router-link>
            <div class="info-container">
              <router-link to="#" class="lbl">Amber Glass Bedroom</router-link>

              <div class="action">
                <button
                  type="button"
                  class="btn add-fav-btn without-focus"
                  :class="[index > 3 ? 'in-fav' : '']"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="20"
                    viewBox="0 0 30 27"
                  >
                    <g>
                      <path
                        fill="#454545"
                        d="M14.676 6.235C10.876-2.672.073-.594.002 9.745c-.04 5.678 5.144 7.8 8.595 10.07 3.347 2.201 5.728 5.212 6.101 6.495.32-1.256 2.973-4.353 6.07-6.556 3.387-2.41 8.635-4.393 8.595-10.07-.071-10.365-11.061-12-14.687-3.449z"
                      />
                    </g>
                  </svg>
                </button>

                <!-- <button type="button" class="btn add-cart-btn without-focus">
                  <img :src="'/images/cart.svg'" alt="icon" />
                </button>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5 text-center">
        <router-link to="#" class="view-more-lnk btn without-focus">VIEW MORE</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");

.similar-project {
  background-color: #f1f1f1;
  padding-top: 60px;
  padding-bottom: 60px;

  .heading {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    text-align: center;
  }

  .list-card {
    padding-top: 28px;
    .item-card {
      position: relative;
      .item-img {
        display: block;
        filter: brightness(0.65) contrast(0.65);
        transition: all 0.35s ease-in-out;
        border-radius: 2px;
        img {
          border-radius: inherit;
          max-width: 100%;
        }
      }

      &:hover {
        .item-img {
          filter: brightness(1) contrast(1);
        }
      }

      .action {
        position: absolute;
        top: 10px;
        right: 10px;

        .add-fav-btn {
          background: #f0f0f0;
          border-radius: 50%;
          padding: 5px;
          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.12941);
        }
      }
    }

    .info-container {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px;

      .lbl {
        display: block;
        width: 100%;
        margin-bottom: 0;
        color: #454545;
        font-size: 20px;
        font-weight: 300;
        line-height: 28.34px;
        text-align: center;
      }
    }
  }

  .view-more-lnk {
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    line-height: 29.26px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    width: 203px;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    background-color: #2c2b2b;
    border-radius: 0;

    &:hover {
      background-color: $site-primary;
      color: #fff;
    }
  }
}

@media (max-width: 1200px) {
  .similar-project {
    .list-card {
      .info-container {
        .lbl {
          font-size: 18px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .similar-project {
    .heading {
      font-size: 50px;
      line-height: 1.15;
    }
  }
}
@media (max-width: 500px) {
  .similar-project {
    .heading {
      font-size: 38px;
    }
  }
}
</style>
