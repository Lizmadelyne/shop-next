(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[576],{9241:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/edit/[id]",function(){return s(476)}])},2412:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var r=s(5893),i=s(7294),n=s(1163);s(1664);var a=s(8944);function o(e){var t;let{setOpen:s,setAlert:o,product:d}=e,l=(0,i.useRef)(null),c=(0,n.useRouter)();return(0,r.jsx)("form",{ref:l,onSubmit:e=>{e.preventDefault();let t=new FormData(l.current),r={title:t.get("title"),price:parseInt(t.get("price")),description:t.get("description"),categoryId:parseInt(t.get("category")),images:[t.get("images").name]};d?(0,a.nM)(d.id,r).then(()=>{c.push("/dashboard/products/")}):(0,a.gK)(r).then(()=>{o({active:!0,message:"product added successfuly",type:"success",autoClose:!1}),s(!1)}).catch(e=>{o({active:!0,message:e.message,type:"error",autoClose:!1})})},children:(0,r.jsxs)("div",{className:"overflow-hidden",children:[(0,r.jsx)("div",{className:"px-4 py-5 bg-gray-100 sm:p-6",children:(0,r.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,r.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,r.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),(0,r.jsx)("input",{defaultValue:null==d?void 0:d.title,type:"text",name:"title",id:"title",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,r.jsx)("label",{htmlFor:"price",className:"block text-sm font-medium text-gray-700",children:"Price"}),(0,r.jsx)("input",{defaultValue:null==d?void 0:d.price,type:"number",name:"price",id:"price",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,r.jsxs)("div",{className:"col-span-6",children:[(0,r.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),(0,r.jsxs)("select",{id:"category",name:"category",defaultValue:null==d?void 0:null===(t=d.category)||void 0===t?void 0:t.name,autoComplete:"category-name",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[(0,r.jsx)("option",{value:"1",children:"Clothes"}),(0,r.jsx)("option",{value:"2",children:"Electronics"}),(0,r.jsx)("option",{value:"3",children:"Furniture"}),(0,r.jsx)("option",{value:"4",children:"Toys"}),(0,r.jsx)("option",{value:"5",children:"Others"})]})]}),(0,r.jsxs)("div",{className:"col-span-6",children:[(0,r.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),(0,r.jsx)("textarea",{name:"description",id:"description",defaultValue:null==d?void 0:d.description,autoComplete:"description",rows:"3",className:"form-textarea mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),(0,r.jsx)("div",{className:"col-span-6",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Cover photo"}),(0,r.jsx)("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:(0,r.jsxs)("div",{className:"space-y-1 text-center",children:[(0,r.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,r.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,r.jsxs)("label",{htmlFor:"images",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[(0,r.jsx)("span",{children:"Upload a file"}),(0,r.jsx)("input",{defaultValue:null==d?void 0:d.images,id:"images",name:"images",type:"file",className:"sr-only"})]}),(0,r.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,r.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})]})}),(0,r.jsx)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,r.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})})]})})}},476:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var r=s(5893),i=s(2412),n=s(7294),a=s(9669),o=s.n(a),d=s(1163),l=s(704);function c(){let[e,t]=(0,n.useState)({}),s=(0,d.useRouter)();return(0,n.useEffect)(()=>{let{id:e}=s.query;async function r(){let s=await o().get(l.Z.products.getProduct(e));t(s.data)}s.isReady&&r()},[null==s?void 0:s.isReady]),(0,r.jsx)(i.Z,{product:e})}},8944:function(e,t,s){"use strict";s.d(t,{Ir:function(){return o},gK:function(){return a},nM:function(){return d}});var r=s(9669),i=s.n(r),n=s(704);let a=async e=>{let t=await i().post(n.Z.products.addProducts,e,{headers:{accept:"*/*","Content-Type":"application/json"}});return t.data},o=async e=>{let t=await i().delete(n.Z.products.deleteProduct(e));return t.data},d=async(e,t)=>{let s=await i().put(n.Z.products.updateProducts(e),t,{headers:{accept:"*/*","Content-Type":"application/json"}});return s.data}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=9241)}),_N_E=e.O()}]);