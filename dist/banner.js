(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banner"],{

/***/ "./src/web/components/banner/index.tsx":
/*!*********************************************!*\
  !*** ./src/web/components/banner/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/dist/index.module.js\");\n\n\n\nconst TodoList = () => {\n  const todos = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__[\"useObservable\"])(new Map());\n  const todoRef = react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"]();\n  const addTodo = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](() => {\n    todos.set(todoRef.current.value, false);\n    todoRef.current.value = \"\";\n  }, []);\n  const toggleTodo = react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"](todo => {\n    todos.set(todo, !todos.get(todo));\n  }, []);\n  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__[\"useObserver\"])(() => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, Array.from(todos).map(([todo, done]) => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    onClick: () => toggleTodo(todo),\n    key: todo\n  }, todo, done ? \" ✔\" : \" ⏲\")), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", {\n    ref: todoRef\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", {\n    onClick: addTodo\n  }, \"Add todo\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\n//# sourceURL=webpack:///./src/web/components/banner/index.tsx?");

/***/ })

}]);