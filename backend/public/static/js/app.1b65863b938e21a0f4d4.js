webpackJsonp([1],{EwUB:function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("EwUB")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={name:"app"},r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],l={render:r,staticRenderFns:c},o=l,d=s("VU/8"),v=d(n,o,!1,null,null,null),u=v.exports,_=s("/ocq"),m={name:"Header",props:["location"],data:function(){return{mainValue:"메인",registeValue:"등록 및 소개",scheduleValue:"일정 및 장소",qnaValue:"문의",checkStyle:{borderTop:"4px #c5c6d5 solid",color:"#c5c6d5"},notCheckStyle:{}}}},h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"App-header"},[s("div",{staticClass:"header-link-div"},[s("router-link",{staticClass:"image-link",attrs:{to:"/"}},[s("img",{staticClass:"image-in-link",attrs:{src:"http://yeramdri.iptime.org/assets/hometag.gif"}})]),t._v(" "),s("router-link",{staticClass:"header-link",style:"/"===t.location?t.checkStyle:t.notCheckStyle,attrs:{id:"main",to:"/"}},[t._v("메인")]),t._v(" "),s("router-link",{staticClass:"header-link",style:"/register"===t.location?t.checkStyle:t.notCheckStyle,attrs:{id:"register",to:"/register"}},[t._v("등록 및 소개")]),t._v(" "),s("router-link",{staticClass:"header-link",style:"/schedule"===t.location?t.checkStyle:t.notCheckStyle,attrs:{id:"schedule",to:"/schedule"}},[t._v("일정 및 장소")]),t._v(" "),s("router-link",{staticClass:"header-link",style:"/qna"===t.location?t.checkStyle:t.notCheckStyle,attrs:{id:"qna",to:"/qna"}},[t._v("문의")])],1)])},p=[],C={render:h,staticRenderFns:p},f=C,g=s("VU/8"),k=g(m,f,!1,null,null,null),y=k.exports,w={name:"Phrases"},E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"phrases"},[s("div",{staticClass:"phrase"},[s("img",{staticClass:"phrase-image",attrs:{src:"http://yeramdri.iptime.org/assets/hand.gif"}}),t._v(" "),s("h1",{staticClass:"phrasing"},[t._v("현실의 소리, 나의 소리가 아닌 하나님의 빛에 이끌리는 예배자")]),t._v(" "),s("h6",{staticClass:"include"},[t._v("-예람드리-")])])])}],R={render:E,staticRenderFns:$},x=R,F=s("VU/8"),V=F(w,x,!1,null,null,null),U=V.exports,I={name:"MainFooter"},q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footers"},[s("div",{staticClass:"footer"},[t._m(0,!1,!1),t._v(" "),s("div",{staticClass:"right_footer_div"},[s("div",{staticClass:"mail_form_div"},[s("input",{ref:"user_name",staticClass:"user_name_input",attrs:{placeholder:"이름 *",type:"text"}}),t._v(" "),s("input",{ref:"user_email",staticClass:"user_email_input",attrs:{placeholder:"이메일 *",type:"email"}}),t._v(" "),s("textarea",{staticClass:"user_message_input",attrs:{placeholder:"메시지"}}),t._v(" "),s("input",{staticClass:"mail_send_button",attrs:{type:"button",value:"보내기"}})])])])])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left_footer_div"},[s("div",{staticClass:"line_div"}),t._v(" "),s("div",{staticClass:"name_phone"},[s("h3",[t._v("문의: 박의용")]),t._v(" "),s("h3",[t._v("010 - 2975 - 9191")])])])}],P={render:q,staticRenderFns:M},S=P,b=s("VU/8"),H=a,T=b(I,S,!1,H,"data-v-2ce312c6",null),A=T.exports,B={name:"MainFooter"},N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copyright-div"},[s("h6",{staticClass:"copyright"},[t._v("Copyright © 2017-2018 Samil Church Yeramdri. All rights reserved.")])])}],Y={render:N,staticRenderFns:Q},j=Y,z=s("VU/8"),D=z(B,j,!1,null,null,null),G=D.exports,J={name:"Container",components:{Phrases:U,MainFooter:A,CopyRight:G}},O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sub-container"},[s("Phrases"),t._v(" "),s("MainFooter"),t._v(" "),s("CopyRight")],1)},W=[],X={render:O,staticRenderFns:W},Z=X,K=s("VU/8"),L=K(J,Z,!1,null,null,null),tt=L.exports,et={name:"Home",data:function(){return{location:""}},created:function(){document.title="예람드리",this.location=window.location.pathname,window.scrollTo(0,0)},mounted:function(){document.title="예람드리",this.location=window.location.pathname,window.scrollTo(0,0)},components:{MainHeader:y,Container:tt}},st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-div-container"},[s("div",{staticClass:"main-div"},[s("MainHeader",{attrs:{location:t.location}}),t._v(" "),s("Container")],1)])},at=[],it={render:st,staticRenderFns:at},nt=it,rt=s("VU/8"),ct=rt(et,nt,!1,null,null,null),lt=ct.exports,ot={name:"Introduce"},dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"introduce_div"},[s("div",{staticClass:"introduce"},[s("h1",{staticClass:"qna_introduce"},[t._v("등록 및 소개")])])])}],ut={render:dt,staticRenderFns:vt},_t=ut,mt=s("VU/8"),ht=mt(ot,_t,!1,null,null,null),pt=ht.exports,Ct={name:"IntroducePicture"},ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},gt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intruduce_picture_div"},[s("div",{staticClass:"register_introduce_picture"})])}],kt={render:ft,staticRenderFns:gt},yt=kt,wt=s("VU/8"),Et=wt(Ct,yt,!1,null,null,null),$t=Et.exports,Rt={name:"MainFooter"},xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},Ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"qna_copyright-div"},[s("h6",{staticClass:"copyright"},[t._v("Copyright © 2017-2018 Samil Church Yeramdri. All rights reserved.")])])}],Vt={render:xt,staticRenderFns:Ft},Ut=Vt,It=s("VU/8"),qt=It(Rt,Ut,!1,null,null,null),Mt=qt.exports,Pt={name:"Phrase"},St=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},bt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-phrase"},[s("div",{staticClass:"phrase-div"},[s("div",{staticClass:"phrase-set"},[s("h6",[t._v("주님을 따라가는 길, 그런데, 많이 외로우시죠.")]),t._v(" "),s("h6",[t._v("주님을 따라가는 길, 그런데, 눈물이 앞을 가리우죠.")]),t._v(" "),s("h6",[t._v("주님을 따라가는 길, 혼자인 것 같진 않으신가요.")])]),t._v(" "),s("div",{staticClass:"phrase-set"},[s("h6",[t._v("사람들과 함께 있다가 돌아오면, 허전함으로 가득 차지는 않으신가요?")]),t._v(" "),s("h6",[t._v("앞길이 막막하고, 사방이 막힌 것 같아 두려우시진 않으신가요?")]),t._v(" "),s("h6",[t._v("가족 안에서부터 신앙은 논쟁거리가 되어 마음이 불편하시진 않으신가요?")])]),t._v(" "),s("div",{staticClass:"phrase-set"},[s("h6",[t._v("모든 분야에서 어떻게 해야 하는지 몰라, 자꾸 넘어지지만,")]),t._v(" "),s("h6",[t._v("하나님이 포기되지는 않아서 스스로가 답답하신 적 있으신가요?")])]),t._v(" "),s("div",{staticClass:"phrase-set"},[s("h6",[t._v("이성적으로도 감성적으로도 하나님에 대한 것이 확신이 되지 않는데, 갈급함은 커져만 가진 않으신가요?")]),t._v(" "),s("h6",[t._v("그런 당신이 '예람드리'입니다.")])]),t._v(" "),s("div",{staticClass:"phrase-set"},[s("h6",[t._v("함께 모여서, 주님의 부르심을 확인해요.")])])]),t._v(" "),s("div",{staticClass:"register-link-div"},[s("a",{attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLScw_Xouyo5zRMxAlSgDMIw9kfdr76NaGunkdGXtTgDNZ_o9Sw/viewform"}},[t._v("등록하기")])])])}],Ht={render:St,staticRenderFns:bt},Tt=Ht,At=s("VU/8"),Bt=At(Pt,Tt,!1,null,null,null),Nt=Bt.exports,Qt={name:"Phrase"},Yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},jt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-picture"},[s("div",{staticClass:"picture-title"},[s("h3",[t._v("our pastors:")])]),t._v(" "),s("div",{staticClass:"picture-div"},[s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok7.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 양석효 목사")]),t._v(" "),s("h6",[t._v("삼일교회 대학부")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok4.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 한병수 목사")]),t._v(" "),s("h6",[t._v("전주대학교회 담임")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok6.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 송태근 목사")]),t._v(" "),s("h6",[t._v("삼일교회 담임")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok3.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 유희성 목사")]),t._v(" "),s("h6",[t._v("삼일교회 고등부")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok5.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 이관형 목사")]),t._v(" "),s("h6",[t._v("대구내일교회 담임")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok8.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 김상권 목사")]),t._v(" "),s("h6",[t._v("수영로교회 대학부")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok1.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 김근주 교수")]),t._v(" "),s("h6",[t._v("기독연구소 '느헤미야'")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/chungpa.jpg"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ ")]),t._v(" "),s("h6",[t._v(" ")])])]),t._v(" "),s("div",{staticClass:"picture"},[s("img",{staticClass:"mok",attrs:{src:"http://yeramdri.iptime.org/assets/mok2.png"}}),t._v(" "),s("div",{staticClass:"mok-introduce"},[s("h5",[t._v("+ 이사무엘 목사")]),t._v(" "),s("h6",[t._v("삼일교회 대학부")])])])])])}],zt={render:Yt,staticRenderFns:jt},Dt=zt,Gt=s("VU/8"),Jt=Gt(Qt,Dt,!1,null,null,null),Ot=Jt.exports,Wt={name:"Content",components:{Phrase:Nt,Picture:Ot}},Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-content-div"},[s("Phrase"),t._v(" "),s("Picture")],1)},Zt=[],Kt={render:Xt,staticRenderFns:Zt},Lt=Kt,te=s("VU/8"),ee=te(Wt,Lt,!1,null,null,null),se=ee.exports,ae={name:"Register",data:function(){return{location:""}},created:function(){document.title="예람드리 | 등록 및 소개",this.location=window.location.pathname,window.scrollTo(0,0)},mounted:function(){document.title="예람드리 | 등록 및 소개",this.location=window.location.pathname,window.scrollTo(0,0)},components:{MainHeader:y,Introduce:pt,IntroducePicture:$t,Content:se,CopyRight:Mt}},ie=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"register-div"},[s("MainHeader",{attrs:{location:t.location}}),t._v(" "),s("IntroducePicture"),t._v(" "),s("Introduce"),t._v(" "),s("Content"),t._v(" "),s("CopyRight")],1)])},ne=[],re={render:ie,staticRenderFns:ne},ce=re,le=s("VU/8"),oe=le(ae,ce,!1,null,null,null),de=oe.exports,ve={name:"Introduce"},ue=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},_e=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"introduce_div"},[s("div",{staticClass:"introduce"},[s("h1",{staticClass:"qna_introduce"},[t._v("Yeramdri's  Time Table")])])])}],me={render:ue,staticRenderFns:_e},he=me,pe=s("VU/8"),Ce=pe(ve,he,!1,null,null,null),fe=Ce.exports,ge={name:"IntroducePicture"},ke=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},ye=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intruduce_picture_div"},[s("div",{staticClass:"schedule_introduce_picture"})])}],we={render:ke,staticRenderFns:ye},Ee=we,$e=s("VU/8"),Re=$e(ge,Ee,!1,null,null,null),xe=Re.exports,Fe={name:"Content"},Ve=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},Ue=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"schedule-content-div"},[s("div",{staticClass:"schedule-content-title"},[s("h3",[t._v("예람드리 일정을 알아보세요!")])]),t._v(" "),s("div",{staticClass:"yeramdri-schedule"},[s("img",{staticClass:"yeramdri-schedule-image",attrs:{src:"http://yeramdri.iptime.org/assets/yeramdriSchedule.png"}})]),t._v(" "),s("div",{staticClass:"yeramdri-address"},[s("div",{staticClass:"address-title"},[s("h3",[t._v("오시는 길")])]),t._v(" "),s("div",{staticClass:"address-content"},[s("div",{staticClass:"address-set",attrs:{id:"address1"}},[s("div",{attrs:{id:"address1_text1"}},[t._v("\n          + 장소\n        ")]),t._v(" "),s("div",{attrs:{id:"address1_text2"}},[t._v("\n          속리산 유스타운\n        ")]),t._v(" "),s("div",{staticClass:"show-place-div"},[s("a",{attrs:{target:"_blank",href:"http://www.sokrisan.co.kr/"}},[t._v("장소 보러가기")])])]),t._v(" "),s("div",{staticClass:"address-set",attrs:{id:"address2"}},[s("div",{attrs:{id:"address2_content"}})]),t._v(" "),s("div",{staticClass:"address-set",attrs:{id:"address3"}},[s("div",{attrs:{id:"address3_text1"}},[t._v("\n          충청북도 보은군 속리산면 법주사로 134 속리산유스타운\n        ")]),t._v(" "),s("div",{attrs:{id:"address3_text2"}},[t._v("\n          지번: 충청북도 보은군 속리산면 상판리 3-8\n        ")])]),t._v(" "),s("div",{staticClass:"address-set",attrs:{id:"address4"}},[s("div",{attrs:{id:"address4_content"}})]),t._v(" "),s("div",{staticClass:"address-set",attrs:{id:"address5"}},[s("div",{attrs:{id:"address5_content"}})]),t._v(" "),s("div",{staticClass:"address-set",attrs:{id:"address6"}},[s("div",{attrs:{id:"address6_text1"}},[t._v("\n          +\n        ")])]),t._v(" "),s("div",{staticClass:"address-set",attrs:{id:"address7"}},[s("div",{attrs:{id:"address7_content"}})]),t._v(" "),s("div",{staticClass:"address-set",attrs:{id:"address8"}},[s("div",{attrs:{id:"address8_text1"}},[t._v("\n          +\n        ")])])])])])}],Ie={render:Ve,staticRenderFns:Ue},qe=Ie,Me=s("VU/8"),Pe=Me(Fe,qe,!1,null,null,null),Se=Pe.exports,be={name:"Register",data:function(){return{location:""}},created:function(){document.title="예람드리 | 일정 및 장소",this.location=window.location.pathname,window.scrollTo(0,0)},mounted:function(){document.title="예람드리 | 일정 및 장소",this.location=window.location.pathname,window.scrollTo(0,0)},components:{MainHeader:y,Introduce:fe,IntroducePicture:xe,Content:Se,CopyRight:Mt}},He=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"schedule-div"},[s("MainHeader",{attrs:{location:t.location}}),t._v(" "),s("IntroducePicture"),t._v(" "),s("Introduce"),t._v(" "),s("Content"),t._v(" "),s("CopyRight")],1)])},Te=[],Ae={render:He,staticRenderFns:Te},Be=Ae,Ne=s("VU/8"),Qe=Ne(be,Be,!1,null,null,null),Ye=Qe.exports,je={name:"IntroducePicture"},ze=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},De=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intruduce_picture_div"},[s("div",{staticClass:"introduce_picture"})])}],Ge={render:ze,staticRenderFns:De},Je=Ge,Oe=s("VU/8"),We=Oe(je,Je,!1,null,null,null),Xe=We.exports,Ze={name:"Introduce"},Ke=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},Le=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"introduce_div"},[s("div",{staticClass:"introduce"},[s("h1",{staticClass:"qna_introduce"},[t._v("문의")])])])}],ts={render:Ke,staticRenderFns:Le},es=ts,ss=s("VU/8"),as=ss(Ze,es,!1,null,null,null),is=as.exports,ns=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},rs=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"map"},[s("iframe",{staticClass:"map_iframe",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.431548911186!2d126.9661643141948!3d37.54489523312705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca26c5a3730db%3A0x7cf12fb89053ef93!2z7IK87J286rWQ7ZqMROq0gA!5e0!3m2!1sko!2skr!4v1511787403168",frameborder:"0",allowfullscreen:""}})])}],cs={render:ns,staticRenderFns:rs},ls=cs,os=s("VU/8"),ds=os(null,ls,!1,null,null,null),vs=ds.exports,us={name:"Content"},_s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},ms=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"qna_content"},[s("div",{staticClass:"qna_content_row"},[s("div",{staticClass:"qna_content_left_col"},[s("img",{staticClass:"yeramdri_image",attrs:{src:"http://yeramdri.iptime.org/assets/yeramdri.png"}})]),t._v(" "),s("div",{staticClass:"qna_content_right_col"},[s("div",{staticClass:"qna_mail_phone"},[s("h1",[t._v("문의")]),t._v(" "),s("h3",[t._v("010-2975-9191")]),t._v(" "),s("h3",[t._v("yeramdri@gmail.com")])]),t._v(" "),s("div",{staticClass:"qna_address"},[s("h1",[t._v("주소")]),t._v(" "),s("h3",[t._v("서울특별시 용산구 청파로47길 34-2")])])])])])}],hs={render:_s,staticRenderFns:ms},ps=hs,Cs=s("VU/8"),fs=Cs(us,ps,!1,null,null,null),gs=fs.exports,ks={name:"QnA",data:function(){return{location:""}},created:function(){document.title="예람드리 | 문의",this.location=window.location.pathname,window.scrollTo(0,0)},mounted:function(){document.title="예람드리 | 문의",this.location=window.location.pathname,window.scrollTo(0,0)},components:{MainHeader:y,IntroducePicture:Xe,Introduce:is,Map:vs,Content:gs,CopyRight:Mt}},ys=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"qna-div"},[s("MainHeader",{attrs:{location:t.location}}),t._v(" "),s("IntroducePicture"),t._v(" "),s("Introduce"),t._v(" "),s("Content"),t._v(" "),s("Map"),t._v(" "),s("CopyRight")],1)])},ws=[],Es={render:ys,staticRenderFns:ws},$s=Es,Rs=s("VU/8"),xs=Rs(ks,$s,!1,null,null,null),Fs=xs.exports;i.a.use(_.a);var Vs=new _.a({mode:"history",routes:[{path:"/",name:"Home",component:lt},{path:"/register",name:"Register",component:de},{path:"/schedule",name:"Schedule",component:Ye},{path:"/qna",name:"QnA",component:Fs}]});s("cilB");i.a.config.productionTip=!1,new i.a({el:"#app",router:Vs,template:"<App/>",components:{App:u}})},cilB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1b65863b938e21a0f4d4.js.map