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
              <button
                class="btn nav-link"
                :class="activeTab == 2 ? 'active-nav' : ''"
                @click="getTabContent(2)"
              >
                <span>Shipping &amp; Return</span>
              </button>
            </nav>
          </div>

          <div
            class="element-box"
            :class="activeTab == 0 ? 'active-box' : ''"
            v-show="activeTab == 0"
          >
            <p v-text="product.short_description"></p>
          </div>

          <div
            class="element-box"
            :class="activeTab == 1 ? 'active-box' : ''"
            v-show="activeTab == 1"
          >
            <div class="content">
              <div class="lbl">Product Specifications</div>

              <div class="table-responsive-md">
                <table class="table table-borderless table-sm">
                  <tbody>
                      <tr v-for="(sd,index) in product.specification_details" :key="index">
                        <th scope="row">{{ sd.name }}</th>
                        <td>{{sd.value}}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="content">
              <div class="lbl">Dimension</div>

              <div class="table-responsive-md">
                <table class="table table-borderless table-sm">
                  <tbody>
                    <tr v-for="(sd,index) in product.specification_dimensions" :key="index">
                      <th scope="row">{{ sd.name }}</th>
                      <td>{{sd.value}}</td>
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
  props: ["product"],

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
        font-size: 26px;
        font-weight: 300;
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
            height: 1px;
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
