<template>
  <section class="technologies">
    <div class="container">
      <div class="technologies__title title">Используемые технологии</div>

      <div class="technologies__text-wrap">
        <p class="technologies__text text">
          Мы используем только промышленное оборудование DELL, ПО мировых
          лидеров рынка.
        </p>
        <p class="technologies__text text">
          Для обеспечения uptime 99,99% наши сервера располагаются в надежном
          дата центре уровня Tier IV.
        </p>
      </div>
    </div>
    <div class="technologies__container">
      <div class="technologies__cards">
        <div class="technologies__card-wrap">
          <div class="technologies__card-title">NVMe</div>
          <p class="technologies__card-text">
            Мы используем интерфейсный протокол NVMe, созданный специально для
            твердотельных накопителей (SSD). Благодаря этому файлы ваших
            проектов доступны для чтения и записи на максимальной скорости
          </p>
        </div>

        <div class="technologies__card-wrap">
          <div class="technologies__card-title">KVM</div>
          <p class="technologies__card-text">
            KVM позволяет виртуальным машинам использовать немодифицированные
            образы дисков QEMU, VMware и других, содержащие операционные
            системы. Каждая виртуальная машина имеет своё собственное
            виртуальное аппаратное обеспечение: сетевые карты, диск, видеокарту
            и другие устройства.
          </p>
        </div>
        <div class="technologies__card-wrap">
          <div class="technologies__card-title">Intel Xeon Gold</div>
          <p class="technologies__card-text">
            Процессоры Intel Xeon Gold демонстрируют значительное улучшение
            производительности, повышенную надежность и аппаратные функции
            безопасности. Эти процессоры оптимизированы для ресурсоемких ЦОД
            массовой категории, мультиоблачных вычислений и рабочих нагрузок
            сети и системы хранения.
          </p>
        </div>

        <div class="technologies__card-wrap">
          <div class="technologies__card-title">Plesk</div>
          <p class="technologies__card-text">
            Контрольная панель Plesk позволяет администратору сервера создавать
            новые сайты, учетные записи реселлеров, учетные записи электронной
            почты и записи DNS, используя веб-интерфейс. Администратор может
            добавлять шаблоны для клиентов и сайтов, которые предопределяют
            параметры выделения ресурсов для доменов и/или клиентов
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technologies {
  background-color: #fdf7f2;
  padding-top: 72px;
  padding-bottom: 24px;
}

.technologies__title {
  margin-bottom: 24px;
}

.technologies__text-wrap {
  margin-bottom: 72px;
}

.technologies__container {
  width: 100%;
  max-width: 1440px;
  padding: 0 18px 0 55px;
  margin: 0 auto;
}

.technologies__cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.technologies__card-wrap {
  padding: 24px 18px 24px 30px;
  margin-bottom: 48px;
}

.technologies__card-wrap:hover {
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
}

.technologies__card-title {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 24px;
}

.technologies__card-text {
  font-family: "Graphik", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 575px;
}

@media (max-width: 1200px) {
  .technologies__card-text {
    max-width: 450px;
  }
}

@media (max-width: 992px) {
  .technologies__card-text {
    max-width: 330px;
  }
}

@media (max-width: 768px) {
  .technologies {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .technologies__card-text {
    max-width: 312px;
  }
}

@media (max-width: 576px) {
  .technologies__text-wrap {
    margin-bottom: 48px;
  }
  .technologies__card-wrap {
    margin-bottom: 24px;
  }
}

</style>