import{S as k}from"./SidebarMenu-CNo5jk4q.js";import{s as e}from"./sidebarMenuData-UZm2eA4o.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./icons-vHqGCt2y.js";import"./Button-Dmo6RmjD.js";import"./DarkModeToggle-mG4lsO80.js";import"./ColorSystemSelector-DSjHt-Ck.js";import"./Input-BPJhsZKz.js";import"./BaseComponents-ClchX4--.js";const z={title:"Layout/SidebarMenu",component:k,parameters:{layout:"fullscreen",docs:{description:{component:"A responsive admin sidebar menu with expand/collapse functionality, organized sections, and interactive menu items. Supports both light and dark themes."}},darkMode:{current:"light",darkClass:"dark",lightClass:"light",stylePreview:!0}},argTypes:{isExpanded:{control:"boolean",description:"Initial expanded state of the sidebar"},onToggle:{action:"toggled",description:"Callback when sidebar is toggled"},onSignOut:{action:"signed-out",description:"Callback when sign out is clicked"},brandName:{control:"text",description:"Brand name displayed below logo"}},args:{sections:e,isExpanded:!0,brandName:"Admin Panel"},tags:["autodocs"]},a={args:{sections:e,isExpanded:!0,brandName:"Event Management"}},n={args:{sections:e,isExpanded:!1,brandName:"Event Management"}},s={args:{sections:e,isExpanded:!0,brandName:"My Company Admin"}},t={args:{sections:[{id:"dashboard",title:"Dashboard",items:[{id:"overview",label:"overview",icon:"Home",isActive:!0},{id:"analytics",label:"analytics",icon:"Chart"}]},{id:"management",title:"Management",items:[{id:"users",label:"users",icon:"users"},{id:"settings",label:"settings",icon:"Settings"}]}],isExpanded:!0,brandName:"Custom Admin"}},r={args:{sections:e,isExpanded:!0,brandName:"Interactive Demo"},parameters:{docs:{description:{story:"Interactive sidebar menu with all functionality enabled. Try clicking menu items and toggling the sidebar state."}}}},i={args:{sections:e,isExpanded:!0,brandName:"Dark Mode Demo"},parameters:{docs:{description:{story:"This story showcases the sidebar menu in both light and dark themes. Use the theme toggle in the Storybook toolbar to switch between themes."}}}};var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "Event Management"
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: false,
    brandName: "Event Management"
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "My Company Admin"
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,S,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: "dashboard",
      title: "Dashboard",
      items: [{
        id: "overview",
        label: "overview",
        icon: "Home",
        isActive: true
      }, {
        id: "analytics",
        label: "analytics",
        icon: "Chart"
      }]
    }, {
      id: "management",
      title: "Management",
      items: [{
        id: "users",
        label: "users",
        icon: "users"
      }, {
        id: "settings",
        label: "settings",
        icon: "Settings"
      }]
    }],
    isExpanded: true,
    brandName: "Custom Admin"
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var M,v,w;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "Interactive Demo"
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive sidebar menu with all functionality enabled. Try clicking menu items and toggling the sidebar state."
      }
    }
  }
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,E,D;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    sections: sampleSidebarMenuData,
    isExpanded: true,
    brandName: "Dark Mode Demo"
  },
  parameters: {
    docs: {
      description: {
        story: "This story showcases the sidebar menu in both light and dark themes. Use the theme toggle in the Storybook toolbar to switch between themes."
      }
    }
  }
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const L=["SidebarMenuDefault","Collapsed","CustomBrand","CustomSections","SidebarMenuInteractive","DarkModeShowcase"];export{n as Collapsed,s as CustomBrand,t as CustomSections,i as DarkModeShowcase,a as SidebarMenuDefault,r as SidebarMenuInteractive,L as __namedExportsOrder,z as default};
