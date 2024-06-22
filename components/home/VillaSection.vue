<template>
  <section class="villa-section">
    <div class="container">
      <div class="row">
        <!-- <div class="villa-element">
          <h1 class="title">Villa</h1>
          <h5 class="subtitle">Within your budget!</h5>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>

          <div class="btn-container">
            <button type="button" class="btn view-villa-btn">VIEW ALL VILLA</button>
          </div>
        </div>-->

        <div class="villa-card-container">
          <div class="img-container">
            <img :data-src="'/images/villa-section-img.png'" alt="Villa Image" v-lazy-load />
          </div>

          <div class="btn-container">
            <button type="button" class="btn view-villa-btn">view BUILDING DESIGN</button>
          </div>
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
.villa-section {
  padding-top: 45px;
  padding-bottom: 45px;

  .villa-card-container {
    width: 100%;
    position: relative;

    .img-container {
      width: 100%;

      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: inherit;
      }
    }

    .btn-container {
      position: absolute;
      left: 60px;
      bottom: 40px;
    }

    .view-villa-btn {
      width: 310px;
      height: 56px;
      box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.11);
      background-color: #ffffff;
      color: #2c2b2b;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.97px;
      border-radius: 50px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: normal;

      &:hover {
        background-color: darken($color: #fff, $amount: 4%);
      }
    }
  }
}

@media (min-width: 1200px) {
  .villa-section {
    .villa-card-container {
      .img-container {
        height: 35vw;
      }
    }
  }
}

@media (min-width: 1440px) {
  .villa-section {
    .villa-card-container {
      .img-container {
        height: 28vw;
      }
    }
  }
}

@media (max-width: 767px) {
  .villa-section {
    .villa-card-container {
      .btn-container {
        left: 0;
        right: 0;
        bottom: 25px;
        text-align: center;
      }
    }
  }
}
@media (max-width: 575px) {
  .villa-section {
    .villa-card-container {
      .view-villa-btn {
        width: auto;
        height: 45px;
        font-size: 16px;
      }
    }
  }
}
</style>
