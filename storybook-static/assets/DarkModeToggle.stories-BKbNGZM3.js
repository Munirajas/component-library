import{D as b}from"./DarkModeToggle-mG4lsO80.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";const L={title:"UI/DarkModeToggle",component:b,parameters:{docs:{description:{component:"A toggle button component for switching between light and dark themes. Integrates with Tailwind CSS dark mode classes."}},darkMode:{current:"light",darkClass:"dark",lightClass:"light",stylePreview:!0}},argTypes:{className:{control:"text",description:"Additional CSS classes"},showLabel:{control:"boolean",description:"Whether to show the theme label"}},args:{showLabel:!0,className:""}},e={args:{showLabel:!0}},o={args:{showLabel:!1}},t={args:{showLabel:!1,className:"bg-blue-500 hover:bg-blue-600 text-white"}},s={args:{showLabel:!0},parameters:{docs:{description:{story:"This story demonstrates the DarkModeToggle component. Use the theme toggle in the Storybook toolbar to see how the component adapts to different themes."}}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    showLabel: true
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    showLabel: false
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,d,h;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    className: "bg-blue-500 hover:bg-blue-600 text-white"
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,p,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the DarkModeToggle component. Use the theme toggle in the Storybook toolbar to see how the component adapts to different themes."
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["Default","WithoutLabel","CustomStyling","DarkModeShowcase"];export{t as CustomStyling,s as DarkModeShowcase,e as Default,o as WithoutLabel,y as __namedExportsOrder,L as default};
