(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/main.ef122f8f.jpg"},function(e,a,t){e.exports=t.p+"static/media/bergen-map.145d92b1.png"},function(e,a,t){e.exports=t.p+"static/media/bergen-photo.8a4a6d72.jpg"},function(e,a,t){e.exports=t.p+"static/media/\xf8vre-eide-farm.80657a76.jpg"},,function(e,a,t){e.exports=t.p+"static/media/pin.c7fd5c48.png"},,function(e,a,t){e.exports=t(25)},,,,,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),s=(t(22),t(4)),o=function(e){var a=e.small,t=e.light,n="logo ".concat(t?"light":"");return a?l.a.createElement("span",{className:"logo-wrapper"},l.a.createElement("span",{className:n},"B",l.a.createElement("span",{className:"logo-heart"},"\u2665"),"K")):l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("span",{className:n},"Becca u Keith"))};o.defaultProps={small:!1,light:!1};var m=o,i="MTIwODIwMjM=";var u=function(e){var a,t=e.event;return a=t,localStorage.getItem("bk_auth")===i&&a(!0),l.a.createElement("div",{className:"app personal-code-wrapper"},l.a.createElement("div",{className:"personal-code-bg"}),l.a.createElement("div",{className:"personal-code text-center",id:"code-wrapper"},l.a.createElement(m,null),l.a.createElement("sub",null,"Please enter the code found on the invite to be able to access the site."),l.a.createElement("input",{type:"text",id:"invite-code",className:"input",placeholder:"Invite code",required:!0,onChange:function(e){return function(e,a){var t=e.target.value;btoa(t)===i&&(localStorage.setItem("bk_auth",btoa(t)),a(!0))}(e,t)}})))},d=function(e){var a=e.id,t=e.children,n=e.className,r="scroll-to ".concat(n);return l.a.createElement("span",{onClick:function(){var e=document.getElementById(a);e&&e.scrollIntoView({behavior:"smooth",inline:"start"})},className:r},t)};var p=function(){return l.a.createElement("section",{className:"navigation"},l.a.createElement("header",null,l.a.createElement(d,{id:"top"},l.a.createElement(m,{light:!0})),l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",{className:"primary-nav"}),l.a.createElement("ul",{className:"member-actions"},l.a.createElement("li",null,l.a.createElement(d,{id:"details",className:"login btn-white btn-small"},"On the Day")),l.a.createElement("li",null,l.a.createElement(d,{id:"bergen"},"While in Bergen"))))))},E=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"col-sm-12 text-center content"},l.a.createElement("span",{className:"to-top-wrapper"},l.a.createElement(d,{id:"top",className:"to-top"},"\u2303")),l.a.createElement("h4",{className:"footer-text"},l.a.createElement(m,null)),l.a.createElement("p",{className:"footer-text"},"Designed and developed by Keith with lots of ",l.a.createElement("span",{className:"footer-text-heart"},"\u2665")," for Becca")))},g=t(7),v=t.n(g),h=t(8),f=t.n(h),b=t(9),N=t.n(b),w=t(10),x=t.n(w),y=t(13),k=t(12),B=t.n(k),j=function(e){e.text;return l.a.createElement("div",{id:"map-pin"},l.a.createElement("img",{src:B.a,className:"pin-icon",alt:"Location Pin at \xd8vre-eide Farm"}))},I=function(e){var a=e.location,t=e.zoom;return l.a.createElement("div",{id:"map-canvas",className:"google-map"},l.a.createElement(y.a,{bootstrapURLKeys:{key:"AIzaSyAAgKOsf0JvC9ka4Of1ZqjjJH9K5bvuq7w"},defaultCenter:a,defaultZoom:t},l.a.createElement(j,{lat:a.lat,lng:a.lng,text:a.address})))},C=function(){return l.a.createElement("section",{className:"hero"},l.a.createElement("div",{className:"invite-text-wrapper"},l.a.createElement("div",{className:"invite-text text-center"},l.a.createElement("h1",null,"We are getting married!"),l.a.createElement("sub",null,"The date is 12",l.a.createElement("sup",null,"th")," August 2023 and we would like you to be a part of it."))),l.a.createElement(K,{src:v.a,alt:"Becca & Keith pre-wedding"}))},O=function(){var e="https://www.google.com/maps/d/u/0/viewer?mid=18NTAkrwTbEz_p7srkZcb89riPNgxuLY&ll=60.389353592730814%2C5.325981447726962&z=13";return l.a.createElement("section",{id:"bergen",className:"section-padding dark"},l.a.createElement("div",{className:"about-bergen text-center"},l.a.createElement("h3",null,"Bergen, The City of Seven Mountains"),l.a.createElement(K,{src:N.a,className:"bergen-photo",alt:"Bergen"}),l.a.createElement("p",null,"We have put together an ",l.a.createElement("a",{href:e},"interactive map")," to the city's main attractions, daily needs, emergency services and other amenities."),l.a.createElement("p",null,"Click on the tabs to view place marks."),l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(K,{src:f.a,className:"bergen-map",alt:"Map of the city of Bergen with place marks"}))),l.a.createElement("div",{className:"about-norway text-center"},l.a.createElement("h4",null,"Norway"),l.a.createElement("p",null,"Text goes here")))},T=function(){var e={address:"\xd8vre-eide 36, 5105 Eidsv\xe5g i \xc5sane, Norge",lat:60.434922,lng:5.3266841},a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],o=function(){return r?l.a.createElement(I,{location:e,zoom:15}):l.a.createElement("button",{id:"show-map",className:"btn-show-map btn-white btn-small extra-margin-bottom",onClick:function(){return c(!0)}},"View Map")};return l.a.createElement("section",{id:"details",className:"section-padding"},l.a.createElement("div",{className:"about-\xf8vre-edie text-center"},l.a.createElement("h3",null,"\xd8vre-eide Farm"),l.a.createElement(K,{src:x.a,alt:"Scenic view of the wedding venue"})),l.a.createElement("div",{className:"address text-center"},l.a.createElement("h4",null,"Address"),l.a.createElement("p",null,e.address),l.a.createElement(o,null),l.a.createElement("hr",null)),l.a.createElement("div",{className:"address text-center"},l.a.createElement("h4",null,"Transport"),l.a.createElement("p",null,l.a.createElement("b",null,"Bus-stop"),": Eidsv\xe5g E39"),l.a.createElement("p",null,"Transport will be available from the city-centre on the date.")))},K=function(e){var a=e.src,t=e.className,n=e.alt;return l.a.createElement("img",{src:a,className:t,alt:n,draggable:"false"})};var S=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1];return t?l.a.createElement("div",{className:"app",id:"top"},l.a.createElement(p,null),l.a.createElement("main",null,l.a.createElement(C,null),l.a.createElement(T,null),l.a.createElement(O,null)),l.a.createElement(E,null)):l.a.createElement(u,{event:r})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(S,null))}],[[14,1,2]]]);
//# sourceMappingURL=main.488bd093.chunk.js.map