const i=()=>{var e,t;document.querySelector(".error-page1").classList.add("rtl"),document.querySelector("html[lang=en]").setAttribute("dir","rtl"),(e=document.getElementById("bootstrapLink"))==null||e.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css"),(t=document.querySelector(".app"))==null||t.classList.remove("ltr"),document.querySelector(".error-page1").classList.remove("ltr"),document.getElementById("myonoffswitch55").checked=!0,localStorage.setItem("nowaltr",!1),localStorage.removeItem("nowartl")},u=()=>{var e;document.querySelector(".error-page1").classList.add("ltr"),document.querySelector("html[lang=en]").setAttribute("dir","ltr"),(e=document.getElementById("bootstrapLink"))==null||e.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"),document.querySelector(".error-page1").classList.remove("rtl"),document.getElementById("myonoffswitch54").checked=!0,localStorage.setItem("nowartl",!1),localStorage.removeItem("nowaltr")},y=()=>{var e,t,r,o,a,c;document.querySelector(".error-page1").classList.add("light-theme"),document.querySelector(".error-page1").classList.remove("transparent-theme"),document.querySelector(".error-page1").classList.remove("dark-theme"),(e=document.querySelector("body"))==null||e.classList.remove("dark-header"),(t=document.querySelector("body"))==null||t.classList.remove("color-header"),(r=document.querySelector("body"))==null||r.classList.remove("gradient-header"),(o=document.querySelector("body"))==null||o.classList.remove("dark-menu"),(a=document.querySelector("body"))==null||a.classList.remove("color-menu"),(c=document.querySelector("body"))==null||c.classList.remove("gradient-menu"),document.querySelector("html").style="",s(),localStorage.setItem("nowalight","true"),localStorage.removeItem("nowadark"),document.getElementById("myonoffswitch1").checked=!0},g=()=>{var e,t,r,o,a,c;document.querySelector(".error-page1").classList.add("dark-theme"),document.querySelector(".error-page1").classList.remove("transparent-theme"),document.querySelector(".error-page1").classList.remove("light-theme"),(e=document.querySelector("body"))==null||e.classList.remove("light-header"),(t=document.querySelector("body"))==null||t.classList.remove("color-header"),(r=document.querySelector("body"))==null||r.classList.remove("gradient-header"),(o=document.querySelector("body"))==null||o.classList.remove("light-menu"),(a=document.querySelector("body"))==null||a.classList.remove("color-menu"),(c=document.querySelector("body"))==null||c.classList.remove("gradient-menu"),localStorage.setItem("nowadark","true"),localStorage.removeItem("nowalight"),document.getElementById("myonoffswitch2").checked=!0,document.querySelector("html").style="",s()};function m(e){const t=document.querySelector(":root");Object.keys(e).forEach(o=>{t.style.setProperty(o,e[o])})}const p=e=>/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e),S=(e,t)=>e.match(new RegExp(`.{${t}}`,"g")),h=e=>parseInt(e.repeat(2/e.length),16),b=(e,t)=>typeof e<"u"?e/255:typeof t!="number"||t<0||t>1?1:t;function l(e,t=1){if(!p(e))return null;const r=Math.floor((e.length-1)/3),o=S(e.slice(1),r),[a,c,n,d]=o.map(h);return`rgba(${a}, ${c}, ${n}, ${b(d,t)})`}function q(e,t){e.forEach(r=>{const o=`--primary-${r.getAttribute("data-id")}`,a=`--primary-${r.getAttribute("data-id1")}`,c=`--primary-${r.getAttribute("data-id2")}`;m({[o]:l(t),[a]:l(t,.9),[c]:l(t)})})}function f(e,t){e.forEach(r=>{const o=`--primary-${r.getAttribute("data-id")}`,a=`--primary-${r.getAttribute("data-id1")}`,c=`--primary-${r.getAttribute("data-id2")}`;m({[o]:l(t),[a]:l(t),[c]:l(t)})})}function L(){var e,t,r;document.querySelector("#myonoffswitch1").checked=!0,document.querySelector("#myonoffswitch54").checked=!0,document.querySelector(".error-page1").classList.add("ltr"),document.querySelector("html[lang=en]").setAttribute("dir","ltr"),(e=document.getElementById("bootstrapLink"))==null||e.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"),document.querySelector(".error-page1").classList.remove("rtl"),(t=document.querySelector(".error-page1"))==null||t.classList.add("light-theme"),(r=document.querySelector(".error-page1"))==null||r.classList.remove("dark-theme"),localStorage.clear(),s()}function s(){let e=getComputedStyle(document.documentElement).getPropertyValue("--primary-bg-color").trim(),t=localStorage.getItem("nowaprimaryColor")||localStorage.getItem("nowadarkPrimaryColor")||localStorage.getItem("nowatransparentPrimaryColor")||localStorage.getItem("nowatransparent-bgImgPrimaryColor")||localStorage.getItem("nowatransparentBgImgPrimary")||e,r=l(t||"#38cab3",.1);document.querySelector("html").style.setProperty("--primary01",r);let o=l(t||"#38cab3",.2);document.querySelector("html").style.setProperty("--primary02",o);let a=l(t||"#38cab3",.3);document.querySelector("html").style.setProperty("--primary03",a);let c=l(t||"#38cab3",.6);document.querySelector("html").style.setProperty("--primary06",c);let n=l(t||"#38cab3",.9);document.querySelector("html").style.setProperty("--primary09",n)}s();function v(){var r;let e=(r=document.querySelector("html"))==null?void 0:r.style,t=document.querySelector("body");localStorage.getItem("nowaprimaryColor")!==null&&(t==null||t.classList.add("light-theme"),document.getElementById("myonoffswitch6").checked=!0,t==null||t.classList.remove("dark-theme"),e==null||e.setProperty("--primary-bg-color",localStorage.getItem("nowaprimaryColor")),e==null||e.setProperty("--primary-bg-hover",localStorage.getItem("nowaprimaryHoverColor")),e==null||e.setProperty("--primary-bg-border",localStorage.getItem("nowaprimaryBorderColor"))),localStorage.getItem("nowadarkPrimaryColor")!==null&&(t==null||t.classList.add("dark-theme"),document.getElementById("myonoffswitch2").checked=!0,t==null||t.classList.remove("light-theme"),e==null||e.setProperty("--primary-bg-color",localStorage.getItem("nowadarkPrimaryColor")),e==null||e.setProperty("--primary-bg-hover",localStorage.getItem("nowadarkPrimaryColor")),e==null||e.setProperty("--primary-bg-border",localStorage.getItem("nowadarkPrimaryColor"))),localStorage.nowartl&&i(),localStorage.nowaltr&&u(),localStorage.nowalight&&y(),localStorage.nowadark&&g()}const w=()=>{document.querySelector(".demo_changer").classList.toggle("active"),document.querySelector(".demo_changer").style.right="0px"},k=()=>{document.querySelector(".demo_changer").classList.remove("active"),document.querySelector(".demo_changer").style.right="-270px"};export{i as L,u as R,w as S,y as a,q as b,f as c,g as d,k as e,v as l,s as n,L as r};
