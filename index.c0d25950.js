var e=document.querySelectorAll(".population"),r=document.querySelector(".total-population"),t=document.querySelector(".average-population"),n=0,o=!0,l=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done);o=!0){var c=u.value.innerHTML.split(",").join("");n+=Number(c)}}catch(e){l=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(l)throw a}}var y=n/e.length;t.innerHTML=y,r.innerHTML=n;
//# sourceMappingURL=index.c0d25950.js.map
