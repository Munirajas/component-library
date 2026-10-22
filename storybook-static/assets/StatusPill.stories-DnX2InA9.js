import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{S as j}from"./StatusPill-BFyKJnpH.js";import"./clsx-B-dksMZM.js";const L={title:"UI/StatusPill",component:j,parameters:{docs:{description:{component:"Componente de etiqueta de estado para mostrar el estado contextual de entidades (p. ej. Published, Draft, Pending)."}}},argTypes:{label:{control:"text",description:"Texto que se muestra dentro de la pill."},variant:{control:"select",options:["success","warning","danger","info","neutral","accent"],description:"Define el color semántico de la pill."},size:{control:"inline-radio",options:["sm","md"],description:"Controla el padding y tipografía."},uppercase:{control:"boolean",description:"Forza el texto a MAYÚSCULAS con tracking amplio."},soft:{control:"boolean",description:"Activa el estilo soft (fondo claro) o sólido."},icon:{control:!1,description:"ReactNode opcional para incluir íconos."},className:{control:"text",description:"Clases tailwind adicionales."}},args:{label:"Published",variant:"success",size:"sm",uppercase:!0,soft:!0,className:""}},e={},a={args:{label:"Pending approval",variant:"accent",soft:!1}},r={args:{label:"Draft",variant:"warning",size:"md"}},n={args:{label:"Synced",variant:"info",icon:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"20 6 9 17 4 12"})})},parameters:{docs:{description:{story:"Ejemplo de uso con un ícono inline para reforzar el estado."}}}},o={render:y=>s.jsx("div",{className:"flex flex-wrap gap-3",children:["success","info","accent","warning","danger","neutral"].map(t=>s.jsx(j,{...y,variant:t,label:t},t))}),args:{uppercase:!0},parameters:{docs:{description:{story:"Visualiza rápidamente todas las variantes disponibles."}}}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Pending approval",
    variant: "accent",
    soft: false
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Draft",
    variant: "warning",
    size: "md"
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Synced",
    variant: "info",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
        <polyline points="20 6 9 17 4 12" />\r
      </svg>
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de uso con un ícono inline para reforzar el estado."
      }
    }
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var b,h,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">\r
      {["success", "info", "accent", "warning", "danger", "neutral"].map(variant => <StatusPill key={variant} {...args} variant={variant as StatusPillVariant} label={variant} />)}\r
    </div>,
  args: {
    uppercase: true
  },
  parameters: {
    docs: {
      description: {
        story: "Visualiza rápidamente todas las variantes disponibles."
      }
    }
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const C=["Default","SolidAccent","WarningLarge","WithIcon","Showcase"];export{e as Default,o as Showcase,a as SolidAccent,r as WarningLarge,n as WithIcon,C as __namedExportsOrder,L as default};
