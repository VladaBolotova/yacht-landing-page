"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/Explore.jsx":
/*!******************************!*\
  !*** ./sections/Explore.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Explore = ()=>{\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"world-2\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].paddings),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n            initials: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.TypingText, {\n                    titile: \"| The World\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/sections/Explore.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.TypingText, {\n                    titile: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Choose the world you want \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                className: \"md:block hidden\"\n                            }, void 0, false, void 0, void 0),\n                            \" to explore \"\n                        ]\n                    }, void 0, true),\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/sections/Explore.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 3\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[50px] flex lg:flex-row flex-col min-h-[70px] gap-5\",\n                    children: explorWorlds.map((world, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.ExploreCard, {\n                            ...world,\n                            index: index,\n                            active: active,\n                            handleClick: setActive\n                        }, world.id, false, {\n                            fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/sections/Explore.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/sections/Explore.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 6\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/sections/Explore.jsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/sections/Explore.jsx\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Explore, \"MDFJNx0YorMygFBLrfgiis3mUN0=\");\n_c = Explore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explore);\nvar _c;\n$RefreshReg$(_c, \"Explore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9FeHBsb3JlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFdUM7QUFDUDtBQUVEO0FBQ29CO0FBQ2dCO0FBQ3ZCO0FBRTVDLE1BQU1RLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLHFCQUNBLDhEQUFDVTtRQUFRQyxXQUFXLEdBQW1CLE9BQWhCVix3REFBZTtrQkFDcEMsNEVBQUNGLHFEQUFVO1lBQ1hlLFVBQVVaLDJEQUFnQkE7WUFDMUJhLFVBQVM7WUFDVEMsYUFBWTtZQUNaQyxVQUFVO2dCQUFDQyxNQUFNLEtBQUs7Z0JBQUVDLFFBQU87WUFBSTtZQUNuQ1IsV0FBVyxHQUFxQixPQUFsQlYsMERBQWlCLEVBQUM7OzhCQUUvQiw4REFBQ0ksbURBQVVBO29CQUFDZ0IsUUFBTztvQkFDbkJDLFlBQVc7Ozs7Ozs4QkFFZCw4REFBQ2pCLG1EQUFVQTtvQkFBQ2dCLHNCQUFROzs0QkFBRTswQ0FBMEIsOERBQUNFO2dDQUNqRFosV0FBVTs7NEJBQW1COzs7b0JBQzFCVyxZQUFXOzs7Ozs7OEJBRVgsOERBQUNUO29CQUFJRixXQUFVOzhCQUViYSxhQUFhQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3hCLDhEQUFDeEIsb0RBQVdBOzRCQUVYLEdBQUd1QixLQUFLOzRCQUNUQyxPQUFPQTs0QkFDUG5CLFFBQVFBOzRCQUNSb0IsYUFBYW5COzJCQUpSaUIsTUFBTUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3JCO0dBcENNdEI7S0FBQUE7QUFzQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvRXhwbG9yZS5qc3g/NzBiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgIHN0YWdnZXJDb250YWluZXJ9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5pbXBvcnQgeyBFeHBsb3JlQ2FyZCwgVGl0bGVUZXh0LCBUeXBpbmdUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBleHBsb3JlV29ybGRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbmNvbnN0IEV4cGxvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgnd29ybGQtMicpO1xuICByZXR1cm4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5wYWRkaW5nc31gfT5cbiAgICA8bW90aW9uLmRpdlxuICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgIGluaXRpYWxzPVwiaGlkZGVuXCJcbiAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgIHZpZXdwb3J0PXt7b25jZTogZmFsc2UsIGFtb3VudDowLjI1fX1cbiAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2xgfT5cbiAgICAgXG4gICAgIDxUeXBpbmdUZXh0IHRpdGlsZT1cInwgVGhlIFdvcmxkXCJcbiAgICAgdGV4dFN0eWxlcz1cInRleHQtY2VudGVyXCIvPlxuXG4gIDxUeXBpbmdUZXh0IHRpdGlsZT17PD5DaG9vc2UgdGhlIHdvcmxkIHlvdSB3YW50IDxiciBcbiAgY2xhc3NOYW1lPVwibWQ6YmxvY2sgaGlkZGVuXCIvPiB0byBleHBsb3JlIDwvPn1cbiAgICAgdGV4dFN0eWxlcz1cInRleHQtY2VudGVyXCIvPlxuXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzUwcHhdIGZsZXggbGc6ZmxleC1yb3dcbiAgICAgZmxleC1jb2wgbWluLWgtWzcwcHhdIGdhcC01XCI+XG4gICAgICB7ZXhwbG9yV29ybGRzLm1hcCgod29ybGQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxFeHBsb3JlQ2FyZFxuICAgICAgICBrZXk9e3dvcmxkLmlkfVxuICAgICAgICB7Li4ud29ybGR9XG4gICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgIGhhbmRsZUNsaWNrPXtzZXRBY3RpdmV9XG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgKSl9XG5cbiAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICAgXG4gIDwvc2VjdGlvbj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZTtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInN0YWdnZXJDb250YWluZXIiLCJFeHBsb3JlQ2FyZCIsIlRpdGxlVGV4dCIsIlR5cGluZ1RleHQiLCJleHBsb3JlV29ybGRzIiwiRXhwbG9yZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbHMiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImlubmVyV2lkdGgiLCJ0aXRpbGUiLCJ0ZXh0U3R5bGVzIiwiYnIiLCJleHBsb3JXb3JsZHMiLCJtYXAiLCJ3b3JsZCIsImluZGV4IiwiaGFuZGxlQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Explore.jsx\n"));

/***/ })

});