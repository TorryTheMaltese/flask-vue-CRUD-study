import Vue from 'vue';
import router from './router';
import App from './App.vue';

new Vue({
  router,
  // Vue.js의 render function 을 ES6 문법으로 간소화
  // 참고 : h는 hyperscript의 약자로 HTML 구조를 생성하는 스크립트를 의미. Virtual DOM 구현에서 관행적으로 사용
  // https://jsfiddle.net/Captain_Pangyo/ugmt27Ln/
  render: (h) => h(App),
}).$mount('#app');
