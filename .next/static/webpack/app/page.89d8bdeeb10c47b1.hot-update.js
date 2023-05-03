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

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.7),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center mit-w-[170px]\\n    h-[700px] transition-[flex] duration-[0.7s]\\n    easy-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm;text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justifu-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] \\n        rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"fonr-normal text-[16px] leading-[20px] text-white uppercase\",\n                        children: \"Click to explore\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-[24px] fonr-semibold sm:text-[32px] text-[24px]\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRXVDO0FBRVI7QUFDUztBQUV4QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFDQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFDO1dBQ2xFLDhEQUFDVCxxREFBVTtRQUNYVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVLLFFBQVEsS0FBSztRQUNqREssV0FBVyxZQUVnQixPQUR6QkosV0FBV0osS0FBSyw0QkFDaEIsd0JBQXdCLEVBQUM7OzBCQUd6Qiw4REFBQ1M7Z0JBQ0RDLEtBQUtUO2dCQUNMVSxLQUFLVDtnQkFDTE0sV0FBVTs7Ozs7O1lBRVRKLFdBQVdKLG1CQUNWLDhEQUFDWTtnQkFBR0osV0FBVTswQkFHbkJOOzs7OzswQ0FHSyw4REFBQ0k7Z0JBQUlFLFdBQVU7O2tDQUViLDhEQUFDRjt3QkFBSUUsV0FBVyxHQUFxQixPQUFsQlgsMERBQWlCLEVBQUM7a0NBRW5DLDRFQUFDWTs0QkFDREMsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkgsV0FBVTs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNNO3dCQUFFTixXQUFVO2tDQUE4RDs7Ozs7O2tDQUkzRSw4REFBQ087d0JBQUdQLFdBQVU7a0NBRVhOOzs7Ozs7Ozs7Ozt5QkFHTjs7Ozs7OztBQUdTO0tBMUNSSDtBQTZDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeD8yM2NjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IGZhZGVJbn0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3QgRXhwbG9yZUNhcmQgPSAoe2lkLCBpbWdVcmwsIHRpdGxlLCBpbmRleCwgYWN0aXZlLCBoYW5kbGVDbGlja30pID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgdmFyaWFudHM9e2ZhZGVJbigncmlnaHQnLCAnc3ByaW5nJywgaW5kZXggKiAwLjUsIDAuNyl9XG4gIGNsYXNzTmFtZT17YHJlbGF0aXZlICR7XG4gICAgYWN0aXZlID09PSBpZCA/ICdsZzpmbGV4LVszLjVdIGZsZXgtWzEwXScgOlxuICAgICdsZzpmbGV4LVswLjVdIGZsZXgtWzJdJ30gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWl0LXctWzE3MHB4XVxuICAgIGgtWzcwMHB4XSB0cmFuc2l0aW9uLVtmbGV4XSBkdXJhdGlvbi1bMC43c11cbiAgICBlYXN5LW91dC1mbGV4IGN1cnNvci1wb2ludGVyYH0+XG4gICAgPGltZ1xuICAgIHNyYz17aW1nVXJsfVxuICAgIGFsdD17dGl0bGV9XG4gICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1bMjRweF1cIi8+XG5cbiAgICB7YWN0aXZlICE9PSBpZCA/IChcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHNtO3RleHQtWzI2cHhdXG4gICAgICB0ZXh0LVsxOHB4XSB0ZXh0LXdoaXRlIGFic29sdXRlIHotMFxuICAgICAgbGc6Ym90dG9tLTIwIGxnOnJvdGF0ZS1bLTkwZGVnXSBsZzpvcmlnaW4tWzAsMF1cIj4gXG57dGl0bGV9XG4gICAgICA8L2gzPlxuICAgICkgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHAtOFxuICAgICAganVzdGlmdS1zdGFydCB3LWZ1bGwgZmxleC1jb2wgYmctW3JnYmEoMCwwLDAsMC41KV0gcm91bmRlZC1iLVsyNHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZsZXhDZW50ZXJ9IHctWzYwcHhdIGgtWzYwcHhdIFxuICAgICAgICByb3VuZGVkLVsyNHB4XSBnbGFzc21vcnBoaXNtIG1iLVsxNnB4XWB9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaGVhZHNldC5zdmdcIlxuICAgICAgICAgIGFsdD1cImhlYWRzZXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8yIGgtMS8yIG9iamVjdC1jb250YWluXCI+XG4gICAgICAgICAgPC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb25yLW5vcm1hbCB0ZXh0LVsxNnB4XSBsZWFkaW5nLVsyMHB4XSB0ZXh0LXdoaXRlIHVwcGVyY2FzZVwiPlxuICAgICAgICAgIENsaWNrIHRvIGV4cGxvcmVcblxuICAgICAgICA8L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC1bMjRweF0gZm9uci1zZW1pYm9sZFxuICAgICAgICBzbTp0ZXh0LVszMnB4XSB0ZXh0LVsyNHB4XVwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICB9XG5cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZUNhcmQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwiZmFkZUluIiwiRXhwbG9yZUNhcmQiLCJpZCIsImltZ1VybCIsInRpdGxlIiwiaW5kZXgiLCJhY3RpdmUiLCJoYW5kbGVDbGljayIsImRpdiIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJmbGV4Q2VudGVyIiwicCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});