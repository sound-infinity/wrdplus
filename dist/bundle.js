/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_wrd_lib_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/wrd-lib-v2 */ \"./src/modules/wrd-lib-v2/index.ts\");\n/* harmony import */ var _scripts_v2_precedents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts-v2/precedents */ \"./src/scripts-v2/precedents.ts\");\n/* harmony import */ var _scripts_v2_patches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts-v2/patches */ \"./src/scripts-v2/patches.ts\");\n//\n\n\n\n/*\r\n// Loader\r\nrequire(\"./scripts/theme-loader\");\r\nrequire(\"./scripts/patches\");\r\n\r\n// Modules\r\nimport { searchThreadSync } from \"./modules/wrd-lib\";\r\nimport { LatestThreads as LT } from \"./scripts/globals\";\r\n\r\nlet oncomplete = () => {\r\n  if (!document.body.innerText.match(\"Checking your browser\")) {\r\n    // require('./scripts/key-binds')\r\n    require(\"./scripts/click-handler\");\r\n    LT.Migrate(searchThreadSync());\r\n    require(\"./scripts/link-handler\");\r\n    require(\"./scripts/changelog\");\r\n    require(\"./scripts/addons\");\r\n  }\r\n};\r\n\r\nif (document.readyState === \"complete\") {\r\n  require(\"./scripts/precedents\");\r\n  oncomplete();\r\n} else {\r\n  document.onreadystatechange = () => {\r\n    switch (document.readyState) {\r\n      case \"complete\":\r\n        oncomplete();\r\n        break;\r\n      case \"interactive\":\r\n        require(\"./scripts/settings\");\r\n        require(\"./scripts/precedents\");\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  };\r\n}\r\n*/\n\n//# sourceURL=webpack://wrdplus/./src/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/dialog.ts":
/*!**************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/dialog.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SiteDialog\": () => (/* binding */ SiteDialog)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar dismissedEvent = new Event(\"dismissed\");\nvar SiteDialog = /*#__PURE__*/function () {\n  function SiteDialog() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SiteDialog);\n\n    this.contents = null;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SiteDialog, [{\n    key: \"ondissmiss\",\n    set: function set(callback) {\n      var _a;\n\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.addEventListener(\"dismissed\", callback);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      var _a, _b;\n\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.remove();\n      (_b = this.contents) === null || _b === void 0 ? void 0 : _b.dispatchEvent(dismissedEvent);\n    }\n  }]);\n\n  return SiteDialog;\n}();\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/dialog.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SiteNotification\": () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_0__.SiteNotification),\n/* harmony export */   \"SitePopup\": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_1__.SitePopup),\n/* harmony export */   \"SitePopupWithPreset\": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_1__.SitePopupWithPreset),\n/* harmony export */   \"SitePopupYesNoResponse\": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_1__.SitePopupYesNoResponse),\n/* harmony export */   \"SitePopupPreset\": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_1__.SitePopupPreset)\n/* harmony export */ });\n/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ \"./src/modules/wrd-lib-v2/dialogs/notification/index.ts\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ \"./src/modules/wrd-lib-v2/dialogs/popup/index.ts\");\n\n\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/notification/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/notification/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SiteNotification\": () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_0__.SiteNotification)\n/* harmony export */ });\n/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ \"./src/modules/wrd-lib-v2/dialogs/notification/notification.ts\");\n\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/notification/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/notification/notification-utils.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/notification/notification-utils.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNotiStacks\": () => (/* binding */ getNotiStacks),\n/* harmony export */   \"getNotiFrame\": () => (/* binding */ getNotiFrame)\n/* harmony export */ });\nvar NotiFrame;\nvar NotiStacks;\nfunction getNotiStacks() {\n  if (NotiStacks == null) {\n    NotiStacks = document.createElement(\"div\");\n    NotiStacks.className = \"notif stacks\";\n    getNotiFrame().appendChild(NotiStacks);\n  }\n\n  return NotiStacks;\n}\nfunction getNotiFrame() {\n  if (NotiFrame == null) {\n    NotiFrame = document.createElement(\"div\");\n    NotiFrame.className = \"notif frame\";\n    document.body.appendChild(NotiFrame);\n  }\n\n  return NotiFrame;\n}\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/notification/notification-utils.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/notification/notification.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/notification/notification.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SiteNotification\": () => (/* binding */ SiteNotification)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _notification_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.html */ \"./src/modules/wrd-lib-v2/dialogs/notification/notification.html\");\n/* harmony import */ var _notification_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-utils */ \"./src/modules/wrd-lib-v2/dialogs/notification/notification-utils.ts\");\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog */ \"./src/modules/wrd-lib-v2/dialogs/dialog.ts\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar SiteNotification = /*#__PURE__*/function (_SiteDialog) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SiteNotification, _SiteDialog);\n\n  var _super = _createSuper(SiteNotification);\n\n  function SiteNotification() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SiteNotification);\n\n    _this = _super.call(this);\n    var template = document.createElement(\"div\");\n    template.innerHTML = _notification_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n    _this.contents = template.firstElementChild;\n    return _this;\n  } //#region properties\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SiteNotification, [{\n    key: \"render\",\n    value: function render() {\n      if (this.contents != null) (0,_notification_utils__WEBPACK_IMPORTED_MODULE_6__.getNotiStacks)().appendChild(this.contents);\n    }\n  }, {\n    key: \"mark\",\n    get: function get() {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"span.notif.mark\");\n      if (element) element.textContent;\n      return null;\n    },\n    set: function set(text) {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"span.notif.mark\");\n      if (element) element.textContent = text;\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"div.notif.title\");\n      if (element != null) element.textContent;\n      return null;\n    },\n    set: function set(text) {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"div.notif.title\");\n      if (element != null) element.textContent = text;\n    }\n  }, {\n    key: \"message\",\n    get: function get() {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"p.notif.message\");\n      if (element != null) element.textContent;\n      return null;\n    },\n    set: function set(text) {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"p.notif.message\");\n      if (element != null) element.textContent = text;\n    } //#endregion\n\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      var _this2 = this;\n\n      var _a;\n\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.setAttribute(\"hidden\", \"true\");\n      setTimeout(function () {\n        return _this2.remove();\n      }, 1000);\n    }\n  }]);\n\n  return SiteNotification;\n}(_dialog__WEBPACK_IMPORTED_MODULE_7__.SiteDialog);\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/notification/notification.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/popup/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/popup/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SitePopup\": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_0__.SitePopup),\n/* harmony export */   \"SitePopupWithPreset\": () => (/* reexport safe */ _presets__WEBPACK_IMPORTED_MODULE_1__.SitePopupWithPreset),\n/* harmony export */   \"SitePopupPreset\": () => (/* reexport safe */ _presets_enums__WEBPACK_IMPORTED_MODULE_2__.SitePopupPreset),\n/* harmony export */   \"SitePopupYesNoResponse\": () => (/* reexport safe */ _presets_enums__WEBPACK_IMPORTED_MODULE_2__.SitePopupYesNoResponse)\n/* harmony export */ });\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ \"./src/modules/wrd-lib-v2/dialogs/popup/popup.ts\");\n/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presets */ \"./src/modules/wrd-lib-v2/dialogs/popup/presets.ts\");\n/* harmony import */ var _presets_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presets-enums */ \"./src/modules/wrd-lib-v2/dialogs/popup/presets-enums.ts\");\n\n\n\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/popup/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/popup/popup.ts":
/*!*******************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/popup/popup.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SitePopup\": () => (/* binding */ SitePopup)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog */ \"./src/modules/wrd-lib-v2/dialogs/dialog.ts\");\n/* harmony import */ var _popup_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup.html */ \"./src/modules/wrd-lib-v2/dialogs/popup/popup.html\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar lastPopup;\nvar SitePopup = /*#__PURE__*/function (_SiteDialog) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SitePopup, _SiteDialog);\n\n  var _super = _createSuper(SitePopup);\n\n  function SitePopup() {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SitePopup);\n\n    var _a;\n\n    _this = _super.call(this);\n    var template = document.createElement(\"div\");\n    template.innerHTML = _popup_html__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n    _this.contents = template.firstElementChild;\n    (_a = _this.contents.querySelector(\"div.popup.close-btn\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", function () {\n      return _this.dismiss();\n    });\n    return _this;\n  } //#region getters\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SitePopup, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _a;\n\n      var apply = function apply() {\n        if (_this2.contents != null) {\n          document.body.appendChild(_this2.contents);\n        }\n      };\n\n      if (lastPopup != null) {\n        (_a = lastPopup.contents) === null || _a === void 0 ? void 0 : _a.addEventListener(\"dismissed\", function () {\n          return apply();\n        });\n      } else {\n        apply();\n      }\n\n      lastPopup = this;\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"div.popup.title\");\n      return element ? element.textContent : null;\n    },\n    set: function set(text) {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"div.popup.title\");\n\n      if (element != null) {\n        element.textContent = text;\n      }\n    }\n  }, {\n    key: \"message\",\n    get: function get() {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\".popup-message\");\n      return element ? element.textContent : null;\n    },\n    set: function set(text) {\n      var _a;\n\n      var element = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\".popup-message\");\n\n      if (element != null) {\n        element.textContent = text;\n      }\n    } //#endregion\n\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      this.remove();\n    }\n  }]);\n\n  return SitePopup;\n}(_dialog__WEBPACK_IMPORTED_MODULE_5__.SiteDialog);\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/popup/popup.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/popup/presets-enums.ts":
/*!***************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/popup/presets-enums.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SitePopupPreset\": () => (/* binding */ SitePopupPreset),\n/* harmony export */   \"SitePopupYesNoResponse\": () => (/* binding */ SitePopupYesNoResponse)\n/* harmony export */ });\nvar SitePopupPreset;\n\n(function (SitePopupPreset) {\n  SitePopupPreset[SitePopupPreset[\"Default\"] = 1] = \"Default\";\n  SitePopupPreset[SitePopupPreset[\"YesNo\"] = 2] = \"YesNo\";\n})(SitePopupPreset || (SitePopupPreset = {}));\n\nvar SitePopupYesNoResponse;\n\n(function (SitePopupYesNoResponse) {\n  SitePopupYesNoResponse[SitePopupYesNoResponse[\"Yes\"] = 1] = \"Yes\";\n  SitePopupYesNoResponse[SitePopupYesNoResponse[\"No\"] = 2] = \"No\";\n})(SitePopupYesNoResponse || (SitePopupYesNoResponse = {}));\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/popup/presets-enums.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/popup/presets.ts":
/*!*********************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/popup/presets.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SitePopupWithPreset\": () => (/* binding */ SitePopupWithPreset)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup */ \"./src/modules/wrd-lib-v2/dialogs/popup/popup.ts\");\n/* harmony import */ var _popup_button_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popup-button.html */ \"./src/modules/wrd-lib-v2/dialogs/popup/popup-button.html\");\n/* harmony import */ var _presets_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presets-enums */ \"./src/modules/wrd-lib-v2/dialogs/popup/presets-enums.ts\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar SitePopupWithPreset = /*#__PURE__*/function (_SitePopup) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SitePopupWithPreset, _SitePopup);\n\n  var _super = _createSuper(SitePopupWithPreset);\n\n  function SitePopupWithPreset(preset) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SitePopupWithPreset);\n\n    _this = _super.call(this);\n    _this.onyesnoresponse = null;\n\n    switch (preset) {\n      case _presets_enums__WEBPACK_IMPORTED_MODULE_8__.SitePopupPreset.YesNo:\n        var btnYes = _this.addButton();\n\n        btnYes.textContent = \"Yes\";\n\n        var btnNo = _this.addButton();\n\n        btnNo.textContent = \"No\"; // events\n\n        btnYes.onclick = function () {\n          var _a;\n\n          return (_a = _this.onyesnoresponse) === null || _a === void 0 ? void 0 : _a.call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), _presets_enums__WEBPACK_IMPORTED_MODULE_8__.SitePopupYesNoResponse.Yes);\n        };\n\n        btnNo.onclick = function () {\n          var _a;\n\n          return (_a = _this.onyesnoresponse) === null || _a === void 0 ? void 0 : _a.call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), _presets_enums__WEBPACK_IMPORTED_MODULE_8__.SitePopupYesNoResponse.No);\n        };\n\n        break;\n\n      case _presets_enums__WEBPACK_IMPORTED_MODULE_8__.SitePopupPreset.Default:\n        var btnOkay = _this.addButton();\n\n        btnOkay.textContent = \"Okay\";\n\n        btnOkay.onclick = function () {\n          return _this.dismiss();\n        };\n\n        break;\n\n      default:\n        break;\n    }\n\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SitePopupWithPreset, [{\n    key: \"addButton\",\n    value: function addButton() {\n      var _a, _b;\n\n      var template = document.createElement(\"div\");\n      template.innerHTML = _popup_button_html__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n      var element = template.firstElementChild;\n      (_b = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\"div.popup-buttons\")) === null || _b === void 0 ? void 0 : _b.appendChild(element);\n      return element;\n    }\n  }]);\n\n  return SitePopupWithPreset;\n}(_popup__WEBPACK_IMPORTED_MODULE_6__.SitePopup);\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/popup/presets.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/index.ts":
/*!*****************************************!*\
  !*** ./src/modules/wrd-lib-v2/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsForm\": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_0__.SettingsForm),\n/* harmony export */   \"SettingsSection\": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_0__.SettingsSection),\n/* harmony export */   \"SitePopup\": () => (/* reexport safe */ _dialogs__WEBPACK_IMPORTED_MODULE_1__.SitePopup),\n/* harmony export */   \"SiteNotification\": () => (/* reexport safe */ _dialogs__WEBPACK_IMPORTED_MODULE_1__.SiteNotification),\n/* harmony export */   \"SitePopupPreset\": () => (/* reexport safe */ _dialogs__WEBPACK_IMPORTED_MODULE_1__.SitePopupPreset),\n/* harmony export */   \"SitePopupWithPreset\": () => (/* reexport safe */ _dialogs__WEBPACK_IMPORTED_MODULE_1__.SitePopupWithPreset)\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/modules/wrd-lib-v2/settings/index.ts\");\n/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs */ \"./src/modules/wrd-lib-v2/dialogs/index.ts\");\n__webpack_require__(/*! ./res/css */ \"./src/modules/wrd-lib-v2/res/css/index.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/res/css/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/wrd-lib-v2/res/css/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notifications_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.style.css */ \"./src/modules/wrd-lib-v2/res/css/notifications.style.css\");\n/* harmony import */ var _popups_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popups.style.css */ \"./src/modules/wrd-lib-v2/res/css/popups.style.css\");\n/* harmony import */ var _settings_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.style.css */ \"./src/modules/wrd-lib-v2/res/css/settings.style.css\");\n/* harmony import */ var _dark_settings_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dark/settings.style.css */ \"./src/modules/wrd-lib-v2/res/css/dark/settings.style.css\");\n\n\n\n\nvar SheetDestination;\n\n(function (SheetDestination) {\n  SheetDestination[SheetDestination[\"Head\"] = 1] = \"Head\";\n  SheetDestination[SheetDestination[\"Body\"] = 2] = \"Body\";\n})(SheetDestination || (SheetDestination = {}));\n\nfunction InsertSheet(sourceCode) {\n  var destination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SheetDestination.Head;\n  var sheet = document.createElement(\"style\");\n  sheet.textContent = sourceCode;\n\n  switch (destination) {\n    case SheetDestination.Head:\n      if (document.head != null) {\n        document.head.appendChild(sheet);\n      } else {\n        document.addEventListener(\"readystatechange\", function () {\n          if (document.head != null) {\n            document.head.appendChild(sheet);\n          }\n        });\n      }\n\n      break;\n\n    case SheetDestination.Body:\n      if (document.head != null) {\n        document.head.appendChild(sheet);\n      } else {\n        document.addEventListener(\"readystatechange\", function () {\n          if (document.head != null) {\n            document.head.appendChild(sheet);\n          }\n        });\n      }\n\n      break;\n\n    default:\n      break;\n  }\n}\n\nInsertSheet(_notifications_style_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nInsertSheet(_popups_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nInsertSheet(_settings_style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nInsertSheet(_dark_settings_style_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/res/css/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/settings/form/index.ts":
/*!*******************************************************!*\
  !*** ./src/modules/wrd-lib-v2/settings/form/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsForm\": () => (/* binding */ SettingsForm)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _form_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.html */ \"./src/modules/wrd-lib-v2/settings/form/form.html\");\n\n\n\nvar SettingsForm = /*#__PURE__*/function () {\n  function SettingsForm() {\n    var _this = this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SettingsForm);\n\n    var _a;\n\n    this.contents = null;\n    var container = document.createElement(\"div\");\n    container.innerHTML = _form_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    this.contents = container.firstElementChild;\n    var btnCloseSettings = (_a = this.contents) === null || _a === void 0 ? void 0 : _a.querySelector(\".settings-close-btn\");\n\n    if (btnCloseSettings != null) {\n      btnCloseSettings.addEventListener(\"click\", function () {\n        var _a;\n\n        (_a = _this.contents) === null || _a === void 0 ? void 0 : _a.remove();\n      });\n    }\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SettingsForm, [{\n    key: \"render\",\n    value: function render() {\n      if (this.contents != null) {\n        document.body.appendChild(this.contents);\n      }\n    }\n  }]);\n\n  return SettingsForm;\n}();\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/settings/form/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/settings/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/wrd-lib-v2/settings/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsSection\": () => (/* reexport safe */ _section__WEBPACK_IMPORTED_MODULE_0__.SettingsSection),\n/* harmony export */   \"SettingsForm\": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_1__.SettingsForm)\n/* harmony export */ });\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ \"./src/modules/wrd-lib-v2/settings/section/index.ts\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/modules/wrd-lib-v2/settings/form/index.ts\");\n\n\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/settings/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/settings/section/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/wrd-lib-v2/settings/section/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsSection\": () => (/* binding */ SettingsSection)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _section_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section.html */ \"./src/modules/wrd-lib-v2/settings/section/section.html\");\n/* harmony import */ var _section_templates_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section-templates.html */ \"./src/modules/wrd-lib-v2/settings/section/section-templates.html\");\n\n\n\n\n\nfunction parseHtml(htmlString) {\n  var container = document.createElement(\"div\");\n  container.innerHTML = htmlString;\n  return container.firstElementChild;\n}\n\nvar SectionTemplates = parseHtml(_section_templates_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar SettingsSection = /*#__PURE__*/function () {\n  function SettingsSection(form) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SettingsSection);\n\n    this.contents = null;\n    this.parentForm = null;\n    this.contents = parseHtml(_section_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    this.parentForm = form;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SettingsSection, [{\n    key: \"render\",\n    value: function render() {\n      var _a, _b, _c, _d;\n\n      if (this.contents != null) {\n        (_c = (_b = (_a = this.parentForm) === null || _a === void 0 ? void 0 : _a.contents) === null || _b === void 0 ? void 0 : _b.querySelector(\".settings-body\")) === null || _c === void 0 ? void 0 : _c.appendChild(this.contents);\n        (_d = this.contents) === null || _d === void 0 ? void 0 : _d.addEventListener(\"submit\", function (e) {\n          e.preventDefault();\n          return false;\n        });\n      }\n    }\n  }, {\n    key: \"addButton\",\n    value: function addButton(text) {\n      var _a;\n\n      var element = document.createElement(\"button\");\n      element.textContent = text;\n      element.className = \"flat\";\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.appendChild(element);\n    }\n  }, {\n    key: \"addHeading\",\n    value: function addHeading(text) {\n      var _a, _b, _c;\n\n      var headingContainer = (_a = SectionTemplates.querySelector(\"#heading\")) === null || _a === void 0 ? void 0 : _a.firstElementChild;\n\n      if (headingContainer != null) {\n        var heading = headingContainer === null || headingContainer === void 0 ? void 0 : headingContainer.querySelector(\".settings-section-heading\");\n\n        if (heading != null) {\n          heading.textContent = text;\n        }\n\n        (_c = (_b = this.parentForm) === null || _b === void 0 ? void 0 : _b.contents) === null || _c === void 0 ? void 0 : _c.appendChild(headingContainer);\n      }\n    }\n  }, {\n    key: \"addTextbox\",\n    value: function addTextbox(title) {\n      var placeHolder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n      var fillX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      var _a; //        if (!this.exists(data.id)) {\n\n\n      var textbox = document.createElement(\"input\");\n      textbox.type = \"text\"; //textbox.name = data.id\n\n      textbox.placeholder = placeHolder;\n      if (fillX) textbox.style.width = \"100%\";\n      this.addLabel(title);\n      this.addLineBreak();\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.appendChild(textbox);\n      this.addLineBreak(); //this.inputs[data.id] = textbox\n\n      return textbox; //        }\n    }\n  }, {\n    key: \"addLineBreak\",\n    value: function addLineBreak() {\n      var _a;\n\n      var linebreak = document.createElement(\"br\");\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.appendChild(linebreak);\n      return linebreak;\n    }\n  }, {\n    key: \"addLabel\",\n    value: function addLabel(text) {\n      var _a;\n\n      var label = document.createElement(\"span\");\n      label.textContent = text;\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.appendChild(label);\n      return label;\n    }\n  }, {\n    key: \"addCheckbox\",\n    value: function addCheckbox(title) {\n      var _a;\n\n      var checkbox = document.createElement(\"input\"); //checkbox.name = data.id\n\n      checkbox.type = \"checkbox\"; //checkbox.checked = data.checked || false\n\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.appendChild(checkbox);\n      this.addLabel(title);\n      this.addLineBreak();\n    }\n  }, {\n    key: \"addSubmitButton\",\n    value: function addSubmitButton() {\n      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Submit\";\n      var clickHandler = arguments.length > 1 ? arguments[1] : undefined;\n\n      var _a;\n\n      var submitBtn = document.createElement(\"input\");\n      submitBtn.value = text;\n      submitBtn.type = \"submit\";\n      (_a = this.contents) === null || _a === void 0 ? void 0 : _a.appendChild(submitBtn);\n      if (typeof clickHandler === \"function\") submitBtn.addEventListener(\"click\", clickHandler.bind(this, this));\n      return submitBtn;\n    }\n  }]);\n\n  return SettingsSection;\n}();\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/settings/section/index.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/utils/data-extractor.ts":
/*!********************************************************!*\
  !*** ./src/modules/wrd-lib-v2/utils/data-extractor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extractUserInfoFromTag\": () => (/* binding */ extractUserInfoFromTag),\n/* harmony export */   \"extractThreadIdFromUrl\": () => (/* binding */ extractThreadIdFromUrl)\n/* harmony export */ });\nfunction extractUserInfoFromTag(tag) {\n  var info = {\n    name: null,\n    id: null\n  };\n\n  if (tag != null) {\n    if (tag === null || tag === void 0 ? void 0 : tag.textContent) info.name = tag.textContent;\n\n    if (tag === null || tag === void 0 ? void 0 : tag.href) {\n      var matches = tag.href.match(/=([0-9]+)/);\n\n      if (matches != null) {\n        info.id = parseInt(matches[1]);\n      }\n    }\n  }\n\n  return info;\n}\nfunction extractThreadIdFromUrl() {\n  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;\n  var matches = url.match(/\\/([0-9]+)/);\n  if (matches != null) return parseInt(matches[1]);\n  return null;\n}\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/utils/data-extractor.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/utils/link-type.ts":
/*!***************************************************!*\
  !*** ./src/modules/wrd-lib-v2/utils/link-type.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkType\": () => (/* binding */ LinkType),\n/* harmony export */   \"getLinkType\": () => (/* binding */ getLinkType)\n/* harmony export */ });\nvar LinkType;\n\n(function (LinkType) {\n  LinkType[LinkType[\"None\"] = 0] = \"None\";\n  LinkType[LinkType[\"NewReply\"] = 1] = \"NewReply\";\n  LinkType[LinkType[\"Profile\"] = 2] = \"Profile\";\n  LinkType[LinkType[\"Section\"] = 3] = \"Section\";\n  LinkType[LinkType[\"Thread\"] = 4] = \"Thread\";\n  LinkType[LinkType[\"Index\"] = 5] = \"Index\";\n})(LinkType || (LinkType = {}));\n\nfunction getLinkType() {\n  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;\n\n  if (url.match(/\\/profile[/]?$|profile\\?uid=[0-9]+/)) {\n    return LinkType.Profile;\n  } else if (url.match(/\\/newreply/g)) {\n    return LinkType.NewReply;\n  } else if (url.match(/forum\\/t\\/[0-9]+/)) {\n    return LinkType.Thread;\n  } else if (url.match(/forum\\/[A-z]+/)) {\n    return LinkType.Section;\n  } else if (url.match(/forum[/]?/)) {\n    return LinkType.Index;\n  }\n\n  return LinkType.None;\n}\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/utils/link-type.ts?");

/***/ }),

/***/ "./src/scripts-v2/patches.ts":
/*!***********************************!*\
  !*** ./src/scripts-v2/patches.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_wrd_lib_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/wrd-lib-v2 */ \"./src/modules/wrd-lib-v2/index.ts\");\n/* harmony import */ var _modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/wrd-lib-v2/utils/link-type */ \"./src/modules/wrd-lib-v2/utils/link-type.ts\");\n/* harmony import */ var _modules_wrd_lib_v2_utils_data_extractor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/wrd-lib-v2/utils/data-extractor */ \"./src/modules/wrd-lib-v2/utils/data-extractor.ts\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// This script contains improvements or fixes for the WRD website.\n\n\n //404 Page\n\nif (document.title.match(\"^Page doesn't exist!\") && location.search.match(\"jschl\")) {\n  var queries = new URLSearchParams(location.search);\n  queries[\"delete\"](\"__cf_chl_jschl_tk__\");\n  location.search = \"?\".concat(queries.toString());\n  var notif = new _modules_wrd_lib_v2__WEBPACK_IMPORTED_MODULE_0__.SiteNotification();\n  notif.message = \"Reloading page...\";\n  notif.render();\n} //Mention buttons\n\n\nfunction createMentionButton(user) {\n  var btn = document.createElement(\"a\");\n  btn.className = \"theme1 border1 btnmention\";\n  btn.textContent = \"Mention\";\n  btn.href = \"/forum/t/\".concat((0,_modules_wrd_lib_v2_utils_data_extractor__WEBPACK_IMPORTED_MODULE_2__.extractThreadIdFromUrl)(), \"/newreply?mention=\").concat(user.id);\n  return btn;\n}\n\nif ((0,_modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_1__.getLinkType)() === _modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_1__.LinkType.Thread) {\n  var fixMentions = function fixMentions() {\n    var _iterator = _createForOfIteratorHelper(document.querySelectorAll(\"div.thread_replierdata\")),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var userInfoContainer = _step.value;\n        var userDescription = userInfoContainer.querySelector(\"div.userdesc\");\n\n        if (userDescription != null) {\n          //Checks if there is a mention button already made.\n          //Creates a new mention button.\n          if (userDescription.querySelector(\".btnmention\") == null) {\n            var userInfoElement = userDescription.querySelector(\"a[href*=profile]\");\n\n            if (userInfoElement != null) {\n              var userInfo = (0,_modules_wrd_lib_v2_utils_data_extractor__WEBPACK_IMPORTED_MODULE_2__.extractUserInfoFromTag)(userInfoElement);\n              userDescription.appendChild(createMentionButton(userInfo));\n            }\n          }\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  if (document.readyState === \"complete\") fixMentions();else {\n    document.addEventListener(\"readystatechange\", function () {\n      if (document.readyState === \"complete\") fixMentions();\n    });\n  }\n}\n\n//# sourceURL=webpack://wrdplus/./src/scripts-v2/patches.ts?");

/***/ }),

/***/ "./src/scripts-v2/precedents.ts":
/*!**************************************!*\
  !*** ./src/scripts-v2/precedents.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/wrd-lib-v2/utils/link-type */ \"./src/modules/wrd-lib-v2/utils/link-type.ts\");\n// Code that runs before any other script, to setup items before they are used.\n// ##########\n// Recommended to import from direct sources\n //import { ExtraFeatures } from \"./settings\"\n//#region ThreadAnchors\n\nif ((0,_modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_0__.getLinkType)() === _modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_0__.LinkType.Section || (0,_modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_0__.getLinkType)() === _modules_wrd_lib_v2_utils_link_type__WEBPACK_IMPORTED_MODULE_0__.LinkType.Index) {\n  //if (ExtraFeatures.get<boolean>(\"threadmarkings\")) {\n  var threadAnchors = document.querySelectorAll('a[href*=\"/forum/t\"');\n\n  for (var i = 0; i < threadAnchors.length; ++i) {\n    var thread = threadAnchors[i];\n    thread.setAttribute(\"state\", \"Waiting\");\n  } //}\n\n} //#endregion ThreadAnchors\n\n//# sourceURL=webpack://wrdplus/./src/scripts-v2/precedents.ts?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/notification/notification.html":
/*!***********************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/notification/notification.html ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div class=\\\"notif contents theme2 round outline\\\">\\r\\n  <div><span class=\\\"notif mark\\\">WRD+</span></div>\\r\\n  <div class=\\\"notif title outline round\\\">Notification</div>\\r\\n  <div class=\\\"notif outline round\\\"><p class=\\\"notif message\\\"></p></div>\\r\\n</div>\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/notification/notification.html?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/popup/popup-button.html":
/*!****************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/popup/popup-button.html ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<a class=\\\"btn theme2 round border1 popup-button\\\">New Thread</a>\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/popup/popup-button.html?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/dialogs/popup/popup.html":
/*!*********************************************************!*\
  !*** ./src/modules/wrd-lib-v2/dialogs/popup/popup.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div class=\\\"modal-popup\\\">\\r\\n  <div class=\\\"modal-contents theme1 round\\\">\\r\\n    <div class=\\\"modal-close-btn popup close-btn\\\">+</div>\\r\\n    <div class=\\\"modal-header\\\"><h1 class=\\\"popup title\\\">WRD+</h1></div>\\r\\n    <div class=\\\"modal-body popup-body\\\">\\r\\n      <p class=\\\"popup-message\\\"></p>\\r\\n      <div class=\\\"popup-buttons\\\"></div>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/dialogs/popup/popup.html?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/res/css/dark/settings.style.css":
/*!****************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/res/css/dark/settings.style.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"div#settings {\\r\\n    background-color: #242a33;\\r\\n}\\r\\n\\r\\ndiv#settings .listbox {\\r\\n    border: 1px solid #212121;\\r\\n}\\r\\n\\r\\ndiv#settings .listbox option:focus {\\r\\n    background-color: lightblue;\\r\\n}\\r\\n\\r\\ndiv#settings .flat,\\r\\ndiv#settings input[type=\\\"submit\\\"] {\\r\\n    background-color: #01579b;\\r\\n    color: #f5f5f5;\\r\\n}\\r\\n\\r\\ndiv#settings .flat:hover,\\r\\ndiv#settings input[type=\\\"submit\\\"]:hover {\\r\\n    color: #00579b;\\r\\n    background-color: #f3f3f3;\\r\\n}\\r\\n\\r\\ndiv#settings .flat:active,\\r\\ndiv#settings input[type=\\\"submit\\\"]:active {\\r\\n    background-color: #00579b;\\r\\n    color: #0070c5;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center {\\r\\n    background-color: #2b3340;\\r\\n    border: 1px solid #101010;\\r\\n}\\r\\n\\r\\ndiv#settings .settings-section-heading {\\r\\n    border-bottom: 1px solid #252525;\\r\\n}\\r\\n\\r\\ndiv#settings .settings-section-heading {\\r\\n    color: #cecece;\\r\\n}\\r\\n\\r\\ndiv#settings h1,\\r\\ndiv#settings span {\\r\\n    color: white;\\r\\n}\\r\\n\\r\\ndiv#settings input[type=\\\"text\\\"] {\\r\\n    background-color: #28303c;\\r\\n}\\r\\n/*# sourceMappingURL=dark.theme.css.map */\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/res/css/dark/settings.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/res/css/notifications.style.css":
/*!****************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/res/css/notifications.style.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"@keyframes show-notif {\\r\\n    from {\\r\\n        opacity: 0;\\r\\n    }\\r\\n\\r\\n    to {\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes hide-notif {\\r\\n    from {\\r\\n        opacity: 1;\\r\\n    }\\r\\n\\r\\n    to {\\r\\n        opacity: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n.notif.contents[hidden] {\\r\\n    transition: 1s all;\\r\\n\\r\\n    animation-name: hide-notif;\\r\\n    animation-duration: 1s;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.notif.contents {\\r\\n    transition: 1s all;\\r\\n\\r\\n    animation-name: show-notif;\\r\\n    animation-duration: 1s;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.notif.frame {\\r\\n    z-index: 99998;\\r\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n    display: block;\\r\\n    position: relative;\\r\\n    background: transparent;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n.notif.stacks {\\r\\n    display: block;\\r\\n    width: 5vh;\\r\\n    position: fixed;\\r\\n    right: 10px;\\r\\n    bottom: 10px;\\r\\n    width: 20vw;\\r\\n}\\r\\n\\r\\n.notif.stacks > * {\\r\\n    margin: 2px;\\r\\n}\\r\\n\\r\\n.notif.contents {\\r\\n    position: relative;\\r\\n    padding: 5px;\\r\\n    display: block;\\r\\n    height: auto;\\r\\n    min-height: 5vh;\\r\\n}\\r\\n\\r\\n.notif.outline {\\r\\n    padding: 4px;    \\r\\n}\\r\\n\\r\\n.notif.title {\\r\\n    display: block;\\r\\n    font-size: 16px;\\r\\n    font-weight: bold;\\r\\n    margin-bottom: 4px;\\r\\n}\\r\\n\\r\\n.notif.message {\\r\\n    font-family: inherit;\\r\\n    margin: 0;\\r\\n    min-height: 5vh;\\r\\n}\\r\\n\\r\\n.notif.mark {\\r\\n    user-select: none;\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    left: 50%;\\r\\n    right: 50%;\\r\\n    bottom: 50%;\\r\\n    top: 50%;\\r\\n    font-size: 30px;\\r\\n    font-weight: bolder;\\r\\n    opacity: 0.1;\\r\\n}\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/res/css/notifications.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/res/css/popups.style.css":
/*!*********************************************************!*\
  !*** ./src/modules/wrd-lib-v2/res/css/popups.style.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\".popup-buttons {\\r\\n  margin-top: 14px;\\r\\n}\\r\\n\\r\\n.popup-button {\\r\\n  padding: 4px 0;\\r\\n  min-width: 6vw;\\r\\n  width: auto;\\r\\n  display: inline-block;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.modal-popup {\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: rgba(0, 0, 0, 0.5);\\r\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\r\\n  z-index: 99999;\\r\\n}\\r\\n.modal-popup .modal-contents {\\r\\n  margin: auto;\\r\\n  display: block;\\r\\n  top: 50vh;\\r\\n  transform: translate(0, -50%);\\r\\n  left: 0;\\r\\n  padding: 10px;\\r\\n  width: 40vw;\\r\\n  position: relative;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n.modal-popup .modal-contents h1 {\\r\\n  font-size: 24px;\\r\\n  margin: 0 0 14px;\\r\\n}\\r\\n.modal-popup .modal-contents .modal-close-btn {\\r\\n  position: absolute;\\r\\n  -webkit-transform: rotate(45deg);\\r\\n  transform: rotate(45deg);\\r\\n  cursor: pointer;\\r\\n  font-size: 28px;\\r\\n  right: 0;\\r\\n  top: 0;\\r\\n  margin: auto;\\r\\n  height: 16px;\\r\\n  width: 16px;\\r\\n}\\r\\n.modal-popup .modal-body span {\\r\\n  display: block;\\r\\n}\\r\\n.modal-popup .btn {\\r\\n  cursor: pointer;\\r\\n  font-weight: 700;\\r\\n  padding: 5px;\\r\\n  min-width: 80px;\\r\\n  margin-top: 4px;\\r\\n  margin-right: 4px;\\r\\n  border: 0;\\r\\n}\\r\\n.modal-popup img {\\r\\n  width: 100%;\\r\\n}\\r\\n.modal-popup .modal-contents a[href] {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/res/css/popups.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/res/css/settings.style.css":
/*!***********************************************************!*\
  !*** ./src/modules/wrd-lib-v2/res/css/settings.style.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"span.wrd-plus-logo {\\r\\n    display: inline-block;\\r\\n    font: inherit;\\r\\n}\\r\\n\\r\\nspan.wrd-plus-logo::before {\\r\\n    content: \\\"WRD\\\";\\r\\n}\\r\\n\\r\\nspan.wrd-plus-logo::after {\\r\\n    content: \\\"+\\\";\\r\\n    color: Gold;\\r\\n}\\r\\n\\r\\ndiv#settings {\\r\\n    display: -webkit-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 99997;\\r\\n}\\r\\n\\r\\ndiv#settings input[type=\\\"text\\\"] {\\r\\n    width: 100%;\\r\\n    padding: 4px 10px;\\r\\n    background-color: #f3f3f3;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n\\r\\ndiv#settings .settings-section-heading {\\r\\n    font-weight: bold;\\r\\n    font-size: 14px;\\r\\n    text-shadow: 1px 1px #00000045;\\r\\n}\\r\\n\\r\\ndiv#settings .listbox {\\r\\n    margin: 5px;\\r\\n    padding: 5px;\\r\\n    width: 100%;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\ndiv#settings .listbox option {\\r\\n    display: block;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\ndiv#settings .flat,\\r\\ndiv#settings input[type=\\\"submit\\\"] {\\r\\n    outline: none;\\r\\n    border: 1px solid transparent;\\r\\n    font-weight: bolder;\\r\\n    margin-top: 4px;\\r\\n    margin-bottom: 4px;\\r\\n    margin-right: 2px;\\r\\n    border-radius: 5px;\\r\\n    padding: 4px 15px;\\r\\n}\\r\\n\\r\\ndiv#settings .flat:hover,\\r\\ndiv#settings input[type=\\\"submit\\\"]:hover {\\r\\n    -webkit-transition: all 0.3s;\\r\\n    transition: all 0.3s;\\r\\n}\\r\\n\\r\\ndiv#settings .flat:active,\\r\\ndiv#settings input[type=\\\"submit\\\"]:active {\\r\\n    -webkit-transition: all 0.1s;\\r\\n    transition: all 0.1s;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center {\\r\\n    border-radius: 4px;\\r\\n    background-color: none;\\r\\n    left: 10%;\\r\\n    bottom: 10%;\\r\\n    margin: auto;\\r\\n    padding: 15px;\\r\\n    width: 80%;\\r\\n    height: 80%;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center h1,\\r\\ndiv#settings div.settings-center h2,\\r\\ndiv#settings div.settings-center h3,\\r\\ndiv#settings div.settings-center h4,\\r\\ndiv#settings div.settings-center input,\\r\\ndiv#settings div.settings-center a,\\r\\ndiv#settings div.settings-center span {\\r\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen,\\r\\n        Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\r\\n    margin: 0 5px 10px 0;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center .settings-header {\\r\\n    padding-bottom: 10px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center .settings-header .middle {\\r\\n    vertical-align: middle;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center .settings-header .right {\\r\\n    float: right;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center .settings-header .settings-close-btn {\\r\\n    height: 3vh;\\r\\n    width: 3vh;\\r\\n    border: 1px solid transparent;\\r\\n    border-radius: 4px;\\r\\n    background-color: #810f0f;\\r\\n    color: transparent;\\r\\n    text-align: center;\\r\\n    font-size: 2vh;\\r\\n    font-family: Helvetica, Arial, sans-serif;\\r\\n    cursor: pointer;\\r\\n    -webkit-transition: color 0.5s;\\r\\n    transition: color 0.5s;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center .settings-header .settings-close-btn:hover {\\r\\n    color: red;\\r\\n}\\r\\n\\r\\n/*\\r\\ndiv#settings div.center span {\\r\\n    margin-left: 2px\\r\\n}\\r\\n*/\\r\\ndiv#settings div.settings-center input[type=\\\"checkbox\\\"],\\r\\ndiv#settings div.settings-center input[type=\\\"submit\\\"] {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center input[type=\\\"checkbox\\\"] {\\r\\n    padding: 2px;\\r\\n}\\r\\n\\r\\ndiv#settings div.settings-center input[type=\\\"text\\\"] {\\r\\n    margin: 10px 0;\\r\\n}\\r\\n\\r\\n/*# sourceMappingURL=style.css.map */\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/res/css/settings.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/settings/form/form.html":
/*!********************************************************!*\
  !*** ./src/modules/wrd-lib-v2/settings/form/form.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div id=\\\"settings\\\">\\r\\n    <div class=\\\"settings-center\\\">\\r\\n        <div class=\\\"settings-header\\\">\\r\\n            <span class=\\\"middle wrd-plus-logo\\\"></span>\\r\\n            <span class=\\\"middle right\\\">\\r\\n                <button class=\\\"settings-close-btn\\\"></button>\\r\\n            </span>\\r\\n        </div>\\r\\n        <div class=\\\"settings-body\\\"></div>\\r\\n    </div>\\r\\n</div>\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/settings/form/form.html?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/settings/section/section-templates.html":
/*!************************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/settings/section/section-templates.html ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div id=\\\"heading\\\">\\r\\n    <div>\\r\\n        <a class=\\\"settings-section-heading\\\">GENERAL</a>\\r\\n        <br />\\r\\n    </div>\\r\\n</div>\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/settings/section/section-templates.html?");

/***/ }),

/***/ "./src/modules/wrd-lib-v2/settings/section/section.html":
/*!**************************************************************!*\
  !*** ./src/modules/wrd-lib-v2/settings/section/section.html ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<form class=\\\"settings-section\\\"></form>\\r\\n\");\n\n//# sourceURL=webpack://wrdplus/./src/modules/wrd-lib-v2/settings/section/section.html?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\n//# sourceURL=webpack://wrdplus/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;