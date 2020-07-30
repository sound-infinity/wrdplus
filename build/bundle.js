/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/wrd-lib */ \"./src/modules/wrd-lib/index.js\");\n/* harmony import */ var _modules_data_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data-manager */ \"./src/modules/data-manager/index.js\");\n// Modules\n\n // Presets\n\nconst DM = new _modules_data_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('wrdplus-test');\nconst SettingsPanel = new _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"Settings\"].Form(); // KeyBind\n\ndocument.addEventListener('keydown', e => {\n  if (e.altKey && e.key === 's') SettingsPanel.toggle();\n}); // Basic Info\n\nconst BasicInfo = SettingsPanel.addSection('Basic Info');\nBasicInfo.addHeading('LocalStorage Data', 3);\n\nconst displayDMSize = DM => {\n  BasicInfo.addLabel(DM.Name);\n  BasicInfo.addLabel(DM.Size).style.color = 'lightblue';\n};\n\ndisplayDMSize(DM); // Theme Settings\n\nconst ThemeSettings = SettingsPanel.addSection('Theme Settings');\nThemeSettings.addTextbox('themeUrl', 'CSS URL');\nThemeSettings.addSubmitButton('Save', e => {\n  console.log(e.getValues());\n}); // Style\n\ndocument.head.innerHTML += `<style>a[href][read=false]{font-weight:700}a[href][read]::before{font-weight:initial;content:\"\";margin:4px;padding:2px 4px;font-size:10px;text-align:center;vertical-align:middle;background-color:#288228;border-radius:10px;display:inline-block}a[href][read=true]::before{content:\"R\"}a[href][read=false]::before{content:\"U\";background-color:#a82424}a[href][read=waiting]::before{content:\"W\";background-color:orange}</style>`; // Local Threads\n\nlet LT = _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SearchThreadSync(); //Tag Parser\n\nif (location.hostname === 'wearedevs') _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"TagParser\"].ParsePage();\n\nfunction UpdateThreads() {\n  document.querySelectorAll('a[href*=\"/forum/t\"').forEach(thread => {\n    const threadData = LT.GetThreadById(Object(_modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"GetThreadIdFromUrl\"])(thread.href));\n\n    if (threadData) {\n      const threadStoredData = DM.getKey(threadData.Id);\n\n      if (threadStoredData) {\n        if (threadData.Replies === threadStoredData.Replies) {\n          thread.setAttribute(\"read\", true);\n          thread.title = 'Read';\n        } else {\n          thread.setAttribute(\"read\", false);\n          thread.title = 'Unread';\n        }\n      } else {\n        thread.setAttribute(\"read\", false);\n        thread.title = 'Unregistered';\n      }\n    } else {\n      thread.setAttribute(\"read\", false);\n      thread.title = 'Unknown';\n    }\n  });\n}\n\nfunction FormatUser(user) {\n  return `${user.Name}#${user.Id}`;\n}\n\nconst Info = new _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"Popup\"]();\nwindow.addEventListener(\"click\", e => {\n  if (e.target) {\n    if (e.target.tagName === \"A\" && LT != null) {\n      if (_modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].getLinkType(e.target.href) === _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].THREAD) {\n        const threadData = LT.GetThreadById(parseInt(e.target.href.match(/t\\/([0-9]+)/)[1]));\n        Info.title = \"Thread Data\";\n\n        let showThreadData = function (threadData) {\n          Info.description = [\"Title: \" + threadData.Name, \"Views: \" + threadData.Views, \"Replies: \" + threadData.Replies, \"Author: \" + FormatUser(threadData.Author), \"Last Reply: \" + (threadData.LastReplier ? FormatUser(threadData.LastReplier) : \"None\"), '<hr/>', `Link: <a class='btn theme2 round' href=\"${threadData.Url}\">${threadData.Name}</a>`];\n          Info.show();\n        };\n\n        if (threadData) {\n          DM.setKey(threadData.Id, threadData);\n\n          if (e.ctrlKey) {\n            showThreadData(threadData);\n            e.preventDefault();\n          }\n        } else if (e.ctrlKey) {\n          Info.reset();\n          Info.description = \"Failed to get data. Do you want to continue?\";\n          Info.buttons = {\n            Search: function () {\n              Info.buttons = {};\n              _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SearchThreadAsync(e.target.innerText).then(results => {\n                showThreadData(results.GetThreadById(Object(_modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"GetThreadIdFromUrl\"])(e.target.href)));\n              });\n            },\n            Yes: function () {\n              e.target.click();\n            },\n            No: function () {\n              this.close();\n            }\n          };\n          Info.show();\n          e.preventDefault();\n        }\n\n        UpdateThreads();\n      }\n    }\n  }\n});\n\nswitch (_modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].getLinkType(location.href)) {\n  case _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].THREAD:\n    const LocalTitle = document.title.split('-');\n    const LocalId = Object(_modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"GetThreadIdFromUrl\"])(location.href);\n    LocalTitle.pop();\n    _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SearchThreadAsync(LocalTitle.join(\"-\").trim()).then(searchResults => {\n      console.log(searchResults);\n      const ThreadData = searchResults.GetThreadById(LocalId);\n\n      if (ThreadData) {\n        DM.setKey(ThreadData.Id, ThreadData);\n      } else {\n        Info.title = \"Thread Data - Failure\";\n        Info.description = \"An attempt to retrieve data about this thread gave no results. Perhaps the search query failed or was invalid. Thus, this thread will be marked as unread.\";\n        Info.show();\n      }\n    });\n    break;\n\n  case _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].SECTION:\n    UpdateThreads();\n    break;\n\n  case _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].INDEX:\n    const names = [\"\"];\n    document.querySelectorAll('a[href*=\"/forum/t\"').forEach(thread => {\n      thread.setAttribute(\"read\", \"waiting\");\n\n      if (DM.getKey(Object(_modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"GetThreadIdFromUrl\"])(thread.href))) {\n        names.push(thread.textContent.trim());\n      }\n    });\n    _modules_wrd_lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SearchThreadsAsync(names).then(searchResults => {\n      LT = searchResults;\n      UpdateThreads();\n    });\n    break;\n\n  default:\n    console.log('None');\n    break;\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/data-manager/index.js":
/*!*******************************************!*\
  !*** ./src/modules/data-manager/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DataManager; });\nclass DataManager {\n  constructor(containerName, doAutoParsing = true) {\n    this.containerName = containerName;\n    this.doAutoParsing = doAutoParsing;\n  }\n\n  get Name() {\n    return this.containerName;\n  }\n\n  get raw() {\n    return localStorage.getItem(this.containerName);\n  }\n\n  get data() {\n    const itemVal = this.raw;\n\n    if (this.doAutoParsing) {\n      return JSON.parse(itemVal || '{}') || {};\n    } else {\n      return itemVal;\n    }\n  }\n\n  set data(newData) {\n    if (this.doAutoParsing) {\n      localStorage.setItem(this.containerName, JSON.stringify(newData || {}));\n    } else {\n      localStorage.setItem(this.containerName, newData);\n    }\n  }\n\n  get Size() {\n    return new Blob([this.raw]).size / 1000 + 'kb';\n  }\n\n  getKey(name) {\n    return this.data[name];\n  }\n\n  setKey(name, value) {\n    this.data = this.data;\n    const temp_data = this.data;\n    temp_data[name] = value;\n    this.data = temp_data;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/data-manager/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/classes/index.js":
/*!**********************************************!*\
  !*** ./src/modules/wrd-lib/classes/index.js ***!
  \**********************************************/
/*! exports provided: default, SearchResults, ThreadData, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results */ \"./src/modules/wrd-lib/classes/search-results.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchResults\", function() { return _search_results__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _thread_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thread-data */ \"./src/modules/wrd-lib/classes/thread-data.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThreadData\", function() { return _thread_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./src/modules/wrd-lib/classes/user.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SearchResults: _search_results__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ThreadData: _thread_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  User: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/classes/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/classes/search-results.js":
/*!*******************************************************!*\
  !*** ./src/modules/wrd-lib/classes/search-results.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchResults; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/modules/wrd-lib/classes/index.js\");\n\nclass SearchResults {\n  constructor() {\n    /**\n     * @property {(collection: ThreadData[])} \n     */\n    this.collection = [];\n  }\n  /**\n   * Retrieves a thread by its id, only one is returned.\n   * @param {number} threadId \n   * @returns {ThreadData}\n   */\n\n\n  GetThreadById(threadId) {\n    for (const threadData of this.collection) {\n      if (threadData.Id === threadId) {\n        return threadData;\n      }\n    }\n  }\n  /**\n   * Looks for threads with the given name.\n   * @param {string} threadName\n   * @returns {ThreadData[]} \n   */\n\n\n  GetThreadByName(threadName) {\n    const results = [];\n    this.collection.forEach(threadData => {\n      if (threadData.Name === threadName) {\n        results.push(threadData);\n      }\n    });\n    return results;\n  }\n  /**\n   * Adds an item to the list.\n   * @param {ThreadData} Item \n   */\n\n\n  Add(Item) {\n    this.collection.push(Item);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/classes/search-results.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/classes/thread-data.js":
/*!****************************************************!*\
  !*** ./src/modules/wrd-lib/classes/thread-data.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ThreadData; });\nclass ThreadData {\n  /**\n   * \n   * @param {string} threadName \n   * @param {number} threadId \n   * @param {number} threadReplies \n   * @param {number} threadViews \n   * @param {User} threadAuthor \n   * @param {User} threadLastReplier\n   * @param {string} threadSection\n   * @param {string} threadUrl \n   */\n  constructor(threadName, threadId, threadReplies, threadViews, threadAuthor, threadLastReplier, threadSection, threadUrl) {\n    this.Name = threadName;\n    this.Section = threadSection;\n    this.Author = threadAuthor;\n    this.LastReplier = threadLastReplier;\n\n    if (threadUrl) {\n      this.Url = threadUrl;\n    } else {\n      const Relative = new URL(`/forum/t/${threadId}`, location.href);\n      this.Url = Relative.href;\n    }\n\n    this.Id = parseInt(threadId);\n    this.Views = parseInt(threadViews);\n    this.Replies = parseInt(threadReplies);\n    this.CreatedAt = new Date().getTime();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/classes/thread-data.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/classes/user.js":
/*!*********************************************!*\
  !*** ./src/modules/wrd-lib/classes/user.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\nclass User {\n  constructor(userName, userId) {\n    this.Name = userName;\n    this.Id = parseInt(userId);\n    this.ProfileImageUrl = '';\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/classes/user.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/dialogs/index.js":
/*!**********************************************!*\
  !*** ./src/modules/wrd-lib/dialogs/index.js ***!
  \**********************************************/
/*! exports provided: default, Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.class */ \"./src/modules/wrd-lib/dialogs/popup.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Popup\", function() { return _popup_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Popup: _popup_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/dialogs/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/dialogs/popup.class.js":
/*!****************************************************!*\
  !*** ./src/modules/wrd-lib/dialogs/popup.class.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popup; });\nlet open_dialog = null;\nclass Popup {\n  /**\n   * \n   * @param {string|string[]|string[boolean]} _description Text to be shown in the description section. If an array is provided, the last value can be a boolean to specify if a html should be used.\n   * @param {string} _title \n   * @param {function} _onclose \n   */\n  constructor(_description = \"Hello World!\", _title = \"WRD+\", _onclose) {\n    const elements = {\n      close_button: document.createElement(\"div\"),\n      description: document.createElement(\"p\"),\n      container: document.createElement(\"div\"),\n      contents: document.createElement(\"div\"),\n      heading: document.createElement(\"h1\"),\n      header: document.createElement(\"div\"),\n      body: document.createElement(\"div\")\n    };\n    elements.close_button.className = 'modal-close-btn';\n    elements.container.className = 'modal-popup';\n    elements.contents.className = 'modal-contents theme1 round';\n    elements.header.className = 'modal-header';\n    elements.body.className = 'modal-body';\n    elements.header.appendChild(elements.heading);\n    elements.body.appendChild(elements.description);\n    elements.contents.appendChild(elements.close_button);\n    elements.contents.appendChild(elements.header);\n    elements.contents.appendChild(elements.body);\n    elements.container.appendChild(elements.contents); //Text\n\n    elements.close_button.innerText = '+'; //Events - functions\n\n    this.onclose = _onclose;\n\n    this.onclick = function (e) {\n      this.close(e);\n    }.bind(this); //Events - User Input\n\n\n    elements.close_button.addEventListener('click', this.onclick);\n    elements.container.addEventListener('click', e => {\n      if (e.target === elements.container) {\n        this.onclick(e);\n      }\n    }); //Other\n\n    this.global_buttons = {};\n    this.addedElements = [];\n    this.elements = elements; //set props\n\n    this.title = _title;\n    this.description = _description;\n  } //*Properties\n  //Description\n\n\n  get description() {\n    return this.elements.description.textContent;\n  }\n\n  set description(text = '') {\n    switch (typeof text) {\n      case 'string':\n        this.elements.description.textContent = text;\n        break;\n\n      case 'object':\n        this.elements.description.innerHTML = text.join('<br/>');\n        /* Wheter to use new line character or break element - specified at end of array\n        if (text[text.length - 1] === true) {\n            text.pop()\n            this.elements.description.innerHTML = text.join('<br/>')\n        } else {\n            this.elements.description.textContent = text.join('\\n')\n        }\n        */\n\n        break;\n\n      default:\n        break;\n    }\n  } //Title\n\n\n  get title() {\n    return this.elements.heading.textContent;\n  }\n\n  set title(text = '') {\n    this.elements.heading.textContent = text;\n  } //Buttons\n\n\n  get buttons() {\n    return this.global_buttons;\n  }\n  /**\n   * @param {({\"Label\": (this: Popup, e: MouseEvent)})} _buttons\n   */\n\n\n  set buttons(_buttons = {}) {\n    for (const button in this.buttons) this.buttons[button].remove();\n\n    for (const buttonLabel in _buttons) {\n      //If a button with the same name exists, remove it.\n      if (this.buttons[buttonLabel]) {\n        this.buttons[buttonLabel].remove();\n        delete this.buttons[buttonLabel];\n      }\n\n      const buttonHandler = _buttons[buttonLabel];\n      const buttonElement = document.createElement('button'); //If the button contains a click handler, assign it.\n\n      if (typeof buttonHandler === 'function') {\n        buttonElement.style.cursor = 'pointer';\n        buttonElement.addEventListener('click', buttonHandler.bind(this));\n      }\n\n      buttonElement.textContent = buttonLabel;\n      buttonElement.className = 'btn theme2 round';\n      this.elements.body.appendChild(buttonElement);\n      this.addedElements.push(buttonElement);\n      this.buttons[buttonLabel] = buttonElement;\n    }\n  }\n  /**\n   * Checks on the stylesheet for the popup. If not found, it's added.\n   */\n\n\n  refresh() {\n    if (!document.head.querySelector('style#wrd-plus-popup')) {\n      const style = document.createElement('style');\n      style.id = 'wrd-plus-popup';\n      style.innerHTML = `.modal-popup{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;z-index:2}.modal-popup .modal-contents{margin:auto;display:block;top:50vh;transform:translate(0,-50%);left:0;padding:10px;width:40vw;position:relative;border-radius:15px}.modal-popup .modal-contents h1{font-size:24px;margin:0 0 14px}.modal-popup .modal-contents .modal-close-btn{position:absolute;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer;font-size:28px;right:0;top:0;margin:auto;height:16px;width:16px}.modal-popup .modal-body span{display:block}.modal-popup .btn{cursor:pointer;color:#e8e8e8;font-weight:700;padding:5px;background:#151719;min-width:80px;margin-top:4px;margin-right:4px;border:0}.modal-popup img{width:100%}`;\n      document.head.appendChild(style);\n    }\n  }\n  /**\n   * Removes all added elements.\n   */\n\n\n  reset() {\n    for (const element of this.addedElements) {\n      element.remove();\n    }\n  }\n  /**\n   * Removes popup from the document.\n   */\n\n\n  close() {\n    this.elements.container.remove();\n    if (typeof this.onclose === 'function') this.onclose.call(this, ...arguments);\n  }\n  /**\n   * Shows up popup in the document. \n   * @param {boolean} reset Determines if reset should be called, by default it's disabled.\n   */\n\n\n  show(reset = false) {\n    if (reset) this.reset();\n\n    if (document.body.querySelector('.modal-popup')) {\n      if (open_dialog && open_dialog !== this) {\n        open_dialog.onclose = () => this.show();\n      }\n    } else {\n      open_dialog = this;\n      this.refresh();\n      document.body.appendChild(this.elements.container);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/dialogs/popup.class.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/enums/index.js":
/*!********************************************!*\
  !*** ./src/modules/wrd-lib/enums/index.js ***!
  \********************************************/
/*! exports provided: default, LinkType, PopupOptions, PopupResponses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _link_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link-type */ \"./src/modules/wrd-lib/enums/link-type.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LinkType\", function() { return _link_type__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"]; });\n\n/* harmony import */ var _popup_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-options */ \"./src/modules/wrd-lib/enums/popup-options.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PopupOptions\", function() { return _popup_options__WEBPACK_IMPORTED_MODULE_1__[\"PopupOptions\"]; });\n\n/* harmony import */ var _popup_responses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-responses */ \"./src/modules/wrd-lib/enums/popup-responses.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PopupResponses\", function() { return _popup_responses__WEBPACK_IMPORTED_MODULE_2__[\"PopupResponses\"]; });\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  LinkType: _link_type__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"],\n  PopupOptions: _popup_options__WEBPACK_IMPORTED_MODULE_1__[\"PopupOptions\"],\n  PopupResponses: _popup_responses__WEBPACK_IMPORTED_MODULE_2__[\"PopupResponses\"]\n});\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/enums/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/enums/link-type.js":
/*!************************************************!*\
  !*** ./src/modules/wrd-lib/enums/link-type.js ***!
  \************************************************/
/*! exports provided: LinkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkType\", function() { return LinkType; });\nconst LinkType = {\n  NEWREPLY: 'newreply',\n  PROFILE: 'profile',\n  SECTION: 'section',\n  THREAD: 'thread',\n  INDEX: 'index',\n\n  /**\n   * \n   * @param {string} url\n   * @returns {string} LinkType\n   */\n  getLinkType: function (url) {\n    if (typeof url === \"string\" && this) {\n      if (url.match(/profile\\?uid=[0-9]+/)) {\n        return this.PROFILE;\n      } else if (url.match(/\\/newreply/g)) {\n        return this.NEWREPLY;\n      } else if (url.match(/forum\\/t\\/[0-9]+/)) {\n        return this.THREAD;\n      } else if (url.match(/forum\\/[A-z]+/)) {\n        return this.SECTION;\n      } else if (url.match(/forum[/]?/)) {\n        return this.INDEX;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/enums/link-type.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/enums/popup-options.js":
/*!****************************************************!*\
  !*** ./src/modules/wrd-lib/enums/popup-options.js ***!
  \****************************************************/
/*! exports provided: PopupOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PopupOptions\", function() { return PopupOptions; });\nconst PopupOptions = {\n  YesNo: 'yesno'\n};\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/enums/popup-options.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/enums/popup-responses.js":
/*!******************************************************!*\
  !*** ./src/modules/wrd-lib/enums/popup-responses.js ***!
  \******************************************************/
/*! exports provided: PopupResponses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PopupResponses\", function() { return PopupResponses; });\nconst PopupResponses = {\n  Yes: 'yes',\n  No: 'no'\n};\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/enums/popup-responses.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/index.js":
/*!**************************************!*\
  !*** ./src/modules/wrd-lib/index.js ***!
  \**************************************/
/*! exports provided: GetThreadIdFromUrl, default, SearchThreadsAsync, SearchThreadAsync, SearchThreadSync, TagParser, LinkType, PopupOptions, PopupResponses, ThreadData, Notification, Popup, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetThreadIdFromUrl\", function() { return GetThreadIdFromUrl; });\n/* harmony import */ var _thread_searcher___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread-searcher/ */ \"./src/modules/wrd-lib/thread-searcher/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadsAsync\", function() { return _thread_searcher___WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadsAsync\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadAsync\", function() { return _thread_searcher___WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadAsync\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadSync\", function() { return _thread_searcher___WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadSync\"]; });\n\n/* harmony import */ var _enums___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/ */ \"./src/modules/wrd-lib/enums/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LinkType\", function() { return _enums___WEBPACK_IMPORTED_MODULE_1__[\"LinkType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PopupOptions\", function() { return _enums___WEBPACK_IMPORTED_MODULE_1__[\"PopupOptions\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PopupResponses\", function() { return _enums___WEBPACK_IMPORTED_MODULE_1__[\"PopupResponses\"]; });\n\n/* harmony import */ var _notifications___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications/ */ \"./src/modules/wrd-lib/notifications/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Notification\", function() { return _notifications___WEBPACK_IMPORTED_MODULE_2__[\"Notification\"]; });\n\n/* harmony import */ var _classes___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/ */ \"./src/modules/wrd-lib/classes/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ThreadData\", function() { return _classes___WEBPACK_IMPORTED_MODULE_3__[\"ThreadData\"]; });\n\n/* harmony import */ var _dialogs___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/ */ \"./src/modules/wrd-lib/dialogs/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Popup\", function() { return _dialogs___WEBPACK_IMPORTED_MODULE_4__[\"Popup\"]; });\n\n/* harmony import */ var _tag_parser___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tag-parser/ */ \"./src/modules/wrd-lib/tag-parser/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TagParser\", function() { return _tag_parser___WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _settings___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/ */ \"./src/modules/wrd-lib/settings/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return _settings___WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _style_sheets___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style-sheets/ */ \"./src/modules/wrd-lib/style-sheets/index.js\");\n\n\n\n\n\n\n //Loaders\n\n\nObject(_tag_parser___WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nfunction GetThreadIdFromUrl(url) {\n  return parseInt(url.match(/\\/([0-9]+)/)[1]);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SearchThreadsAsync: _thread_searcher___WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadsAsync\"],\n  SearchThreadAsync: _thread_searcher___WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadAsync\"],\n  SearchThreadSync: _thread_searcher___WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadSync\"],\n  TagParser: _tag_parser___WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  LinkType: _enums___WEBPACK_IMPORTED_MODULE_1__[\"LinkType\"],\n  PopupOptions: _enums___WEBPACK_IMPORTED_MODULE_1__[\"PopupOptions\"],\n  PopupResponses: _enums___WEBPACK_IMPORTED_MODULE_1__[\"PopupResponses\"],\n  ThreadData: _classes___WEBPACK_IMPORTED_MODULE_3__[\"ThreadData\"],\n  Notification: _notifications___WEBPACK_IMPORTED_MODULE_2__[\"Notification\"],\n  Popup: _dialogs___WEBPACK_IMPORTED_MODULE_4__[\"Popup\"],\n  Settings: _settings___WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/notifications/index.js":
/*!****************************************************!*\
  !*** ./src/modules/wrd-lib/notifications/index.js ***!
  \****************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notification_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.class */ \"./src/modules/wrd-lib/notifications/notification.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Notification\", function() { return _notification_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/notifications/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/notifications/notification.class.js":
/*!*****************************************************************!*\
  !*** ./src/modules/wrd-lib/notifications/notification.class.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Notification; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/wrd-lib/notifications/utils.js\");\n/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timestamp */ \"./src/modules/wrd-lib/notifications/timestamp.js\");\n\n\nclass Notification {\n  constructor(options = {\n    text: '',\n    link: '',\n    thumbnail: '/favicon.ico'\n  }) {\n    this.elements = {};\n    this.elements.container = document.createElement(\"div\");\n    this.elements.subContainer = document.createElement(\"div\");\n    this.elements.description = document.createElement(\"a\");\n    this.elements.thumbnail = document.createElement(\"img\");\n    this.elements.time = document.createElement(\"p\");\n    this.elements.exit = document.createElement(\"p\");\n    this.elements.container.appendChild(this.elements.thumbnail);\n    this.elements.container.appendChild(this.elements.subContainer);\n    this.elements.container.appendChild(this.elements.exit);\n    this.elements.subContainer.appendChild(this.elements.description);\n    this.elements.subContainer.appendChild(this.elements.time);\n    this.elements.container.className = \"notification\";\n    this.description = options.text;\n    if (options.link) this.link = options.link;\n    this.thumbnail = options.thumbnail;\n    this.elements.exit.innerText = \"x\";\n    this.elements.time.innerText = _timestamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].beautify(new Date());\n    this.elements.exit.className = \"notif-exit\";\n    this.elements.time.className = \"notif-time\";\n\n    this.elements.exit.onclick = function (e) {\n      this.remove();\n      e.stopPropagation();\n      return false;\n    }.bind(this);\n  } //Description\n\n\n  get description() {\n    return this.elements.description.textContent;\n  }\n\n  set description(text = '') {\n    this.elements.description.textContent = text;\n  } //Link\n\n\n  get link() {\n    return this.elements.description.textContent;\n  }\n\n  set link(link = '') {\n    this.elements.description.href = link;\n  } //Thumbnail\n\n\n  get thumbnail() {\n    return this.elements.thumbnail.getAttribute(src);\n  }\n\n  set thumbnail(thumbnail = '/favicon.ico') {\n    return this.elements.thumbnail.setAttribute('src', thumbnail);\n  }\n\n  remove() {\n    this.elements.container.remove();\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"NotiCount\"].value--;\n  }\n\n  show() {\n    const MainContainer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"GetNotificationsContainer\"])();\n\n    if (MainContainer && this.elements.container.parentNode !== MainContainer) {\n      MainContainer.appendChild(this.elements.container);\n      _utils__WEBPACK_IMPORTED_MODULE_0__[\"NotiCount\"].value++;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/notifications/notification.class.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/notifications/timestamp.js":
/*!********************************************************!*\
  !*** ./src/modules/wrd-lib/notifications/timestamp.js ***!
  \********************************************************/
/*! exports provided: getAMPM, getMonth, getWeekDay, beautify, shorten, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAMPM\", function() { return getAMPM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMonth\", function() { return getMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeekDay\", function() { return getWeekDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"beautify\", function() { return beautify; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shorten\", function() { return shorten; });\n//TimeStamp by (unknown)\n//Script Used within WeAreDevs.net\nfunction getAMPM(date) {\n  var hours = date.getHours();\n  var minutes = date.getMinutes();\n  var ampm = hours >= 12 ? 'PM' : 'AM';\n  hours = hours % 12;\n  hours = hours ? hours : 12;\n  minutes = minutes < 10 ? '0' + minutes : minutes;\n  var strTime = hours + ':' + minutes + ' ' + ampm;\n  return strTime;\n}\nfunction getMonth(timestamp) {\n  var months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  return months[timestamp.getMonth()];\n}\nfunction getWeekDay(timestamp) {\n  var days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n  return days[timestamp.getDay()];\n}\nfunction beautify(timestamp) {\n  var dateToReturn = \"\";\n  timestamp = new Date(timestamp);\n  let currentDate = new Date();\n\n  if (currentDate.getFullYear() > timestamp.getFullYear()) {\n    dateToReturn += this.getMonth(timestamp) + \" \" + timestamp.getDate() + \", \" + timestamp.getFullYear();\n  } else {\n    if (currentDate.getMonth() > timestamp.getMonth() || currentDate.getDate() > timestamp.getDate() + 7) {\n      dateToReturn += this.getMonth(timestamp) + \" \" + timestamp.getDate();\n    } else {\n      if (currentDate.getDate() > timestamp.getDate() + 6) {\n        dateToReturn += \"Last week \" + this.getWeekDay(timestamp);\n      } else {\n        if (currentDate.getDate() > timestamp.getDate() + 1) {\n          dateToReturn += this.getWeekDay(timestamp) + \" at \" + this.getAMPM(timestamp);\n        } else {\n          if (currentDate.getDate() - 1 === timestamp.getDate()) {\n            dateToReturn += \"Yesterday at \" + this.getAMPM(timestamp);\n          } else {\n            dateToReturn += this.getAMPM(timestamp);\n          }\n        }\n      }\n    }\n  }\n\n  return dateToReturn;\n}\nfunction shorten(timestamp) {\n  var dateToReturn = \"\";\n  timestamp = new Date(timestamp);\n  let currentDate = new Date();\n\n  if (currentDate.getFullYear() > timestamp.getFullYear()) {\n    dateToReturn += this.getMonth(timestamp).substr(0, 3) + \" \" + timestamp.getDate() + \", \" + timestamp.getFullYear();\n  } else {\n    if (currentDate.getDate() > timestamp.getDate() + 6) {\n      dateToReturn += this.getMonth(timestamp).substr(0, 3) + \" \" + timestamp.getDate();\n    } else {\n      if (currentDate.getDate() > timestamp.getDate()) {\n        dateToReturn += this.getWeekDay(timestamp).substr(0, 3);\n      } else {\n        dateToReturn += this.getAMPM(timestamp);\n      }\n    }\n  }\n\n  return dateToReturn;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getAMPM,\n  getMonth,\n  getWeekDay,\n  beautify,\n  shorten\n});\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/notifications/timestamp.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/notifications/utils.js":
/*!****************************************************!*\
  !*** ./src/modules/wrd-lib/notifications/utils.js ***!
  \****************************************************/
/*! exports provided: noti_list_selector, noti_count_selector, NotiCount, GetNotificationsContainer, UpdateNotificationContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noti_list_selector\", function() { return noti_list_selector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noti_count_selector\", function() { return noti_count_selector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotiCount\", function() { return NotiCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetNotificationsContainer\", function() { return GetNotificationsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpdateNotificationContainer\", function() { return UpdateNotificationContainer; });\nconst noti_list_selector = \"#navigationbar > ul > li.navHeader_dropmenu.navbell div.notifications\";\nconst noti_count_selector = \"#navigationbar > ul > li.navHeader_dropmenu.navbell > span.notifbell > span.notifcount\";\nconst NotiCount = {\n  cached: {},\n\n  get element() {\n    let element = this.cached.element || document.querySelector(noti_count_selector);\n\n    if (element == null) {\n      element = document.createElement(\"span\");\n      element.classList.add('notifcount');\n      element.innerText = '0';\n      document.querySelector(\"#navigationbar > ul > li.navHeader_dropmenu.navbell > span.notifbell\").appendChild(element);\n    }\n\n    this.cached.element = element;\n    return element;\n  },\n\n  get value() {\n    return parseInt(this.element.innerText);\n  },\n\n  set value(value = 0) {\n    this.element.innerText = value;\n    UpdateNotificationContainer();\n  }\n\n};\nfunction GetNotificationsContainer() {\n  let notis = document.querySelector(noti_list_selector);\n\n  if (notis == null) {\n    notis = document.createElement('div');\n    notis.classList.add('notifications');\n    document.querySelector('#navigationbar > ul > li.navHeader_dropmenu.navbell > div.menu').appendChild(notis);\n  }\n\n  return notis;\n}\nfunction UpdateNotificationContainer() {\n  const container = document.querySelector('#navigationbar > ul > li.navHeader_dropmenu.navbell > div.menu');\n\n  if (NotiCount.value <= 0) {\n    if (container.firstElementChild.tagName !== 'P') {\n      container.firstElementChild.remove();\n    }\n\n    const noNotis = document.createElement(\"p\");\n    noNotis.innerText = 'No Notifications';\n    container.insertBefore(noNotis, container.firstChild);\n  } else {\n    if (container.firstElementChild.tagName === 'P') {\n      container.firstElementChild.remove();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/notifications/utils.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/settings/index.js":
/*!***********************************************!*\
  !*** ./src/modules/wrd-lib/settings/index.js ***!
  \***********************************************/
/*! exports provided: default, Section, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-section */ \"./src/modules/wrd-lib/settings/settings-section.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Section\", function() { return _settings_section__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _settings_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-form */ \"./src/modules/wrd-lib/settings/settings-form.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return _settings_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Section: _settings_section__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Form: _settings_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/settings/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/settings/settings-form.js":
/*!*******************************************************!*\
  !*** ./src/modules/wrd-lib/settings/settings-form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SettingsForm; });\n/* harmony import */ var _settings_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-section */ \"./src/modules/wrd-lib/settings/settings-section.js\");\n\nclass SettingsForm {\n  constructor() {\n    this.elements = {};\n    this.elements.main = document.createElement(\"div\");\n    this.elements.center = document.createElement(\"div\");\n    this.elements.header = document.createElement(\"div\");\n    this.elements.closeButtonContainer = document.createElement(\"span\");\n    this.elements.closeButton = document.createElement(\"button\");\n    this.elements.wrdlogo = document.createElement(\"span\");\n    this.elements.main.id = 'settings';\n    this.elements.center.classList.add('center');\n    this.elements.header.classList.add('header');\n    this.elements.wrdlogo.classList.add('middle', 'wrd-plus-logo');\n    this.elements.closeButton.classList.add('close-btn');\n    this.elements.closeButtonContainer.classList.add('middle', 'right');\n    this.elements.main.appendChild(this.elements.center);\n    this.elements.center.appendChild(this.elements.header);\n    this.elements.header.appendChild(this.elements.wrdlogo);\n    this.elements.header.appendChild(this.elements.closeButtonContainer);\n    this.elements.closeButtonContainer.appendChild(this.elements.closeButton);\n    this.elements.closeButton.addEventListener('click', this.remove.bind(this));\n  }\n  /**\n   * Creates a section to add input fields \n   * @returns {SettingsSection}\n   */\n\n\n  addSection() {\n    return new _settings_section__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, ...arguments);\n  }\n  /**\n   * Adds a heading within the container\n   * @param {string} text \n   */\n\n\n  addHeading(text = 'HEADING') {\n    const heading = document.createElement('span');\n    heading.innerText = text;\n    heading.classList.add('middle', 'heading');\n    this.elements.center.appendChild(heading);\n  }\n  /**\n   * Appends settings panel to the body of the document\n   */\n\n\n  show() {\n    if (document.readyState === 'complete') document.body.appendChild(this.elements.main);\n  }\n  /**\n   * Removes the whole settings panel\n   */\n\n\n  remove() {\n    this.elements.main.remove();\n  }\n\n  toggle() {\n    if (this.elements.main.parentNode === document.body) {\n      this.remove();\n    } else {\n      this.show();\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/settings/settings-form.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/settings/settings-section.js":
/*!**********************************************************!*\
  !*** ./src/modules/wrd-lib/settings/settings-section.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SettingsSection; });\n/* harmony import */ var _settings_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-form */ \"./src/modules/wrd-lib/settings/settings-form.js\");\n\nclass SettingsSection {\n  /**\n   * \n   * @param {SettingsForm} settingsForm \n   * @param {string} heading \n   */\n  constructor(settingsForm, heading = 'SECTION') {\n    this.inputs = {};\n    settingsForm.addHeading(heading);\n    this.form = document.createElement('form');\n\n    this.form.onsubmit = e => e.preventDefault();\n\n    settingsForm.elements.center.appendChild(this.form);\n  }\n  /**\n   * \n   * @param {string} name \n   */\n\n\n  isNameValid(name) {\n    return !(name in this.inputs);\n  }\n  /**\n   * \n   * @param {string} name \n   * @param {string} suffix \n   */\n\n\n  setNameSuffix(name, suffix) {\n    return name.toString() + suffix;\n  }\n  /**\n   * @returns {HTMLBRElement}\n   */\n\n\n  addLineBreak() {\n    const linebreak = document.createElement('br');\n    this.form.appendChild(linebreak);\n    return linebreak;\n  }\n  /**\n   * \n   * @param {string} text\n   * @param {number} level\n   * @returns {HTMLSpanElement} \n   */\n\n\n  addHeading(text, level = 1) {\n    const label = document.createElement(`h${level}`);\n    label.textContent = text;\n    this.form.appendChild(label);\n    return label;\n  }\n  /**\n   * \n   * @param {string} text\n   * @returns {HTMLSpanElement} \n   */\n\n\n  addLabel(text) {\n    const label = document.createElement('span');\n    label.textContent = text;\n    this.form.appendChild(label);\n    return label;\n  }\n  /**\n   * \n   * @param {string} html\n   * @returns {void} \n   */\n\n\n  appendHtml(html = '') {\n    this.form.innerHTML += html;\n  }\n  /**\n   * \n   * @param {string} name Identifier to access its value later. Suffix _cbox\n   * @param {string} text\n   * @returns {HTMLInputElement} \n   */\n\n\n  addCheckbox(name, text) {\n    name = this.setNameSuffix(name, '_cbox');\n\n    if (this.isNameValid(name)) {\n      const checkbox = document.createElement('input');\n      checkbox.name = name;\n      checkbox.type = 'checkbox';\n      this.form.appendChild(checkbox);\n      this.addLabel(text || name);\n      this.addLineBreak();\n      this.inputs[name] = checkbox;\n      return checkbox;\n    }\n  }\n  /**\n   * \n   * @param {string} name Identifier to access its value later. Suffix: _txt\n   * @param {string} text\n   * @returns {HTMLInputElement} \n   */\n\n\n  addTextbox(name, text) {\n    name = this.setNameSuffix(name, '_txt');\n\n    if (this.isNameValid(name)) {\n      const textbox = document.createElement('input');\n      textbox.type = 'text';\n      textbox.name = name;\n      this.addLabel(text || name);\n      this.addLineBreak();\n      this.form.appendChild(textbox);\n      this.addLineBreak();\n      this.inputs[name] = textbox;\n      return textbox;\n    }\n  }\n  /**\n   * \n   * @param {string} text\n   * @param {(this: SettingsSection, e: SettingsSection)=>void} clickHandler\n   * @returns {HTMLInputElement} \n   */\n\n\n  addSubmitButton(text = 'Submit', clickHandler) {\n    const submitBtn = document.createElement('input');\n    submitBtn.value = text;\n    submitBtn.type = 'submit';\n    this.form.appendChild(submitBtn);\n    if (typeof clickHandler === 'function') submitBtn.addEventListener('click', clickHandler.bind(this, this));\n    return submitBtn;\n  }\n  /**\n   * \n   * @param {HTMLInputElement} input \n   */\n\n\n  getValueFromInput(input) {\n    switch (input.type) {\n      case 'checkbox':\n        return input.checked;\n\n      default:\n        return input.value;\n    }\n  }\n  /**\n   * @returns {Object[]}\n   */\n\n\n  getValues() {\n    const values = {};\n\n    for (const input of Object.values(this.inputs)) {\n      values[input.name] = this.getValueFromInput(input);\n    }\n\n    return values;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/settings/settings-section.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/category.class.js":
/*!************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/category.class.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Category; });\nclass Category {\n  constructor(name = 'default') {\n    this.isEnabled = false;\n    this.containerClass = `${name}-style`;\n  }\n\n  select() {\n    return document.querySelectorAll(`head > style.${this.containerClass}`);\n  }\n\n  addStyle() {\n    let lastStyle;\n\n    for (const source of arguments) {\n      const style = document.createElement('style');\n      style.className = this.containerClass;\n      style.innerHTML = source.toString();\n      document.head.appendChild(style);\n      lastStyle = style;\n    }\n\n    if (lastStyle != null) lastStyle.onload = (() => this.refresh()).bind(this);\n  }\n\n  refresh() {\n    this.select().forEach(style => style.sheet.disabled = !this.isEnabled);\n  }\n\n  enable() {\n    this.isEnabled = true;\n    this.refresh();\n  }\n\n  disable() {\n    this.isEnabled = false;\n    this.refresh();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/category.class.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/index.js":
/*!***************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/index.js ***!
  \***************************************************/
/*! exports provided: DefaultCategories, CreateCategory, AutoAdd, defaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultCategories\", function() { return DefaultCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateCategory\", function() { return CreateCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutoAdd\", function() { return AutoAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultConfig\", function() { return defaultConfig; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/modules/wrd-lib/style-sheets/settings/index.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ \"./src/modules/wrd-lib/style-sheets/popup/index.js\");\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags */ \"./src/modules/wrd-lib/style-sheets/tags/index.js\");\n/* harmony import */ var _category_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.class */ \"./src/modules/wrd-lib/style-sheets/category.class.js\");\n/* harmony import */ var _website_booleans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../website-booleans */ \"./src/modules/wrd-lib/website-booleans/index.js\");\n//Styles\n\n\n //Other\n\n\n\nconst StyleSheets = {}; // Category[]\n\nconst DefaultCategories = {\n  General: CreateCategory('general'),\n  Light: CreateCategory('lightmode'),\n  Dark: CreateCategory('darkmode')\n};\nfunction CreateCategory(categoryName) {\n  if (!(categoryName in StyleSheets)) {\n    const NewCategory = new _category_class__WEBPACK_IMPORTED_MODULE_3__[\"default\"](categoryName);\n    StyleSheets[categoryName] = NewCategory;\n\n    if (arguments.length > 0) {\n      const args = Object.values(arguments).slice(1);\n      NewCategory.addStyle(...args);\n    }\n\n    return NewCategory;\n  }\n}\nfunction AutoAdd(themeObject) {\n  for (const themeName in themeObject) {\n    const CategoryName = themeName[0].toUpperCase() + themeName.substring(1).toLowerCase();\n    const Category = DefaultCategories[CategoryName];\n    if (Category) Category.addStyle(themeObject[themeName]);\n  }\n}\nfunction defaultConfig() {\n  AutoAdd(_tags__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  AutoAdd(_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  AutoAdd(_settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  DefaultCategories.General.enable();\n\n  let update = () => {\n    if (_website_booleans__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darkTheme.isEnabled) {\n      DefaultCategories.Light.enable();\n      DefaultCategories.Dark.disable();\n    } else {\n      DefaultCategories.Light.disable();\n      DefaultCategories.Dark.enable();\n    }\n  };\n\n  update();\n  if (_website_booleans__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darkTheme.inputElement) _website_booleans__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darkTheme.oninput = update;\n  return StyleSheets;\n}\ndefaultConfig();\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/popup/general.style.css":
/*!******************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/popup/general.style.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".modal-popup {\\n    display: block;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background: rgba(0, 0, 0, .5);\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n    z-index: 2;\\n}\\n.modal-popup .modal-contents {\\n    margin: auto;\\n    display: block;\\n    top: 50vh;\\n    transform: translate(0, -50%);\\n    left: 0;\\n    padding: 10px;\\n    width: 40vw;\\n    position: relative;\\n    border-radius: 15px;\\n}\\n.modal-popup .modal-contents h1 {\\n    font-size: 24px;\\n    margin: 0 0 14px;\\n}\\n.modal-popup .modal-contents .modal-close-btn {\\n    position: absolute;\\n    -webkit-transform: rotate(45deg);\\n    transform: rotate(45deg);\\n    cursor: pointer;\\n    font-size: 28px;\\n    right: 0;\\n    top: 0;\\n    margin: auto;\\n    height: 16px;\\n    width: 16px;\\n}\\n.modal-popup .modal-body span {\\n    display: block;\\n}\\n.modal-popup .btn {\\n    cursor: pointer;\\n    color: #e8e8e8;\\n    font-weight: 700;\\n    padding: 5px;\\n    background: #151719;\\n    min-width: 80px;\\n    margin-top: 4px;\\n    margin-right: 4px;\\n    border: 0;\\n}\\n.modal-popup img {\\n    width: 100%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/popup/general.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/popup/index.js":
/*!*********************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/popup/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _general_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.style.css */ \"./src/modules/wrd-lib/style-sheets/popup/general.style.css\");\n/* harmony import */ var _general_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_general_style_css__WEBPACK_IMPORTED_MODULE_0__);\n //import Light from './light.style.css'\n//import Dark from './dark.style.css'\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  General: (_general_style_css__WEBPACK_IMPORTED_MODULE_0___default())\n});\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/popup/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/settings/dark.style.css":
/*!******************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/settings/dark.style.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"div#settings {\\n  background-color: #101010;\\n}\\n\\ndiv#settings .listbox {\\n  border: 1px solid #212121;\\n}\\n\\ndiv#settings .listbox option:focus {\\n  background-color: lightblue;\\n}\\n\\ndiv#settings .flat,\\ndiv#settings input[type=submit] {\\n  background-color: #01579B;\\n  color: #f5f5f5;\\n}\\n\\ndiv#settings .flat:hover,\\ndiv#settings input[type=submit]:hover {\\n  color: #00579b;\\n  background-color: #f3f3f3;\\n}\\n\\ndiv#settings .flat:active,\\ndiv#settings input[type=submit]:active {\\n  background-color: #00579b;\\n  color: #0070c5;\\n}\\n\\ndiv#settings div.center {\\n  border: 1px solid #212121;\\n}\\n\\ndiv#settings .header {\\n  border-bottom: 1px solid #252525;\\n}\\n\\ndiv#settings h1,\\ndiv#settings span {\\n  color: white;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/settings/dark.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/settings/general.style.css":
/*!*********************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/settings/general.style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"span.wrd-plus-logo {\\n    display: inline-block;\\n    font: inherit;\\n}\\n\\nspan.wrd-plus-logo::before {\\n    content: \\\"WRD\\\";\\n}\\n\\nspan.wrd-plus-logo::after {\\n    content: \\\"+\\\";\\n    color: Gold;\\n}\\n\\ndiv#settings {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    z-index: 99999;\\n}\\n\\ndiv#settings .heading {\\n    margin-top: 5px;\\n\\n    font-weight: bold;\\n    font-size: 28px;\\n}\\n\\ndiv#settings .listbox {\\n    margin: 5px;\\n    padding: 5px;\\n    width: 100%;\\n    display: block;\\n}\\n\\ndiv#settings .listbox option {\\n    display: block;\\n    cursor: pointer;\\n}\\n\\ndiv#settings .flat,\\ndiv#settings input[type=submit] {\\n    outline: none;\\n    border: 1px solid transparent;\\n    border-radius: 5px;\\n    padding: 4px 15px;\\n    font-weight: bolder;\\n    margin-top: 5px;\\n    margin-bottom: 5px;\\n}\\n\\ndiv#settings .flat:hover,\\ndiv#settings input[type=submit]:hover {\\n    -webkit-transition: all 0.3s;\\n    transition: all 0.3s;\\n}\\n\\ndiv#settings .flat:active,\\ndiv#settings input[type=submit]:active {\\n    -webkit-transition: all 0.1s;\\n    transition: all 0.1s;\\n}\\n\\ndiv#settings div.center {\\n    border-radius: 15px;\\n    background-color: none;\\n    left: 10%;\\n    bottom: 10%;\\n    margin: auto;\\n    padding: 15px;\\n    width: 80%;\\n    height: 80%;\\n}\\n\\ndiv#settings div.center h1,\\ndiv#settings div.center h2,\\ndiv#settings div.center h3,\\ndiv#settings div.center h4,\\ndiv#settings div.center input,\\ndiv#settings div.center a,\\ndiv#settings div.center span {\\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n    margin: 5px;\\n}\\n\\ndiv#settings div.center .header {\\n    padding-bottom: 10px;\\n    margin-bottom: 10px;\\n}\\n\\ndiv#settings div.center .header .middle {\\n    vertical-align: middle;\\n}\\n\\ndiv#settings div.center .header .right {\\n    float: right;\\n}\\n\\ndiv#settings div.center .header .close-btn {\\n    height: 3vh;\\n    width: 3vh;\\n    border: 1px solid transparent;\\n    border-radius: 50%;\\n    background-color: #a50000;\\n    color: transparent;\\n    text-align: center;\\n    font-size: 2vh;\\n    font-family: Helvetica, Arial, sans-serif;\\n    cursor: pointer;\\n    -webkit-transition: color 0.5s;\\n    transition: color 0.5s;\\n}\\n\\ndiv#settings div.center .header .close-btn:hover {\\n    color: red;\\n}\\n\\ndiv#settings div.center span {\\n    margin-left: 2px;\\n}\\n\\ndiv#settings div.center input[type=checkbox],\\ndiv#settings div.center input[type=submit] {\\n    cursor: pointer;\\n}\\n\\ndiv#settings div.center input[type=checkbox] {\\n    padding: 2px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/settings/general.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/settings/index.js":
/*!************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/settings/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _general_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.style.css */ \"./src/modules/wrd-lib/style-sheets/settings/general.style.css\");\n/* harmony import */ var _general_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_general_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _light_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light.style.css */ \"./src/modules/wrd-lib/style-sheets/settings/light.style.css\");\n/* harmony import */ var _light_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_light_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dark_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark.style.css */ \"./src/modules/wrd-lib/style-sheets/settings/dark.style.css\");\n/* harmony import */ var _dark_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dark_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  General: (_general_style_css__WEBPACK_IMPORTED_MODULE_0___default()),\n  Light: (_light_style_css__WEBPACK_IMPORTED_MODULE_1___default()),\n  Dark: (_dark_style_css__WEBPACK_IMPORTED_MODULE_2___default())\n});\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/settings/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/settings/light.style.css":
/*!*******************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/settings/light.style.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"div#settings {\\n  background-color: #f3f3f3;\\n}\\n\\ndiv#settings .listbox {\\n  border: 1px solid #212121;\\n}\\n\\ndiv#settings .listbox option:focus {\\n  background-color: lightblue;\\n}\\n\\ndiv#settings .flat,\\ndiv#settings input[type=submit] {\\n  background-color: #01579B;\\n  color: #f5f5f5;\\n}\\n\\ndiv#settings .flat:hover,\\ndiv#settings input[type=submit]:hover {\\n  color: #00579b;\\n  background-color: #dbdbdb;\\n}\\n\\ndiv#settings .flat:active,\\ndiv#settings input[type=submit]:active {\\n  background-color: #00579b;\\n  color: #0070c5;\\n}\\n\\ndiv#settings div.center {\\n  border: 1px solid #212121;\\n}\\n\\ndiv#settings .header {\\n  border-bottom: 1px solid #252525;\\n}\\n\\ndiv#settings h1,\\ndiv#settings span {\\n  color: #000;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/settings/light.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/tags/dark.style.css":
/*!**************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/tags/dark.style.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*SPOILER*/\\nspoiler {\\n    background-color: #181919;\\n    color: #fff;\\n}\\n\\nspoiler::before {\\n    color: #fff;\\n    border-bottom-color: #262929b5;\\n}\\n/*CODE*/\\ncode {\\n    background-color: #1c1d1d;\\n    border-color: #0000006b;\\n}\\ncode > div.head {\\n    border-bottom-color: #262929b5;\\n}\\ncode > div.head > h1 {\\n    color: #fff;\\n}\\ncode > div.source > span {\\n    color: #bfbfbf;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/tags/dark.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/tags/general.style.css":
/*!*****************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/tags/general.style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*VARIABLES*/\\n:root {\\n    --font-var: roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n    --heading-size: 18px;\\n}\\n/*SPOILER*/\\nspoiler {\\n    margin-top: 1px;\\n    font-family: var(--font-var);\\n    border: 1px solid transparent;\\n    border-radius: 5px;\\n    padding: 5px;\\n    display: block;\\n}\\n/*SPOILER-OPEN*/\\nspoiler[open=true] {\\n    display: block;\\n}\\n/*SPOILER-CLOSE*/\\nspoiler:not([open]) *,\\nspoiler[open=false] * {\\n    display: none;\\n}\\n/*SPOILER-TITLE*/\\nspoiler::before {\\n    cursor: pointer;\\n    content: \\\"Spoiler\\\";\\n    display: block;\\n    font-weight: 300;\\n    font-family: inherit;\\n    border-bottom: 1px solid;\\n    margin-bottom: 4px;\\n    padding-bottom: 2px;\\n    font-size: var(--heading-size);\\n    font-family: var(--font-var)\\n}\\n/*CODE*/\\ncode {\\n    margin-top: 1px;\\n    max-height: 250px;\\n    padding: 5px;\\n    margin-top: 3px;\\n    border-radius: 5px;\\n    display: grid;\\n    height: max-content;\\n    max-width: unset;\\n    border: 1px solid;\\n}\\n/*CODE.SOURCE*/\\ncode > div.source {\\n    padding: 4px;\\n    border-radius: 6px;\\n    -moz-user-select: all;\\n    -webkit-user-select: all;\\n    overflow: auto;\\n    height: max-content;\\n    max-height: 200px;\\n    display: block;\\n    width: 100%;\\n}\\n/*CODE.SOURCE:SPANS*/\\ncode > div.source > span {\\n    font-family: Consolas, 'Courier New', Courier, monospace;\\n    font-size: 15px;\\n    display: block;\\n    word-break: break-all;\\n    max-width: max-content;\\n    width: max-content;\\n}\\n/*CODE.HEAD*/\\ncode > div.head {\\n    display: block;\\n    border-bottom: solid 1px;\\n    margin-bottom: 2px;\\n    padding-bottom: 2px;\\n}\\n/*CODE.HEAD:H1*/\\ncode > div.head > h1 {\\n    margin: 0;\\n    font-size: var(--heading-size);\\n    font-weight: 300;\\n    font-family: var(--font-var);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/tags/general.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/tags/index.js":
/*!********************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/tags/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _general_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.style.css */ \"./src/modules/wrd-lib/style-sheets/tags/general.style.css\");\n/* harmony import */ var _general_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_general_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _light_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light.style.css */ \"./src/modules/wrd-lib/style-sheets/tags/light.style.css\");\n/* harmony import */ var _light_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_light_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dark_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark.style.css */ \"./src/modules/wrd-lib/style-sheets/tags/dark.style.css\");\n/* harmony import */ var _dark_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dark_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconsole.log(_general_style_css__WEBPACK_IMPORTED_MODULE_0___default.a);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  General: (_general_style_css__WEBPACK_IMPORTED_MODULE_0___default()),\n  Light: (_light_style_css__WEBPACK_IMPORTED_MODULE_1___default()),\n  Dark: (_dark_style_css__WEBPACK_IMPORTED_MODULE_2___default())\n});\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/tags/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/style-sheets/tags/light.style.css":
/*!***************************************************************!*\
  !*** ./src/modules/wrd-lib/style-sheets/tags/light.style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"spoiler {\\n    background-color: #dedede;\\n    border-color: #0000006b;\\n    color: #000;\\n}\\nspoiler::before {\\n    border-bottom-color: #85858559;\\n    color: #a7a7a7;\\n    text-shadow: 0.5px 0.5px 1px #00000017;\\n}\\ncode {\\n    background-color: #ececec;\\n    border-color:#0000006b;\\n}\\ncode > div.source > span {\\n    color: #565656;\\n}\\ncode > div.head {\\n    border-bottom-color:#85858559;\\n}\\n\\ncode > div.head {\\n    border-color: #c0c7c7b5;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/style-sheets/tags/light.style.css?");

/***/ }),

/***/ "./src/modules/wrd-lib/tag-parser/check-reply.js":
/*!*******************************************************!*\
  !*** ./src/modules/wrd-lib/tag-parser/check-reply.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckReply; });\n/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ \"./src/modules/wrd-lib/tag-parser/parser.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/modules/wrd-lib/tag-parser/utils.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/modules/wrd-lib/tag-parser/settings/index.js\");\n\n\n\n/**\n * \n * @param {Element} reply Reply body where tags would commonly be used in. \n * @param {Function} onWrap Function that's called each time a new tag has been created.\n */\n\nfunction CheckReply(reply, onWrap) {\n  const Tags = Object(_parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(reply);\n  const Containers = [];\n\n  for (const Tag of Tags) {\n    if (!Tag.isClosed) {\n      continue;\n    }\n\n    const Container = document.createElement(Tag.Name in _settings__WEBPACK_IMPORTED_MODULE_2__[\"AllowedTags\"] ? Tag.Name : \"div\");\n\n    for (const [, lineElement] of Tag.Contents) {\n      if (Tag.Name in _settings__WEBPACK_IMPORTED_MODULE_2__[\"RawTags\"]) {\n        Container.appendChild(lineElement);\n      } else {\n        const newLineElement = document.createElement(\"span\");\n        newLineElement.textContent = lineElement.textContent;\n        Container.appendChild(newLineElement);\n        lineElement.remove();\n      }\n    }\n\n    Tag.Contents = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"GetLineList\"])(Container.children);\n    Tag.Elements.Opening.parentNode.insertBefore(Container, Tag.Elements.Opening);\n    Tag.Elements.Opening.remove();\n    Tag.Elements.Closing.remove();\n    Tag.Container = Container;\n    if (Tag.Parent && Tag.Parent.Container) Tag.Parent.Container.appendChild(Container);\n    if (onWrap) onWrap(Container, Tag);\n    if (Container) Containers.push(Container);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/tag-parser/check-reply.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/tag-parser/index.js":
/*!*************************************************!*\
  !*** ./src/modules/wrd-lib/tag-parser/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckPage; });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ \"./src/modules/wrd-lib/enums/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/modules/wrd-lib/tag-parser/utils.js\");\n\n\n\nfunction callback(mutationList) {\n  for (const mutation of mutationList) {\n    if (mutation.type == \"childList\") {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"CheckReplyList\"])(document.querySelectorAll(\".activitycard > div\")); // mutation.addedNodes);\n    }\n  }\n}\n\nfunction CheckPage() {\n  if (_enums__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].getLinkType(location.href) === _enums__WEBPACK_IMPORTED_MODULE_0__[\"LinkType\"].PROFILE) {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"CheckReplyList\"])(document.querySelectorAll(\".activitycard > div\"));\n\n    try {\n      const Container = document.querySelector(\"#activityfeed > .activitycards\");\n      const Observer = new MutationObserver(callback);\n      Observer.observe(Container, {\n        childList: true\n      });\n    } catch (errr) {}\n  } else {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"CheckReplyList\"])(document.querySelectorAll(\".thread_replycontent\"));\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/tag-parser/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/tag-parser/parser.js":
/*!**************************************************!*\
  !*** ./src/modules/wrd-lib/tag-parser/parser.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TagScanner; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/wrd-lib/tag-parser/utils.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/modules/wrd-lib/tag-parser/settings/index.js\");\n/* harmony import */ var _tag_data_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-data.class */ \"./src/modules/wrd-lib/tag-parser/tag-data.class.js\");\n\n\n\n/**\n* Looks for enclosed tags which have a [opening] and [/closing] tag.\n* @param {Element} Container Where the tags are supposed to be in. \n*/\n\nfunction TagScanner(Container) {\n  const Elements = Container.children;\n  let OpenTags = 0;\n  const Tags = [];\n  const LineType = {\n    \"OPENING\": 0,\n    \"CLOSING\": 1\n  };\n  const Lines = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"GetLineList\"])(Elements);\n\n  function GetLineType(LineText) {\n    if (LineText.match(_settings__WEBPACK_IMPORTED_MODULE_1__[\"Regexes\"].OpeningTag)) {\n      return LineType.OPENING;\n    } else if (LineText.match(_settings__WEBPACK_IMPORTED_MODULE_1__[\"Regexes\"].ClosingTag)) {\n      return LineType.CLOSING;\n    }\n  }\n\n  function GetParent() {\n    let Parent;\n\n    if (OpenTags > 0) {\n      for (const Tag of Tags) {\n        if (!Tag.isClosed) {\n          Parent = Tag;\n        }\n      }\n    }\n\n    return Parent;\n  }\n\n  function OpenTag(index) {\n    const [Text, Element] = Lines[index];\n    const Tag = new _tag_data_class__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Text, [], GetParent());\n    Tag.Elements.Opening = Element;\n    Tags.push(Tag);\n    ++OpenTags;\n  } //TODO: Change '==' to '==='\n\n\n  function CloseTag(index) {\n    const [Text, Element] = Lines[index];\n\n    for (let Tag of Tags) {\n      if (!Tag.isClosed && Tag.Name == Text.replace(\"/\", \"\").replace(_settings__WEBPACK_IMPORTED_MODULE_1__[\"Regexes\"].RemoveBrackets, \"\").toUpperCase()) {\n        Tag.isClosed = true;\n        Tag.Elements.Closing = Element;\n        OpenTags--;\n        break;\n      }\n    }\n  }\n\n  function AddContent(index) {\n    const [LineText, LineElement] = Lines[index];\n    let OpenTag;\n\n    for (const Tag of Tags) {\n      if (!Tag.isClosed) {\n        OpenTag = Tag;\n      }\n    }\n\n    OpenTag.Contents.push([LineText, LineElement]);\n  }\n\n  for (let index in Lines) {\n    const [Text] = Lines[index];\n\n    if (GetLineType(Text) === LineType.OPENING) {\n      const Parent = GetParent();\n\n      if (Parent && Parent.Name in _settings__WEBPACK_IMPORTED_MODULE_1__[\"NoOverlap\"]) {\n        AddContent(index);\n      } else {\n        OpenTag(index);\n      }\n    } else if (GetLineType(Text) === LineType.CLOSING) {\n      CloseTag(index);\n    } else if (OpenTags > 0) {\n      AddContent(index);\n    }\n  }\n\n  return Tags;\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/tag-parser/parser.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/tag-parser/settings/index.js":
/*!**********************************************************!*\
  !*** ./src/modules/wrd-lib/tag-parser/settings/index.js ***!
  \**********************************************************/
/*! exports provided: AllowedTags, NoOverlap, RawTags, TagHandlers, Regexes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AllowedTags\", function() { return AllowedTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoOverlap\", function() { return NoOverlap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RawTags\", function() { return RawTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TagHandlers\", function() { return TagHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Regexes\", function() { return Regexes; });\nconst AllowedTags = {\n  \"CODE\": true,\n  \"SPOILER\": true\n};\nconst NoOverlap = {\n  \"CODE\": true\n};\nconst RawTags = {\n  \"SPOILER\": true\n};\nconst TagHandlers = {\n  \"CODE\": function () {\n    // const SourceContainer = document.createElement(\"div\");\n    const TitleContainer = document.createElement(\"div\");\n    const Selectable = document.createElement(\"div\");\n    const Heading = document.createElement(\"h1\"); //SourceContainer.className = \"source\";\n\n    TitleContainer.className = \"head\";\n    Selectable.className = \"source\";\n    Heading.textContent = \"Code\";\n    TitleContainer.appendChild(Heading);\n    this.appendChild(TitleContainer);\n    this.appendChild(Selectable); //SourceContainer.appendChild(Selectable);\n\n    const SpanElements = this.querySelectorAll(\"span\");\n\n    for (let i = 0; i < SpanElements.length; ++i) {\n      Selectable.appendChild(SpanElements[i]);\n    }\n  },\n  \"SPOILER\": function (container) {\n    container.addEventListener('click', function (e) {\n      if (e.target === container) this.setAttribute('open', (this.getAttribute('open') !== 'true').toString());\n    });\n  }\n};\nconst Regexes = {\n  \"RemoveBrackets\": /[[\\]|/]/g,\n  // [anyTag] --> anyTag \n  \"ClosingTag\": /^\\[\\/[A-z]+\\]/gi,\n  // [anyTag]\n  \"OpeningTag\": /^\\[[A-z]+\\]/gi // [/anyTag]\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  TagHandlers,\n  AllowedTags,\n  NoOverlap,\n  RawTags,\n  Regexes\n});\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/tag-parser/settings/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/tag-parser/tag-data.class.js":
/*!**********************************************************!*\
  !*** ./src/modules/wrd-lib/tag-parser/tag-data.class.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TagData; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/modules/wrd-lib/tag-parser/settings/index.js\");\n\nclass TagData {\n  constructor(name = '', contents = [], parent = false, isClosed = false) {\n    this.Name = name.replace(_settings__WEBPACK_IMPORTED_MODULE_0__[\"Regexes\"].RemoveBrackets, '').toUpperCase();\n    this.Contents = contents;\n    this.Parent = parent;\n    this.isClosed = isClosed;\n    this.Container = false;\n    this.Elements = {\n      Opening: false,\n      Closing: false\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/tag-parser/tag-data.class.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/tag-parser/utils.js":
/*!*************************************************!*\
  !*** ./src/modules/wrd-lib/tag-parser/utils.js ***!
  \*************************************************/
/*! exports provided: GetTextOnly, GetLineList, OnWrap, CheckReplyList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetTextOnly\", function() { return GetTextOnly; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetLineList\", function() { return GetLineList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OnWrap\", function() { return OnWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CheckReplyList\", function() { return CheckReplyList; });\n/* harmony import */ var _settings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/ */ \"./src/modules/wrd-lib/tag-parser/settings/index.js\");\n/* harmony import */ var _check_reply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-reply */ \"./src/modules/wrd-lib/tag-parser/check-reply.js\");\n/* harmony import */ var _tag_data_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-data.class */ \"./src/modules/wrd-lib/tag-parser/tag-data.class.js\");\n\n\n\n/**\n * Gets child nodes that are text types.\n * @param {Element} element\n * @returns List of text nodes. \n */\n\nfunction GetTextOnly(element) {\n  return [].reduce.call(element.childNodes, function (child0, child1) {\n    return child0 + (child1.nodeType === 3 ? child1.textContent : '');\n  }, '');\n}\n/**\n * \n * @param {HTMLCollection} Elements \n * @param {HTMLElement[]} Elements \n */\n\nfunction GetLineList(Elements) {\n  const Lines = [];\n\n  for (const element of Elements) {\n    Lines.push([GetTextOnly(element), element]);\n  }\n\n  return Lines;\n}\n/**\n * Checks for handlers for newly created tags.\n * @param {HTMLDivElement} Container \n * @param {TagData} Tag \n */\n\nfunction OnWrap(Container, Tag) {\n  if (Tag.Name in _settings___WEBPACK_IMPORTED_MODULE_0__[\"TagHandlers\"]) {\n    try {\n      _settings___WEBPACK_IMPORTED_MODULE_0__[\"TagHandlers\"][Tag.Name].call(Container, Container);\n    } catch (err) {\n      console.log(err);\n    }\n  }\n}\n/**\n * Goes through a list of replies.\n * @param {array} replies \n */\n\nfunction CheckReplyList(replies) {\n  for (const Reply of replies) {\n    if (Reply.tagName && Reply.tagName === \"DIV\") {\n      //this=checkReply\n      Object(_check_reply__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Reply, OnWrap);\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  GetTextOnly,\n  OnWrap,\n  CheckReplyList\n});\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/tag-parser/utils.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/thread-searcher/index.js":
/*!******************************************************!*\
  !*** ./src/modules/wrd-lib/thread-searcher/index.js ***!
  \******************************************************/
/*! exports provided: SearchThreadsAsync, SearchThreadAsync, SearchThreadSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_threads_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-threads-async */ \"./src/modules/wrd-lib/thread-searcher/search-threads-async.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadsAsync\", function() { return _search_threads_async__WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadsAsync\"]; });\n\n/* harmony import */ var _search_thread_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-thread-async */ \"./src/modules/wrd-lib/thread-searcher/search-thread-async.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadAsync\", function() { return _search_thread_async__WEBPACK_IMPORTED_MODULE_1__[\"SearchThreadAsync\"]; });\n\n/* harmony import */ var _search_thread_sync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-thread-sync */ \"./src/modules/wrd-lib/thread-searcher/search-thread-sync.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadSync\", function() { return _search_thread_sync__WEBPACK_IMPORTED_MODULE_2__[\"SearchThreadSync\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/thread-searcher/index.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/thread-searcher/search-thread-async.js":
/*!********************************************************************!*\
  !*** ./src/modules/wrd-lib/thread-searcher/search-thread-async.js ***!
  \********************************************************************/
/*! exports provided: SearchThreadAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadAsync\", function() { return SearchThreadAsync; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/wrd-lib/thread-searcher/utils.js\");\n\n/**\n * \n * @param {string} threadName \n * @returns {Promise<SearchResults>}\n */\n\nfunction SearchThreadAsync(threadName) {\n  return new Promise(resolve => {\n    fetch(_utils__WEBPACK_IMPORTED_MODULE_0__[\"QueryEndpoint\"].replace(\"$name\", threadName)).then(res => res.text()).then(body => {\n      resolve(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"GetThreadsFromBodyHTML\"])(body));\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/thread-searcher/search-thread-async.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/thread-searcher/search-thread-sync.js":
/*!*******************************************************************!*\
  !*** ./src/modules/wrd-lib/thread-searcher/search-thread-sync.js ***!
  \*******************************************************************/
/*! exports provided: SearchThreadSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadSync\", function() { return SearchThreadSync; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/wrd-lib/thread-searcher/utils.js\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ \"./src/modules/wrd-lib/classes/index.js\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ \"./src/modules/wrd-lib/enums/index.js\");\n\n\n\n/**\n * \n * @param {string} threadName \n * @returns {SearchResults}\n */\n\nfunction SearchThreadSync(threadName) {\n  const currentLinkType = _enums__WEBPACK_IMPORTED_MODULE_2__[\"LinkType\"].getLinkType(location.href);\n\n  if (currentLinkType === _enums__WEBPACK_IMPORTED_MODULE_2__[\"LinkType\"].SECTION) {\n    if (_utils__WEBPACK_IMPORTED_MODULE_0__[\"cached\"].searchResults) {\n      return _utils__WEBPACK_IMPORTED_MODULE_0__[\"cached\"].searchResults;\n    } else {\n      const ForumContainer = document.querySelector(\"div.forumcontainer > table\");\n      const ThreadList = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"SearchResults\"]();\n\n      if (ForumContainer) {\n        const IndexSkip = ForumContainer.querySelector(\"thead>tr\").children.length - 5;\n        ForumContainer.querySelectorAll(\"tbody>tr\").forEach(row => {\n          const RowChildren = row.children;\n          const ThreadMeta = RowChildren[IndexSkip + 1];\n          const ThreadLink = ThreadMeta.children[0];\n          const ThreadAuthorMeta = ThreadMeta.children[1];\n          const ThreadAuthorLink = ThreadAuthorMeta.children[0];\n          const ThreadReplies = RowChildren[IndexSkip + 2];\n          const ThreadViews = RowChildren[IndexSkip + 3];\n          const ThreadLastReplierMeta = RowChildren[IndexSkip + 4];\n          const ThreadLastReplierLink = ThreadLastReplierMeta.children[0];\n          const BasicThreadData = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"GetThreadInfoFromAnchorTag\"])(ThreadLink);\n          const BasicAuthorData = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"MakeUserFromAnchorTag\"])(ThreadAuthorLink);\n          const BasicReplierData = ThreadLastReplierLink ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"MakeUserFromAnchorTag\"])(ThreadLastReplierLink) : {};\n          let threadSection;\n\n          if (location.href.match(/[\\/]all/)) {\n            threadSection = RowChildren[0].children[0];\n\n            if (threadSection) {\n              threadSection = threadSection.href.split(\"/\").reverse()[0];\n            } else {\n              threadSection = null;\n            }\n          } else {\n            threadSection = document.title.split('-');\n            threadSection.pop();\n            threadSection = threadSection.join('-').trim();\n          }\n\n          ThreadList.Add(new _classes__WEBPACK_IMPORTED_MODULE_1__[\"ThreadData\"](BasicThreadData.Name, BasicThreadData.Id, ThreadReplies.textContent, ThreadViews.textContent, BasicAuthorData, BasicReplierData, threadSection));\n        });\n      }\n\n      _utils__WEBPACK_IMPORTED_MODULE_0__[\"cached\"].searchResults = ThreadList;\n      return ThreadList;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/thread-searcher/search-thread-sync.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/thread-searcher/search-threads-async.js":
/*!*********************************************************************!*\
  !*** ./src/modules/wrd-lib/thread-searcher/search-threads-async.js ***!
  \*********************************************************************/
/*! exports provided: SearchThreadsAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchThreadsAsync\", function() { return SearchThreadsAsync; });\n/* harmony import */ var _search_thread_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-thread-async */ \"./src/modules/wrd-lib/thread-searcher/search-thread-async.js\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes */ \"./src/modules/wrd-lib/classes/index.js\");\n//TODO: Rewrite\n\n\n/**\n * \n * @param {string[]} threadNames\n * @returns {Promise<SearchResults>}\n */\n\nfunction SearchThreadsAsync(threadNames = []) {\n  const searchResults = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"SearchResults\"]();\n  const threadsFound = {}; //Keeps track of found threads\n\n  let currentIndex = -1;\n  let previousResults; //Looks for threads that may be within the same page\n  //to save the amount of queries sent.\n\n  return new Promise(resolve => {\n    //Iterates thru the queries requested, using paramater threadNames[]\n    function Next() {\n      currentIndex++;\n      const threadName = threadNames[currentIndex];\n      /**\n       * \n       * @param {SearchResults} threads \n       */\n\n      function LookIn(threads) {\n        threads.collection.forEach(threadData => {\n          threadNames.forEach(threadName2 => {\n            //Checks if thread has been found and that it wont be duplicated\n            if (threadData.Name === threadName2 && !(threadName2 in threadsFound)) {\n              threadsFound[threadName2] = true;\n              searchResults.Add(threadData);\n            }\n          });\n        });\n        previousResults = threads;\n\n        if (currentIndex < threadNames.length - 1) {\n          //Cheks wether \n          Next();\n        } else {\n          resolve(searchResults);\n        }\n      } //Checks if thread has been within previous queries\n\n\n      if (threadsFound[threadName]) {\n        LookIn(previousResults);\n      } else {\n        //Else send new query\n        Object(_search_thread_async__WEBPACK_IMPORTED_MODULE_0__[\"SearchThreadAsync\"])(threadName).then(res => {\n          LookIn(res);\n        });\n      }\n    }\n\n    Next();\n  });\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/thread-searcher/search-threads-async.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/thread-searcher/utils.js":
/*!******************************************************!*\
  !*** ./src/modules/wrd-lib/thread-searcher/utils.js ***!
  \******************************************************/
/*! exports provided: cached, QueryEndpoint, Regexes, MakeUserFromAnchorTag, GetThreadInfoFromAnchorTag, GetThreadsFromBodyHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cached\", function() { return cached; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QueryEndpoint\", function() { return QueryEndpoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Regexes\", function() { return Regexes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MakeUserFromAnchorTag\", function() { return MakeUserFromAnchorTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetThreadInfoFromAnchorTag\", function() { return GetThreadInfoFromAnchorTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetThreadsFromBodyHTML\", function() { return GetThreadsFromBodyHTML; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/modules/wrd-lib/classes/index.js\");\n\nconst cached = {};\nconst QueryEndpoint = 'https://wearedevs.net/forum/all?order=latestthread&search=$name';\nconst Regexes = {\n  ExtractTableHeadAndBody: /<thead>([\\s\\S]*?)<\\/thead>[\\s\\S]*?<tbody>([\\s\\S]*?)<\\/tbody>/,\n  TableContents: /<table>([\\s\\S]*?)<\\/table>/,\n  RemoveTags: /<script.*?<\\/script>|<style.*?<\\/style>/g,\n  RemoveNewLines: /[\\r\\n]+\\s+/g,\n  TableRow: /<tr>(.*?)<\\/tr>/g\n};\n/**\n * \n * @param {Element} anchorTag\n * @returns {User} \n */\n\nfunction MakeUserFromAnchorTag(anchorTag) {\n  if (anchorTag && anchorTag.href) {\n    return new _classes__WEBPACK_IMPORTED_MODULE_0__[\"User\"](anchorTag.textContent.trim(), anchorTag.href.match(/\\?uid=([0-9]+)/)[1]);\n  }\n}\n/**\n * \n * @param {Element} anchorTag\n * @returns {Object} \n */\n\nfunction GetThreadInfoFromAnchorTag(anchorTag) {\n  if (anchorTag && anchorTag.href) {\n    return {\n      Name: anchorTag.textContent.trim(),\n      Id: anchorTag.href.match(/\\/([0-9]+)/)[1]\n    };\n  }\n}\n/**\n* \n* @param {string} html\n* @returns {SearchResults} \n*/\n\nfunction GetThreadsFromBodyHTML(html) {\n  const t0 = performance.now();\n  const [, contents] = html.replace(Regexes.RemoveTags, \"\").match(Regexes.TableContents);\n  const [,, tbody] = contents.replace(Regexes.RemoveNewLines, '').match(Regexes.ExtractTableHeadAndBody);\n  const searchResults = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"SearchResults\"]();\n  const rows = tbody.replace(/[\\n]/g, '').matchAll(Regexes.TableRow);\n\n  for (let [row] of rows) {\n    try {\n      const [, threadSection, threadId, threadName, threadAuthorId, threadAuthorName, threadReplies, threadViews] = row.match(/.*?<a.*?href=.\\/forum\\/(.*?)\".*?<a.*?href=.\\/forum\\/t\\/([0-9]+).*?>([\\s\\S]+?)<\\/a>.*?href=.\\/profile\\?uid=([0-9]+).*?>(.*?)<\\/a>.*?<td.*?>[\\s]?([0-9]+).*?>[\\s]?([0-9]+).*?<?/); // .*?href=.\\/profile\\?uid=([0-9]+).*?>([A-z]+)<\\/a>\n\n      let LastReplierMatch = row.replace(/<a.*?href=.\\/profile\\?uid=([0-9]+).*?>(.*?)<\\/a>?.*?/, '').match(/.*?<\\/td>.*?href=.\\/profile\\?uid=([0-9]+).*?>(.*?)<\\/a>?.*?/);\n\n      if (LastReplierMatch) {\n        LastReplierMatch = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"User\"](LastReplierMatch[2], LastReplierMatch[1]);\n      }\n\n      searchResults.Add(new _classes__WEBPACK_IMPORTED_MODULE_0__[\"ThreadData\"](threadName, threadId, threadReplies, threadViews, new _classes__WEBPACK_IMPORTED_MODULE_0__[\"User\"](threadAuthorName, threadAuthorId), LastReplierMatch, threadSection));\n    } catch (x) {\n      console.error(x);\n    }\n  }\n\n  return searchResults;\n}\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/thread-searcher/utils.js?");

/***/ }),

/***/ "./src/modules/wrd-lib/website-booleans/index.js":
/*!*******************************************************!*\
  !*** ./src/modules/wrd-lib/website-booleans/index.js ***!
  \*******************************************************/
/*! exports provided: darkTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\nconst darkTheme = {\n  get inputElement() {\n    return document.querySelector('.switch>input#themer') || {};\n  },\n\n  get isEnabled() {\n    return this.inputElement.checked;\n  },\n\n  set isEnabled(enabled = true) {\n    this.inputElement.checked = enabled;\n  },\n\n  set oninput(handler) {\n    this.inputElement.oninput = handler;\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  darkTheme\n});\n\n//# sourceURL=webpack:///./src/modules/wrd-lib/website-booleans/index.js?");

/***/ })

/******/ });