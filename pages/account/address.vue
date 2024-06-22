<template>
  <section class="address-section">
    <div class="container">
      <h1 class="title">My address</h1>
      <p class="text">Please note that changes to delivery addresses will not affect current orders.</p>
      <p class="text">
        To amend the delivery address for open orders please visit
        <router-link class="link" to>My orders.</router-link>
      </p>

      <div class="d-block w-100" v-if="haveAddress">
        <div class="btn-container">
          <button
            type="button"
            class="btn toggleAddAddress"
            data-toggle="collapse"
            href="#collapseAddressForm"
            role="button"
            aria-expanded="false"
            aria-controls="collapseAddressForm"
          >Add a Address</button>
        </div>

        <div class="address-form-container">
          <div class="form-container collapse" id="collapseAddressForm">
            <div class="card card-body">
              <div class="header">
                <div class="card-title">Enter your new address</div>
                <button type="button" class="btn close without-focus" @click="closeAddressForm()">
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
              </div>
              <form>
                <div class="row g-0">
                  <div class="col-md-6 pr-md-3">
                    <div class="mb-4">
                      <label for="firstName" class="form-label">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 pl-md-3">
                    <div class="mb-4">
                      <label for="lastName" class="form-label">Last Name</label>
                      <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <textarea class="form-control" id="address" rows="2" placeholder="Address"></textarea>
                </div>
                <div class="mb-4">
                  <label for="city" class="form-label">Town / City</label>
                  <input type="text" class="form-control" id="city" placeholder="Town / City" />
                </div>
                <div class="row g-0">
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
                </div>

                <div class="row g-0 pt-3">
                  <div class="col-md-6 pr-md-3 mb-md-0 mb-4">
                    <button type="button" class="btn btn-light" @click="closeAddressForm()">Cancel</button>
                  </div>
                  <div class="col-md-6 pl-md-3">
                    <button type="submit" class="btn btn-submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="d-block w-100" v-else>
        <div class="address-holder">
          <div class="card">
            <div class="card-body">
              <p class="text">Mahmudul Hasan Zahid</p>
              <p class="text">House No: 3/A, Road: 96, Space Chalet, Dhaka-1212</p>
              <p class="text">Post Code: 1212</p>
              <p class="text">Town / City: Dhaka</p>
              <p class="text">Mobile: 01700000000</p>
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button
            type="button"
            class="btn toggleEditAddress"
            data-toggle="collapse"
            href="#collapseEditAddressForm"
            role="button"
            aria-expanded="false"
            aria-controls="collapseEditAddressForm"
          >Edit</button>
        </div>

        <div class="address-form-container">
          <div class="form-container collapse" id="collapseEditAddressForm">
            <div class="card card-body">
              <div class="header">
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
              </div>
              <form>
                <div class="row g-0">
                  <div class="col-md-6 pr-md-3">
                    <div class="mb-4">
                      <label for="firstName" class="form-label">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 pl-md-3">
                    <div class="mb-4">
                      <label for="lastName" class="form-label">Last Name</label>
                      <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <textarea class="form-control" id="address" rows="2" placeholder="Address"></textarea>
                </div>
                <div class="mb-4">
                  <label for="city" class="form-label">Town / City</label>
                  <input type="text" class="form-control" id="city" placeholder="Town / City" />
                </div>
                <div class="row g-0">
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
                </div>

                <div class="row g-0 pt-3">
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
                </div>
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
      haveAddress: false,
    };
  },
  methods: {
    closeAddressForm() {
      var collapseElementList = [].slice.call(
        document.querySelectorAll(".collapse")
      );
      var collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl);
      });
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
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//

.address-section {
  padding: 25px 0;

  .title {
    color: #000000;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 35px;
  }

  .text {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
  }

  .link {
    text-decoration: underline;
    color: #000;
  }

  .btn-container {
    display: block;
    padding-top: 25px;

    .toggleAddAddress {
      width: 240px;
      background-color: #131313;
      color: #ffffff;
      font-size: 15px;
      font-weight: 400;
      text-transform: uppercase;
      padding-top: 0.65rem;
      padding-bottom: 0.65rem;
      border-radius: 0;
    }
    .toggleEditAddress {
      width: 150px;
      background-color: #dfdfdf;
      color: #000000;
      font-size: 15px;
      font-weight: 400;
      text-transform: uppercase;
      padding-top: 0.65rem;
      padding-bottom: 0.65rem;
      border-radius: 0;
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

    .header {
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

  .address-holder {
    .text {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }
}

@media (min-width: 600px) {
  .address-section {
    .form-container,
    .address-holder {
      max-width: 550px;
    }
  }
}
</style>