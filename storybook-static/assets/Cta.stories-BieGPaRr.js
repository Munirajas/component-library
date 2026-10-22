import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as r}from"./CTA-D_IkgtqJ.js";import"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";const L={title:"Components/CTA",component:r,parameters:{layout:"centered",docs:{description:{component:"Call to action variables."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"Visual variables"},size:{control:{type:"select"},options:["xs","sm","md","lg","wide"],description:"CTA Size"},loading:{control:{type:"boolean"},description:"Loadingn state"},disabled:{control:{type:"boolean"},description:"Disable the CTA."},children:{control:{type:"text"},description:"CTA content"},onClick:{action:"clicked",description:"Function to execute on doing click"}},tags:["autodocs"]},n={args:{children:"Cta",variant:"primary",size:"md"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"tertiary",children:"Tertiary"})]}),parameters:{docs:{description:{story:"Show all the available color options."}}}},i={args:{loading:!0},render:a=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"xs",loading:a.loading,children:"XS"}),e.jsx(r,{size:"sm",loading:a.loading,children:"SM"}),e.jsx(r,{size:"md",loading:a.loading,children:"MD"}),e.jsx(r,{size:"lg",loading:a.loading,children:"LG"}),e.jsx(r,{size:"wide",loading:a.loading,children:"Wide"})]}),parameters:{docs:{description:{story:"Show all the CTA sizes."}}}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{loading:!0,children:"Loading"}),e.jsx(r,{disabled:!0,children:"Disabled"})]}),parameters:{docs:{description:{story:"Special CTA states : loading,disabled, rounded and full width."}}}},t={render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx(r,{children:"Add"})}),parameters:{docs:{description:{story:"CTA icon examples."}}}},d={args:{children:"Click here",variant:"primary",size:"md"},parameters:{docs:{description:{story:"Interactive."}}}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Cta",
    variant: "primary",
    size: "md"
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <CTA variant="primary">Primary</CTA>\r
      <CTA variant="secondary">Secondary</CTA>\r
      <CTA variant="tertiary">Tertiary</CTA>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Show all the available color options."
      }
    }
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var x,y,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: (args: {
    loading?: boolean;
  }) => <div className="flex items-center gap-4">\r
      <CTA size="xs" loading={args.loading}>\r
        XS\r
      </CTA>\r
      <CTA size="sm" loading={args.loading}>\r
        SM\r
      </CTA>\r
      <CTA size="md" loading={args.loading}>\r
        MD\r
      </CTA>\r
      <CTA size="lg" loading={args.loading}>\r
        LG\r
      </CTA>\r
      <CTA size="wide" loading={args.loading}>\r
        Wide\r
      </CTA>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Show all the CTA sizes."
      }
    }
  }
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var h,u,A;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <CTA loading>Loading</CTA>\r
      <CTA disabled>Disabled</CTA>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Special CTA states : loading,disabled, rounded and full width."
      }
    }
  }
}`,...(A=(u=o.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var v,S,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <CTA>Add</CTA>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "CTA icon examples."
      }
    }
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var z,j,b;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Click here",
    variant: "primary",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive."
      }
    }
  }
}`,...(b=(j=d.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const M=["CtaDefault","CtaVariants","CtaSizes","CtaStates","CtaWithIcons","CtaInteractive"];export{n as CtaDefault,d as CtaInteractive,i as CtaSizes,o as CtaStates,s as CtaVariants,t as CtaWithIcons,M as __namedExportsOrder,L as default};
