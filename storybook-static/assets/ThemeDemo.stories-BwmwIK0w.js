import{j as r}from"./jsx-runtime-BjG_zV1W.js";import"./Button-Dmo6RmjD.js";import{D as d}from"./DarkModeToggle-mG4lsO80.js";import{C as n}from"./ColorSystemSelector-DSjHt-Ck.js";import{B as o}from"./Button-Cuh52HaC.js";import"./iframe-DipnVlAM.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./Input-BPJhsZKz.js";import"./BaseComponents-ClchX4--.js";import"./icons-vHqGCt2y.js";const v={title:"Theme/Demo",parameters:{layout:"fullscreen"}},e={render:()=>r.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300",children:r.jsxs("div",{className:"container mx-auto p-8",children:[r.jsx("div",{className:"mb-8 text-center",children:r.jsx(d,{showLabel:!1})}),r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"Theme Demo"}),r.jsx(n,{showLabels:!0,size:"sm",className:"my-4"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[r.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700",children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4",children:"Light/Dark Card"}),r.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"This changes automaticaly between light and dark."}),r.jsx(o,{size:"md",variant:"primary",children:"Action Button"})]}),r.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-600",children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4",children:"Color System"}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("div",{className:"w-4 h-4 bg-cta-primary rounded"}),r.jsx("span",{className:"text-cta-primary dark:text-gray-300",children:"Primary"})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("div",{className:"w-4 h-4 bg-gray-500 rounded"}),r.jsx("span",{className:"text-secondary dark:text-gray-300",children:"Secondary"})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("div",{className:"w-4 h-4 bg-green-500 rounded"}),r.jsx("span",{className:"text-success dark:text-gray-300",children:"Success"})]})]})]}),r.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-6 border border-blue-200 dark:border-gray-600",children:[r.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white mb-4",children:"Gradient"}),r.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:"Los gradientes también se adaptan al tema seleccionado."}),r.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Usa el control de tema en la barra de herramientas para cambiar entre modo claro y oscuro."})]})]})]})})};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">\r
      <div className="container mx-auto p-8">\r
        {/* ThemeToggle en la parte superior */}\r
        <div className="mb-8 text-center">\r
          <DarkModeToggle showLabel={false} />\r
        </div>\r
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">\r
          Theme Demo\r
        </h1>\r
\r
        <ColorSystemSelector showLabels={true} size="sm" className="my-4" />\r
\r
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
          {/* Card 1 */}\r
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">\r
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">\r
              Light/Dark Card\r
            </h3>\r
            <p className="text-gray-600 dark:text-gray-300 mb-4">\r
              This changes automaticaly between light and dark.\r
            </p>\r
            <Button size="md" variant="primary">\r
              Action Button\r
            </Button>\r
          </div>\r
\r
          {/* Card 2 */}\r
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-600">\r
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">\r
              Color System\r
            </h3>\r
            <div className="space-y-2">\r
              <div className="flex items-center space-x-2">\r
                <div className="w-4 h-4 bg-cta-primary rounded"></div>\r
                <span className="text-cta-primary dark:text-gray-300">\r
                  Primary\r
                </span>\r
              </div>\r
              <div className="flex items-center space-x-2">\r
                <div className="w-4 h-4 bg-gray-500 rounded"></div>\r
                <span className="text-secondary dark:text-gray-300">\r
                  Secondary\r
                </span>\r
              </div>\r
              <div className="flex items-center space-x-2">\r
                <div className="w-4 h-4 bg-green-500 rounded"></div>\r
                <span className="text-success dark:text-gray-300">Success</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          {/* Card 3 */}\r
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-6 border border-blue-200 dark:border-gray-600">\r
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">\r
              Gradient\r
            </h3>\r
            <p className="text-gray-600 dark:text-gray-300 mb-4">\r
              Los gradientes también se adaptan al tema seleccionado.\r
            </p>\r
            <div className="text-sm text-gray-500 dark:text-gray-400">\r
              Usa el control de tema en la barra de herramientas para cambiar\r
              entre modo claro y oscuro.\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const u=["ThemeDemo"];export{e as ThemeDemo,u as __namedExportsOrder,v as default};
