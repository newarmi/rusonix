<template>
  <section :id="tag" class="confidents">
    <div class="container">
      <h2 class="confidents__title title">{{ title }}</h2>
      <div class="confidents__partners">
        <div class="wrapper wrapper-left">
          <div class="boxes">
            <picture v-for="(logo, i) in firstLine" :key="'tl:' + i + logo.image" class="box">
              <img
                :src="logo.imageLink"
                :srcset="logo.imageLink"
                class="confidents__img-left"
                alt="partner"
              />
            </picture>
          </div>
        </div>
      </div>
      <div class="confidents__partners">
        <div class="wrapper">
          <div class="boxes">
            <picture v-for="(logo, i) in secondLine" :key="'sl:' + i + logo.image" class="box">
              <img
                :src="logo.imageLink"
                :srcset="logo.imageLink"
                class="confidents__img"
                alt="partner"
              />
            </picture>
          </div>
        </div>
      </div>
      <div class="confidents__partners">
        <div class="wrapper wrapper-left">
          <div class="boxes">
            <picture v-for="(logo, i) in thirdLine" :key="'tl:' + i + logo.image" class="box">
              <img
                :src="logo.imageLink"
                :srcset="logo.imageLink"
                class="confidents__img-left"
                alt="partner"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { mapGetters } from 'vuex';

export default {
  name: 'Trust',
  props: {
    tag: {
      type: String,
      default: 'trust'
    }
  },
  computed: {
    ...mapGetters(['trust']),
    title() {
      return this.trust.title
    },
    firstLine() {
      const array = []
      const firstLine = this.trust.sections.find(Boolean).alt_title
      const arrayFirstLine = JSON.parse(firstLine)
      arrayFirstLine.forEach(element => {
        element.imageLink = this.$config.siteURL + '' + element.url
        array.push(element)
      });
      arrayFirstLine.forEach(element => {
        array.push(element)
      });
      return array
    },
    secondLine() {
      const array = []
      const secondLine = this.trust.sections.find(Boolean).image
      const arraySecondLine = JSON.parse(secondLine)
      arraySecondLine.forEach(element => {
        element.imageLink = this.$config.siteURL + '' + element.url
        array.push(element)
      });
      arraySecondLine.forEach(element => {
        array.push(element)
      });

      return array
    },
    thirdLine() {
      const array = []
      const thirdLine = this.trust.sections.find(Boolean).content
      const arrayThirdLine = JSON.parse(thirdLine)
      arrayThirdLine.forEach(element => {
        element.imageLink = this.$config.siteURL + '' + element.url
        array.push(element)
      });
      arrayThirdLine.forEach(element => {
        array.push(element)
      });
      return array
    }
  },
  mounted() {
    gsap.set(".box", {
      x: (i) => i * 250
    });
    gsap.to(".box", {
      duration: 40,
      ease: "none",
      x: "+=3000", // move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 3000) // force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });
   }
 }
</script>

<style scoped>
.wrapper-left {
  transform: scale(-1,1);
}

.confidents__img-left {
  transform: scale(-1,1);
}

.container {
  width: auto;
}

.wrapper{
  width: 3000px;
  height: 70px;
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-left: -780px;
}

.box{
  width: 250px;
  height: 70px;
  position:absolute;
  text-align:center;
}

.boxes {
  position:relative;
}

.confidents {
  background-color: #3f342c;
  padding-top: 72px;
  padding-bottom: 32px;
  overflow: hidden;
}

.confidents__title {
  color: #ffffff;
  margin-bottom: 96px;
}

.confidents__partners {
  margin: 0 auto 40px;
}

@media (max-width: 1200px) {
  .confidents {
    padding-bottom: 8px;
    overflow: hidden;
  }
}
@media (max-width: 992px) {
  .confidents {
    padding-top: 48px;
  }
}

@media (max-width: 768px) {
  .confidents__title {
    margin-bottom: 90px;
  }
}

@media (max-width: 576px) {
  .confidents__title {
    margin-bottom: 48px;
  }
}

</style>
