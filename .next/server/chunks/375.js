exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 2928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1572);
/* harmony import */ var _common_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_1__]);
_components_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function MainLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "min-h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Nav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ",
                        children: children
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function Nav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const route = router.pathname.substring(1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "bg-white shadow",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl font-bold text-gray-900 capitalize",
                children: route
            })
        })
    });
}


/***/ }),

/***/ 1572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6540);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard/",
        current: true
    },
    {
        name: "Productos",
        href: "/dashboard/products/",
        current: false
    },
    {
        name: "Ventas",
        href: "#",
        current: false
    }
];
const userNavigation = [
    {
        name: "Your Profile",
        href: "#"
    },
    {
        name: "Settings",
        href: "#"
    }
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Header() {
    const auth = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const userData = {
        name: auth?.user?.name,
        email: auth?.user?.email,
        imageUrl: auth?.user?.avatar
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure, {
            as: "nav",
            className: "bg-gray-800",
            children: ({ open })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between h-16",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-8 w-8",
                                                    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                                                    alt: "Workflow"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hidden md:block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "ml-10 flex items-baseline space-x-4",
                                                    children: navigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: item.href,
                                                            className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium"),
                                                            "aria-current": item.current ? "page" : undefined,
                                                            children: item.name
                                                        }, item.name))
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hidden md:block",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "ml-4 flex items-center md:ml-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "View notifications"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.BellIcon, {
                                                            className: "h-6 w-6",
                                                            "aria-hidden": "true"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {
                                                    as: "div",
                                                    className: "ml-3 relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Button, {
                                                                className: "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "sr-only",
                                                                        children: "Open user menu"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        className: "h-8 w-8 rounded-full",
                                                                        src: userData.imageUrl,
                                                                        alt: ""
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                                                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                            enter: "transition ease-out duration-100",
                                                            enterFrom: "transform opacity-0 scale-95",
                                                            enterTo: "transform opacity-100 scale-100",
                                                            leave: "transition ease-in duration-75",
                                                            leaveFrom: "transform opacity-100 scale-100",
                                                            leaveTo: "transform opacity-0 scale-95",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Items, {
                                                                className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>auth.logout(),
                                                    className: "block p-3 text-sm text-gray-500 ",
                                                    children: "Logout"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "-mr-2 flex md:hidden",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
                                            className: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Open main menu"
                                                }),
                                                open ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.XMarkIcon, {
                                                    className: "block h-6 w-6",
                                                    "aria-hidden": "true"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Bars3Icon, {
                                                    className: "block h-6 w-6",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Panel, {
                            className: "md:hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                                    children: navigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
                                            as: "a",
                                            href: item.href,
                                            className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
                                            "aria-current": item.current ? "page" : undefined,
                                            children: item.name
                                        }, item.name))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pt-4 pb-3 border-t border-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center px-5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "h-10 w-10 rounded-full",
                                                        src: userData.imageUrl,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "ml-3",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-base font-medium leading-none text-white",
                                                            children: userData.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "text-sm font-medium leading-none text-gray-400",
                                                            children: userData.email
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    className: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "View notifications"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.BellIcon, {
                                                            className: "h-6 w-6",
                                                            "aria-hidden": "true"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-3 px-2 space-y-1",
                                            children: userNavigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
                                                    as: "a",
                                                    href: item.href,
                                                    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",
                                                    children: item.name
                                                }, item.name))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useAuth),
/* harmony export */   x: () => (/* binding */ ProviderAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(704);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function ProviderAuth({ children }) {
    const auth = useProvideAuth();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: auth,
        children: children
    });
}
const useAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
};
function useProvideAuth() {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const signIn = async (email, password)=>{
        const options = {
            headers: {
                accept: "*/*",
                "Content-Type": "application/json"
            }
        };
        const { data: access_token } = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(_services_api_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.auth.login, {
            email,
            password
        }, options);
        if (access_token) {
            const token = access_token.access_token;
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("token", token, {
                expires: 5
            });
            //esta d bajo es ar ver la informcion ero del perfil lo de arib es lo que ermite obtener el token
            (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults).headers.Authorization = `Bearer ${token}`;
            const { data: user } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(_services_api_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.auth.profile);
            console.log(user);
            setUser(user);
        }
    // console.log(access_token);
    };
    const logout = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("token");
        setUser(null);
        delete (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults).headers.Authorization;
        window.location.href = "/login";
    };
    return {
        user,
        signIn,
        logout
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_useAuth_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var _Layout_MainLoyout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2928);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6788);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth_jsx__WEBPACK_IMPORTED_MODULE_1__, _Layout_MainLoyout__WEBPACK_IMPORTED_MODULE_2__]);
([_hooks_useAuth_jsx__WEBPACK_IMPORTED_MODULE_1__, _Layout_MainLoyout__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_useAuth_jsx__WEBPACK_IMPORTED_MODULE_1__/* .ProviderAuth */ .x, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_MainLoyout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2037);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);

const API = "http://api.escuelajs.co";
const VERSION = "v1";
//AQUI SON LOS PUNTOS DE ENTRADA DE LA API
const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`
    },
    products: {
        getProduct: (id)=>`${API}/api/${VERSION}/products/${id}/`,
        allProducts: `${API}/api/${VERSION}/products`,
        getProducts: (limit, offset)=>`${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/api/${VERSION}/products`,
        updateProducts: (id)=>`${API}/api/${VERSION}/products/${id}/`,
        deleteProduct: (id)=>`${API}/api/${VERSION}/products/${id}/`
    },
    categories: {
        getCategoriesList: `${API}/api/${VERSION}/categories/`,
        addCategory: `${API}/api/${VERSION}/categories/`,
        getCategorieItems: (id)=>`${API}/api/${VERSION}/categories/${id}/products/`,
        updateCategory: (id)=>`${API}/api/${VERSION}/categories/${id}/`
    },
    files: {
        addImage: `${API}/api${VERSION}/files/upload/`
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endPoints);


/***/ }),

/***/ 6788:
/***/ (() => {



/***/ })

};
;