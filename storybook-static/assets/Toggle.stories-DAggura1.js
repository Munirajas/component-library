import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as X}from"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";function a({checked:s,defaultChecked:r=!1,onChange:b,disabled:l=!1,size:f="md",label:k,className:Y=""}){const x=s!==void 0,[Z,ee]=X.useState(r),t=x?s:Z,ae=()=>{if(l)return;const v=!t;x||ee(v),b==null||b(v)},se={sm:"w-12 h-6",md:"w-16 h-8",lg:"w-20 h-10"},te={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"},re={sm:t?"translate-x-6":"translate-x-1",md:t?"translate-x-8":"translate-x-1",lg:t?"translate-x-10":"translate-x-1"};return e.jsxs("div",{className:`flex items-center gap-3 ${Y}`,children:[e.jsx("button",{type:"button",onClick:ae,disabled:l,className:`
          relative inline-flex items-center
          ${se[f]}
          rounded-full transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${l?"cursor-not-allowed opacity-50":"cursor-pointer"}
          ${t?"bg-cta-accent hover:bg-cta-hover":"bg-gray-200 hover:bg-gray-300"}
        `,role:"switch","aria-checked":t,"aria-label":k||"Toggle",children:e.jsx("div",{className:`
            ${te[f]}
            bg-white rounded-full shadow-md
            transform transition-transform duration-200 ease-in-out
            ${re[f]}
          `})}),k&&e.jsx("span",{className:`text-sm dark:text-gray-200 font-medium ${l?"text-gray-400":"text-gray-700"}`,children:k})]})}a.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ne={title:"Components/Toggle",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Default state"},disabled:{control:"boolean",description:"If the toggle is disabled"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Toggle size"},label:{control:"text",description:"Optional toggle label"},onChange:{action:"changed",description:"Callback when the state changes."}}},c={args:{checked:!1,label:"Basic Toggle"}},o={args:{checked:!0,label:"Active Toggle"}},n={args:{checked:!1,disabled:!0,label:"Disabled Toggle"}},d={args:{checked:!0,disabled:!0,label:"Toggle - disabled and active"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(a,{checked:!0,label:"Small",size:"sm"}),e.jsx(a,{checked:!1,label:"Medium",size:"md"}),e.jsx(a,{checked:!0,label:"Large",size:"lg"})]})},g={args:{checked:!1}},u={args:{checked:!0,label:"Large label content to test the component behavior."}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(a,{checked:!0,label:"Notifications"}),e.jsx(a,{checked:!1,label:"Dark mode"}),e.jsx(a,{checked:!0,label:"Auto save"}),e.jsx(a,{checked:!1,label:"Sound Activated"}),e.jsx(a,{checked:!0,label:"Sync"})]})},p={render:()=>{const[s,r]=X.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(a,{checked:s,onChange:r,label:"Toggle control"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Current state: ",s?"active":"inactive"]}),e.jsx("button",{onClick:()=>r(!s),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Change state"})]})}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(a,{checked:!1,label:"Initial state"}),e.jsx(a,{checked:!0,label:"Active state"}),e.jsx(a,{checked:!1,disabled:!0,label:"Disabled"}),e.jsx(a,{checked:!0,disabled:!0,label:"Disabled and active"})]})};var T,C,y;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: "Basic Toggle"
  }
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var j,S,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: "Active Toggle"
  }
}`,...(N=(S=o.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,D,z;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: "Disabled Toggle"
  }
}`,...(z=(D=n.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var L,I,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: "Toggle - disabled and active"
  }
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var q,$,V;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">\r
      <Toggle checked={true} label="Small" size="sm" />\r
      <Toggle checked={false} label="Medium" size="md" />\r
      <Toggle checked={true} label="Large" size="lg" />\r
    </div>
}`,...(V=($=i.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var M,_,E;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var B,O,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: "Large label content to test the component behavior."
  }
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">\r
      <Toggle checked={true} label="Notifications" />\r
      <Toggle checked={false} label="Dark mode" />\r
      <Toggle checked={true} label="Auto save" />\r
      <Toggle checked={false} label="Sound Activated" />\r
      <Toggle checked={true} label="Sync" />\r
    </div>
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,P;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [isChecked, setIsChecked] = useState(false);
    return <div className="flex flex-col gap-4 items-start">\r
        <Toggle checked={isChecked} onChange={setIsChecked} label="Toggle control" />\r
        <p className="text-sm text-gray-600">\r
          Current state: {isChecked ? "active" : "inactive"}\r
        </p>\r
        <button onClick={() => setIsChecked(!isChecked)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">\r
          Change state\r
        </button>\r
      </div>;
  }
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,W;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">\r
      <Toggle checked={false} label="Initial state" />\r
      <Toggle checked={true} label="Active state" />\r
      <Toggle checked={false} disabled label="Disabled" />\r
      <Toggle checked={true} disabled label="Disabled and active" />\r
    </div>
}`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const de=["DefaultToggle","Checked","Disabled","DisabledChecked","Sizes","NoLabel","LongLabel","MultipleToggles","Controlled","States"];export{o as Checked,p as Controlled,c as DefaultToggle,n as Disabled,d as DisabledChecked,u as LongLabel,m as MultipleToggles,g as NoLabel,i as Sizes,h as States,de as __namedExportsOrder,ne as default};
