<template>
  <section class="be-refer-earn-section">
    <div class="container">
      <div class="col-12">
        <div class="hero-text-container">
          <h1 class="title">Be Refer and Earn!</h1>
        </div>
      </div>
    </div>

    <div class="be-refer-earn-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="heading">
              Refer P2P to your family and friends
              and earn up to
            </div>

            <div class="refer-amount">15,000 BDT</div>

            <div class="lnk-container">
              <a href class="btn">REFER NOW</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img-container">
              <img :src="'./images/be-refer-and-earn.png'" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="how-it-works">
      <div class="container">
        <div class="col-12">
          <h1 class="title">How it works</h1>
        </div>

        <div class="flow">
          <div class="row py-5">
            <div class="col-lg-6">
              <div class="img-container">
                <img :src="'./images/mic.png'" alt="image" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content">
                <div class="lbl">Spread the word</div>
                <p
                  class="text"
                >Coming up with the design, build &amp; materials concept that connects creativity and ensured quality, making construction faster and hassle-free.To provide customer service excellence and contemporary products with constant improvement &amp; innovations.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flow">
          <div class="row py-5">
            <div class="col-lg-6">
              <div class="content">
                <div class="lbl">Track</div>
                <p
                  class="text"
                >Coming up with the design, build &amp; materials concept that connects creativity and ensured quality, making construction faster and hassle-free.To provide customer service excellence and contemporary products with constant improvement &amp; innovations.</p>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="img-container">
                <img :src="'./images/home-and-search.png'" alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div class="flow">
          <div class="row py-5">
            <div class="col-lg-6">
              <div class="img-container">
                <img :src="'./images/money-bag.png'" alt="image" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content">
                <div class="lbl">Earn</div>
                <p
                  class="text"
                >Coming up with the design, build &amp; materials concept that connects creativity and ensured quality, making construction faster and hassle-free.To provide customer service excellence and contemporary products with constant improvement &amp; innovations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="terms-and-conditions-section">
      <div class="container">
        <div class="content">
          <div class="title">Terms and Conditions apply</div>

          <div class="element">
            <p class="text">
              Valid if the minimum order value is &#2547;3 lacs.
              When you friend makes 50% payment of their total order value, you'll earn 15,000 BDT
            </p>
            <p
              class="text"
            >Coming up with the design, build &amp; materials concept that connects creativity and ensured quality, making construction faster and hassle-free.To provide customer service excellence and contemporary products with constant improvement &amp; innovations.</p>
          </div>
        </div>

        <div class="img-container">
          <img :src="'./images/terms-and-conditions.png'" alt />
        </div>

        <div class="pt-3 text-center">
          <router-link to="#" class="btn btn-bookAppointment">
            <span>
              <img :src="'./images/calendar-icon.png'" alt />
            </span>
            BOOK APPOINTMENT NOW
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.be-refer-earn-section {
  .img-container {
    width: 100%;
    text-align: right;
    img {
      max-width: 100%;
    }
  }

  .hero-text-container {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 75px;

    .title {
      color: #454545;
      font-size: 80px;
      font-weight: 300;
      line-height: 108.56px;
      text-align: center;
    }
  }

  .be-refer-earn-banner {
    background: #f1f1f1;
    padding-top: 85px;
    padding-bottom: 10px;

    .heading {
      font-size: 35px;
      color: #000000;
      font-weight: 300;
      line-height: 38px;
    }

    .refer-amount {
      color: #000000;
      font-size: 65px;
      font-weight: 500;
      line-height: 46.31px;
      text-transform: uppercase;
      padding-top: 70px;
      padding-bottom: 60px;
    }

    .lnk-container {
      .btn {
        width: 339px;
        background-color: rgba($color: #ff4552, $alpha: 0.9);
        color: #ffffff;
        font-size: 32px;
        font-weight: 700;
        line-height: 39.53px;
        text-align: center;
        text-transform: uppercase;
        border-radius: 60px;

        &:hover {
          background-color: #ff4552;
        }
      }
    }

    .img-container {
      width: 100%;
      display: flex;
      align-items: baseline;
      padding-top: 85px;
      img {
        max-width: 100%;
      }
    }
  }

  .how-it-works {
    padding-top: 85px;
    padding-bottom: 45px;
    margin-bottom: 40px;
    border-bottom: 1px solid $site-primary;

    .title {
      color: #454545;
      font-size: 80px;
      font-weight: 300;
      line-height: 108.56px;
      text-align: center;
    }

    .img-container {
      width: 100%;
      img {
        max-width: 100%;
      }
    }

    .content {
      max-width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .lbl {
        color: #000000;
        font-size: 35px;
        font-weight: 300;
        line-height: 38px;
        text-align: center;
        margin-bottom: 1rem;
      }

      .text {
        margin-bottom: 0;
        color: #454545;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
      }
    }
  }

  .terms-and-conditions-section {
    padding-top: 35px;
    padding-bottom: 95px;
    .content {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      .title {
        color: #000000;
        font-size: 35px;
        font-weight: 300;
        line-height: 38px;
        text-align: center;
        margin-bottom: 30px;
      }
    }

    .element {
      .text {
        color: #454545;
        font-size: 18px;
        font-weight: 300;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: center;
      }
    }

    .img-container {
      text-align: center;

      img {
        max-width: 100%;
      }
    }
  }

  .btn-bookAppointment {
    width: 338px;
    height: 50px;
    background-color: #ff4552;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.97px;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: normal;

    span {
      display: flex;
      margin-right: 10px;
    }
  }
}

// .how-it-works {
.flow {
  &:nth-child(2n + 1) {
    .content {
      margin-left: auto;
    }
  }
  .row {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 180px;
      width: 100%;
      bottom: -33%;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      background-size: 40%;
    }
  }
  &:not(:last-child) {
    &:nth-child(2n + 1) {
      .row {
        &::after {
          background-image: url("~assets/dash-line-rl.svg");
        }
      }
    }
    &:nth-child(2n) {
      .row {
        &::after {
          background-image: url("~assets/dash-line-lr.svg");
        }
      }
    }
  }
}
// }

@media (max-width: 1199px) {
}

@media (max-width: 991px) {
  .be-refer-earn-section {
    .be-refer-earn-banner {
      padding-bottom: 65px;
      .row {
        flex-direction: column-reverse;
        .img-container {
          padding-top: 0;
          padding-bottom: 30px;
        }
      }

      .heading,
      .refer-amount,
      .lnk-container {
        text-align: center;
      }
    }

    .how-it-works {
      .flow {
        &:nth-child(2n + 1) {
          .row {
            flex-direction: column-reverse;
          }
        }

        .row {
          &::after {
            content: none;
          }
        }
      }
      .content {
        max-width: 100%;
        padding-top: 1.75rem;
      }

      .img-container {
        text-align: center;
      }
    }
  }
}

@media (max-width: 575px) {
  .be-refer-earn-section {
    .hero-text-container {
      padding-top: 40px;
      padding-bottom: 45px;
      .title {
        font-size: 45px;
        line-height: normal;
        margin-bottom: 0;
      }
    }

    .be-refer-earn-banner {
      .heading {
        font-size: 25px;
        line-height: normal;
      }

      .refer-amount {
        font-size: 30px;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .lnk-container {
        .btn {
          font-size: 25px;
          line-height: normal;
          width: 100%;
        }
      }
    }

    .how-it-works {
      .title {
        font-size: 40px;
        line-height: normal;
      }

      .content {
        .lbl {
          font-size: 30px;
          margin-bottom: 0.5rem;
        }
        .text {
          font-size: 16px;
        }
      }
    }

    .btn-bookAppointment {
      width: 100%;
      max-width: 338px;
      font-size: 15px;

      img {
        width: 20px;
      }
    }
  }
}
</style>
