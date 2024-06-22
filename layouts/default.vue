<template>
  <div>
    <Header></Header>
    <div class="me">
      <nuxt />
    </div>
    <Footer></Footer>

    <SigninSignup></SigninSignup>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SigninSignup from "@/components/global/signinsignup/SigninSignup";
export default {
  components: {
    Header,
    Footer,
    SigninSignup,
  },
  mounted: function () {
    if (process.client) {
      let theCartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      let count = 0;
      theCartItems.forEach((item, i) => {
        count = count + item.quantity;
      });
      this.$store.commit("setTotalProduct", count);
    }

    if (process.client) {
      let data = localStorage.getItem("user");
      this.$store.commit("initUserData", JSON.parse(data));
    }
  },
};
</script>

<style lang="scss" scoped>
.me {
  margin-top: 174px;
  padding-top: 15px;
  transition: all 0.45s ease;
}

@media (max-width: 991px) {
  .me {
    margin-top: 156px;
  }
}
</style>
