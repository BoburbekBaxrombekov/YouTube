(this["webpackJsonpday-8"]=this["webpackJsonpday-8"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(15),n=c.n(a),l=c(8),C=c(0),j=i.a.createContext();function r(e){var t=e.children,c=Object(s.useState)("dark"),i=Object(l.a)(c,2),a=i[0],n=i[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(j.Provider,{value:{theme:a,setTheme:n},children:t})})}var h=i.a.createContext();function o(e){var t=e.children,c=Object(s.useState)(""),i=Object(l.a)(c,2),a=i[0],n=i[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(h.Provider,{value:{menuList:a,setMenuList:n},children:t})})}var d=i.a.createContext();function x(e){var t=e.children,c=Object(s.useState)(""),i=Object(l.a)(c,2),a=i[0],n=i[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(d.Provider,{value:{videoId:a,setVideoId:n},children:t})})}var b=c(4),O=(c(23),c(2));c(24);var v=function(){var e=Object(s.useContext)(j),t=e.theme,c=e.setTheme,i=Object(s.useContext)(h).menuList;return Object(C.jsxs)("header",{className:"header ".concat(t,"-header"),children:[Object(C.jsxs)("div",{className:"bar-icon-wrapper",children:[Object(C.jsx)("button",{className:"bar-icon",onClick:function(){i.current.classList.contains("menu-active")?i.current.classList.remove("menu-active"):i.current.classList.add("menu-active")},children:Object(C.jsx)("svg",{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.6364 3H1.36364C0.61 3 0 2.328 0 1.5C0 0.672 0.61 0 1.36364 0H18.6364C19.3891 0 20 0.672 20 1.5C20 2.328 19.3891 3 18.6364 3ZM1.36364 7H18.6364C19.3891 7 20 7.672 20 8.5C20 9.328 19.3891 10 18.6364 10H1.36364C0.61 10 0 9.328 0 8.5C0 7.672 0.61 7 1.36364 7ZM18.6364 14H1.36364C0.61 14 0 14.672 0 15.5C0 16.328 0.61 17 1.36364 17H18.6364C19.3891 17 20 16.328 20 15.5C20 14.672 19.3891 14 18.6364 14Z",fill:"white"})})}),Object(C.jsxs)("div",{className:"logo",children:[Object(C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAZCAYAAAC2JufVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFLSURBVHgBzZbRUQIxEIb/ML57HRArkBLODiwBKxA7sAPtAK1AO/BKwAq8q4B0cO7eJnAEjhkuy1y+mZ+E8PJNNlli0KMFSkjmfslGIwa+n8P59Kn9uKH8UiqzX9vJFJQfSjtR/iiPsdR6QqGQLWURhGwGQiFf7DRDsMuDkj9yk+KzvWCpe+SFZakC4+Dr/Al9ihQpR71lSeMdpYIeSTvVwU2P8kDTJ8QNcBzdTlkoQGIfRnbtBWlytzMoQ2LvkJ0bfd7UpRhf0iWkpBdzFSn/L7GG5GJuoEgrl+aZskLCBWKpGgqHvZVyvSHxNhNNcvn4DcbPHkipUoUYl7JT1suU0KVmqQbjsFDqcRGOy+eQFxuWqpAP3N9ckMplt6rdjA7sKpPnsD1QpIXXCWW2vs91mEiMTUvIE3mO475jMczQb/WJeRgbP/82vSP0D+Eein+Utu2AAAAAAElFTkSuQmCC",alt:"logo"}),Object(C.jsx)("h2",{className:"".concat(t,"-text"),children:"YouTube"})]})]}),Object(C.jsxs)("div",{className:"header__search",children:[Object(C.jsx)("input",{type:"text",className:"searchInput",placeholder:"Search"}),Object(C.jsx)("button",{className:"searchIconBtn",children:Object(C.jsx)("img",{className:"searchIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgBrZMLDcMwDEStISiEQiiEMBqEjUHDIKUwJB2DjEEheE7kqJaV77qTLFWy83J2XAAlRDQUK4XHUzuFo5ihR1Q4MaSltQe0c/FB8QwORX6h2JTTqQRLjnytlZDDs/21VJA0Q3scM7tH6T4lHSccdIrHEGR1Is1qGYCZNBadiIJB5c7d4I8KsA/fZHoPiZG8NezF3wb6dc/B5DCPgdUor1J44h+W1pWK5O8UC+WqsPuHWNb6xQy02JYV7spA0cqmnHqGmEy7dWCPMsAJrkgBr8EEND7WF9Kt5fUOAl51AAAAAElFTkSuQmCC",alt:"Search"})})]}),Object(C.jsxs)("div",{className:"header__adminPanels",children:[Object(C.jsx)("button",{children:Object(C.jsx)("svg",{width:"27",height:"20",viewBox:"0 0 27 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.2082 2.86766L18.4091 5.68182V2.50266C18.4091 1.11814 17.3104 0 15.955 0H2.4541C1.09644 0 0 1.12048 0 2.50266V17.4973C0 18.8819 1.09874 20 2.4541 20H15.955C17.3126 20 18.4091 18.8795 18.4091 17.4973V14.3182L22.2082 17.1323C22.48 17.3336 22.9801 17.5 23.32 17.5H25.7691C26.456 17.5 27 16.939 27 16.2469V3.75309C27 3.06064 26.4489 2.5 25.7691 2.5H23.32C22.9732 2.5 22.4823 2.66461 22.2082 2.86766ZM2.45455 17.5V2.5H15.9545V17.5H2.45455ZM4.90909 13.75C4.90909 13.0596 5.45956 12.5 6.13996 12.5H12.2691C12.9489 12.5 13.5 13.0548 13.5 13.75C13.5 14.4404 12.9495 15 12.2691 15H6.13996C5.46017 15 4.90909 14.4452 4.90909 13.75ZM23.5108 14.9998L18.424 11.238L18.4243 8.76179L23.5073 4.9966L24.5455 4.99818V14.9988L23.5108 14.9998Z"})})}),Object(C.jsx)("button",{children:Object(C.jsx)("svg",{width:"22",height:"26",viewBox:"0 0 22 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM9.77778 22.4545C9.77778 23.1083 10.3244 23.6364 11 23.6364C11.6709 23.6364 12.2201 23.1064 12.2222 22.4545H9.77778ZM17.7222 11.2318V16.9427C17.7222 17.2702 17.9922 17.6032 18.3181 17.6847L18.6385 17.7648C19.1733 17.8984 19.5556 18.3689 19.5556 18.9091C19.5556 19.5624 19.0088 20.0909 18.3307 20.0909H3.66927C2.99369 20.0909 2.44444 19.56 2.44444 18.9091C2.44444 18.3666 2.82517 17.8979 3.36026 17.7647L3.69151 17.6823C4.0153 17.6017 4.27778 17.2732 4.27778 16.9426V11.2256C4.27778 7.63639 7.28675 4.72727 11 4.72727C14.7148 4.72727 17.7222 7.63541 17.7222 11.2318Z",fill:"white"})})}),Object(C.jsx)("button",{onClick:function(){c("dark"==t?"light":"dark")},children:Object(C.jsx)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 2.5C0 3.88071 1.11929 5 2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5ZM2.5 13C1.11929 13 0 11.8807 0 10.5C0 9.11929 1.11929 8 2.5 8C3.88071 8 5 9.11929 5 10.5C5 11.8807 3.88071 13 2.5 13ZM2.5 21C1.11929 21 0 19.8807 0 18.5C0 17.1193 1.11929 16 2.5 16C3.88071 16 5 17.1193 5 18.5C5 19.8807 3.88071 21 2.5 21ZM10.5 21C9.11929 21 8 19.8807 8 18.5C8 17.1193 9.11929 16 10.5 16C11.8807 16 13 17.1193 13 18.5C13 19.8807 11.8807 21 10.5 21ZM16 18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5ZM10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8C11.8807 8 13 9.11929 13 10.5C13 11.8807 11.8807 13 10.5 13ZM8 2.5C8 3.88071 9.11929 5 10.5 5C11.8807 5 13 3.88071 13 2.5C13 1.11929 11.8807 0 10.5 0C9.11929 0 8 1.11929 8 2.5ZM18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13ZM16 2.5C16 3.88071 17.1193 5 18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5Z"})})}),Object(C.jsx)("button",{children:Object(C.jsx)("img",{src:"data:image/png;base64,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",alt:"Userpic"})})]})]})};c(25);var A=function(){var e=Object(s.useContext)(j),t=e.theme,c=(e.setTheme,Object(s.useState)([])),i=Object(l.a)(c,2),a=i[0],n=i[1],r=Object(s.useRef)(),o=Object(s.useContext)(h);return o.menuList,(0,o.setMenuList)(r),fetch("https://reqres.in/api/users?page=2").then((function(e){return e.json()})).then((function(e){return n(e.data)})),Object(C.jsx)("div",{ref:r,className:"menu ".concat(t,"-header"),children:Object(C.jsxs)("div",{className:"public-pages",children:[Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/",children:[Object(C.jsx)("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.55192 10.5921C1.19689 10.9455 0.621289 10.9455 0.266267 10.5921C-0.0887555 10.2388 -0.0887555 9.66595 0.266267 9.31262L9.35718 0.264999C9.7122 -0.0883329 10.2878 -0.0883329 10.6428 0.264999L19.7337 9.31262C20.0888 9.66595 20.0888 10.2388 19.7337 10.5921C19.3787 10.9455 18.8031 10.9455 18.4481 10.5921L18.1818 10.3274V17.1945C18.1818 18.1933 17.3689 19 16.3628 19H3.63716C2.63348 19 1.81818 18.1934 1.81818 17.1945V10.3274L1.55192 10.5921ZM3.63716 17.1905L6.36364 17.191V11.7597C6.36364 11.2612 6.77023 10.8571 7.27003 10.8571H12.73C13.2306 10.8571 13.6364 11.2609 13.6364 11.7597V17.1929L16.3636 17.1945V8.51944L10 2.19166L3.63632 8.51948C3.63613 10.2308 3.63716 17.1905 3.63716 17.1905ZM11.8182 12.6653V17.1923L8.18182 17.1914V12.6667L11.8182 12.6653Z",fill:"white"})}),"Home"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/trending",children:[Object(C.jsx)("svg",{width:"16",height:"21",viewBox:"0 0 16 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.615 7.20041C15.1323 8.51081 16 10.1175 16 12.321C16 16.9118 12.4133 20.5268 8.0115 20.5268C3.60573 20.5268 0 16.9093 0 12.321C0 9.79412 0.547583 8.23242 2.15502 5.6366C2.66365 4.81522 3.89867 5.11434 3.99436 6.08209C4.08034 6.95167 4.34435 7.69187 4.729 8.25935C4.47244 5.19295 5.80372 1.74433 9.08631 0.10596C9.84629 -0.27335 10.6943 0.424512 10.4966 1.26648C9.98409 3.44851 10.5121 4.62244 11.8924 5.88709C11.926 5.91795 12.098 6.04489 12.3254 6.21279C12.7373 6.51686 13.3311 6.95524 13.615 7.20041ZM2.62075 9.00737C2.33897 9.66335 2 10.4525 2 12.321C2 15.7681 4.70107 18.478 8.0115 18.478C11.3159 18.478 14 15.7727 14 12.321C14 10.7811 13.4246 9.71578 12.3258 8.76679C12.1524 8.61699 11.7458 8.31456 11.3632 8.0299C11.0014 7.76076 10.6609 7.5075 10.559 7.41416C9.23392 6.20002 8.4238 4.9071 8.31376 3.18307C7.64377 3.85212 6.10424 5.93208 6.97198 10.0484C7.1065 10.6865 6.6318 11.289 5.99451 11.289C4.73006 11.289 3.48016 10.2984 2.71627 8.78204C2.68562 8.85634 2.65357 8.93095 2.62075 9.00737Z",fill:"white"})}),"Trending"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/subscriptions",children:[Object(C.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.9056 1C3.9056 0.447715 4.35471 0 4.901 0H12.9102C13.4599 0 13.9056 0.443865 13.9056 1C13.9056 1.55228 13.4565 2 12.9102 2H4.901C4.35125 2 3.9056 1.55614 3.9056 1ZM0.0101027 8.0949L0.811023 16.1041C0.917267 17.1665 1.83603 18 2.90122 18H14.91C15.9712 18 16.8943 17.1632 17.0002 16.1041L17.8011 8.0949C17.9152 6.95379 17.0495 6 15.9047 6H1.90647C0.759323 6 -0.103812 6.95576 0.0101027 8.0949ZM2.01101 8.00421L15.7998 8.0079L14.9056 16H2.9056L2.01101 8.00421ZM2.90122 3C2.35555 3 1.9056 3.44772 1.9056 4C1.9056 4.55614 2.35136 5 2.90122 5H14.91C15.4557 5 15.9056 4.55228 15.9056 4C15.9056 3.44386 15.4598 3 14.91 3H2.90122Z",fill:"white"})}),"Subscriptions"]})})]}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/library",children:[Object(C.jsx)("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.81377 0C0.818072 0 0 0.793984 0 1.77341V14.2266C0 15.2066 0.814396 16 1.819 16H18.181C19.185 16 20 15.2042 20 14.2225V4.44412C20 3.4608 19.1843 2.66667 18.1781 2.66667H10.0034L8.71574 0.742815C8.441 0.332343 7.81071 0 7.30762 0H1.81377ZM18.181 14.2222L1.81818 14.2266L1.81377 1.77778L7.27273 1.78212L8.48211 3.64019C8.818 4.14203 9.39005 4.44444 10.0034 4.44444L18.1818 4.44412L18.181 14.2222Z",fill:"white"})}),"Library"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/history",children:[Object(C.jsx)("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.36364 0C4.85741 0 3.63636 1.20746 3.63636 2.69744V12.6H0.909091C0.407014 12.6 0 13.0042 0 13.4991V15.3C0 16.7912 1.22411 18 2.72727 18H13.6364C15.1423 18 16.3636 16.7944 16.3636 15.3045V5.4H19.0909C19.5965 5.4 20 4.99813 20 4.5024V2.70439C20 1.21111 18.7799 0 17.2727 0H6.36364ZM5.3 16.2C5.40009 15.9193 5.45455 15.6172 5.45455 15.3026V2.69744C5.45455 2.20206 5.86107 1.8 6.36364 1.8C6.86402 1.8 7.27273 2.2043 7.27273 2.7V4.50094C7.27273 4.99748 7.67624 5.4 8.18182 5.4H14.5455V15.3045C14.5455 15.7991 14.1394 16.2 13.6364 16.2H5.3ZM1.81818 14.4V15.3C1.81818 15.7957 2.22689 16.2 2.72727 16.2C3.22984 16.2 3.63636 15.7979 3.63636 15.3026V14.4H1.81818ZM9.09091 3.6V2.7C9.09091 2.38443 9.03609 2.0815 8.9354 1.8H17.2727C17.7747 1.8 18.1818 2.20414 18.1818 2.70439V3.6H9.09091Z",fill:"white"})}),"History"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/watchlater",children:[Object(C.jsx)("svg",{width:"17",height:"19",viewBox:"0 0 17 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.7263 16.7342C11.4999 17.5194 10.0515 17.973 8.5 17.973C6.94846 17.973 5.50008 17.5194 4.27374 16.7342L3.36555 18.3497C3.08967 18.8405 2.48163 19.0104 2 18.7248C1.52171 18.4412 1.35565 17.817 1.6335 17.3227C1.6335 17.3227 2.68265 15.4627 2.70994 15.4264C1.3407 13.9519 0.5 11.9552 0.5 9.75676C0.5 8.53312 0.760452 7.37196 1.22753 6.32856C0.476253 5.66926 0 4.68905 0 3.59459C0 1.60935 1.567 0 3.5 0C4.79331 0 5.92278 0.720433 6.52869 1.79186C7.15928 1.62774 7.81973 1.54054 8.5 1.54054C9.11512 1.54054 9.71402 1.61184 10.2893 1.74683C10.9011 0.700295 12.017 0 13.2921 0C15.2251 0 16.7921 1.60935 16.7921 3.59459C16.7921 4.61644 16.3769 5.5387 15.7104 6.19316C16.2164 7.27113 16.5 8.47993 16.5 9.75676C16.5 11.9552 15.6593 13.9519 14.2901 15.4264C14.3173 15.4627 15.3665 17.3227 15.3665 17.3227C15.6443 17.817 15.4783 18.4412 15 18.7248C14.5184 19.0104 13.9103 18.8405 13.6344 18.3497L12.7263 16.7342ZM7.5 5.64845C7.5 5.08135 7.94386 4.62162 8.5 4.62162C9.05229 4.62162 9.5 5.07733 9.5 5.64845V9.75676C9.5 10.324 9.05665 10.7838 8.50095 10.7838H6.49905C5.94729 10.7838 5.5 10.3279 5.5 9.75676C5.5 9.18955 5.94335 8.72973 6.49905 8.72973H7.5V5.64845ZM2 3.59459C2 2.74378 2.67157 2.05405 3.5 2.05405C3.93928 2.05405 4.3426 2.24978 4.62052 2.56955C3.73645 3.07397 2.95519 3.74545 2.3172 4.54247C2.11715 4.27879 2 3.9482 2 3.59459ZM14.7921 3.59459C14.7921 2.74378 14.1205 2.05405 13.2921 2.05405C12.8889 2.05405 12.5161 2.21892 12.2426 2.49324C13.1305 2.9768 13.9191 3.62706 14.569 4.4034C14.7112 4.1665 14.7921 3.8885 14.7921 3.59459ZM8.5 15.9189C5.18629 15.9189 2.5 13.16 2.5 9.75676C2.5 6.35349 5.18629 3.59459 8.5 3.59459C11.8137 3.59459 14.5 6.35349 14.5 9.75676C14.5 13.16 11.8137 15.9189 8.5 15.9189Z",fill:"white"})}),"Watch later"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/favourites",children:[Object(C.jsx)("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.5882 16.1776C15.8046 17.4345 14.7118 18.2242 13.5793 17.6312C13.5793 17.6312 9.32641 15.4276 9.36773 15.4059L5.11778 17.6312C3.98444 18.2246 2.89263 17.4335 3.10892 16.1776C3.10892 16.1776 3.89901 11.4682 3.93244 11.5007L0.494159 8.16277C-0.422732 7.27264 -0.00467551 5.99401 1.26148 5.81077C1.26148 5.81077 6.00269 5.10388 5.98203 5.14558L8.107 0.857337C8.67367 -0.286213 10.0239 -0.285345 10.5901 0.857337C10.5901 0.857337 12.7302 5.1298 12.684 5.12312L17.4356 5.81077C18.7027 5.99415 19.1191 7.27331 18.2029 8.16277C18.2029 8.16277 14.7844 11.5102 14.7765 11.4644L15.5882 16.1776ZM5.09647 15.5573L8.50515 13.7718C9.0044 13.5104 9.6939 13.511 10.1919 13.7718L13.609 15.561L12.9495 11.7764C12.8542 11.2228 13.0679 10.5699 13.4708 10.1787L16.2242 7.50565L12.4175 6.95008C11.8593 6.8693 11.3019 6.46516 11.0528 5.96262L9.34969 2.52567L7.64427 5.96262C7.39464 6.46637 6.83646 6.8695 6.27962 6.95008L2.46854 7.50163L5.22632 10.1787C5.63022 10.5708 5.84269 11.2241 5.74757 11.7764L5.09647 15.5573Z",fill:"white"})}),"Favourites"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/likedvideos",children:[Object(C.jsx)("svg",{width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.6 0C11.217 0 9.95536 0.530866 9 1.40391C8.04464 0.530866 6.78304 0 5.4 0C2.41766 0 0 2.46848 0 5.51351C0 9.95785 4.48072 14.2534 8.62049 16.7595C8.83009 16.8923 9.17315 16.8905 9.38216 16.7577C13.4946 14.2432 18 9.95763 18 5.51351C18 2.46848 15.5823 0 12.6 0ZM9.00509 14.8252C4.5546 11.8546 1.8 8.38441 1.8 5.51351C1.8 3.48349 3.41177 1.83784 5.4 1.83784C6.29958 1.83784 7.14325 2.17359 7.79955 2.77335L8.66561 3.56478C8.8528 3.73585 9.14971 3.73355 9.33439 3.56478L10.2004 2.77335C10.8567 2.17359 11.7004 1.83784 12.6 1.83784C14.5882 1.83784 16.2 3.48349 16.2 5.51351C16.2 8.45823 13.4557 11.8546 9.00509 14.8252Z",fill:"white"})}),"Liked videos"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/music",children:[Object(C.jsx)("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.85 17.2729C16.5897 17.2729 18 15.8484 18 14.0911V0.92929C18.0016 0.854306 17.9939 0.777902 17.9762 0.701509C17.8626 0.212723 17.3782 -0.0904878 16.8943 0.0242693L5.22802 2.79094C4.82628 2.88621 4.55117 3.23961 4.5 3.63657V13.9428C4.09084 13.7464 3.63312 13.6366 3.15 13.6366C1.4103 13.6366 0 15.0611 0 16.8184C0 18.5757 1.4103 20.0002 3.15 20.0002C4.8897 20.0002 6.3 18.5757 6.3 16.8184V8.0407L16.2 5.6929V11.2155C15.7908 11.0192 15.3331 10.9093 14.85 10.9093C13.1103 10.9093 11.7 12.3338 11.7 14.0911C11.7 15.8484 13.1103 17.2729 14.85 17.2729ZM6.3 6.17308V4.40434L16.2 2.05654V3.82528L6.3 6.17308ZM16.2 14.0911C16.2 13.338 15.5956 12.7275 14.85 12.7275C14.1044 12.7275 13.5 13.338 13.5 14.0911C13.5 14.8442 14.1044 15.4548 14.85 15.4548C15.5956 15.4548 16.2 14.8442 16.2 14.0911ZM3.15 15.4548C3.89558 15.4548 4.5 16.0653 4.5 16.8184C4.5 17.5715 3.89558 18.182 3.15 18.182C2.40442 18.182 1.8 17.5715 1.8 16.8184C1.8 16.0653 2.40442 15.4548 3.15 15.4548Z",fill:"white"})}),"Music"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/games",children:[Object(C.jsx)("svg",{width:"22",height:"16",viewBox:"0 0 22 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.9034 0.5233C12.1075 0.810958 11.7676 0.88899 10.9998 0.88899C10.232 0.88899 9.89216 0.810958 9.09627 0.5233L9.03409 0.500814C8.02943 0.137542 7.43229 0 6.44525 0C4.05055 0 1.85231 2.2826 0.942996 5.06478C0.245262 7.1996 0.0589768 8.56701 0 11.5385C0.0582506 14.4925 1.34092 15.9856 3.66063 16C5.11467 15.9917 6.11219 15.363 7.03418 14.2208C7.17642 14.0446 7.56758 13.5231 7.60944 13.4673L7.61308 13.4625C8.56208 12.235 9.54325 11.5652 11.0027 11.5556C12.4564 11.5652 13.4376 12.235 14.3866 13.4625L14.3902 13.4673C14.4321 13.5231 14.8232 14.0446 14.9655 14.2208C15.8875 15.363 16.885 15.9917 18.3278 16C20.6587 15.9856 21.9414 14.4925 21.9997 11.5727C21.9407 8.56701 21.7544 7.1996 21.0567 5.06478C20.1474 2.2826 17.9491 0 15.5544 0C14.5674 0 13.9702 0.137542 12.9656 0.500814L12.9034 0.5233ZM8.45597 2.18913C9.4419 2.54547 10.0813 2.66676 10.9998 2.66676C11.9183 2.66676 12.5578 2.54547 13.5437 2.18913L13.6061 2.16655C14.4238 1.87087 14.828 1.77778 15.5544 1.77778C16.9794 1.77778 18.6138 3.47492 19.309 5.60189C19.9465 7.55254 20.1108 8.75828 20.1667 11.5727C20.1263 13.5619 19.5656 14.2146 18.3273 14.2222C17.5536 14.2178 17.0194 13.8811 16.4091 13.125C16.3079 12.9996 16.0221 12.62 15.9044 12.4636L15.9043 12.4634L15.9041 12.4633L15.904 12.4631L15.9037 12.4627L15.9037 12.4627L15.8535 12.3961C14.5953 10.7687 13.164 9.79184 10.9941 9.77782C8.83563 9.79184 7.40436 10.7687 6.14621 12.3961L6.096 12.4626C5.97878 12.6183 5.69198 12.9994 5.59053 13.125C4.98023 13.8811 4.44608 14.2178 3.6611 14.2222C2.43407 14.2146 1.87336 13.5619 1.83299 11.5384C1.88885 8.75828 2.05311 7.55254 2.69066 5.60189C3.38582 3.47492 5.02024 1.77778 6.44525 1.77778C7.17164 1.77778 7.57582 1.87087 8.39355 2.16655L8.45597 2.18913ZM15.5832 5.77778C15.0769 5.77778 14.6665 5.37981 14.6665 4.88889C14.6665 4.39797 15.0769 4 15.5832 4C16.0894 4 16.4998 4.39797 16.4998 4.88889C16.4998 5.37981 16.0894 5.77778 15.5832 5.77778ZM14.6665 8.44444C14.6665 8.93536 15.0769 9.33333 15.5832 9.33333C16.0894 9.33333 16.4998 8.93536 16.4998 8.44444C16.4998 7.95352 16.0894 7.55556 15.5832 7.55556C15.0769 7.55556 14.6665 7.95352 14.6665 8.44444ZM17.4165 7.55556C16.9102 7.55556 16.4998 7.15759 16.4998 6.66667C16.4998 6.17575 16.9102 5.77778 17.4165 5.77778C17.9228 5.77778 18.3332 6.17575 18.3332 6.66667C18.3332 7.15759 17.9228 7.55556 17.4165 7.55556ZM12.8332 6.66667C12.8332 7.15759 13.2436 7.55556 13.7498 7.55556C14.2561 7.55556 14.6665 7.15759 14.6665 6.66667C14.6665 6.17575 14.2561 5.77778 13.7498 5.77778C13.2436 5.77778 12.8332 6.17575 12.8332 6.66667ZM6.4165 9.33333C4.89771 9.33333 3.6665 8.13943 3.6665 6.66667C3.6665 5.19391 4.89771 4 6.4165 4C7.93528 4 9.1665 5.19391 9.1665 6.66667C9.1665 8.13943 7.93528 9.33333 6.4165 9.33333ZM7.33316 6.66667C7.33316 7.15759 6.92276 7.55556 6.4165 7.55556C5.91024 7.55556 5.49983 7.15759 5.49983 6.66667C5.49983 6.17575 5.91024 5.77778 6.4165 5.77778C6.92276 5.77778 7.33316 6.17575 7.33316 6.66667Z",fill:"white"})}),"Games"]})}),Object(C.jsx)("li",{children:Object(C.jsxs)(b.b,{className:"".concat(t,"-text"),activeClassName:"activeLink",exact:!0,to:"/showmore",children:[Object(C.jsx)("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{className:"".concat(t,"-icon"),opacity:"1",d:"M6.66931 5.25531L11.6193 0.305313C11.8704 0.0453564 12.2422 -0.0588996 12.5918 0.0326158C12.9415 0.124131 13.2145 0.397176 13.306 0.746806C13.3975 1.09644 13.2933 1.46824 13.0333 1.71931L7.37631 7.37631C6.98581 7.7667 6.35281 7.7667 5.96231 7.37631L0.305313 1.71931C0.0453564 1.46824 -0.0588996 1.09644 0.0326158 0.746806C0.124131 0.397176 0.397176 0.124131 0.746806 0.0326158C1.09644 -0.0588996 1.46824 0.0453564 1.71931 0.305313L6.66931 5.25531Z",fill:"white"})}),"Show more"]})})]}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)("h2",{className:"".concat(t,"-text"),children:"Subscriptions"})}),Object(C.jsx)("li",{children:a.map((function(e){return Object(C.jsxs)(b.b,{className:"".concat(t,"-text userAccounts"),exact:!0,to:"/channels",children:[Object(C.jsx)("img",{className:"userPhoto",src:e.avatar,alt:"user"}),Object(C.jsx)("h4",{children:e.first_name})]})}))})]})]})})};c(31);var u=function(){var e=Object(s.useContext)(j).theme;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(v,{}),Object(C.jsxs)("div",{className:"HomePage ".concat(e),children:[Object(C.jsx)(A,{}),Object(C.jsx)("div",{className:"HomeContent",children:Object(C.jsx)("ul",{className:"photosWrapper"})})]})]})};c(32);var w=function(){var e=Object(s.useContext)(d),t=(e.videoId,e.setVideoId,Object(s.useContext)(j)),c=t.theme;return t.setTheme,Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(v,{}),Object(C.jsxs)("div",{className:"VideoPage ".concat(c),children:[Object(C.jsx)(A,{}),Object(C.jsx)("div",{className:"VideoContent",children:Object(C.jsx)("div",{className:"videoWrapper",children:Object(C.jsx)("div",{className:"playingVideo"})})})]})]})};c(33);var m=function(){var e=Object(s.useContext)(d),t=(e.videoId,e.setVideoId,Object(s.useContext)(j)),c=t.theme;return t.setTheme,Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(v,{}),Object(C.jsxs)("div",{className:"ChannelPage ".concat(c),children:[Object(C.jsx)(A,{}),Object(C.jsx)("div",{className:"ChannelContent",children:Object(C.jsx)("div",{className:"channelWrapper"})})]})]})};var g=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(O.c,{children:[Object(C.jsx)(O.a,{exact:!0,path:"/",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/trending",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/subscriptions",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/library",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/history",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/watchlater",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/favourites",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/likedvideos",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/music",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/games",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/showmore",children:Object(C.jsx)(u,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/videoplayer",children:Object(C.jsx)(w,{})}),Object(C.jsx)(O.a,{exact:!0,path:"/channels",children:Object(C.jsx)(m,{})})]})})};n.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(b.a,{children:Object(C.jsx)(r,{children:Object(C.jsx)(o,{children:Object(C.jsx)(x,{children:Object(C.jsx)(g,{})})})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.75b16a09.chunk.js.map