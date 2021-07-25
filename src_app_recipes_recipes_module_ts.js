(self["webpackChunkionic_course"] = self["webpackChunkionic_course"] || []).push([["src_app_recipes_recipes_module_ts"],{

/***/ 65:
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-item/recipe-item.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeItemComponent": () => (/* binding */ RecipeItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipe_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipe-item.component.html */ 1332);
/* harmony import */ var _recipe_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-item.component.scss */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let RecipeItemComponent = class RecipeItemComponent {
    constructor() {
        // @Input() recipeItem: Recipe;
        this.recipeItem = {}; //暴力解測試Bug
    }
    ngOnInit() { }
};
RecipeItemComponent.ctorParameters = () => [];
RecipeItemComponent.propDecorators = {
    recipeItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RecipeItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-recipe-item',
        template: _raw_loader_recipe_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipe_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipeItemComponent);



/***/ }),

/***/ 8969:
/*!***************************************************!*\
  !*** ./src/app/recipes/recipes-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPageRoutingModule": () => (/* binding */ RecipesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes.page */ 9570);




const routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_0__.RecipesPage
    },
    {
        path: 'recipe-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./recipe-detail/recipe-detail.module */ 5914)).then(m => m.RecipeDetailPageModule)
    }
];
let RecipesPageRoutingModule = class RecipesPageRoutingModule {
};
RecipesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipesPageRoutingModule);



/***/ }),

/***/ 7776:
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPageModule": () => (/* binding */ RecipesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes-routing.module */ 8969);
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.page */ 9570);
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ 65);








let RecipesPageModule = class RecipesPageModule {
};
RecipesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _recipes_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecipesPageRoutingModule
        ],
        declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_1__.RecipesPage, _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_2__.RecipeItemComponent]
    })
], RecipesPageModule);



/***/ }),

/***/ 9570:
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesPage": () => (/* binding */ RecipesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipes.page.html */ 4704);
/* harmony import */ var _recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipes.page.scss */ 4248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.service */ 8174);





let RecipesPage = class RecipesPage {
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    ngOnInit() {
        // this.recipes=this.recipesService.getAllRecipes();
        console.log(this.recipes);
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter');
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.recipes = this.recipesService.getAllRecipes();
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }
};
RecipesPage.ctorParameters = () => [
    { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__.RecipesService }
];
RecipesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recipes',
        template: _raw_loader_recipes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecipesPage);



/***/ }),

/***/ 2597:
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-item/recipe-item.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 4248:
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1332:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item [routerLink]=\"['/recipes', recipeItem.id]\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipeItem.imageUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label> {{ recipeItem.title }} </ion-label>\n</ion-item>\n");

/***/ }),

/***/ 4704:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Recipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-recipe-item *ngFor=\"let recipe of recipes\" [recipeItem]=\"recipe\"></app-recipe-item>\n   </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_recipes_recipes_module_ts.js.map