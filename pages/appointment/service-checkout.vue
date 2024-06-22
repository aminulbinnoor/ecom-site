<template>
  <section class="service-checkout">
    <div class="container">
      <!--  -->
      <div class="row">
        <div class="col-lg-7">
          <div class="ck-card">
            <div class="icon">
              <img src="/images/schedule.png" alt="icon" />
            </div>
            <div class="ck-content">
              <div class="title">Schedule</div>
              <div class="text">Expert will arrive at your given address within 9:00 AM</div>

              <div class="info-element-1">
                <div class="info-container">
                  <div class="info-box-1">
                    <span class="sup-text">9:00</span>am
                  </div>
                  <div class="info-box-2">
                    <span class="sup-text">07</span>December, 2020
                  </div>
                </div>
                <div class="action">
                  <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#scheduleInfoModal"
                  >Change</button>
                </div>
              </div>
            </div>
          </div>

          <div class="ck-card">
            <div class="icon">
              <img src="/images/user.png" alt="icon" />
            </div>
            <div class="ck-content">
              <div class="title">Contact Person</div>
              <div class="text">Expert will contact with the following person</div>

              <div class="info-element-1">
                <div class="info-container">
                  <div class="info-box-1">Rabi Hasan</div>
                  <div class="info-box-2">+88010101010101</div>
                </div>
                <div class="action">
                  <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#addressInfoModal"
                  >Change</button>
                </div>
              </div>
            </div>
          </div>

          <div class="ck-card">
            <div class="icon">
              <img src="/images/map-mark.png" alt="icon" />
            </div>
            <div class="ck-content">
              <div class="title">Address</div>
              <div class="text">Expert will contact with the following person</div>

              <div class="form-element">
                <form>
                  <div class="row">
                    <div class="col-lg-6 pr-lg-4">
                      <div class="row mb-3">
                        <label for="houseNo" class="col-sm col-form-label">House No.</label>
                        <div class="col-sm-7 pl-lg-0">
                          <input type="text" class="form-control without-focus" id="houseNo" />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label for="blockNo" class="col-sm col-form-label">Block No.</label>
                        <div class="col-sm-7 pl-lg-0">
                          <input type="text" class="form-control without-focus" id="blockNo" />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label for="area" class="col-sm col-form-label">Area</label>
                        <div class="col-sm-7 pl-lg-0">
                          <input type="text" class="form-control without-focus" id="area" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 pl-lg-4">
                      <div class="row mb-3">
                        <label for="RoadNoName" class="col-sm col-form-label">Road No. Name</label>
                        <div class="col-sm-7 pl-lg-0">
                          <input type="text" class="form-control without-focus" id="RoadNoName" />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label for="SectorNo" class="col-sm col-form-label">Sector No.</label>
                        <div class="col-sm-7 pl-lg-0">
                          <input type="text" class="form-control without-focus" id="SectorNo" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="save-address" />
                        <label class="form-check-label" for="save-address">Save this Address</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="ck-card">
            <div class="icon">
              <img src="/images/details.png" alt="icon" />
            </div>
            <div class="ck-content">
              <div class="title">Service Detail</div>
              <div
                class="text"
              >Our service provider will contact you to confirm the following service</div>

              <div class="info-element-2">
                <p class="sr-name">Service number 1</p>
                <p class="details">service details in details</p>
                <p class="unit">1 Unit</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 ml-auto">
          <div class="summary-card">
            <!--  -->
            <div class="lbl">Order Summary</div>

            <ul class="summary-list">
              <li>
                <div class="list-item">
                  <div class="name">Servicing 1</div>
                  <div class="price">
                    <span class="discount strikethrough">৳ 700</span>
                    <span>৳ 600</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-item">
                  <div class="name">Servicing 2</div>
                  <div class="price">
                    <span class="discount strikethrough">৳ 1600</span>
                    <span>৳ 1550</span>
                  </div>
                </div>
              </li>
              <!-- divider section -->
              <li class="divider">
                <div class="list-item">
                  <div class="name">Delivery Charge</div>
                  <div class="price">
                    <span>৳ 1000</span>
                  </div>
                </div>
              </li>
              <li class="divider">
                <div class="list-item">
                  <div class="name">Amount to be paid</div>
                  <div class="price">
                    <span>৳ 3150</span>
                  </div>
                </div>
              </li>
            </ul>

            <div class="term-condition-and-place">
              <p class="text">By placing order, I agree to the terms &amp; conditions</p>
              <button type="button" class="btn">Place Order</button>
            </div>

            <div class="total-price">
              <div class="lbl-text">Amount to be paid</div>
              <div class="tprice">৳ 3150</div>
            </div>
          </div>
          <!--  -->

          <div class="additional-note">
            <label
              for="additionalNote"
              class="form-label"
            >Do you want to add any additional notes with your order?</label>
            <textarea class="form-control" id="additionalNote" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="scheduleInfoModal modal fade"
      id="scheduleInfoModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="scheduleInfoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="scheduleInfoModalLabel">Schedule Time</h5>
            <!--  -->
            <button type="button" class="btn close-btn" data-dismiss="modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <h4 class="title">When would you feel comfortable to get a consultancy?</h4>
            <!--  -->
            <div class="col-lg-7 mx-auto">
              <!--  -->
              <div class="lbl">Select your prefer time</div>

              <simplebar data-simplebar-auto-hide="false" class="scrollable-x mb-5">
                <div class="schedule-list">
                  <div class="date">
                    <input
                      type="radio"
                      class="btn-check"
                      name="date"
                      id="option1"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-light" for="option1">
                      <span class="no">21</span>
                      <span class="day">Today</span>
                    </label>
                  </div>

                  <div class="date">
                    <input
                      type="radio"
                      class="btn-check"
                      name="date"
                      id="option2"
                      autocomplete="off"
                    />
                    <label class="btn btn-light" for="option2">
                      <span class="no">22</span>
                      <span class="day">Tue</span>
                    </label>
                  </div>

                  <div class="date">
                    <input
                      type="radio"
                      class="btn-check"
                      name="date"
                      id="option3"
                      autocomplete="off"
                    />
                    <label class="btn btn-light" for="option3">
                      <span class="no">23</span>
                      <span class="day">Wed</span>
                    </label>
                  </div>

                  <div class="date">
                    <input
                      type="radio"
                      class="btn-check"
                      name="date"
                      id="option4"
                      autocomplete="off"
                    />
                    <label class="btn btn-light" for="option4">
                      <span class="no">24</span>
                      <span class="day">Thu</span>
                    </label>
                  </div>

                  <div class="date">
                    <input
                      type="radio"
                      class="btn-check"
                      name="date"
                      id="option5"
                      autocomplete="off"
                    />
                    <label class="btn btn-light" for="option5">
                      <span class="no">25</span>
                      <span class="day">Fri</span>
                    </label>
                  </div>

                  <div class="date">
                    <input
                      type="radio"
                      class="btn-check"
                      name="date"
                      id="option6"
                      autocomplete="off"
                    />
                    <label class="btn btn-light" for="option6">
                      <span class="no">26</span>
                      <span class="day">Sat</span>
                    </label>
                  </div>

                  <div class="date">
                    <input
                      type="radio"
                      class="btn-check"
                      name="date"
                      id="option7"
                      autocomplete="off"
                    />
                    <label class="btn btn-light" for="option7">
                      <span class="no">27</span>
                      <span class="day">Sun</span>
                    </label>
                  </div>
                </div>
              </simplebar>

              <!--  -->
              <!--  -->
              <div class="lbl">Select your prefer date</div>

              <div class="time-slot">
                <div class="ts">
                  <input
                    type="radio"
                    class="btn-check"
                    name="time-slot"
                    id="ts1"
                    autocomplete="off"
                    checked
                  />
                  <label class="btn btn-light" for="ts1">
                    <span class="focus">10:00</span> am -
                    <span class="focus">11:00</span> am
                  </label>
                </div>

                <div class="ts">
                  <input
                    type="radio"
                    class="btn-check"
                    name="time-slot"
                    id="ts2"
                    autocomplete="off"
                  />
                  <label class="btn btn-light" for="ts2">
                    <span class="focus">11:00</span> am -
                    <span class="focus">12:00</span> pm
                  </label>
                </div>

                <div class="ts">
                  <input
                    type="radio"
                    class="btn-check"
                    name="time-slot"
                    id="ts3"
                    autocomplete="off"
                  />
                  <label class="btn btn-light" for="ts3">
                    <span class="focus">12:00</span> pm -
                    <span class="focus">01:00</span> pm
                  </label>
                </div>

                <div class="ts">
                  <input
                    type="radio"
                    class="btn-check"
                    name="time-slot"
                    id="ts4"
                    autocomplete="off"
                  />
                  <label class="btn btn-light" for="ts4">
                    <span class="focus">02:00</span> pm -
                    <span class="focus">03:00</span> pm
                  </label>
                </div>

                <div class="ts">
                  <input
                    type="radio"
                    class="btn-check"
                    name="time-slot"
                    id="ts5"
                    autocomplete="off"
                  />
                  <label class="btn btn-light" for="ts5">
                    <span class="focus">03:00</span> pm -
                    <span class="focus">04:00</span> pm
                  </label>
                </div>

                <div class="ts">
                  <input
                    type="radio"
                    class="btn-check"
                    name="time-slot"
                    id="ts6"
                    autocomplete="off"
                  />
                  <label class="btn btn-light" for="ts6">
                    <span class="focus">04:00</span> pm -
                    <span class="focus">05:00</span> pm
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn">Confirm schedule</button>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!--  -->
    <div
      class="addressInfoModal modal fade"
      id="addressInfoModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="addressInfoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addressInfoModalLabel">Order For</h5>
            <!--  -->
            <button type="button" class="btn close-btn" data-dismiss="modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <h4 class="title">Whose this service ordered for?</h4>
            <div class="col-lg-6 mx-auto">
              <div class="mb-4">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Contact person name" />
              </div>

              <label for="phoneNo" class="form-label">Phone Number</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="phone-no-addon">+88</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Contact person phone number"
                  aria-label="Contact person phone number"
                  aria-describedby="phone-no-addon"
                  id="phoneNo"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn">Confirm contact</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

//
export default {
  components: {
    simplebar,
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.service-checkout {
  padding-top: 40px;
  padding-bottom: 70px;
  .ck-card {
    padding: 40px 35px;
    border-radius: 5px;
    background-color: #f7f7f7;
    display: grid;
    grid-template-columns: 45px 1fr;
    grid-column-gap: 20px;
    margin-bottom: 30px;
  }

  .icon {
    max-width: 45px;
  }

  .ck-content {
    .title {
      color: #5b5b5b;
      font-size: 25px;
      font-weight: 400;
      line-height: normal;
    }

    .text {
      color: #454545;
      font-size: 14px;
      font-weight: 300;
      line-height: normal;
    }

    .info-element-1 {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-column-gap: 20px;
    }

    .info-element-1,
    .info-element-2,
    .form-element {
      padding-top: 30px;
    }

    .info-element-2 {
      display: block;

      .sr-name {
        color: #454545;
        font-size: 15px;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 0;
      }

      .unit,
      .details {
        color: #454545;
        font-size: 14px;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 0;
      }
    }

    .info-container {
      display: flex;

      .info-box-1,
      .info-box-2 {
        display: inline-flex;
        align-items: center;
        color: #5b5b5b;
        font-size: 18px;
        font-weight: 300;
        line-height: normal;
      }
      .info-box-1 {
        padding-right: 20px;
      }

      .info-box-2 {
        padding-left: 20px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -1px;
          background: #c3c3c3;
          width: 2px;
          height: 70%;
          margin: auto;
        }
      }

      .sup-text {
        color: #5b5b5b;
        font-size: 30px;
        font-weight: 300;
        line-height: normal;
        padding-right: 5px;
      }
    }

    .action {
      .btn {
        width: 100px;
        border-radius: 2px;
        background-color: $site-primary;
        color: #fefefe;
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
      }
    }

    .form-element {
      label {
        color: #454545;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        padding-right: 0;
      }

      .form-control {
        background-color: transparent;
        border-radius: 0;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        font-size: 14px;
      }

      .form-check-input {
        width: 14px;
        height: 14px;

        &:checked {
          background-color: $site-primary;
          border-color: $site-primary;
        }

        &:focus {
          box-shadow: 0 0 0 0.25rem rgba($color: $site-primary, $alpha: 0.25);
        }
      }
    }
  }

  .summary-card {
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    padding: 0 30px;
    text-align: center;
    margin-bottom: 45px;

    .lbl {
      display: inline-block;
      color: #5b5b5b;
      font-size: 30px;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      transform: translateY(-20px);
      background-color: #fff;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .summary-list {
      width: 100%;
      margin: 0;
      list-style-type: none;
      text-align: left;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 80px;

      li {
        &:not(:last-child) {
          padding-bottom: 0.45rem;
        }
      }

      .divider {
        border-top: 1px solid $site-primary;
        padding-top: 0.45rem;
      }

      .list-item {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-column-gap: 20px;
        .name {
          color: #232323;
          font-size: 18px;
          font-weight: 300;
        }

        .price {
          color: #5b5b5b;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
          text-align: right;
          display: inline-flex;
        }

        .discount {
          color: #5b5b5ba3;
          margin-right: 10px;
        }
      }
    }

    .term-condition-and-place {
      width: 100%;
      text-align: center;

      .text {
        text-align: center;
        color: #454545;
        font-size: 14px;
        font-weight: 300;
        line-height: normal;
      }

      .btn {
        color: #fefefe;
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
        width: 138px;
        background-color: $site-primary;
        border-radius: 2px;
      }
    }

    .total-price {
      transform: translateY(25px);
      background-color: #fff;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      display: inline-block;

      .lbl-text {
        color: #5b5b5b;
        font-size: 16px;
        font-weight: 300;
        line-height: normal;
        text-align: center;
      }

      .tprice {
        color: $site-primary;
        font-size: 22px;
        font-weight: 500;
        text-align: center;
      }
    }
  }

  .additional-note {
    label {
      color: #454545;
      font-size: 14px;
      font-weight: 300;
      line-height: normal;
    }

    .form-control {
      background-color: #f7f7f7;
    }
  }

  .scrollable-x {
    padding-bottom: 8px;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .schedule-list {
    display: flex;
    padding: 4px;

    .date {
      .btn {
        min-width: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid #e6e6e6;
      }

      .no {
        font-size: 25px;
        color: $site-primary;
      }

      .day {
        color: #b1b1b1;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
      }

      .btn-check {
        &:focus {
          outline: 0;
          box-shadow: none;
        }
        &:checked + .btn {
          background-color: rgba($color: $site-primary, $alpha: 0.15);
          border-color: $site-primary;

          .day {
            color: $site-primary;
          }
        }
      }
    }
  }

  .time-slot {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-bottom: 3rem;

    .btn {
      width: 100%;
      border: 1px solid #e6e6e6;
      font-weight: 400 !important;
      background-color: #fff;

      .focus {
        color: $site-primary;
      }
    }

    .btn-check {
      &:checked + .btn {
        background-color: rgba($color: $site-primary, $alpha: 0.15);
        font-weight: 500 !important;
        border-color: $site-primary !important;
        color: $site-primary;
      }
    }
  }

  .modal {
    .modal-header,
    .modal-footer {
      position: relative;
      justify-content: center;
      border: 0;
      box-shadow: 0 0 3px 3px #0000000a;
    }

    .modal-body {
      min-height: 22vw;

      .title {
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 30px;
      }

      label {
        font-size: 18px;
        font-weight: 500;
        color: #000;
      }

      .form-control {
        height: 50px;
        border-radius: 15px;
        padding-left: 20px;
        padding-right: 20px;
      }

      .input-group {
        border-radius: 15px;

        .input-group-text {
          border-top-left-radius: inherit;
          border-bottom-left-radius: inherit;
          background-color: #f9bf92;
          border: 1px solid #f9bf92;
        }
      }

      .lbl {
        font-size: 16px;
        text-align: center;
        color: #8a8a8a;
        margin-bottom: 1rem;
      }
    }

    .modal-footer {
      .btn {
        border-radius: 15px;
        color: #fff;
        font-size: 18px;
        padding: 10px 24px;
        background-color: rgba($color: $site-primary, $alpha: 0.85);

        &:hover {
          background-color: $site-primary;
        }
      }
    }

    .close-btn {
      width: 40px;
      height: 40px;
      position: absolute;
      right: -15px;
      top: -15px;
      padding: 0;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 10px #0000002b;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
  }
}

@media (min-width: 576px) {
  .modal {
    .modal-dialog {
      max-width: 50%;
    }
  }
}

@media (max-width: 767px) {
  .service-checkout {
    .ck-content {
      .info-element-1 {
        grid-template-columns: 1fr;
        grid-row-gap: 15px;
      }
    }
  }
}

@media (max-width: 575px) {
  .service-checkout {
    .ck-card {
      padding: 20px;
      grid-column-gap: 10px;
      grid-template-columns: 36px 1fr;
    }

    .icon {
      max-width: 36px;

      img {
        width: 100%;
      }
    }

    .ck-content {
      .title {
        font-size: 20px;
      }

      .info-element-1,
      .info-element-2,
      .form-element {
        padding-top: 15px;
      }

      .info-element-1 {
        .info-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: 6px;

          .info-box-1,
          .info-box-2 {
            padding: 0;
          }

          .info-box-2 {
            &::before {
              content: none;
            }
          }
        }
      }

      .action {
        .btn {
          font-size: 14px;
        }
      }

      .info-container {
        .sup-text {
          font-size: 22px;
        }
      }
    }

    .summary-card {
      margin-top: 1rem;

      .lbl {
        font-size: 24px;
        transform: translateY(-16px);
      }

      .term-condition-and-place {
        .btn {
          font-size: 15px;
        }
      }

      .summary-list {
        .list-item {
          .name {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>

<style lang="css">
.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  height: 5px;
}
</style>