import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{g as w}from"./BaseComponents-ClchX4--.js";import{b as A,E as N}from"./icons-vHqGCt2y.js";import"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";function s({type:a="info",title:n,children:u,dismissible:f=!1,onDismiss:l,icon:x,className:v="",variant:h="soft"}){const g=w({type:a,variant:h,className:v}),y={info:"text-blue-500",success:"text-green-500",warning:"text-yellow-500",error:"text-red-500"},j={info:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),success:e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),warning:e.jsx(N,{className:"w-5 h-5"}),error:e.jsx(A,{className:"w-5 h-5"})};return e.jsx("div",{className:`w-full ${g}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:`flex-shrink-0 ${y[a]}`,children:x||j[a]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[n&&e.jsx("h3",{className:"font-semibold mb-1 text-sm",children:n}),e.jsx("div",{className:"text-sm",children:u})]}),f&&l&&e.jsx("div",{className:"flex-shrink-0",children:e.jsx("button",{className:"p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors",onClick:l,"aria-label":"Close alert",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})})]})})}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"soft" | "solid" | "outline"',elements:[{name:"literal",value:'"soft"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"soft"',computed:!1}}}};const M={title:"Components/Alert",component:s,parameters:{layout:"centered",docs:{description:{component:"Alert component general documentation. Contains all the options available."}}},argTypes:{type:{control:{type:"select"},options:["info","success","warning","error"],description:"Alert visual variants"},children:{control:{type:"text"},description:"Alert content"},onDismiss:{action:"clicked",description:"Function to dismiss the alert."}},tags:["autodocs"]},r={args:{children:"Alert",type:"info",onDismiss:()=>{alert("Dissmissed")}}},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{type:"info",title:"Some information",children:"Info"}),e.jsx(s,{type:"success",title:"Yeah!",children:"Success"}),e.jsx(s,{type:"warning",title:"Heads up!",children:"Warning"}),e.jsx(s,{type:"error",title:"Alert",children:"Error"})]}),parameters:{docs:{description:{story:"Muestra todas las variantes de color disponibles para el botón."}}}};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Alert",
    type: "info",
    onDismiss: () => {
      alert("Dissmissed");
    }
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Alert type="info" title="Some information">\r
        Info\r
      </Alert>\r
      <Alert type="success" title="Yeah!">\r
        Success\r
      </Alert>\r
      <Alert type="warning" title="Heads up!">\r
        Warning\r
      </Alert>\r
      <Alert type="error" title="Alert">\r
        Error\r
      </Alert>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Muestra todas las variantes de color disponibles para el botón."
      }
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const R=["AlertDefault","AlertVariants"];export{r as AlertDefault,t as AlertVariants,R as __namedExportsOrder,M as default};
