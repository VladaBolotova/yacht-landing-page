"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    host: \"smtp.gmail.com\",\n    port: 587,\n    secure: false,\n    auth: {\n        user: \"vladislavabolotova@gmail.com\",\n        pass: \"Alexasani2020\"\n    }\n});\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { name , email , message  } = req.body;\n    if (!name || !email || !message) {\n        return res.status(400).json({\n            message: \"Please fill in all fields\"\n        });\n    }\n    try {\n        const info = await transporter.sendMail({\n            from: process.env.SMTP_FROM,\n            to: \"vladislavabolotova@gmail.com\",\n            subject: `New message from ${name} <${email}>`,\n            text: message,\n            html: `<p>${message}</p>`\n        });\n        console.log(`Message sent: ${info.messageId}`);\n        return res.status(200).json({\n            message: \"Message sent\"\n        });\n    } catch (err) {\n        console.log(err);\n        return res.status(500).json({\n            message: \"Error sending message\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFcEMsTUFBTUMsY0FBY0QsaUVBQTBCLENBQUM7SUFDN0NHLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxRQUFRLEtBQUs7SUFDYkMsTUFBTTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtBQUNGO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQzlELENBQUM7SUFFRCxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFRixRQUFPLEVBQUUsR0FBR0wsSUFBSVEsSUFBSTtJQUV6QyxJQUFJLENBQUNGLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDRixTQUFTO1FBQy9CLE9BQU9KLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUE0QjtJQUNyRSxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1JLE9BQU8sTUFBTWxCLFlBQVltQixRQUFRLENBQUM7WUFDdENDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUMzQkMsSUFBSTtZQUNKQyxTQUFTLENBQUMsaUJBQWlCLEVBQUVWLEtBQUssRUFBRSxFQUFFQyxNQUFNLENBQUMsQ0FBQztZQUM5Q1UsTUFBTVo7WUFDTmEsTUFBTSxDQUFDLEdBQUcsRUFBRWIsUUFBUSxJQUFJLENBQUM7UUFDM0I7UUFFQWMsUUFBUUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFWCxLQUFLWSxTQUFTLENBQUMsQ0FBQztRQUU3QyxPQUFPcEIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDeEQsRUFBRSxPQUFPaUIsS0FBSztRQUNaSCxRQUFRQyxHQUFHLENBQUNFO1FBQ1osT0FBT3JCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUTtRQUF1QjtJQUM5RDtBQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhdmVyc2UxMy8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA1ODcsXG4gIHNlY3VyZTogZmFsc2UsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAndmxhZGlzbGF2YWJvbG90b3ZhQGdtYWlsLmNvbScsXG4gICAgcGFzczogJ0FsZXhhc2FuaTIwMjAnLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG5cbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XG5cbiAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhbWVzc2FnZSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgIGZyb206IHByb2Nlc3MuZW52LlNNVFBfRlJPTSxcbiAgICAgIHRvOiAndmxhZGlzbGF2YWJvbG90b3ZhQGdtYWlsLmNvbScsXG4gICAgICBzdWJqZWN0OiBgTmV3IG1lc3NhZ2UgZnJvbSAke25hbWV9IDwke2VtYWlsfT5gLFxuICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgIGh0bWw6IGA8cD4ke21lc3NhZ2V9PC9wPmAsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhgTWVzc2FnZSBzZW50OiAke2luZm8ubWVzc2FnZUlkfWApO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ01lc3NhZ2Ugc2VudCcgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOlwiRXJyb3Igc2VuZGluZyBtZXNzYWdlXCJ9KTtcbiAgfX1cblxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwiYm9keSIsImluZm8iLCJzZW5kTWFpbCIsImZyb20iLCJwcm9jZXNzIiwiZW52IiwiU01UUF9GUk9NIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZUlkIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();