import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{M as i}from"./Modal-CGsBfFbz.js";import{C as t}from"./CTA-D_IkgtqJ.js";import{r as o}from"./iframe-DipnVlAM.js";import"./BaseComponents-ClchX4--.js";import"./clsx-B-dksMZM.js";import"./preload-helper-C1FmrZbK.js";const F={title:"Components/Modal",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"Modal component for displaying content in an overlay dialog. Supports custom actions, sizes, and accessibility features."}}},argTypes:{isOpen:{control:{type:"boolean"},description:"Controls if the modal is visible"},title:{control:{type:"text"},description:"Modal title"},description:{control:{type:"text"},description:"Optional modal description"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Modal size"},showCloseButton:{control:{type:"boolean"},description:"Show/hide the close button"},closeOnBackdropClick:{control:{type:"boolean"},description:"Allow closing modal by clicking outside"},onClose:{action:"closed",description:"Function called when modal is closed"}},tags:["autodocs"]},r={render:()=>{const[s,n]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>n(!0),children:"Abrir Modal"}),e.jsx(i,{isOpen:s,onClose:()=>n(!1),title:"Modal Title",description:"Basic Modal -  description",children:e.jsx("p",{className:"text-gray-700",children:"Here the needed content"})})]})},parameters:{docs:{description:{story:"Basic modal information."}}}},l={render:()=>{const[s,n]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>n(!0),children:"Open modal with actions"}),e.jsx(i,{isOpen:s,onClose:()=>n(!1),title:"Confirm action",description:"Continue?",primaryAction:{label:"Confirm",onClick:()=>{alert("OK"),n(!1)},variant:"primary"},secondaryAction:{label:"Cancel",onClick:()=>n(!1),variant:"secondary"},children:e.jsx("div",{className:"text-center text-gray-700",children:e.jsx("p",{children:"Cancel action."})})})]})},parameters:{docs:{description:{story:"Modal with primary and secondary actions in the footer."}}}},c={render:()=>{const[s,n]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>n(!0),children:"Open modal without close button"}),e.jsx(i,{isOpen:s,onClose:()=>n(!1),title:"Modal Required",description:"This modal can only be closed with the actions",showCloseButton:!1,closeOnBackdropClick:!1,primaryAction:{label:"Accept",onClick:()=>n(!1),variant:"primary"},secondaryAction:{label:"Reject",onClick:()=>n(!1),variant:"secondary"},children:e.jsx("p",{className:"text-gray-700",children:"This modal requires an action to close."})})]})},parameters:{docs:{description:{story:"Modal without close button and without possibility of closing by clicking outside."}}}},d={render:()=>{const[s,n]=o.useState(null);return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{onClick:()=>n("sm"),children:"Small Modal (SM)"}),e.jsx(t,{onClick:()=>n("md"),children:"Medium Modal (MD)"}),e.jsx(t,{onClick:()=>n("lg"),children:"Large Modal (LG)"}),e.jsx(t,{onClick:()=>n("xl"),children:"Extra Large Modal (XL)"})]}),["sm","md","lg","xl"].map(a=>e.jsx(i,{isOpen:s===a,onClose:()=>n(null),title:`Modal ${a.toUpperCase()}`,description:`This is a ${a} modal`,size:a,primaryAction:{label:"Accept",onClick:()=>n(null)},children:e.jsx("div",{className:"text-gray-700",children:e.jsxs("p",{children:["Content of the ",a," modal"]})})},a))]})},parameters:{docs:{description:{story:"Shows the different sizes available for the modal."}}}},p={render:()=>{const[s,n]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>n(!0),children:"Open modal with long content"}),e.jsx(i,{isOpen:s,onClose:()=>n(!1),title:"Terms and Conditions",size:"lg",primaryAction:{label:"Accept",onClick:()=>n(!1)},secondaryAction:{label:"Reject",onClick:()=>n(!1)},children:e.jsxs("div",{className:"text-gray-700 space-y-4 max-h-96 overflow-y-auto pr-2",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsx("p",{children:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}),e.jsx("p",{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"})]})})]})},parameters:{docs:{description:{story:"Modal with long content that demonstrates the internal scroll of the content."}}}},m={render:()=>{const[s,n]=o.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>n(!0),children:"Open modal with only title"}),e.jsx(i,{isOpen:s,onClose:()=>n(!1),title:"Simple Modal",children:e.jsx("p",{className:"text-gray-700",children:"This modal only has a title, without description."})})]})},parameters:{docs:{description:{story:"Modal with only title, without description or actions."}}}},u={render:()=>{const[s,n]=o.useState(!1),[a,C]=o.useState(!1),P=()=>{C(!0),setTimeout(()=>{C(!1),alert("Operation completed!"),n(!1)},2e3)};return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>n(!0),children:"Open modal with disabled actions"}),e.jsx(i,{isOpen:s,onClose:()=>n(!1),title:"Process Information",description:"This action may take a few seconds",primaryAction:{label:a?"Processing...":"Process",onClick:P,variant:"primary",disabled:a},secondaryAction:{label:"Cancel",onClick:()=>n(!1),variant:"secondary",disabled:a},children:e.jsx("div",{className:"text-gray-700",children:e.jsx("p",{children:"During the processing, the buttons will be disabled."})})})]})},parameters:{docs:{description:{story:"Example of modal with actions that can be disabled according to the state."}}}},h={render:()=>{const[s,n]=o.useState(!1);return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-gray-700",children:["Modal state: ",s?"Open":"Closed"]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(t,{variant:"secondary",onClick:()=>n(!1),children:"Close Modal"}),e.jsx(t,{variant:"tertiary",onClick:()=>n(!s),children:"Toggle state"})]})]}),e.jsx(i,{isOpen:s,onClose:()=>n(!1),title:"Controlled Modal",description:"The state of this modal is controlled externally",primaryAction:{label:"Close",onClick:()=>n(!1)},children:e.jsx("p",{className:"text-gray-700",children:"This modal can be opened and closed from external buttons."})})]})},parameters:{docs:{description:{story:"Example of modal with state controlled externally from multiple buttons."}}}};var y,f,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>Abrir Modal</CTA>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title" description="Basic Modal -  description">\r
          <p className="text-gray-700">\r
            Here the needed content\r
          </p>\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Basic modal information."
      }
    }
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var O,v,g;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>Open modal with actions</CTA>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm action" description="Continue?" primaryAction={{
        label: "Confirm",
        onClick: () => {
          alert("OK");
          setIsOpen(false);
        },
        variant: "primary"
      }} secondaryAction={{
        label: "Cancel",
        onClick: () => setIsOpen(false),
        variant: "secondary"
      }}>\r
          <div className="text-center text-gray-700">\r
            <p>Cancel action.</p>\r
          </div>\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with primary and secondary actions in the footer."
      }
    }
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,M,A;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>\r
          Open modal without close button\r
        </CTA>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Required" description="This modal can only be closed with the actions" showCloseButton={false} closeOnBackdropClick={false} primaryAction={{
        label: "Accept",
        onClick: () => setIsOpen(false),
        variant: "primary"
      }} secondaryAction={{
        label: "Reject",
        onClick: () => setIsOpen(false),
        variant: "secondary"
      }}>\r
          <p className="text-gray-700">\r
            This modal requires an action to close.\r
          </p>\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal without close button and without possibility of closing by clicking outside."
      }
    }
  }
}`,...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var k,S,j;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | "xl" | null>(null);
    return <div className="p-8 space-y-4">\r
        <div className="flex flex-wrap gap-4">\r
          <CTA onClick={() => setOpenSize("sm")}>Small Modal (SM)</CTA>\r
          <CTA onClick={() => setOpenSize("md")}>Medium Modal (MD)</CTA>\r
          <CTA onClick={() => setOpenSize("lg")}>Large Modal (LG)</CTA>\r
          <CTA onClick={() => setOpenSize("xl")}>Extra Large Modal (XL)</CTA>\r
        </div>\r
\r
        {(["sm", "md", "lg", "xl"] as const).map(size => <Modal key={size} isOpen={openSize === size} onClose={() => setOpenSize(null)} title={\`Modal \${size.toUpperCase()}\`} description={\`This is a \${size} modal\`} size={size} primaryAction={{
        label: "Accept",
        onClick: () => setOpenSize(null)
      }}>\r
            <div className="text-gray-700">\r
              <p>Content of the {size} modal</p>\r
            </div>\r
          </Modal>)}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the different sizes available for the modal."
      }
    }
  }
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var q,T,w;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>Open modal with long content</CTA>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms and Conditions" size="lg" primaryAction={{
        label: "Accept",
        onClick: () => setIsOpen(false)
      }} secondaryAction={{
        label: "Reject",
        onClick: () => setIsOpen(false)
      }}>\r
          <div className="text-gray-700 space-y-4 max-h-96 overflow-y-auto pr-2">\r
            <p>\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\r
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.\r
            </p>\r
            <p>\r
              Duis aute irure dolor in reprehenderit in voluptate velit esse\r
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r
              cupidatat non proident, sunt in culpa qui officia deserunt mollit\r
              anim id est laborum.\r
            </p>\r
            <p>\r
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem\r
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa\r
              quae ab illo inventore veritatis et quasi architecto beatae vitae\r
              dicta sunt explicabo.\r
            </p>\r
            <p>\r
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\r
              aut fugit, sed quia consequuntur magni dolores eos qui ratione\r
              voluptatem sequi nesciunt.\r
            </p>\r
            <p>\r
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,\r
              consectetur, adipisci velit, sed quia non numquam eius modi\r
              tempora incidunt ut labore et dolore magnam aliquam quaerat\r
              voluptatem.\r
            </p>\r
            <p>\r
              Ut enim ad minima veniam, quis nostrum exercitationem ullam\r
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\r
              consequatur?\r
            </p>\r
          </div>\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with long content that demonstrates the internal scroll of the content."
      }
    }
  }
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,N,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>Open modal with only title</CTA>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Simple Modal">\r
          <p className="text-gray-700">\r
            This modal only has a title, without description.\r
          </p>\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with only title, without description or actions."
      }
    }
  }
}`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var L,B,E;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
      setIsLoading(true);
      // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
        alert("Operation completed!");
        setIsOpen(false);
      }, 2000);
    };
    return <div className="p-8">\r
        <CTA onClick={() => setIsOpen(true)}>\r
          Open modal with disabled actions\r
        </CTA>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Process Information" description="This action may take a few seconds" primaryAction={{
        label: isLoading ? "Processing..." : "Process",
        onClick: handleSubmit,
        variant: "primary",
        disabled: isLoading
      }} secondaryAction={{
        label: "Cancel",
        onClick: () => setIsOpen(false),
        variant: "secondary",
        disabled: isLoading
      }}>\r
          <div className="text-gray-700">\r
            <p>\r
              During the processing, the buttons will be disabled.\r
            </p>\r
          </div>\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example of modal with actions that can be disabled according to the state."
      }
    }
  }
}`,...(E=(B=u.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var D,W,R;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="p-8 space-y-4">\r
        <div className="space-y-2">\r
          <p className="text-gray-700">\r
            Modal state: {isOpen ? "Open" : "Closed"}\r
          </p>\r
          <div className="flex gap-4">\r
            <CTA onClick={() => setIsOpen(true)}>Open Modal</CTA>\r
            <CTA variant="secondary" onClick={() => setIsOpen(false)}>\r
              Close Modal\r
            </CTA>\r
            <CTA variant="tertiary" onClick={() => setIsOpen(!isOpen)}>\r
              Toggle state\r
            </CTA>\r
          </div>\r
        </div>\r
\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Controlled Modal" description="The state of this modal is controlled externally" primaryAction={{
        label: "Close",
        onClick: () => setIsOpen(false)
      }}>\r
          <p className="text-gray-700">\r
            This modal can be opened and closed from external buttons.\r
          </p>\r
        </Modal>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example of modal with state controlled externally from multiple buttons."
      }
    }
  }
}`,...(R=(W=h.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const J=["ModalDefault","ModalWithActions","ModalWithoutCloseButton","ModalSizes","ModalWithLongContent","ModalTitleOnly","ModalWithDisabledActions","ModalControlled"];export{h as ModalControlled,r as ModalDefault,d as ModalSizes,m as ModalTitleOnly,l as ModalWithActions,u as ModalWithDisabledActions,p as ModalWithLongContent,c as ModalWithoutCloseButton,J as __namedExportsOrder,F as default};
