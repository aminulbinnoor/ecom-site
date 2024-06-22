<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active" aria-current="page" v-for="breadcrumb in breadcrumbs">
        <router-link v-if="breadcrumb.link !== ''" :to="`${breadcrumb.link}`">{{breadcrumb.name}}</router-link>
        <span v-else>{{breadcrumb.name}}</span>
      </li>
      <!-- <li class="breadcrumb-item"><router-link to="#">Living</router-link></li>
      <li class="breadcrumb-item"><router-link to="#">Modern</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">
        Estelle L-shaped Kitchen
      </li>-->
    </ol>
  </nav>
</template>

<script>
export default {
  props: ["breadcrumbs"],
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");

.breadcrumb {
  background-color: transparent;
  padding: 0.25rem 0;

  .breadcrumb-item {
    color: #232323;
    a {
      color: $site-primary;
      font-weight: 300;
    }

    a,
    span {
      text-transform: capitalize;
    }
  }
}

@media (max-width: 575px) {
  .breadcrumb {
    .breadcrumb-item {
      font-size: 14px;
    }
  }
}
</style>
