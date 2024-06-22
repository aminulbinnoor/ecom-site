<template>
  <section class="why-us-section">
    <div class="container">
      <div class="row flex-lg-row flex-column-reverse">
        <div class="col-lg mb-lg-0 mb-5">
          <div class="hero-text-container">
            <h1 class="title">Why Us?</h1>

            <div class="content">
              <p class="text">
                Coming up with the design, build &amp; materials concept that
                connects creativity and ensured quality, making construction
                faster and hassle-free.To provide customer service excellence
                and contemporary products with constant improvement &amp;
                innovations.
              </p>
              <p class="text">
                customer service excellence and contemporary products with
                constant improvement &amp; innovations.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="img-container">
            <img :src="'/images/why-us-hero-img.png'" alt="image" />
          </div>
        </div>
      </div>

      <div class="row py-4">
        <div class="col-12 weprovide">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="weprovide-card">
                <div class="img-container">
                  <img src="/images/day-calendar-icon.png" alt="icon" />
                </div>
                <div class="sub-title">
                  45 days or
                  <br />we pay you rent
                </div>
                <div class="text">
                  Coming up with the design, build &amp; materials concept that
                  connects creativity and ensured quality, making construction
                  faster and hassle-free.To provide customer service excellence
                  and contemporary products with constant improvement &amp;
                  innovations.
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="weprovide-card">
                <div class="img-container">
                  <img src="/images/happy-customer-icon.png" alt="icon" />
                </div>
                <div class="sub-title">
                  1000+
                  <br />Happy Customer
                </div>
                <div class="text">
                  Coming up with the design, build &amp; materials concept that
                  connects creativity and ensured quality, making construction
                  faster and hassle-free.To provide customer service excellence
                  and contemporary products with constant improvement &amp;
                  innovations.
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="weprovide-card">
                <div class="img-container">
                  <img src="/images/designer-icon.png" alt="icon" />
                </div>
                <div class="sub-title">
                  50+
                  <br />Designer
                </div>
                <div class="text">
                  Coming up with the design, build &amp; materials concept that
                  connects creativity and ensured quality, making construction
                  faster and hassle-free.To provide customer service excellence
                  and contemporary products with constant improvement &amp;
                  innovations.
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="weprovide-card">
                <div class="img-container">
                  <img src="/images/building-material-icon.png" alt="icon" />
                </div>
                <div class="sub-title">
                  Inhouse
                  <br />Material
                </div>
                <div class="text">
                  Coming up with the design, build &amp; materials concept that
                  connects creativity and ensured quality, making construction
                  faster and hassle-free.To provide customer service excellence
                  and contemporary products with constant improvement &amp;
                  innovations.
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="weprovide-card">
                <div class="img-container">
                  <img src="/images/warranty-icon.png" alt="icon" />
                </div>
                <div class="sub-title">
                  5 years
                  <br />Material Warranty
                </div>
                <div class="text">
                  Coming up with the design, build &amp; materials concept that
                  connects creativity and ensured quality, making construction
                  faster and hassle-free.To provide customer service excellence
                  and contemporary products with constant improvement &amp;
                  innovations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wehave">
      <div class="container">
        <div class="row">
          <div class="col-lg">
            <div class="img-container">
              <img :src="'/images/why-us-and-wehave.png'" alt="image" />
            </div>
          </div>
          <div class="col-lg">
            <div class="text-container">
              <div class="title">We Have</div>

              <div class="content">
                <p class="text">
                  Valid if the minimum order value is ₹3 lacs. When you friend
                  makes 50% payment of their total order value, you'll earn
                  15,000 BDT
                </p>

                <p class="text">
                  Coming up with the design, build &amp; materials concept that
                  connects creativity and ensured quality, making construction
                  faster and hassle-free.To provide customer service excellence
                  and contemporary products with constant improvement &amp;
                  innovations.
                </p>
              </div>

              <div class="book-lnk-container">
                <router-link to="#" class="btn btn-bookAppointment">
                  <span>
                    <img src="/images/calendar-icon.png" alt="icon" />
                  </span>
                  BOOK APPOINTMENT NOW
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <OurServices></OurServices>
    <OurPartners></OurPartners>

    <div class="col-12 px-3">
      <div class="book-lnk-container py-sm-5 py-4 mb-sm-5 mb-4 text-center">
        <router-link to="#" class="btn btn-bookAppointment">
          <span>
            <img src="/images/calendar-icon.png" alt="icon" />
          </span>
          BOOK APPOINTMENT NOW
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import OurServices from "@/components/home/OurServices";
import OurPartners from "@/components/home/OurPartners";

export default {
  components: {
    OurServices,
    OurPartners,
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.why-us-section {
  .img-container {
    width: 100%;
    text-align: right;
    img {
      max-width: 100%;
    }
  }

  .hero-text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      color: #454545;
      font-size: 80px;
      font-weight: 300;
      line-height: 108.56px;
    }

    .content {
      padding-top: 20px;
      .text {
        color: #454545;
        font-size: 18px;
        font-weight: 300;
      }
    }
  }

  .weprovide {
    .weprovide-card {
      .img-container {
        width: 100%;
        text-align: center;
      }

      .sub-title {
        padding-top: 30px;
        color: #000000;
        font-size: 30px;
        font-weight: 300;
        line-height: 38px;
        text-align: center;
        margin-bottom: 28px;
      }

      .text {
        color: #454545;
        font-size: 16px;
        font-weight: 300;
        text-align: center;
      }
    }
  }

  .wehave {
    background: #f1f1f1;

    .img-container {
      text-align: left;
    }

    .text-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        color: #000000;
        font-size: 30px;
        font-weight: 300;
        line-height: 38px;
        text-align: left;
      }

      .content {
        padding-top: 30px;
        padding-bottom: 30px;
        .text {
          color: #454545;
          font-size: 18px;
          font-weight: 300;
        }
      }
    }
  }

  .book-lnk-container {
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

        img {
          width: 18px;
        }
      }
    }
  }
}

@media (max-width: 1199px) {
  .why-us-section {
    .wehave {
      .text-container {
        padding-top: 60px;
        padding-bottom: 60px;
      }

      .img-container {
        height: 100%;
        display: flex;
        align-items: flex-start;
      }
    }
  }
}

@media (max-width: 991px) {
  .why-us-section {
    .hero-text-container {
      margin-bottom: 25px;

      .title,
      .content {
        text-align: center;
      }
    }
    .wehave {
      .text-container {
        text-align: center;

        .title {
          text-align: center;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .why-us-section {
    .hero-text-container {
      margin-bottom: 0;
      .title {
        font-size: 45px;
        line-height: normal;
      }
    }

    .weprovide {
      .weprovide-card {
        .img-container {
          img {
            width: 65px;
          }
        }
        .sub-title {
          padding-top: 20px;
          margin-bottom: 20px;
          font-size: 22px;
          line-height: normal;
        }
      }
    }

    .wehave {
      .text-container {
        padding-top: 35px;
        padding-bottom: 35px;
        .content {
          padding-top: 15px;
          padding-bottom: 15px;
        }
      }
    }

    .book-lnk-container {
      .btn-bookAppointment {
        width: 100%;
        max-width: 338px;
        font-size: 14px;
      }
    }

    .partner-section,
    .service-section {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>
