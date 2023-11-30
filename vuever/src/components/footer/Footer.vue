<template>
  <footer class="footeer" :class="[{ BakcBlack: blackBlack }]">
    <div class="container footer-content">
      <p>
        Тизимдан синов тарзида фойдаланиш учун қўнғироқ қилинг ёки рўйхатдан
        ўтинг:
      </p>
      <hr />
      <div class="footer-contacts">
        <span>Бизнинг контактларимиз</span>
        <div class="nums">
          <span>+(71)205 84 84</span>
          <span>+(88) 305 84 84</span>
          <span>info@realsoft.uz</span>
        </div>
      </div>
      <hr />
      <Btn :color="false">Боғланиш</Btn>
    </div>
  </footer>
</template>

<script>
import Btn from "../UI components/Btn.vue";
export default {
  components: {
    Btn,
  },
  props: {
    blackBlack: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
footer {
  background-image: url("../../assets/background/footer.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 150px 0px;
}

.footeer::after {
  position: absolute;
  background: linear-gradient(#4d5764, #4d5764c9, #4d5764);
  content: "";
  inset: 0;
}

.footer-content {
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);
  padding: 30px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content p {
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  width: 434px;
  height: 63px;
  flex-shrink: 0;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}

.footer-contacts {
  justify-content: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.footer-contacts > span {
  color: #fff;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.5;
  padding: 0;
  margin: 0;
}

.footer-contacts .nums {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  display: flex;
  gap: 30px;
  padding: 0;
  margin: 0;
  justify-content: space-between;
}

footer button {
  font-size: 14px !important;
}

.footer-content hr {
  width: 50px;
  opacity: 0.5;
  transform: rotate(90deg);
}

.footeer.BakcBlack::after {
  /* background: linear-gradient(#050506, #21252bc9, #1d2127) !important; */
  background: linear-gradient(#0a0a0b, #2e343cc9, #0b0b0b) !important;
}
</style>
