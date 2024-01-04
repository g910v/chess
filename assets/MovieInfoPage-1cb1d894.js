import{s as r,g as n,r as a,j as e,L as oe,f as ae,v as E,w as le,x as me,o as ce,y as K,u as de,a as xe,k as he,z as pe,A as ue,D as ge,B as fe,E as ve,G as W,H as V,J as je,K as we,l as ye}from"./index-a1cf3b23.js";import{r as $e}from"./index-85ce0c01.js";import{B as Se}from"./BackButton-5a0d0671.js";const ke=r.img`
  width: 9rem;
  height: 14rem;
  border-radius: 5px;
`,be=r(oe)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  color: ${n.colors.text};
`,Ie=a.memo(({actor:t})=>e.jsxs(be,{to:`/person/${t.kinopoiskId}`,children:[e.jsx(ke,{src:t.posterUrl,alt:t.nameEn??""}),e.jsx("div",{children:t.nameRu})]})),ze=r.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;

  transition: all 0.15s ease-in;
  opacity: ${t=>t.state==="exiting"||t.state==="exited"?"0":"1"};
`,Ce=r.div`
  position: fixed;
  top: ${t=>t.maxiSize?"0px":"25%"};
  left: ${t=>t.maxiSize?"0px":"25%"};
  width: ${t=>t.maxiSize?"calc(100% - 2rem)":"50%"};
  height: ${t=>t.maxiSize?"calc(100% - 2rem)":"50%"};
  z-index: 12;
  background: ${n.colors.bgLighter};
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media ${n.media.m} {
    top: ${t=>t.maxiSize?"0px":"30%"};
    left: ${t=>t.maxiSize?"0px":"5%"};
    width: ${t=>t.maxiSize?"calc(100% - 2rem)":"calc(90% - 2rem)"};
    height: ${t=>t.maxiSize?"calc(100% - 2rem)":"calc(40% - 2rem)"};
  }

  transition: all 0.15s ease-in;
  opacity: ${t=>t.state==="exiting"||t.state==="exited"?"0":"1"};
`,Be=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -0.5rem;
  margin-top: -0.5rem;
`,X=r.div`
  border-radius: 50%;
  padding: 0.5rem;
  background: ${n.colors.bgLighter};
  display: flex;
  place-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${n.colors.mix};
  }
`,Ee=r(X)`
  top: 0.1rem;
  right: 0.1rem;
`,Me=r(X)`
  top: 0.1rem;
  right: 0.35rem;
`,Pe=({children:t,visible:k,setVisible:b})=>{const[I,i]=a.useState(!1);return ae.createPortal(e.jsx(E,{in:k,timeout:150,mountOnEnter:!0,unmountOnExit:!0,children:z=>e.jsxs(e.Fragment,{children:[e.jsx(ze,{onClick:()=>b(!1),state:z}),e.jsxs(Ce,{maxiSize:I,state:z,children:[e.jsxs(Be,{children:[e.jsx(Me,{onClick:()=>i(C=>!C),children:e.jsx(le,{})}),e.jsx(Ee,{onClick:()=>b(!1),children:e.jsx(me,{})})]}),t]})]})}),document.body)},De=r.div`
  height: 100vh;
  width: 100%;
  margin-top: -5rem;
  background-image: url(${t=>t.url});
  background-position: center;
  background-size: cover;
`,Le=r.div`
  width: 100%;
  height: 100vh;
  background: ${n.colors.backimgGradient};
  z-index: -1;
`,Fe=r.div`
  width: 100%;
  height: 100vh;
  background: ${n.colors.headerGradient};
  display: flex;
  justify-content: center;
  z-index: -1;
`,Te=r.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ue=r.div`
  padding: 8rem 0 4rem 0;
  height: fit-content;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  @media ${n.media.l} {
    width: 95%;
  }
  @media ${n.media.m} {
    justify-content: center;
  }
`,Ne=r.div`
  width: fit-content;
  margin-right: 1rem;
  margin-bottom: 1rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Re=r.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  column-gap: 0.5rem;
  @media ${n.media.m} {
    justify-content: center;
  }
`,Ge=r.img`
  width: ${t=>t.poster?"45vh":"0px"};
  @media ${n.media.l} {
    width: ${t=>t.poster?"37vh":"0px"};
  }
  @media ${n.media.m} {
    width: ${t=>t.poster?"50%":"0px"};
    margin-right: 0;
  }
  @media ${n.media.s} {
    width: ${t=>t.poster?"70%":"0px"};
    margin-right: 0;
  }
`,Oe=r.div`
  width: ${t=>t.poster?"calc(100% - 45vh - 1rem)":"100%"};
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  height: max-content;
  @media ${n.media.l} {
    width: ${t=>t.poster?"calc(100% - 37vh - 1rem)":"100%"};
  }
  @media ${n.media.m} {
    width: 100%;
    align-items: center;
  }
`,H=r.div`
  width: 100%;
  margin-top: 2.5rem;
`,J=r.div`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.2rem;
  @media ${n.media.l} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
  @media ${n.media.m} {
    text-align: center;
  }
`,d=r.div`
  font-weight: 400;
  display: flex;
  align-items: center;
  @media ${n.media.m} {
    text-align: center;
  }
`,Ye=r.div`
  display: flex;
  color: ${n.colors.text};
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: ${n.colors.pink};
    ${K}
  }
`,Ae=r.div`
  transform: translateY(${t=>t.state==="exiting"||t.state==="exited"?"-15px":"0px"});
  opacity: ${t=>t.state==="exiting"||t.state==="exited"?"0":"1"};
  transform-origin: top;
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  width: 100%;
  @media ${n.media.m} {
    align-items: center;
  }
`,q=r.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`,We=r.div`
  display: flex;
  flex-direction: column;
  @media ${n.media.m} {
    align-items: center;
  }
`,Ve=r.div`
  transform: translateY(${t=>t.state==="exiting"||t.state==="exited"?"-15px":"0px"});
  opacity: ${t=>t.state==="exiting"||t.state==="exited"?"0":"1"};
  transform-origin: top;
  transition: all 0.25s ease-in;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  row-gap: 1rem;
  @media ${n.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
`,He=r(q)`
  cursor: pointer;
  width: fit-content;
  display: flex;
  margin-top: 0;
  &:hover {
    color: ${n.colors.pink};
    ${K}
  }
`,Je=()=>{var F,T,U,N,R,G,O,Y,A;const{filmInfoStore:t,filmsStore:k,uiStore:b}=de(),I=xe(),[i,z]=a.useState(void 0),[C,Q]=a.useState(!1),[w,Z]=a.useState([]),[y,_]=a.useState([]),[$,ee]=a.useState([]),[S,te]=a.useState([]),[M,ie]=a.useState(""),[ne,P]=a.useState(!1),[B,D]=a.useState(!0),[L,re]=a.useState(!1);a.useEffect(()=>{I.movieId&&t.getMovie(I.movieId)},[t,I]),a.useEffect(()=>{var s,l,o,m,x,h,u,p,g,f,v,j;z(t.movieInfo),Z(((l=(s=t.movieInfo)==null?void 0:s.persons)==null?void 0:l.filter(c=>c.enProfession==="actor").map(c=>({kinopoiskId:c.id??void 0,webUrl:"",nameRu:c.name,nameEn:c.enName,posterUrl:c.photo??"",sex:"Информация отсутсвует"})))??[]),_((m=(o=t.movieInfo)==null?void 0:o.persons)==null?void 0:m.filter(c=>c.enProfession==="director")),ee((h=(x=t.movieInfo)==null?void 0:x.persons)==null?void 0:h.filter(c=>c.enProfession==="producer")),te((p=(u=t.movieInfo)==null?void 0:u.persons)==null?void 0:p.filter(c=>c.enProfession==="writer")),ie(((j=(v=(f=(g=t.movieInfo)==null?void 0:g.videos)==null?void 0:f.trailers)==null?void 0:v.find(c=>c.site==="youtube"))==null?void 0:j.url)??"")},[t.movieInfo]),a.useEffect(()=>{var s;D(k.isSavedFilm(((s=t.movieInfo)==null?void 0:s.id)??0))},[(F=t.movieInfo)==null?void 0:F.id,k]);const se=()=>{var s,l,o,m,x,h,u;i&&(k.changeSavedFilms({name:i.name??"",enName:i.alternativeName??"",rating:((s=i.rating)==null?void 0:s.kp)??void 0,duration:i.movieLength??void 0,premiereRu:((l=i.premiere)==null?void 0:l.russia)??"",countries:((o=i.countries)==null?void 0:o.map(p=>p.name??"").slice(0,3))??[],genres:((m=i.genres)==null?void 0:m.map(p=>p.name??"").slice(0,3))??[],poster:((x=i.poster)==null?void 0:x.url)??((h=i.poster)==null?void 0:h.previewUrl)??"",year:i.year??0,kId:i.id,saved:!B,posterPreview:((u=i.poster)==null?void 0:u.previewUrl)??""},!B),D(p=>!p))};return a.useEffect(()=>{b.updateDocumentTitle("Фильмы и сериалы")},[b]),e.jsxs(e.Fragment,{children:[e.jsx(Pe,{visible:ne,setVisible:P,children:e.jsx("iframe",{width:"100%",height:"100%",src:M,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})}),t.movieInfoLoading&&e.jsx(Te,{children:e.jsx(he,{size:50,strokeWidth:2})}),!t.movieInfoLoading&&i&&e.jsx(De,{url:((T=i.backdrop)==null?void 0:T.url)??"",children:e.jsx(Le,{children:e.jsx(Fe,{children:e.jsxs(Ue,{children:[e.jsxs(Ne,{children:[e.jsx(Ge,{poster:!!((U=i.poster)!=null&&U.url),src:((N=i.poster)==null?void 0:N.url)??"",alt:i.enName??""}),e.jsxs(Re,{children:[e.jsx(Se,{}),e.jsx(pe,{onClick:se,icon:B?e.jsx(ue,{style:{fontSize:"1.7rem",color:n.colors.yellow}}):e.jsx(ge,{style:{fontSize:"1.7rem",color:n.colors.yellow}})}),M&&e.jsx(fe,{label:"Посмотреть трейлер",onClick:()=>P(!0)})]})]}),e.jsxs(Oe,{poster:!!((R=i.poster)!=null&&R.url),children:[e.jsxs(We,{children:[e.jsx(J,{children:i.name}),e.jsxs(J,{children:["(",i.alternativeName&&e.jsxs(e.Fragment,{children:[i.alternativeName,", "]}),i.type==="movie"?"фильм":"сериал",")"]})]}),e.jsx(d,{children:!!((G=i.rating)!=null&&G.kp)&&e.jsx(ve,{rating:i.rating.kp})}),i.year&&i.movieLength&&e.jsxs(d,{children:[i.year&&e.jsxs(e.Fragment,{children:[i.year," г., "]}),i.movieLength&&e.jsxs(e.Fragment,{children:[i.movieLength," мин."]})]}),e.jsxs(d,{children:["Жанр: ",(O=i.genres)==null?void 0:O.map((s,l,o)=>{const m=l===o.length-1?"":", ";return s.name+m})]}),e.jsxs(d,{children:["Страна: ",(Y=i.countries)==null?void 0:Y.map((s,l,o)=>{const m=l===o.length-1?"":", ";return s.name+m})]}),e.jsx(d,{children:i.description}),e.jsxs(Ye,{onClick:()=>Q(s=>!s),children:["Детали о ",i.type==="movie"?"фильме":"сериале",C?e.jsx(W,{style:{fontSize:"1.5rem"}}):e.jsx(V,{style:{fontSize:"1.5rem",marginTop:"0.1rem"}})]}),e.jsx(E,{in:C,timeout:150,mountOnEnter:!0,unmountOnExit:!0,children:s=>{var l,o,m,x,h,u,p;return e.jsxs(Ae,{state:s,children:[!!(y!=null&&y.length)&&e.jsxs(d,{children:["Режиссер: ",y==null?void 0:y.map((g,f,v)=>{const j=f===v.length-1?"":", ";return g.name+j})]}),!!(S!=null&&S.length)&&e.jsxs(d,{children:["Сценарист: ",S==null?void 0:S.map((g,f,v)=>{const j=f===v.length-1?"":", ";return g.name+j})]}),!!($!=null&&$.length)&&e.jsxs(d,{children:["Продюсер: ",$==null?void 0:$.map((g,f,v)=>{const j=f===v.length-1?"":", ";return g.name+j})]}),e.jsxs(d,{children:["Бюджет: ",(l=i.budget)!=null&&l.value?`${i.budget.value} ${(o=i.budget)==null?void 0:o.currency}`:"Информация отсутсвует"]}),e.jsxs(d,{children:["Сборы: ",(x=(m=i.fees)==null?void 0:m.world)!=null&&x.value?`${i.fees.world.value} ${(h=i.fees.world)==null?void 0:h.currency}`:"Информация отсутсвует"]}),((u=i.premiere)==null?void 0:u.world)&&e.jsxs(d,{children:["Премьера в мире: ",je(new Date(((p=i.premiere)==null?void 0:p.world)??""),"dd MMMM Y",{locale:$e})]}),i.slogan&&e.jsxs(d,{children:["«",i.slogan,"»"]})]})}})]}),e.jsxs(H,{children:[e.jsx(q,{children:"Актерский состав"}),w!=null&&w.length?e.jsx(we,{children:w==null?void 0:w.map(s=>e.jsx(Ie,{actor:s},s.kinopoiskId))}):e.jsx("div",{children:"Информация отсутвует"})]}),!!((A=i.similarMovies)!=null&&A.length)&&e.jsxs(H,{children:[e.jsxs(He,{onClick:()=>re(s=>!s),children:["Похожие фильмы",L?e.jsx(W,{style:{fontSize:"2.5rem"}}):e.jsx(V,{style:{fontSize:"2.5rem",marginBottom:"-0.5rem"}})]}),e.jsx(E,{in:L,timeout:250,mountOnEnter:!0,unmountOnExit:!0,children:s=>{var l;return e.jsx(Ve,{state:s,children:(l=i.similarMovies)==null?void 0:l.map(o=>{var m,x,h;return e.jsx(ye,{film:{name:o.name,enName:o.alternativeName,rating:((m=o.rating)==null?void 0:m.kp)??void 0,poster:((x=o.poster)==null?void 0:x.url)??"",posterPreview:((h=o.poster)==null?void 0:h.previewUrl)??"",kId:o.id??-1,year:o.year,countries:[],genres:[],saved:null}},o.id)})})}})]})]})})})})]})},Qe=ce(Je);export{Qe as default};
