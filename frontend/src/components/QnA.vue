<template>
  <div>
    <div class="qna-div">
      <MainHeader :location="location"></MainHeader>
      <IntroducePicture></IntroducePicture>
      <Introduce></Introduce>
      <Content></Content>
      <Map></Map>
      <CopyRight></CopyRight>
    </div>
  </div>
</template>
<script>
import MainHeader from './home/header/MainHeader.vue'
import IntroducePicture from './qna/introduce_picture/IntroducePicture.vue'
import Introduce from './qna/introduce/Introduce.vue'
import CopyRight from './qna/copyright/CopyRight.vue'
import Map from './qna/map/Map.vue'
import Content from './qna/content/Content.vue'
export default {
  name: 'QnA',
  data () {
    return {
      location: ''
    }
  },
  created () {
    document.title = '예람드리 | 문의'
    this.location = window.location.pathname
    window.scrollTo(0, 0)
  },
  mounted () {
    document.title = '예람드리 | 문의'
    this.location = window.location.pathname
    window.scrollTo(0, 0)
  },
  components: {
    MainHeader: MainHeader,
    IntroducePicture: IntroducePicture,
    Introduce: Introduce,
    Map: Map,
    Content: Content,
    CopyRight: CopyRight
  }
}
</script>

