(self.webpackChunkionic_course=self.webpackChunkionic_course||[]).push([[8592],{8232:(t,e,n)=>{"use strict";n.d(e,{c:()=>s});var i=n(2322),o=n(3320),r=n(8520);const s=(t,e)=>{let n,s;const c=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),a(r,o)):l()},a=(t,e)=>{n=t,s||(s=n);const o=n;(0,i.c)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,i.c)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return(0,r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),(0,o.h)(),s=void 0}})}},4068:(t,e,n)=>{"use strict";n.d(e,{g:()=>i});const i=(t,e,n,i,s)=>r(t[1],e[1],n[1],i[1],s).map(r=>o(t[0],e[0],n[0],i[0],r)),o=(t,e,n,i,o)=>o*(3*e*Math.pow(o-1,2)+o*(-3*n*o+3*n+i*o))-t*Math.pow(o-1,3),r=(t,e,n,i,o)=>s((i-=o)-3*(n-=o)+3*(e-=o)-(t-=o),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),s=(t,e,n,i)=>{if(0===t)return((t,e,n)=>{const i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]})(e,n,i);const o=(3*(n/=t)-(e/=t)*e)/3,r=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===o)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-o),-Math.sqrt(-o)];const s=Math.pow(r/2,2)+Math.pow(o/3,3);if(0===s)return[Math.pow(r/2,.5)-e/3];if(s>0)return[Math.pow(-r/2+Math.sqrt(s),1/3)-Math.pow(r/2+Math.sqrt(s),1/3)-e/3];const c=Math.sqrt(Math.pow(-o/3,3)),a=Math.acos(-r/(2*Math.sqrt(Math.pow(-o/3,3)))),l=2*Math.pow(c,1/3);return[l*Math.cos(a/3)-e/3,l*Math.cos((a+2*Math.PI)/3)-e/3,l*Math.cos((a+4*Math.PI)/3)-e/3]}},9498:(t,e,n)=>{"use strict";n.d(e,{a:()=>o,d:()=>r});var i=n(1843);const o=async(t,e,n,o,r)=>{if(t)return t.attachViewToDom(e,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),await new Promise(t=>(0,i.c)(s,t)),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},3320:(t,e,n)=>{"use strict";n.d(e,{a:()=>r,b:()=>s,c:()=>o,d:()=>a,h:()=>c});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},7942:(t,e,n)=>{"use strict";n.d(e,{s:()=>i});const i=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!s()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=r(t);for(let e=0;e<s.length;e++)o(s[e])}});const i=r(e);for(let t=0;t<i.length;t++)o(i[t]);const c=document.createElement("div");c.appendChild(e);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!c.includes(i.toLowerCase())){t.removeAttribute(i);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=r(t);for(let n=0;n<e.length;n++)o(e[n])},r=t=>null!=t.children?t.children:t.childNodes,s=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},9926:(t,e,n)=>{"use strict";n.d(e,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},4843:(t,e,n)=>{"use strict";n.d(e,{c:()=>o,g:()=>r,h:()=>i,o:()=>c});const i=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},7836:(t,e,n)=>{"use strict";n.r(e),n.d(e,{PlaceDetailPageModule:()=>d});var i=n(1116),o=n(1462),r=n(6611),s=n(4989),c=n(8619);let a=(()=>{class t{constructor(t){this.modalCtrl=t}ngOnInit(){}onCancel(){this.modalCtrl.dismiss(null,"cancel")}onBookPlace(){this.modalCtrl.dismiss({message:"this is a dummy"},"confirm")}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(r.IN))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-create-booking"]],inputs:{selectedPlace:"selectedPlace"},decls:12,vars:2,consts:[["slot","primary"],[3,"click"],["name","close"],[1,"ion-text-center","ion-padding"],["color","primary",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3),c.qZA(),c.TgZ(4,"ion-buttons",0),c.TgZ(5,"ion-button",1),c.NdJ("click",function(){return e.onCancel()}),c._UZ(6,"ion-icon",2),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content",3),c.TgZ(8,"p"),c._uU(9),c.qZA(),c.TgZ(10,"ion-button",4),c.NdJ("click",function(){return e.onBookPlace()}),c._uU(11,"Book!"),c.qZA(),c.qZA()),2&t&&(c.xp6(3),c.Oqu(e.selectedPlace.title),c.xp6(6),c.Oqu(e.selectedPlace.description))},directives:[r.Gu,r.sr,r.wd,r.Sm,r.YG,r.gu,r.W2],styles:[""]}),t})();var l=n(5457);const u=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o){this.navCtrl=t,this.route=e,this.placesService=n,this.modalCtrl=i,this.actionSheetCtrl=o}ngOnInit(){this.route.params.subscribe(t=>{t.placeId?this.place=this.placesService.getPlace(t.placeId):this.navCtrl.navigateBack("/places/tabs/discover")})}onBookPlace(){this.actionSheetCtrl.create({header:"Choose an Action",buttons:[{text:"Select Date",handler:()=>{this.openBookingModal("select")}},{text:"Random Date",handler:()=>{this.openBookingModal("random")}},{text:"Cancel",role:"cancel"}]}).then(t=>{t.present()})}openBookingModal(t){console.log(t),this.modalCtrl.create({component:a,componentProps:{selectedPlace:this.place}}).then(t=>(t.present(),t.onDidDismiss())).then(t=>{console.log(t.data,t.role),"confirm"===t.role&&console.log("BOOKED")})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(r.SH),c.Y36(s.gz),c.Y36(l.E),c.Y36(r.IN),c.Y36(r.BX))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-place-detail"]],decls:9,vars:1,consts:[["slot","start"],["defaultHref","/places/tabs/discover"],["color","primary",1,"ion-margin",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c._UZ(3,"ion-back-button",1),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content"),c.TgZ(7,"ion-button",2),c.NdJ("click",function(){return e.onBookPlace()}),c._uU(8,"Book"),c.qZA(),c.qZA()),2&t&&(c.xp6(5),c.Oqu(e.place.title))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.YG],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,o.u5,r.Pc,p]]}),t})()},906:(t,e,n)=>{"use strict";n.r(e),n.d(e,{EditOfferPageModule:()=>p});var i=n(1116),o=n(1462),r=n(6611),s=n(4989),c=n(8619),a=n(5457);const l=[{path:"",component:(()=>{class t{constructor(t,e,n){this.route=t,this.placesService=e,this.navCtrl=n}ngOnInit(){this.route.params.subscribe(t=>{t.placeId?this.place=this.placesService.getPlace(t.placeId):this.navCtrl.navigateBack("/places/tabs/offers")})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(s.gz),c.Y36(a.E),c.Y36(r.SH))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-edit-offer"]],decls:7,vars:1,consts:[["slot","start"],[3,"defaultHref"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c._UZ(3,"ion-back-button",1),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5,"Edit Offer"),c.qZA(),c.qZA(),c.qZA(),c._UZ(6,"ion-content")),2&t&&(c.xp6(3),c.Q6J("defaultHref","/places/tabs/offers/"+e.place.id))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(l)],s.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,o.u5,r.Pc,u]]}),t})()},4622:(t,e,n)=>{"use strict";n.r(e),n.d(e,{OfferBookingsPageModule:()=>d});var i=n(1116),o=n(1462),r=n(6611),s=n(4989),c=n(8619),a=n(5457);const l=function(t){return["../edit",t]},u=[{path:"",component:(()=>{class t{constructor(t,e,n){this.route=t,this.navCtrl=e,this.placesService=n}ngOnInit(){this.route.params.subscribe(t=>{t.placeId?this.place=this.placesService.getPlace(t.placeId):this.navCtrl.navigateBack("/places/tabs/offers")})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(s.gz),c.Y36(r.SH),c.Y36(a.E))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-offer-bookings"]],decls:9,vars:4,consts:[["slot","start"],["defaultHref","/places/tabs/offers"],["color","primary",1,"ion-margin",3,"routerLink"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",0),c._UZ(3,"ion-back-button",1),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content"),c.TgZ(7,"ion-button",2),c._uU(8,"Edit"),c.qZA(),c.qZA()),2&t&&(c.xp6(5),c.Oqu(e.place.title),c.xp6(2),c.Q6J("routerLink",c.VKq(2,l,e.place.id)))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.YG,r.YI,s.rH],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,o.u5,r.Pc,p]]}),t})()},5457:(t,e,n)=>{"use strict";n.d(e,{E:()=>r});class i{constructor(t,e,n,i,o){this.id=t,this.title=e,this.description=n,this.imageUrl=i,this.price=o}}var o=n(8619);let r=(()=>{class t{constructor(){this._places=[new i("p1","Manhattan Mansion","In the heart of New Your City.","https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg",149.99),new i("p2","L'Amour Toujours","A romattic place in Paris!","https://live.staticflickr.com/614/31628747276_00dedc1560_b.jpg",189.99),new i("p3","The Foggy Palace","Not your average city trip!","https://i1.trekearth.com/photos/138102/dsc_0681.jpg",99.99)]}get places(){return[...this._places]}getPlace(t){return Object.assign({},this._places.find(e=>e.id===t))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},515:(t,e,n)=>{"use strict";n.r(e),n.d(e,{RecipeDetailPageModule:()=>d});var i=n(1116),o=n(1462),r=n(6611),s=n(4989),c=n(8619),a=n(2454);function l(t,e){if(1&t&&(c.TgZ(0,"ion-item"),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.Oqu(t)}}const u=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.activatedRoute=t,this.recipesService=e,this.router=n,this.alertCtrl=i}ngOnInit(){this.activatedRoute.params.subscribe(t=>{t.recipeId?this.loadedRecipe=this.recipesService.getRecipe(t.recipeId):this.router.navigate(["/recipes"])})}onDeleteRecipe(){this.alertCtrl.create({header:"Are you sure?",message:"Do you really want to delete the recipe?",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",handler:()=>{this.recipesService.deleteRecipe(this.loadedRecipe.id),this.router.navigate(["/recipes"])}}]}).then(t=>{t.present()})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(s.gz),c.Y36(a.v),c.Y36(s.F0),c.Y36(r.Br))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-recipe-detail"]],decls:18,vars:3,consts:[["color","primary"],["slot","start"],["slot","primary"],[3,"click"],["name","trash","slot","icon-only"],[1,"ion-no-padding"],[3,"src"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c._UZ(3,"ion-back-button"),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5),c.qZA(),c.TgZ(6,"ion-buttons",2),c.TgZ(7,"ion-button",3),c.NdJ("click",function(){return e.onDeleteRecipe()}),c._UZ(8,"ion-icon",4),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"ion-content"),c.TgZ(10,"ion-grid",5),c.TgZ(11,"ion-row"),c.TgZ(12,"ion-col",5),c._UZ(13,"ion-img",6),c.qZA(),c.qZA(),c.TgZ(14,"ion-row"),c.TgZ(15,"ion-col"),c.TgZ(16,"ion-list"),c.YNc(17,l,2,1,"ion-item",7),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(5),c.Oqu(e.loadedRecipe.title),c.xp6(8),c.Q6J("src",e.loadedRecipe.imageUrl),c.xp6(4),c.Q6J("ngForOf",e.loadedRecipe.ingredients))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.YG,r.gu,r.W2,r.jY,r.Nd,r.wI,r.Xz,r.q_,i.sg,r.Ie],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,o.u5,r.Pc,p]]}),t})()},2454:(t,e,n)=>{"use strict";n.d(e,{v:()=>o});var i=n(8619);let o=(()=>{class t{constructor(){this.recipes=[{id:"r1",title:"Schnitzel",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/440px-Wiener-Schnitzel02.jpg",ingredients:["French Fries","Pork Meat","Salad"]},{id:"r2",title:"Spaghetti",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/9/98/Spaghetti_all%27_arrabbiata.jpg?1625808365108",ingredients:["Spaghetti","Meat","Tomatoes"]}]}getAllRecipes(){return[...this.recipes]}getRecipe(t){return Object.assign({},this.recipes.find(e=>e.id===t))}deleteRecipe(t){this.recipes=this.recipes.filter(e=>e.id!==t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);