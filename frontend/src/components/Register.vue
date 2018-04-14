<template>
  <div>
    <div class="register-div">
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
import Introduce from './register/introduce/Introduce.vue'
import IntroducePicture from './register/introduce_picture/IntroducePicture.vue'
import CopyRight from './qna/copyright/CopyRight.vue'
import Content from './register/content/Content.vue'
export default {
  name: 'Register',
  data () {
    return {
      location: ''
    }
  },
  created () {
    document.title = '예람드리 | 등록 및 소개'
    this.location = window.location.pathname
    window.scrollTo(0, 0)
  },
  mounted () {
    document.title = '예람드리 | 등록 및 소개'
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
