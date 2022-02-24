<template>
  <section :id="tag" class="contact">
    <div class="container">
      <h2 class="contact__title title">{{ title }}</h2>
    </div>
    <div class="container contact__container-map">
      <div class="contact__map">
        <picture class="picture">
          <source
            media="(max-width: 768px)"
            :srcset="$config.imgURL + cardPhone"
          />
          <img
            :src="$config.imgURL + card"
            :srcset="$config.imgURL + card"
            alt="contact-map"
            class="contact__map-img"
          />
        </picture>
        <div class="contact__map-address">
          <div v-for="item in mainContacts" :key="item.title" class="contact__map-address-wrap">
            <div class="contact__address-title">
              {{item.title}}
            </div>
            <p class="contact__address-text">
              {{item.content}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="contact__address">
        <div class="contact__address-map">
          <div v-for="item in mainContacts" :key="item.title" class="contact__map-address-wrap">
            <div class="contact__address-title">
              {{ item.title }}
            </div>
            <p class="contact__address-text">
              {{ item.content }}
            </p>
          </div>
        </div>
        <div v-for="item in otherContacts" :key="item.title" class="contact__address-about">
          <div v-for="el in item" :key="el.title" class="contact__address-about-wrap">
            <div class="contact__address-title">{{el.title}}</div>
            <p class="contact__address-text">{{el.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Contacts',
  props: {
    tag: {
      type: String,
      default: 'contacts'
    },
    title: {
      type: String,
      default: ''
    },
    card: {
      type: String,
      default: ''
    },
    cardPhone: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['contacts']),
    allContacts() {
      return this.contacts.sections
    },
    mainContacts() {
     return this.allContacts.slice(0, 2)
    },
    otherContacts() {
      const contactArray = [];
      contactArray.push(this.allContacts.slice(2,4))
      contactArray.push(this.allContacts.slice(4,6))
      contactArray.push(this.allContacts.slice(6,8))
      return contactArray
    }
  }
}
</script>

<style scoped>

.contact {
  padding-top: 72px;
}
.contact__title {
  margin-bottom: 72px;
}
.contact__map {
  position: relative;
  margin-bottom: 48px;
}
.contact__map-address {
  background-color: #fff;

  padding: 48px;

  position: absolute;
  top: 19%;
  right: 2.6%;
}
.contact__map-address-wrap {
  margin-bottom: 24px;
}
.contact__address-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 16px;
}
.contact__address-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;

  color: #000;
  opacity: 0.6;

  max-width: 300px;
}
.contact__address {
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
}
.contact__address-about {
  width: 402px;
}
.contact__address-about-wrap {
  margin-bottom: 56px;
}
.contact__address-about-wrap:last-child {
  margin-bottom: 0px;
}
.contact__address-map {
  display: none;
}
@media (max-width: 1200px) {
  .contact__address {
    flex-wrap: wrap;
  }
  .contact__map-address {
    display: none;
  }
  .contact__address-map {
    display: block;
  }
}
@media (max-width: 992px) {
  .contact__address-about {
    width: 265px;
  }
}
@media (max-width: 768px) {
  .contact {
    padding-top: 48px;
  }
  .contact__container-map {
    padding: 0;
  }
  .contact__map {
    margin-bottom: 24px;
  }
  .contact__title {
    margin-bottom: 48px;
  }
  .contact__map-address {
    display: none;
  }
  .contact__address-about-wrap {
    margin-bottom: 24px;
  }
  .contact__address {
    margin-bottom: 48px;
  }
}

</style>
