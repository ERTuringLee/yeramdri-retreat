<template>
  <div class="register-content-div">
    <Phrase></Phrase>
    <Picture></Picture>
  </div>
</template>
<script>
import Phrase from './phrase/Phrase'
import Picture from './picture/Picture'
export default {
  name: 'Content',
  components: {
    Phrase: Phrase,
    Picture: Picture
  }
}
</script>
