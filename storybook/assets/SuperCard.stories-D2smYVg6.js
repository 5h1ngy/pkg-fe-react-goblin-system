import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{S as Y,F as X,a as Z}from"./index-CUk-I3yD.js";import{I as l}from"./icon-C9K7CyD2.js";import"./index-2yJIXLcc.js";import"./flex-kF3Sjibk.js";import"./create-recipe-context-DAYCaBKX.js";import"./text-CfAAMfeU.js";import"./box-Co8b1CQB.js";import"./config-BSDdsS5G.js";import"./icon-button-rke3f8fi.js";import"./image-OLBd0WsG.js";import"./card-DmY4cerO.js";import"./create-slot-recipe-context-c444gZ9K.js";import"./iconBase-F1NH6Jz0.js";const ho={title:"Components/SuperCard",component:Y,tags:["autodocs"],argTypes:{orientation:{control:{type:"radio",options:["vertical","horizontal"]}},colorPalette:{control:{type:"select",options:["gray","blue","green","red","yellow"]}},compact:{control:"boolean"},onCardClick:{action:"clicked"}}},i={args:{title:"Titolo di Default",subTitle:"Sottotitolo di esempio",description:"Questo è un esempio di descrizione piuttosto lunga, per mostrare come si comporta il componente con testo più articolato.",thumbnail:"https://via.placeholder.com/400x300",topics:["React","Storybook","UI"],links:[{label:"Link",icon:o.jsx(l,{as:X}),onClick:()=>{}}]}},e={args:{compact:!0,title:"Titolo in verticale",onCardClick:()=>alert("Hai cliccato sulla card compatta!")}},t={args:{title:"SuperCard orizzontale",subTitle:"Layout in orizzontale",description:"Guarda come si affiancano thumbnail, titoli e contenuto su un layout di tipo orizzontale.",thumbnail:"https://via.placeholder.com/300x300"}},a={args:{title:"Senza immagine",subTitle:"SuperCard senza thumbnail",description:"Questa card mostra come il componente si comporta quando non forniamo un'immagine di anteprima."}},r={args:{title:"Thumbnail in errore",thumbnail:"https://dominioCheNonEsiste1234.xxx/immagineInesistente.jpg",description:"Verrà mostrata l'icona di fallback al posto dell'immagine."}},n={args:{title:"Card con vari topic e link",subTitle:"Approfondisci l'argomento",description:"Esempio di come la card possa contenere molti topic e diversi link con icone differenti.",thumbnail:"https://via.placeholder.com/400",topics:["JavaScript","TypeScript","ChakraUI","Storybook","React"],links:[{label:"Preferito",icon:o.jsx(l,{as:Z}),onClick:()=>alert("Hai cliccato sul cuore!")},{label:"Visita il link",icon:o.jsx(l,{as:X}),onClick:()=>alert("Hai cliccato sul link!")}]}},c={args:{title:"Card con contenuto extra",subTitle:"Utilizzo di children",description:"In questa card utilizziamo children personalizzati nel body.",children:o.jsxs("div",{children:[o.jsxs("p",{children:["Questa porzione di contenuto è passata come ",o.jsx("code",{children:"children"})," a SuperCard."]}),o.jsx("button",{onClick:()=>alert("Cliccato!"),children:"Bottone di prova"})]})}},s={args:{title:"Card cliccabile",subTitle:"Gestione onCardClick",description:"Quando clicchi sul contenuto principale, viene mostrato un alert.",onCardClick:()=>alert("Hai cliccato sul corpo della card!"),thumbnail:"https://via.placeholder.com/400x200"}};var p,d,m,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Titolo di Default",
    subTitle: "Sottotitolo di esempio",
    description: "Questo è un esempio di descrizione piuttosto lunga, per mostrare come si comporta il componente con testo più articolato.",
    thumbnail: "https://via.placeholder.com/400x300",
    topics: ["React", "Storybook", "UI"],
    links: [{
      label: "Link",
      icon: <Icon as={FaLink} />,
      onClick: () => {}
    }]
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Storia base: le impostazioni di default.",...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var b,C,g,k,z;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    compact: true,
    title: "Titolo in verticale",
    onCardClick: () => alert("Hai cliccato sulla card compatta!")
  }
}`,...(g=(C=e.parameters)==null?void 0:C.docs)==null?void 0:g.source},description:{story:"Versione compatta (compact = true).",...(z=(k=e.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var S,T,f,v,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "SuperCard orizzontale",
    subTitle: "Layout in orizzontale",
    description: "Guarda come si affiancano thumbnail, titoli e contenuto su un layout di tipo orizzontale.",
    thumbnail: "https://via.placeholder.com/300x300"
  }
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source},description:{story:"Orientamento orizzontale.",...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var y,I,H,j,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: "Senza immagine",
    subTitle: "SuperCard senza thumbnail",
    description: "Questa card mostra come il componente si comporta quando non forniamo un'immagine di anteprima."
  }
}`,...(H=(I=a.parameters)==null?void 0:I.docs)==null?void 0:H.source},description:{story:`Senza thumbnail.
Non passando alcun 'thumbnail', la card non mostrerà alcuna immagine iniziale.`,...(E=(j=a.parameters)==null?void 0:j.docs)==null?void 0:E.description}}};var L,Q,U,F,R;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: "Thumbnail in errore",
    thumbnail: "https://dominioCheNonEsiste1234.xxx/immagineInesistente.jpg",
    description: "Verrà mostrata l'icona di fallback al posto dell'immagine."
  }
}`,...(U=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:`Thumbnail con errore (per forzare la fallback icon).
Impostando un URL che causerà un errore di caricamento.`,...(R=(F=r.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var N,V,q,A,D;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: "Card con vari topic e link",
    subTitle: "Approfondisci l'argomento",
    description: "Esempio di come la card possa contenere molti topic e diversi link con icone differenti.",
    thumbnail: "https://via.placeholder.com/400",
    topics: ["JavaScript", "TypeScript", "ChakraUI", "Storybook", "React"],
    links: [{
      label: "Preferito",
      icon: <Icon as={FaHeart} />,
      onClick: () => alert("Hai cliccato sul cuore!")
    }, {
      label: "Visita il link",
      icon: <Icon as={FaLink} />,
      onClick: () => alert("Hai cliccato sul link!")
    }]
  }
}`,...(q=(V=n.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:'Esempio di card con diversi "topic" e link.',...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var G,W,P,_,B;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: "Card con contenuto extra",
    subTitle: "Utilizzo di children",
    description: "In questa card utilizziamo children personalizzati nel body.",
    children: <div>
                <p>
                    Questa porzione di contenuto è passata come <code>children</code> a
                    SuperCard.
                </p>
                <button onClick={() => alert("Cliccato!")}>Bottone di prova</button>
            </div>
  }
}`,...(P=(W=c.parameters)==null?void 0:W.docs)==null?void 0:P.source},description:{story:`Esempio con children personalizzati:
Se desideri mostrare contenuto extra nel body della card,
aggiungendo magari un pulsante aggiuntivo o un componente custom.`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.description}}};var J,O,w,K,M;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: "Card cliccabile",
    subTitle: "Gestione onCardClick",
    description: "Quando clicchi sul contenuto principale, viene mostrato un alert.",
    onCardClick: () => alert("Hai cliccato sul corpo della card!"),
    thumbnail: "https://via.placeholder.com/400x200"
  }
}`,...(w=(O=s.parameters)==null?void 0:O.docs)==null?void 0:w.source},description:{story:"Esempio con onCardClick per catturare il click sul contenuto principale.",...(M=(K=s.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};const bo=["Default","Compact","Horizontal","NoThumbnail","ErrorThumbnail","WithTopicsAndLinks","WithCustomChildren","ClickableCard"];export{s as ClickableCard,e as Compact,i as Default,r as ErrorThumbnail,t as Horizontal,a as NoThumbnail,c as WithCustomChildren,n as WithTopicsAndLinks,bo as __namedExportsOrder,ho as default};
