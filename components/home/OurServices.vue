<template>
  <section class="service-section">
    <div class="container">
      <div class="co-12">
        <h1 class="title">Our Services</h1>
      </div>

      <div class="service-container">
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/floor-plan.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Floor Plan</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/instant-solution.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Instant Solution</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/online-service.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Online Service</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/sanitary.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Sanitary</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/lighting.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Lighting</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/paint-and-wallpaper.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Paint &amp; Wallpaper</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/free-consultancy.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Free Consultancy</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/3d-design.svg'" alt="icon" />
          </div>
          <h5 class="service-name">3D Design</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/kitchen.svg'" alt="icon" />
          </div>
          <h5 class="service-name">Kitchen</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
        <!--  -->
        <div class="service-card">
          <div class="service-icon">
            <img :src="'/images/service/sofa.png'" alt="icon" />
          </div>
          <h5 class="service-name">Furniture</h5>
          <div class="service-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
      </div>

      <div class="col-12 text-center pt-5">
        <router-link to="/our-service" class="btn btn-read-more">Read More</router-link>
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
.service-section {
  padding-top: 60px;
  padding-bottom: 60px;

  .title {
    color: #454545;
    font-size: 70px;
    font-weight: 200;
    line-height: 60px;
    text-align: center;
    position: relative;
    margin-bottom: 45px;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      width: 86px;
      height: 2px;
      margin: auto;
      background-color: $site-primary;
    }
  }

  .service-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .service-card {
      width: 240px;
      padding-top: 25px;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .service-name {
      color: #808080;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 1rem;
    }

    .service-details {
      color: #454545;
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      display: none;
    }

    .service-icon {
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      height: 95px;
      img {
        max-width: 102px;
      }
    }
  }

  .btn-read-more {
    color: #fff;
    border-radius: 0;
    padding: 10px 25px;
    font-size: 20px;
    background: #2c2b2b;

    &:hover {
      background: $site-primary;
    }
  }
}

@media (max-width: 575px) {
  .service-section {
    .title {
      font-size: 45px;
      line-height: normal;
    }
    .service-container {
      width: 100%;
      position: relative;
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .service-card {
        min-width: 165px;
        padding-top: 1rem;
      }

      .service-icon {
        img {
          max-width: 80px;
        }
      }

      .service-name {
        font-size: 14px;
      }
    }
  }
}
</style>
