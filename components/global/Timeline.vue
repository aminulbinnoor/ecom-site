<template>
  <!-- timeline -->
  <section class="timeline-section">
    <div class="container">
      <div class="timeline">
        <div class="timeline-step">
          <div class="step-icon">
            <img :src="'/images/dispatch.png'" alt="icon" />
          </div>
          <div class="step-text">
            <h5 class="title">Dispatch</h5>
            <p class="sub-title">Dispatch in 6-8 weeks</p>

            <router-link to="#" class="btn know-btn without-focus">Know more...</router-link>
          </div>
        </div>
        <!--  -->
        <div class="timeline-step">
          <div class="step-icon">
            <img :src="'/images/delivery.png'" alt="icon" />
          </div>
          <div class="step-text">
            <h5 class="title">Delivery</h5>
            <p class="sub-title">Home Delivery ৳100 BDT</p>

            <router-link to="#" class="btn know-btn without-focus">Know more...</router-link>
          </div>
        </div>
        <!--  -->
        <div class="timeline-step">
          <div class="step-icon">
            <img :src="'/images/return.png'" alt="icon" />
          </div>
          <div class="step-text">
            <h5 class="title">Return</h5>
            <p class="sub-title">Hassle Free Returns</p>

            <router-link to="#" class="btn know-btn without-focus">Know more...</router-link>
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

.timeline-section {
  padding-top: 50px;
  padding-bottom: 50px;
}
.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 60px;

  &::after {
    content: "";
    position: absolute;
    height: 3px;
    background-color: $site-primary;
    width: 85%;
    top: 36px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 0;
  }

  .timeline-step {
    position: relative;
    z-index: 99;

    .step-icon {
      text-align: center;
      margin-bottom: 14px;
    }

    .step-text {
      text-align: center;
      .title {
        color: #292929;
        font-size: 15px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 6px;
      }

      .sub-title {
        color: #292929;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
      }
    }

    .know-btn {
      color: #292929;
      font-size: 12px;
      font-weight: 300;
      text-decoration: underline;
      padding: 0;

      &:hover {
        color: $site-primary;
      }
    }
  }
}

@media (max-width: 575px) {
  .timeline {
    display: block;
    margin-left: 0;
    margin-right: 0;

    &::after {
      content: none;
    }

    .timeline-step {
      margin-bottom: 1.85rem;

      .step-text {
        .sub-title {
          margin-bottom: 0.25rem;
        }
      }
    }
  }
}
</style>
