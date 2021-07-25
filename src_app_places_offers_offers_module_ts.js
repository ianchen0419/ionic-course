(self["webpackChunkionic_course"] = self["webpackChunkionic_course"] || []).push([["src_app_places_offers_offers_module_ts"],{

/***/ 5562:
/*!********************************************************!*\
  !*** ./src/app/places/offers/offers-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageRoutingModule": () => (/* binding */ OffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.page */ 4095);




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_0__.OffersPage
    },
    {
        path: 'new-offer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offers_new-offer_new-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new-offer/new-offer.module */ 4757)).then(m => m.NewOfferPageModule)
    },
    {
        path: 'edit-offer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-offer/edit-offer.module */ 6347)).then(m => m.EditOfferPageModule)
    },
    {
        path: 'offer-bookings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./offer-bookings/offer-bookings.module */ 2293)).then(m => m.OfferBookingsPageModule)
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ 1355:
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageModule": () => (/* binding */ OffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-routing.module */ 5562);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page */ 4095);







let OffersPageModule = class OffersPageModule {
};
OffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.OffersPageRoutingModule
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_1__.OffersPage]
    })
], OffersPageModule);



/***/ }),

/***/ 4095:
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPage": () => (/* binding */ OffersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offers.page.html */ 9970);
/* harmony import */ var _offers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page.scss */ 342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ 4395);





let OffersPage = class OffersPage {
    constructor(placesService) {
        this.placesService = placesService;
    }
    ngOnInit() {
        this.offers = this.placesService.places;
    }
};
OffersPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService }
];
OffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-offers',
        template: _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OffersPage);



/***/ }),

/***/ 342:
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9970:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <ion-list>\n          <ion-item *ngFor=\"let offer of offers\" [routerLink]=\"offer.id\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"offer.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h1>{{ offer.title }}</h1>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places_offers_offers_module_ts.js.map