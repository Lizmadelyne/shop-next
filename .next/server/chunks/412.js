"use strict";
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 2412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormProduct)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8944);





function FormProduct({ setOpen, setAlert, product }) {
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            title: formData.get("title"),
            price: parseInt(formData.get("price")),
            description: formData.get("description"),
            categoryId: parseInt(formData.get("category")),
            images: [
                formData.get("images").name
            ]
        };
        // console.log(data);
        if (product) {
            //  console.log(data)
            (0,_services_api_product__WEBPACK_IMPORTED_MODULE_4__/* .updateProduct */ .nM)(product.id, data).then(()=>{
                router.push("/dashboard/products/");
            });
        } else {
            (0,_services_api_product__WEBPACK_IMPORTED_MODULE_4__/* .addProduct */ .gK)(data).then(()=>{
                setAlert({
                    active: true,
                    message: "product added successfuly",
                    type: "success",
                    autoClose: false
                });
                setOpen(false);
            }).catch((error)=>{
                setAlert({
                    active: true,
                    message: error.message,
                    type: "error",
                    autoClose: false
                });
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        ref: formRef,
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "overflow-hidden",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-4 py-5 bg-gray-100 sm:p-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-6 gap-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-6 sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "title",
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Title"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        defaultValue: product?.title,
                                        type: "text",
                                        name: "title",
                                        id: "title",
                                        className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-6 sm:col-span-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "price",
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Price"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        defaultValue: product?.price,
                                        type: "number",
                                        name: "price",
                                        id: "price",
                                        className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "category",
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Category"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        id: "category",
                                        name: "category",
                                        defaultValue: product?.category?.name,
                                        autoComplete: "category-name",
                                        className: "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "1",
                                                children: "Clothes"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "2",
                                                children: "Electronics"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "3",
                                                children: "Furniture"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "4",
                                                children: "Toys"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "5",
                                                children: "Others"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "description",
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        name: "description",
                                        id: "description",
                                        defaultValue: product?.description,
                                        autoComplete: "description",
                                        rows: "3",
                                        className: "form-textarea mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-sm font-medium text-gray-700",
                                            children: "Cover photo"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-1 text-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        className: "mx-auto h-12 w-12 text-gray-400",
                                                        stroke: "currentColor",
                                                        fill: "none",
                                                        viewBox: "0 0 48 48",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                                            strokeWidth: 2,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex text-sm text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "images",
                                                                className: "relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Upload a file"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        defaultValue: product?.images,
                                                                        id: "images",
                                                                        name: "images",
                                                                        type: "file",
                                                                        className: "sr-only"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "pl-1",
                                                                children: "or drag and drop"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: "PNG, JPG, GIF up to 10MB"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                        children: "Save"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 8944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ir: () => (/* binding */ deleteProduct),
/* harmony export */   gK: () => (/* binding */ addProduct),
/* harmony export */   nM: () => (/* binding */ updateProduct)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(704);


const addProduct = async (body)=>{
    const config = {
        headers: {
            accept: "*/*",
            "Content-Type": "application/json"
        }
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_services_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.products.addProducts, body, config);
    return response.data;
};
const deleteProduct = async (id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](_services_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.products.deleteProduct(id));
    return response.data;
};
const updateProduct = async (id, body)=>{
    const config = {
        headers: {
            accept: "*/*",
            "Content-Type": "application/json"
        }
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().put(_services_api_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.products.updateProducts(id), body, config);
    return response.data;
};



/***/ })

};
;