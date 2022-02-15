<template>
  <section :id="items.tag" class="channel">
    <div class="container">
      <h2 v-if="items.title" class="channel__title title">{{items.title}}</h2>
      <div class="channel__wrapper">
          <div class="channel__video">
              <iframe class="channel__video-frame" :src="items.link"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
          </div>
          <div class="channel__text" v-html="items.text"></div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    items: {
      type: Object,
      required: true
    }
  },
}

</script>

<style scoped>
.channel {
  padding-bottom: 75px;
}

@media (max-width: 768px) {
  .channel {
    padding-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .channel {
    padding-bottom: 48px;
  }
}

.channel__title {
  margin-top: 48px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .channel__title {
    margin-bottom: 24px;
  }
}

.channel__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

@media (max-width: 1100px) {
  .channel__wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}

@media (max-width: 768px) {
  .channel__wrapper {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
}

.channel__video {
  width: 100%;
  max-width: 504px;
  height: 287px;
}

.channel__video-frame {
  width: 100%;
  max-width: 504px;
  height: 287px;
}

.channel__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  opacity: 0.6;
  margin-left: 36px;
  width: 100%;
  max-width: 510px;
}

@media (max-width: 1100px) {
  .channel__text {
    margin-left: 0;
    margin-top: 36px;
  }
}
</style>
