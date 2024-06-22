<template>
  <section class="specification">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="spec-element">
            <nav class="nav nav-pills nav-fill">
              <button
                class="btn nav-link"
                :class="activeTab == 0 ? 'active-nav' : ''"
                @click="getTabContent(0)"
              >
                <span>Description</span>
              </button>
              <button
                class="btn nav-link"
                :class="activeTab == 1 ? 'active-nav' : ''"
                @click="getTabContent(1)"
              >
                <span>Specification</span>
              </button>
              <!-- <button
                class="btn nav-link"
                :class="activeTab == 2 ? 'active-nav' : ''"
                @click="getTabContent(2)"
              >
                <span>Construction Materials</span>
              </button> -->
            </nav>
          </div>

          <div
            class="element-box"
            :class="activeTab == 0 ? 'active-box' : ''"
            v-show="activeTab == 0"
          >
            <p>{{villa.description}}</p>
          </div>

          <div
            class="element-box"
            :class="activeTab == 1 ? 'active-box' : ''"
            v-show="activeTab == 1"
          >
            <div class="content">
              <div class="lbl">Building Specifications</div>

              <div class="table-responsive-md">
                <table class="table table-borderless table-sm">
                  <tbody>
                    <tr v-if="villa.min_land_req">
                      <th scope="row">Min land req</th>
                      <td>{{villa.min_land_req}}</td>
                    </tr>
                    <tr v-if="villa.no_of_floor">
                      <th scope="row">No of floor</th>
                      <td>{{villa.no_of_floor}}</td>
                    </tr>
                    <tr v-if="villa.total_space_per_floor">
                      <th scope="row">Total space per floor</th>
                      <td>{{villa.total_space_per_floor}}</td>
                    </tr>
                    <tr v-if="villa.structure">
                      <th scope="row">structure</th>
                      <td>{{villa.structure}}</td>
                    </tr>
                    <tr v-if="villa.beds">
                      <th scope="row">Bed</th>
                      <td>{{villa.beds}}</td>
                    </tr>
                    <tr v-if="villa.bathrooms">
                      <th scope="row">Bathrooms</th>
                      <td>{{villa.bathrooms}}</td>
                    </tr>
                    <tr v-if="villa.balcony">
                      <th scope="row">Balcony</th>
                      <td>{{villa.balcony}}</td>
                    </tr>
                    <tr v-if="villa.garden">
                      <th scope="row">Garden</th>
                      <td>{{villa.garden}}</td>
                    </tr>
                    <tr v-if="villa.pool">
                      <th scope="row">Pool</th>
                      <td>{{villa.pool}}</td>
                    </tr>
                    <tr v-if="villa.garage_capacity">
                      <th scope="row">Garage capacity</th>
                      <td>{{villa.garage_capacity}}</td>
                    </tr>
                    <tr v-if="villa.steel">
                      <th scope="row">Steel</th>
                      <td>{{villa.steel}}</td>
                    </tr>
                    <tr v-if="villa.fitting">
                      <th scope="row">Fitting</th>
                      <td>{{villa.fitting}}</td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            class="element-box"
            :class="activeTab == 2 ? 'active-box' : ''"
            v-show="activeTab == 2"
          >
            <div class="content">
              <div class="lbl">Shipping</div>
              <div
                class="text"
              >We can ship to virtually any address in Bangladesh. Note that there are restrictions on some products. Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.</div>
            </div>

            <div class="content">
              <div class="lbl">Returns Policy</div>
              <div class="text">
                Customers have to pay the bill amount in advance through Credit Card/Bkash/Bank Deposit for any orders from outside of Dhaka City.
                You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).
              </div>
            </div>

            <router-link to="#" class="link">Ready more...</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["villa"],

  data() {
    return {
      activeTab: 0,
    };
  },

  methods: {
    getTabContent(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");

.specification {
  padding-top: 50px;
  padding-bottom: 30px;
  margin-bottom: 65px;

  .spec-element {
    padding-top: 13px;
    padding-bottom: 13px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 10px;

    .nav-pills {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .nav-link {
      padding: 3px 0;
      border-radius: 0;

      &:focus {
        outline: 0;
        box-shadow: none;
      }

      span {
        position: relative;
        color: #333333;
        font-size: 22px;
        font-weight: 500;
        line-height: normal;
      }

      &.active-nav {
        span {
          &::after {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 0;
            right: 0;
            height: 2px;
            width: 100%;
            background-color: #b8b8b8;
          }
        }
      }
    }
  }

  .element-box {
    padding: 16px 25px;
    box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.11);
    background-color: #fbfbfb;
    border-radius: 3px;
    color: #7d7d7d;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;

    &.active-box {
      animation: fadeIn 0.35s ease-in-out 1;
    }

    .content {
      margin-bottom: 30px;

      table {
        font-size: 16px;
        color: #808080;

        tbody {
          th {
            color: #555555;
            font-weight: 500;
            width: 200px;
          }
        }
      }
    }

    .link {
      color: #898989;
      font-size: 15px;
      font-weight: 400;
      line-height: normal;
    }

    .lbl {
      color: #505050;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: normal;
      margin-bottom: 5px;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}

@media (max-width: 767px) {
  .specification {
    .spec-element {
      .nav-pills {
        padding: 0;
        grid-column-gap: 5px;
      }

      .nav-link {
        span {
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .specification {
    .spec-element {
      overflow: auto hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .nav-pills {
        display: flex;
        flex-wrap: nowrap;
        white-space: nowrap;
      }
      .nav-link {
        padding-left: 8px;
        padding-right: 8px;

        span {
          font-size: 16px;
        }
      }
    }

    .element-box {
      padding: 14px;
      font-size: 16px;

      .lbl {
        font-size: 18px;
      }

      .content {
        table {
          tbody {
            th {
              min-width: 120px;
              width: auto;
            }

            th,
            td {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
