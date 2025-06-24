import{S as b,i as v,a as P}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const c=document.querySelector(".gallery"),m=document.querySelector(".loader"),d=document.querySelector("#load-more");let y;function M(){y=c.children[c.children.length-1].getBoundingClientRect().height,window.scrollBy({top:(y+24)*3,left:0,behavior:"smooth"})}const q=new b(".gallery a",{spinner:!0,captions:!0,captionDelay:500,captionsData:"alt",overlay:!0,overlayOpacity:.9});function I(o){const t=o.map(r=>$(r)).join("");c.insertAdjacentHTML("beforeend",t),q.refresh()}function S(){c.innerHTML=""}function p(){m.style.display="block"}function h(){m.style.display="none"}function x(){d.style.display="block"}function O(){d.style.display="none"}function i(o){v.warning({message:o,position:"topCenter"})}function $(o){const{largeImageURL:t,webformatURL:r,tags:n,likes:e,views:a,comments:s,downloads:L}=o;return`
        <li class="gallery-item">
          <a class="gallery-item-link" href="${t}">
            <img
              class="gallery-item-image"
              src="${r}"
              alt="${n}"
              height="152"
            />
          </a>
          <ul class="gallery-item-specs">
            <li>Likes <span data-likes>${e}</span></li>
            <li>Views <span data-views>${a}</span></li>
            <li>Comments <span data-comments>${s}</span></li>
            <li>Downloads <span data-downloads>${L}</span></li>
          </ul>
        </li>
  
  `}const B="50783021-cc03e5dbcf508bf27b2e23464",E="https://pixabay.com/api/",g=15;async function k(o,t=1){try{const{data:r}=await P.get(E,{params:{key:B,q:o.trim(),per_page:g,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0}});return r}catch(r){i(r)}}const f=document.querySelector(".form");let u=1,l;f.addEventListener("submit",async o=>{if(o.preventDefault(),l=f.elements["search-text"].value.trim(),!l){i("Please enter some text");return}S(),u=1;try{p(),await w(l,u)}finally{h()}});d.addEventListener("click",async o=>{u++;try{p(),await w(l,u)}finally{h()}});async function w(o,t){try{const r=await k(o,t);if(r.hits.length===0&&t===1){i("Sorry, there are no images matching your search query. Please try again");return}I(r.hits),t>1&&M();const n=Math.ceil(r.totalHits/g);t<n?x():(O(),t>1&&i("We're sorry, but you've reached the end of search results."))}catch(r){i("fetchImages() "+r.message)}}
//# sourceMappingURL=index.js.map