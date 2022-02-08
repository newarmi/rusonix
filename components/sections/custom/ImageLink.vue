<template>
    <section :id="images.tag" class="knowledge">
        <div class="container">
          <div class="knowledge__wrapper">
            <div v-for="item in images.images" :key="item.key" class="knowledge__wrapper-left">
              <a :href="item.attributes.link" class="picture">
                <img
                  :src="$config.imgURL + item.attributes.image"
                  :srcset="$config.imgURL + item.attributes.image"
                  alt="knowledge 1"
                  class="knowledge__img"
                />
              </a>
              <a :href="item.attributes.link"  class="knowledge__left-title">{{item.attributes.title}}</a>
              <div class="knowledge__left-text">
                {{item.attributes.description}}
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'ImagesLink',
    props: {
        images: {
        type: Object,
        required: true
        }
    }, 

}
</script>

<style scoped>
.knowledge {
  margin-top: 72px;
  margin-bottom: 72px;
}
.knowledge__wrapper {
  display: flex;
  justify-content: center;
  gap: 62px;
}
.knowledge__img {
  border-radius: 8px;
  margin-bottom: 24px;
}
.knowledge__left-title,
.knowledge__right-title {
    color: black;
    display: block;
  font-family: "Graphik", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.knowledge__left-text,
.knowledge__right-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #9e9e9e;
}
@media (max-width: 768px) {
  .knowledge {
    margin-top: 28px;
    margin-bottom: 48px;
  }
  .knowledge__wrapper {
    gap: 34px;
  }
}
@media (max-width: 576px) {
  .knowledge__wrapper {
    flex-direction: column;
  }
}

</style>