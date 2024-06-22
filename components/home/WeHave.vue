<template>
  <section class="wehave-section" :class="{ bg_whitesmoke: cssstyle.background }">
    <div class="container-md">
      <div class="row justify-content-center">
        <div class="col-lg col-md-4 mb-lg-0 mb-md-4">
          <div class="icon-card">
            <img :src="'/images/day-calendar-icon.png'" alt="icon" />
            <div class="lbl">
              45 days or
              <br />we pay you rent
            </div>
          </div>
        </div>

        <div class="col-lg col-md-4 mb-lg-0 mb-md-4">
          <div class="icon-card">
            <img :src="'/images/happy-customer-icon.png'" alt="icon" />
            <div class="lbl">
              1000+
              <br />Happy Customer
            </div>
          </div>
        </div>

        <div class="col-lg col-md-4 mb-lg-0 mb-md-4">
          <div class="icon-card">
            <img :src="'/images/designer-icon.png'" alt="icon" />
            <div class="lbl">
              50+
              <br />Designer
            </div>
          </div>
        </div>

        <div class="col-lg col-md-4 mb-lg-0 mb-md-4">
          <div class="icon-card">
            <img :src="'/images/building-material-icon.png'" alt="icon" />
            <div class="lbl">
              Inhouse
              <br />Material
            </div>
          </div>
        </div>

        <div class="col-lg col-md-4 mb-lg-0 mb-md-4">
          <div class="icon-card">
            <img :src="'/images/warranty-icon.png'" alt="icon" />
            <div class="lbl">
              5 years
              <br />Material warranty
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cssstyle: {
      type: Object,
      default: function () {
        return { background: false };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");
//
.wehave-section {
  padding-top: 60px;
  padding-bottom: 60px;

  &.bg_whitesmoke {
    background-color: #f1f1f1;
  }

  .icon-card {
    text-align: center;
    user-select: none;
    img {
      // max-width: 100%;
      width: 75px;
    }
    .lbl {
      user-select: none;
      margin-top: 25px;
      color: #454545;
      font-size: 22px;
      font-weight: 300;
      line-height: 24px;
      text-align: center;
    }
  }
}

@media (max-width: 767px) {
  .wehave-section {
    .row {
      width: 100%;
      position: relative;
      justify-content: flex-start !important;
      flex-wrap: nowrap !important;
      overflow-x: scroll;
      overflow-y: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      > div {
        margin-bottom: 0 !important;
        width: 170px;
        height: inherit;
      }
    }

    .icon-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      .lbl {
        font-size: 18px;
        line-height: 1.15;
      }

      img {
        width: 60px;
        flex: 1 1 auto;
      }
    }
  }
}

@media (max-width: 475px) {
  .wehave-section {
    padding-bottom: 0px;
    > div {
      padding-left: 15px !important;
      padding-right: 15px !important;
      overflow: hidden;
    }
    .row {
      margin-left: 0;
      margin-right: 0;

      > div {
        width: 80px;
      }
    }
    .icon-card {
      img {
        width: 50px;
        object-fit: contain;
      }

      .lbl {
        display: none;
      }
    }
  }
}
</style>
