function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n,r,a,o,c,l,i,s,d,u,f,m,y=document.querySelector("thead").querySelector("tr"),p=document.querySelector("tbody"),b=((n=document.createElement("form")).className="new-employee-form",i=h("name"),s=h("position"),d=h("age","number"),u=h("salary","number"),r="office",a=document.createElement("label"),(o=document.createElement("select")).name=r,o.dataset.qa="office",c=S(r),a.insertAdjacentText("afterbegin",c),["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"].map(function(e){var t=document.createElement("option");return t.value=e,t.insertAdjacentText("beforeend",e),t}).forEach(function(e){o.insertAdjacentElement("beforeend",e)}),a.insertAdjacentElement("beforeend",o),f=a,(l=document.createElement("button")).type="submit",l.insertAdjacentText("beforeend","Save to table"),m=l,n.insertAdjacentElement("beforeend",i),n.insertAdjacentElement("beforeend",s),n.insertAdjacentElement("beforeend",f),n.insertAdjacentElement("beforeend",d),n.insertAdjacentElement("beforeend",u),n.insertAdjacentElement("beforeend",m),n);function v(e){var t=e.target,n=A(t);if(x(n),"error"===n.type||"warning"===n.type){t.focus();return}E(t)}function g(e){if("Enter"===e.key){var t=e.target,n=A(t);x(n),"error"!==n.type&&"warning"!==n.type&&E(t)}}function E(e){var t=e.value,n=e.closest("td");n.nextElementSibling||(t="$".concat(parseFloat(t).toLocaleString("en-EN"))),n.innerText=t,e.remove()}function A(e){var n=t(e.closest("tr").querySelectorAll("td")).findIndex(function(t){return t.firstChild===e}),r=e.value;return 0===r.length?{type:"warning",text:"Cell can not be empty"}:0===n&&r.length<4?{type:"warning",text:"Name can not be less then 4 letters"}:3===n&&18>+r?{type:"warning",text:"Age can not be less then 18"}:3===n&&+r>90?{type:"warning",text:"Age can not be bigger then 90"}:{type:"success",text:"User updated successfully"}}function x(e){var t=document.createElement("div"),n=document.querySelector(".notification");n&&n.remove();var r=document.createElement("h1"),a=document.createElement("p");switch(t.className||(t.className="notification",t.dataset.qa="notification"),e.type){case"error":case"warning":r.innerText="ERROR",t.classList.add("error");break;default:r.innerText="SUCCESS",t.classList.add("success")}a.innerText=e.text,t.insertAdjacentElement("afterbegin",r),t.insertAdjacentElement("beforeend",a),document.body.append(t),window.setTimeout(function(){t.remove()},5e3)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"test",n=document.createElement("label"),r=document.createElement("input"),a=S(e);return r.name=e,r.type=t,r.dataset.qa=e,r.required=!1,n.insertAdjacentText("afterbegin","".concat(a)),n.insertAdjacentElement("beforeend",r),n}function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}document.body.append(b),y.addEventListener("click",function(e){var n=t(y.querySelectorAll("th")).indexOf(e.target);if(-1!==n){var r=""===e.target.dataset.isDesc,a=t(p.querySelectorAll("tr"));a.sort(function(e,a){var o,c=t(e.querySelectorAll("td"))[n].textContent,l=t(a.querySelectorAll("td"))[n].textContent;return(c.startsWith("$")&&(c=parseFloat(c.slice(1)),l=parseFloat(l.slice(1))),parseFloat(c)&&(c=parseFloat(c),l=parseFloat(l)),(void 0===c?"undefined":(o=c)&&"undefined"!=typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)=="string")?r?l.localeCompare(c):c.localeCompare(l):r?l-c:c-l}),a.forEach(function(e){p.append(e)}),e.target.toggleAttribute("data-is-desc")}}),p.addEventListener("click",function(e){t(p.querySelectorAll("tr")).forEach(function(e){e.className=""}),e.target.closest("tr").className="active"}),p.addEventListener("dblclick",function(e){var t=e.target.closest("td");if(t){var n=t.innerText,r=document.createElement("input");r.className="cell-input",r.autofocus=!0,r.dataset.oldValue=n,r.value=n,t.nextElementSibling||(r.type="number",r.value=parseFloat(n.slice(1).replace(/,/g,""))),t.innerText="",t.insertAdjacentElement("beforeend",r),r.addEventListener("blur",v),r.addEventListener("keypress",g)}}),b.addEventListener("submit",function(e){e.preventDefault();var t=document.createElement("tr"),n=(i=b.name.value,s=+b.age.value,d=b.position.value,u=b.office.value,f=b.salary.value,""===d||""===u||""===f?{type:"error",text:"All fields must be filled in"}:i.length<4?{type:"error",text:"Name can not be less then 4 letters"}:s<18?{type:"error",text:"Age can not be less then 18"}:s>90?{type:"error",text:"Age can not be bigger then 90"}:{type:"success",text:"User added successfully"});if(x(n),"error"!==n.type){var r=+e.target.salary.value,a=[e.target.name.value,e.target.position.value,e.target.office.value,e.target.age.value,"$".concat(r.toLocaleString("en-EN"))],o=!0,c=!1,l=void 0;try{for(var i,s,d,u,f,m,y=a[Symbol.iterator]();!(o=(m=y.next()).done);o=!0){var v=m.value,g=document.createElement("td");g.insertAdjacentText("beforeend",v),t.insertAdjacentElement("beforeend",g)}}catch(e){c=!0,l=e}finally{try{o||null==y.return||y.return()}finally{if(c)throw l}}p.insertAdjacentElement("beforeend",t),b.reset()}});
//# sourceMappingURL=index.ce35f024.js.map