<template>
  <HeaderV />
  <div class="home">
    <div class="container">
      <Heading2>Қисқача</Heading2>
      <Heading1>Тизим ҳақида</Heading1>
      <div class="cards">
        <Card v-for="card in cards" :card="card" />
      </div>
      <DownLine />

      <div>
        <div class="info-card">
          <div class="information first-img">
            <InfoCard :info="infoCards[0]" />
          </div>
          <div class="img">
            <img
              class="img-cam"
              src="../../assets/infoCards/camera/d30bbcf04e8efcf72ac9290cdd0c4c4c.png"
              alt=""
            />
          </div>
        </div>
        <DownLine />
      </div>

      <div>
        <div class="info-card">
          <div class="information">
            <InfoCard :info="infoCards[1]" />
          </div>
          <div class="img shapes">
            <div class="shape-bottom">
              <div class="shape">
                <img
                  src="../../assets/infoCards/users/Vector-bottom.png"
                  class="shape-head"
                  alt=""
                />
                <img
                  class="shape-body"
                  src="../../assets/infoCards/users/Vector-bottom.png"
                  alt=""
                />
              </div>
            </div>

            <div class="shape-left">
              <div class="shape">
                <img
                  class="shape-head"
                  src="../../assets/infoCards/users/Vector.png"
                  alt=""
                />
                <img
                  class="shape-body"
                  src="../../assets/infoCards/users/Vector.png"
                  alt=""
                />
              </div>
            </div>
            <div class="shape-right">
              <div class="shape">
                <img
                  class="shape-head"
                  src="../../assets/infoCards/users/Vector.png"
                  alt=""
                />
                <img
                  class="shape-body"
                  src="../../assets/infoCards/users/Vector.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <DownLine />
      </div>

      <section class="reg">
        <Heading2>Тизимда</Heading2>
        <Heading1>ишлаш нимадан бошланади</Heading1>
        <div class="all-steps">
          <StepsBor v-for="step in stepBor" :step="step" />
        </div>
        <DownLine />
      </section>

      <div>
        <div class="info-card">
          <div class="information">
            <InfoCard :info="infoCards[2]" />
          </div>
          <div class="img">
            <div class="img-trash">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="289"
                height="126"
                viewBox="0 0 289 126"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M248.575 52.2125H242.825L194.238 3.62505C190.356 -0.256201 184.031 -0.256201 180.006 3.62505C176.125 7.5063 176.125 13.8313 180.006 17.8563L214.363 52.2125H74.6375L108.994 17.8563C112.875 13.975 112.875 7.65005 108.994 3.62505C105.112 -0.256201 98.7875 -0.256201 94.7625 3.62505L46.3188 52.2125H40.5687C27.6313 52.2125 0.75 52.2126 0.75 89.0126C0.75 102.956 3.625 112.156 9.6625 118.194C13.1125 121.788 17.2812 123.656 21.7375 124.663C25.9062 125.669 30.3625 125.813 34.675 125.813H254.325C258.781 125.813 262.95 125.525 266.975 124.663C279.05 121.788 288.25 113.163 288.25 89.0126C288.25 52.2126 261.369 52.2125 248.575 52.2125Z"
                  fill="#9BAEC7"
                />
              </svg>
              <img src="../../assets/infoCards/trash/Vector.svg" alt="" />
            </div>
          </div>
        </div>
        <DownLine />
      </div>
      <div>
        <div class="info-card">
          <div class="information">
            <InfoCard :info="infoCards[3]" />
          </div>
          <div class="img">
            <div class="stacks">
              <svg
                class="stacks-center"
                xmlns="http://www.w3.org/2000/svg"
                width="277"
                height="139"
                viewBox="0 0 277 139"
                fill="none"
              >
                <path
                  d="M126.602 135.967L9.16388 82.5864C-2.07157 77.4794 -2.07155 61.5204 9.1639 56.4133L126.602 3.03253C134.161 -0.403424 142.836 -0.403419 150.395 3.03253L267.833 56.4134C279.069 61.5204 279.069 77.4794 267.833 82.5864L150.395 135.967C142.836 139.403 134.161 139.403 126.602 135.967Z"
                  fill="#9BAEC7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="277"
                height="139"
                viewBox="0 0 277 139"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M126.602 136.092L9.16388 82.7114C-2.07157 77.6044 -2.07155 61.6454 9.1639 56.5383L126.602 3.15753C134.161 -0.278424 142.836 -0.278419 150.395 3.15753L267.833 56.5384C279.069 61.6454 279.069 77.6044 267.833 82.7114L150.395 136.092C142.836 139.528 134.161 139.528 126.602 136.092Z"
                  fill="#9BAEC7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="277"
                height="139"
                viewBox="0 0 277 139"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M126.602 136.092L9.16388 82.7114C-2.07157 77.6044 -2.07155 61.6454 9.1639 56.5383L126.602 3.15753C134.161 -0.278424 142.836 -0.278419 150.395 3.15753L267.833 56.5384C279.069 61.6454 279.069 77.6044 267.833 82.7114L150.395 136.092C142.836 139.528 134.161 139.528 126.602 136.092Z"
                  fill="#9BAEC7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer :blackBlack="true" />
</template>
<script>
import Card from "../UI components/Card.vue";
import DownLine from "../UI components/DownLine.vue";
import Heading1 from "../UI components/Heading1.vue";
import Heading2 from "../UI components/Heading2.vue";
import InfoCard from "../UI components/InfoCard.vue";
import StepsBor from "../UI components/StepsBor.vue";
import Footer from "../footer/Footer.vue";
import HeaderV from "../header/HeaderV.vue";

export default {
  data() {
    return {
      cards: [
        {
          h2: "Фойдаланувч",
          p: "Фойдаланувчи турига қараб алоҳида функционал рўйхати шаклланади;",
          link: "/src/assets/home_cards/user-square.png",
          black: false,
        },
        {
          h2: "Платформа",
          p: "Платформа интуитив, ишлатиш учун қулай ва мукаммал/бехато ишлайди;",
          link: "/src/assets/home_cards/monitor-mobbile.png",
          black: true,
        },
        {
          h2: "Сунъий интеллект",
          p: "Чуқур машинавий таълим ва нейрон тармоқлардан фойдаланиш.",
          link: "/src/assets/home_cards/cpucharge.png",
          black: false,
        },
      ],
      infoCards: [
        {
          h2: "Тизим",
          h1: "имкониятлари",
          lists: [
            "Ўқувчиларнинг юзларини таниб олиш орқали давомат юритиш;",
            "Ўқувчиларнинг дарсни қолдириш ҳолатларини қайд этиш ва ота-онага хабарбериш;",
            "Ходимларнинг ишга келиш-кетиш вақтларини қайд этиш ва ҳисоблаш;",
          ],
          btn: false,
        },
        {
          h2: "Тизимда",
          h1: "ҳал қиладиган масалалар",
          lists: [
            "ўқувчи ва ўқитувчилар интизомини кучайиб, кеч қолишлар камаяди;",
            "Фаол ва фойдали ходимларни рағбатлантириш (KPI) орқали маблағлар мақсадли йўналтирилади;",
            "Дарслар сифатини янги босқичга чиқиб, уларнинг сермаҳсуллиги оширилади;",
          ],
          btn: false,
        },
        {
          h2: "Чакана савдогарлар",
          h1: "учун қўшимча функциялар",
          lists: [
            "учун қўшимча функциялар",
            "Харид амалга оширган мижозларнинг ҳисобини юритиш",
          ],
          btn: false,
        },

        {
          h2: "Нега айнан",
          h1: "iStream ва у нимаси билан афзал?",
          lists: [
            "Осон созлама;",
            "Қисқа фурсатда шахсий кабинет яратиш;",
            "Анъанавий дастурий таъминот ўрнига булутли хизмат;",
            "Сифатли техник ёрдам;",
            "Доимий янгиланиш ва янги имкониятлар қўшилиб борилиши.",
          ],
          btn: true,
        },
      ],
      stepBor: [
        {
          reserve: false,
          link: "../../assets/steps/user-tag.png",
          number: 1,
          info: "Рўйхатдан ўтиш",
          blue: false,
        },
        {
          reserve: true,
          link: "../../assets/steps/mobile.png",
          number: 2,
          info: "Мобил телефон/ижтимоий тармоқ / ЭРИ калити орқали авторизациядан ўтиш",
          blue: false,
        },
        {
          reserve: false,
          link: "../../assets/steps/shield.png",
          number: 3,
          info: "Модерациядан ўтиш",
          blue: true,
        },
        {
          reserve: true,
          link: "../../assets/steps/user-add.png",
          number: 4,
          info: "Бирламчи маълумотларни қўшиш/юр. шахснинг реквизитлари",
          blue: false,
        },
        {
          reserve: false,
          link: "../../assets/steps/home.png",
          number: 5,
          info: "Кузатув ва стриминг учун хоналарни қўшиш",
          blue: false,
        },
      ],
    };
  },
  components: {
    Heading2,
    Heading1,
    Card,
    DownLine,
    InfoCard,
    StepsBor,
    HeaderV,
    Footer
},
};
</script>
<style scoped>
.home {
  padding: 100px 0px;
}

.cards {
  display: flex;
  gap: 20px;
  margin: 100px 0px;
}

.info-card {
  display: flex;
  margin: 100px 0px;
}

.information {
  flex: 6;
}

.img {
  flex: 4;
  overflow: hidden;
  max-height: 500px;
}

.img > .img-cam {
  width: 250%;
  transform: translate(-400px, -350px);
}

.shape {
  position: relative;
  width: 150px;
  height: 200px;
}
.shape-head {
  width: 90px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.shape-body {
  width: 140px;
  height: 70px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}

.shapes {
  position: relative;
  max-width: 300px !important;
  min-width: 400px !important;
  height: 400px;
}

.shape-left {
  left: 30px;
  position: absolute;
  z-index: 3;
}

.shape-right {
  right: 30px;
  position: absolute;
  z-index: 2;
}

.shape-bottom {
  left: 31%;
  /* left: 50px; */
  top: 20%;
  position: absolute;
  z-index: 298;
}

.shape-bottom .shape-head {
  border: 10px solid black;
  border-radius: 50%;
}

/* section about registration */

.reg {
  padding: 100px 0px;
}

.all-steps {
  padding: 60px 0px;
}
/* --------------------- */

.img-trash {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* --------------------- */

.stacks {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stacks-center {
  position: absolute;
  top: 25%;
}
</style>
