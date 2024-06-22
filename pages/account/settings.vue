<template>
  <section class="setting-section">
    <div class="container">
      <h1 class="title">MY ACCOUNT</h1>
      <h1 class="name">Hello Mostofa!</h1>

      <div class="mb-5">
        <ul class="setting-list">
          <li>
            <router-link to="order-list" class="setting-item">
              <span class="icon">
                <img :src="'/images/delivery-icon.png'" alt="icon" />
              </span>
              <div class="setting-text-container">
                <h3 class="heading-text">MY ORDER</h3>
                <p class="text">Get updates on your current orders and look back over previous ones.</p>
              </div>
            </router-link>
          </li>

          <li>
            <router-link to="details" class="setting-item">
              <span class="icon">
                <img :src="'/images/detail.png'" alt="icon" />
              </span>
              <div class="setting-text-container">
                <h3 class="heading-text">MY DETAILS</h3>
                <p class="text">Edit your name, email address and password.</p>
              </div>
            </router-link>
          </li>

          <li>
            <router-link to="address" class="setting-item">
              <span class="icon">
                <img :src="'/images/home.png'" alt="icon" />
              </span>
              <div class="setting-text-container">
                <h3 class="heading-text">MY ADDRESS</h3>
                <p class="text">Edit your address or add a new one.</p>
              </div>
            </router-link>
          </li>

          <!-- <li>
            <router-link to="#" class="setting-item">
              <span class="icon">
                <img :src="'/images/payment.png'" alt="icon" />
              </span>
              <div class="setting-text-container">
                <h3 class="heading-text">MY PAYMENT METHODS</h3>
                <p class="text">View your list of saved cards with the option to delete.</p>
              </div>
            </router-link>
          </li>-->

          <!-- <li>
            <router-link to="#" class="setting-item">
              <span class="icon">
                <img :src="'/images/mail.png'" alt="icon" />
              </span>
              <div class="setting-text-container">
                <h3 class="heading-text">MY COMMUNICATION PREFERENCES</h3>
                <p
                  class="text"
                >Choose how and which news and offers you receive from P2P Family. You can unsubscribe at any time.</p>
              </div>
            </router-link>
          </li>-->
        </ul>

        <div class="btn-container">
          <button type="button" class="btn">LOG OUT</button>
        </div>
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

.setting-section {
  padding: 25px 0;

  .title {
    color: #000000;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 35px;
  }

  .name {
    color: #000000;
    font-size: 28px;
    font-weight: 300;
  }

  .setting-list {
    list-style-type: none;
    padding: 0;
    margin-top: 30px;

    li {
      margin-bottom: 40px;
    }

    .setting-item {
      display: inline-flex;
      padding: 6px 4px;

      &:hover {
        border-radius: 4px;
        background: #f5f5f5;
      }

      .icon {
        display: inline-block;
        width: 35px;
        text-align: right;
        img {
          max-width: 100%;
        }
      }

      .setting-text-container {
        width: 100%;
        padding-left: 15px;
        .heading-text {
          color: #000000;
          font-size: 20px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .text {
          color: #000000;
          font-size: 15px;
          font-weight: 400;
          margin-bottom: 0;
        }
      }
    }
  }

  .btn-container {
    .btn {
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
}
</style>