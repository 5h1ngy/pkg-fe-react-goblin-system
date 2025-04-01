import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as u}from"./ThemeProvider-CSjwFnpO.js";import{r as s}from"./index-DRjF_FHU.js";import{d as l,m as q,l as d}from"./styled-components.browser.esm-Dz5yS7sT.js";import{r as ee}from"./index-Bx0Ph3cE.js";import{B as o}from"./Button-CKDzLx83.js";import"./theme-_dwbflR3.js";const te=q`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ie=q`
  from {
    opacity: 0;
    transform: translate(-50%, -70%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`,ne=q`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,se=(t,i,n)=>{if(n)return d`
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: 0;
      margin: 0;
    `;if(i)return d`
      width: ${i};
      max-width: 95vw;
    `;switch(t){case"small":return d`
        width: 400px;
        max-width: 95vw;
      `;case"large":return d`
        width: 800px;
        max-width: 95vw;
      `;case"full":return d`
        width: 95vw;
        height: 90vh;
      `;case"medium":default:return d`
        width: 600px;
        max-width: 95vw;
      `}},oe=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.modalOverlay)||"rgba(0, 0, 0, 0.45)"}};
  display: flex;
  align-items: ${t=>t.$centered?"center":"flex-start"};
  justify-content: center;
  z-index: ${t=>t.zIndex||1e3};
  animation: ${te} 0.2s ease-out;
  backdrop-filter: blur(2px);
  overflow-y: ${t=>t.$fullScreen?"hidden":"auto"};
  padding: ${t=>t.$fullScreen?"0":"48px 24px"};
`,re=l.div`
  position: ${t=>t.$fullScreen?"fixed":t.$centered?"relative":"absolute"};
  top: ${t=>t.$fullScreen?"0":"auto"};
  left: ${t=>t.$fullScreen?"0":t.$centered?"50%":"auto"};
  transform: ${t=>t.$centered&&!t.$fullScreen?"translate(-50%, 0)":"none"};
  display: flex;
  flex-direction: column;
  background-color: ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.bgElevated)||"#ffffff"}};
  border-radius: ${t=>{var i;return t.$fullScreen?"0":((i=t.theme.radii)==null?void 0:i.lg)||"8px"}};
  box-shadow: ${t=>{var i;return t.$fullScreen?"none":((i=t.theme.shadows)==null?void 0:i.lg)||"0 4px 12px rgba(0, 0, 0, 0.15)"}};
  overflow: hidden;
  animation: ${t=>t.$centered?ie:ne} 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  margin: ${t=>t.$centered?"0":"48px auto"};
  max-height: ${t=>t.$fullScreen?"100%":"calc(100vh - 96px)"};
  
  /* Size styles */
  ${t=>se(t.size,t.width,t.$fullScreen)}
  
  /* Modern styling for 2025 */
  border: 1px solid ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.borderLight)||"rgba(0, 0, 0, 0.06)"}};
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: ${t=>{var i;return t.$fullScreen?"none":((i=t.theme.shadows)==null?void 0:i.xl)||"0 8px 24px rgba(0, 0, 0, 0.12)"}};
  }
`,ae=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.borderLight)||"rgba(0, 0, 0, 0.06)"}};
`,le=l.h3`
  margin: 0;
  font-size: ${t=>{var i,n;return((n=(i=t.theme.typography)==null?void 0:i.fontSize)==null?void 0:n.lg)||"18px"}};
  font-weight: ${t=>{var i,n;return((n=(i=t.theme.typography)==null?void 0:i.fontWeight)==null?void 0:n.medium)||"500"}};
  color: ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
  line-height: 1.4;
`,de=l.div`
  flex: 1;
  padding: 24px;
  overflow-y: ${t=>t.maxHeight?"auto":"visible"};
  max-height: ${t=>t.maxHeight||"none"};
  color: ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.textSecondary)||"rgba(0, 0, 0, 0.65)"}};
  font-size: ${t=>{var i,n;return((n=(i=t.theme.typography)==null?void 0:i.fontSize)==null?void 0:n.md)||"16px"}};
`,ue=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top: 1px solid ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.borderLight)||"rgba(0, 0, 0, 0.06)"}};
  
  & > * + * {
    margin-left: ${t=>{var i;return((i=t.theme.spacing)==null?void 0:i.md)||"16px"}};
  }
`,ce=l.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${t=>{var i;return((i=t.theme.radii)==null?void 0:i.sm)||"4px"}};
  transition: all 0.2s;
  padding: 0;
  color: ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.textSecondary)||"rgba(0, 0, 0, 0.45)"}};
  
  &:hover {
    background-color: ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.bgContainerHover)||"rgba(0, 0, 0, 0.04)"}};
    color: ${t=>{var i;return((i=t.theme.colors)==null?void 0:i.textPrimary)||"rgba(0, 0, 0, 0.85)"}};
  }
  
  &:focus {
    outline: none;
  }
`,me=()=>e.jsx("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})}),r=({isOpen:t,onClose:i,title:n,children:j,footer:c,size:O="medium",fullScreen:m=!1,centered:p=!0,closeOnBackdropClick:h=!0,closeOnEsc:M=!0,showCloseButton:C=!0,className:G,id:Q,lockBodyScroll:$=!0,zIndex:V,maxBodyHeight:X,width:_})=>{const w=s.useRef(null),S=s.useRef(null),J=a=>{a.target===a.currentTarget&&h&&i()};return s.useEffect(()=>{const a=Z=>{Z.key==="Escape"&&M&&i()};return t&&window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[t,M,i]),s.useEffect(()=>{if($)if(t){const a=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${a}px`,document.body.style.width="100%",document.body.style.overflow="hidden"}else{const a=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflow="",window.scrollTo(0,parseInt(a||"0",10)*-1)}},[t,$]),s.useEffect(()=>{t?(S.current=document.activeElement,w.current&&w.current.focus()):S.current instanceof HTMLElement&&S.current.focus()},[t]),t?ee.createPortal(e.jsx(oe,{zIndex:V,$fullScreen:m,$centered:p,onClick:J,"aria-modal":"true",role:"dialog",children:e.jsxs(re,{ref:w,$fullScreen:m,$centered:p,size:O,width:_,className:G,id:Q,tabIndex:-1,children:[(n||C)&&e.jsxs(ae,{children:[n&&e.jsx(le,{children:n}),C&&e.jsx(ce,{"aria-label":"Close modal",onClick:i,children:e.jsx(me,{})})]}),e.jsx(de,{maxHeight:X,children:j}),c&&e.jsx(ue,{children:c})]})}),document.body):null};r.displayName="Modal";const be={title:"Components/Feedback/Modal",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{isOpen:!1,onClose:()=>{},children:"Modal content goes here"}},x={render:function(){const[i,n]=s.useState(!1);return e.jsxs(u,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{isOpen:i,onClose:()=>n(!1),title:"Basic Modal",children:[e.jsx("p",{children:"This is a basic modal with a title and default settings."}),e.jsx("p",{children:"Click the X button or the backdrop to close it."})]})]})}},f={render:function(){const[i,n]=s.useState(!1);return e.jsxs(u,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Modal with Footer"}),e.jsx(r,{isOpen:i,onClose:()=>n(!1),title:"Modal with Footer",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(o,{variant:"primary",onClick:()=>n(!1),children:"Save"})]}),children:e.jsx("p",{children:"This modal has a custom footer with action buttons."})})]})}},g={render:function(){const[i,n]=s.useState(!1),[j,c]=s.useState(!1),[O,m]=s.useState(!1),[p,h]=s.useState(!1);return e.jsxs(u,{children:[e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(o,{onClick:()=>n(!0),children:"Small"}),e.jsx(o,{onClick:()=>c(!0),children:"Medium"}),e.jsx(o,{onClick:()=>m(!0),children:"Large"}),e.jsx(o,{onClick:()=>h(!0),children:"Full"})]}),e.jsx(r,{isOpen:i,onClose:()=>n(!1),title:"Small Modal",size:"small",children:e.jsx("p",{children:"This is a small modal (400px width)."})}),e.jsx(r,{isOpen:j,onClose:()=>c(!1),title:"Medium Modal",size:"medium",children:e.jsx("p",{children:"This is a medium modal (600px width)."})}),e.jsx(r,{isOpen:O,onClose:()=>m(!1),title:"Large Modal",size:"large",children:e.jsx("p",{children:"This is a large modal (800px width)."})}),e.jsx(r,{isOpen:p,onClose:()=>h(!1),title:"Full Size Modal",size:"full",children:e.jsx("p",{children:"This is a full-size modal (95vw width, 95vh height)."})})]})}},v={render:function(){const[i,n]=s.useState(!1);return e.jsxs(u,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Fullscreen Modal"}),e.jsx(r,{isOpen:i,onClose:()=>n(!1),title:"Fullscreen Modal",fullScreen:!0,children:e.jsxs("div",{style:{padding:"20px",maxWidth:"800px",margin:"0 auto"},children:[e.jsx("h2",{style:{marginBottom:"20px"},children:"Welcome to Fullscreen Mode"}),e.jsx("p",{children:"This modal takes over the entire screen, providing maximum viewing area for content."}),e.jsx("p",{children:"It's perfect for immersive experiences, detailed content, presentations, or detailed forms that require the user's full attention."}),e.jsxs("div",{style:{marginTop:"30px"},children:[e.jsx("h3",{children:"Key Features:"}),e.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"20px"},children:[e.jsx("li",{children:"Takes up 100% of viewport width and height"}),e.jsx("li",{children:"Customized styling for fullscreen presentation"}),e.jsx("li",{children:"Larger title text for better visibility"}),e.jsx("li",{children:"Expanded padding in header and footer"}),e.jsx("li",{children:"Different animation for smoother transitions"})]})]}),e.jsx(o,{onClick:()=>n(!1),style:{marginTop:"30px"},children:"Close Modal"})]})})]})}},y={render:function(){const[i,n]=s.useState(!1);return e.jsxs(u,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Form Modal"}),e.jsx(r,{isOpen:i,onClose:()=>n(!1),title:"User Information",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(o,{variant:"primary",onClick:()=>n(!1),children:"Submit"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"8px",fontWeight:500},children:"Name"}),e.jsx("input",{id:"name",type:"text",style:{width:"100%",padding:"8px 12px",borderRadius:"4px",border:"1px solid #ddd"},placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"8px",fontWeight:500},children:"Email"}),e.jsx("input",{id:"email",type:"email",style:{width:"100%",padding:"8px 12px",borderRadius:"4px",border:"1px solid #ddd"},placeholder:"Enter your email"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",style:{display:"block",marginBottom:"8px",fontWeight:500},children:"Message"}),e.jsx("textarea",{id:"message",style:{width:"100%",padding:"8px 12px",borderRadius:"4px",border:"1px solid #ddd",minHeight:"100px"},placeholder:"Enter your message"})]})]})})]})}},b={render:function(){const[i,n]=s.useState(!1);return e.jsxs(u,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Modal with Scrolling Content"}),e.jsx(r,{isOpen:i,onClose:()=>n(!1),title:"Terms and Conditions",maxBodyHeight:"300px",children:e.jsxs("div",{children:[e.jsx("h3",{children:"1. Introduction"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices dapibus. Fusce auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl."}),e.jsx("h3",{children:"2. User Agreement"}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("h3",{children:"3. Privacy Policy"}),e.jsx("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsx("h3",{children:"4. Intellectual Property"}),e.jsx("p",{children:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}),e.jsx("h3",{children:"5. Limitation of Liability"}),e.jsx("p",{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."}),e.jsx("h3",{children:"6. Termination"}),e.jsx("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."}),e.jsx("h3",{children:"7. Changes to Terms"}),e.jsx("p",{children:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."}),e.jsx("h3",{children:"8. Governing Law"}),e.jsx("p",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."})]})})]})}};var k,I,B;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Basic Modal">
          <p>This is a basic modal with a title and default settings.</p>
          <p>Click the X button or the backdrop to close it.</p>
        </Modal>
      </ThemeProvider>;
  }
}`,...(B=(I=x.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var T,F,L;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal with Footer" footer={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </>}>
          <p>This modal has a custom footer with action buttons.</p>
        </Modal>
      </ThemeProvider>;
  }
}`,...(L=(F=f.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var z,E,P;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpenSmall, setIsOpenSmall] = useState(false);
    const [isOpenMedium, setIsOpenMedium] = useState(false);
    const [isOpenLarge, setIsOpenLarge] = useState(false);
    const [isOpenFull, setIsOpenFull] = useState(false);
    return <ThemeProvider>
        <div style={{
        display: 'flex',
        gap: '10px'
      }}>
          <Button onClick={() => setIsOpenSmall(true)}>Small</Button>
          <Button onClick={() => setIsOpenMedium(true)}>Medium</Button>
          <Button onClick={() => setIsOpenLarge(true)}>Large</Button>
          <Button onClick={() => setIsOpenFull(true)}>Full</Button>
        </div>
        
        <Modal isOpen={isOpenSmall} onClose={() => setIsOpenSmall(false)} title="Small Modal" size="small">
          <p>This is a small modal (400px width).</p>
        </Modal>
        
        <Modal isOpen={isOpenMedium} onClose={() => setIsOpenMedium(false)} title="Medium Modal" size="medium">
          <p>This is a medium modal (600px width).</p>
        </Modal>
        
        <Modal isOpen={isOpenLarge} onClose={() => setIsOpenLarge(false)} title="Large Modal" size="large">
          <p>This is a large modal (800px width).</p>
        </Modal>
        
        <Modal isOpen={isOpenFull} onClose={() => setIsOpenFull(false)} title="Full Size Modal" size="full">
          <p>This is a full-size modal (95vw width, 95vh height).</p>
        </Modal>
      </ThemeProvider>;
  }
}`,...(P=(E=g.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var R,W,H;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Fullscreen Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Fullscreen Modal" fullScreen={true}>
          <div style={{
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
            <h2 style={{
            marginBottom: '20px'
          }}>Welcome to Fullscreen Mode</h2>
            <p>This modal takes over the entire screen, providing maximum viewing area for content.</p>
            <p>It's perfect for immersive experiences, detailed content, presentations, or detailed forms that require the user's full attention.</p>
            
            <div style={{
            marginTop: '30px'
          }}>
              <h3>Key Features:</h3>
              <ul style={{
              listStyleType: 'disc',
              paddingLeft: '20px'
            }}>
                <li>Takes up 100% of viewport width and height</li>
                <li>Customized styling for fullscreen presentation</li>
                <li>Larger title text for better visibility</li>
                <li>Expanded padding in header and footer</li>
                <li>Different animation for smoother transitions</li>
              </ul>
            </div>
            
            <Button onClick={() => setIsOpen(false)} style={{
            marginTop: '30px'
          }}>
              Close Modal
            </Button>
          </div>
        </Modal>
      </ThemeProvider>;
  }
}`,...(H=(W=v.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var N,D,U;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="User Information" footer={<>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Submit
              </Button>
            </>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <div>
              <label htmlFor="name" style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 500
            }}>
                Name
              </label>
              <input id="name" type="text" style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }} placeholder="Enter your name" />
            </div>
            
            <div>
              <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 500
            }}>
                Email
              </label>
              <input id="email" type="email" style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }} placeholder="Enter your email" />
            </div>
            
            <div>
              <label htmlFor="message" style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 500
            }}>
                Message
              </label>
              <textarea id="message" style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              minHeight: '100px'
            }} placeholder="Enter your message" />
            </div>
          </div>
        </Modal>
      </ThemeProvider>;
  }
}`,...(U=(D=y.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var A,Y,K;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <ThemeProvider>
        <Button onClick={() => setIsOpen(true)}>Modal with Scrolling Content</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms and Conditions" maxBodyHeight="300px">
          <div>
            <h3>1. Introduction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultrices dapibus. Fusce auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
            
            <h3>2. User Agreement</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            
            <h3>3. Privacy Policy</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            
            <h3>4. Intellectual Property</h3>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            
            <h3>5. Limitation of Liability</h3>
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            
            <h3>6. Termination</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
            
            <h3>7. Changes to Terms</h3>
            <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            
            <h3>8. Governing Law</h3>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
          </div>
        </Modal>
      </ThemeProvider>;
  }
}`,...(K=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const je=["Basic","WithFooter","SizeVariants","FullScreen","FormModal","ScrollingContent"];export{x as Basic,y as FormModal,v as FullScreen,b as ScrollingContent,g as SizeVariants,f as WithFooter,je as __namedExportsOrder,be as default};
