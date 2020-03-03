function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_main_products_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products-main/products-main.component */
    "./src/app/products-main/products-main.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-products-main");
        }
      },
      directives: [_products_main_products_main_component__WEBPACK_IMPORTED_MODULE_1__["ProductsMainComponent"]],
      styles: ["* {\n  box-sizing: border-box;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cblxuIl19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _products_main_products_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products-main/products-main.component */
    "./src/app/products-main/products-main.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], _products_main_products_main_component__WEBPACK_IMPORTED_MODULE_4__["ProductsMainComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], _products_main_products_main_component__WEBPACK_IMPORTED_MODULE_4__["ProductsMainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants/products.ts":
  /*!***************************************!*\
    !*** ./src/app/constants/products.ts ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppConstantsProductsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = [{
      Id: 'jenlooper-cactus',
      Maker: '@jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg',
      Url: 'https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393',
      Title: 'The Quantified Cactus: An Easy Plant Soil Moisture Sensor',
      Description: 'This project is a good learning project to get comfortable with soldering and programming an Arduino.',
      Rating: 3.5
    }, {
      Id: 'jenlooper-light',
      Maker: 'jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg',
      Url: 'https://www.hackster.io/agent-hawking-1/book-light-dee7e4',
      Title: 'A beautiful switch-on book light',
      Description: 'Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.',
      Rating: 4.4
    }, {
      Id: 'jenlooper-lightshow',
      Maker: '@jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png',
      Url: 'https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db',
      Title: 'Bling your Laptop with an Internet-Connected Light Show',
      Description: 'Create a web-connected light-strip API controllable from your website, using the Particle.io.',
      Rating: 4.7
    }, {
      Id: 'jenlooper-survival',
      Maker: 'jenlooper',
      img: 'https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg',
      Url: 'https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb',
      Title: 'Create a Compact Survival Kit with LED Track Lighting',
      Description: 'Use an Altoids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster',
      Rating: 3.9
    }, {
      Id: 'sailorhg-bubblesortpic',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png',
      Url: 'https://twitter.com/sailorhg/status/1090107740049952770',
      Title: 'Bubblesort Visualization',
      Description: "Visualization of sailor scouts sorted by bubblesort algorithm by their planet's distance from the sun",
      Rating: 5
    }, {
      Id: 'sailorhg-corsage',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png',
      Url: 'https://twitter.com/sailorhg/status/1090113666911891456',
      Title: 'Light-up Corsage',
      Description: 'Light-up corsage I made with my summer intern.',
      Rating: 4.4
    }, {
      Id: 'sailorhg-kit',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png',
      Url: 'https://twitter.com/sailorhg/status/1090122822007963648',
      Title: 'Pastel hardware kit',
      Description: 'Pastel hardware kits complete with custom manufactured pastel alligator clips.',
      Rating: 3.7
    }, {
      Id: 'sailorhg-led',
      Maker: 'sailorhg',
      img: 'https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg',
      Url: 'https://twitter.com/sailorhg/status/1090117277540745216',
      Title: 'Heart-shaped LED',
      Description: 'custom molded heart shaped LED with sprinkles.',
      Rating: 5
    }, {
      Id: 'selinazawacki-soi-shirt',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png',
      Url: 'https://www.instagram.com/p/BNvESj-j8PI/',
      Title: 'Black Sweatshirt',
      Description: 'Black sweatshirt hoody with the Sick of the Internet logo.',
      Rating: 4.8
    }, {
      Id: 'selinazawacki-soi-pins',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567059-142c1c80-aa33-11e9-939b-2ecf4492786d.png',
      Url: 'https://www.instagram.com/p/BNm6hZzDoEF/',
      Title: 'Sick of the Internet Pins',
      Description: 'Still some time to enter the pin/sticker giveaway! ',
      Rating: 3.3
    }, {
      Id: 'vogueandcode-hipster-dev-bro',
      Maker: 'vogueandcode',
      img: 'https://user-images.githubusercontent.com/41929050/61567061-14c4b300-aa33-11e9-9fee-63ff2c0c9823.png',
      Url: 'https://www.vogueandcode.com/shop/hipster-dev-bro',
      Title: 'Hipster Dev',
      Description: 'Hipster Dev is busy coding away while styled in a camo jacket and orange beanie.',
      Rating: 4.1
    }, {
      Id: 'vogueandcode-pretty-girls-code-tee',
      Maker: 'vogueandcode',
      img: 'https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png',
      Url: 'https://www.vogueandcode.com/shop/pretty-girls-code-tee',
      Title: 'Pretty Girls Code Tee',
      Description: "Everyone\u2019s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.",
      Rating: 4.3
    }, {
      Id: 'vogueandcode-ruby-sis-2',
      Maker: 'vogueandcode',
      img: 'https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png',
      Url: 'https://www.vogueandcode.com/shop/ruby-sis-2',
      Title: 'Ruby Sis',
      Description: 'Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!',
      Rating: 4
    }, {
      Id: 'selinazawacki-moon',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png',
      Url: 'https://www.instagram.com/p/BFktVYPinKQ/',
      Title: 'Holographic Dark Moon Necklace',
      Description: "Not sure if I'll be making more, get it while I have it in the store.",
      Rating: 4.1
    }, {
      Id: 'selinazawacki-shirt',
      Maker: 'selinazawacki',
      img: 'https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png',
      Url: 'https://www.instagram.com/p/BEXlpiZCnJ3',
      Title: 'Floppy Crop',
      Description: 'Used up the Diskette fabric today to make 2 of these crops.',
      Rating: 3.6
    }];
    /***/
  },

  /***/
  "./src/app/product-list/product-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-list/product-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductListComponent_li_2_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_li_2_button_2_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.addFavorite(product_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add to Favorites ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductListComponent_li_2_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_li_2_button_3_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.removeFavorite(product_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove from Favorites ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductListComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_li_2_button_2_Template, 2, 0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_li_2_button_3_Template, 2, 0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go to product page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isActiveAddFavorite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActiveAddFavorite);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.Title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.Description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", product_r1.Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", product_r1.Rating, "");
      }
    }

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent() {
        _classCallCheck(this, ProductListComponent);

        this.addedFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removedFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProductListComponent, [{
        key: "addFavorite",
        value: function addFavorite(selectedProduct) {
          this.addedFavorite.emit(selectedProduct);
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(selectedProduct) {
          this.removedFavorite.emit(selectedProduct);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)();
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      inputs: {
        isActiveAddFavorite: "isActiveAddFavorite",
        products: "products"
      },
      outputs: {
        addedFavorite: "addedFavorite",
        removedFavorite: "removedFavorite"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "product"], [1, "product__list"], ["class", "product__item", 4, "ngFor", "ngForOf"], [1, "product__item"], ["alt", "product.Title", 1, "product__img", 3, "src"], ["class", "product__button button", 3, "click", 4, "ngIf"], [1, "product__block"], [1, "product__title"], [3, "href"], [1, "product__rating"], [1, "product__button", "button", 3, "click"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_li_2_Template, 13, 7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".product[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.product__item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 80% auto 200px;\n  grid-template-rows: 50px 210px 60px 20px;\n  list-style-type: none;\n  border-bottom: 1px solid #DEDEDE;\n  padding: 10px 20px;\n}\n\n.product__img[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  max-height: 250px;\n}\n\n.product__block[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n\n.product__button[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-row-start: 1;\n}\n\n.product__rating[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-row-start: 3;\n  align-self: center;\n  justify-self: center;\n}\n\n.product__title[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJvZHVjdF9faXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIGF1dG8gMjAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAyMTBweCA2MHB4IDIwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERURFREU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLnByb2R1Y3RfX2ltZyB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDI7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuXG4ucHJvZHVjdF9fYmxvY2sge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgZ3JpZC1yb3ctZW5kOiA0O1xufVxuXG4ucHJvZHVjdF9fYnV0dG9uIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xufVxuXG4ucHJvZHVjdF9fcmF0aW5nIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucHJvZHVjdF9fdGl0bGUge1xuICBjb2xvcjogIzRDQUY1MDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.css']
        }]
      }], function () {
        return [];
      }, {
        isActiveAddFavorite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        products: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addedFavorite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        removedFavorite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products-main/products-main.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/products-main/products-main.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProductsMainComponent */

  /***/
  function srcAppProductsMainProductsMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsMainComponent", function () {
      return ProductsMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants/products */
    "./src/app/constants/products.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");

    var ProductsMainComponent =
    /*#__PURE__*/
    function () {
      function ProductsMainComponent() {
        _classCallCheck(this, ProductsMainComponent);

        this.products = _constants_products__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.filteredProducts = _constants_products__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.favoriteProduct = [];
        this.isActiveAddFavorite = true;
        this.isSortToGrowe = "default";
      }

      _createClass(ProductsMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search(inputEl) {
          var value = inputEl.value;
          this.filteredProducts = this.products.filter(function (product) {
            return product.Title.toLowerCase().match(value.toLowerCase());
          });
        }
      }, {
        key: "isSort",
        value: function isSort(sortType) {
          this.isSortToGrowe = sortType;
          console.log(this.isSortToGrowe);
          this.filteredProducts = this.products.sort(function (a, b) {
            if (sortType === "inOrderDown") {
              return a.Rating - b.Rating;
            } else if (sortType === "inOrderUp") {
              return b.Rating - a.Rating;
            }
          });
        }
      }, {
        key: "addedFavorite",
        value: function addedFavorite(selectedProduct) {
          this.isActiveAddFavorite = true;
          this.favoriteProduct.push(selectedProduct);
          this.filteredProducts.splice(this.filteredProducts.indexOf(selectedProduct), 1);
        }
      }, {
        key: "removedFavorite",
        value: function removedFavorite(selectedProduct) {
          this.filteredProducts.push(selectedProduct);
          this.isSort(this.isSortToGrowe);
          this.favoriteProduct.splice(this.favoriteProduct.indexOf(selectedProduct), 1);
        }
      }]);

      return ProductsMainComponent;
    }();

    ProductsMainComponent.ɵfac = function ProductsMainComponent_Factory(t) {
      return new (t || ProductsMainComponent)();
    };

    ProductsMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsMainComponent,
      selectors: [["app-products-main"]],
      decls: 19,
      vars: 3,
      consts: [[1, "search"], [1, "search__label"], ["type", "text", 1, "search__input", 3, "input"], ["searchInput", ""], [1, "button", 3, "click"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "26", "height", "28", "viewBox", "0 0 26 28"], ["d", "M25.172 13c0 0.531-0.219 1.047-0.578 1.406l-10.172 10.187c-0.375 0.359-0.891 0.578-1.422 0.578s-1.047-0.219-1.406-0.578l-10.172-10.187c-0.375-0.359-0.594-0.875-0.594-1.406s0.219-1.047 0.594-1.422l1.156-1.172c0.375-0.359 0.891-0.578 1.422-0.578s1.047 0.219 1.406 0.578l4.594 4.594v-11c0-1.094 0.906-2 2-2h2c1.094 0 2 0.906 2 2v11l4.594-4.594c0.359-0.359 0.875-0.578 1.406-0.578s1.047 0.219 1.422 0.578l1.172 1.172c0.359 0.375 0.578 0.891 0.578 1.422z"], ["d", "M25.172 15.172c0 0.531-0.219 1.031-0.578 1.406l-1.172 1.172c-0.375 0.375-0.891 0.594-1.422 0.594s-1.047-0.219-1.406-0.594l-4.594-4.578v11c0 1.125-0.938 1.828-2 1.828h-2c-1.062 0-2-0.703-2-1.828v-11l-4.594 4.578c-0.359 0.375-0.875 0.594-1.406 0.594s-1.047-0.219-1.406-0.594l-1.172-1.172c-0.375-0.375-0.594-0.875-0.594-1.406s0.219-1.047 0.594-1.422l10.172-10.172c0.359-0.375 0.875-0.578 1.406-0.578s1.047 0.203 1.422 0.578l10.172 10.172c0.359 0.375 0.578 0.891 0.578 1.422z"], [1, "favorite"], [3, "products", "isActiveAddFavorite", "removedFavorite"], [3, "products", "addedFavorite"]],
      template: function ProductsMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductsMainComponent_Template_input_input_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.search(_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsMainComponent_Template_button_click_6_listener($event) {
            return ctx.isSort("inOrderDown");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsMainComponent_Template_button_click_11_listener($event) {
            return ctx.isSort("inOrderUp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-product-list", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removedFavorite", function ProductsMainComponent_Template_app_product_list_removedFavorite_17_listener($event) {
            return ctx.removedFavorite($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-product-list", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addedFavorite", function ProductsMainComponent_Template_app_product_list_addedFavorite_18_listener($event) {
            return ctx.addedFavorite($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.favoriteProduct)("isActiveAddFavorite", ctx.isActiveAddFavorite);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx.filteredProducts);
        }
      },
      directives: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]],
      styles: [".search[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: #90F7DD83;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  padding: 2% 13%;\n  margin: 0;\n}\n\n.favorite[_ngcontent-%COMP%] {\n  background-color: #90F7DD33;\n}\n\n.search__input[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.search__label[_ngcontent-%COMP%] {\n  padding-right: 2%;\n  color: #4CAF50;\n  font-weight: 800;\n  font-size: 35px;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMtbWFpbi9wcm9kdWN0cy1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsMEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLW1haW4vcHJvZHVjdHMtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MEY3REQ4MztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDIlIDEzJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmF2b3JpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBGN0REMzM7XG59XG5cbi5zZWFyY2hfX2lucHV0IHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnNlYXJjaF9fbGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgY29sb3I6ICM0Q0FGNTA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-main',
          templateUrl: './products-main.component.html',
          styleUrls: ['./products-main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/natali/git_dev/Homework-Angular-Components-Templates/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map