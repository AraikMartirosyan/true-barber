"use strict";

let stiky = document.querySelector("header");

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0)
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
} else {
  document.body.classList.add("_pc");
}

//menu
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
//scroll to
const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        stiky.offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

document.onscroll = () => {
  if (window.pageYOffset) {
    stiky.classList.add("stiky");
  } else {
    stiky.classList.remove("stiky");
  }
};

$(document).ready(function () {
  $(".gallery__wrapper").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveWidth: true,
    adaptiveHeight: true,
  });
});

const langArr = {
  //menu
  about: {
    uz: "BIZ HAQIMIZDA",
    ru: "О нас",
  },
  cource: {
    uz: "Kurslar",
    ru: "КУРСЫ",
  },
  contacts: {
    uz: "ALOQALAR",
    ru: "КОНТАКТЫ",
  },
  gallery: {
    uz: "GALEREYA",
    ru: "ГАЛЕРЕЯ",
  },
  model: {
    uz: "MODELGA AYLANISH",
    ru: "ЗАПИСАТЬСЯ МОДЕЛЬЮ",
  },

  //title
  title: {
    uz: "Barberlik kurslari <br /> Toshkentda",
    ru: "Курсы барберинга <br /> в Ташкенте",
  },
  subtitle: {
    uz: "Qabul qilish uchun ajoyib <br /> imkoniyat kasb va ishga kirishni talab qildi", 
    ru: "Отличная возможность получить <br /> востребованную профессию и приступить к работе",
  },
  titlebtn: {
    uz: "Ro'yhatdan o'tish",
    ru: "ЗАПИСАТЬСЯ НА КУРСЫ",
  },

  //underinfo
  undadres: {
    uz: "Toshkent, M.G'ofurov ko'chasi, 16/1",
    ru: "Ташкент, улица М. Гафурова, 16/1",
  },
  undrej: {
    uz: "DU-SH 10:00-19:00",
    ru: "ПН-СБ 10:00-19:00",
  },
  undadres1: {
    uz: "Toshkent shahri, M.G'ofurov ko'chasi, 16/1",
    ru: "Ташкент, улица М. Гафурова, 16/1",
  },
  undrej1: {
    uz: "DU-SH 10:00-19:00",
    ru: "ПН-СБ 10:00-19:00",
  },
  undadres2: {
    uz: "Toshkent, M.G'ofurov ko'chasi, 16/1",
    ru: "Ташкент, улица М. Гафурова, 16/1",
  },
  undrej2: {
    uz: "DU-SH 10:00-19:00",
    ru: "ПН-СБ 10:00-19:00",
  },

  //BIZ HAQIMIZDA
  aboutitl: {
    uz: "BIZ HAQIMIZDA",
    ru: "О НАС",
  },
  aboutt1: {
    uz: "Biz mukofotga sazovor bo&#39;lgan sartarosh tayyorlash akademiyamiz. Biz o&#39;quvchilarimiz olgan ko&#39;nikmalariga ishonch bilan ketishlarini ta&#39;minlashga harakat qilamiz.",
    ru: "Мы - академия по обучению барберов, удостоенная наград. Мы стремимся к тому, чтобы наши студенты уходили с уверенностью в приобретенных навыках.",
  },
  aboutt2: {
    uz: "Bizning kurslarimiz sizga barberlik bo&#39;yicha asosiy bilimlarni olishga, har bir qadamni tahlil qilishga, texnikangizni takomillashtirishga va soch olishni tezlashtirishga yordam beradi.",
    ru: "Наши курсы барбера и бритья помогут вам получить базовые знания в области парикмахерского искусства, проанализировать каждый шаг усовершенствовать технику и повысить скорость стрижки.",
  },

  //features
  fea1tit: {
    uz: "Professionalizm",
    ru: "Профессионализм",
  },
  fea1tex: {
    uz: "Siz erkaklar sartaroshligi va soqolini bo'yash bo'yicha jahon va mualliflik texnikasini o'zlashtirasiz",
    ru: "Вы будете владеть мировыми и авторскими техниками мужских стрижек и оформления бороды",
  },

  fea2tit: {
    uz: "Biz ta'minlaymiz",
    ru: "Мы предоставляем",
  },
  fea2tex: {
    uz: "O'qitish uchun professional jihozlangan joy, materiallar va modellar",
    ru: "Профессионально оборудованное место, расходные материалы и моделей для обучения",
  },

  fea3tit: {
    uz: "Amaliyot",
    ru: "Практика",
  },
  fea3tex: {
    uz: "Treningning 80% modellar bo'yicha mashqdir. Zerikarli ma'ruzalar o'rniga, jonli modellar ustida ishlash.",
    ru: "80% обучения - практика на моделях. Вместо скучных лекций, работа на живых моделях.",
  },

  //kursy

  kurtit: {
    uz: "Kurslar",
    ru: "Курсы",
  },
  kurtex: {
    uz: "TRUE BARBER kurslari maxsus zamonaviy va an'anaviy sartaroshlik mahoratini o'rgatish uchun mo'ljallangan.  Bizning kurslarimiz soch olish tajribasi kam yoki umuman bo'lmaganlar uchun juda mos keladi va ular sartaroshlik kasbining ko'rinishini, shuningdek, turli texnika, uslub va tendentsiyalarni ko'rishlari mumkin.  Hammani kutib qolamiz! Iloji boricha tezroq biz bilan bog'laning!",
    ru: "Курсы от TRUE BARBER специально разработаны для обучения современным и традиционным навыкам барбера. Наши курсы идеально подходят для тех, кто практически не имеет опыта стрижки волос и хочет почувствовать, как может выглядеть их карьера барбера, а также взглянуть на различные техники, стили и тенденции. в мужских волосах. Мы приветствуем всех желающих! Свяжитесь c нами сегодня!",
  },

  pretit: {
    uz: "Kursning afzalliklari",
    ru: "Преимущества курса",
  },


  pretit1: {
    uz: "Biz sizga qanday soch qirqishni, soqol olishni o'rgatamiz;",
    ru: "Научим стричь, брить;",
  },
  pretit2: {
    uz: "Biz sizga mijozlar bilan muloqot qilishni o'rgatamiz;",
    ru: "Научим как общаться с клиентами;",
  },
  pretit3: {
    uz: "Modellarda mashq qilish;",
    ru: "Практика на моделях;",
  },
  pretit4: {
    uz: "Akademiyamizdan diplom oling;",
    ru: "Получите диплом от нашей академии;",
  },
  pretit5: {
    uz: "Professional bo'ling.",
    ru: "Станете профессионалом.",
  },

  pretitb: {
    uz: "Ro'yxatdan o'tish",
    ru: "записаться",
  },

  //contats

  contit: {
    uz: "ALOQALAR",
    ru: "КОНТАКТЫ",
  },
  galar: {
    uz: "galereya",
    ru: "ГАЛЕРЕЯ",
  },
  prav: {
    uz: "COPYRIGHT © 2021 TRUE BARBER. BARCHA HUQUQLAR HIMOYALANGAN",
    ru: "COPYRIGHT © 2021 TRUE BARBER. ВСЕ ПРАВА ЗАЩИЩЕНЫ",
  },


};

const select = document.querySelector(".language");
const allLang = ["uz", "ru"];
select.addEventListener("change", changeURLLanguage);
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  select.value = hash;
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      document.querySelector(".lng-" + key).innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
