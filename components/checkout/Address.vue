<template>
  <section class="checkout-step">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="goBack" @click="gotoBack()">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span> Back to Cart
          </div>
        </div>
        <div class="col-12">
          <h1 class="title">Delivery Address</h1>
        </div>
      </div>

      <div class="address-box">
        <!-- <div class="card">
          <div class="card-body">
            <div class="w-100 pr-3">
              <p class="text">Mahmudul Hasan Zahid</p>
              <p class="text">House No: 3/A, Road: 96, Space Chalet, Dhaka-1212</p>
              <p class="text">Post Code: 1212</p>
              <p class="text">Town / City: Dhaka</p>
              <p class="text">Mobile: 01700000000</p>
            </div>
            <div>
              <span
                class="edit"
                data-toggle="collapse"
                href="#collapseEditAddressForm"
                role="button"
                aria-expanded="false"
                aria-controls="collapseEditAddressForm"
              >Edit</span>
            </div>
          </div>
        </div> -->

        <div class="address-form-container">
          <div class="form-container" id="collapseEditAddressForm">
            <div class="card card-body">
              <!-- <div class="header">
                <div class="card-title">Edit your address</div>
                <button
                  type="button"
                  class="btn close without-focus"
                  @click="closeEditAddressForm()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div> -->
              <form>
                <div class="row g-0">
                  <div class="col-md-6 pr-md-3">
                    <div class="mb-4">
                      <label for="firstName" class="form-label">First Name <span class="text-danger">*</span> </label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="First Name"
                        v-model="first_name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 pl-md-3">
                    <div class="mb-4">
                      <label for="lastName" class="form-label">Last Name</label>
                      <input type="text" class="form-control" id="lastName" placeholder="Last Name" v-model="last_name" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address <span class="text-danger">*</span> </label>
                  <textarea class="form-control" id="address" rows="2" placeholder="Address" v-model="address"></textarea>
                </div>
                <div class="mb-4">
                  <label for="city" class="form-label">Town / City <span class="text-danger">*</span> </label>
                  <input type="text" class="form-control"  placeholder="Town / City" v-model="city" />
                </div>
                <div class="mb-4">
                  <label for="city" class="form-label">Postal code</label>
                  <input type="text" class="form-control"  placeholder="postal code" v-model="postcode"/>
                </div>
                <div class="mb-4">
                  <label for="city" class="form-label">email</label>
                  <input type="email" class="form-control"  placeholder="email" v-model="email"/>
                </div>
                <div class="mb-4">
                  <label for="city" class="form-label">Phone <span class="text-danger">*</span> </label>
                  <input type="text" class="form-control"  placeholder="phone number" v-model="phone"/>
                </div>
                <!-- <div class="row g-0">
                  <div class="col-md-6 pr-md-3">
                    <div class="mb-4">
                      <label for="postcode" class="form-label">Postcode</label>
                      <input type="text" class="form-control" id="postcode" placeholder="Postcode" />
                    </div>
                  </div>
                  <div class="col-md-6 pl-md-3">
                    <div class="mb-4">
                      <label for="mobile" class="form-label">Mobile</label>
                      <input type="text" class="form-control" id="mobile" placeholder="Mobile" />
                    </div>
                  </div>
                </div> -->

                <!-- <div class="row g-0 pt-3">
                  <div class="col-md-6 pr-md-3 mb-md-0 mb-4">
                    <button
                      type="button"
                      class="btn btn-light"
                      @click="closeEditAddressForm()"
                    >Cancel</button>
                  </div>
                  <div class="col-md-6 pl-md-3">
                    <button type="submit" class="btn btn-submit">Save</button>
                  </div>
                </div> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      postcode: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    allData: function () {
      let a = {
          first_name: this.first_name,
          last_name: this.last_name,
          address: this.address,
          phone: this.phone,
          email: this.email,
          city:  this.city,
          postcode: this.postcode,
      };
      this.$emit("address", a);
    },

    gotoBack() {
      this.$emit("goBack");
    },

    closeEditAddressForm() {
      var collapseElementList = [].slice.call(
        document.querySelectorAll(".collapse")
      );
      var collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl);
      });
    },
  },
  computed: {
      theUser(){
          return this.$store.state.user
      }
  },
  watch: {
    first_name: function () {
        this.allData()
    },
    last_name: function () {
        this.allData()
    },
    address: function () {
        this.allData()
    },
    phone: function () {
        this.allData()
    },
    email: function () {
        this.allData()
    },
    city: function () {
        this.allData()
    },
    postcode: function () {
      this.allData()
    },
  },
  mounted () {
      let user = this.$store.state.user
      this.first_name = user.first_name
      this.last_name = user.last_name
      this.address = user.address
      this.phone = user.phone
      this.email = user.email
      this.city =  user.city
      this.allData()
  }
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.title {
  color: #454545;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 25px;
}

.goBack {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  background-color: rgb(247, 247, 247);
  border-radius: 2px;
  margin-top: 15px;
  cursor: pointer;
  .icon {
    margin-right: 0.5rem;
  }
}

.checkout-step {
  .address-box {
    padding-top: 25px;

    .text {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    .card-body {
      display: flex;
      align-items: center;

      .edit {
        display: inline-block;
        background-color: #dfdfdf;
        color: #000000;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        border-radius: 0;
        padding: 10px 18px;
        cursor: pointer;
      }
    }
  }

  .address-form-container {
    padding-top: 30px;
    margin-bottom: 50px;
  }

  .form-container {
    .card {
      border-radius: 1px;
      padding-top: 1rem;
      padding-bottom: 2rem;
    }

    form {
      width: 100%;
    }

    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;

      .card-title {
        font-size: 30px;
        font-weight: 500;
      }

      .close {
        width: auto;
        height: 45px;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }

    .form-label {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 3px;
    }

    .form-control {
      border-radius: 2px;

      &::placeholder {
        color: rgba($color: #000000, $alpha: 0.25);
      }
    }

    .btn-submit {
      background-color: #131313;
      color: #ffffff;
    }
    .btn-light {
      background-color: #ececec;
    }

    .btn-light,
    .btn-submit {
      width: 100%;
      font-size: 15px;
      font-weight: 400;
      text-transform: uppercase;
      padding-top: 0.65rem;
      padding-bottom: 0.65rem;
      border-radius: 0;
    }

    .link {
      text-decoration: underline;
      color: #000;
    }
  }
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

@media (min-width: 600px) {
  .checkout-step {
    .address-box,
    .form-container {
      max-width: 550px;
    }
  }
}
</style>
