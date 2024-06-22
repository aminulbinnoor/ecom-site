<template>
  <div class="col-lg-9 profile-cm-section">
    <div class="w-100 d-flex" v-if="!toggleFormView">
      <div class="w-100">
        <div class="row mb-3">
          <label for="name" class="col-md-2 col-form-label">Name</label>
          <div class="col-md-10">
            <p class="text">{{name}}</p>
          </div>
        </div>
        <div class="row mb-3">
          <label for="mail" class="col-md-2 col-form-label">Email</label>
          <div class="col-md-10">
            <p class="text">{{email}}</p>
          </div>
        </div>
        <div class="row mb-3">
          <label for="phoneNo" class="col-md-2 col-form-label">Phone</label>
          <div class="col-md-10">
            <p class="text">{{phone}}</p>
          </div>
        </div>
        <div class="row mb-3">
          <label for="address" class="col-md-2 col-form-label">Address</label>
          <div class="col-md-10">
            <p class="text">{{address}}</p>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn edit-btn" @click="toggle()">
          <img :src="'/images/edit.svg'" alt />
        </button>
      </div>
    </div>

    <div class="w-100" v-else>
      <form>
        <div class="row mb-3">
          <label for="name" class="col-md-2 col-form-label">Name</label>
          <div class="col-md-10">
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="mail" class="col-md-2 col-form-label">Email</label>
          <div class="col-md-10">
            <input type="email" class="form-control" id="mail" v-model="email" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="phoneNo" class="col-md-2 col-form-label">Phone</label>
          <div class="col-md-10">
            <input type="text" class="form-control" id="phoneNo" v-model="phone" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="address" class="col-md-2 col-form-label">Address</label>
          <div class="col-md-10">
            <textarea class="form-control" id="address" rows="3" v-model="address"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 offset-md-2">
            <button type="button" class="btn btn-dark mr-3">Save</button>
            <button type="button" class="btn btn-danger" @click="toggle()">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleFormView: false,

      //   form data
      name: "Aminul Islam",
      email: "aminulbinnoor32@gmail.com",
      phone: "01298654721",
      address: "Road: 96, House: 3/A (Space Chalet), Gulshan -2, Dhaka",
    };
  },

  methods: {
    toggle() {
      this.toggleFormView = !this.toggleFormView;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.profile-cm-section {
  .col-form-label {
    font-weight: 500;
  }

  .form-control {
    min-height: 46px;
  }

  .text {
    margin-bottom: 0;
    min-height: 46px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .edit-btn {
    border-radius: 50%;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.14902);
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: $site-primary;
    }
  }
}
</style>