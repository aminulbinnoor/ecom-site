<template>
  <section class="order-list-section">
    <div class="container">
      <h1 class="title">My order</h1>
      <p class="text" v-if="orders.length">Your placed orders:</p>

      <!-- if no order found -->
      <div class="no-order" v-if="noOrderFound">
        <p class="text">You haven't placed any orders</p>

        <router-link to="#" class="link-btn btn">Order</router-link>
      </div>

      <!--  -->
      <div class="table-responsive order-list" v-if="orders.length">
        <table class="table table-hover border-dark" >
          <thead>
            <tr>
              <th scope="col" class="col-oid">Order Id</th>
              <th scope="col" class="col-date">Date</th>
              <th scope="col" class="col-due">Due</th>
              <th scope="col" class="col-total">Total</th>
              <th scope="col" class="col-status">Status</th>
            </tr>
          </thead>
          <tbody>
            <router-link to="/" tag="tr" v-for="order in orders"  :key="order.id">
              <td class="col-oid">{{ order.id }}</td>
              <td class="col-date">{{ order.created_at }}</td>
              <td class="col-due">15015</td>
              <td class="col-total">{{ order.total }}</td>
              <td class="col-status">
                <span class="status bg-warning">{{order.order_status}}</span>
              </td>
            </router-link>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import {http2} from '@/api/axios'

export default {
  data() {
    return {
      orders: [],
      noOrderFound: false,
    };
  },
  methods: {
    //
  },
  mounted () {
    http2.get('/order-get').then((response)=>{
        console.log(response.data.data)
        this.orders = response.data.data
        if(this.orders.length){
          this.noOrderFound = false
        }else{
          this.noOrderFound = true
        }
    })
  }
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//

.order-list-section {
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

  .no-order {
    height: 250px;

    .text {
      margin-bottom: 60px;
    }
    .link-btn {
      width: 266px;
      background-color: #131313;
      color: #ffffff;
      font-size: 15px;
      font-weight: 400;
      text-transform: uppercase;
      padding-top: 0.65rem;
      padding-bottom: 0.65rem;
      border-radius: 0;
    }
  }

  .order-list {
    table {
      tr {
        cursor: pointer;
        td {
          white-space: nowrap;
        }
      }
    }
    .col-oid {
      width: 150px;
    }

    .col-date {
      width: 200px;
    }

    .col-status {
      width: 150px;
      text-align: center;
    }

    .status {
      display: inline-block;
      padding: 3px 6px;
      width: 130px;
      text-align: center;
      border-radius: 16px;
      font-size: 14px;
      color: #fff;
      user-select: none;
    }
  }
}
</style>
