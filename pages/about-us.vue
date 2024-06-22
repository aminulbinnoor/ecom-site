<template>
  <section class="about-us-section">
    <div class="container">
      <div class="hero-text-container">
        <h1 class="title">About Us?</h1>
      </div>
    </div>

    <!--  -->
    <!--  -->
    <WeHave></WeHave>

    <!--  -->
    <!-- message section -->
    <div class="message-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 pr-lg-4 position-relative">
            <div class="img-container">
              <img :src="'/images/ink-pot.png'" class="img-fluid" alt="image" />
            </div>

            <div class="message-title">
              <h1 class="title">
                Message
                <br />for you
              </h1>
            </div>
          </div>
          <div class="col-lg-5 pl-lg-4">
            <div class="message">
              <p
                class="text"
              >Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <p
                class="text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <p
                class="text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.</p>
              <p
                class="text"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!-- journey section -->

    <div class="journey-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="img-container">
              <img :src="'/images/journey.png'" alt="image" />
            </div>
          </div>
          <div class="col-lg-6">
            <h1 class="title">Journey</h1>

            <div class="journey">
              <p class="text">
                Since first opening our DOORS in 2015, P2P has earned a reputation for integrity, quality, service, and attention to detail. We are proud that much of our business continues to come from repeat customers and client referrals. Regardless of the size or nature of each construction project, P2P is committed to generating personalized, innovative, quality-driven solutions that reflect customer expectations and deliver superior outcomes. Committed to become the preferred home builder while pursuing excellence through dedication, experience and disciplined employees with an endless passion to deliver, quality, timely &amp; profitable projects.
                P2P’s business concept is one of its kinds in Bangladesh.
              </p>

              <p class="text">
                The idea of hassle-free one-stop construction, interior solutions with the materials support has won the heart &amp; the mind of people. P2P consistently focuses on client satisfaction ensuring the requirements are fulfilled beyond their expectation. The latest building technology and design concepts are practiced to attain the best quality work to be delivered on time and within the budget. Clients are guided from concept design to project completion phase knowing their investment is worth and in the safe hands.
                At P2P we always believe business will not succeed without the support from the delighted clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!-- board of directors -->

    <div class="board-of-directors">
      <div class="container-fluid">
        <h1 class="title">Board of Directors</h1>
      </div>
    </div>

    <!--  -->
    <!--  -->
    <OurPartners></OurPartners>
    <div class="book-lnk-container py-4 mb-5 text-center">
      <router-link to="#" class="btn btn-bookAppointment">
        <span>
          <img src="/images/calendar-icon.png" alt="icon" />
        </span>
        BOOK APPOINTMENT NOW
      </router-link>
    </div>
  </section>
</template>

<script>
import WeHave from "@/components/home/WeHave";
import OurPartners from "@/components/home/OurPartners";
import { http1 } from "@/api/axios";
// export default {
//     data () {
//       return {
//         mountains: []
//       }
//   },
//   asyncData(context) {
//     return http1.get('http://jsonplaceholder.typicode.com/posts/1').then((res) => {
//         return { fetchedData: res.data }
//       })
//   },
//     head: {
//       title: this.fetchedData.title,
//
//     },
//   components: {
//     WeHave,
//   },
// };

export default {
  components: {
    WeHave,
  },
  head() {
    return {
      title: "About us",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "about us",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.about-us-section {
  .hero-text-container {
    .title {
      color: #454545;
      font-size: 80px;
      font-weight: 200;
      text-align: center;
    }
  }

  .message-section {
    background-color: #f7f7f7;
    margin-top: 90px;
    margin-bottom: 50px;

    [class^="col"] {
      padding-top: 90px;
      padding-bottom: 60px;
    }

    .img-container {
      position: absolute;
      top: -55px;
      left: -65px;
    }

    .message-title {
      text-align: right;
      .title {
        display: inline-block;
        color: #232323;
        font-size: 60px;
        font-weight: 200;
        line-height: 1;
        text-align: left;
      }
    }
    .message {
      padding-top: 15px;
      .text {
        color: #454545;
        font-size: 18px;
        font-weight: 300;
      }
    }
  }

  .journey-section {
    padding-top: 85px;
    padding-bottom: 75px;
    margin-bottom: 18px;
    border-bottom: 1px solid $site-primary;

    .img-container {
      width: 100%;
      img {
        max-width: 100%;
      }
    }

    .title {
      color: #232323;
      font-size: 70px;
      font-weight: 200;
      line-height: 80px;
      margin-bottom: 30px;
    }

    .journey {
      .text {
        color: #454545;
        font-size: 18px;
        font-weight: 300;
        line-height: normal;

        &:not(:first-child) {
          margin-bottom: 0;
        }
      }
    }
  }

  .board-of-directors {
    margin-bottom: 18px;
    border-bottom: 1px solid $site-primary;

    > div {
      padding-top: 60px;
      padding-bottom: 60px;
      background-color: #151515;
      margin-bottom: 18px;
    }

    .title {
      color: #ffffff;
      font-size: 80px;
      font-weight: 200;
      line-height: 108.56px;
      text-align: center;
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

@media (max-width: 1200px) {
  .about-us-section {
    .message-section {
      .message-title {
        position: relative;
        top: 30%;
        transform: translateY(-30%);
      }
    }
  }
}
@media (max-width: 991px) {
  .about-us-section {
    .message-section {
      [class^="col"] {
        padding-top: 70px;
        padding-bottom: 60px;
      }
      .img-container {
        left: 20%;
        img {
          width: 40%;
        }
      }

      .message-title {
        text-align: center;
        padding-left: 25%;
      }
    }
  }
}
@media (max-width: 575px) {
  .about-us-section {
    .message-section {
      .img-container {
        left: 3%;
        top: -35px;
      }

      .message-title {
        transform: translateY(-13%);
        .title {
          font-size: 45px;
        }
      }
    }

    .hero-text-container,
    .board-of-directors,
    .journey-section {
      .title {
        font-size: 45px;
        text-align: center;
        line-height: normal;
      }
    }

    .journey-section {
      padding-top: 35px;
      padding-bottom: 50px;
      .title {
        margin-bottom: 15px;
      }
    }

    .message-section [class^="col"] {
      padding-bottom: 15px;
      padding-top: 35px;
    }

    .board-of-directors {
      > div {
        padding-top: 40px;
        padding-bottom: 40px;
      }
    }

    .book-lnk-container {
      .btn-bookAppointment {
        width: 90%;
        font-size: 14px;
      }
    }
  }
}
</style>
