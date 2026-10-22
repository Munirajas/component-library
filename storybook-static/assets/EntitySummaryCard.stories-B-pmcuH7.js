import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as M}from"./iframe-DipnVlAM.js";import{c as u}from"./clsx-B-dksMZM.js";import{S as D}from"./StatusPill-BFyKJnpH.js";import"./preload-helper-C1FmrZbK.js";const g=a=>a!=null&&a.length?e.jsx("div",{className:"flex flex-wrap items-start gap-2 text-sm text-slate-600",children:a.map(({label:t,value:s},o)=>e.jsxs("div",{className:"inline-flex items-start gap-1",children:[t&&e.jsx("span",{className:"font-semibold text-slate-700",children:t}),s&&e.jsx("span",{children:s})]},o))}):null,O=a=>{if(!a)return null;if(M.isValidElement(a))return a;if(typeof a=="object"&&a!==null&&"label"in a){const{label:t,...s}=a;return e.jsx(D,{label:t,...s})}return null},p=({title:a,subtitle:t,action:s,meta:o,status:A,rows:l,footer:x,leading:f,description:b,className:P,highlight:_=!1,compact:c=!1})=>{const I=Array.isArray(l)&&l.length>0,z=c?"p-4":"p-6";return e.jsx("div",{className:u("w-full rounded-2xl border border-slate-200 bg-white shadow-[0px_4px_19.9px_rgba(6,_6,_7,_0.15)] transition-shadow",z,_&&"border-sky-200 shadow-blue-200/40 ring-1 ring-sky-200",P),children:e.jsxs("div",{className:"flex items-start gap-4",children:[f&&e.jsx("div",{className:"flex items-center justify-center",children:f}),e.jsxs("div",{className:"flex flex-1 flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4",children:[e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("div",{className:"text-lg font-bold text-slate-900 md:text-xl",children:a}),s&&e.jsx("div",{className:"text-sm font-semibold text-sky-600 underline decoration-sky-600/60 decoration-1 underline-offset-2",children:s})]}),t&&e.jsx("div",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-slate-500",children:t}),b&&e.jsx("div",{className:"text-sm text-slate-600",children:b}),g(o)]}),e.jsx("div",{className:"flex flex-col items-end gap-2",children:O(A)})]}),I&&e.jsx("div",{className:u("divide-y divide-slate-100 rounded-xl border border-slate-100",c?"overflow-hidden":""),children:l==null?void 0:l.map(({id:B,label:G,meta:h,value:m,description:y,trailing:v})=>e.jsxs("div",{className:u("flex flex-col gap-3 bg-white px-4 py-3 md:flex-row md:items-center md:justify-between",c&&"px-3 py-2.5"),children:[e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx("div",{className:"text-sm font-semibold text-slate-900 md:text-base",children:G}),h&&g(h),y&&e.jsx("div",{className:"text-sm text-slate-500",children:y})]}),(m||v)&&e.jsxs("div",{className:"flex flex-col items-end gap-1 text-right text-sm text-slate-700 md:min-w-[120px]",children:[m&&e.jsx("span",{className:"font-semibold text-slate-900",children:m}),v]})]},B))}),x&&e.jsx("div",{className:"mt-2 border-t border-slate-100 pt-3 text-sm text-slate-600",children:x})]})]})})};p.displayName="EntitySummaryCard";p.__docgenInfo={description:"",methods:[],displayName:"EntitySummaryCard",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},meta:{required:!1,tsType:{name:"Array",elements:[{name:"EntitySummaryMetaItem"}],raw:"EntitySummaryMetaItem[]"},description:""},status:{required:!1,tsType:{name:"union",raw:"EntitySummaryStatus | React.ReactNode",elements:[{name:"EntitySummaryStatus"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},rows:{required:!1,tsType:{name:"Array",elements:[{name:"EntitySummaryRow"}],raw:"EntitySummaryRow[]"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},highlight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Y={title:"Data Display/EntitySummaryCard",component:p,parameters:{layout:"centered",docs:{description:{component:"Reusable card for listing entities (e.g. tickets, bundles or add-ons) with metadata, status and detailed rows of prices or metrics."}}},argTypes:{title:{control:"text"},subtitle:{control:"text"},description:{control:"text"},highlight:{control:"boolean"},compact:{control:"boolean"},action:{control:!1,description:"ReactNode (links/buttons) displayed next to the title."},status:{control:!1,description:"`StatusPill` object or custom ReactNode."},rows:{control:!1,description:"Array of rows with metadata and values."},footer:{control:!1},leading:{control:!1}},args:{title:"Museum",subtitle:"General Admission",action:"Edit / View details",highlight:!1,compact:!1,status:{label:"Published",variant:"success",size:"sm"},meta:[{label:"Category:",value:"Museum"},{label:"Type:",value:"General Admission"}],rows:[{id:"adult",label:"Adult",meta:[{label:"Qty:",value:"n/a"}],value:"$29.99"},{id:"youth",label:"Youth",meta:[{label:"Qty:",value:"n/a"}],value:"$19.99"},{id:"child",label:"Child",meta:[{label:"Qty:",value:"n/a"}],value:"$0.00"}]}},n={},r={args:{highlight:!0,status:{label:"Pending Approval",variant:"warning",size:"sm"},rows:[{id:"base",label:"Base",meta:[{label:"Qty:",value:"100"}],value:"$59.99"},{id:"gold",label:"Gold Circle",meta:[{label:"Qty:",value:"160"}],value:"$49.99"},{id:"back",label:"Back Orchestra",meta:[{label:"Qty:",value:"140"}],value:"$34.99"}]}},i={args:{compact:!0,status:{label:"Draft",variant:"warning",size:"sm",soft:!1},meta:[{label:"Category:",value:"Add-on"},{label:"Type:",value:"Merchandise"}],rows:[{id:"poster",label:"Signed poster limited edition",description:"In-person delivery at the venue after the show.",value:"$24.99"}],footer:e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"text-slate-500",children:"Last edited:"}),e.jsx("span",{className:"font-semibold text-slate-700",children:"October 19, 2025 - 14:23"})]})}},d={args:{leading:e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600",children:"🎟️"}),title:"Prince Caspian 2024/25",subtitle:"Theater Performance",status:{label:"Published",variant:"success",size:"sm"},rows:[{id:"base",label:"Base",meta:[{label:"Qty:",value:"100"}],value:"$59.99"},{id:"gold",label:"Gold Circle",meta:[{label:"Qty:",value:"160"}],value:"$49.99"}]}};var N,w,R;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(R=(w=n.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var j,S,T;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    highlight: true,
    status: {
      label: "Pending Approval",
      variant: "warning",
      size: "sm"
    },
    rows: [{
      id: "base",
      label: "Base",
      meta: [{
        label: "Qty:",
        value: "100"
      }],
      value: "$59.99"
    }, {
      id: "gold",
      label: "Gold Circle",
      meta: [{
        label: "Qty:",
        value: "160"
      }],
      value: "$49.99"
    }, {
      id: "back",
      label: "Back Orchestra",
      meta: [{
        label: "Qty:",
        value: "140"
      }],
      value: "$34.99"
    }]
  }
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,k,$;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    compact: true,
    status: {
      label: "Draft",
      variant: "warning",
      size: "sm",
      soft: false
    },
    meta: [{
      label: "Category:",
      value: "Add-on"
    }, {
      label: "Type:",
      value: "Merchandise"
    }],
    rows: [{
      id: "poster",
      label: "Signed poster limited edition",
      description: "In-person delivery at the venue after the show.",
      value: "$24.99"
    }],
    footer: <div className="flex flex-wrap items-center gap-3">\r
        <span className="text-slate-500">Last edited:</span>\r
        <span className="font-semibold text-slate-700">October 19, 2025 - 14:23</span>\r
      </div>
  }
}`,...($=(k=i.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var E,Q,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    leading: <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">\r
        🎟️\r
      </div>,
    title: "Prince Caspian 2024/25",
    subtitle: "Theater Performance",
    status: {
      label: "Published",
      variant: "success",
      size: "sm"
    },
    rows: [{
      id: "base",
      label: "Base",
      meta: [{
        label: "Qty:",
        value: "100"
      }],
      value: "$59.99"
    }, {
      id: "gold",
      label: "Gold Circle",
      meta: [{
        label: "Qty:",
        value: "160"
      }],
      value: "$49.99"
    }]
  }
}`,...(q=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};const J=["Default","Highlighted","CompactWithFooter","WithLeadingIcon"];export{i as CompactWithFooter,n as Default,r as Highlighted,d as WithLeadingIcon,J as __namedExportsOrder,Y as default};
