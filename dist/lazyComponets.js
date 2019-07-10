(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyComponets"],{

/***/ "./node_modules/react-hooks-fetch/src/dev-utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-hooks-fetch/src/dev-utils.js ***!
  \*********************************************************/
/*! exports provided: checkInfiniteLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkInfiniteLoop\", function() { return checkInfiniteLoop; });\n/* eslint-disable no-console */\n\nlet lastInput = null;\nconst calls = [];\nconst checkInfiniteLoop = (input) => {\n  const now = Date.now();\n  calls.push(now);\n  if (lastInput === input) {\n    if (calls.length > 1) {\n      if (calls[0] > now - 100) {\n        console.log('Too many invocations in a short period. You probably forgot to memoize opts.');\n      }\n      calls.splice(0);\n    }\n  } else {\n    if (lastInput && calls.length) {\n      calls.splice(0);\n    }\n    lastInput = input;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/react-hooks-fetch/src/dev-utils.js?");

/***/ }),

/***/ "./node_modules/react-hooks-fetch/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-hooks-fetch/src/index.js ***!
  \*****************************************************/
/*! exports provided: useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFetch\", function() { return useFetch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dev_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev-utils */ \"./node_modules/react-hooks-fetch/src/dev-utils.js\");\n\n\n\n\nconst createFetchError = (response) => {\n  const err = new Error(`${response.status} ${response.statusText}`);\n  err.name = 'FetchError';\n  return err;\n};\n\nconst initialState = { loading: false, error: null, data: null };\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'init':\n      return initialState;\n    case 'start':\n      if (state.loading) return state; // to bail out, just in case\n      return { ...state, loading: true };\n    case 'data':\n      if (!state.loading) return state; // to bail out, just in case\n      return { ...state, loading: false, data: action.data };\n    case 'error':\n      if (!state.loading) return state; // to bail out, just in case\n      return { ...state, loading: false, error: action.error };\n    default:\n      throw new Error('no such action type');\n  }\n};\n\nconst createPromiseResolver = () => {\n  let resolve;\n  const promise = new Promise((r) => { resolve = r; });\n  return { resolve, promise };\n};\n\nconst defaultOpts = {};\nconst defaultReadBody = body => body.json();\n\nconst useFetch = (input, opts = defaultOpts) => {\n  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, initialState);\n  const promiseResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(createPromiseResolver, [input, opts]);\n  // Using layout effect may not be ideal, but unless we run the effect\n  // synchronously, Suspense fallback isn't rendered in Concurrent Mode.\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useLayoutEffect\"])(() => {\n    if (true) Object(_dev_utils__WEBPACK_IMPORTED_MODULE_1__[\"checkInfiniteLoop\"])(input);\n    let dispatchSafe = action => dispatch(action);\n    const abortController = new AbortController();\n    (async () => {\n      if (!input) return;\n      // start fetching\n      dispatchSafe({ type: 'start' });\n      try {\n        const { readBody = defaultReadBody, ...init } = opts;\n        const response = await fetch(input, {\n          ...init,\n          signal: abortController.signal,\n        });\n        // check response\n        if (response.ok) {\n          const body = await readBody(response);\n          dispatchSafe({ type: 'data', data: body });\n        } else {\n          dispatchSafe({ type: 'error', error: createFetchError(response) });\n        }\n      } catch (e) {\n        dispatchSafe({ type: 'error', error: e });\n      }\n      // finish fetching\n      promiseResolver.resolve();\n    })();\n    const cleanup = () => {\n      dispatchSafe = () => null; // we should not dispatch after unmounted.\n      abortController.abort();\n      dispatch({ type: 'init' });\n    };\n    return cleanup;\n  }, [input, opts, promiseResolver]);\n  if (state.loading) throw promiseResolver.promise;\n  return state;\n};\n\n\n//# sourceURL=webpack:///./node_modules/react-hooks-fetch/src/index.js?");

/***/ }),

/***/ "./src/web/components/home/index.tsx":
/*!*******************************************!*\
  !*** ./src/web/components/home/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hooks_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hooks-fetch */ \"./node_modules/react-hooks-fetch/src/index.js\");\n\n\n\nconst DisplayRemoteData = () => {\n  const {\n    error,\n    data\n  } = Object(react_hooks_fetch__WEBPACK_IMPORTED_MODULE_1__[\"useFetch\"])(\"https://apit.weipaitang.com/wechat/v1.0/livemaster/detail?masterId=76\");\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Error:\", error.message);\n  if (!data) return null;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u670D\\u52A1\\u7AEF\\u6570\\u636E\\uFF1A\", JSON.stringify(data));\n}; // <span>从服务端取数据中......</span>立即显示，DisplayRemoteData 异步显示\n\n\nconst Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n  fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u4ECE\\u670D\\u52A1\\u7AEF\\u53D6\\u6570\\u636E\\u4E2D......\")\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayRemoteData, null));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/web/components/home/index.tsx?");

/***/ })

}]);