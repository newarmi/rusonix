// Временное АПИ...

const pages = [
  {
    page: 'index',
    hid: 'description',
    name: 'description',
    content: 'Главная',
    headerTitle: `Облачная платформа<br /> для <span class="start__title-decor">E-commerce проектов</span>`,
    headerDescription: 'У нас простая формула – партнерство ведет к успеху',
    headerBgSrc: `${require('@/assets/img/back-img-header.png')}`,
    headerSlider: true
  },
  {
    page: 'company',
    hid: 'description',
    name: 'description',
    content: 'О компании',
    headerTitle: `Rusonyx – пожалуй лучший<br />облачный партнер для <span class="start__title-decor">E-commerce</span>`,
    headerDescription: '',
    headerBgSrc: `${require('@/assets/img/back-img-header-company.png')}`
  },
  {
    page: 'services',
    hid: 'description',
    name: 'description',
    content: 'Услуги',
    headerTitle: 'Услуги',
    headerDescription: 'Гибкие конфигурации специально подготовленные для быстрой и надежной работы интернет проектов',
    headerBgSrc: `${require('@/assets/img/back-img-header-services.png')}`
  }
]

module.exports = { pages }
