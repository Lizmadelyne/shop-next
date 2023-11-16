(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{3394:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/products",function(){return t(7314)}])},2412:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var a=t(5893),i=t(7294),l=t(1163),r=t(8944);function n(e){var s,t;let{setOpen:n,setAlert:o,product:c}=e,d=(0,i.useRef)(null),m=(0,l.useRouter)(),[u,x]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{var e;(null==c?void 0:null===(e=c.category)||void 0===e?void 0:e.id)?x(!1):x(!0)},[c]),(0,a.jsx)("form",{ref:d,onSubmit:e=>{e.preventDefault();let s=new FormData(d.current),t={title:s.get("title"),price:parseInt(s.get("price")),description:s.get("description"),categoryId:parseInt(s.get("category")),images:[s.get("images").name]};c?(0,r.Ix)(s.get("images")).then(e=>{t.images=[e.location],(0,r.Js)(c.id,t).then(()=>{m.push("/dashboard/products/")})}).catch(e=>{console.error(e)}):(0,r.Ix)(s.get("images")).then(e=>{t.images=[e.location],(0,r.gK)(t).then(()=>{o({active:!0,message:"product added successfuly",type:"success",autoClose:!1}),n(!1)}).catch(e=>{console.log(e),o({active:!0,message:e.message,type:"error",autoClose:!1}),n(!1)})}).catch(e=>{console.error(e)})},children:(0,a.jsxs)("div",{className:"overflow-hidden",children:[(0,a.jsx)("div",{className:"px-4 py-5 bg-gray-100 sm:p-6",children:(0,a.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),(0,a.jsx)("input",{defaultValue:null==c?void 0:c.title,type:"text",name:"title",id:"title",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"price",className:"block text-sm font-medium text-gray-700",children:"Price"}),(0,a.jsx)("input",{defaultValue:null==c?void 0:c.price,type:"number",name:"price",id:"price",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsxs)("div",{className:"col-span-6",children:[(0,a.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),(0,a.jsxs)("select",{id:"category",name:"category",defaultValue:null==c?void 0:null===(s=c.category)||void 0===s?void 0:s.id,autoComplete:"category-name",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[(0,a.jsx)("option",{value:"1",children:"Clothes"}),(0,a.jsx)("option",{value:"2",children:"Electronics"}),(0,a.jsx)("option",{value:"3",children:"Furniture"}),(0,a.jsx)("option",{value:"4",children:"Toys"}),(0,a.jsx)("option",{value:"5",children:"Others"})]}),u&&(0,a.jsxs)("select",{id:"category",name:"category",defaultValue:null==c?void 0:null===(t=c.category)||void 0===t?void 0:t.id,autoComplete:"category-name",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[(0,a.jsx)("option",{value:"1",children:"Clothes"}),(0,a.jsx)("option",{value:"2",children:"Electronics"}),(0,a.jsx)("option",{value:"3",children:"Furniture"}),(0,a.jsx)("option",{value:"4",children:"Toys"}),(0,a.jsx)("option",{value:"5",children:"Others"})]})]}),(0,a.jsxs)("div",{className:"col-span-6",children:[(0,a.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,a.jsx)("textarea",{name:"description",id:"description",defaultValue:null==c?void 0:c.description,autoComplete:"description",rows:"3",className:"form-textarea mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsx)("div",{className:"col-span-6",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Cover photo"}),(0,a.jsx)("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"images",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[(0,a.jsx)("span",{children:"Upload a file"}),(0,a.jsx)("input",{defaultValue:null==c?void 0:c.images,id:"images",name:"images",type:"file",className:"sr-only"})]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})]})}),(0,a.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,a.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lime-700 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})})]})})}},7314:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var a=t(5893),i=t(7294),l=t(9669),r=t.n(l),n=t(8680),o=t(5362),c=t(1664),d=t.n(c),m=t(4080),u=t(2560);function x(e){let{open:s,setOpen:t,children:l}=e,r=(0,i.useRef)(null);return(0,a.jsx)(m.u.Root,{show:s,as:i.Fragment,children:(0,a.jsx)(u.V,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:r,onClose:t,children:(0,a.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,a.jsx)(m.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)(u.V.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,a.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,a.jsx)(m.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,a.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,a.jsx)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:(0,a.jsx)(o.Z,{className:"flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer","aria-hidden":"true",onClick:()=>t(!1),ref:r})}),(0,a.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,a.jsx)("div",{className:"sm:flex sm:items-start",children:l})})]})})]})})})}var p=t(2412),h=t(704),g=e=>{let{alert:s,handleClose:t}=e;return s&&(null==s?void 0:s.autoClose)&&setTimeout(()=>{t()},9e3),(0,a.jsx)(a.Fragment,{children:(null==s?void 0:s.active)&&(0,a.jsx)("div",{"x-data":!0,className:"bg-indigo-100 p-5 w-full rounded mb-8",children:(0,a.jsxs)("div",{className:"flex space-x-3",children:[(0,a.jsx)("div",{className:"flex-1 leading-tight text-sm text-black font-medium",children:s.message}),(0,a.jsx)("button",{type:"button",children:(0,a.jsx)(o.Z,{className:"w-6 h-6 text-gray-600",onClick:t})})]})})})},f=e=>{let[s,t]=(0,i.useState)({active:!1,message:"",type:"",autoClose:!0,...e});return{alert:s,setAlert:t,toggleAlert:()=>{t(!s.active)}}},y=t(8944);function j(){let[e,s]=(0,i.useState)(!1),[t,l]=(0,i.useState)([]),{alert:c,setAlert:m,toggleAlert:u}=f();(0,i.useEffect)(()=>{async function e(){let e=await r().get(h.Z.products.allProducts);l(e.data)}try{e()}catch(e){console.log(e)}},[c]);let j=e=>{(0,y.Ir)(e).then(()=>{m({active:!0,message:"Delete product successfully",type:"error",autoClose:!0})})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{alert:c,handleClose:u}),(0,a.jsxs)("div",{className:"lg:flex lg:items-center lg:justify-between mb-8",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",children:"List of Products"})}),(0,a.jsx)("div",{className:"mt-5 flex lg:mt-0 lg:ml-4",children:(0,a.jsx)("span",{className:"sm:ml-3",children:(0,a.jsxs)("button",{onClick:()=>s(!0),type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-700 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[" ",(0,a.jsx)(n.Z,{className:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),"Add Product"]})})})]}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,a.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,a.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Price"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Id"}),(0,a.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:(0,a.jsx)("span",{className:"sr-only",children:"Edit"})}),(0,a.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:(0,a.jsx)("span",{className:"sr-only",children:"Delete"})})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null==t?void 0:t.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0 h-10 w-10",children:(0,a.jsx)("img",{className:"h-10 w-10 rounded-full",src:e.images[0],alt:""})}),(0,a.jsx)("div",{className:"ml-4",children:(0,a.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.title})})]})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsx)("div",{className:"text-sm text-gray-900",children:e.category.name})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsxs)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:["$",e.price]})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.id}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:(0,a.jsx)(d(),{href:"/dashboard/edit/".concat(e.id),className:"text-indigo-600 hover:text-indigo-900",children:"Edit"})}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:(0,a.jsx)(o.Z,{className:"flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer","aria-hidden":"true",onClick:()=>j(e.id)})})]},"Product-item-".concat(e.id)))})]})})})})}),(0,a.jsx)(x,{open:e,setOpen:s,children:(0,a.jsx)(p.Z,{setOpen:s,setAlert:m})})]})}},8944:function(e,s,t){"use strict";t.d(s,{Ir:function(){return n},Ix:function(){return c},Js:function(){return o},gK:function(){return r}});var a=t(9669),i=t.n(a),l=t(704);let r=async e=>{let s=await i().post(l.Z.products.addProducts,e,{headers:{accept:"*/*","Content-Type":"application/json"}});return s.data},n=async e=>{let s=await i().delete(l.Z.products.deleteProduct(e));return s.data},o=async(e,s)=>{let t=await i().put(l.Z.products.updateProducts(e),s,{headers:{accept:"*/*","Content-Type":"application/json"}});return t.data},c=async e=>{let s=await i().post(l.Z.files.addImage,{file:e},{headers:{"Content-Type":"multipart/form-data",accept:"*/*"}});return s.data}}},function(e){e.O(0,[55,774,888,179],function(){return e(e.s=3394)}),_N_E=e.O()}]);