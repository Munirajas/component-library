import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./Button-Cuh52HaC.js";import"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";const E={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"Button component with different states and sizes."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","outline","ghost","link","info","success","warning","error"],description:"Variante visual del botón"},size:{control:{type:"select"},options:["xs","sm","md","lg","wide"],description:"Tamaño del botón"},loading:{control:{type:"boolean"},description:"Muestra un spinner de carga"},disabled:{control:{type:"boolean"},description:"Deshabilita el botón"},rounded:{control:{type:"boolean"},description:"Hace el botón circular"},fullWidth:{control:{type:"boolean"},description:"Hace el botón ocupar todo el ancho disponible"},children:{control:{type:"text"},description:"Contenido del botón"},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic"}},tags:["autodocs"]},e={args:{children:"Botón",variant:"primary",size:"md"}},t={render:()=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(r,{variant:"primary",children:"Primary"}),n.jsx(r,{variant:"secondary",children:"Secondary"}),n.jsx(r,{variant:"accent",children:"Accent"}),n.jsx(r,{variant:"outline",children:"Outline"}),n.jsx(r,{variant:"ghost",children:"Ghost"}),n.jsx(r,{variant:"link",children:"Link"}),n.jsx(r,{variant:"info",children:"Info"}),n.jsx(r,{variant:"success",children:"Success"}),n.jsx(r,{variant:"warning",children:"Warning"}),n.jsx(r,{variant:"error",children:"Error"})]}),parameters:{docs:{description:{story:"Muestra todas las variantes de color disponibles para el botón."}}}},o={render:()=>n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(r,{size:"xs",children:"XS"}),n.jsx(r,{size:"sm",children:"SM"}),n.jsx(r,{size:"md",children:"MD"}),n.jsx(r,{size:"lg",children:"LG"}),n.jsx(r,{size:"wide",children:"Wide"})]}),parameters:{docs:{description:{story:"Muestra todos los tamaños disponibles para el botón."}}}},s={render:()=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(r,{loading:!0,children:"Loading"}),n.jsx(r,{disabled:!0,children:"Disabled"}),n.jsx(r,{rounded:!0,children:"R"}),n.jsx(r,{fullWidth:!0,children:"Full Width"})]}),parameters:{docs:{description:{story:"Muestra diferentes estados del botón: cargando, deshabilitado, redondeado y ancho completo."}}}},a={render:()=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsxs(r,{children:[n.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),"Agregar"]}),n.jsxs(r,{variant:"outline",children:[n.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})}),"Editar"]}),n.jsxs(r,{variant:"error",children:[n.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),"Eliminar"]})]}),parameters:{docs:{description:{story:"Ejemplos de botones con iconos para diferentes acciones."}}}},i={args:{children:"Haz clic en mí",variant:"primary",size:"md"},parameters:{docs:{description:{story:"Botón interactivo que puedes personalizar con los controles."}}}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Botón",
    variant: "primary",
    size: "md"
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="accent">Accent</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="link">Link</Button>\r
      <Button variant="info">Info</Button>\r
      <Button variant="success">Success</Button>\r
      <Button variant="warning">Warning</Button>\r
      <Button variant="error">Error</Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Muestra todas las variantes de color disponibles para el botón."
      }
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,v,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Button size="xs">XS</Button>\r
      <Button size="sm">SM</Button>\r
      <Button size="md">MD</Button>\r
      <Button size="lg">LG</Button>\r
      <Button size="wide">Wide</Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Muestra todos los tamaños disponibles para el botón."
      }
    }
  }
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var x,g,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Button loading>Loading</Button>\r
      <Button disabled>Disabled</Button>\r
      <Button rounded>R</Button>\r
      <Button fullWidth>Full Width</Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Muestra diferentes estados del botón: cargando, deshabilitado, redondeado y ancho completo."
      }
    }
  }
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,y,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Button>\r
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />\r
        </svg>\r
        Agregar\r
      </Button>\r
      <Button variant="outline">\r
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />\r
        </svg>\r
        Editar\r
      </Button>\r
      <Button variant="error">\r
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\r
        </svg>\r
        Eliminar\r
      </Button>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Ejemplos de botones con iconos para diferentes acciones."
      }
    }
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,w,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Haz clic en mí",
    variant: "primary",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Botón interactivo que puedes personalizar con los controles."
      }
    }
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const H=["ButtonDefault","ButtonVariants","ButtonSizes","ButtonStates","ButtonWithIcons","ButtonInteractive"];export{e as ButtonDefault,i as ButtonInteractive,o as ButtonSizes,s as ButtonStates,t as ButtonVariants,a as ButtonWithIcons,H as __namedExportsOrder,E as default};
