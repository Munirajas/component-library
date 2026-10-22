import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{A as z}from"./BaseLayout-xvdTbfGv.js";import{r as i,R as S}from"./iframe-DipnVlAM.js";import{c as d}from"./clsx-B-dksMZM.js";import{S as ue}from"./SidebarMenu-CNo5jk4q.js";import{s as pe}from"./sidebarMenuData-UZm2eA4o.js";import{B as l}from"./Button-Dmo6RmjD.js";import{I as xe}from"./Input-BPJhsZKz.js";import{C as m}from"./Card-CARR_SJz.js";import"./preload-helper-C1FmrZbK.js";import"./icons-vHqGCt2y.js";import"./DarkModeToggle-mG4lsO80.js";import"./ColorSystemSelector-DSjHt-Ck.js";import"./BaseComponents-ClchX4--.js";let C=null;try{C=require("next/link").default}catch{}const B=C?S.memo(S.forwardRef(({href:a,className:t,onClick:c,children:v},b)=>e.jsx(C,{href:a,className:t,onClick:c,ref:b,children:v}))):void 0;B&&(B.displayName="LinkComponent");const Y=i.memo(({children:a})=>{try{const{usePathname:t}=require("next/navigation"),c=t();return e.jsx(e.Fragment,{children:a(c)})}catch{return e.jsx(e.Fragment,{children:a(void 0)})}});Y.displayName="PathnameWrapper";const Z=({sidebarSections:a=[],sidebarExpanded:t=!0,onSidebarToggle:c,sidebarLogo:v,brandName:b="Admin Panel",onSignOut:ee,columns:r=[],children:ae,actionBar:n,className:te="",contentClassName:se="",sidebarClassName:E="self-stretch ",headerClassName:re="",footerClassName:ne="",mobileSidebarCollapsed:y=!0,onMobileSidebarToggle:u,header:A,footer:k})=>{const[j,R]=i.useState(t),[p,q]=i.useState(y);i.useEffect(()=>{R(t)},[t]),i.useEffect(()=>{q(y)},[y]);const ie=i.useCallback(s=>{R(s),c==null||c(s)},[c]),w=i.useCallback(s=>{q(s),u==null||u(s)},[u]),le=i.useCallback(()=>{w(!0)},[w]),ce=i.useMemo(()=>{if(r.length===0)return"grid-cols-1";if(!r.every(me=>me.width))switch(r.length){case 1:return"grid-cols-1";case 2:return"grid-cols-1 lg:grid-cols-2";case 3:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-3";case 4:return"grid-cols-1 md:grid-cols-2 lg:grid-cols-4";default:return"grid-cols-1"}return"grid-cols-1 lg:grid-cols-12"},[r.length,r.map(s=>s.width).join(",")]),oe=i.useCallback(s=>{switch(s){case"1/3":return"lg:col-span-4";case"1/2":return"lg:col-span-6";case"2/3":return"lg:col-span-8";case"full":return"col-span-full lg:col-span-12";case"auto":return"lg:col-auto";default:return r.length===1?"lg:col-span-12":r.length===2?"lg:col-span-6":r.length===3?"lg:col-span-4":r.length===4?"lg:col-span-3":"lg:col-span-12"}},[r.length]),de=i.useMemo(()=>d("flex-shrink-0 transition-all duration-300",j?"w-80":"w-32","lg:relative lg:translate-x-0",p?"-translate-x-full":"translate-x-0","fixed lg:static inset-y-0 left-0 z-50 h-screen lg:h-full",E),[j,p,E]);return e.jsxs("div",{className:d("w-full h-screen bg-slate-400 flex",te),children:[a.length>0&&e.jsx("div",{className:de,children:e.jsx(Y,{children:s=>e.jsx(ue,{sections:a,isExpanded:j,onToggle:ie,onSignOut:ee,logo:v,brandName:b,className:"h-full",LinkComponent:B,currentPath:s})})}),!p&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",onClick:le}),e.jsxs("div",{className:"flex-1 flex flex-col min-w-0 self-stretch",children:[A&&e.jsx("header",{className:d("flex-shrink-0",re),children:A}),(n==null?void 0:n.position)==="top"&&e.jsx(z,{actions:n.actions,position:"top",variant:n.variant,children:n.children}),e.jsx("main",{className:d("flex-1 p-6 overflow-auto",se),children:r.length>0?e.jsx("div",{className:d("grid gap-6",ce),children:r.map(s=>e.jsxs("div",{className:d("bg-surface-primary border border-button-grey rounded-lg p-4",oe(s.width),s.className),children:[s.title&&e.jsx("h3",{className:"text-text-primary font-semibold mb-4",children:s.title}),s.content]},s.id))}):ae}),(n==null?void 0:n.position)==="bottom"&&e.jsx(z,{actions:n.actions,position:"bottom",children:n.children,variant:n.variant}),k&&e.jsx("footer",{className:d("flex-shrink-0",ne),children:k})]}),a.length>0&&e.jsx("button",{className:"fixed top-4 left-4 z-50 lg:hidden bg-cta-accent text-white p-2 rounded-lg shadow-lg",onClick:()=>w(!p),children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})},P=i.memo(Z,(a,t)=>{const c=a.actionBar===t.actionBar||a.actionBar&&t.actionBar&&a.actionBar.title===t.actionBar.title&&a.actionBar.subtitle===t.actionBar.subtitle&&a.actionBar.position===t.actionBar.position&&a.actionBar.variant===t.actionBar.variant&&a.actionBar.actions===t.actionBar.actions;return!!(a.sidebarSections===t.sidebarSections&&a.sidebarExpanded===t.sidebarExpanded&&a.mobileSidebarCollapsed===t.mobileSidebarCollapsed&&a.sidebarLogo===t.sidebarLogo&&a.brandName===t.brandName&&a.columns===t.columns&&a.children===t.children&&c&&a.className===t.className&&a.contentClassName===t.contentClassName&&a.sidebarClassName===t.sidebarClassName&&a.headerClassName===t.headerClassName&&a.footerClassName===t.footerClassName&&a.header===t.header&&a.footer===t.footer&&a.onSidebarToggle===t.onSidebarToggle&&a.onSignOut===t.onSignOut&&a.onMobileSidebarToggle===t.onMobileSidebarToggle)});P.displayName="Layout";Z.__docgenInfo={description:"",methods:[],displayName:"LayoutComponent",props:{sidebarSections:{required:!1,tsType:{name:"Array",elements:[{name:"MenuSection"}],raw:"MenuSection[]"},description:"",defaultValue:{value:"[]",computed:!1}},sidebarExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onSidebarToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:""},sidebarLogo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},brandName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Admin Panel'",computed:!1}},onSignOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},columns:{required:!1,tsType:{name:"Array",elements:[{name:"LayoutColumn"}],raw:"LayoutColumn[]"},description:"",defaultValue:{value:"[]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actionBar:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  title?: string\r
  subtitle?: string\r
  actions?: React.ReactNode\r
  position?: 'top' | 'bottom'\r
  variant?: 'default' | 'floating' | 'sticky'\r
  children?:React.ReactNode\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"subtitle",value:{name:"string",required:!1}},{key:"actions",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"position",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!1}},{key:"variant",value:{name:"union",raw:"'default' | 'floating' | 'sticky'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'floating'"},{name:"literal",value:"'sticky'"}],required:!1}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},contentClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},sidebarClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'self-stretch '",computed:!1}},headerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},footerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},mobileSidebarCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onMobileSidebarToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Re={title:"Layout/Layout",component:P,parameters:{docs:{description:{component:"Componente Layout completo con SidebarMenu, ActionBar y sistema de columnas flexible."}}},argTypes:{sidebarSections:{control:"object",description:"Secciones del menú lateral"},sidebarExpanded:{control:"boolean",description:"Si el sidebar está expandido"},brandName:{control:"text",description:"Nombre de la marca"}},args:{sidebarSections:pe,sidebarExpanded:!0,brandName:"Admin Panel"}},o={args:{columns:[{id:"main-content",title:"Contenido Principal",width:"1/3",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-text-primary",children:"Dashboard Principal"}),e.jsx("p",{className:"text-text-secondary",children:"Este es el contenido principal del dashboard. Aquí puedes mostrar gráficos, estadísticas y otra información importante."}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(m,{padding:"md",shadow:"sm",children:[e.jsx("h3",{className:"font-semibold text-text-primary",children:"Ventas"}),e.jsx("p",{className:"text-2xl font-bold text-cta-accent",children:"$12,345"})]}),e.jsxs(m,{padding:"md",shadow:"sm",children:[e.jsx("h3",{className:"font-semibold text-text-primary",children:"Usuarios"}),e.jsx("p",{className:"text-2xl font-bold text-cta-accent",children:"1,234"})]})]})]})},{id:"sidebar-content",title:"Panel Lateral",width:"1/3",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold text-text-primary",children:"Acciones Rápidas"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"ctaAccent",size:"sm",className:"w-full",children:"Crear Evento"}),e.jsx(l,{variant:"ctaHover",size:"sm",className:"w-full",children:"Ver Reportes"}),e.jsx(l,{variant:"outlineAccent",size:"sm",className:"w-full",children:"Configuración"})]}),e.jsxs("div",{className:"border-t border-button-grey pt-4",children:[e.jsx("h4",{className:"font-medium text-text-primary mb-2",children:"Notificaciones"}),e.jsxs("div",{className:"space-y-2 text-sm text-text-secondary",children:[e.jsx("p",{children:"• Nuevo evento creado"}),e.jsx("p",{children:"• 5 tickets vendidos"}),e.jsx("p",{children:"• Usuario registrado"})]})]})]})}],actionBar:{title:"Dashboard",subtitle:"Resumen de actividades",position:"bottom",actions:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(l,{variant:"outlineAccent",size:"sm",children:"Exportar"}),e.jsx(l,{variant:"ctaAccent",size:"sm",children:"Nuevo"})]})}}},x={args:{columns:[{id:"left-panel",title:"Panel Izquierdo",width:"1/3",content:e.jsxs("div",{className:"space-y-4",children:[e.jsx(xe,{label:"Buscar",placeholder:"Buscar eventos...",className:"w-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium text-text-primary",children:"Filtros"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"Eventos activos"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"Eventos próximos"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"Eventos pasados"})]})]})]})]})},{id:"main-content",title:"Lista de Eventos",width:"1/3",content:e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"space-y-3",children:[1,2,3,4,5].map(a=>e.jsx(m,{padding:"sm",shadow:"sm",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-text-primary",children:["Evento ",a]}),e.jsxs("p",{className:"text-sm text-text-secondary",children:["Fecha: 2024-01-",a+10]})]}),e.jsx(l,{variant:"outlineAccent",size:"sm",children:"Ver"})]})},a))})})},{id:"right-panel",title:"Detalles",width:"1/3",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(m,{padding:"md",shadow:"sm",children:[e.jsx("h4",{className:"font-semibold text-text-primary mb-2",children:"Estadísticas"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"Total eventos:"}),e.jsx("span",{className:"text-text-primary font-medium",children:"25"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"Vendidos:"}),e.jsx("span",{className:"text-text-primary font-medium",children:"18"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-text-secondary",children:"Disponibles:"}),e.jsx("span",{className:"text-text-primary font-medium",children:"7"})]})]})]}),e.jsxs(m,{padding:"md",shadow:"sm",children:[e.jsx("h4",{className:"font-semibold text-text-primary mb-2",children:"Acciones"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{variant:"ctaAccent",size:"sm",className:"w-full",children:"Crear Evento"}),e.jsx(l,{variant:"outlineAccent",size:"sm",className:"w-full",children:"Importar"})]})]})]})}],actionBar:{title:"Gestión de Eventos",subtitle:"25 eventos encontrados",position:"top",actions:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(l,{variant:"outlineAccent",size:"sm",children:"Filtros"}),e.jsx(l,{variant:"ctaAccent",size:"sm",children:"Nuevo Evento"})]})}}},h={args:{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-cta-accent/10 border border-cta-accent/20 rounded-lg p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-cta-accent mb-4",children:"Bienvenido al Panel de Administración"}),e.jsx("p",{className:"text-text-secondary",children:"Este es un ejemplo de contenido personalizado sin usar el sistema de columnas. Puedes colocar cualquier contenido aquí."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[1,2,3,4,5,6].map(a=>e.jsxs(m,{padding:"md",shadow:"md",children:[e.jsxs("h3",{className:"font-semibold text-text-primary mb-2",children:["Tarjeta ",a]}),e.jsxs("p",{className:"text-text-secondary text-sm",children:["Contenido de la tarjeta ",a,". Este es un ejemplo de contenido en una tarjeta dentro del layout."]}),e.jsx(l,{variant:"outlineAccent",size:"sm",className:"mt-4",children:"Acción"})]},a))})]}),actionBar:{title:"Panel Principal",subtitle:"Contenido personalizado",position:"bottom",actions:e.jsx(l,{variant:"ctaAccent",size:"sm",children:"Configurar"})}}},f={args:{...o.args,sidebarExpanded:!1}},N={args:{...o.args,sidebarSections:[]}},g={args:{...o.args,actionBar:{...o.args.actionBar,variant:"floating"}}};var T,L,V;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'main-content',
      title: 'Contenido Principal',
      width: '1/3',
      content: <div className="space-y-4">\r
            <h2 className="text-xl font-bold text-text-primary">Dashboard Principal</h2>\r
            <p className="text-text-secondary">\r
              Este es el contenido principal del dashboard. Aquí puedes mostrar gráficos, \r
              estadísticas y otra información importante.\r
            </p>\r
            <div className="grid grid-cols-2 gap-4">\r
              <Card padding="md" shadow="sm">\r
                <h3 className="font-semibold text-text-primary">Ventas</h3>\r
                <p className="text-2xl font-bold text-cta-accent">$12,345</p>\r
              </Card>\r
              <Card padding="md" shadow="sm">\r
                <h3 className="font-semibold text-text-primary">Usuarios</h3>\r
                <p className="text-2xl font-bold text-cta-accent">1,234</p>\r
              </Card>\r
            </div>\r
          </div>
    }, {
      id: 'sidebar-content',
      title: 'Panel Lateral',
      width: '1/3',
      content: <div className="space-y-4">\r
            <h3 className="font-semibold text-text-primary">Acciones Rápidas</h3>\r
            <div className="space-y-2">\r
              <Button variant="ctaAccent" size="sm" className="w-full">\r
                Crear Evento\r
              </Button>\r
              <Button variant="ctaHover" size="sm" className="w-full">\r
                Ver Reportes\r
              </Button>\r
              <Button variant="outlineAccent" size="sm" className="w-full">\r
                Configuración\r
              </Button>\r
            </div>\r
            <div className="border-t border-button-grey pt-4">\r
              <h4 className="font-medium text-text-primary mb-2">Notificaciones</h4>\r
              <div className="space-y-2 text-sm text-text-secondary">\r
                <p>• Nuevo evento creado</p>\r
                <p>• 5 tickets vendidos</p>\r
                <p>• Usuario registrado</p>\r
              </div>\r
            </div>\r
          </div>
    }],
    actionBar: {
      title: 'Dashboard',
      subtitle: 'Resumen de actividades',
      position: 'bottom',
      actions: <div className="flex space-x-2">\r
          <Button variant="outlineAccent" size="sm">\r
            Exportar\r
          </Button>\r
          <Button variant="ctaAccent" size="sm">\r
            Nuevo\r
          </Button>\r
        </div>
    }
  }
}`,...(V=(L=o.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var M,F,I;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'left-panel',
      title: 'Panel Izquierdo',
      width: '1/3',
      content: <div className="space-y-4">\r
            <Input label="Buscar" placeholder="Buscar eventos..." className="w-full" />\r
            <div className="space-y-2">\r
              <h4 className="font-medium text-text-primary">Filtros</h4>\r
              <div className="space-y-2">\r
                <label className="flex items-center space-x-2">\r
                  <input type="checkbox" className="rounded" />\r
                  <span className="text-sm text-text-secondary">Eventos activos</span>\r
                </label>\r
                <label className="flex items-center space-x-2">\r
                  <input type="checkbox" className="rounded" />\r
                  <span className="text-sm text-text-secondary">Eventos próximos</span>\r
                </label>\r
                <label className="flex items-center space-x-2">\r
                  <input type="checkbox" className="rounded" />\r
                  <span className="text-sm text-text-secondary">Eventos pasados</span>\r
                </label>\r
              </div>\r
            </div>\r
          </div>
    }, {
      id: 'main-content',
      title: 'Lista de Eventos',
      width: '1/3',
      content: <div className="space-y-4">\r
            <div className="space-y-3">\r
              {[1, 2, 3, 4, 5].map(item => <Card key={item} padding="sm" shadow="sm">\r
                  <div className="flex justify-between items-start">\r
                    <div>\r
                      <h4 className="font-medium text-text-primary">Evento {item}</h4>\r
                      <p className="text-sm text-text-secondary">Fecha: 2024-01-{item + 10}</p>\r
                    </div>\r
                    <Button variant="outlineAccent" size="sm">\r
                      Ver\r
                    </Button>\r
                  </div>\r
                </Card>)}\r
            </div>\r
          </div>
    }, {
      id: 'right-panel',
      title: 'Detalles',
      width: '1/3',
      content: <div className="space-y-4">\r
            <Card padding="md" shadow="sm">\r
              <h4 className="font-semibold text-text-primary mb-2">Estadísticas</h4>\r
              <div className="space-y-2 text-sm">\r
                <div className="flex justify-between">\r
                  <span className="text-text-secondary">Total eventos:</span>\r
                  <span className="text-text-primary font-medium">25</span>\r
                </div>\r
                <div className="flex justify-between">\r
                  <span className="text-text-secondary">Vendidos:</span>\r
                  <span className="text-text-primary font-medium">18</span>\r
                </div>\r
                <div className="flex justify-between">\r
                  <span className="text-text-secondary">Disponibles:</span>\r
                  <span className="text-text-primary font-medium">7</span>\r
                </div>\r
              </div>\r
            </Card>\r
            <Card padding="md" shadow="sm">\r
              <h4 className="font-semibold text-text-primary mb-2">Acciones</h4>\r
              <div className="space-y-2">\r
                <Button variant="ctaAccent" size="sm" className="w-full">\r
                  Crear Evento\r
                </Button>\r
                <Button variant="outlineAccent" size="sm" className="w-full">\r
                  Importar\r
                </Button>\r
              </div>\r
            </Card>\r
          </div>
    }],
    actionBar: {
      title: 'Gestión de Eventos',
      subtitle: '25 eventos encontrados',
      position: 'top',
      actions: <div className="flex space-x-2">\r
          <Button variant="outlineAccent" size="sm">\r
            Filtros\r
          </Button>\r
          <Button variant="ctaAccent" size="sm">\r
            Nuevo Evento\r
          </Button>\r
        </div>
    }
  }
}`,...(I=(F=x.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var D,W,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <div className="space-y-6">\r
        <div className="bg-cta-accent/10 border border-cta-accent/20 rounded-lg p-6">\r
          <h1 className="text-2xl font-bold text-cta-accent mb-4">\r
            Bienvenido al Panel de Administración\r
          </h1>\r
          <p className="text-text-secondary">\r
            Este es un ejemplo de contenido personalizado sin usar el sistema de columnas.\r
            Puedes colocar cualquier contenido aquí.\r
          </p>\r
        </div>\r
        \r
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
          {[1, 2, 3, 4, 5, 6].map(item => <Card key={item} padding="md" shadow="md">\r
              <h3 className="font-semibold text-text-primary mb-2">\r
                Tarjeta {item}\r
              </h3>\r
              <p className="text-text-secondary text-sm">\r
                Contenido de la tarjeta {item}. Este es un ejemplo de contenido \r
                en una tarjeta dentro del layout.\r
              </p>\r
              <Button variant="outlineAccent" size="sm" className="mt-4">\r
                Acción\r
              </Button>\r
            </Card>)}\r
        </div>\r
      </div>,
    actionBar: {
      title: 'Panel Principal',
      subtitle: 'Contenido personalizado',
      position: 'bottom',
      actions: <Button variant="ctaAccent" size="sm">\r
          Configurar\r
        </Button>
    }
  }
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var U,_,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...TwoColumns.args!,
    sidebarExpanded: false
  }
}`,...(H=(_=f.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var G,$,J;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...TwoColumns.args!,
    sidebarSections: []
  }
}`,...(J=($=N.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...TwoColumns.args!,
    actionBar: {
      ...TwoColumns.args!.actionBar,
      variant: 'floating'
    }
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const qe=["TwoColumns","ThreeColumns","CustomContent","CollapsedSidebar","NoSidebar","FloatingActionBar"];export{f as CollapsedSidebar,h as CustomContent,g as FloatingActionBar,N as NoSidebar,x as ThreeColumns,o as TwoColumns,qe as __namedExportsOrder,Re as default};
