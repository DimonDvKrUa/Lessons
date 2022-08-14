window.addEventListener('DOMContentLoaded', () => {

    class MenuItem {
        constructor(img, alt, subtitle, descr, total, parrentSelector) {
            this.img = img;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.total = total;
            this.parrent = document.querySelector(parrentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
    
        changeToUAH() {
            this.total = this.total * this.transfer;
        }

        createItem() {
            // console.log(fields);
            // fields.appendChild('div').className = 'menu__item';

            let div = document.createElement('div'); 
            div.innerHTML = `
                <div class="menu__item">
                    <img src="${this.img}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.total}</span> грн/день</div>
                    </div>
                </div>            
            `;

            this.parrent.append(div);

            // const img = document.createElement('img');
            // img.setAttribute('src',this.img);
            // img.setAttribute('alt', this.alt);
            // div.appendChild(img);

            // const h = document.createElement('h3');
            // h.className = 'menu__item-subtitle';
            // h.innerText = this.subtitle;
            // div.appendChild(h);

            // const descr = document.createElement('div');
            // descr.className = 'menu__item-descr';
            // descr.innerText = this.descr;
            // div.appendChild(descr);


            // console.log(div);
            // return div;
        }
    }

    // let fields = document.querySelector('.menu__field .container');
    // fields.innerHTML = '';

    new MenuItem(
        'img/tabs/vegy.jpg', 
        'vegy', 
        'Меню "Фитнес"', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
        9, 
        '.menu .container'
    ).createItem();

    new MenuItem(
        'img/tabs/elite.jpg', 
        'elite', 
        'Меню “Премиум”', 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
        8, 
        '.menu .container'
    ).createItem();

    new MenuItem(
        'img/tabs/post.jpg', 
        'post', 
        'Меню "Постное"', 
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
        10, 
        '.menu .container'
    ).createItem();
    
    // console.log(item.createItem());

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        // tabContent[i].style.display = 'block';
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            console.log(target);
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    hideTabContent();
    showTabContent();

    // Timer

    const deadline = '2022-09-01';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0 ) { 
            days = 0;
            hours = 0; 
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60) % 24));
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function addZero(num) {
        if (num > 0 && num < 10) {
            return `0${num}`;   
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime); 

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    const modalBtn = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');
    
    function openModal () {
        // modal.style.display = 'block';

        // modal.classList.add('show');
        // modal.classList.remove('hide');

        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden'; 
        clearInterval(modalTimerId);
    }

    modalBtn.forEach(elem => {
        elem.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
           closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 150000);

    function showModalByCroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByCroll);
        }
    }

    window.addEventListener('scroll', showModalByCroll);
});