import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as Z}from"./iframe-DipnVlAM.js";import{c as o}from"./clsx-B-dksMZM.js";import"./preload-helper-C1FmrZbK.js";const b=(t,r)=>typeof r=="number"?t.map((n,s)=>s<r?"completed":s===r?"current":"upcoming"):t.map((n,s)=>n.status?n.status:s===0?"current":"upcoming"),F=(t,r,n)=>{if(typeof n=="number")return b(t,n);if(r){const s=t.findIndex(u=>u.id===r);return b(t,s===-1?void 0:s)}return b(t,0)},G=t=>t!=="completed"?null:e.jsx("svg",{className:"h-3.5 w-3.5 text-white",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.66573 8.66573L3.8324 6.8324C3.66406 6.66406 3.38698 6.66406 3.21865 6.8324C3.05031 7.00073 3.05031 7.27781 3.21865 7.44615L5.35615 9.58365C5.52448 9.75198 5.80156 9.75198 5.9699 9.58365L10.7815 4.77207C10.9498 4.60373 10.9498 4.32665 10.7815 4.15832C10.6132 3.98998 10.3361 3.98998 10.1677 4.15832L5.66573 8.66573Z",fill:"currentColor"})}),H=t=>{switch(t){case"completed":return"bg-sky-600 border-sky-600 text-white";case"current":return"border-sky-600 text-sky-600 bg-white";default:return"border-slate-300 text-slate-400 bg-white"}},N=t=>{switch(t){case"completed":return"bg-sky-600";case"current":return"bg-sky-300";default:return"bg-slate-200"}},v=({steps:t,currentStepId:r,currentIndex:n,orientation:s="horizontal",showStepNumbers:u=!0,onStepClick:c,interactive:_=!0,className:V,compact:p=!1})=>{const A=F(t,r,n),L=o("w-full flex",s==="horizontal"?"flex-col gap-6 md:flex-row md:gap-8":"flex-col gap-6",V),R=(a,l,i)=>l?null:i==="horizontal"?e.jsx("div",{"aria-hidden":"true",className:o("hidden md:block h-px flex-1 self-center rounded-full",N(a))}):e.jsx("div",{"aria-hidden":"true",className:o("ml-4 h-12 w-0.5 rounded-full",N(a))});return e.jsx("div",{className:L,children:e.jsx("div",{className:o("flex w-full",s==="horizontal"?"flex-col gap-6 md:flex-row md:items-start md:gap-6":"flex-col gap-6"),children:t.map((a,l)=>{const i=a.status??A[l]??"upcoming",E=l===t.length-1,M=_&&i!=="upcoming"&&!a.disabled&&!!c,O=u&&i!=="completed",h=e.jsx("div",{className:o("relative flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-200",H(i),a.disabled&&"opacity-50"),children:i==="completed"?G(i):O?l+1:null}),y=e.jsxs("div",{className:"flex flex-1 flex-col gap-1",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"flex-1 text-base font-semibold text-slate-900",children:a.title}),a.optional&&e.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-400",children:"Opcional"})]}),a.description&&e.jsx("div",{className:"text-sm text-slate-600",children:a.description}),a.assistiveText&&e.jsx("div",{className:"text-xs text-slate-400",children:a.assistiveText})]}),W=M?e.jsxs("button",{type:"button",onClick:()=>c==null?void 0:c(a,l),className:o("flex w-full items-start gap-3 rounded-xl text-left transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",p&&"rounded-lg px-2 py-1",!p&&"px-2 py-2"),"aria-current":i==="current"?"step":void 0,"aria-disabled":a.disabled,children:[e.jsxs("span",{className:"sr-only",children:["Paso ",l+1]}),h,e.jsx("div",{className:o("flex-1",p&&"text-sm"),children:y})]}):e.jsxs("div",{className:o("flex w-full items-start gap-3",s==="horizontal"?"md:flex-col md:items-start md:gap-3":""),"aria-current":i==="current"?"step":void 0,children:[h,e.jsx("div",{className:o("flex-1",p&&"text-sm"),children:y})]});return e.jsxs("div",{className:o("relative flex flex-col",s==="horizontal"?"gap-4 md:flex-1 md:gap-3":"gap-4"),children:[W,R(i,E,s)]},a.id)})})})};v.displayName="Stepper";v.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepDefinition"}],raw:"StepDefinition[]"},description:""},currentStepId:{required:!1,tsType:{name:"string"},description:""},currentIndex:{required:!1,tsType:{name:"number"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},showStepNumbers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(step: StepDefinition, index: number) => void",signature:{arguments:[{type:{name:"StepDefinition"},name:"step"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},interactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},compact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const d=[{id:"details",title:"Detalles del evento",description:"Nombre, categoría, fechas principales y visibilidad."},{id:"pricing",title:"Precios y disponibilidad",description:"Define tiers, cantidades y ventanas de venta."},{id:"addons",title:"Add-ons y complementos",description:"Productos adicionales para upselling.",optional:!0},{id:"review",title:"Revisión y publicación",description:"Confirma la configuración antes de publicar."}],X={title:"Navigation/Stepper",component:v,parameters:{docs:{description:{component:"Stepper multi-paso utilizado en los formularios de creación y edición (bundles, tickets, guided selling). Soporta orientación horizontal/vertical y pasos interactivos."}}},argTypes:{orientation:{control:"inline-radio",options:["horizontal","vertical"]},currentIndex:{control:"number",min:0,description:"Índice del paso actual (0-based)."},showStepNumbers:{control:"boolean"},interactive:{control:"boolean"},compact:{control:"boolean"},steps:{control:!1}},args:{orientation:"horizontal",currentIndex:1,steps:[...d],showStepNumbers:!0,interactive:!0,compact:!1}},m={},f={args:{orientation:"vertical",compact:!0,currentIndex:2}},x={args:{steps:[{...d[0],status:"completed"},{...d[1],status:"completed"},{...d[2],status:"current"},{...d[3],status:"upcoming"}],showStepNumbers:!1,interactive:!1},parameters:{docs:{description:{story:"Permite definir estados manualmente por paso, ideal para wizards no lineales o resúmenes de progreso."}}}},g={render:t=>{var s;const[r,n]=Z.useState(t.currentIndex??0);return e.jsxs("div",{className:"space-y-6",children:[e.jsx(v,{...t,currentIndex:r,onStepClick:(u,c)=>n(c)}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600",children:["Paso actual seleccionado:"," ",e.jsx("span",{className:"font-semibold text-slate-900",children:((s=d[r])==null?void 0:s.title)??"—"})]})]})},args:{interactive:!0}};var w,j,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var I,z,C;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    compact: true,
    currentIndex: 2
  }
}`,...(C=(z=f.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var k,T,q;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    steps: [{
      ...stepsBase[0],
      status: "completed"
    }, {
      ...stepsBase[1],
      status: "completed"
    }, {
      ...stepsBase[2],
      status: "current"
    }, {
      ...stepsBase[3],
      status: "upcoming"
    }],
    showStepNumbers: false,
    interactive: false
  },
  parameters: {
    docs: {
      description: {
        story: "Permite definir estados manualmente por paso, ideal para wizards no lineales o resúmenes de progreso."
      }
    }
  }
}`,...(q=(T=x.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,D,P;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const [activeIndex, setActiveIndex] = React.useState(args.currentIndex ?? 0);
    return <div className="space-y-6">\r
        <Stepper {...args} currentIndex={activeIndex} onStepClick={(_, index) => setActiveIndex(index)} />\r
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">\r
          Paso actual seleccionado:{" "}\r
          <span className="font-semibold text-slate-900">\r
            {stepsBase[activeIndex]?.title ?? "—"}\r
          </span>\r
        </div>\r
      </div>;
  },
  args: {
    interactive: true
  }
}`,...(P=(D=g.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const Y=["Default","VerticalCompact","ManualStatuses","WithCallback"];export{m as Default,x as ManualStatuses,f as VerticalCompact,g as WithCallback,Y as __namedExportsOrder,X as default};
