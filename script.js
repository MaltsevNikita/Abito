const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')


const cardArray = [
  {
    id:0,
    title:'Первый товар',
    price:'170 ₽',
    addres:"Казань, р-н Вахитовский",
    date:"10 июля 11:39",
    img:'./img/card-img.jpeg',
  },
  {
    id:1,
    title:'Второй товар',
    price:'171 ₽',
    addres:"Казань, р-н Вахитовский",
    date:"10 июля 11:39",
    img:'./img/card-img.jpeg',
  },
  {
    id:2,
    title:'Третий товар',
    price:'172 ₽',
    addres:"Казань, р-н Вахитовский",
    date:"10 июля 11:39",
    img:'./img/card-img.jpeg',
  },
  {
    id:3,
    title:'Четвёртый товар',
    price:'173',
    addres:"Казань, р-н Вахитовский",
    date:"10 июля 11:39",
    img:'./img/card-img.jpeg',
  },
  {
    id:4,
    title:'Пятый товар',
    price:'174 ₽',
    addres:"Казань, р-н Вахитовский",
    date:"10 июля 11:39",
    img:'./img/card-img.jpeg',
  },
  {
    id:5,
    title:'Шестой товар',
    price:'175 ₽',
    addres:"Казань, р-н Вахитовский",
    date:"10 июля 11:39",
    img:'./img/card-img.jpeg',
  },
  {
    id:6,
    title:'Седьмой товар',
    price:'176 ₽',
    addres:"Казань, р-н Вахитовский",
    date:"10 июля 11:39",
    img:'./img/card-img.jpeg',
  },
]


const render = (cardList) => {
  cardWrapper.innerHTML = '';

  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML("beforeend", `
      <a href="/product.html" class="content-main__list-item">

        <div class="content-main__list-item--img">
          <img src="${item.img}" alt="CardImg">
        </div>

        <h5 class="content-main__list-item--title">
        ${item.title}
        </h5>

        <strong class="content-main__list-item--price">${item.price}</strong>

        <div class="content-main__list-item--desc-box">
          <span class="content-main__list-item--desc">${item.addres}</span>

        <span class="content-main__list-item--desc">${item.date}</span>
        </div>
        
      </a>
    `)
  });
}
const filteredArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  })
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap ='30px';


render(cardArray);

searchBtn.addEventListener('click', () => {
  render(filteredArray(cardArray, searchInput.value))
})