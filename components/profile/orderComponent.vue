<template>
  <div class="w-100 order-table">
    <div class="table-responsive">
      <table class="table table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Order Date</th>
            <th scope="col">Due</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <router-link to="#">1000009</router-link>
            </td>
            <td>
              <router-link to="#">20-Jan-2020</router-link>
            </td>
            <td>
              <router-link to="#">0</router-link>
            </td>
            <td>
              <router-link to="#">100520</router-link>
            </td>
            <td>
              <router-link to="#">
                <span class="bg-success px-2 rounded-pill text-white">Delivered</span>
              </router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link to="#">1000010</router-link>
            </td>
            <td>
              <router-link to="#">20-Jun-2020</router-link>
            </td>
            <td>
              <router-link to="#">612</router-link>
            </td>
            <td>
              <router-link to="#">70612</router-link>
            </td>
            <td>
              <router-link to="#">
                <span class="bg-success px-2 rounded-pill text-white">Delivered</span>
              </router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link to="#">1000011</router-link>
            </td>
            <td>
              <router-link to="#">29-Nov-2020</router-link>
            </td>
            <td>
              <router-link to="#">0</router-link>
            </td>
            <td>
              <router-link to="#">95638</router-link>
            </td>
            <td>
              <router-link to="#">
                <span class="bg-danger px-2 rounded-pill text-white">Cancel</span>
              </router-link>
            </td>
          </tr>
          <tr>
            <td>
              <router-link to="#">1000012</router-link>
            </td>
            <td>
              <router-link to="#">30-Nov-2020</router-link>
            </td>
            <td>
              <router-link to="#">1520</router-link>
            </td>
            <td>
              <router-link to="#">95638</router-link>
            </td>
            <td>
              <router-link to="#">
                <span class="bg-info px-2 rounded-pill text-white">Procecing</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order-table {
  table {
    border-spacing: 0 10px;
    border-collapse: separate;
    margin-bottom: 0;

    thead {
      th {
        padding-top: 0px;
        padding-bottom: 0px;
      }
    }
  }
  a {
    display: block;
    &:hover,
    &:active {
      color: initial;
    }
  }
}
</style>