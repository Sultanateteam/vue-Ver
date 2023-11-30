<template>
  <div :class="[{ fixedHeader: fixedHeader }]">
    <div class="container">
      <header>
        <a href="/" class="logo"><span>i</span>Stream</a>

        <ul class="menu">
          <li>
            <RouterLink to="/">Главная</RouterLink>
          </li>
          <li class="drop-down">
            Сервисы
            <span class="down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M8.96004 1.47501L5.70004 4.73501C5.31504 5.12001 4.68504 5.12001 4.30004 4.73501L1.04004 1.47501"
                  stroke="#a6abb1"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <ul class="drop-down-inner">
              <li>
                <div class="sasaa">
                  <RouterLink to="/secviceschool"
                    >Мактаб / ўқув маркази</RouterLink
                  >
                </div>
              </li>
              <li>
                <div class="sasaa">
                  <RouterLink to="/trade">Чакана савдо</RouterLink>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink to="/secvice">Услуги</RouterLink>
          </li>
          <li>
            <RouterLink to="/aboutUs">О нас</RouterLink>
          </li>
          <li><a href="#">Контакты</a></li>
        </ul>

        <Btn :color="false">Войти в систему</Btn>
      </header>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import Btn from "../UI components/Btn.vue";

export default {
  components: {
    Btn,
  },
  data() {
    return {
      fixedHeader: false,
    };
  },
  mounted() {
    this.win();
  },
  methods: {
    win() {
      window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY > 200) {
          this.fixedHeader = true;
        } else {
          this.fixedHeader = false;
        }
        console.log(this.fixedHeader);
      });
    },
  },
};
</script>

<style scoped>
.fixedHeader {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  z-index: 99999;
  transition: all 0.5s ease;
}

.container {
  z-index: 9999999;
  position: relative;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  z-index: 99999;
  align-items: center;
}

.logo {
  color: #fff;
  font-family: Univia Pro;
  font-size: 42px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration: none;
}

.logo span {
  color: #20b2ff;
  font-family: Univia Pro;
  font-size: 42px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.menu {
  gap: 20px;
  display: flex;
  flex-direction: row;
}

.menu a {
  text-decoration: none;
  color: #a6abb1;
  transition: color 0.3s ease;
}

.menu li {
  list-style: none;
  color: #a6abb1;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.menu a:hover {
  color: white;
}

.drop-down {
  position: relative;
}

.drop-down:hover {
  color: white;
}

.drop-down:hover .drop-down-inner {
  transform: translate(-12px, 0px);
  opacity: 1;
  pointer-events: all;
  visibility: visible;
  z-index: 9;
}

.down {
  display: flexbox;
  justify-content: flex-start;
}

.drop-down-inner {
  position: absolute;
  transform: translate(-110px, 100px);
  padding: 0;
  transition: all 0.3s ease;
  opacity: 0;
  gap: 0;
  pointer-events: none;
  visibility: hidden;
  z-index: -99;
  background-color: white;
}

.drop-down-inner li {
  top: 0;
  position: relative;
  width: 200px;
}
.drop-down-inner li a {
  padding: 8px 10px;
  color: black;
  background-color: rgba(255, 255, 255, 0.224);
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: 0.3s ease all;
}

.drop-down-inner li a:hover {
  background-color: #a6abb1;
}

.sasaa {
  position: relative;
  height: 40px;
  width: 100%;
  margin: 0;
}
.sasaa a {
  position: absolute;
  height: 100%;
  min-width: 100% !important;
}
</style>
