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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n</head>\n<app-patient-search></app-patient-search>\n<div id=\"menu\">\n  <patient-list></patient-list>\n</div>\n<div id=\"content\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-patient/create-patient.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-patient/create-patient.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreatePatientCreatePatientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 class=\"text-center\">New Patient</h4>\n<div>\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name: </label>\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"patient.firstName\"\n            name=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name: </label>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"patient.lastName\" name=\"lastName\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"dateOfBirth\">Date of birth: </label>\n        <input  type=\"date\" class=\"form-control\" id=\"dateOfBirth\" required [(ngModel)]=\"patient.dateOfBirth\"\n            name=\"dateOfBirth\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"sex\">Sex: </label>\n        <input type=\"text\" class=\"form-control\" id=\"sex\" required [(ngModel)]=\"patient.sex\" name=\"sex\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"country\">Country: </label>\n        <input type=\"text\" class=\"form-control\" id=\"country\" required [(ngModel)]=\"patient.country\" name=\"country\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"state\">State: </label>\n        <input type=\"text\" class=\"form-control\" id=\"state\" required [(ngModel)]=\"patient.state\" name=\"state\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"address\">Address: </label>\n        <input type=\"text\" class=\"form-control\" id=\"address\" required [(ngModel)]=\"patient.address\" name=\"address\">\n    </div>\n\n    <button class=\"btn black\" (click)=\"createPatient()\">Save</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-patient/edit-patient.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-patient/edit-patient.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditPatientEditPatientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"updatedPatient\">\n  <p>\n    <label for=\"firstName\">First Name</label>\n    <input type=\"text\" id=\"firstName\" [(ngModel)]=\"updatedPatient.firstName\">\n  </p>\n  <p>\n    <label for=\"lastName\">Last Name</label>\n    <input type=\"text\" id=\"lastName\" [(ngModel)]=\"updatedPatient.lastName\">\n  </p>\n\n  <p>\n    <label for=\"dateOfBirth\">Date of Birth</label>\n    <input type=\"date\" id=\"dateOfBirth\" [(ngModel)]=\"updatedPatient.dateOfBirth\">\n  </p>\n  <p>\n    <label for=\"sex\">Sex</label>\n    <input type=\"text\" id=\"sex\" [(ngModel)]=\"updatedPatient.sex\">\n  </p>\n  <p>\n    <label for=\"country\">Country</label>\n    <input type=\"text\" id=\"country\" [(ngModel)]=\"updatedPatient.country\">\n  </p>\n  <p>\n    <label for=\"state\">State</label>\n    <input type=\"text\" id=\"state\" [(ngModel)]=\"updatedPatient.state\">\n  </p>\n  <p>\n    <label for=\"address\">Address</label>\n    <input type=\"text\" id=\"address\" [(ngModel)]=\"updatedPatient.address\">\n  </p>\n  <button class=\"btn black\" (click)=\"updatePatient(updatedPatient)\">Edit</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-detail/patient-detail.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-detail/patient-detail.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientDetailPatientDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"selectedPatient\">\n  <nav>\n    <div class=\"nav-wrapper\">\n      <ul id=\"navbar\">\n        <li>\n          <h5>{{selectedPatient.firstName}} {{selectedPatient.lastName}} </h5>\n        </li>\n        <li>{{age}} years old</li>\n        <li class=\"right\">\n          <button class=\"black btn\" style=\"margin-bottom:5px;\" (click)=\"deletePatient(selectedPatient)\">DELETE\n          </button>\n        </li>\n        <li class=\"right\"><a routerLink=\"/edit-patient/{{selectedPatient.id}}\">EDIT</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"information\">\n    <ul>\n      <li>\n        <span>Date of birth: </span>\n        {{selectedPatient.dateOfBirth.toString()}}\n      </li>\n      <li>\n        <span>Sex: </span>\n        {{selectedPatient.sex}}\n      </li>\n      <li>\n        <span>Country: </span>\n        <span>{{selectedPatient.country}}</span>\n      </li>\n      <li>\n        <span>State: </span>\n        {{selectedPatient.state}}\n      </li>\n      <li>\n        <span>Address: </span>\n        {{selectedPatient.address}}\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div *ngIf=\"comments\" class=\"comments\">\n  <ul>\n    <h5 class=\"text\">Comments:</h5>\n    <li *ngFor=\"let comment of comments\">\n      <i>{{comment.dateOfWriting | date}}</i>\n      <p>{{comment.comment}}</p>\n    </li>\n  </ul>\n  <div class=\"new-comment\">\n    <input style=\"width: 650px; margin-right: 13px\" [(ngModel)]=\"createdComment.comment\" placeholder=\"Comment\"\n      name=\"comment\" class=\"form-control\" id=\"comment\">\n    <button (click)=\"createComment()\" class=\"btn black\">+</button>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-list/patient-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-list/patient-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientListPatientListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul>\n  <li *ngFor=\"let patient of patients \">\n    <a routerLink=\"/patient/{{patient.id}}\">\n      <td class=\"grid-gender-icon\">\n          <p style=\"border:10px; border-style:solid; border-color:blueviolet; padding: 0.85em;\">\n              {{patient.firstName}} {{patient.lastName}} \n              {{patient.dateOfBirth}}\n              <span *ngIf=\"patient.sex == 'Male'\" class=\"fa fa-male\"></span>\n              <span *ngIf=\"patient.sex == 'Female'\" class=\"fa fa-female\"></span>\n          </p>\n        </td>\n    </a>\n  </li>\n</ul>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-search/patient-search.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-search/patient-search.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientSearchPatientSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"nav\" style=\"background-color:black\">\n  <div>\n      <input #searchBox id=\"search-box\" (input)=\"search(searchBox.value)\" placeholder=\"Find patient\"/>\n      <a style=\"margin-left: 10px;\" class=\"blue btn\" routerLink=\"/create-patient\"><b>New patient</b></a>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#head {\n  padding: 10px;\n}\n\nbody {\n  font-family: Arial;\n}\n\n#menu {\n  border: 5px solid #111111;\n  float: left;\n  width: 225px;\n  padding: 5px;\n  margin: 15px 5px 5px 5px;\n}\n\n#menu div {\n  height: 100%;\n  padding: 2px;\n}\n\n#menu a {\n  display: block;\n  padding: 2px;\n  margin: 1px;\n  font-size: 0.75em;\n  overflow: scroll;\n}\n\n#content {\n  margin: 10px 10px 20px 225px;\n  padding: 5px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbiNtZW51IHtcbiAgYm9yZGVyOiA1cHggc29saWQgIzExMTExMTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMjVweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDE1cHggNXB4IDVweCA1cHg7XG59XG4jbWVudSBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJweDtcbn1cbiNtZW51IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDFweDtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbiNjb250ZW50IHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMjBweCAyMjVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5cbiJdfQ== */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Hospital Web App';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./patient-list/patient-list.component */
    "./src/app/patient-list/patient-list.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.routing.module */
    "./src/app/app.routing.module.ts");
    /* harmony import */


    var _service_patient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _service_comment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./service/comment.service */
    "./src/app/service/comment.service.ts");
    /* harmony import */


    var _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./patient-detail/patient-detail.component */
    "./src/app/patient-detail/patient-detail.component.ts");
    /* harmony import */


    var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./edit-patient/edit-patient.component */
    "./src/app/edit-patient/edit-patient.component.ts");
    /* harmony import */


    var _patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./patient-search/patient-search.component */
    "./src/app/patient-search/patient-search.component.ts");
    /* harmony import */


    var _service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./service/patient-created-notifier.service */
    "./src/app/service/patient-created-notifier.service.ts");
    /* harmony import */


    var _service_search_patient_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./service/search-patient.service */
    "./src/app/service/search-patient.service.ts");
    /* harmony import */


    var _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./create-patient/create-patient.component */
    "./src/app/create-patient/create-patient.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_5__["PatientListComponent"], _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_10__["PatientDetailComponent"], _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_11__["EditPatientComponent"], _patient_search_patient_search_component__WEBPACK_IMPORTED_MODULE_12__["PatientSearchComponent"], _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_15__["CreatePatientComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [[_service_patient_service__WEBPACK_IMPORTED_MODULE_7__["PatientService"]], [_service_comment_service__WEBPACK_IMPORTED_MODULE_9__["CommentService"]], [_service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_13__["PatientCreatedNotifierService"]], [_service_search_patient_service__WEBPACK_IMPORTED_MODULE_14__["SearchPatientService"]]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app.routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./patient-list/patient-list.component */
    "./src/app/patient-list/patient-list.component.ts");
    /* harmony import */


    var _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./patient-detail/patient-detail.component */
    "./src/app/patient-detail/patient-detail.component.ts");
    /* harmony import */


    var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-patient/edit-patient.component */
    "./src/app/edit-patient/edit-patient.component.ts");
    /* harmony import */


    var _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-patient/create-patient.component */
    "./src/app/create-patient/create-patient.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/patient/1',
      pathMatch: 'full'
    }, {
      path: 'patient/:id',
      component: _patient_detail_patient_detail_component__WEBPACK_IMPORTED_MODULE_4__["PatientDetailComponent"]
    }, {
      path: 'patients',
      component: _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_3__["PatientListComponent"]
    }, {
      path: 'create-patient',
      component: _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_6__["CreatePatientComponent"]
    }, {
      path: 'edit-patient/:id',
      component: _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_5__["EditPatientComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      declarations: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/create-patient/create-patient.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/create-patient/create-patient.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreatePatientCreatePatientComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\r\n    width: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBhdGllbnQvY3JlYXRlLXBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcGF0aWVudC9jcmVhdGUtcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/create-patient/create-patient.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/create-patient/create-patient.component.ts ***!
    \************************************************************/

  /*! exports provided: CreatePatientComponent */

  /***/
  function srcAppCreatePatientCreatePatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePatientComponent", function () {
      return CreatePatientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/patient-created-notifier.service */
    "./src/app/service/patient-created-notifier.service.ts");
    /* harmony import */


    var _models_patient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/patient.model */
    "./src/app/models/patient.model.ts");
    /* harmony import */


    var _service_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/patient.service */
    "./src/app/service/patient.service.ts");

    var CreatePatientComponent =
    /*#__PURE__*/
    function () {
      function CreatePatientComponent(location, patientService, patientNotifier) {
        _classCallCheck(this, CreatePatientComponent);

        this.location = location;
        this.patientService = patientService;
        this.patientNotifier = patientNotifier;
        this.patient = new _models_patient_model__WEBPACK_IMPORTED_MODULE_4__["Patient"]();
      }

      _createClass(CreatePatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createPatient",
        value: function createPatient() {
          var _this = this;

          this.patientService.createPatient(this.patient).subscribe(function (data) {
            _this.patientNotifier.subject.next("New Patient");

            console.log(data);

            _this.location.back();
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return CreatePatientComponent;
    }();

    CreatePatientComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _service_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
      }, {
        type: _service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_3__["PatientCreatedNotifierService"]
      }];
    };

    CreatePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-patient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-patient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-patient/create-patient.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-patient.component.css */
      "./src/app/create-patient/create-patient.component.css")).default]
    })], CreatePatientComponent);
    /***/
  },

  /***/
  "./src/app/edit-patient/edit-patient.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/edit-patient/edit-patient.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditPatientEditPatientComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcGF0aWVudC9lZGl0LXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/edit-patient/edit-patient.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-patient/edit-patient.component.ts ***!
    \********************************************************/

  /*! exports provided: EditPatientComponent */

  /***/
  function srcAppEditPatientEditPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPatientComponent", function () {
      return EditPatientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/patient-created-notifier.service */
    "./src/app/service/patient-created-notifier.service.ts");

    var EditPatientComponent =
    /*#__PURE__*/
    function () {
      function EditPatientComponent(route, location, patientService, patientNotifier) {
        _classCallCheck(this, EditPatientComponent);

        this.route = route;
        this.location = location;
        this.patientService = patientService;
        this.patientNotifier = patientNotifier;
      }

      _createClass(EditPatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (value) {
            _this2.patientId = value.id;

            _this2.getPatient(value.id);
          });
        }
      }, {
        key: "getPatient",
        value: function getPatient(id) {
          var _this3 = this;

          this.patientService.getPatient(id).subscribe(function (patient) {
            _this3.updatedPatient = patient;
          });
        }
      }, {
        key: "updatePatient",
        value: function updatePatient(patient) {
          var _this4 = this;

          this.patientService.updatePatient(patient).subscribe(function (value) {
            _this4.patientNotifier.subject.next("Patient Updated");

            console.log(value);

            _this4.location.back();
          });
        }
      }]);

      return EditPatientComponent;
    }();

    EditPatientComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }, {
        type: _service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_5__["PatientCreatedNotifierService"]
      }];
    };

    EditPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-patient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-patient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-patient/edit-patient.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-patient.component.css */
      "./src/app/edit-patient/edit-patient.component.css")).default]
    })], EditPatientComponent);
    /***/
  },

  /***/
  "./src/app/models/patient.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/patient.model.ts ***!
    \*****************************************/

  /*! exports provided: Patient */

  /***/
  function srcAppModelsPatientModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Patient", function () {
      return Patient;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Patient = function Patient() {
      _classCallCheck(this, Patient);
    };
    /***/

  },

  /***/
  "./src/app/patient-detail/patient-detail.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/patient-detail/patient-detail.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPatientDetailPatientDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-wrapper {\n  background-color: black;\n}\n\nli {\n  margin-left: 30px;\n  margin-right: 50px;\n}\n\n.information {\n  float:left; \n  margin-left: 15px;\n}\n\n.text {\n  margin-left: 3.5px;\n}\n\np {\n  margin-left: 10px;\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 3px;\n}\n\n.comments {\n  border: 5px black solid;\n  margin-right: 20px;\n  margin-top: 10px;\n  height: 400px;\n  width: 750px;\n  overflow: auto;\n  background-color:grey;\n  float:right;\n}\n\n.new-comment {\n  position: relative;\n  margin-left: 5px;\n  margin-bottom: 50px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1kZXRhaWwvcGF0aWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtZGV0YWlsL3BhdGllbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxubGkge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmluZm9ybWF0aW9uIHtcbiAgZmxvYXQ6bGVmdDsgXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMy41cHg7XG59XG5wIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgYm9yZGVyOiA1cHggYmxhY2sgc29saWQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDc1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xuICBmbG9hdDpyaWdodDtcbn1cblxuLm5ldy1jb21tZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/patient-detail/patient-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/patient-detail/patient-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: PatientDetailComponent */

  /***/
  function srcAppPatientDetailPatientDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDetailComponent", function () {
      return PatientDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/comment.service */
    "./src/app/service/comment.service.ts");

    var PatientDetailComponent =
    /*#__PURE__*/
    function () {
      function PatientDetailComponent(route, location, patientService, commentService) {
        _classCallCheck(this, PatientDetailComponent);

        this.route = route;
        this.location = location;
        this.patientService = patientService;
        this.commentService = commentService;
        this.createdComment = new Comment();
      }

      _createClass(PatientDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.params.subscribe(function (value) {
            _this5.patientId = value.id;

            _this5.getPatient(value.id);
          });
        }
      }, {
        key: "getAge",
        value: function getAge(id) {
          var _this6 = this;

          this.patientService.getPatient(id).subscribe(function (value) {
            var ageDifMs = Date.now() - new Date(value.dateOfBirth).getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch

            _this6.age = Math.abs(ageDate.getUTCFullYear() - 1970);
          });
        }
      }, {
        key: "getPatient",
        value: function getPatient(id) {
          var _this7 = this;

          this.patientService.getPatient(id).subscribe(function (patient) {
            _this7.selectedPatient = patient;

            _this7.getPatientСomments(id);

            _this7.getAge(id);
          });
          this.patientService.getPatients().subscribe(function (patients) {
            _this7.patients = patients;
          });
        }
      }, {
        key: "deletePatient",
        value: function deletePatient(patient) {
          var _this8 = this;

          this.patientService.deletePatient(patient).subscribe(function (data) {
            _this8.patients = _this8.patients.filter(function (p) {
              return p !== patient;
            });

            _this8.location.back();

            console.log(data);
          });
        }
      }, {
        key: "getPatient\u0421omments",
        value: function getPatientOmments(id) {
          var _this9 = this;

          this.patientService.getPatientСomments(id).subscribe(function (data) {
            _this9.comments = data;
          });
        }
      }, {
        key: "createComment",
        value: function createComment() {
          var _this10 = this;

          this.commentService.createComment(this.createdComment, this.patientId).subscribe(function (data) {
            _this10.getPatientСomments(_this10.patientId);

            console.log(data);
          });
        }
      }]);

      return PatientDetailComponent;
    }();

    PatientDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }, {
        type: _service_comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]
      }];
    };

    PatientDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-detail/patient-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-detail.component.css */
      "./src/app/patient-detail/patient-detail.component.css")).default]
    })], PatientDetailComponent);
    /***/
  },

  /***/
  "./src/app/patient-list/patient-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/patient-list/patient-list.component.ts ***!
    \********************************************************/

  /*! exports provided: PatientListComponent */

  /***/
  function srcAppPatientListPatientListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientListComponent", function () {
      return PatientListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var _service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/patient-created-notifier.service */
    "./src/app/service/patient-created-notifier.service.ts");
    /* harmony import */


    var _service_search_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/search-patient.service */
    "./src/app/service/search-patient.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PatientListComponent =
    /*#__PURE__*/
    function () {
      function PatientListComponent(patientService, patientNotified, patientSearchService) {
        _classCallCheck(this, PatientListComponent);

        this.patientService = patientService;
        this.patientNotified = patientNotified;
        this.patientSearchService = patientSearchService;
        this.searchRequests = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(PatientListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.patientNotified.subject.subscribe(function (value) {
            _this11.loadPatient();
          });
          this.patientSearchService.subjectSearch.subscribe(function (value) {
            _this11.searchRequests.next(value);

            _this11.searchRequests.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (request) {
              return _this11.patientService.searchPatient(request);
            })).subscribe(function (patients) {
              if (patients.length != 0) {
                _this11.patients = patients;
              } else {
                _this11.loadPatient();
              }
            });
          });
          this.loadPatient();
        }
      }, {
        key: "loadPatient",
        value: function loadPatient() {
          var _this12 = this;

          this.patientService.getPatients().subscribe(function (data) {
            _this12.patients = data;
          });
        }
      }]);

      return PatientListComponent;
    }();

    PatientListComponent.ctorParameters = function () {
      return [{
        type: _service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }, {
        type: _service_patient_created_notifier_service__WEBPACK_IMPORTED_MODULE_3__["PatientCreatedNotifierService"]
      }, {
        type: _service_search_patient_service__WEBPACK_IMPORTED_MODULE_4__["SearchPatientService"]
      }];
    };

    PatientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'patient-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-list/patient-list.component.html")).default
    })], PatientListComponent);
    /***/
  },

  /***/
  "./src/app/patient-search/patient-search.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/patient-search/patient-search.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPatientSearchPatientSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#search-box {\n  margin-left: 15px;\n  width: 260px;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1zZWFyY2gvcGF0aWVudC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC1zZWFyY2gvcGF0aWVudC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2gtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiAyNjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/patient-search/patient-search.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/patient-search/patient-search.component.ts ***!
    \************************************************************/

  /*! exports provided: PatientSearchComponent */

  /***/
  function srcAppPatientSearchPatientSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSearchComponent", function () {
      return PatientSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _service_search_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/search-patient.service */
    "./src/app/service/search-patient.service.ts");

    var PatientSearchComponent =
    /*#__PURE__*/
    function () {
      function PatientSearchComponent(location, patientService, patientSearchService) {
        _classCallCheck(this, PatientSearchComponent);

        this.location = location;
        this.patientService = patientService;
        this.patientSearchService = patientSearchService;
      }

      _createClass(PatientSearchComponent, [{
        key: "search",
        value: function search(request) {
          this.patientSearchService.subjectSearch.next(request);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientSearchComponent;
    }();

    PatientSearchComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }, {
        type: _service_search_patient_service__WEBPACK_IMPORTED_MODULE_4__["SearchPatientService"]
      }];
    };

    PatientSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patient-search/patient-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-search.component.css */
      "./src/app/patient-search/patient-search.component.css")).default]
    })], PatientSearchComponent);
    /***/
  },

  /***/
  "./src/app/service/comment.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/comment.service.ts ***!
    \********************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppServiceCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CommentService =
    /*#__PURE__*/
    function () {
      function CommentService(http) {
        _classCallCheck(this, CommentService);

        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
      }

      _createClass(CommentService, [{
        key: "getComments",
        value: function getComments() {
          return this.http.get(this.baseUrl);
        }
      }, {
        key: "createComment",
        value: function createComment(comment, patientId) {
          return this.http.post(this.baseUrl + 'patients/' + patientId + "/comments/", comment);
        }
      }]);

      return CommentService;
    }();

    CommentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CommentService);
    /***/
  },

  /***/
  "./src/app/service/patient-created-notifier.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/service/patient-created-notifier.service.ts ***!
    \*************************************************************/

  /*! exports provided: PatientCreatedNotifierService */

  /***/
  function srcAppServicePatientCreatedNotifierServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientCreatedNotifierService", function () {
      return PatientCreatedNotifierService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PatientCreatedNotifierService = function PatientCreatedNotifierService() {
      _classCallCheck(this, PatientCreatedNotifierService);

      this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
    };

    PatientCreatedNotifierService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PatientCreatedNotifierService);
    /***/
  },

  /***/
  "./src/app/service/patient.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/patient.service.ts ***!
    \********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcAppServicePatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(http) {
        _classCallCheck(this, PatientService);

        this.http = http;
        this.baseUrl = 'http://localhost:8080/patients';
      }

      _createClass(PatientService, [{
        key: "getPatients",
        value: function getPatients() {
          return this.http.get(this.baseUrl);
        }
      }, {
        key: "deletePatient",
        value: function deletePatient(patient) {
          return this.http.delete(this.baseUrl + '/' + patient.id);
        }
      }, {
        key: "createPatient",
        value: function createPatient(patient) {
          return this.http.post(this.baseUrl, patient);
        }
      }, {
        key: "getPatient\u0421omments",
        value: function getPatientOmments(id) {
          return this.http.get(this.baseUrl + '/' + id + '/comments');
        }
      }, {
        key: "updatePatient",
        value: function updatePatient(patient) {
          return this.http.put(this.baseUrl + '/' + patient.id, patient);
        }
      }, {
        key: "getPatient",
        value: function getPatient(id) {
          return this.http.get(this.baseUrl + '/' + id);
        }
      }, {
        key: "searchPatient",
        value: function searchPatient(term) {
          if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
          }

          return this.http.get(this.baseUrl + '/search/' + term);
        }
      }]);

      return PatientService;
    }();

    PatientService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PatientService);
    /***/
  },

  /***/
  "./src/app/service/search-patient.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/service/search-patient.service.ts ***!
    \***************************************************/

  /*! exports provided: SearchPatientService */

  /***/
  function srcAppServiceSearchPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPatientService", function () {
      return SearchPatientService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchPatientService = function SearchPatientService() {
      _classCallCheck(this, SearchPatientService);

      this.subjectSearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
    };

    SearchPatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SearchPatientService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! D:\Repo\hospital-web-app\front-end\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map