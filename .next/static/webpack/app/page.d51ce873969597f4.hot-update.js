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

/***/ "(app-pages-browser)/./components/home/index.js":
/*!**********************************!*\
  !*** ./components/home/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todoList */ \"(app-pages-browser)/./components/todoList/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todoForm */ \"(app-pages-browser)/./components/todoForm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DUMMY_TODOS = [];\nconst Home = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(DUMMY_TODOS);\n    const newTodoHandler = (todo)=>{\n        let data = JSON.stringify({\n            \"date\": new Date(),\n            \"title\": todo.title,\n            \"status\": false\n        });\n        let config = {\n            method: \"post\",\n            maxBodyLength: Infinity,\n            url: \"http://localhost:3001\" + \"/todo/new\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: data\n        };\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(config).then((response)=>{\n            todo[\"id\"] = response.data.id;\n            todo.setTodo(\"\");\n            setTodos((preState)=>[\n                    ...preState,\n                    todo\n                ]);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        let config = {\n            method: \"get\",\n            maxBodyLength: Infinity,\n            url: \"http://localhost:3001\" + \"/todo\",\n            headers: {}\n        };\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(config).then((response)=>{\n            const todos = response.data.todos;\n            setTodos(todos);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-8 mb-4 rounded-full bg-gray-300 p-2 inline-flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-full overflow-hidden bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            height: 96,\n                            width: 96,\n                            src: \"/profile.jpg\",\n                            alt: \"Your Image Alt Text\",\n                            className: \"w-36 h-36 object-cover rounded-full \",\n                            layout: \"fixed\"\n                        }, void 0, false, {\n                            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/home/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/home/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/home/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/home/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todoForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                newTodoHandler: newTodoHandler\n            }, void 0, false, {\n                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/home/index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                todos: todos,\n                setTodos: setTodos\n            }, void 0, false, {\n                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/home/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"zGyztKK/QFYvJGEhU90IDNNCNkU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMrQjtBQUNJO0FBQ1Y7QUFDVTtBQUNTO0FBQzVDLE1BQU1NLGNBQWMsRUFDbkI7QUFFRCxNQUFNQyxPQUFPOztJQUVYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQ0M7SUFFbkMsTUFBTUksaUJBQWlCLENBQUNDO1FBQ3RCLElBQUlDLE9BQU9DLEtBQUtDLFNBQVMsQ0FBQztZQUN4QixRQUFRLElBQUlDO1lBQ1osU0FBU0osS0FBS0ssS0FBSztZQUNuQixVQUFVO1FBQ1o7UUFDQSxJQUFJQyxTQUFTO1lBQ1hDLFFBQVE7WUFDUkMsZUFBZUM7WUFDZkMsS0FBS0MsdUJBQStCLEdBQUc7WUFDdkNHLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FiLE1BQU1BO1FBQ1I7UUFFQVYsNkNBQUtBLENBQUN3QixPQUFPLENBQUNULFFBQ1hVLElBQUksQ0FBQyxDQUFDQztZQUNMakIsSUFBSSxDQUFDLEtBQUssR0FBR2lCLFNBQVNoQixJQUFJLENBQUNpQixFQUFFO1lBQzdCbEIsS0FBS21CLE9BQU8sQ0FBQztZQUNickIsU0FBUyxDQUFDc0IsV0FBYTt1QkFBSUE7b0JBQVVwQjtpQkFBSztRQUM1QyxHQUNDcUIsS0FBSyxDQUFDLENBQUNDO1lBQ05DLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNKO0lBRUE3QixnREFBU0EsQ0FBQztRQUNSLElBQUlhLFNBQVM7WUFDWEMsUUFBUTtZQUNSQyxlQUFlQztZQUNmQyxLQUFLQyx1QkFBK0IsR0FBRztZQUN2Q0csU0FBUyxDQUFDO1FBQ1o7UUFFQXZCLDZDQUFLQSxDQUFDd0IsT0FBTyxDQUFDVCxRQUNYVSxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxNQUFNcEIsUUFBUW9CLFNBQVNoQixJQUFJLENBQUNKLEtBQUs7WUFDakNDLFNBQVNEO1FBQ1gsR0FDQ3dCLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNyQyxtREFBS0E7NEJBQ0pzQyxRQUFROzRCQUNSQyxPQUFPOzRCQUNQQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKSixXQUFVOzRCQUNWSyxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2YsOERBQUN2QyxpREFBUUE7Z0JBQUNPLGdCQUFnQkE7Ozs7OzswQkFDMUIsOERBQUNULGlEQUFRQTtnQkFBQ08sT0FBT0E7Z0JBQU9DLFVBQVVBOzs7Ozs7OztBQUd4QztHQXJFTUY7S0FBQUE7QUF1RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2luZGV4LmpzPzM4ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi4vdG9kb0xpc3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IFRvZG9Gb3JtIGZyb20gXCIuLi90b2RvRm9ybVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgRFVNTVlfVE9ET1MgPSBbXG5dXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShEVU1NWV9UT0RPUylcblxuICBjb25zdCBuZXdUb2RvSGFuZGxlciA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcImRhdGVcIjogbmV3IERhdGUoKSxcbiAgICAgIFwidGl0bGVcIjogdG9kby50aXRsZSxcbiAgICAgIFwic3RhdHVzXCI6IGZhbHNlLFxuICAgIH0pO1xuICAgIGxldCBjb25maWcgPSB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIG1heEJvZHlMZW5ndGg6IEluZmluaXR5LFxuICAgICAgdXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMICsgJy90b2RvL25ldycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcblxuICAgIGF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRvZG9bXCJpZFwiXSA9IHJlc3BvbnNlLmRhdGEuaWQ7XG4gICAgICAgIHRvZG8uc2V0VG9kbygnJyk7XG4gICAgICAgIHNldFRvZG9zKChwcmVTdGF0ZSkgPT4gWy4uLnByZVN0YXRlLCB0b2RvXSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIG1heEJvZHlMZW5ndGg6IEluZmluaXR5LFxuICAgICAgdXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMICsgJy90b2RvJyxcbiAgICAgIGhlYWRlcnM6IHt9XG4gICAgfTtcblxuICAgIGF4aW9zLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gcmVzcG9uc2UuZGF0YS50b2RvcztcbiAgICAgICAgc2V0VG9kb3ModG9kb3MpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1iLTQgcm91bmRlZC1mdWxsIGJnLWdyYXktMzAwIHAtMiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGVcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBoZWlnaHQ9ezk2fVxuICAgICAgICAgICAgICB3aWR0aD17OTZ9XG4gICAgICAgICAgICAgIHNyYz1cIi9wcm9maWxlLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIllvdXIgSW1hZ2UgQWx0IFRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTM2IGgtMzYgb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBcIlxuICAgICAgICAgICAgICBsYXlvdXQ9J2ZpeGVkJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUb2RvRm9ybSBuZXdUb2RvSGFuZGxlcj17bmV3VG9kb0hhbmRsZXJ9IC8+XG4gICAgICA8VG9kb0xpc3QgdG9kb3M9e3RvZG9zfSBzZXRUb2Rvcz17c2V0VG9kb3N9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkltYWdlIiwiVG9kb0xpc3QiLCJheGlvcyIsIlRvZG9Gb3JtIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEVU1NWV9UT0RPUyIsIkhvbWUiLCJ0b2RvcyIsInNldFRvZG9zIiwibmV3VG9kb0hhbmRsZXIiLCJ0b2RvIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJEYXRlIiwidGl0bGUiLCJjb25maWciLCJtZXRob2QiLCJtYXhCb2R5TGVuZ3RoIiwiSW5maW5pdHkiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhlYWRlcnMiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiaWQiLCJzZXRUb2RvIiwicHJlU3RhdGUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiYWx0IiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/index.js\n"));

/***/ })

});