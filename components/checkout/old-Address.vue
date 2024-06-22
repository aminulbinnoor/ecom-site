<template>
  <section class="checkout-step">
    <div class="container">
      <div class="col-12">
        <div class="tab-btn-container">
          <button type="button" class="btn tab-btn active">Address</button>
        </div>
      </div>

      <div class="address-box">
        <form class="row g-3">
          <div class="col-md-5 mb-4">
            <label for="name" class="form-label">Name <span class="text-danger">*</span> </label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
          <div class="col-md-5 mb-4">
            <label for="phone" class="form-label" >Phone No <span class="text-danger">*</span> </label>
            <input type="text" class="form-control" id="phone" v-model="phone" />
          </div>
          <div class="col-md-2 mb-4">
            <label for="inputZip" class="form-label">Zip <span class="text-danger">*</span> </label>
            <input type="text" class="form-control" id="inputZip" v-model="zip" />
          </div>
          <div class="col-12 mb-4">
            <label for="address" class="form-label">Address <span class="text-danger">*</span> </label>
            <textarea id="address" class="form-control" rows="3" v-model="address"></textarea>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data () {
      return {
        name: '',
        phone: '',
        zip: '',
        address: ''
      }
  },
  methods: {
    allData: function () {
      let a = {
          name: this.name,
          phone: this.phone,
          zip: this.zip,
          address: this.address
      }
      this.$emit('address',a)
    }
  },
  watch: {
    name: function () {
        let a = {
            name: this.name,
            phone: this.phone,
            zip: this.zip,
            address: this.address
        }

        this.$emit('address',a)
    },
    phone: function () {
        let a = {
            name: this.name,
            phone: this.phone,
            zip: this.zip,
            address: this.address
        }

        this.$emit('address',a)
    },
    zip: function () {
        let a = {
            name: this.name,
            phone: this.phone,
            zip: this.zip,
            address: this.address
        }

        this.$emit('address',a)
    },
    address: function () {
        let a = {
            name: this.name,
            phone: this.phone,
            zip: this.zip,
            address: this.address
        }

        this.$emit('address',a)
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.checkout-step {
  .address-box {
    padding-top: 25px;
    padding-bottom: 35px;

    textarea {
      resize: none;
    }

    .form-label {
      font-size: 18px;
    }

    .form-control {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
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
</style>
