import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./iframe-DipnVlAM.js";import{c as T}from"./clsx-B-dksMZM.js";import{B as I}from"./Button-Cuh52HaC.js";import{T as he}from"./Tabs-D7eP48M6.js";import{C as t}from"./CTA-D_IkgtqJ.js";import{I as i}from"./Input-BPJhsZKz.js";import{a as ae,c as N,d as fe,b as se,P as ne}from"./icons-vHqGCt2y.js";import"./preload-helper-C1FmrZbK.js";import"./BaseComponents-ClchX4--.js";const ye={sm:"w-full max-w-md",md:"w-full max-w-2xl",lg:"w-full max-w-4xl",xl:"w-full max-w-6xl","2xl":"w-full max-w-7xl",full:"w-full"};function c({title:a,isOpen:r=!1,onClose:n,children:d,className:te,position:le="right",width:ie="lg",headerActions:v,footerActions:l,tabs:p,activeTabId:oe,defaultActiveTab:ce,onTabChange:g,showCloseButton:de=!0,closeOnBackdropClick:D=!0}){var k;o.useEffect(()=>{const s=j=>{j.key==="Escape"&&r&&n&&n()};return r&&(document.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[r,n]);const pe=o.useCallback(s=>{D&&s.target===s.currentTarget&&n&&n()},[D,n]),me=o.useCallback(s=>{s.stopPropagation()},[]),ue=s=>{g==null||g(s)};if(!r)return null;const xe=le==="left"?"left-0 translate-x-0":"right-0 translate-x-0";return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-end modal transition-opacity",onClick:pe,role:"dialog","aria-modal":"true","aria-labelledby":"drawer-title",children:e.jsxs("div",{className:T("h-full bg-white shadow-[0px_4px_19.9px_0px_rgba(0,0,0,0.25)] flex flex-col transition-transform duration-300 ease-in-out",xe,ye[ie],te),onClick:me,children:[e.jsxs("div",{className:"flex-shrink-0 px-8 py-4 bg-white rounded-tl-2xl rounded-tr-2xl border-b-2 border-gray-100 inline-flex justify-between items-center",children:[e.jsx("div",{className:"justify-center text-black text-3xl font-semibold font-['Muli']",children:a}),e.jsxs("div",{className:"flex items-center gap-2",children:[v&&v.length>0&&e.jsx("div",{className:"flex items-center gap-2",children:v.map((s,j)=>e.jsxs("button",{onClick:s.onClick,disabled:s.disabled,className:T("h-10 px-4 bg-surface-primary rounded-[3px] flex justify-center items-center gap-2 transition-colors","hover:bg-surface-secondary",s.disabled&&"opacity-50 cursor-not-allowed"),children:[s.icon&&e.jsx("div",{className:"w-6 h-6 flex items-center justify-center",children:s.icon}),e.jsx("span",{className:"text-text-secondary text-sm font-semibold font-['Muli']",children:s.label})]},j))}),de&&n&&e.jsxs("button",{onClick:n,className:"size- flex justify-start items-center gap-2 hover:opacity-70 transition-opacity","aria-label":"Close drawer",children:[e.jsx("div",{className:"justify-center text-black text-sm font-semibold uppercase tracking-widest",children:"close"}),e.jsxs("div",{className:"size-6 relative overflow-hidden",children:[e.jsx("div",{className:"size-6 left-0 top-0 absolute"}),e.jsx("div",{className:"left-[2.27px] top-[2px] absolute",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_1182_9444)",children:e.jsx("path",{d:"M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM10 17.8125C5.68359 17.8125 2.1875 14.3164 2.1875 10C2.1875 5.68359 5.68359 2.1875 10 2.1875C14.3164 2.1875 17.8125 5.68359 17.8125 10C17.8125 14.3164 14.3164 17.8125 10 17.8125ZM13.9766 7.57031L11.5469 10L13.9766 12.4297C14.1602 12.6133 14.1602 12.9102 13.9766 13.0938L13.0938 13.9766C12.9102 14.1602 12.6133 14.1602 12.4297 13.9766L10 11.5469L7.57031 13.9766C7.38672 14.1602 7.08984 14.1602 6.90625 13.9766L6.02344 13.0938C5.83984 12.9102 5.83984 12.6133 6.02344 12.4297L8.45312 10L6.02344 7.57031C5.83984 7.38672 5.83984 7.08984 6.02344 6.90625L6.90625 6.02344C7.08984 5.83984 7.38672 5.83984 7.57031 6.02344L10 8.45312L12.4297 6.02344C12.6133 5.83984 12.9102 5.83984 13.0938 6.02344L13.9766 6.90625C14.1602 7.08984 14.1602 7.38672 13.9766 7.57031Z",fill:"black"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1182_9444",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]})})]})]})]})]}),p&&p.length>0?e.jsx(he,{tabs:p,activeTabId:oe,defaultActiveTabId:ce||((k=p[0])==null?void 0:k.id),onTabChange:ue,variant:"drawer",className:"flex-1 flex flex-col overflow-hidden",tabListClassName:"flex-shrink-0",contentClassName:"flex-1 overflow-y-auto p-6 bg-surface-secondary"}):e.jsx("div",{className:"flex-1 overflow-y-auto p-6 bg-surface-secondary",children:d}),l&&(l.primary||l.secondary)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-shrink-0 h-px bg-stroke-grey-01"}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end items-center gap-4 p-6",children:[l.secondary&&e.jsx(I,{variant:"outline",size:"sm",onClick:l.secondary.onClick,disabled:l.secondary.disabled,className:"w-64",children:l.secondary.label}),l.primary&&e.jsx(I,{variant:"accent",size:"sm",onClick:l.primary.onClick,disabled:l.primary.disabled,className:"flex-1 max-w-64",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:l.primary.label}),l.primary.icon&&e.jsx("div",{className:"w-6 h-6",children:l.primary.icon})]})})]})]})]})})}c.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{title:{required:!0,tsType:{name:"string"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"DrawerAction"}],raw:"DrawerAction[]"},description:""},footerActions:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  primary?: DrawerAction;\r
  secondary?: DrawerAction;\r
}`,signature:{properties:[{key:"primary",value:{name:"DrawerAction",required:!1}},{key:"secondary",value:{name:"DrawerAction",required:!1}}]}},description:""},tabs:{required:!1,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"DrawerTab[]"},description:""},activeTabId:{required:!1,tsType:{name:"string"},description:"Controlled active tab id. When provided, the Drawer operates in controlled mode."},defaultActiveTab:{required:!1,tsType:{name:"string"},description:""},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnBackdropClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Ie={title:"Components/Drawer",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"Drawer component that slides in from the side (left or right) to display content. Supports tabs, header actions, footer actions, and customizable width."}}},argTypes:{isOpen:{control:{type:"boolean"},description:"Controls if the drawer is visible"},title:{control:{type:"text"},description:"Drawer title"},position:{control:{type:"select"},options:["left","right"],description:"Position of the drawer (left or right)"},width:{control:{type:"select"},options:["sm","md","lg","xl","2xl","full"],description:"Width of the drawer"},showCloseButton:{control:{type:"boolean"},description:"Show/hide the close button"},closeOnBackdropClick:{control:{type:"boolean"},description:"Allow closing drawer by clicking outside"},onClose:{action:"closed",description:"Function called when drawer is closed"}},tags:["autodocs"]},m={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer"}),e.jsx(c,{title:"Drawer Title",isOpen:a,onClose:()=>r(!1),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-text-primary",children:"Este es un drawer básico con contenido simple."}),e.jsx("p",{className:"text-text-secondary",children:"Puedes agregar cualquier contenido aquí."})]})})]})},parameters:{docs:{description:{story:"Drawer básico con título y contenido simple."}}}},u={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer con Tabs"}),e.jsx(c,{title:"Tour Details",isOpen:a,onClose:()=>r(!1),tabs:[{id:"tour-details",label:"tour details",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-text-primary font-semibold",children:"Información del Tour"}),e.jsx("p",{className:"text-text-secondary",children:"Contenido de los detalles del tour."})]})},{id:"invoices-payments",label:"invoices and payments",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-text-primary font-semibold",children:"Facturas y Pagos"}),e.jsx("p",{className:"text-text-secondary",children:"Contenido de facturas y pagos."})]})}]})]})},parameters:{docs:{description:{story:"Drawer con sistema de tabs para navegar entre diferentes secciones."}}}},x={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer con Header Actions"}),e.jsx(c,{title:"Church Mae (012024)",isOpen:a,onClose:()=>r(!1),headerActions:[{label:"Cancel Tour",onClick:()=>{alert("Cancel Tour clicked")},icon:e.jsx(se,{className:"w-6 h-6"})},{label:"Print Tickets",onClick:()=>{alert("Print Tickets clicked")},icon:e.jsx(ne,{className:"w-6 h-6"})}],children:e.jsx("div",{className:"space-y-4",children:e.jsx("p",{className:"text-text-primary",children:"Este drawer tiene acciones en el header."})})})]})},parameters:{docs:{description:{story:"Drawer con botones de acción en el header."}}}},h={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer con Footer Actions"}),e.jsx(c,{title:"Edit Tour",isOpen:a,onClose:()=>r(!1),footerActions:{secondary:{label:"cancel",onClick:()=>r(!1)},primary:{label:"SAVE",onClick:()=>{alert("Save clicked"),r(!1)},icon:e.jsx(ae,{className:"w-6 h-6"})}},children:e.jsx("div",{className:"space-y-4",children:e.jsx("p",{className:"text-text-primary",children:"Este drawer tiene acciones en el footer."})})})]})},parameters:{docs:{description:{story:"Drawer con botones de acción en el footer (Cancel y Save)."}}}},f={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer Completo (Tour Details)"}),e.jsx(c,{title:"Church Mae (012024)",isOpen:a,onClose:()=>r(!1),width:"lg",headerActions:[{label:"Cancel Tour",onClick:()=>{alert("Cancel Tour clicked")},icon:e.jsx(se,{className:"w-6 h-6"})},{label:"Print Tickets",onClick:()=>{alert("Print Tickets clicked")},icon:e.jsx(ne,{className:"w-6 h-6"})}],tabs:[{id:"tour-details",label:"tour details",content:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"p-8 bg-surface-primary rounded-2xl space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-2 border-b border-stroke-grey-01",children:e.jsx("h3",{className:"text-text-primary text-base font-semibold font-['Muli']",children:"Tour Operator"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{label:"ID",defaultValue:"392183019831"}),e.jsx(i,{label:"Group Name",defaultValue:"John's Tours"}),e.jsx(i,{label:"Operator name",defaultValue:"John Doe"}),e.jsx(i,{label:"Email",defaultValue:"John.doe@email.com"}),e.jsx(i,{label:"Phone number",defaultValue:"+5548999678990"}),e.jsx(i,{label:"Language",defaultValue:"English",rightIcon:e.jsx(N,{className:"w-6 h-6"})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-2 border-b border-stroke-grey-01",children:e.jsx("h3",{className:"text-text-primary text-base font-semibold font-['Muli']",children:"Tour Details"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{label:"Date",defaultValue:"02/12/24",rightIcon:e.jsx(fe,{className:"w-6 h-6"})}),e.jsx(i,{label:"Arrival time",defaultValue:"1 PM"}),e.jsx(i,{label:"Type",defaultValue:"Church"}),e.jsx(i,{label:"Age range",defaultValue:"Adult"}),e.jsx(i,{label:"Expected Attendees",defaultValue:"25"}),e.jsx(i,{label:"Duration",defaultValue:"2h",rightIcon:e.jsx(N,{className:"w-6 h-6"})}),e.jsx(i,{label:"Package",defaultValue:"General Admission + 1 tour or add-on",rightIcon:e.jsx(N,{className:"w-6 h-6"})})]})]})]})})},{id:"invoices-payments",label:"invoices and payments",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-text-primary font-semibold",children:"Facturas y Pagos"}),e.jsx("p",{className:"text-text-secondary",children:"Contenido de facturas y pagos aquí."})]})}],footerActions:{secondary:{label:"cancel",onClick:()=>r(!1)},primary:{label:"SAVE",onClick:()=>{alert("Save clicked"),r(!1)},icon:e.jsx(ae,{className:"w-6 h-6"})}}})]})},parameters:{docs:{description:{story:"Ejemplo completo de drawer con tabs, header actions, footer actions y formularios, similar al diseño proporcionado."}}}},y={render:()=>{const[a,r]=o.useState(null);return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{onClick:()=>r("sm"),children:"Small Drawer (SM)"}),e.jsx(t,{onClick:()=>r("md"),children:"Medium Drawer (MD)"}),e.jsx(t,{onClick:()=>r("lg"),children:"Large Drawer (LG)"}),e.jsx(t,{onClick:()=>r("xl"),children:"Extra Large Drawer (XL)"}),e.jsx(t,{onClick:()=>r("2xl"),children:"Extra Extra Large Drawer (2XL)"})]}),["sm","md","lg","xl","2xl"].map(n=>e.jsx(c,{title:`Drawer ${n.toUpperCase()}`,isOpen:a===n,onClose:()=>r(null),width:n,children:e.jsx("div",{className:"text-text-primary",children:e.jsxs("p",{children:["Contenido del drawer ",n]})})},n))]})},parameters:{docs:{description:{story:"Muestra los diferentes tamaños disponibles para el drawer."}}}},w={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer desde la Izquierda"}),e.jsx(c,{title:"Drawer desde la Izquierda",isOpen:a,onClose:()=>r(!1),position:"left",width:"md",children:e.jsx("div",{className:"space-y-4",children:e.jsx("p",{className:"text-text-primary",children:"Este drawer se abre desde la izquierda."})})})]})},parameters:{docs:{description:{story:"Drawer que se desliza desde la izquierda en lugar de la derecha."}}}},C={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer con Contenido Largo"}),e.jsx(c,{title:"Contenido Largo",isOpen:a,onClose:()=>r(!1),footerActions:{secondary:{label:"Cancel",onClick:()=>r(!1)},primary:{label:"Save",onClick:()=>r(!1)}},children:e.jsx("div",{className:"space-y-4 text-text-primary",children:Array.from({length:20},(n,d)=>e.jsxs("p",{children:["Párrafo ",d+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},d))})})]})},parameters:{docs:{description:{story:"Drawer con contenido largo que demuestra el scroll interno del contenido."}}}},b={render:()=>{const[a,r]=o.useState(!1);return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-text-primary",children:["Estado del drawer: ",a?"Abierto":"Cerrado"]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{onClick:()=>r(!0),children:"Abrir Drawer"}),e.jsx(t,{variant:"secondary",onClick:()=>r(!1),children:"Cerrar Drawer"}),e.jsx(t,{variant:"tertiary",onClick:()=>r(!a),children:"Cambiar Estado"})]})]}),e.jsx(c,{title:"Drawer Controlado",isOpen:a,onClose:()=>r(!1),footerActions:{primary:{label:"Cerrar",onClick:()=>r(!1)}},children:e.jsx("p",{className:"text-text-primary",children:"Este drawer puede ser abierto y cerrado desde botones externos."})})]})},parameters:{docs:{description:{story:"Ejemplo de drawer con estado controlado externamente desde múltiples botones."}}}};var O,A,S;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>Abrir Drawer</CTA>\r
        <Drawer title="Drawer Title" isOpen={isOpen} onClose={() => setIsOpen(false)}>\r
          <div className="space-y-4">\r
            <p className="text-text-primary">\r
              Este es un drawer básico con contenido simple.\r
            </p>\r
            <p className="text-text-secondary">\r
              Puedes agregar cualquier contenido aquí.\r
            </p>\r
          </div>\r
        </Drawer>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer básico con título y contenido simple."
      }
    }
  }
}`,...(S=(A=m.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var E,L,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>Abrir Drawer con Tabs</CTA>\r
        <Drawer title="Tour Details" isOpen={isOpen} onClose={() => setIsOpen(false)} tabs={[{
        id: "tour-details",
        label: "tour details",
        content: <div className="space-y-4">\r
                  <p className="text-text-primary font-semibold">\r
                    Información del Tour\r
                  </p>\r
                  <p className="text-text-secondary">\r
                    Contenido de los detalles del tour.\r
                  </p>\r
                </div>
      }, {
        id: "invoices-payments",
        label: "invoices and payments",
        content: <div className="space-y-4">\r
                  <p className="text-text-primary font-semibold">\r
                    Facturas y Pagos\r
                  </p>\r
                  <p className="text-text-secondary">\r
                    Contenido de facturas y pagos.\r
                  </p>\r
                </div>
      }]} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer con sistema de tabs para navegar entre diferentes secciones."
      }
    }
  }
}`,...(q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var V,z,P;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>\r
          Abrir Drawer con Header Actions\r
        </CTA>\r
        <Drawer title="Church Mae (012024)" isOpen={isOpen} onClose={() => setIsOpen(false)} headerActions={[{
        label: "Cancel Tour",
        onClick: () => {
          alert("Cancel Tour clicked");
        },
        icon: <CloseCircleIcon className="w-6 h-6" />
      }, {
        label: "Print Tickets",
        onClick: () => {
          alert("Print Tickets clicked");
        },
        icon: <PrintIcon className="w-6 h-6" />
      }]}>\r
          <div className="space-y-4">\r
            <p className="text-text-primary">\r
              Este drawer tiene acciones en el header.\r
            </p>\r
          </div>\r
        </Drawer>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer con botones de acción en el header."
      }
    }
  }
}`,...(P=(z=x.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var M,_,F;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>\r
          Abrir Drawer con Footer Actions\r
        </CTA>\r
        <Drawer title="Edit Tour" isOpen={isOpen} onClose={() => setIsOpen(false)} footerActions={{
        secondary: {
          label: "cancel",
          onClick: () => setIsOpen(false)
        },
        primary: {
          label: "SAVE",
          onClick: () => {
            alert("Save clicked");
            setIsOpen(false);
          },
          icon: <ChevronRightIcon className="w-6 h-6" />
        }
      }}>\r
          <div className="space-y-4">\r
            <p className="text-text-primary">\r
              Este drawer tiene acciones en el footer.\r
            </p>\r
          </div>\r
        </Drawer>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer con botones de acción en el footer (Cancel y Save)."
      }
    }
  }
}`,...(F=(_=h.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var W,B,G;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>\r
          Abrir Drawer Completo (Tour Details)\r
        </CTA>\r
        <Drawer title="Church Mae (012024)" isOpen={isOpen} onClose={() => setIsOpen(false)} width="lg" headerActions={[{
        label: "Cancel Tour",
        onClick: () => {
          alert("Cancel Tour clicked");
        },
        icon: <CloseCircleIcon className="w-6 h-6" />
      }, {
        label: "Print Tickets",
        onClick: () => {
          alert("Print Tickets clicked");
        },
        icon: <PrintIcon className="w-6 h-6" />
      }]} tabs={[{
        id: "tour-details",
        label: "tour details",
        content: <div className="space-y-6">\r
                  <div className="p-8 bg-surface-primary rounded-2xl space-y-6">\r
                    {/* Tour Operator Section */}\r
                    <div className="space-y-4">\r
                      <div className="p-2 border-b border-stroke-grey-01">\r
                        <h3 className="text-text-primary text-base font-semibold font-['Muli']">\r
                          Tour Operator\r
                        </h3>\r
                      </div>\r
                      <div className="space-y-4">\r
                        <Input label="ID" defaultValue="392183019831" />\r
                        <Input label="Group Name" defaultValue="John's Tours" />\r
                        <Input label="Operator name" defaultValue="John Doe" />\r
                        <Input label="Email" defaultValue="John.doe@email.com" />\r
                        <Input label="Phone number" defaultValue="+5548999678990" />\r
                        <Input label="Language" defaultValue="English" rightIcon={<ChevronDownIcon className="w-6 h-6" />} />\r
                      </div>\r
                    </div>\r
\r
                    {/* Tour Details Section */}\r
                    <div className="space-y-4">\r
                      <div className="p-2 border-b border-stroke-grey-01">\r
                        <h3 className="text-text-primary text-base font-semibold font-['Muli']">\r
                          Tour Details\r
                        </h3>\r
                      </div>\r
                      <div className="space-y-4">\r
                        <Input label="Date" defaultValue="02/12/24" rightIcon={<CalendarIcon className="w-6 h-6" />} />\r
                        <Input label="Arrival time" defaultValue="1 PM" />\r
                        <Input label="Type" defaultValue="Church" />\r
                        <Input label="Age range" defaultValue="Adult" />\r
                        <Input label="Expected Attendees" defaultValue="25" />\r
                        <Input label="Duration" defaultValue="2h" rightIcon={<ChevronDownIcon className="w-6 h-6" />} />\r
                        <Input label="Package" defaultValue="General Admission + 1 tour or add-on" rightIcon={<ChevronDownIcon className="w-6 h-6" />} />\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>
      }, {
        id: "invoices-payments",
        label: "invoices and payments",
        content: <div className="space-y-4">\r
                  <p className="text-text-primary font-semibold">\r
                    Facturas y Pagos\r
                  </p>\r
                  <p className="text-text-secondary">\r
                    Contenido de facturas y pagos aquí.\r
                  </p>\r
                </div>
      }]} footerActions={{
        secondary: {
          label: "cancel",
          onClick: () => setIsOpen(false)
        },
        primary: {
          label: "SAVE",
          onClick: () => {
            alert("Save clicked");
            setIsOpen(false);
          },
          icon: <ChevronRightIcon className="w-6 h-6" />
        }
      }} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo completo de drawer con tabs, header actions, footer actions y formularios, similar al diseño proporcionado."
      }
    }
  }
}`,...(G=(B=f.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,R,H;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | "xl" | "2xl" | null>(null);
    return <div className="p-8 space-y-4">\r
        <div className="flex flex-wrap gap-4">\r
          <CTA onClick={() => setOpenSize("sm")}>Small Drawer (SM)</CTA>\r
          <CTA onClick={() => setOpenSize("md")}>Medium Drawer (MD)</CTA>\r
          <CTA onClick={() => setOpenSize("lg")}>Large Drawer (LG)</CTA>\r
          <CTA onClick={() => setOpenSize("xl")}>Extra Large Drawer (XL)</CTA>\r
          <CTA onClick={() => setOpenSize("2xl")}>\r
            Extra Extra Large Drawer (2XL)\r
          </CTA>\r
        </div>\r
\r
        {(["sm", "md", "lg", "xl", "2xl"] as const).map(size => <Drawer key={size} title={\`Drawer \${size.toUpperCase()}\`} isOpen={openSize === size} onClose={() => setOpenSize(null)} width={size}>\r
            <div className="text-text-primary">\r
              <p>Contenido del drawer {size}</p>\r
            </div>\r
          </Drawer>)}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Muestra los diferentes tamaños disponibles para el drawer."
      }
    }
  }
}`,...(H=(R=y.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var X,Z,U;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>Abrir Drawer desde la Izquierda</CTA>\r
        <Drawer title="Drawer desde la Izquierda" isOpen={isOpen} onClose={() => setIsOpen(false)} position="left" width="md">\r
          <div className="space-y-4">\r
            <p className="text-text-primary">\r
              Este drawer se abre desde la izquierda.\r
            </p>\r
          </div>\r
        </Drawer>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer que se desliza desde la izquierda en lugar de la derecha."
      }
    }
  }
}`,...(U=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var $,K,Q;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>\r
          Abrir Drawer con Contenido Largo\r
        </CTA>\r
        <Drawer title="Contenido Largo" isOpen={isOpen} onClose={() => setIsOpen(false)} footerActions={{
        secondary: {
          label: "Cancel",
          onClick: () => setIsOpen(false)
        },
        primary: {
          label: "Save",
          onClick: () => setIsOpen(false)
        }
      }}>\r
          <div className="space-y-4 text-text-primary">\r
            {Array.from({
            length: 20
          }, (_, i) => <p key={i}>\r
                Párrafo {i + 1}: Lorem ipsum dolor sit amet, consectetur\r
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et\r
                dolore magna aliqua.\r
              </p>)}\r
          </div>\r
        </Drawer>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer con contenido largo que demuestra el scroll interno del contenido."
      }
    }
  }
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,ee,re;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8 space-y-4">\r
        <div className="space-y-2">\r
          <p className="text-text-primary">\r
            Estado del drawer: {isOpen ? "Abierto" : "Cerrado"}\r
          </p>\r
          <div className="flex gap-4">\r
            <CTA onClick={() => setIsOpen(true)}>Abrir Drawer</CTA>\r
            <CTA variant="secondary" onClick={() => setIsOpen(false)}>\r
              Cerrar Drawer\r
            </CTA>\r
            <CTA variant="tertiary" onClick={() => setIsOpen(!isOpen)}>\r
              Cambiar Estado\r
            </CTA>\r
          </div>\r
        </div>\r
\r
        <Drawer title="Drawer Controlado" isOpen={isOpen} onClose={() => setIsOpen(false)} footerActions={{
        primary: {
          label: "Cerrar",
          onClick: () => setIsOpen(false)
        }
      }}>\r
          <p className="text-text-primary">\r
            Este drawer puede ser abierto y cerrado desde botones externos.\r
          </p>\r
        </Drawer>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de drawer con estado controlado externamente desde múltiples botones."
      }
    }
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Oe=["DrawerDefault","DrawerWithTabs","DrawerWithHeaderActions","DrawerWithFooterActions","DrawerCompleteExample","DrawerSizes","DrawerFromLeft","DrawerWithLongContent","DrawerControlled"];export{f as DrawerCompleteExample,b as DrawerControlled,m as DrawerDefault,w as DrawerFromLeft,y as DrawerSizes,h as DrawerWithFooterActions,x as DrawerWithHeaderActions,C as DrawerWithLongContent,u as DrawerWithTabs,Oe as __namedExportsOrder,Ie as default};
