import"../src/index.js";import"../src/index.scss";document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("form");e.addEventListener("submit",(async function(t){t.preventDefault();let{error:r,value:n}=function(e){let t=0,r=document.querySelectorAll(".input"),n=document.querySelectorAll(".transform_input");return n[0].classList.remove("_error"),""===r[0].value&&(n[0].classList.add("_error"),t++),{error:t,value:r[0].value}}();0===r?(await fetch("https://63718797025414c637f9426e.mockapi.io/numbers",{method:"POST",body:JSON.stringify({value:n}),headers:{"Content-type":"application/json; charset=UTF-8"}})).ok?(e.reset(),alert("Данные успешно отправлены :)")):alert("Ошибка при отправке данных"):alert("Заполните обязательное поле")}))}));