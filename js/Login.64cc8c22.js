(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"0f71":function(e,t,n){e.exports=n.p+"img/user.3d05d785.png"},"2f9a":function(e,t,n){e.exports=n.p+"img/wechat-login.4d3e582a.png"},9828:function(e,t,n){"use strict";n("ed55")},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=n("0f71"),a=n.n(c),r=n("c119"),s=n.n(r),i=n("2f9a"),d=n.n(i),p=Object(o["K"])("data-v-628758f9");Object(o["w"])("data-v-628758f9");var l={class:"login-bg"},g={class:"login-contain"},u=Object(o["g"])("div",{class:"login-header"},[Object(o["g"])("p",null,"欢迎登录")],-1),b={class:"form-group"},f={class:"form-item"},j=Object(o["g"])("label",{for:"username"},[Object(o["g"])("img",{src:a.a})],-1),O={class:"form-item"},w=Object(o["g"])("label",{for:"password"},[Object(o["g"])("img",{src:s.a,alt:""})],-1),m={class:"button-group"},v=Object(o["g"])("div",{class:"order-login"},[Object(o["g"])("p",{class:"order-login-line"},"其他登录方式"),Object(o["g"])("div",{class:"order-login-box"},[Object(o["g"])("div",null,[Object(o["g"])("a",{href:"#"},[Object(o["g"])("img",{src:d.a,alt:"",style:{width:"45px",height:"45px"}}),Object(o["g"])("p",null,"微信登录")])])])],-1);Object(o["u"])();var h=p((function(e,t,n,c,a,r){return Object(o["t"])(),Object(o["d"])("div",l,[Object(o["g"])("div",g,[u,Object(o["g"])("div",b,[Object(o["g"])("div",f,[j,Object(o["I"])(Object(o["g"])("input",{id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.phone=e}),placeholder:"请输入手机号码",autocomplete:"new-password"},null,512),[[o["F"],a.phone]])]),Object(o["g"])("div",O,[w,Object(o["I"])(Object(o["g"])("input",{id:"password",type:"password",placeholder:"请输入密码","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e}),autocomplete:"new-password"},null,512),[[o["F"],a.password]])])]),Object(o["g"])("div",m,[Object(o["g"])("button",{class:"login-btn",id:"doLogin",onClick:t[3]||(t[3]=function(){return r.loginEvent&&r.loginEvent.apply(r,arguments)})},"登录")]),v])])})),x=n("1da1"),k=(n("96cf"),n("ac1f"),n("5319"),{data:function(){return{phone:"",password:""}},methods:{loginEvent:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("phoneLogin",{phone:e.phone,password:e.password});case 2:n=t.sent,200==n.data.code&&e.$router.replace("/me");case 4:case"end":return t.stop()}}),t)})))()}}});n("9828");k.render=h,k.__scopeId="data-v-628758f9";t["default"]=k},c119:function(e,t,n){e.exports=n.p+"img/password.f923bc21.png"},ed55:function(e,t,n){}}]);
//# sourceMappingURL=Login.64cc8c22.js.map