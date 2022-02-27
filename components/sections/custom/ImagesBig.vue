<template>
  <section :id="images.tag" class="details container">
      <h2 class="advantage__title title">{{images.title}}</h2>
      <div class="bitrix__advantage-text text" v-html="images.description"></div>
      <div class="details__wrapper-img">
        <div v-for="item in images.images" :key="item.key" class="details__img-desk">
          <picture class="picture">
            <img
              :src="$config.imgURL +  item.attributes.image"
              :srcset="$config.imgURL + item.attributes.image"
              class="details__img"
              alt="details-desk"
            />
          </picture>
        </div>
      </div>
  </section>
</template>

<script>


export default {
  name: 'Images',
  props: {
    images: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  },
  computed: {

  },
  created() {

  }

}
</script>

<style scoped>
.bitrix__advantage-text {
  opacity: 0.6;
  margin-bottom: 96px;
}

.advantage__title {
  margin-bottom: 24px;
}

.details {
  background-color: white;
  padding-top: 35px;
  padding-bottom: 35px;
}

.details__title {
  margin-bottom: 24px;
}

.details__text {
  color: #000;
  max-width: 750px;
  opacity: 0.6;
  margin-bottom: 48px;
}

.details__wrapper-img {
  display: flex;
}

.details__img {
  /* border: 4px solid #272727;
  border-radius: 20px; */
}

.details__img-desk {
  margin-right: 73px;
}

.details__img-mob {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
}

@media (max-width: 768px) {
  .details {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .details__img-desk {
    margin-right: 50px;
  }
}

@media (max-width: 576px) {
  .details__wrapper-img {
    justify-content: center;
  }
  .details__wrapper-img {
    flex-direction: column;
    }
    .details {
    padding-top: 10px;
    padding-bottom: 10px;
}

}

</style>
