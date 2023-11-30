<template>
  <HeaderV />
  <PhotoShadow :link="shadowlyPhoto[0]" />
  <TempOne :temp="tepms[0]" />
  <PhotoShadow :link="shadowlyPhoto[1]" />
  <TempTwo v-for="tempTwo in tempTwos" :tempTwo="tempTwo" />
  <PhotoShadow :link="shadowlyPhoto[2]" />
  <PartnersLogo />
  <Footer :blackBlack="true" />
</template>

<script>
import ServiceList from "../UI components/ServiceList.vue";
import PhotoShadow from "../UI components/PhotoShadow.vue";
import TempOne from "../UI components/TempOne.vue";
import TempTwo from "../UI components/TempTwo.vue";
import PartnersLogo from "../UI components/PartnesLogo.vue";
import HeaderV from "../header/HeaderV.vue";
import Footer from "../footer/Footer.vue";
export default {
  data() {
    return {
      shadowlyPhoto: [
        "/src/assets/service/school/img/1.png",
        "/src/assets/service/school/img/2.png",
        "/src/assets/service/school/img/3.png",
      ],
      tepms: [
        {
          title: "Мактаб/ўқув маркази",
          lists: [
            {
              id: 1,
              link: "/src/assets/service/korxona/icons/user-search.png",
              p: "Ўқувчиларнинг юзларини таниб олиш орқали давомат юритиш;",
            },
            {
              id: 2,
              link: "/src/assets/service/korxona/icons/user-tick.png",
              p: "Ўқувчиларнинг дарсни қолдириш ҳолатларини қайд этиш ва ота-онага хабар бериш;",
            },
            {
              id: 3,
              link: "/src/assets/service/korxona/icons/user-remove.png",
              p: "Ходимларнинг ишга келмаслик ҳолатларини қайд этиш ва жарима солиш;",
            },
            {
              id: 4,
              link: "/src/assets/service/korxona/icons/user-tag.png",
              p: "Тегишли ходим ва ташриф буюрувчига учрашув ҳақида эслатма юбориш;",
            },
          ],
        },
      ],
      tempTwos: [
        {
          tl: true,
          br: false,
          link: "/src/assets/service/korxona/img/4c8e599379b87219d8067267ad6b7ff9.png",
          lists: [
            {
              id: 1,
              link: "/src/assets/service/korxona/icons/people.png",
              p: "Бинога ташриф буюрувчиларнинг ҳисобини юритиш;",
            },
            {
              id: 2,
              link: "/src/assets/service/korxona/icons/timer-start.png",
              p: "Бинодаги одамларни муайян вақт оралиғида кузатиш;",
            },
            {
              id: 3,
              link: "/src/assets/service/korxona/icons/scanning.png",
              p: "Бинога ташриф буюрувчиларнинг ғайритабиий ҳаракатларини ўрганиш;",
            },
            {
              id: 4,
              link: "/src/assets/service/korxona/icons/frame.png",
              p: "Хавфли вазият тўғрисида тегишли ходим ва хафвсизлик органларига хабар бериш;",
            },
            {
              id: 5,
              link: "/src/assets/service/korxona/icons/shield-search.png",
              p: "Хавфли вазият юз берган тақдирда уни қайд этиш;",
            },
          ],
        },
        {
          tl: false,
          br: true,
          link: "/src/assets/service/school/img/face.png",
          lists: [
            {
              id: 1,
              link: "/src/assets/service/korxona/icons/video.png",
              p: "Масофавий кузатув учун стриминг/жонли эфирларни ташкил этиш;",
            },
            {
              id: 2,
              link: "/src/assets/service/korxona/icons/monitor-recorder.png",
              p: "Реал вақт режимида маълумотларни йиғиш (ҳар 3 дақиқада янгиланади);",
            },
            {
              id: 3,
              link: "/src/assets/service/korxona/icons/personalcard.png",
              p: "Сменаларга бўлиниш имконияти (эрталабки, кундузги ва кечки).",
            },
            {
              id: 4,
              link: "/src/assets/service/korxona/icons/chart-2.png",
              p: "Асосий статистик маълумотларни дашбордлар кўринишида намойиш этиш;",
            },
            {
              id: 5,
              link: "/src/assets/service/korxona/icons/cloud-connection.png",
              p: "Ташқи тизим билан интеграция ва маълумотларни экспорт қилиш учун ташқи API;",
            },
          ],
        },
      ],
    };
  },
  components: {
    ServiceList,
    PhotoShadow,
    TempOne,
    TempTwo,
    PartnersLogo,
    HeaderV,
    Footer,
  },
};
</script>

<style></style>
