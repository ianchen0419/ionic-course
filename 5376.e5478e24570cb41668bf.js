(self.webpackChunkionic_course=self.webpackChunkionic_course||[]).push([[5376],{5376:(i,n,o)=>{"use strict";o.r(n),o.d(n,{AuthPageModule:()=>Z});var t=o(1116),e=o(1462),s=o(6611),l=o(4989),r=o(8619),c=o(8845);function a(i,n){1&i&&(r.TgZ(0,"ion-item",12),r.TgZ(1,"ion-label",13),r._uU(2,"Should be a valid email address."),r.qZA(),r.qZA())}function u(i,n){1&i&&(r.TgZ(0,"ion-item",12),r.TgZ(1,"ion-label",13),r._uU(2,"Should at least be 6 characters long."),r.qZA(),r.qZA())}function g(i,n){if(1&i){const i=r.EpF();r.TgZ(0,"ion-button",14),r.NdJ("click",function(){return r.CHM(i),r.oxw().onLogin()}),r._uU(1,"Login"),r.qZA()}if(2&i){r.oxw();const i=r.MAs(6);r.Q6J("disabled",!i.valid)}}const d=[{path:"",component:(()=>{class i{constructor(i,n,o){this.authService=i,this.router=n,this.loadingCtrl=o,this.isLoading=!1,this.isLogin=!0}ngOnInit(){}onLogin(){this.isLoading=!0,this.authService.login(),this.loadingCtrl.create({keyboardClose:!0,message:"Logging in..."}).then(i=>{i.present(),setTimeout(()=>{this.router.navigateByUrl("/places/tabs/discover"),i.dismiss(),this.isLoading=!1},1e3)})}onSubmit(i){i.valid&&console.log(i.value.email,i.value.password)}onSwitchAuthMode(){this.isLogin=!this.isLogin}}return i.\u0275fac=function(n){return new(n||i)(r.Y36(c.e),r.Y36(l.F0),r.Y36(s.HT))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-auth"]],decls:28,vars:5,consts:[[1,"ion-padding"],[3,"ngSubmit"],["f","ngForm"],["size-sm","6","offset-sm","3"],["position","floating"],["type","email","ngModel","","name","email","required","","email",""],["emailCtrl","ngModel"],["lines","none",4,"ngIf"],["type","password","ngModel","","name","password","required","","minlength","6"],["passwordCtrl","ngModel"],["color","primary","type","button","fill","clear","expand","block",3,"click"],["color","primary","type","submit","expand","block",3,"disabled","click",4,"ngIf"],["lines","none"],["color","danger",1,"ion-text-right"],["color","primary","type","submit","expand","block",3,"disabled","click"]],template:function(i,n){if(1&i){const i=r.EpF();r.TgZ(0,"ion-header"),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-title"),r._uU(3),r.qZA(),r.qZA(),r.qZA(),r.TgZ(4,"ion-content",0),r.TgZ(5,"form",1,2),r.NdJ("ngSubmit",function(){r.CHM(i);const o=r.MAs(6);return n.onSubmit(o)}),r.TgZ(7,"ion-grid"),r.TgZ(8,"ion-row"),r.TgZ(9,"ion-col",3),r.TgZ(10,"ion-list"),r.TgZ(11,"ion-item"),r.TgZ(12,"ion-label",4),r._uU(13,"E-Mail"),r.qZA(),r._UZ(14,"ion-input",5,6),r.qZA(),r.YNc(16,a,3,0,"ion-item",7),r.TgZ(17,"ion-item"),r.TgZ(18,"ion-label",4),r._uU(19,"Password"),r.qZA(),r._UZ(20,"ion-input",8,9),r.qZA(),r.YNc(22,u,3,0,"ion-item",7),r.qZA(),r.qZA(),r.qZA(),r.TgZ(23,"ion-row"),r.TgZ(24,"ion-col",3),r.TgZ(25,"ion-button",10),r.NdJ("click",function(){return n.onSwitchAuthMode()}),r._uU(26),r.qZA(),r.YNc(27,g,2,1,"ion-button",11),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&i){const i=r.MAs(15),o=r.MAs(21);r.xp6(3),r.Oqu(n.isLogin?"Login":"Signup"),r.xp6(13),r.Q6J("ngIf",!i.valid&&i.touched),r.xp6(6),r.Q6J("ngIf",!o.valid&&o.touched),r.xp6(4),r.hij("Switch to ",n.isLogin?"Signup":"Login",""),r.xp6(1),r.Q6J("ngIf",!n.isLoading)}},directives:[s.Gu,s.sr,s.wd,s.W2,e._Y,e.JL,e.F,s.jY,s.Nd,s.wI,s.q_,s.Ie,s.Q$,s.pK,s.j9,e.JJ,e.On,e.Q7,e.on,t.O5,e.wO,s.YG],styles:[""]}),i})()}];let p=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[l.Bz.forChild(d)],l.Bz]}),i})(),Z=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[[t.ez,e.u5,s.Pc,p]]}),i})()}}]);