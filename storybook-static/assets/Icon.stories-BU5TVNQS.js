import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{I as h}from"./index-DL_IaSFy.js";import{i as u}from"./icons-vHqGCt2y.js";import"./clsx-B-dksMZM.js";const N={title:"UI/Icon",component:h,parameters:{docs:{description:{component:"A component to show icons. Integrates with Tailwind CSS dark mode classes."}},darkMode:{current:"light",darkClass:"dark",lightClass:"light",stylePreview:!0}},argTypes:{className:{control:"text",description:"Additional CSS classes"},name:{control:"text",description:"Defines the Icon name"}},args:{name:"",className:""}},e={args:{name:"Home",className:"text-text-secondary"}},s={args:{name:"Home",className:"hover:text-blue-600"}},a={render:x=>o.jsx("div",{className:"flex flex-wrap gap-4",children:Object.keys(u).map(r=>o.jsx("div",{className:"border border-gray-400 p-2 rounded-sm",children:o.jsx(h,{...x,name:r},r)}))}),args:{name:"Home",className:"text-text-secondary"},parameters:{docs:{description:{story:"This story demonstrates the DarkModeToggle component. Use the theme toggle in the Storybook toolbar to see how the component adapts to different themes."}}}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: "Home",
    className: "text-text-secondary"
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,d,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: "Home",
    className: "hover:text-blue-600"
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,p,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">\r
      {Object.keys(iconMap).map(variant => <div className="border border-gray-400 p-2 rounded-sm">\r
            <Icon key={variant} {...args} name={variant} />\r
          </div>)}\r
    </div>,
  args: {
    name: "Home",
    className: "text-text-secondary"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the DarkModeToggle component. Use the theme toggle in the Storybook toolbar to see how the component adapts to different themes."
      }
    }
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const k=["Default","CustomStyling","IconShowcase"];export{s as CustomStyling,e as Default,a as IconShowcase,k as __namedExportsOrder,N as default};
