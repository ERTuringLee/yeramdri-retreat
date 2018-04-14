<template>
  <div class="main-div-container">
    <div class="main-div">
      <MainHeader :location="location"></MainHeader>
      <Container></Container>
    </div>
  </div>
</template>
<script>
import MainHeader from './home/header/MainHeader.vue'
import Container from './home/Container.vue'
export default {
  name: 'Home',
  data () {
    return {
      location: ''
    }
  },
  created () {
    document.title = '예람드리'
    this.location = window.location.pathname
    window.scrollTo(0, 0)
  },
  mounted () {
    document.title = '예람드리'
    this.location = window.location.pathname
    window.scrollTo(0, 0)
  },
  components: {
    MainHeader: MainHeader,
    Container: Container
  }
}
</script>
