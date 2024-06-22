<template>
  <section class="floor-design">
    <div class="container">
      <h1 class="heading">Floor Plan</h1>

      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="floor-description">
            <p class="text">
              The citrus and cobble stone grey of this kitchen makes the space
              look sophisticated and alluring.The dark tones are forgiving of
              stains and spills that are bound to happen in a kitchen. The high
              gloss finish ensures that cleaning up is a breeze. This kitchen
              comprises of base units and wall units.
            </p>
          </div>
        </div>
      </div>

      <div class="slide-container">
        <div class="slide-toggler">
          <button type="button" class="btn toggler-btn without-focus active">2D View</button>
          <button type="button" class="btn toggler-btn without-focus">3D View</button>
        </div>

        <!--  -->
        <div id="floorPlanCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="'/images/floor-plan/3d/floor-plan-0.png'" class="d-block" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="'/images/floor-plan/3d/floor-plan-1.png'" class="d-block" alt="..." />
            </div>
            <div class="carousel-item">
              <img :src="'/images/floor-plan/3d/floor-plan-2.jpg'" class="d-block" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#floorPlanCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="control-prev-icon" aria-hidden="true">
              <img :src="'/images/lg-arrow.png'" alt />
            </span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#floorPlanCarousel"
            role="button"
            data-slide="next"
          >
            <span class="control-next-icon" aria-hidden="true">
              <img :src="'/images/lg-arrow.png'" alt />
            </span>
            <span class="visually-hidden">Next</span>
          </a>
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
.floor-design {
  margin-bottom: 60px;
  .heading {
    color: #454545;
    font-size: 80px;
    font-weight: 200;
    line-height: 108.56px;
    text-align: center;
    margin-bottom: 0;
  }

  .floor-description {
    padding-top: 20px;
    padding-bottom: 20px;
    .text {
      color: #454545;
      font-size: 18px;
      font-weight: 300;
      line-height: 25px;
      text-align: center;
    }
  }

  .slide-container {
    padding-top: 35px;

    .slide-toggler {
      display: flex;
      justify-content: center;

      .toggler-btn {
        margin-left: 30px;
        margin-right: 30px;
        width: 146px;
        height: 46px;
        background-color: #c1c1c1;
        color: #ffffff;
        border-radius: 0;

        &:hover,
        &.active {
          background-color: $site-primary;
        }
      }
    }

    .carousel {
      padding-top: 40px;

      .carousel-control-prev,
      .carousel-control-next {
        width: 30px;
        top: 50%;
        margin: auto;
        bottom: auto;
        transform: translateY(-50%);
      }

      .control-prev-icon {
        img {
          transform: rotate(180deg);
        }
      }
    }

    .carousel-inner {
      padding: 35px;
      overflow: hidden;

      .carousel-item {
        width: 100%;
        height: 600px;
        padding: 15px;

        img {
          max-width: 100%;
          height: 100%;
          margin: auto;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .floor-design {
    .slide-container {
      .carousel-inner {
        .carousel-item {
          height: 500px;
        }
      }

      .carousel {
        .carousel-control-prev,
        .carousel-control-next {
          img {
            width: 40px;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .floor-design {
    .slide-container {
      padding-top: 20px;
      .carousel-inner {
        .carousel-item {
          height: 400px;
        }
      }
    }

    .heading {
      font-size: 50px;
      line-height: 1.15;
    }

    .floor-description {
      .text {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 550px) {
  .floor-design {
    .slide-container {
      .carousel-inner {
        .carousel-item {
          height: 300px;
          padding: 0;
        }
      }

      .carousel {
        .carousel-control-prev,
        .carousel-control-next {
          img {
            width: 26px;
          }
        }
      }
    }
  }
}
@media (max-width: 425px) {
  .floor-design {
    .heading {
      font-size: 40px;
    }
    .slide-container {
      .slide-toggler {
        .toggler-btn {
          margin-left: auto;
          margin-right: auto;
          width: 42%;
        }
      }

      .carousel-inner {
        padding: 30px;
        .carousel-item {
          height: 250px;

          img {
            object-fit: scale-down;
          }
        }
      }
    }
  }
}
</style>
