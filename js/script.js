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
    uz: "MODELNI KITOB QILING",
    ru: "ЗАПИСАТЬСЯ МОДЕЛЬЮ",
  },

  //title
  title: {
    uz: "Sartaroshlik kurslari <br /> Toshkentda",
    ru: "Курсы барберинга <br /> в Ташкенте",
  },
  subtitle: {
    uz: "Talab qilingan kasbni egallash <br /> va boshlash uchun ajoyib imkoniyat",
    ru: "Отличная возможность получить <br /> востребованную профессию и приступить к работе",
  },
  titlebtn: {
    uz: "Ro'yxatdan o'ting",
    ru: "ЗАПИСАТЬСЯ НА КУРСЫ",
  },

  //underinfo
  undadres: {
    uz: "Toshkent shahri, M.G'ofurov ko'chasi, 16/1",
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
    uz: "Toshkent shahri, M.G'ofurov ko'chasi, 16/1",
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
    uz: "Biz mukofotga sazovor bo&#39;lgan sartarosh tayyorlash akademiyasimiz. Biz o&#39;quvchilarimiz ishonch bilan ketishini ta&#39;minlashga intiling olingan ko&#39;nikmalar.",
    ru: "Мы - академия по обучению барберов, удостоенная наград. Мы стремимся к тому, чтобы наши студенты уходили с уверенностью в приобретенных навыках.",
  },
  aboutt2: {
    uz: "Bizning sartarosh va soch oldirish kurslarimiz sizga asosiy bilimlarni olishga yordam beradi sartaroshlik sohasida har birini tahlil qiling qadam, texnikani takomillashtirish va soch kesish tezligini oshirish.",
    ru: "Наши курсы барбера и бритья помогут вам получить базовые знания в области парикмахерского искусства, проанализировать каждый шаг усовершенствовать технику и повысить скорость стрижки.",
  },

  //features
  fea1tit: {
    uz: "Professionallik",
    ru: "Профессионализм",
  },
  fea1tex: {
    uz: "Siz erkaklar uchun dunyo va mualliflik texnikasini o&#39 zlashtirasiz sochlar va soqollarni shakllantirish",
    ru: "Вы будете владеть мировыми и авторскими техниками мужских стрижек и оформления бороды",
  },

  fea2tit: {
    uz: "Biz ta'minlaymiz",
    ru: "Мы предоставляем",
  },
  fea2tex: {
    uz: "Professional jihozlangan joy, sarf materiallari va mashg'ulotlar uchun modellar",
    ru: "Профессионально оборудованное место, расходные материалы и моделей для обучения",
  },

  fea3tit: {
    uz: "Amaliyot",
    ru: "Практика",
  },
  fea3tex: {
    uz: "O&#39;qitishning 80% namunalar bo'yicha amaliyotdir. Zerikarli ma'ruzalar yo'q va blanklar, jonli modellarda ishlash.",
    ru: "80% обучения - практика на моделях. Никаких скучных лекций и болванок, работа на живых моделях.",
  },

  //kursy

  kurtit: {
    uz: "Kurslar",
    ru: "Курсы",
  },
  kurtex: {
    uz: "TRUE BARBER kurslari o'qitish uchun maxsus mo'ljallangan zamonaviy va an'anaviy sartaroshlik mahoratlari. Bizning kurslarimiz tajribasi kam yoki umuman bo'lmaganlar uchun ideal sochlar va ular qanday ko'rinishi mumkinligini his qilishni xohlaydi sartarosh sifatida martaba, shuningdek, turli xil texnikalar, uslublarga qarash va tendentsiyalari. erkaklar sochlarida. Biz barchani kutib olamiz! Bugun biz bilan bog'laning!",
    ru: "Курсы от TRUE BARBER специально разработаны для обучения современным и традиционным навыкам барбера. Наши курсы идеально подходят для тех, кто практически не имеет опыта стрижки волос и хочет почувствовать, как может выглядеть их карьера барбера, а также взглянуть на различные техники, стили и тенденции. в мужских волосах. Мы приветствуем всех желающих! Свяжитесь c нами сегодня!",
  },

  pretit: {
    uz: "Kursning afzalliklari",
    ru: "Преимущества курса",
  },


  pretit1: {
    uz: "Biz sizga qanday qilib qirqishni, tarashni o'rgatamiz;",
    ru: "Научим стричь, брить;",
  },
  pretit2: {
    uz: "Sizga mijozlar bilan qanday aloqa qilishni o'rgatamiz;",
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
    uz: "Pro-ga aylaning.",
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
    location.href = window.location.pathname + "#uz";
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
