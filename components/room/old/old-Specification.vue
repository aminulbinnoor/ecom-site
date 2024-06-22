<template>
  <section class="specification">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="spec-element">
            <div class="title">Dimension</div>

            <ul class="list-group list-group-flush" v-if="product">
              <li
                class="list-group-item"
                v-for="(sd,index) in product.specification_dimensions"
                :key="index"
              >
                {{sd.name}}
                <span>{{sd.value}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="spec-element">
            <div class="title">Product Details</div>

            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                v-for="(sd,index) in product.specification_details"
                :key="index"
              >
                {{sd.name}}
                <span>{{sd.value}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");

.specification {
  background-color: #f4f4f4;
  padding-top: 50px;
  padding-bottom: 30px;
  margin-bottom: 65px;

  .spec-element {
    margin-bottom: 14px;
    padding-left: 60px;
    padding-right: 60px;

    .title {
      color: #454545;
      font-size: 30px;
      font-weight: 500;
      text-align: center;
    }

    .list-group-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #5b5b5b;
      font-size: 16px;
      font-weight: 300;
      border-bottom-color: #fff;
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;

      span {
        color: #5b5b5b;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 991px) {
  .specification {
    .spec-element {
      margin-top: 1.5rem;
    }
  }
}

@media (max-width: 575px) {
  .specification {
    margin-bottom: 35px;
    padding-top: 30px;

    .spec-element {
      padding-left: 0;
      padding-right: 0;

      .title {
        font-size: 18px;
      }

      .list-group-item {
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
