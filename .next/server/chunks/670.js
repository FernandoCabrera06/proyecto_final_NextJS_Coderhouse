exports.id=670,exports.ids=[670],exports.modules={93383:(e,t,r)=>{Promise.resolve().then(r.bind(r,69339))},57327:(e,t,r)=>{Promise.resolve().then(r.bind(r,83834)),Promise.resolve().then(r.bind(r,79546))},42331:(e,t,r)=>{Promise.resolve().then(r.bind(r,70674))},97936:(e,t,r)=>{Promise.resolve().then(r.bind(r,62445)),Promise.resolve().then(r.bind(r,94392)),Promise.resolve().then(r.bind(r,96546)),Promise.resolve().then(r.bind(r,29660)),Promise.resolve().then(r.t.bind(r,92481,23))},5570:(e,t,r)=>{Promise.resolve().then(r.bind(r,34547))},5306:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},69339:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(10326),s=r(17577);r(83834);var o=r(38919);let i=({children:e,login:t})=>{let[r,i]=(0,s.useState)(null);return((0,s.useEffect)(()=>{},[]),null===r)?a.jsx(o.Z,{}):a.jsx(a.Fragment,{children:r?e:t})}},38919:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(10326);r(75655);let s=()=>a.jsx("div",{className:"w-full h-full min-h-screen flex justify-center items-center",children:a.jsx("div",{className:"spinner"})})},82308:(e,t,r)=>{"use strict";r.d(t,{Ap:()=>x,I8:()=>d,db:()=>n,tO:()=>l});var a=r(42585),s=r(76),o=r(11552),i=r(10054);let c=(0,a.ZF)({apiKey:"AIzaSyAYDVA2nZ5sps5aFNHZneZQ0_-4hzNuyU4",authDomain:"codernext-app-51fc9.firebaseapp.com",projectId:"codernext-app-51fc9",storageBucket:"codernext-app-51fc9.appspot.com",messagingSenderId:"355954847648",appId:"1:355954847648:web:dfe3a53425dea26c22fec5"}),n=(0,s.ad)(c),l=(0,o.cF)(c),d=(0,i.v0)(c),x=new i.hJ},70674:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(10326),s=r(35047),o=r(46226),i=r(15798);function c(){let e=(0,s.useRouter)();return a.jsx("main",{children:(0,a.jsxs)("div",{className:"error-container mt-30",children:[a.jsx("h1",{children:"⚠️Ups! Hubo un error⚠️"}),a.jsx(o.default,{src:"/error.jpg",alt:"Imagen de perro tapandose los ojos",width:500,height:500}),a.jsx("h2",{children:"Intente nuevamente mas tarde..."}),a.jsx("div",{children:a.jsx(i.Z,{className:"boton-volver",onClick:()=>{e.back()},children:"Volver"})})]})})}},62445:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(10326),s=r(83834),o=r(15798);let i=()=>{let{logout:e}=(0,s.E)();return a.jsx(o.Z,{onClick:e,className:" text-sm mr-20 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",children:"Cerrar Sesion"})}},94392:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(10326),s=r(46226),o=r(90434),i=r(76),c=r(82308),n=r(17577),l=r(38919);let d=()=>{let[e,t]=(0,n.useState)(!1),[r,d]=(0,n.useState)([]),x=async()=>{try{t(!0);let e=await fetch("http://localhost:3000/api/productos/todos",{cache:"no-store"}),r=await e.json();Array.isArray(r)?d(r):console.error("Datos recibidos no son un array:",r)}catch(e){console.error("Hubo un error al traer los datos: "+e)}t(!1)};(0,n.useEffect)(()=>{x()},[]);let h=async e=>{let r=String(e),a=(0,i.JU)(c.db,"productos",r);try{t(!0),await (0,i.oe)(a),console.log(`Producto ${e} borrado!`),x()}catch(e){console.error("Error al borrar el producto: ",e)}finally{t(!1)}};return a.jsx(a.Fragment,{children:e?a.jsx(l.Z,{}):(0,a.jsxs)("div",{children:[a.jsx(o.default,{href:"/admin/create/",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Agregar Producto +"}),a.jsx("div",{className:"overflow-x-auto mt-4",children:(0,a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[a.jsx("thead",{className:"bg-gray-800 text-white",children:(0,a.jsxs)("tr",{children:[a.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Nombre"}),a.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Precio"}),a.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Stock"}),a.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Categoria"}),a.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Imagen"}),a.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Marca"}),a.jsx("th",{scope:"col",className:"px-16 py-3 text-left text-xs font-medium uppercase tracking-wider",children:"Acciones"})]})}),a.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:r.map((e,t)=>(0,a.jsxs)("tr",{className:t%2==0?"bg-gray-50":"bg-white",children:[a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e.description}),(0,a.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:["$",e.price]}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.stock}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.category}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:a.jsx(s.default,{src:e.img,alt:e.description,width:80,height:80,className:"rounded"})}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.brand}),(0,a.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:[a.jsx(o.default,{href:`/admin/edit/${e.id}`,className:"bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded",children:"Editar"}),a.jsx("button",{onClick:()=>h(e.id),className:"bg-transparent ml-2 hover:bg-red-500 text-red-700 font-semibold hover:text-white px-4 border border-red-500 hover:border-transparent rounded h-9",children:"Borrar"})]})]},e.id))})]})})]})})}},34547:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(10326),s=r(17577),o=r(15798),i=r(83834);let c=()=>{let{registerUser:e,loginUser:t,googleLogin:r}=(0,i.E)(),[c,n]=(0,s.useState)({email:"",password:""}),l=e=>{n({...c,[e.target.name]:e.target.value})},d=async e=>{e.preventDefault()};return a.jsx("div",{className:"fixed w-screen h-screen inset-0 z-10 flex justify-center bg-blue-400 bg-opacity-25",children:(0,a.jsxs)("form",{onSubmit:d,className:"bg-white py-4 px-6 mt-10 rounded-xl max-w-md w-full h-80 ",children:[a.jsx("h2",{children:"Login"}),a.jsx("input",{type:"email",value:c.email,required:!0,placeholder:"Tu email",className:"p-2 rounded w-full border border-blue-100 block my-4",name:"email",onChange:l}),a.jsx("input",{type:"password",value:c.password,required:!0,placeholder:"Tu password",className:"p-2 rounded w-full border border-blue-100 block my-4",name:"password",onChange:l}),(0,a.jsxs)("div",{className:"flex justify-center mt-10",children:[a.jsx(o.Z,{onClick:()=>t(c),type:"submit",className:"mr-2",children:"Enviar"}),a.jsx(o.Z,{onClick:()=>e(c),className:"mr-2",children:"Registrarme"}),a.jsx(o.Z,{onClick:()=>r(),children:"Ingresa con Google"})]})]})})}},83834:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>l,E:()=>n});var a=r(10326),s=r(82308),o=r(10054),i=r(17577);let c=(0,i.createContext)(),n=()=>(0,i.useContext)(c),l=({children:e})=>{let[t,r]=(0,i.useState)({logged:!1,emaiL:null,uid:null}),n=async e=>{try{await (0,o.Xb)(s.I8,e.email,e.password)}catch(e){console.error("Error al registrar:",e)}},l=async e=>{try{await (0,o.e5)(s.I8,e.email,e.password),document.location.reload()}catch(e){console.error("Error al iniciar sesi\xf3n:",e)}},d=async()=>{await (0,o.w7)(s.I8),document.location.reload()},x=async()=>{await (0,o.rh)(s.I8,s.Ap)};return(0,i.useEffect)(()=>{(0,o.Aj)(s.I8,e=>{e?r({email:e.email,uid:e.uid}):r({emaiL:null,uid:null})})},[]),a.jsx(c.Provider,{value:{registerUser:n,loginUser:l,logout:d,googleLogin:x},children:e})}},79546:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>c,i:()=>i});var a=r(10326),s=r(17577);let o=(0,s.createContext)(),i=()=>(0,s.useContext)(o),c=({children:e})=>{let[t,r]=(0,s.useState)([]);return a.jsx(o.Provider,{value:{cart:t,addToCart:e=>{e.stock>0&&r([...t,e])},isInCart:e=>t.some(t=>t.id===e),totalQty:()=>t.reduce((e,t)=>e+t.quantity,0),emptyCart:()=>{r([])},totalSum:()=>t.reduce((e,t)=>t.quantity>0?e+t.price*t.quantity:e+t.price,0)},children:e})}},15798:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(10326);let s=({children:e,className:t="",...r})=>a.jsx("button",{className:`rounded-x1 py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white text-center ${t}`,...r,children:e})},96546:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(10326),s=r(46226),o=r(79546),i=r(90434);let c=()=>{let{totalQty:e}=(0,o.i)();return(0,a.jsxs)(i.default,{href:"/carrito",className:"text-base text-slate-100 p-3 flex items-center",children:[a.jsx(s.default,{src:"/cart-icon.svg",alt:"Cart icon",width:30,height:30}),a.jsx("span",{children:e()})]})}},29660:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var a=r(10326),s=r(46226),o=r(90434);let i=[{href:"https://web.whatsapp.com/",src:"/whatsapp.png",alt:"Logo Whatsapp"},{href:"https://www.facebook.com/",src:"/facebook.png",alt:"Logo Facebook"},{href:"https://www.instagram.com/",src:"/instagram.png",alt:"Logo Instagram"},{href:"https://twitter.com/",src:"/xcorp.png",alt:"Logo X corp"}],c=()=>a.jsx("footer",{children:(0,a.jsxs)("div",{className:"footer-container",children:[a.jsx("div",{className:"socials-icon-container",children:i.map(e=>a.jsx(o.default,{href:e.href,target:"_blank",children:a.jsx(s.default,{className:"socials-icon",src:e.src,alt:e.alt,width:50,height:50})},e.href))}),a.jsx("p",{children:"Todos los derechos reservados - Alimentos Rocco \xae"})]})})},54833:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>c});var s=r(84150),o=r(54796),i=e([o]);o=(i.then?(await i)():i)[0];let c=()=>s.jsx("div",{children:s.jsx(o.Z,{})});a()}catch(e){a(e)}})},20861:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\app\admin\layout.js`)).default;a()}catch(e){a(e)}},1)},723:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>x,metadata:()=>d});var s=r(84150),o=r(96824),i=r(72680),c=r(78529);r(92461);var n=r(49032),l=e([o,i,c,n]);[o,i,c,n]=l.then?(await l)():l;let d={title:"Rocco Alimentos - Administrador",description:"E-commerce de alimentos para mascotas",keywords:["coderhouse","e-commerce","nextjs","mascotas","alimento"],openGraph:{title:"Next.js",type:"article",publishedTime:"2023-01-01T00:00:00.000Z",aythors:["Fernando Cabrera"]}},x=()=>(0,s.jsxs)("main",{children:[s.jsx(c.Z,{}),(0,s.jsxs)("div",{className:"text-3xl flex justify-center mt-3 mb-8",children:[s.jsx(n.Z,{}),s.jsx("h1",{children:" Cargar/Editar productos"})]}),s.jsx("div",{className:"flex justify-center border-solid mt-18",children:s.jsx(o.Z,{})}),s.jsx(i.Z,{})]});a()}catch(e){a(e)}})},10214:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d});var s=r(84150),o=r(62002),i=r.n(o);r(67272);var c=r(70251),n=r(84301),l=e([c,n]);function d({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:i().className,children:s.jsx(n.H,{children:s.jsx(c.Z,{children:e})})})})}[c,n]=l.then?(await l)():l,a()}catch(e){a(e)}})},71470:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\app\not-found.js`)).default;a()}catch(e){a(e)}},1)},49032:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\components\admin\LogoutButton.js`)).default;a()}catch(e){a(e)}},1)},96824:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\components\admin\ProductsTable.js`)).default;a()}catch(e){a(e)}},1)},54796:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\components\auth\LoginForm.js`)).default;a()}catch(e){a(e)}},1)},84301:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{H:()=>o});var s=r(71851);let e=await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\components\context\AuthContext.js`);e.useAuthContext;let o=e.AuthProvider;a()}catch(e){a(e)}},1)},70251:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>o});var s=r(71851);let e=await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\components\context\CartContext.js`);e.useCartContext;let o=e.CartProvider;a()}catch(e){a(e)}},1)},37822:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\components\ui\CartWidget.js`)).default;a()}catch(e){a(e)}},1)},72680:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`G:\Desktop\Curso Coderhouse\05_Next_JS\entregaFinalNextJS\components\ui\Footer.js`)).default;a()}catch(e){a(e)}},1)},78529:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>n});var s=r(84150),o=r(74894);r(73495);var i=r(37822),c=e([i]);i=(c.then?(await c)():c)[0];let n=()=>s.jsx("header",{className:"w-full bg-sky-700",children:(0,s.jsxs)("div",{className:"container m-auto py-6 flex justify-between items-center",children:[s.jsx("a",{href:"/",children:(0,s.jsxs)("div",{className:"logo-sitio-container",children:[s.jsx(o.default,{src:"/logo.png",id:"logo-sitio",alt:"logo sitio",width:50,height:50}),s.jsx("p",{className:"text-base text-slate-100",children:"Rocco - Alimentos para mascotas"})]})}),(0,s.jsxs)("nav",{className:"flex justify-between gap-2",children:[s.jsx("a",{className:"text-base text-slate-100 p-3",href:"/",children:"Inicio"}),s.jsx("a",{className:"text-base text-slate-100 p-3",href:"/catalogo/todos",children:"Cat\xe1logo"}),s.jsx("a",{className:"text-base text-slate-100 p-3",href:"/admin",children:"Administrador"}),s.jsx("div",{children:s.jsx("span",{id:"contadorCarrito",className:"badge text-bg-danger",children:s.jsx(i.Z,{})})})]})]})});a()}catch(e){a(e)}})},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(40771);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},75655:()=>{},67272:()=>{},73495:()=>{}};