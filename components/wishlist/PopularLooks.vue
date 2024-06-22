<template>
  <section class="popular-looks">
    <div class="container">
      <div class="col-12">
        <h1 class="title">Popular Looks</h1>
      </div>

      <div class="popular-looks-list">
        <div class="row gx-sm-5 gy-5">
          <div class="col-lg-4 col-sm-6">
            <router-link to="#" class="popular-looks-card">
              <img :src="'/images/apartment/apartment-1.png'" alt="image" />

              <div class="info-container">
                <p class="lbl">Lorem Ipsum</p>
                <p class="price-info">
                  <span>Estimate Price</span> 120,000 BDT
                </p>
              </div>
            </router-link>
          </div>
          <!--  -->
          <div class="col-lg-4 col-sm-6">
            <router-link to="#" class="popular-looks-card">
              <img :src="'/images/apartment/apartment-2.png'" alt="image" />

              <div class="info-container">
                <p class="lbl">Lorem Ipsum</p>
                <p class="price-info">
                  <span>Estimate Price</span> 120,000 BDT
                </p>
              </div>
            </router-link>
          </div>
          <!--  -->
          <div class="col-lg-4 col-sm-6">
            <router-link to="#" class="popular-looks-card">
              <img :src="'/images/apartment/apartment-3.png'" alt="image" />

              <div class="info-container">
                <p class="lbl">Lorem Ipsum</p>
                <p class="price-info">
                  <span>Estimate Price</span> 120,000 BDT
                </p>
              </div>
            </router-link>
          </div>
          <!--  -->
          <div class="col-lg-4 col-sm-6">
            <router-link to="#" class="popular-looks-card">
              <img :src="'/images/apartment/5ee0ed53e3f08.png'" alt="image" />

              <div class="info-container">
                <p class="lbl">Lorem Ipsum</p>
                <p class="price-info">
                  <span>Estimate Price</span> 120,000 BDT
                </p>
              </div>
            </router-link>
          </div>
          <!--  -->
          <div class="col-lg-4 col-sm-6">
            <router-link to="#" class="popular-looks-card">
              <img :src="'/images/apartment/7fba1c100717611.png'" alt="image" />

              <div class="info-container">
                <p class="lbl">Lorem Ipsum</p>
                <p class="price-info">
                  <span>Estimate Price</span> 120,000 BDT
                </p>
              </div>
            </router-link>
          </div>
          <!--  -->
          <div class="col-lg-4 col-sm-6">
            <router-link to="#" class="popular-looks-card">
              <img :src="'/images/apartment/5f2847c3268f1.png'" alt="image" />

              <div class="info-container">
                <p class="lbl">Lorem Ipsum</p>
                <p class="price-info">
                  <span>Estimate Price</span> 120,000 BDT
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="btn-container">
        <router-link to="#" class="btn btn-view-more">VIEW MORE</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.popular-looks {
  padding-top: 65px;
  padding-bottom: 65px;

  .title {
    color: #232323;
    font-size: 70px;
    font-weight: 200;
    line-height: 108.56px;
    text-align: center;
  }

  .popular-looks-list {
    width: 100%;
    padding-top: 40px;

    .popular-looks-card {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: inherit;
      }

      .info-container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: inherit;
        padding-top: 10px;
        padding-bottom: 10px;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.02353),
          rgba(0, 0, 0, 0.76)
        );

        .lbl {
          color: #ffffff;
          font-size: 18px;
          text-align: center;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .price-info {
          color: #ffffff;
          font-size: 18px;
          text-align: center;
          text-transform: uppercase;
          font-weight: 500;

          span {
            font-size: 16px;
            text-transform: none;
            font-weight: 300;
          }
        }
      }
    }
  }

  .btn-container {
    width: 100%;
    padding-top: 60px;
    text-align: center;
    .btn-view-more {
      width: 235px;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
      background: rgba($color: #000000, $alpha: 0.85);
      color: #ffffff;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 0;

      &:hover {
        background: #000;
      }
    }
  }
}

@media (max-width: 575px) {
  .popular-looks {
    .title {
      font-size: 45px;
      line-height: normal;
    }
  }
}
</style>
