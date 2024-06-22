<template>
  <!-- Modal -->
  <client-only>
    <div
      class="modal fade"
      id="SigninSignup"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="SigninSignupLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered signinSignup-modal">
        <div class="modal-content">
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body p-0">
            <div class="form-container">
              <!--  -->
              <!-- Sign In -->
              <!--  -->
              <div class="form-element" v-show="step == 0">
                <h2 class="heading">Sign in</h2>

                <form>
                  <div class="row mb-3">
                    <label for="mail-phone" class="col-sm-12 col-form-label">Email / Phone</label>
                    <div class="col-sm-12">
                      <input
                        type="text"
                        class="form-control without-focus"
                        id="mail-phone"
                        v-model="username"
                      />
                    </div>

                    <!-- error message -->
                    <!-- <div class="error">
                        These credentials do not match our records.
                    </div>-->
                  </div>
                  <div class="row mb-3">
                    <label for="password" class="col-sm-12 col-form-label">Password</label>
                    <div class="col-sm-12">
                      <input
                        type="password"
                        class="form-control without-focus"
                        id="password"
                        @keyup.enter="signinNow()"
                        v-model="signinPassword"
                      />
                    </div>
                  </div>

                  <div class="d-flex justify-content-center w-100 py-3">
                    <router-link to="#" class="btn without-focus forgot-lnk">Forgot password?</router-link>
                  </div>

                  <div class="form-submit">
                    <button type="button" class="btn without-focus" @click="signinNow()">Sign in</button>
                  </div>

                  <div class="sign-in-with">
                    <!-- <h5 class="lbl">or Sign in with</h5>

                    <div class="sign-in-link">
                      <router-link to="#" title="facebook">
                        <img :src="'/images/facebook.svg'" alt="icon" />
                      </router-link>
                      <router-link to="#" title="google">
                        <img :src="'/images/google.svg'" alt="icon" />
                      </router-link>
                    </div> -->

                    <div class="sgn-lnk">
                      First time user?
                      <span @click="step = 1">SIGN UP</span>
                    </div>
                  </div>
                </form>
              </div>

              <!--  -->
              <!-- Sign Up form -->
              <!--  -->
              <div class="form-element" v-show="step == 1">
                <h2 class="heading">Sign up</h2>

                <div class="d-block" v-if="show">
                  <form>
                    <div class="row mb-4">
                      <label for="name" class="col-sm-12 col-form-label">Name <span class="text-danger"> *</span></label>
                      <div class="col-sm-12">
                        <input
                          type="text"
                          class="form-control without-focus"
                          id="name"
                          required
                          v-model="firstName"
                        />
                      </div>
                      <!-- error message -->
                      <!-- <div class="error">
                        The name field is required.
                      </div>-->
                    </div>
                    <div class="row mb-4">
                      <label for="mail" class="col-sm-12 col-form-label">Email</label>
                      <div class="col-sm-12">
                        <input
                          type="mail"
                          class="form-control without-focus"
                          id="mail"
                          required
                          v-model="email"
                        />
                      </div>
                      <!-- error message -->
                      <!-- <div class="error">
                          The email field is required.
                      </div>-->
                    </div>
                    <div class="row mb-4">
                      <label for="mobileNo" class="col-sm-12 col-form-label">Mobile No <span class="text-danger"> *</span> </label>
                      <div class="col-sm-12">
                        <input
                          type="text"
                          class="form-control without-focus"
                          id="mobileNo"
                          v-model="mobile"
                          required
                        />
                      </div>

                      <div class="col-12 allow-whatsapp">
                        <div class="form-check d-flex pt-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="whatsapp-check"
                            v-model="avaiableWhatsapp"
                          />
                          <label
                            class="form-check-label pl-2"
                            for="whatsapp-check"
                          >You can reach me on whatsapp</label>
                        </div>
                      </div>

                      <!-- error message -->
                      <!-- <div class="error">
                        The mobile no field is required.
                      </div>-->
                    </div>
                    <div class="row mb-4">
                      <label for="new-password" class="col-sm-12 col-form-label">Password <span class="text-danger">*</span> </label>
                      <div class="col-sm-12">
                        <input
                          type="password"
                          class="form-control without-focus"
                          id="new-password"
                          v-model="password"
                        />
                      </div>
                      <!-- error message -->
                      <!-- <div class="error">
                          The password field is required.
                      </div>-->
                    </div>

                    <div class="form-submit">
                      <button type="button" class="btn without-focus" @click="signUpSubmit">Sign Up</button>
                    </div>

                    <div class="sign-in-with">
                      <!-- <h5 class="lbl">or Sign up with</h5>

                      <div class="sign-in-link">
                        <router-link to="#" title="facebook">
                          <img :src="'/images/facebook.svg'" alt="icon" />
                        </router-link>
                        <router-link to="#" title="google">
                          <img :src="'/images/google.svg'" alt="icon" />
                        </router-link>
                      </div> -->

                      <div class="sgn-lnk">
                        Already have an account?
                        <span @click="step = 0">LOG IN</span>
                      </div>
                      <!--  -->
                      <div class="terms_condition">
                        <span>
                          <router-link to="#">Terms &amp; conditions</router-link>
                        </span>
                        <span>
                          <router-link to="#">Privacy Policy</router-link>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>

                <!--  -->
                <!-- verification user by OTP -->
                <!--  -->
                <div class="d-block" v-if="show == false">
                  <form>
                    <!-- OTP input -->
                    <div class="otp-form-conatiner">
                      <div class="mb-3">
                        <label for="otp1" class="form-label">OTP</label>
                        <input
                          type="text"
                          class="form-control without-focus"
                          id="otp1"
                          required
                          v-model="otp"
                        />

                        <!-- <div class="error">
                            Invalid OTP code
                        </div>-->
                      </div>

                      <div class="w-100 pt-1">
                        <button
                          type="button"
                          class="btn btn-otp-submit mx-auto"
                          @click="verifyOtp()"
                        >Verify</button>
                      </div>

                      <div class="help-box">
                        <div class="d-block text-center" v-if="help">
                          <h6 class="text">Not yet received OTP ?</h6>

                          <button
                            type="button"
                            class="btn resend-otp"
                            @click="signUpSubmit()"
                          >RESEND</button>
                        </div>
                        <div
                          class="d-block"
                          v-else
                        >Not yet received OTP ? Please, wait {{ waitTime }}s</div>
                        <button type="button" class="btn goBack" @click="goBack">
                          <span class="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="12px"
                              viewBox="0 0 512.171 512.171"
                            >
                              <g>
                                <path
                                  fill="#fff"
                                  d="M501.504,160.047H234.837V42.714c0-4.309-2.603-8.192-6.592-9.856c-3.989-1.664-8.576-0.747-11.627,2.304L3.115,248.495    C1.109,250.501,0,253.21,0,256.047c0,2.837,1.131,5.547,3.115,7.552l213.504,213.419c2.048,2.048,4.779,3.115,7.552,3.115    c1.365,0,2.752-0.256,4.075-0.811c3.989-1.664,6.592-5.547,6.592-9.856V352.047h266.667c5.888,0,10.667-4.779,10.667-10.667    V170.714C512.171,164.826,507.413,160.047,501.504,160.047z"
                                />
                              </g>
                            </svg>
                          </span>
                          <span>Back</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="sg-in-up">
              <div class="img-container">
                <img :src="'/images/signin-signup.jpg'" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { http2 } from "@/api/axios";
export default {
  data() {
    return {
      showSignIn: true,
      show: true,
      help: false,
      waitTime: 30,
      step: 0,
      //Login
      username: "",
      signinPassword: "",
      // registration data
      firstName: "",
      email: "",
      mobile: "",
      password: "",
      avaiableWhatsapp: "",
      otp: "",
    };
  },

  methods: {
    signUpSubmit() {
      if ( this.firstName == '') {
        this.$toast.error('Name is required',{duration: 3000})
        return
      }else if (this.mobile == '') {
        this.$toast.error('Mobile no is required',{duration: 3000})
        return
      }else if (this.password == '') {
        this.$toast.error('Password  is required',{duration: 3000})
        return
      }
      // this.show = false;
      this.help = false;
      this.waitTime = 30;
      this.helpTimeOut();
      http2
        .post("/signup/otp", {
          mobile: this.mobile,
        })
        .then((response) => {
          if (response.data.msg.success == false) {
            this.$toast.error(response.data.msg.message, { duration: 3000 });
          } else {
            this.show = false;
            //this.stage = 2
          }
        });
    },

    verifyOtp() {
      http2
        .post("/signup/otp-check", {
          mobile: this.mobile,
          otp: this.otp,
          // user info
          first_name: this.firstName,
          email: this.email,
          password: this.password,
          whatsapp: this.avaiableWhatsapp,
        })
        .then((response) => {
          if (response.data.msg.success == false) {
            this.$toast.error(response.data.msg.message, { duration: 3000 });
            return;
          } else {
            this.otp = "";
            this.step = 0;
          }
        });
    },

    signinNow() {
      http2
        .post("/sign-in", {
          username: this.username,
          password: this.signinPassword,
        })
        .then((response) => {
          if (response.data.msg.success) {
            localStorage.setItem("jwt_token", response.data.data.jwt_token);
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.data.user)
            );
            this.$cookies.set("jwt_token", response.data.data.jwt_token, {
              path: "/",
              maxAge: 60 * 60 * 24 * 90,
            });

            this.$toast.success(response.data.msg.message, { duration: 3000 });
            this.$store.commit("login", response.data.data.user);

            this.$router.go("/");
          } else {
            this.$toast.error(response.data.msg.message, { duration: 3000 });
          }
        })
        .catch((error) => {
          this.$toast.error(error.response.data.msg.message, {
            duration: 3000,
          });
        });
    },

    goBack() {
      this.show = true;
      this.help = !this.help;
      this.waitTime = 0;
    },

    /**
     *
     * show user resend button and go-back button
     * after few second
     *
     */

    helpTimeOut() {
      if (this.waitTime > 0) {
        setTimeout(() => {
          this.waitTime -= 1;
          this.helpTimeOut();
        }, 1000);
      } else {
        this.help = !this.help;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.signinSignup-modal {
  .modal-content {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0rem;
    border: 0;

    .btn-close {
      position: absolute;
      right: -16px;
      top: -16px;
      z-index: 99;
      background-clip: border-box;
      background-color: #ffffff;
      padding: 8px;
      border-radius: 50%;
      filter: invert(1);

      &:focus {
        box-shadow: 0 0 0 0.25rem rgba($color: $site-primary, $alpha: 0.25);
      }
    }
  }
  .modal-body {
    display: flex;
    min-height: 760px;
    overflow: hidden;
  }

  .img-container {
    overflow: hidden;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .sg-in-up {
    display: none;
    overflow: hidden;
  }

  .form-container {
    width: 100%;
    padding: 30px 15px;
  }

  .form-element {
    .heading {
      color: #454545;
      font-size: 22px;
      font-weight: 500;
      line-height: normal;
      text-align: center;
      margin-bottom: 30px;
    }

    .col-form-label {
      display: inline-flex;
      align-items: center;
      color: #454545;
      font-size: 14px;
      font-weight: 400;
      line-height: 1;
    }

    .form-control {
      font-size: 15px;
      font-weight: 300;
      height: auto;
      border-radius: 0;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #c1c1c1;
      padding: 0 0.75rem;

      &::placeholder {
        color: #8f8f8f;
      }

      &:focus {
        border-bottom-color: $site-primary;
      }
    }
  }

  .forgot-lnk {
    color: $site-primary;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
  }

  .form-submit,
  .btn-otp-submit {
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    .btn,
    &.btn {
      width: 100%;
      background: rgba($color: #000, $alpha: 0.9);
      color: #ffffff;
      font-size: 20px;
      font-weight: 700;
      line-height: 35px;
      letter-spacing: 0.97px;
      border-radius: 0;

      &:hover {
        background: #000;
      }
    }
  }

  .sign-in-with {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    .lbl {
      color: #454545;
      font-size: 14px;
      font-weight: 500;
      line-height: 27px;
      text-align: center;
    }

    .sign-in-link {
      display: inline-flex;
      align-items: center;
      img {
        border-radius: 50%;
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
      }
      a {
        display: block;
        margin: 0.5rem 1rem;

        &:hover {
          img {
            opacity: 1;
            box-shadow: 0 0 10px 4px #0000002b;
          }
        }
      }
    }
  }

  .sgn-lnk {
    display: block;
    text-align: center;
    color: #454545;
    font-size: 14px;
    font-weight: 500;
    line-height: 27px;
    padding-top: 1rem;
    span {
      color: $site-primary;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      user-select: none;
      cursor: pointer;
    }
  }

  .terms_condition {
    padding-top: 0.5rem;
    span {
      position: relative;
      color: #b3b3b3;
      font-size: 13px;
      font-weight: 500;
      padding-left: 5px;
      padding-right: 5px;
      a {
        display: inline-block;
        color: #b3b3b3;
        font-size: 13px;
        font-weight: 500;
        line-height: 27px;
        text-align: center;
      }

      &:not(:last-child) {
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 100%;
          background-color: #b3b3b3;
          top: 0;
          bottom: 0;
          right: -3px;
        }
      }
    }
  }

  .allow-whatsapp {
    .form-check-input {
      width: 12px;
      height: 12px;
      border-radius: 3px;
      margin-top: 3px;

      &:checked {
        background-color: $site-primary;
        border-color: $site-primary;
      }

      &:focus {
        border-color: $site-primary;
        box-shadow: 0 0 0 0.25rem rgba($color: $site-primary, $alpha: 0.25);
      }
    }
    .form-check-label {
      color: #454545;
      font-size: 12px;
      font-weight: 500;
    }
  }

  .otp-form-conatiner {
    .help-box {
      margin-top: 40px;
      text-align: center;
    }

    .text {
      color: #ff4552;
      font-size: 14px;
    }

    .resend-otp {
      background: #66afef;
    }

    .goBack {
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 14px;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1rem;
      text-transform: uppercase;

      .icon {
        margin-right: 0.25rem;
      }
    }
  }
}

@media (min-width: 767px) {
  .signinSignup-modal {
    .form-container {
      display: block;
      width: 50%;
    }
    .sg-in-up {
      display: block;
      width: 50%;
    }

    .form-container {
      padding: 45px;
    }

    .form-element {
      .col-form-label {
        padding-bottom: 0;
      }
    }

    .form-submit,
    .btn-otp-submit {
      .btn,
      &.btn {
        width: 80%;
      }
    }
  }
}
</style>
