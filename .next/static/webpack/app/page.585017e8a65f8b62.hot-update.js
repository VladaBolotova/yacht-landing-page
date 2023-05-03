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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.7),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center mit-w-[170px]\\n    h-[700px] transition-[flex] duration-[0.7s]\\n    easy-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm;text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justifu-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] \\n        rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"fonr-normal text-[16px] leading-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vladislavabolotova/Documents/yacht-landing-page/components/ExploreCard.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRXVDO0FBRVI7QUFDUztBQUV4QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFDQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFDO1dBQ2xFLDhEQUFDVCxxREFBVTtRQUNYVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVLLFFBQVEsS0FBSztRQUNqREssV0FBVyxZQUVnQixPQUR6QkosV0FBV0osS0FBSyw0QkFDaEIsd0JBQXdCLEVBQUM7OzBCQUd6Qiw4REFBQ1M7Z0JBQ0RDLEtBQUtUO2dCQUNMVSxLQUFLVDtnQkFDTE0sV0FBVTs7Ozs7O1lBRVRKLFdBQVdKLG1CQUNWLDhEQUFDWTtnQkFBR0osV0FBVTswQkFHbkJOOzs7OzswQ0FHSyw4REFBQ0k7Z0JBQUlFLFdBQVU7O2tDQUViLDhEQUFDRjt3QkFBSUUsV0FBVyxHQUFxQixPQUFsQlgsMERBQWlCLEVBQUM7a0NBRW5DLDRFQUFDWTs0QkFDREMsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkgsV0FBVTs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNNO3dCQUFFTixXQUFVOzs7Ozs7Ozs7Ozt5QkFJaEI7Ozs7Ozs7QUFHUztLQXJDUlQ7QUF3Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHBsb3JlQ2FyZC5qc3g/MjNjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBmYWRlSW59IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5cbmNvbnN0IEV4cGxvcmVDYXJkID0gKHtpZCwgaW1nVXJsLCB0aXRsZSwgaW5kZXgsIGFjdGl2ZSwgaGFuZGxlQ2xpY2t9KSA9PiAoXG4gIDxtb3Rpb24uZGl2XG4gIHZhcmlhbnRzPXtmYWRlSW4oJ3JpZ2h0JywgJ3NwcmluZycsIGluZGV4ICogMC41LCAwLjcpfVxuICBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke1xuICAgIGFjdGl2ZSA9PT0gaWQgPyAnbGc6ZmxleC1bMy41XSBmbGV4LVsxMF0nIDpcbiAgICAnbGc6ZmxleC1bMC41XSBmbGV4LVsyXSd9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pdC13LVsxNzBweF1cbiAgICBoLVs3MDBweF0gdHJhbnNpdGlvbi1bZmxleF0gZHVyYXRpb24tWzAuN3NdXG4gICAgZWFzeS1vdXQtZmxleCBjdXJzb3ItcG9pbnRlcmB9PlxuICAgIDxpbWdcbiAgICBzcmM9e2ltZ1VybH1cbiAgICBhbHQ9e3RpdGxlfVxuICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQtWzI0cHhdXCIvPlxuXG4gICAge2FjdGl2ZSAhPT0gaWQgPyAoXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBzbTt0ZXh0LVsyNnB4XVxuICAgICAgdGV4dC1bMThweF0gdGV4dC13aGl0ZSBhYnNvbHV0ZSB6LTBcbiAgICAgIGxnOmJvdHRvbS0yMCBsZzpyb3RhdGUtWy05MGRlZ10gbGc6b3JpZ2luLVswLDBdXCI+IFxue3RpdGxlfVxuICAgICAgPC9oMz5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBwLThcbiAgICAgIGp1c3RpZnUtc3RhcnQgdy1mdWxsIGZsZXgtY29sIGJnLVtyZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWQtYi1bMjRweF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mbGV4Q2VudGVyfSB3LVs2MHB4XSBoLVs2MHB4XSBcbiAgICAgICAgcm91bmRlZC1bMjRweF0gZ2xhc3Ntb3JwaGlzbSBtYi1bMTZweF1gfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2hlYWRzZXQuc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJoZWFkc2V0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMiBoLTEvMiBvYmplY3QtY29udGFpblwiPlxuICAgICAgICAgIDwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9uci1ub3JtYWwgdGV4dC1bMTZweF0gbGVhZGluZy1cIj5cblxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gICAgfVxuXG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVDYXJkO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsImZhZGVJbiIsIkV4cGxvcmVDYXJkIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsImluZGV4IiwiYWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgzIiwiZmxleENlbnRlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});