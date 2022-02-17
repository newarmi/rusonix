<template>
  <section :id="items.tag" class="details">
      <div class="details__wrapper-img">
        <div v-for="item in items.links" :key="item.key" class="details__img-desk">
          <nuxt-link v-if="item.layout==='link'" :to="'/' + item.attributes.page"
                     class="details__text text">{{item.attributes.title}}</nuxt-link>
          <nuxt-link v-if="item.layout==='knowledge'" :to="'/knowledge/post/' + item.attributes.page"
                     class="details__text text" >{{item.attributes.title}}</nuxt-link>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Pages',
  props: {
    items: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.details {
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
}

.details__text {
  color: #000;
  max-width: 750px;
  opacity: 0.8;
  margin-bottom: 48px;
  text-decoration: underline;
}

.details__wrapper-img {
  display: flex;
  flex-direction: column;
}

.details__img-desk {
  margin-right: 73px;
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
