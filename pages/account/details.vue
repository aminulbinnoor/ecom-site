<template>
  <section class="details-section">
    <div class="container">
      <h1 class="title">My details</h1>
      <p
        class="text"
      >These are the personal details that we currently hold for you. If you wish to edit, update or add to them, please do so using these fields and save your changes before you move on.</p>
    </div>

    <div class="container">
      <div class="form-container mx-auto">
        <form>
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" />

            <span class="error">This is a required field.</span>
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" />
          </div>
          <div class="mb-3">
            <label for="emailAddress" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="emailAddress" />
          </div>
          <div class="mb-4">
            <label for="currentPassword" class="form-label">Current Password</label>
            <input type="password" class="form-control" id="currentPassword" />
          </div>
          <div class="text-right py-3 mb-4">
            <router-link to="#" class="link">Change Password?</router-link>
          </div>
          <button type="submit" class="btn">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//

.details-section {
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

  .form-container {
    padding-top: 40px;
    margin-bottom: 50px;

    .form-label {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 3px;
    }
    .form-control {
      border-radius: 2px;
    }

    .btn {
      width: 100%;
      background-color: #131313;
      color: #ffffff;
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

@media (min-width: 575px) {
  .details-section {
    .form-container {
      max-width: 300px;
    }
  }
}
</style>