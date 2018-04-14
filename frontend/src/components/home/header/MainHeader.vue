<template>
  <div class="App-header">
    <div class="header-link-div">
      <router-link class="image-link" to="/"><img class="image-in-link" src="http://yeramdri.iptime.org/assets/hometag.gif"></router-link>
      <router-link :style="location==='/'?checkStyle:notCheckStyle" id="main" class="header-link" to="/">메인</router-link>
      <router-link :style="location==='/register'?checkStyle:notCheckStyle" id="register" class="header-link" to="/register">등록 및 소개</router-link>
      <router-link :style="location==='/schedule'?checkStyle:notCheckStyle" id="schedule" class="header-link" to="/schedule">일정 및 장소</router-link>
      <router-link :style="location==='/qna'?checkStyle:notCheckStyle" id="qna" class="header-link" to="/qna">문의</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: ['location'],
  data () {
    return {
      mainValue: '메인',
      registeValue: '등록 및 소개',
      scheduleValue: '일정 및 장소',
      qnaValue: '문의',
      checkStyle: {
        borderTop: '4px #c5c6d5 solid',
        color: '#c5c6d5'
      },
      notCheckStyle: {}
    }
  }
}
</script>
