<template>
  <div class="footers">
    <div class="footer">
      <div class="left_footer_div">
        <div class="line_div"></div>
        <div class="name_phone">
          <h3>문의: 박의용</h3>
          <h3>010 - 2975 - 9191</h3>
        </div>
      </div>
      <div class="right_footer_div">
        <div class="mail_form_div">
          <input placeholder="이름 *" class="user_name_input" ref="user_name" type="text">
          <input placeholder="이메일 *" class="user_email_input" ref="user_email" type="email">
          <textarea placeholder="메시지" class="user_message_input"></textarea>
          <input class="mail_send_button" type="button" value="보내기">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainFooter'
}
</script>
<style scoped>
.footers {
  position: relative;
  background-color:#3f415a;
  color: #eaeaea;
}
.footer > h1 {
  margin: 0px;
}
.user_name_input {
  background-color: rgba(27, 28, 36, 0.4);
  color: #eaeaea;
  border: transparent;
}
.user_name_input:focus {
  outline: none;
}
.user_email_input {
  background-color: rgba(27, 28, 36, 0.4);
  color: #eaeaea;
  border: transparent;
}
.user_email_input:focus {
  outline: none;
}
.user_message_input {
  background-color: rgba(27, 28, 36, 0.4);
  color: #eaeaea;
  border: transparent;
  resize: none;
}
.user_message_input:focus {
  outline: none;
}
.mail_send_button {
  background-color: rgba(97, 100, 117, 0.5);
  color: #9B9EAC;
  border: transparent;
  cursor: pointer;
}
.mail_send_button:focus {
  outline: none;
}
@media (min-width: 992px) {
  .footer {
    position: relative;
    width: 70%;
    height: 25vw;
    margin: 0 auto;
  }
  .left_footer_div {
    position: absolute;
    top: 5vw;
    left: 0px;
    width: 35vw;
    height: 20vw;
  }
  .right_footer_div {
    position: absolute;
    top: 5vw;
    right: 0px;
    width: 35vw;
    height: 20vw;
  }
  .line_div {
    border-top: 0.5vw #eaeaea solid;
    width: 3vw;
  }
  .name_phone {
    margin-top: 3vw;
  }
  .name_phone > h3 {
    font-size: 2vw;
    font-weight: 400;
  }
  .mail_form_div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .user_name_input {
    position: absolute;
    width: 30vw;
    top:0px;
    left: 0px;
    font-size: 1.5vw;
    padding: 0.5vw 0.5vw;
  }
  .user_email_input {
    position: absolute;
    width: 30vw;
    top: 3.2vw;
    left: 0px;
    font-size: 1.5vw;
    padding: 0.5vw 0.5vw;
  }
  .user_message_input {
    position: absolute;
    width: 30vw;
    height: 9vw;
    font-size: 1.5vw;
    padding: 0.5vw 0.5vw;
    top: 6.4vw;
    left: 0px;
  }
  .mail_send_button {
    position: absolute;
    font-size: 1.5vw;
    padding: 0.5vw 1vw;
    bottom: 0px;
    right: 4vw;
  }
}
</style>
