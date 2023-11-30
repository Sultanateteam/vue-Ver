<template>
  <HeaderV />
  <section>
    <div class="container">
      <p class="first-p">Qisqacha ma’lumotlar</p>
      <AboutSections :ASection="AboutSections[0]" />
      <AboutSections :ASection="AboutSections[1]" />
      <AboutSections :ASection="AboutSections[2]" />
      <AboutSections :ASection="AboutSections[3]" />
      <AboutSections :ASection="AboutSections[4]" />
      <div class="about-img-frame">
        <img src="../../assets/aboutSection/Frame.png" alt="" />
      </div>
      <AboutSections :ASection="AboutSections[5]" />
    </div>
  </section>
  <Footer :blackBlack="true" />
</template>

<script>
import AboutSections from "../UI components/AboutSections.vue";
import Footer from "../footer/Footer.vue";
import HeaderV from "../header/HeaderV.vue";

export default {
  components: { HeaderV, Footer, AboutSections },
  data() {
    return {
      AboutSections: [
        {
          id: 1,
          boxReserve: false,
          title: "Қисқача",
          h1: "Тизим ҳақида",
          lists: [
            "Фойдаланувчи турига қараб алоҳида функционал рўйхати шаклланади;",
            "Платформа интуитив, ишлатиш учун қулай ва мукаммал/бехато ишлайди;",
            "Чуқур машинавий таълим ва нейрон тармоқлардан фойдаланиш.",
          ],
          link: "/src/assets/aboutSection/boxesPhoto/1.png",
        },
        {
          id: 2,
          boxReserve: true,
          title: "Тизим",
          h1: "имкониятлари",
          lists: [
            "Ўқувчиларнинг юзларини таниб олиш орқали давомат юритиш;",
            "Ўқувчиларнинг дарсни қолдириш ҳолатларини қайд этиш ва ота-онага хабар бериш;",
            "Ходимларнинг ишга келиш-кетиш вақтларини қайд этиш ва ҳисоблаш;",
          ],
          link: "/src/assets/aboutSection/boxesPhoto/2.png",
        },
        {
          id: 3,
          boxReserve: false,
          title: "Тизимда",
          h1: "ҳал қиладиган масалалар",
          lists: [
            "ўқувчи ва ўқитувчилар интизомини кучайиб, кеч қолишлар камаяди;",
            "Фаол ва фойдали ходимларни рағбатлантириш (KPI) орқали маблағлар мақсадли йўналтирилади;",
            "Дарслар сифатини янги босқичга чиқиб, уларнинг сермаҳсуллиги оширилади;",
          ],
          link: "/src/assets/aboutSection/boxesPhoto/3.png",
        },
        {
          id: 4,
          boxReserve: true,
          title: "Тизимда",
          h1: "ишлаш нимадан бошланади",
          lists: [
            "Рўйхатдан ўтиш",
            "Мобил телефон/ижтимоий тармоқ / ЭРИ калити орқали авторизациядан ўтиш",
            "Модерациядан ўтиш",
            "Бирламчи маълумотларни қўшиш/юр. шахснинг реквизитлари",
            "Кузатув ва стриминг учун хоналарни қўшиш",
          ],
          link: "/src/assets/aboutSection/boxesPhoto/4.png",
        },
        {
          id: 5,
          boxReserve: false,
          title: "Чакана савдогарлар",
          h1: "учун қўшимча функциялар",
          lists: [
            "Мижозларнинг ташриш буюриш вақтини ҳисобга олиш",
            "Харид амалга оширган мижозларнинг ҳисобини юритиш",
          ],
          link: "/src/assets/aboutSection/boxesPhoto/5.png",
        },
        {
          id: 6,
          boxReserve: true,
          title: "Нега айнан",
          h1: "iStream ва у нимаси билан афзал?",
          lists: [
            "iStream ва у нимаси билан афзал?",
            "Қисқа фурсатда шахсий кабинет яратиш;",
            "Анъанавий дастурий таъминот ўрнига булутли хизмат;",
            "Сифатли техник ёрдам;",
            "Доимий янгиланиш ва янги имкониятлар қўшилиб борилиши.",
          ],
          link: "/src/assets/aboutSection/boxesPhoto/6.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@100;200;300;400;500;600;700&display=swap");

section {
  overflow: hidden;
  max-width: 1450px;
  width: 100%;
}

.first-p {
  color: #fff;
  font-family: Asap Condensed;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  padding: 50px 0px;
}

.container {
  padding: 0px 50px;
  border-left: 1px solid white;
  border-right: 1px solid white;
}

.about-img-frame img {
  width: 100%;
}
</style>
