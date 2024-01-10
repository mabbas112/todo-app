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

/***/ "(app-pages-browser)/./components/todoList/todoList.js":
/*!*****************************************!*\
  !*** ./components/todoList/todoList.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios-retry */ \"(app-pages-browser)/./node_modules/axios-retry/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst API_URL = \"http://localhost:3001\" || 0;\n(0,axios_retry__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    retries: 3\n});\nconst TodoList = (param)=>{\n    let { todos, setTodos } = param;\n    _s();\n    const [detailedTodo, setDetailedTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const doneTodoHandler = (id, status)=>{\n        let config = {\n            method: \"put\",\n            maxBodyLength: Infinity,\n            url: API_URL + \"/todo/\" + id,\n            headers: {},\n            data: {\n                status: status\n            }\n        };\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].request(config).then((response)=>{\n            setDetailedTodo({});\n            setTodos((preState)=>{\n                return preState.map((todo)=>{\n                    let updatedTodo = todo;\n                    if ((todo === null || todo === void 0 ? void 0 : todo._id) === id) {\n                        updatedTodo = {\n                            ...todo,\n                            status: status\n                        } // place as it is as its already chnage\n                        ;\n                    }\n                    return updatedTodo;\n                });\n            });\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    const deleteTodoHandler = async (id)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:3001\" + \"/todo/\" + id);\n        if (response.status == 200) {\n            setDetailedTodo({});\n            setTodos((preState)=>preState.filter((todo)=>(todo === null || todo === void 0 ? void 0 : todo._id) !== id));\n        } else if ([\n            400,\n            500\n        ].includes(response.status)) {\n            alert(\"System facing technical issue please try later\");\n        }\n    };\n    const DetailsComponent = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: (detailedTodo === null || detailedTodo === void 0 ? void 0 : detailedTodo.status) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-bold\",\n                                children: \"Completed: \"\n                            }, void 0, false, {\n                                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Completed\"\n                            }, void 0, false, {\n                                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-bold\",\n                                children: \"Completed: \"\n                            }, void 0, false, {\n                                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Not Completed\"\n                            }, void 0, false, {\n                                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Created At: \"\n                        }, void 0, false, {\n                            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: (detailedTodo === null || detailedTodo === void 0 ? void 0 : detailedTodo.date) ? new Date(detailedTodo.date).toLocaleString(\"en-US\", {\n                                day: \"2-digit\",\n                                month: \"2-digit\",\n                                year: \"numeric\",\n                                hour: \"numeric\",\n                                minute: \"numeric\",\n                                hour12: true\n                            }) : \"Custom Date when detailedTodo.date is falsy\"\n                        }, void 0, false, {\n                            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>deleteTodoHandler(detailedTodo._id),\n                    className: \"mx-auto mt-3 w-full bg-[#fb9d9d] py-2 px-0 rounded text-red-500\",\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border rounded-md bg-[#d4caca]\",\n        children: (todos === null || todos === void 0 ? void 0 : todos.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: todos === null || todos === void 0 ? void 0 : todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex items-center justify-between py-2 mx-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            alt: \"Check Icon\",\n                                            src: (todo === null || todo === void 0 ? void 0 : todo.status) && Boolean(todo === null || todo === void 0 ? void 0 : todo.status) ? \"/check-icon.svg\" : \"/uncomplete-icon.svg\",\n                                            width: 20,\n                                            height: 20,\n                                            onClick: ()=>doneTodoHandler(todo._id, !(todo === null || todo === void 0 ? void 0 : todo.status)),\n                                            className: \"cursor-pointer\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-base\",\n                                            children: todo === null || todo === void 0 ? void 0 : todo.title\n                                        }, void 0, false, {\n                                            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"cursor-pointer\",\n                                    onClick: ()=>setDetailedTodo(todo),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/dot-icon.svg\",\n                                        alt: \"Dot Icon\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, todo._id, true, {\n                            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, undefined),\n                        todo._id === detailedTodo._id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsComponent, {}, void 0, false, {\n                            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                            lineNumber: 121,\n                            columnNumber: 23\n                        }, undefined) : null\n                    ]\n                }, void 0, true))\n        }, void 0, false, {\n            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n            lineNumber: 94,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[200px] flex justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No task today\"\n            }, void 0, false, {\n                fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n            lineNumber: 128,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/mabbas/Downloads/Todo-app/to-do/components/todoList/todoList.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"jzJzkGEE9084iOBNvhoea1qV2NI=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdG9kb0xpc3QvdG9kb0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBQ0s7QUFDTTtBQUNyQyxNQUFNSyxVQUFVQyx1QkFBK0IsSUFBSTtBQUNuREYsdURBQVVBLENBQUNGLDZDQUFLQSxFQUFFO0lBQUVPLFNBQVM7QUFBRTtBQUUvQixNQUFNQyxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7O0lBRW5DLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDLENBQUM7SUFFbEQsTUFBTWMsa0JBQWtCLENBQUNDLElBQUlDO1FBQzNCLElBQUlDLFNBQVM7WUFDWEMsUUFBUTtZQUNSQyxlQUFlQztZQUNmQyxLQUFLakIsVUFBUSxXQUFTVztZQUN0Qk8sU0FBUyxDQUFDO1lBQ1ZDLE1BQUs7Z0JBQUNQLFFBQU9BO1lBQU07UUFDckI7UUFFQWYsNkNBQUtBLENBQUN1QixPQUFPLENBQUNQLFFBQ2JRLElBQUksQ0FBQyxDQUFDQztZQUNMYixnQkFBZ0IsQ0FBQztZQUNqQkYsU0FBUyxDQUFDZ0I7Z0JBQ1YsT0FBT0EsU0FBU0MsR0FBRyxDQUFDLENBQUNDO29CQUNuQixJQUFJQyxjQUFjRDtvQkFDbEIsSUFBSUEsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNRSxHQUFHLE1BQUtoQixJQUFJO3dCQUNwQmUsY0FBZTs0QkFBRSxHQUFHRCxJQUFJOzRCQUFFYixRQUFRQTt3QkFBTSxFQUFHLHVDQUF1Qzs7b0JBQ3BGO29CQUNBLE9BQU9jO2dCQUNUO1lBQ0Y7UUFDQSxHQUNDRSxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxNQUFNRyxvQkFBb0IsT0FBTXJCO1FBQzlCLE1BQU1XLFdBQVcsTUFBTXpCLDZDQUFLQSxDQUFDb0MsTUFBTSxDQUFDaEMsdUJBQStCLEdBQUMsV0FBU1U7UUFDN0UsSUFBR1csU0FBU1YsTUFBTSxJQUFJLEtBQ3RCO1lBQ0VILGdCQUFnQixDQUFDO1lBQ2pCRixTQUFTLENBQUNnQixXQUFhQSxTQUFTVyxNQUFNLENBQUMsQ0FBQ1QsT0FBU0EsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNRSxHQUFHLE1BQUtoQjtRQUNqRSxPQUNLLElBQUc7WUFBQztZQUFJO1NBQUksQ0FBQ3dCLFFBQVEsQ0FBQ2IsU0FBU1YsTUFBTSxHQUFHO1lBQzNDd0IsTUFBTTtRQUNSO0lBRUY7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkIscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs4QkFDRWhDLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY0ksTUFBTSxrQkFDakI7OzBDQUNBLDhEQUFDNkI7Z0NBQUtGLFdBQVU7MENBQVk7Ozs7OzswQ0FDNUIsOERBQUNFOzBDQUFNOzs7Ozs7O3FEQUVQOzswQ0FBRSw4REFBQ0E7Z0NBQUtGLFdBQVU7MENBQVk7Ozs7OzswQ0FDaEMsOERBQUNFOzBDQUFNOzs7Ozs7Ozs7Ozs7OzhCQUdYLDhEQUFDRDs7c0NBQ0MsOERBQUNDO3NDQUFLOzs7Ozs7c0NBQ04sOERBQUNBO3NDQUNBakMsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFja0MsSUFBSSxJQUNmLElBQUlDLEtBQUtuQyxhQUFha0MsSUFBSSxFQUFFRSxjQUFjLENBQUMsU0FBUztnQ0FDbERDLEtBQUs7Z0NBQ0xDLE9BQU87Z0NBQ1BDLE1BQU07Z0NBQ05DLE1BQU07Z0NBQ05DLFFBQVE7Z0NBQ1JDLFFBQVE7NEJBQ1YsS0FDQTs7Ozs7Ozs7Ozs7OzhCQUdOLDhEQUFDQztvQkFDQ0MsU0FBUyxJQUFNcEIsa0JBQWtCeEIsYUFBYW1CLEdBQUc7b0JBQ2pEWSxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7SUFLUDtJQUVBLHFCQUNFLDhEQUFDRDtRQUFJQyxXQUFVO2tCQUVYakMsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPK0MsTUFBTSxJQUFHLGtCQUNaLDhEQUFDQztzQkFDQWhELGtCQUFBQSw0QkFBQUEsTUFBT2tCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWDs7c0NBQ0UsOERBQUM4Qjs0QkFBa0JoQixXQUFVOzs4Q0FDM0IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ3pDLG1EQUFLQTs0Q0FDSjBELEtBQUk7NENBQ0pDLEtBQUtoQyxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1iLE1BQU0sS0FBSThDLFFBQVFqQyxpQkFBQUEsMkJBQUFBLEtBQU1iLE1BQU0sSUFBSSxvQkFBa0I7NENBQy9EK0MsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUlIsU0FBUyxJQUFNMUMsZ0JBQWdCZSxLQUFLRSxHQUFHLEVBQUUsQ0FBRSxDQUFDRixpQkFBQUEsMkJBQUFBLEtBQU1iLE1BQU07NENBQ3hEMkIsV0FBVTs7Ozs7O3NEQUVaLDhEQUFDQzs0Q0FBRUQsV0FBVTtzREFBYWQsaUJBQUFBLDJCQUFBQSxLQUFNb0MsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUV2Qyw4REFBQ3ZCO29DQUFJQyxXQUFVO29DQUFpQmEsU0FBUyxJQUFNM0MsZ0JBQWdCZ0I7OENBQzdELDRFQUFDM0IsbURBQUtBO3dDQUNKMkQsS0FBSzt3Q0FDTEQsS0FBSTt3Q0FDSkcsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7OzJCQWpCTG5DLEtBQUtFLEdBQUc7Ozs7O3dCQXVCZkYsS0FBS0UsR0FBRyxLQUFLbkIsYUFBYW1CLEdBQUcsaUJBQ3pCLDhEQUFDVTs7Ozt3Q0FDRDs7Ozs7OztzQ0FNViw4REFBQ0M7WUFBSUMsV0FBVTtzQkFDZiw0RUFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQTlITW5DO0tBQUFBO0FBZ0lOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG9kb0xpc3QvdG9kb0xpc3QuanM/MDBmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgYXhpb3NSZXRyeSBmcm9tICdheGlvcy1yZXRyeSc7XG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcbmF4aW9zUmV0cnkoYXhpb3MsIHsgcmV0cmllczogMyB9KTtcblxuY29uc3QgVG9kb0xpc3QgPSAoeyB0b2Rvcywgc2V0VG9kb3MgfSkgPT4ge1xuXG4gIGNvbnN0IFtkZXRhaWxlZFRvZG8sIHNldERldGFpbGVkVG9kb10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgZG9uZVRvZG9IYW5kbGVyID0gKGlkLCBzdGF0dXMpID0+IHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIG1heEJvZHlMZW5ndGg6IEluZmluaXR5LFxuICAgICAgdXJsOiBBUElfVVJMK1wiL3RvZG8vXCIraWQsXG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgIGRhdGE6e3N0YXR1czpzdGF0dXN9LFxuICAgIH07XG4gICAgXG4gICAgYXhpb3MucmVxdWVzdChjb25maWcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXREZXRhaWxlZFRvZG8oe30pO1xuICAgICAgc2V0VG9kb3MoKHByZVN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4gcHJlU3RhdGUubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgIGxldCB1cGRhdGVkVG9kbyA9IHRvZG87XG4gICAgICAgIGlmICh0b2RvPy5faWQgPT09IGlkKSB7XG4gICAgICAgICAgdXBkYXRlZFRvZG8gPSAoeyAuLi50b2RvLCBzdGF0dXM6IHN0YXR1c30pIC8vIHBsYWNlIGFzIGl0IGlzIGFzIGl0cyBhbHJlYWR5IGNobmFnZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cGRhdGVkVG9kbztcbiAgICAgIH0pXG4gICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVRvZG9IYW5kbGVyID0gYXN5bmMoaWQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMK1wiL3RvZG8vXCIraWQpO1xuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApXG4gICAge1xuICAgICAgc2V0RGV0YWlsZWRUb2RvKHt9KTtcbiAgICAgIHNldFRvZG9zKChwcmVTdGF0ZSkgPT4gcHJlU3RhdGUuZmlsdGVyKCh0b2RvKSA9PiB0b2RvPy5faWQgIT09IGlkKSlcbiAgICB9XG4gICAgZWxzZSBpZihbNDAwLDUwMF0uaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgICAgYWxlcnQoXCJTeXN0ZW0gZmFjaW5nIHRlY2huaWNhbCBpc3N1ZSBwbGVhc2UgdHJ5IGxhdGVyXCIpXG4gICAgfVxuICAgIFxuICB9XG5cbiAgY29uc3QgRGV0YWlsc0NvbXBvbmVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHAtNCc+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtkZXRhaWxlZFRvZG8/LnN0YXR1c1xuICAgICAgICAgICAgPyA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYm9sZCc+Q29tcGxldGVkOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPntcIkNvbXBsZXRlZFwifTwvc3Bhbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgOiA8PjxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ib2xkJz5Db21wbGV0ZWQ6IDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPntcIk5vdCBDb21wbGV0ZWRcIn08L3NwYW4+PC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuPkNyZWF0ZWQgQXQ6IDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7ZGV0YWlsZWRUb2RvPy5kYXRlXG4gICAgICAgICAgICA/IG5ldyBEYXRlKGRldGFpbGVkVG9kby5kYXRlKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogXCJDdXN0b20gRGF0ZSB3aGVuIGRldGFpbGVkVG9kby5kYXRlIGlzIGZhbHN5XCJ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVG9kb0hhbmRsZXIoZGV0YWlsZWRUb2RvLl9pZCl9XG4gICAgICAgICAgY2xhc3NOYW1lPSdteC1hdXRvIG10LTMgdy1mdWxsIGJnLVsjZmI5ZDlkXSBweS0yIHB4LTAgcm91bmRlZCB0ZXh0LXJlZC01MDAnXG4gICAgICAgID5cbiAgICAgICAgICBEZWxldGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1tZCBiZy1bI2Q0Y2FjYV1cIj5cbiAgICAgIHtcbiAgICAgICAgdG9kb3M/Lmxlbmd0aCA+IDBcbiAgICAgICAgICA/IDx1bD5cbiAgICAgICAgICAgIHt0b2Rvcz8ubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5faWR9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yIG14LTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD0nQ2hlY2sgSWNvbidcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RvZG8/LnN0YXR1cyAmJiBCb29sZWFuKHRvZG8/LnN0YXR1cykgPyAnL2NoZWNrLWljb24uc3ZnJzonL3VuY29tcGxldGUtaWNvbi5zdmcnICB9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG9uZVRvZG9IYW5kbGVyKHRvZG8uX2lkLCAhICh0b2RvPy5zdGF0dXMpKX0gLy8gd2hhdGV2ZXIgc3RhdHVzIGlzIG9uIGNsaWNrIGl0IHNob3VkIGJlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPnt0b2RvPy50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXREZXRhaWxlZFRvZG8odG9kbyl9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9eycvZG90LWljb24uc3ZnJ31cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJEb3QgSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdG9kby5faWQgPT09IGRldGFpbGVkVG9kby5faWRcbiAgICAgICAgICAgICAgICAgICAgPyA8RGV0YWlsc0NvbXBvbmVudCAvPlxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9J2gtWzIwMHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8cD5ObyB0YXNrIHRvZGF5PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiSW1hZ2UiLCJheGlvc1JldHJ5IiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwicmV0cmllcyIsIlRvZG9MaXN0IiwidG9kb3MiLCJzZXRUb2RvcyIsImRldGFpbGVkVG9kbyIsInNldERldGFpbGVkVG9kbyIsImRvbmVUb2RvSGFuZGxlciIsImlkIiwic3RhdHVzIiwiY29uZmlnIiwibWV0aG9kIiwibWF4Qm9keUxlbmd0aCIsIkluZmluaXR5IiwidXJsIiwiaGVhZGVycyIsImRhdGEiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwicHJlU3RhdGUiLCJtYXAiLCJ0b2RvIiwidXBkYXRlZFRvZG8iLCJfaWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVRvZG9IYW5kbGVyIiwiZGVsZXRlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJhbGVydCIsIkRldGFpbHNDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwiYnV0dG9uIiwib25DbGljayIsImxlbmd0aCIsInVsIiwibGkiLCJhbHQiLCJzcmMiLCJCb29sZWFuIiwid2lkdGgiLCJoZWlnaHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/todoList/todoList.js\n"));

/***/ })

});