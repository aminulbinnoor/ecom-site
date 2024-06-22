<template>
  <section class="profile-section">
    <div class="container">
      <div class="row my-4">
        <div class="col-lg-3">
          <div class="list-group">
            <div
              class="list-group-item list-group-item-action"
              :class="[activeTabIndex == 1 ? 'active' : '']"
              @click="toggleTabIndex(1)"
            >
              <!-- <span class="icon">
                <img :src="'/images/profile-icon.png'" alt />
              </span>-->
              Profile
            </div>
            <div
              class="list-group-item list-group-item-action"
              :class="[activeTabIndex == 2 ? 'active' : '']"
              @click="toggleTabIndex(2)"
            >
              <!-- <span class="icon">
                <img :src="'/images/shopping-bag.png'" alt />
              </span>-->
              Orders
            </div>
            <div
              class="list-group-item list-group-item-action"
              :class="[activeTabIndex == 3 ? 'active' : '']"
              @click="toggleTabIndex(3)"
            >Consultation</div>
          </div>
        </div>
        <div class="col-lg pl-lg-5">
          <div class="shadow p-4 rounded">
            <profileComponent v-if="activeTabIndex == 1"></profileComponent>
            <orderComponent v-if="activeTabIndex == 2"></orderComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileComponent from "@/components/profile/profileComponent";
import orderComponent from "@/components/profile/orderComponent";
export default {
  components: {
    profileComponent,
    orderComponent,
  },

  data() {
    return {
      activeTabIndex: 1,
    };
  },

  methods: {
    toggleTabIndex(index) {
      this.activeTabIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped >
.profile-section {
  .list-group {
    padding: 1rem 0.75rem;
    border: 0;
    box-shadow: 0 0px 6px 0.5px rgba(0, 0, 0, 0.15);
    margin-bottom: 1rem;
    .list-group-item {
      display: flex;
      align-items: center;
      border-color: transparent;
      border-radius: 4px;
      padding: 10px 16px;
      cursor: pointer;
      &.active {
        background-color: #4e4e4e;
        border-color: #4e4e4e;
      }

      .icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 0.7rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}
</style>
