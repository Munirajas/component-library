import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as r}from"./Input-BPJhsZKz.js";import"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";import"./BaseComponents-ClchX4--.js";import"./clsx-B-dksMZM.js";const M={title:"Components/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile input field with support for different types, states, validation, and additional features like auto-cleaning."}}},argTypes:{label:{control:{type:"text"},description:"Input label"},placeholder:{control:{type:"text"},description:"Placeholder text"},type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],description:"HTML input type"},value:{control:{type:"text"},description:"Input controlled value."},defaultValue:{control:{type:"text"},description:"Default input value."},disabled:{control:{type:"boolean"},description:"Disable input"},error:{control:{type:"text"},description:"Error message."},helpText:{control:{type:"text"},description:"Help text."},clearable:{control:{type:"boolean"},description:"Clean the input value."},required:{control:{type:"boolean"},description:"Mark the input as required."},onChange:{action:"changed",description:"Function executed on value chages."},onClear:{action:"cleared",description:"Function executed on value cleared"}},tags:["autodocs"]},t={args:{label:"Name",placeholder:"Enter your name",type:"text"}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(r,{label:"Text",placeholder:"Text field",type:"text"}),e.jsx(r,{label:"Email",placeholder:"user@test.com",type:"email"}),e.jsx(r,{label:"Password",placeholder:"Enter your password",type:"password"}),e.jsx(r,{label:"Number",placeholder:"123456789",type:"number"}),e.jsx(r,{label:"Phone",placeholder:"+1 234 567 8900",type:"tel"}),e.jsx(r,{label:"URL",placeholder:"https://test.com",type:"url"}),e.jsx(r,{label:"Search",placeholder:"Search...",type:"search"}),e.jsx(r,{label:"Date",placeholder:"MM/DD/YYYY",type:"date"}),e.jsx(r,{label:"Textarea",placeholder:"Enter text here",type:"textarea"})]}),parameters:{docs:{description:{story:"Shows all the available input types."}}}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(r,{label:"Default Field ",placeholder:"Default state",helpText:"Default field state"}),e.jsx(r,{label:"Field with error",placeholder:"Field with error",error:"This field is required"}),e.jsx(r,{label:"Disabled field",placeholder:"Can not be modified",disabled:!0,helpText:"This field is disabled"}),e.jsx(r,{label:"Required Field",placeholder:"Required field",required:!0,helpText:"Field is required"})]}),parameters:{docs:{description:{story:"Show different field states: default, error, disabled and required."}}}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(r,{label:"Clearable Field",placeholder:"Enter some text, then clear it.",clearable:!0,helpText:"Clic on the X to clear the field"}),e.jsx(r,{label:"Clearable search",placeholder:"Item search...",type:"search",clearable:!0,helpText:"Field search with clear button."})]}),parameters:{docs:{description:{story:"Fields that includes a button to clear the fields."}}}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(r,{label:"Name",defaultValue:"Enter some text.",helpText:"Default value"}),e.jsx(r,{label:"Email",defaultValue:"some@example.com",type:"email",helpText:"Pre-defined Email"}),e.jsx(r,{label:"Age",defaultValue:"25",type:"number",helpText:"Enter your age."})]}),parameters:{docs:{description:{story:"Fields that load the default settings."}}}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(r,{label:"Email (Required)",placeholder:"username@example.com",type:"email",required:!0,error:"Please enter a valid email"}),e.jsx(r,{label:"Password",placeholder:"8 characters minimum",type:"password",helpText:"Password must be 8 characters"}),e.jsx(r,{label:"Confirm the password",placeholder:"Repit your password",type:"password",error:"Passwords do not match"})]}),parameters:{docs:{description:{story:"Field with different validation types and error messages."}}}},i={args:{label:"Interactive Field",placeholder:"Write something here...",type:"text",clearable:!0,helpText:"Interactive field."},parameters:{docs:{description:{story:"Interactive field that can be personalized with Storybook controls."}}}};var p,c,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text'
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">\r
      <Input label="Text" placeholder="Text field" type="text" />\r
      \r
      <Input label="Email" placeholder="user@test.com" type="email" />\r
      \r
      <Input label="Password" placeholder="Enter your password" type="password" />\r
      \r
      <Input label="Number" placeholder="123456789" type="number" />\r
      \r
      <Input label="Phone" placeholder="+1 234 567 8900" type="tel" />\r
      \r
      <Input label="URL" placeholder="https://test.com" type="url" />\r
      \r
      <Input label="Search" placeholder="Search..." type="search" />\r
\r
      <Input label="Date" placeholder="MM/DD/YYYY" type="date" />\r
\r
      <Input label="Textarea" placeholder="Enter text here" type="textarea" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Shows all the available input types.'
      }
    }
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,f,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">\r
      <Input label="Default Field " placeholder="Default state" helpText="Default field state" />\r
      \r
      <Input label="Field with error" placeholder="Field with error" error="This field is required" />\r
      \r
      <Input label="Disabled field" placeholder="Can not be modified" disabled helpText="This field is disabled" />\r
      \r
      <Input label="Required Field" placeholder="Required field" required helpText="Field is required" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Show different field states: default, error, disabled and required.'
      }
    }
  }
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,w,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">\r
      <Input label="Clearable Field" placeholder="Enter some text, then clear it." clearable helpText="Clic on the X to clear the field" />\r
      \r
      <Input label="Clearable search" placeholder="Item search..." type="search" clearable helpText="Field search with clear button." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Fields that includes a button to clear the fields.'
      }
    }
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var v,g,T;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">\r
      <Input label="Name" defaultValue="Enter some text." helpText="Default value" />\r
      \r
      <Input label="Email" defaultValue="some@example.com" type="email" helpText="Pre-defined Email" />\r
      \r
      <Input label="Age" defaultValue="25" type="number" helpText="Enter your age." />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Fields that load the default settings.'
      }
    }
  }
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var j,F,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">\r
      <Input label="Email (Required)" placeholder="username@example.com" type="email" required error="Please enter a valid email" />\r
      \r
      <Input label="Password" placeholder="8 characters minimum" type="password" helpText="Password must be 8 characters" />\r
      \r
      <Input label="Confirm the password" placeholder="Repit your password" type="password" error="Passwords do not match" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Field with different validation types and error messages.'
      }
    }
  }
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var D,S,q;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Interactive Field',
    placeholder: 'Write something here...',
    type: 'text',
    clearable: true,
    helpText: 'Interactive field.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive field that can be personalized with Storybook controls.'
      }
    }
  }
}`,...(q=(S=i.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const W=["InputDefault","InputVariants","InputStates","InputClearable","InputWithDefaultValues","InputWithValidation","InputInteractive"];export{s as InputClearable,t as InputDefault,i as InputInteractive,l as InputStates,a as InputVariants,o as InputWithDefaultValues,d as InputWithValidation,W as __namedExportsOrder,M as default};
