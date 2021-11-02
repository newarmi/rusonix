<template>
    <div class="secret__container">
          <div class="secret__wrapper">
            <div class="secret__date">
              <div class="secret__date-text">12 февраля 2021</div>
              <div class="secret__security">Безопасность</div>
            </div>

            <div class="secret__title">
              Секреты невидимой технической поддержки
            </div>
            <div class="secret__title-text">
              В последнее время участились атаки на цепочку поставок через
              публичные репозитории. Рассказываем, как с этим бороться.
            </div>
            <p class="secret__text secret__text-top">
              В прошлом году на новостных IT-сайтах появилась информация об
              «отравлении» репозитория RubyGems, официального канала
              распространения библиотек для языка Ruby. Некий злоумышленник
              загружал на этот ресурс поддельные сборки кода, дополненные
              вредоносным скриптом. То есть все программисты, которые
              использовали этот код в своих разработках, невольно заражали
              компьютеры своих пользователей зловредом, подменяющим адреса
              криптовалютных кошельков.
            </p>
            <p class="secret__text secret__text-bottom">
              Разумеется, это не первая атака на цепочку поставок, проведенная
              через открытые репозитории. Но сейчас такой сценарий, похоже,
              набирает популярность. И это неудивительно — ведь в результате
              одной успешной атаки можно скомпрометировать десятки или сотни
              тысяч пользователей. Все зависит только от популярности ПО,
              разработчики которого воспользуются кодом из «отравленного»
              репозитория и станут звеньями в цепи.
            </p>

            <picture class="magazine__picture">
              <source
                media="(max-width: 768px)"
                set="@/assets/img/magazine-post-mobile.png"
                srcset="@/assets/img/magazine-post-mobile@2x.png 2x"
              />
              <source
                media="(max-width: 576px)"
                set="@/assets/img/magazine-post-mobile.png"
                srcset="@/assets/img/magazine-post-mobile@2x.png 2x"
              />
              <img
                src="@/assets/img/magazine-post.png"
                srcset="@/assets/img/magazine-post@2x.png 2x"
                class="magazine__img"
                alt="post img"
              />
            </picture>
            <div class="secret__title secret__title-second">
              Как вредоносные пакеты оказываются в репозиториях?
            </div>
            <div class="secret__text secret__text-top">
              В случае с RubyGems злоумышленник создал в репозитории множество
              проектов с именами, похожими на популярные легитимные сборки кода.
              Эта техника называется typosquatting: она подразумевает, что
              разработчик может опечататься при вводе названия пакета и
              загрузить вредоносный, или, получив несколько пакетов в ответ на
              поисковой запрос, не понять, какой из них подлинный. Эту тактику
              злоумышленники применяли и при атаках через Python Package Index,
              и при загрузке фальшивых образов на Docker Hub. Да и вообще это
              самый распространенный метод «отравления».
            </div>
            <div class="secret__text secret__text-middle">
              В инциденте с криптокошельками Copay, о котором мы писали
              некоторое время назад, злоумышленники использовали библиотеку,
              репозиторий которой размещался на GitHub. Ее создатель потерял
              интерес к своему детищу и был только рад, когда какой-то новичок
              попросил права администратора, чтобы продолжить работу. В
              результате популярная библиотека, которую использовали многие
              разработчики в своих продуктах, была скомпрометирована.
            </div>
            <div class="secret__text secret__text-bottom">
              Иногда злоумышленникам удается воспользоваться учетной записью
              легитимного разработчика без его ведома и заменить пакеты
              поддельными. Так случилось в инциденте с ESLint, библиотеки
              которого размещались в онлайновой базе данных npm (Node Package
              Manager).
            </div>
          </div>
        </div>
</template>

<style scoped>

.secret__container {
  padding: 0 171px;
  margin: 0 auto;
  position: relative;
  top: -100px;
}
.secret__wrapper {
  padding: 72px 87px;
  background-color: #fff;
  border-radius: 20px;
}
.secret__date {
  display: flex;
  margin-bottom: 48px;
}
.secret__date-text {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #bababa;
  position: relative;
  margin-right: 54px;
}
.secret__date-text::after {
  display: block;
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #bababa;
  position: absolute;
  top: 40%;
  right: -22%;
}
.secret__security {
  font-family: "Graphik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #202a89;
  text-transform: uppercase;
}
.secret__title {
  font-family: "Graphik", sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}
.secret__title-text {
  font-family: "Graphik", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 72px;
}
.secret__text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 0.6;
}
.secret__text-top,
.secret__text-middle {
  margin-bottom: 50px;
}
.magazine__picture {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.secret__title-second {
  margin-bottom: 48px;
}

@media (max-width: 1250px) {
  .secret__container {
    padding: 0;
  }
}
</style>