<template>
  <div class="nav-sticky-top">
    <div class="mini-top-nav-bar">
      <p class="text">Guest prep? Get up to 20% off and free delivery.</p>
    </div>
    <nav class="navbar-container">
      <div class="main-menu px-xl-0 px-2">
        <div class="container-xl">
          <div class="top-navbar">
            <router-link to="/" class="logo">
              <img :src="'/images/p2p-logo-black.svg'" alt="P2P Family" />
            </router-link>

            <div class="nav-container">
              <div class="left-menu">
                <ul class="menu-list">
                  <li
                    class="menu-nav"
                    ref="index1"
                    @mouseover="isHovering(1)"
                    @mouseout="isHovering(1)"
                    :class="[$store.state.activeHoverIndex == 1 ? 'active' : '']"
                  >
                    <button type="button" class="btn without-focus nav-link">Design</button>

                    <div class="sub-menu">
                      <div class="container-xl">
                        <ul class="sub-menu-list">
                          <li class="menu-nav">
                            <router-link to="/building" class="nav-link">Building</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link to="/interior" class="nav-link">Interior</router-link>
                          </li>

                          <li class="menu-nav">
                            <router-link to="#" class="nav-link">Meet Designer</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link to="#" class="nav-link">How It's Work</router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    class="menu-nav"
                    ref="index2"
                    @mouseover="isHovering(2)"
                    @mouseout="isHovering(2)"
                    :class="[$store.state.activeHoverIndex == 2  ? 'active' : '']"
                  >
                    <!-- <router-link to="/shop" class="nav-link">Shop</router-link> -->

                    <a href="javascript::void()" type="button" class="btn without-focus nav-link">Shop</a>

                    <div class="sub-menu">
                      <div class="container-xl">
                        <ul class="sub-menu-list">
                          <li class="menu-nav" v-for="category in $store.state.categories"  :key="">
                            <router-link
                              :to="`/shop/category/${category.slug}`"
                              class="nav-link"
                              :class="$route.query.cat == 'bed' ? 'active' : ''"
                            >{{category.name}}</router-link>
                          </li>
                          <!-- <li class="menu-nav">
                            <router-link
                              to="/shop/category/chair"
                              class="nav-link"
                              :class="$route.query.cat == 'chair' ? 'active' : ''"
                            >Chair</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link
                              to="/shop/category/table"
                              class="nav-link"
                              :class="$route.query.cat == 'table' ? 'active' : ''"
                            >Table</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link
                              to="/shop/category/shofa"
                              class="nav-link"
                              :class="$route.query.cat == 'shofa' ? 'active' : ''"
                            >Shofa</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link
                              to="/shop/category/lighting"
                              class="nav-link"
                              :class="$route.query.cat == 'lighting' ? 'active' : ''"
                            >Lighting</router-link>
                          </li> -->
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="menu-nav" ref="index3">
                    <router-link to="#" class="nav-link">Inspiration</router-link>
                  </li>
                  <li
                    class="menu-nav"
                    ref="index4"
                    @mouseover="isHovering(4)"
                    @mouseout="isHovering(4)"
                    :class="[$store.state.activeHoverIndex == 4 ? 'active' : '']"
                  >
                    <button type="button" class="btn without-focus nav-link">More</button>

                    <div class="sub-menu">
                      <div class="container-xl">
                        <ul class="sub-menu-list">
                          <li class="menu-nav">
                            <router-link to="/be-refer-and-earn" class="nav-link">Reffer a Friend</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link to="/why-us" class="nav-link">Why Us</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link to="#" class="nav-link">Press</router-link>
                          </li>
                          <li class="menu-nav">
                            <router-link to="#" class="nav-link">Become a partner</router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="menu-nav search-input">
                    <form>
                      <div class="search-form">
                        <input
                          type="text"
                          class="form-control without-focus"
                          placeholder="Search Anything"
                        />
                        <button type="button" class="btn without-focus search-btn p-0">
                          <img :src="'/images/search-icon.svg'" class="img-fluid" alt="icon" />
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>

              <div class="right-menu">
                <ul class="menu-list">
                  <!-- <li class="menu-nav">
                    <router-link to="/wishlist/looks" class="nav-link">
                      <img :src="'/images/like-demo.svg'" alt="Icon" />
                      <span class="count">2</span>
                    </router-link>
                  </li> -->
                  <li class="menu-nav">
                    <router-link to="/checkout" class="nav-link">
                      <img :src="'/images/cart.svg'" alt="Icon" />
                      <span class="count" v-if="$store.state.totalProduct">
                        {{
                        $store.state.totalProduct
                        }}
                      </span>
                    </router-link>
                  </li>
                  <li class="menu-nav" v-if="$cookies.get('auth') && $store.state.user">
                    <a
                      class="nav-link auth pr-0"
                      href="#"
                      id="profileNavDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img :src="'/images/user-auth.svg'" alt="icon" />
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="profileNavDropdown"
                    >
                      <li @click.stop>
                        <button
                          class="dropdown-item"
                          type="button"
                          disabled
                        >{{$store.state.user.first_name}}</button>
                      </li>

                      <li>
                        <router-link class="dropdown-item" :to="'/account/settings'">My Account</router-link>
                      </li>
                      <li>
                        <button
                          class="dropdown-item without-focus"
                          type="button"
                          @click="logout()"
                        >Sign Out</button>
                      </li>
                    </ul>
                  </li>

                  <li class="menu-nav" v-if="!$cookies.get('auth')">
                    <router-link
                      to="#"
                      class="nav-link"
                      data-toggle="modal"
                      data-target="#SigninSignup"
                    >
                      <img :src="'/images/user.svg'" alt="icon" />
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- mobile menu toggler -->
              <button type="button" class="btn toggler-btn" @click="toggleFloatMenu()">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 124 124"
                    width="20px"
                    height="20px"
                  >
                    <g>
                      <path
                        d="M112,9H12C5.4,9,0,12.8,0,17.5S5.4,26,12,26h100c6.6,0,12-3.8,12-8.5S118.6,9,112,9z"
                      />
                      <path
                        d="M112,53.5H12c-6.6,0-12,3.8-12,8.5s5.4,8.5,12,8.5h100c6.6,0,12-3.8,12-8.5S118.6,53.5,112,53.5z"
                      />
                      <path
                        d="M112,98H12c-6.6,0-12,3.8-12,8.5s5.4,8.5,12,8.5h100c6.6,0,12-3.8,12-8.5S118.6,98,112,98z"
                      />
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- mobile floating menu -->
    <div class="floating-menu" :class="[floatMenuDisplay? 'show' : '']" @click.stop>
      <div class="menu-body">
        <div class="head">
          <ul class="mbl-menu-list">
            <li
              class="mbl-menu"
              ref="index1"
              :class="[isHoveringMmenuIndex == 1 ? 'active' : '']"
              @mouseover="isHoveringMmenu(1)"
            >Design</li>
            <li class="mbl-menu" :class="[isHoveringMmenuIndex == 2 ? 'active' : '']" @mouseover="isHoveringMmenu(2)">Shop</li>
            <li class="mbl-menu" :class="[isHoveringMmenuIndex == 3 ? 'active' : '']" @mouseover="isHoveringMmenu(3)">Inspiration</li>
          </ul>
          <button type="button" class="btn-close" aria-label="Close" @click="toggleFloatMenu()"></button>
        </div>

        <div class="menu-level-1--container" v-show="isHoveringMmenuIndex == 1">
          <ul class="list-unstyled">
            <li>
              <router-link to="/building" class="level-1-menu" @click.native="toggleFloatMenu()">
                <span class="lbl">Building</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 492.004 492.004"
                  >
                    <g>
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      />
                    </g>
                  </svg>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/interior" class="level-1-menu" @click.native="toggleFloatMenu()">
                <span class="lbl">Interior</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 492.004 492.004"
                  >
                    <g>
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      />
                    </g>
                  </svg>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="#" class="level-1-menu" @click.native="toggleFloatMenu()">
                <span class="lbl">Meet Designer</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 492.004 492.004"
                  >
                    <g>
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      />
                    </g>
                  </svg>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="#" class="level-1-menu" @click.native="toggleFloatMenu()">
                <span class="lbl">How It's Work</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 492.004 492.004"
                  >
                    <g>
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      />
                    </g>
                  </svg>
                </span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="menu-level-1--container" v-show="isHoveringMmenuIndex == 2">
          <ul class="list-unstyled">
            <li v-for="category in $store.state.categories"  :key="category.id">
              <router-link :to="`/shop/category/${category.slug}`" class="level-1-menu" @click.native="toggleFloatMenu()">
                <span class="lbl" >{{category.name}}</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 492.004 492.004"
                  >
                    <g>
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                      />
                    </g>
                  </svg>
                </span>
              </router-link>
            </li>
        </ul>
       </div>


      </div>
    </div>
    <div class="back-drop" :class="[floatMenuDisplay? 'show' : '']" @click="toggleFloatMenu()"></div>
  </div>
</template>

<script>
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {http2} from '@/api/axios'

gsap.registerPlugin(ScrollTrigger);
//
export default {
  data() {
    return {
      activeHoverIndex: 1,
      floatMenuDisplay: false,
      activeHoverIndexDynamic: null,
      isHoveringMmenuIndex: 1,
    };
  },

  mounted() {

      http2.get("/product/category-list").then((response) => {
        this.$store.commit('setCategories',response.data.data)
      });

    ScrollTrigger.create({
      start: 10,
      end: 99999,
      toggleClass: {
        className: "main-menu-bar--scrolled",
        targets: ".nav-sticky-top",
      },
    });
  },

  methods: {
    logout() {
      this.$store.commit("logout", "");
      this.$router.go("/");
    },

    isHovering(index) {
      this.activeHoverIndex = index;

      this.$store.commit("setActiveMenu", index);
    },

    isHoveringMmenu(index){
        this.isHoveringMmenuIndex = index
    },

    toggleFloatMenu() {
      this.floatMenuDisplay = !this.floatMenuDisplay;

      var el = document.querySelector("body");
      if (this.floatMenuDisplay) {
        el.classList.add("overflow-hidden");
      } else {
        el.classList.remove("overflow-hidden");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/scss/site-variables.scss");

.floating-menu {
  width: 425px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 99999;
  transform: translateX(-110%);
  transition: transform 0.3s ease-in-out;

  &.show {
    transform: translateX(0%);
  }

  .menu-body {
    width: 100%;
    height: 100%;
    padding: 12px 0;
    background: #fff;
    overflow: hidden;
    z-index: 99;

    .head {
      padding: 10px 15px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .mbl-menu-list {
        width: 100%;
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;

        .mbl-menu {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          &:not(:last-child) {
            margin-right: 20px;
          }

          &.active {
            position: relative;
            color: $site-primary;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 1px;
              background: #000;
              left: 0;
              right: 0;
              bottom: 0;
            }
          }
        }
      }

      .btn-close {
        box-sizing: border-box;
        width: 20px;
        height: 20px;
      }
    }

    .menu-level-1 {
      &--container {
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: scroll;
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 10px;

        .level-1-menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;

          .lbl {
            font-size: 15px;
          }

          .icon {
            svg {
              width: 10px;

              path {
                fill: rgba($color: #000000, $alpha: 0.5);
              }
            }
          }

          &.active {
            .lbl {
              color: $site-primary;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

.back-drop {
  background: #0000006e;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -99;
  visibility: hidden;
  opacity: 0;

  &.show {
    z-index: 9999;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

.mini-top-nav-bar {
  width: 100%;
  height: 40px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .text {
    font-size: 14px;
    text-align: center;
    margin-bottom: 0;
    color: #fff;
  }

  transition: height 0.25s ease;
}

.navbar-container {
  background: $white;

  .toggler-btn {
    display: none;
  }
}

.main-menu {
  z-index: 99;
}

.sub-menu {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 101px;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  background: #fff;
  transform: translateY(-150%);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s ease-in-out, visibility 0.35s ease-in-out,
    opacity 0.5s ease-in-out;
  z-index: -99;

  .sub-menu-list {
    .menu-nav {
      padding-top: 35px;
      padding-bottom: 8px;
      &:first-child {
        margin-left: 0;
      }
    }
    .nav-link {
      text-transform: capitalize;
      font-size: 14px;
    }
  }
}

.left-menu {
  .menu-nav {
    display: inline-flex;
    justify-content: center;
    padding-left: 0.75rem;

    &.active {
      > .nav-link {
        position: relative;
        font-weight: 500;
        color: $site-primary;

        &::after {
          content: "";
          display: block;
          position: absolute;
          height: 1px;
          width: 100%;
          background-color: #2b2b2b;
          left: 0;
          bottom: -1px;
          transition: all 0.35s ease-in-out;
        }
      }
      .sub-menu {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
        z-index: 0;
        transition: transform 0.35s ease-in-out, visibility 0.5s ease,
          opacity 0.5s ease, z-index 0.5s ease;
      }
    }

    &:not(:last-child) {
      padding-right: 0.75rem;
    }

    .nav-link {
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    }
  }
}

.nav-sticky-top {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;

  &.main-menu-bar {
    &--scrolled {
      box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.15);

      .mini-top-nav-bar {
        height: 0;
        opacity: 0;
        transition: height 0.1s ease, opacity 0.3s;
      }

      .navbar-container {
        .main-menu {
          .top-navbar {
            padding-top: 16px;
            padding-bottom: 16px;
            transition: all 0.3s ease-in-out;
          }
        }
      }

      .left-menu {
        .menu-nav {
          &.active {
            .sub-menu,
            &:hover {
              visibility: visible;
              opacity: 1;
              transition: transform 0.3s ease-in-out, visibility 0.5s ease,
                opacity 0.5s ease, z-index 0.5s ease;
            }
            .sub-menu {
              transform: translateY(-112px);
              z-index: -99;
            }

            &:hover {
              .sub-menu {
                transform: translateY(-49px);
                z-index: 0;
              }
            }
          }
        }
      }
    }
  }
}

.top-navbar {
  padding-bottom: 24px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 99;

  .logo {
    margin-right: 1rem;
    z-index: inherit;

    img {
      width: 86px;
    }
  }

  .nav-container {
    margin-left: 2rem;
    display: flex;
    align-items: center;
    width: 100%;
  }
}

.menu-list {
  .menu-nav {
    .nav-link {
      padding-top: 9px;
      padding-bottom: 9px;
      z-index: 99;
    }

    .dropdown-menu {
      border: 0;
      box-shadow: 0 0 5px 0px #00000026;
      .dropdown-divider {
        margin: 0.25rem 0;
      }
      .dropdown-item {
        &:active,
        &.active {
          background-color: #242424;
        }
      }
    }
  }
}

.menu-list,
.sub-menu-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  .menu-nav {
    margin-top: auto;
    margin-bottom: auto;
  }

  .nav-link {
    position: relative;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #454545;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    text-transform: uppercase;
    &:hover,
    &.active {
      color: $site-primary;
    }

    span {
      font-size: 15px;
    }

    .count {
      position: absolute;
      width: 17px;
      height: 17px;
      background-color: #be926f;
      color: #232323;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: normal;
      display: flex;
      top: 0;
      right: 0;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }
  }

  .search-form {
    position: relative;
    margin-left: 35px;
    background: #f7f7f7;

    input {
      border: 1px solid transparent;
      background: transparent;
      color: #4d4d4d;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      letter-spacing: normal;
      min-height: auto;
      padding-right: 8px;
      width: 280px;
      padding-left: 32px;
      padding-right: 25px;

      &::placeholder {
        font-weight: 300;
      }

      &:focus {
        border: 1px solid transparent;
      }
    }

    .search-btn {
      position: absolute;
      left: 6px;
      top: 3px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    &.hidden {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.45s ease-in-out, visibility 0.45s ease-in-out;
      input {
        width: 0;
        transition: width 0.4s ease-in-out;
      }
    }
  }

  .search-call {
    padding: 3.5px 7px 3px 7px;
    z-index: 9;
    cursor: pointer;
  }
}

.right-menu {
  margin-left: auto;

  .menu-nav {
    margin-left: 0.5rem;

    .nav-link {
      padding: 4px 0.5rem;
    }

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}

@media (max-width: 991px) {
  .left-menu {
    width: 100%;
    .menu-list {
      .search-form {
        margin-left: 0;

        input {
          width: 100%;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .search-btn {
          top: 6px;
        }
      }

      .menu-nav {
        width: 100%;
        margin-left: 0;
        form {
          width: 100%;
        }
        &:not(:last-child) {
          display: none;
        }

        &.search-input {
          padding-left: 0;
        }
      }
    }
  }

  .top-navbar {
    position: relative;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;

    .logo {
      margin-left: auto;
      margin-right: auto;
    }
    .nav-container {
      padding-top: 1rem;
      margin-left: 0;
      flex-direction: column-reverse;

      .toggler-btn {
        display: inline-block;
        position: absolute;
        top: 17px;
        left: 0;
        padding: 2px 5px 2px 0;
      }

      .right-menu {
        position: absolute;
        top: 15px;
        right: 0;

        .menu-list {
          height: 33px;
          .menu-nav {
            margin-left: 0.15rem;

            .nav-link {
              padding: 4px 0.35rem;

              &.auth {
                img {
                  width: 25px;
                }
              }
            }

            &:not(:last-child) {
              margin-right: 0.15rem;
            }
            &:first-child {
              margin-left: 0;

              .nav-link {
                padding-left: 0;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .floating-menu {
    width: 100%;
  }
}
</style>
