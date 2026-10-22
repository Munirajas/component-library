import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as r}from"./Card-CARR_SJz.js";import{r as A}from"./iframe-DipnVlAM.js";import{c as J}from"./clsx-B-dksMZM.js";import"./preload-helper-C1FmrZbK.js";const p=A.forwardRef(({icon:t,title:x,showOutline:f=!1,onClick:u,className:C},v)=>e.jsxs(r,{ref:v,variant:"default",size:"fixed-56",bgVariant:"secondary",layout:"vertical",alignContent:"center",showOutline:f,outlineColor:"stroke-accent",padding:"none",shadow:"none",onClick:u,className:J("flex-col justify-center items-center",C),children:[t&&e.jsx("div",{className:"size-16 relative overflow-hidden flex items-center justify-center",children:t}),e.jsx("div",{className:"w-44 h-16 text-center justify-center text-text-primary text-2xl font-semibold font-['Mulish']",children:x})]}));p.displayName="GiftCertificateCard";p.__docgenInfo={description:"",methods:[],displayName:"GiftCertificateCard",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},showOutline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const a=A.forwardRef(({children:t,bgVariant:x="white",showOutline:f=!0,onClick:u,className:C},v)=>e.jsx(r,{ref:v,variant:"default",size:"fixed-32",bgVariant:x,rounded:"10px",showOutline:f,outlineColor:"cta-accent",padding:"md",shadow:"none",layout:"vertical",alignContent:"center",onClick:u,className:J("flex justify-center items-center gap-2.5 overflow-hidden",C),children:t}));a.displayName="SchoolChurchCard";a.__docgenInfo={description:"",methods:[],displayName:"SchoolChurchCard",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},bgVariant:{required:!1,tsType:{name:"union",raw:"'white' | 'cards-01'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'cards-01'"}]},description:"",defaultValue:{value:"'white'",computed:!1}},showOutline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Components/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"Card component for displaying content in a contained, elevated container. Supports multiple variants, padding options, shadows, and interactive states."}}},argTypes:{children:{control:{type:"text"},description:"Card content"},variant:{control:{type:"select"},options:["default","bordered","outlined","elevated","flat"],description:"Visual variant of the card"},padding:{control:{type:"select"},options:["none","sm","md","lg","xl"],description:"Padding size"},shadow:{control:{type:"select"},options:["none","sm","md","lg","xl"],description:"Shadow size"},hover:{control:{type:"boolean"},description:"Enable hover effects"},interactive:{control:{type:"boolean"},description:"Make card interactive with hover states"},fullWidth:{control:{type:"boolean"},description:"Make card full width"},onClick:{action:"clicked",description:"Function called when card is clicked"}},tags:["autodocs"]},i={args:{children:"Card Content",variant:"default",padding:"md",shadow:"md"},parameters:{docs:{description:{story:"Basic card with default styling."}}}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{variant:"default",children:e.jsx("div",{className:"text-text-primary font-semibold",children:"Default Card"})}),e.jsx(r,{variant:"bordered",children:e.jsx("div",{className:"text-text-primary font-semibold",children:"Bordered Card"})}),e.jsx(r,{variant:"outlined",children:e.jsx("div",{className:"text-text-primary font-semibold",children:"Outlined Card"})}),e.jsx(r,{variant:"elevated",shadow:"lg",children:e.jsx("div",{className:"text-text-primary font-semibold",children:"Elevated Card"})}),e.jsx(r,{variant:"flat",children:e.jsx("div",{className:"text-text-primary font-semibold",children:"Flat Card"})})]}),parameters:{docs:{description:{story:"Shows all available card variants."}}}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{padding:"none",className:"border border-border-accent",children:e.jsx("div",{className:"text-text-primary",children:"No Padding"})}),e.jsx(r,{padding:"sm",children:e.jsx("div",{className:"text-text-primary",children:"Small Padding"})}),e.jsx(r,{padding:"md",children:e.jsx("div",{className:"text-text-primary",children:"Medium Padding"})}),e.jsx(r,{padding:"lg",children:e.jsx("div",{className:"text-text-primary",children:"Large Padding"})}),e.jsx(r,{padding:"xl",children:e.jsx("div",{className:"text-text-primary",children:"Extra Large Padding"})})]}),parameters:{docs:{description:{story:"Shows different padding sizes available for cards."}}}},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{shadow:"none",className:"border border-border-accent",children:e.jsx("div",{className:"text-text-primary",children:"No Shadow"})}),e.jsx(r,{shadow:"sm",children:e.jsx("div",{className:"text-text-primary",children:"Small Shadow"})}),e.jsx(r,{shadow:"md",children:e.jsx("div",{className:"text-text-primary",children:"Medium Shadow"})}),e.jsx(r,{shadow:"lg",children:e.jsx("div",{className:"text-text-primary",children:"Large Shadow"})}),e.jsx(r,{shadow:"xl",children:e.jsx("div",{className:"text-text-primary",children:"Extra Large Shadow"})})]}),parameters:{docs:{description:{story:"Shows different shadow sizes available for cards."}}}},c={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(r,{interactive:!0,onClick:()=>alert("Card clicked!"),className:"w-64",children:[e.jsx("div",{className:"text-text-primary font-semibold",children:"Interactive Card"}),e.jsx("div",{className:"text-text-secondary text-sm mt-2",children:"Click me!"})]}),e.jsxs(r,{hover:!0,onClick:()=>alert("Card with hover clicked!"),className:"w-64",children:[e.jsx("div",{className:"text-text-primary font-semibold",children:"Card with Hover"}),e.jsx("div",{className:"text-text-secondary text-sm mt-2",children:"Hover over me!"})]})]}),parameters:{docs:{description:{story:"Interactive cards with click handlers and hover effects."}}}},o={render:()=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsxs(r,{fullWidth:!0,children:[e.jsx("div",{className:"text-text-primary font-semibold text-lg",children:"Full Width Card"}),e.jsx("div",{className:"text-text-secondary mt-2",children:"This card takes the full width of its container."})]})}),parameters:{docs:{description:{story:"Card that takes the full width of its container."}}}},l={render:()=>e.jsx(r,{className:"w-80",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-text-primary text-xl font-semibold",children:"Card Title"}),e.jsx("p",{className:"text-text-secondary text-sm mt-1",children:"Card subtitle or description"})]}),e.jsx("div",{className:"pt-4 border-t border-border-accent",children:e.jsx("p",{className:"text-text-primary",children:"This is a card with more complex content structure."})})]})}),parameters:{docs:{description:{story:"Card with structured content including title, subtitle, and body."}}}},m={render:()=>{const t=()=>e.jsx("svg",{width:"60",height:"36",viewBox:"0 0 60 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M57 0H3C1.34344 0 0 1.34344 0 3V33C0 34.6566 1.34344 36 3 36H57C58.6566 36 60 34.6566 60 33V3C60 1.34344 58.6566 0 57 0ZM4.5 31.5V25.5C7.81406 25.5 10.5 28.1859 10.5 31.5H4.5ZM4.5 10.5V4.5H10.5C10.5 7.81406 7.81406 10.5 4.5 10.5ZM30 27C25.8572 27 22.5 22.9697 22.5 18C22.5 13.0294 25.8581 9 30 9C34.1419 9 37.5 13.0294 37.5 18C37.5 22.9716 34.1409 27 30 27ZM55.5 31.5H49.5C49.5 28.1859 52.1859 25.5 55.5 25.5V31.5ZM55.5 10.5C52.1859 10.5 49.5 7.81406 49.5 4.5H55.5V10.5Z",fill:"var(--CTA-and-buttons-Icons-icon-primary, #0273CF)"})});return e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(p,{icon:e.jsx(t,{}),title:"Gift certificate",showOutline:!0,onClick:()=>alert("Gift certificate clicked!")}),e.jsx(p,{icon:e.jsx(t,{}),title:"Gift certificate",showOutline:!1,onClick:()=>alert("Gift certificate without outline clicked!")})]})},parameters:{docs:{description:{story:"Gift Certificate Card component - specialized card for displaying gift certificates with icon and title. Supports outline toggle and click handlers."}}}},h={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{bgVariant:"white",showOutline:!0,onClick:()=>alert("School / Church card clicked!"),children:e.jsx("div",{className:"flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']",children:"School / Church"})}),e.jsx(a,{bgVariant:"cards-01",showOutline:!0,onClick:()=>alert("School / Church card with cards-01 background clicked!"),children:e.jsx("div",{className:"flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']",children:"School / Church"})}),e.jsx(a,{bgVariant:"white",showOutline:!1,children:e.jsx("div",{className:"flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']",children:"Without Outline"})})]}),parameters:{docs:{description:{story:"School / Church Card component - specialized card for displaying school or church options. Supports different background variants and outline toggle."}}}};var g,w,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Card Content",
    variant: "default",
    padding: "md",
    shadow: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Basic card with default styling."
      }
    }
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var N,b,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Card variant="default">\r
        <div className="text-text-primary font-semibold">Default Card</div>\r
      </Card>\r
      <Card variant="bordered">\r
        <div className="text-text-primary font-semibold">Bordered Card</div>\r
      </Card>\r
      <Card variant="outlined">\r
        <div className="text-text-primary font-semibold">Outlined Card</div>\r
      </Card>\r
      <Card variant="elevated" shadow="lg">\r
        <div className="text-text-primary font-semibold">Elevated Card</div>\r
      </Card>\r
      <Card variant="flat">\r
        <div className="text-text-primary font-semibold">Flat Card</div>\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Shows all available card variants."
      }
    }
  }
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,k,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Card padding="none" className="border border-border-accent">\r
        <div className="text-text-primary">No Padding</div>\r
      </Card>\r
      <Card padding="sm">\r
        <div className="text-text-primary">Small Padding</div>\r
      </Card>\r
      <Card padding="md">\r
        <div className="text-text-primary">Medium Padding</div>\r
      </Card>\r
      <Card padding="lg">\r
        <div className="text-text-primary">Large Padding</div>\r
      </Card>\r
      <Card padding="xl">\r
        <div className="text-text-primary">Extra Large Padding</div>\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Shows different padding sizes available for cards."
      }
    }
  }
}`,...(V=(k=s.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var M,G,T;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Card shadow="none" className="border border-border-accent">\r
        <div className="text-text-primary">No Shadow</div>\r
      </Card>\r
      <Card shadow="sm">\r
        <div className="text-text-primary">Small Shadow</div>\r
      </Card>\r
      <Card shadow="md">\r
        <div className="text-text-primary">Medium Shadow</div>\r
      </Card>\r
      <Card shadow="lg">\r
        <div className="text-text-primary">Large Shadow</div>\r
      </Card>\r
      <Card shadow="xl">\r
        <div className="text-text-primary">Extra Large Shadow</div>\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Shows different shadow sizes available for cards."
      }
    }
  }
}`,...(T=(G=n.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var z,O,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Card interactive onClick={() => alert("Card clicked!")} className="w-64">\r
        <div className="text-text-primary font-semibold">Interactive Card</div>\r
        <div className="text-text-secondary text-sm mt-2">\r
          Click me!\r
        </div>\r
      </Card>\r
      <Card hover onClick={() => alert("Card with hover clicked!")} className="w-64">\r
        <div className="text-text-primary font-semibold">Card with Hover</div>\r
        <div className="text-text-secondary text-sm mt-2">\r
          Hover over me!\r
        </div>\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Interactive cards with click handlers and hover effects."
      }
    }
  }
}`,...(H=(O=c.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var E,I,P;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl">\r
      <Card fullWidth>\r
        <div className="text-text-primary font-semibold text-lg">\r
          Full Width Card\r
        </div>\r
        <div className="text-text-secondary mt-2">\r
          This card takes the full width of its container.\r
        </div>\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Card that takes the full width of its container."
      }
    }
  }
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var Z,W,q;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Card className="w-80">\r
      <div className="space-y-4">\r
        <div>\r
          <h3 className="text-text-primary text-xl font-semibold">\r
            Card Title\r
          </h3>\r
          <p className="text-text-secondary text-sm mt-1">\r
            Card subtitle or description\r
          </p>\r
        </div>\r
        <div className="pt-4 border-t border-border-accent">\r
          <p className="text-text-primary">\r
            This is a card with more complex content structure.\r
          </p>\r
        </div>\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Card with structured content including title, subtitle, and body."
      }
    }
  }
}`,...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var F,L,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const GiftIcon = () => <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">\r
        <path d="M57 0H3C1.34344 0 0 1.34344 0 3V33C0 34.6566 1.34344 36 3 36H57C58.6566 36 60 34.6566 60 33V3C60 1.34344 58.6566 0 57 0ZM4.5 31.5V25.5C7.81406 25.5 10.5 28.1859 10.5 31.5H4.5ZM4.5 10.5V4.5H10.5C10.5 7.81406 7.81406 10.5 4.5 10.5ZM30 27C25.8572 27 22.5 22.9697 22.5 18C22.5 13.0294 25.8581 9 30 9C34.1419 9 37.5 13.0294 37.5 18C37.5 22.9716 34.1409 27 30 27ZM55.5 31.5H49.5C49.5 28.1859 52.1859 25.5 55.5 25.5V31.5ZM55.5 10.5C52.1859 10.5 49.5 7.81406 49.5 4.5H55.5V10.5Z" fill="var(--CTA-and-buttons-Icons-icon-primary, #0273CF)" />\r
      </svg>;
    return <div className="flex flex-wrap gap-4">\r
        <GiftCertificateCard icon={<GiftIcon />} title="Gift certificate" showOutline={true} onClick={() => alert("Gift certificate clicked!")} />\r
        <GiftCertificateCard icon={<GiftIcon />} title="Gift certificate" showOutline={false} onClick={() => alert("Gift certificate without outline clicked!")} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Gift Certificate Card component - specialized card for displaying gift certificates with icon and title. Supports outline toggle and click handlers."
      }
    }
  }
}`,...(B=(L=m.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var R,_,D;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <SchoolChurchCard bgVariant="white" showOutline={true} onClick={() => alert("School / Church card clicked!")}>\r
        <div className="flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']">\r
          School / Church\r
        </div>\r
      </SchoolChurchCard>\r
      <SchoolChurchCard bgVariant="cards-01" showOutline={true} onClick={() => alert("School / Church card with cards-01 background clicked!")}>\r
        <div className="flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']">\r
          School / Church\r
        </div>\r
      </SchoolChurchCard>\r
      <SchoolChurchCard bgVariant="white" showOutline={false}>\r
        <div className="flex-1 text-center justify-end text-black text-2xl font-semibold font-['Mulish']">\r
          Without Outline\r
        </div>\r
      </SchoolChurchCard>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "School / Church Card component - specialized card for displaying school or church options. Supports different background variants and outline toggle."
      }
    }
  }
}`,...(D=(_=h.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const ee=["CardDefault","CardVariants","CardPaddingSizes","CardShadowSizes","CardInteractive","CardFullWidth","CardWithContent","GiftCertificateCardExample","SchoolChurchCardExample"];export{i as CardDefault,o as CardFullWidth,c as CardInteractive,s as CardPaddingSizes,n as CardShadowSizes,d as CardVariants,l as CardWithContent,m as GiftCertificateCardExample,h as SchoolChurchCardExample,ee as __namedExportsOrder,$ as default};
