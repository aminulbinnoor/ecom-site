<template>
  <footer>
    <div class="container-fluid">
      <div class="footer-container">
        <div class="top">
          <div class="row">
            <div class="col-xl-4 col-md-6 mb-md-0 mb-5">
              <img :src="'/images/p2p-logo-white.svg'" class="img-fluid" alt="P2P Family" />
            </div>
            <div class="col-xl-8 col-md-6">
              <div class="subscribe-form">
                <form class="row row-cols-xl-auto">
                  <div class="col-xl-auto col-md-12 mb-4">
                    <input type="text" class="form-control" placeholder="Enter Name" v-model="name" />
                  </div>

                  <div class="col-xl-auto col-md-12 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email"
                      v-model="email"
                    />
                  </div>

                  <div class="col-xl-auto col-md-12">
                    <button type="button" class="btn btn-send" @click="subscribe()">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="row no-gutter footer-element">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-4">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <router-link to="/about-us">About us</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="/contact-us">Contact Us</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="#">Career</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="/terms-conditions">Terms &amp; Condition</router-link>
                    </li>
                  </ul>
                </div>
                <!--  -->
                <div class="col-md-4">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <router-link to="/about-us">About us</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="/contact-us">Contact Us</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="/terms-conditions">Terms &amp; Condition</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="#">Refer a Friend</router-link>
                    </li>
                  </ul>
                </div>
                <!--  -->
                <div class="col-md-4">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <router-link to="#">Support</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="#">Developers</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="#">Customer Service</router-link>
                    </li>
                    <li class="list-group-item">
                      <router-link to="#">Get Started Guide</router-link>
                    </li>
                  </ul>
                </div>
                <!--  -->
              </div>
            </div>
            <div class="col-lg-6">
              <div class="social-link">
                <div>
                  <p class="title">Follow us</p>
                  <ul class="list-unstyled">
                    <li class="social-list-item">
                      <a href="https://www.facebook.com/groupp2p/" target="_blank">
                        <span class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="32"
                            viewBox="0 0 20 42"
                          >
                            <g>
                              <path
                                fill="#fff"
                                d="M13.125 41.212H4.39V20.934H.022v-6.989h4.367V9.75c0-5.7 2.465-9.092 9.466-9.092h5.831v6.99h-3.642c-2.728 0-2.908.978-2.908 2.8l-.01 3.497h6.603l-.774 6.99h-5.83z"
                              />
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li class="social-list-item">
                      <a  href="https://twitter.com/groupp2p/" target="_blank">
                        <span class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="30"
                            viewBox="0 0 45 35"
                          >
                            <g>
                              <g>
                                <path
                                  fill="#fff"
                                  d="M44.784 4.832a19.32 19.32 0 0 1-5.286 1.359c1.9-1.07 3.359-2.76 4.047-4.772a19.324 19.324 0 0 1-5.847 2.094C36.021 1.834 33.628.788 30.981.788c-5.083 0-9.206 3.862-9.206 8.626 0 .676.081 1.335.239 1.965-7.65-.36-14.432-3.794-18.972-9.012a8.177 8.177 0 0 0-1.246 4.338c0 2.99 1.626 5.632 4.095 7.18a9.67 9.67 0 0 1-4.17-1.08v.11c0 4.178 3.173 7.664 7.384 8.456-.772.199-1.587.3-2.425.3-.593 0-1.17-.05-1.733-.15 1.171 3.424 4.571 5.92 8.6 5.99-3.15 2.313-7.12 3.692-11.432 3.692-.743 0-1.476-.04-2.196-.12 4.073 2.445 8.912 3.875 14.11 3.875 16.93 0 26.189-13.146 26.189-24.545 0-.374-.01-.745-.028-1.117a18.13 18.13 0 0 0 4.594-4.464z"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li class="social-list-item">
                      <a href="https://www.linkedin.com/company/p2pfamily" target="_blank">
                        <span class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 43 40"
                          >
                            <g>
                              <g>
                                <path
                                  fill="#fff"
                                  d="M3.267.764h36.357c1.74 0 3.152 1.236 3.152 2.758v32.97c0 1.526-1.411 2.76-3.152 2.76H3.267c-1.741 0-3.153-1.234-3.153-2.76V3.522C.114 2 1.526.764 3.267.764zM13.79 15.535H7.508v17.378h6.282zm.413-5.373c-.04-1.706-1.363-3.002-3.512-3.002-2.15 0-3.554 1.296-3.554 3.002 0 1.667 1.364 3.002 3.471 3.002h.041c2.19 0 3.554-1.335 3.554-3.002zm9.347 22.75V23.21c0-.517.04-1.038.207-1.408.452-1.039 1.487-2.112 3.222-2.112 2.274 0 3.183 1.593 3.183 3.93v9.294h6.283V22.95c0-5.341-3.101-7.825-7.233-7.825-3.333 0-4.827 1.685-5.662 2.869v-2.46h-6.284c.083 1.633 0 17.378 0 17.378z"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <!-- <li class="social-list-item">
                      <a href>
                        <span class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="30"
                            viewBox="0 0 31 40"
                          >
                            <g>
                              <g>
                                <path
                                  fill="#fff"
                                  d="M16.387.785C5.85.785.535 8.307.535 14.58c0 3.799 1.444 7.178 4.542 8.437.508.206.963.006 1.111-.554.102-.388.344-1.364.453-1.771.148-.554.09-.75-.32-1.232-.893-1.048-1.464-2.407-1.464-4.33 0-5.58 4.194-10.576 10.921-10.576 5.957 0 9.229 3.623 9.229 8.463 0 6.367-2.83 11.74-7.032 11.74-2.32 0-4.057-1.91-3.5-4.253.666-2.798 1.957-5.818 1.957-7.836 0-1.807-.974-3.315-2.991-3.315-2.372 0-4.277 2.443-4.277 5.715 0 2.085.707 3.494.707 3.494L7.018 30.596c-.848 3.572-.127 7.95-.066 8.391.035.262.373.324.527.127.219-.285 3.044-3.757 4.004-7.227.272-.983 1.56-6.07 1.56-6.07.77 1.465 3.023 2.753 5.418 2.753 7.13 0 11.968-6.472 11.968-15.134 0-6.55-5.572-12.65-14.042-12.65z"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom" style="text-align:center">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 col-sm-11">
                      <img class="sslcommerz" src="/images/sslcommerz.png" alt="">
                  </div>
                  <div class="col-md-12">
                      <p class="copy-right-text">&copy; 2020 - {{year}} P2P.com All rights reserved</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { http2 } from "@/api/axios.js";
export default {
  data() {
    return {
      name: "",
      email: "",
      year: new Date().getFullYear()
    };
  },
  methods: {
    subscribe() {
      if (this.name == "") {
        this.$toast.error("name is required", { duration: 3000 });
        return;
      } else if (this.email == "") {
        this.$toast.error("email is required", { duration: 3000 });
        return;
      }
      http2
        .post("/subscribe-customer/create", {
          name: this.name,
          email: this.email,
        })
        .then((response) => {
          if (response.data.msg.success == false) {
            this.$toast.error(response.data.msg.message, { duration: 3000 });
          } else {
            this.$toast.success(response.data.msg.message, { duration: 3000 });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-image: url("~assets/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .social-link {
    display: flex;
    justify-content: flex-end;

    .title {
      color: #ffffff;
      font-size: 22px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2.88px;
      margin-bottom: 25px;
    }

    .icon {
      &:hover {
        path {
          fill: $site-primary;
        }
      }
    }

    ul {
      display: flex;
    }

    .social-list-item {
      &:not(:first-child) {
        margin-left: 45px;
      }
      &:not(:last-child) {
        margin-right: 45px;
      }
    }
  }

  .footer-bottom {
    padding-top: 50px;
    padding-bottom: 50px;

    .sslcommerz{
        text-align: center;
        width: 100%;
    }

    .copy-right-text {
      color: #fff;
      margin-bottom: 0;
      font-size: 18px;
      font-weight: 500;
      line-height: 32.39px;
      text-align: center;
    }
  }
}
.footer-container {
  padding-left: 85px;
  padding-right: 85px;
  border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.45);

  .top {
    padding-top: 90px;
    padding-bottom: 65px;

    .list-group {
      border: 0;
      .list-group-item {
        border: 0;
        background: transparent;
        padding-left: 0;
        padding-right: 0;
        color: #ffffff;
        a {
          color: #ffffff;

          &:hover {
            color: $site-primary;
          }
        }
      }
    }
  }

  .footer-element {
    margin-top: 60px;
  }
}

.subscribe-form {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .form-control {
    max-width: 345px;
    height: 50px;
    padding: 12px 22px;
    border-radius: 0;
    border: 1px solid transparent;
    background-color: #222222bf;
    color: #e8e8e8;
    font-size: 17px;
    font-weight: 300;
    line-height: 36px;

    &::placeholder {
      color: #e8e8e8;
      font-size: 17px;
      font-weight: 300;
      line-height: 36px;
    }
  }

  .btn-send {
    width: 130px;
    padding: 10px;
    background-color: $site-primary;
    color: #ffffff;
    border-radius: 0;
  }
}

@media (max-width: 1200px) {
  .subscribe-form {
    .form-control {
      max-width: 100%;
    }
  }
}
@media (max-width: 992px) {
  footer {
    .social-link {
      padding-top: 45px;
      justify-content: center;
    }
  }
}
@media (max-width: 575px) {
  .footer-container {
    padding-left: 30px;
    padding-right: 30px;
  }

  footer {
    .social-link {
      .list-unstyled {
        justify-content: space-between;
      }
      .social-list-item {
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
    }

    .footer-bottom {
      .copy-right-text {
        font-size: 14px;
      }
    }
  }
}
</style>
