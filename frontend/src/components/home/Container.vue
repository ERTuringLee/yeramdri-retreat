<template>
  <div class="sub-container">
    <Phrases></Phrases>
    <MainFooter></MainFooter>
    <CopyRight></CopyRight>
  </div>
</template>
<script>
import Phrases from './phrases/Phrases.vue'
import MainFooter from './footer/MainFooter.vue'
import CopyRight from './copyright/CopyRight.vue'
export default {
  name: 'Container',
  components: {
    Phrases: Phrases,
    MainFooter: MainFooter,
    CopyRight: CopyRight
  }
}
</script>
