<template>
  <div>
    <div class="schedule-div">
      <MainHeader :location="location"></MainHeader>
      <IntroducePicture></IntroducePicture>
      <Introduce></Introduce>
      <Content></Content>
      <CopyRight></CopyRight>
    </div>
  </div>
</template>
<script>
import MainHeader from './home/header/MainHeader.vue'
import Introduce from './schedule/introduce/Introduce.vue'
import IntroducePicture from './schedule/introduce_picture/IntroducePicture.vue'
import Content from './schedule/content/Content.vue'
import CopyRight from './qna/copyright/CopyRight.vue'
export default {
  name: 'Register',
  data () {
    return {
      location: ''
    }
  },
  created () {
    document.title = '예람드리 | 일정 및 장소'
    this.location = window.location.pathname
    window.scrollTo(0, 0)
  },
  mounted () {
    document.title = '예람드리 | 일정 및 장소'
    this.location = window.location.pathname
    window.scrollTo(0, 0)
  },
  components: {
    MainHeader: MainHeader,
    Introduce: Introduce,
    IntroducePicture: IntroducePicture,
    Content: Content,
    CopyRight: CopyRight
  }
}
</script>
