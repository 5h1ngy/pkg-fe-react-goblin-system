import{l as x,d as b}from"./styled-components.browser.esm-Dz5yS7sT.js";const $=e=>e===1?x`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `:x`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,z=b.p`
  /* Base styles */
  margin: 0;
  padding: ${e=>e.p||"0"};
  padding-left: ${e=>e.px||e.p||"0"};
  padding-right: ${e=>e.px||e.p||"0"};
  padding-top: ${e=>e.py||e.p||"0"};
  padding-bottom: ${e=>e.py||e.p||"0"};
  
  /* Margin */
  margin-bottom: ${e=>e.mb||"0"};
  margin-top: ${e=>e.mt||"0"};
  margin-left: ${e=>e.ml||"0"};
  margin-right: ${e=>e.mr||"0"};

  /* Font family */
  font-family: ${e=>{var t,n;return e.mono||e.code||e.keyboard?((t=e.theme.typography)==null?void 0:t.fontFamilyMono)||"'JetBrains Mono', 'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, 'Cascadia Mono', monospace":((n=e.theme.typography)==null?void 0:n.fontFamily)||"'Inter Variable', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', sans-serif"}};

  /* Font size based on variant or custom font size */
  font-size: ${e=>{var t,n,i,o,a,r,l,h,g,m,d,y,f,c;return e.fontSize||e.size&&{xs:((n=(t=e.theme.typography)==null?void 0:t.fontSize)==null?void 0:n.xs)||"12px",sm:((o=(i=e.theme.typography)==null?void 0:i.fontSize)==null?void 0:o.sm)||"14px",md:((r=(a=e.theme.typography)==null?void 0:a.fontSize)==null?void 0:r.md)||"16px",lg:((h=(l=e.theme.typography)==null?void 0:l.fontSize)==null?void 0:h.lg)||"18px",xl:((m=(g=e.theme.typography)==null?void 0:g.fontSize)==null?void 0:m.xl)||"20px",xxl:((y=(d=e.theme.typography)==null?void 0:d.fontSize)==null?void 0:y.xxl)||"24px"}[e.size]||((c=(f=e.theme.typography)==null?void 0:f.fontSize)==null?void 0:c.md)||"16px"}};
  
  /* Line height */
  line-height: ${e=>{var t,n,i,o,a,r,l,h,g,m,d,y,f,c,s,u;return e.lineHeight?e.lineHeight:e.size?{xs:((n=(t=e.theme.typography)==null?void 0:t.lineHeight)==null?void 0:n.xs)||1.4,sm:((o=(i=e.theme.typography)==null?void 0:i.lineHeight)==null?void 0:o.sm)||1.5,md:((r=(a=e.theme.typography)==null?void 0:a.lineHeight)==null?void 0:r.md)||1.6,lg:((h=(l=e.theme.typography)==null?void 0:l.lineHeight)==null?void 0:h.lg)||1.7,xl:((m=(g=e.theme.typography)==null?void 0:g.lineHeight)==null?void 0:m.xl)||1.8,xxl:((y=(d=e.theme.typography)==null?void 0:d.lineHeight)==null?void 0:y.xxl)||1.8}[e.size]||((c=(f=e.theme.typography)==null?void 0:f.lineHeight)==null?void 0:c.md)||1.6:((u=(s=e.theme.typography)==null?void 0:s.lineHeight)==null?void 0:u.md)||1.6}};
  
  /* Font weight */
  font-weight: ${e=>{var t,n,i,o,a,r,l,h,g,m,d,y,f,c;if(e.strong)return((n=(t=e.theme.typography)==null?void 0:t.fontWeight)==null?void 0:n.bold)||700;switch(e.weight){case"light":return((o=(i=e.theme.typography)==null?void 0:i.fontWeight)==null?void 0:o.light)||300;case"regular":return((r=(a=e.theme.typography)==null?void 0:a.fontWeight)==null?void 0:r.regular)||400;case"medium":return((h=(l=e.theme.typography)==null?void 0:l.fontWeight)==null?void 0:h.medium)||500;case"semibold":return((m=(g=e.theme.typography)==null?void 0:g.fontWeight)==null?void 0:m.semibold)||600;case"bold":return((y=(d=e.theme.typography)==null?void 0:d.fontWeight)==null?void 0:y.bold)||700;default:return((c=(f=e.theme.typography)==null?void 0:f.fontWeight)==null?void 0:c.regular)||400}}};
  
  /* Font style */
  font-style: ${e=>e.italic?"italic":"normal"};
  
  /* Text decoration */
  text-decoration: ${e=>e.underline?"underline":e.delete?"line-through":e.decoration||"none"};
  
  /* Text color */
  color: ${e=>{var t,n,i,o;return e.disabled?((t=e.theme.colors)==null?void 0:t.textDisabled)||"rgba(0, 0, 0, 0.25)":e.secondary?((n=e.theme.colors)==null?void 0:n.textSecondary)||"rgba(0, 0, 0, 0.65)":e.color?e.color.startsWith("#")||e.color.startsWith("rgb")?e.color:((o=e.theme.colors)==null?void 0:o[e.color])||e.color:((i=e.theme.colors)==null?void 0:i.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
  
  /* Text alignment */
  text-align: ${e=>e.align||"inherit"};
  
  /* Text transformation */
  text-transform: ${e=>e.transform||"none"};
  
  /* Text truncation */
  ${e=>e.truncate&&$(e.truncate)};
  
  /* Letter spacing */
  letter-spacing: ${e=>e.letterSpacing||"normal"};
  
  /* Font feature settings */
  font-feature-settings: ${e=>e.fontFeatureSettings||"normal"};
  
  /* Font smoothing */
  ${e=>e.smooth&&x`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `}
  
  /* Special styles */
  ${e=>e.mark&&x`
    background-color: #ffe58f;
    padding: 0 2px;
  `}
  
  ${e=>{var t,n,i;return e.code&&x`
    padding: 2px 4px;
    background-color: ${((t=e.theme.colors)==null?void 0:t.bgContainer)||"#f5f5f5"};
    border-radius: ${((n=e.theme.radii)==null?void 0:n.xs)||"2px"};
    border: 1px solid ${((i=e.theme.colors)==null?void 0:i.borderLight)||"#e8e8e8"};
    font-size: 90%;
  `}}
  
  ${e=>{var t,n,i,o;return e.keyboard&&x`
    padding: 2px 4px;
    background-color: ${((t=e.theme.colors)==null?void 0:t.bgContainer)||"#f5f5f5"};
    border-radius: ${((n=e.theme.radii)==null?void 0:n.xs)||"2px"};
    border: 1px solid ${((i=e.theme.colors)==null?void 0:i.borderBase)||"#d9d9d9"};
    box-shadow: 0 1px 0 ${((o=e.theme.colors)==null?void 0:o.borderBase)||"#d9d9d9"};
    font-size: 90%;
  `}}
  
  /* Animation for entry (optional) */
  ${e=>e.animated&&x`
    animation: fadeIn 0.3s ease-in-out;
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}
`;export{z as T};
