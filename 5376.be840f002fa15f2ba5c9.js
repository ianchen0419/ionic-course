(self.webpackChunkionic_course=self.webpackChunkionic_course||[]).push([[5376],{5376:(n,i,o)=>{"use strict";o.r(i),o.d(i,{AuthPageModule:()=>Z});var t=o(1116),e=o(1462),r=o(6611),c=o(4989),s=o(8619),u=o(8845);function a(n,i){1&n&&s._UZ(0,"ion-spinner",4)}function l(n,i){if(1&n){const n=s.EpF();s.TgZ(0,"ion-button",5),s.NdJ("click",function(){return s.CHM(n),s.oxw().onLogin()}),s._uU(1,"Login"),s.qZA()}}const p=[{path:"",component:(()=>{class n{constructor(n,i){this.authService=n,this.router=i,this.isLoading=!1}ngOnInit(){}onLogin(){this.authService.login(),this.isLoading=!0,setTimeout(()=>{this.router.navigateByUrl("/places/tabs/discover"),this.isLoading=!1},1e3)}}return n.\u0275fac=function(i){return new(i||n)(s.Y36(u.e),s.Y36(c.F0))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-auth"]],decls:13,vars:2,consts:[["position","floating"],[1,"ion-text-center"],["color","primary",4,"ngIf"],["color","primary",3,"click",4,"ngIf"],["color","primary"],["color","primary",3,"click"]],template:function(n,i){1&n&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-title"),s._uU(3,"Authentication"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(4,"ion-content"),s.TgZ(5,"ion-list"),s.TgZ(6,"ion-item"),s.TgZ(7,"ion-label",0),s._uU(8,"E-Mail"),s.qZA(),s._UZ(9,"ion-input"),s.qZA(),s.qZA(),s.TgZ(10,"div",1),s.YNc(11,a,1,0,"ion-spinner",2),s.qZA(),s.YNc(12,l,2,0,"ion-button",3),s.qZA()),2&n&&(s.xp6(11),s.Q6J("ngIf",i.isLoading),s.xp6(1),s.Q6J("ngIf",!i.isLoading))},directives:[r.Gu,r.sr,r.wd,r.W2,r.q_,r.Ie,r.Q$,r.pK,r.j9,t.O5,r.PQ,r.YG],styles:[""]}),n})()}];let g=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[t.ez,e.u5,r.Pc,g]]}),n})()}}]);