import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as b,R as Tt}from"./iframe-DipnVlAM.js";import"./Button-Dmo6RmjD.js";import"./ColorSystemSelector-DSjHt-Ck.js";import"./BaseLayout-xvdTbfGv.js";import{C as Et,a as Pt,P as $t}from"./icons-vHqGCt2y.js";import"./index-DL_IaSFy.js";import{I as qt}from"./Input-BPJhsZKz.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./DarkModeToggle-mG4lsO80.js";import"./SidebarMenu-CNo5jk4q.js";import"./BaseComponents-ClchX4--.js";const _=4,ye=8;function mt({data:t,columns:r,selectable:s=!0,selectedRows:i,sortColumn:g,sortDirection:l,onSort:u,onRowSelect:h,onSelectAll:n,expandableRow:o,expandedRows:y=new Set,onToggleExpand:d,rowActions:w}){const[c,C]=b.useState(null),N=b.useRef(null),j=t.length>0&&i.length===t.length,T=i.length>0&&i.length<t.length,$=w&&w.length>0;b.useEffect(()=>{if(!c)return;function a(k){N.current&&!N.current.contains(k.target)&&C(null)}function S(k){k.key==="Escape"&&C(null)}return document.addEventListener("pointerdown",a),document.addEventListener("keydown",S),()=>{document.removeEventListener("pointerdown",a),document.removeEventListener("keydown",S)}},[c]),b.useLayoutEffect(()=>{if(!c||!N.current)return;const a=N.current.offsetHeight,S=window.innerHeight-c.triggerBottom-_,k=c.triggerTop-_;let A=c.triggerBottom+_;a>S&&k>S&&(A=c.triggerTop-a-_),A=Math.min(A,window.innerHeight-a-ye),A=Math.max(ye,A),A!==c.top&&C(U=>U?{...U,top:A}:null)},[c==null?void 0:c.rowId,c==null?void 0:c.triggerBottom]);function z(a,S){if((c==null?void 0:c.rowId)===S){C(null);return}const k=a.currentTarget.getBoundingClientRect();C({rowId:S,top:k.bottom+_,right:window.innerWidth-k.right,triggerTop:k.top,triggerBottom:k.bottom})}function F(a,S){C(null),a.onClick(S)}const v=a=>g!==a?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 4L12 8H4L8 4Z",fill:"currentColor",opacity:"0.3"})}):l==="asc"?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 4L4 8H12L8 4Z",fill:"currentColor"})}):e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 12L12 8H4L8 12Z",fill:"currentColor"})}),q=(a,S)=>{if(a.render)return a.render(S[a.key],S);const k=S[a.key];if(a.key==="status"){const A={Pending:"bg-amber-300",Confirmed:"bg-green-300",Cancelled:"bg-red-300",Completed:"bg-blue-300"};return e.jsx("div",{className:`px-2 py-1 ${A[k]||"bg-gray-300"} rounded-full text-xs font-medium`,children:k})}return e.jsx("div",{className:"text-sm text-gray-800 font-normal line-clamp-2",children:k})};if(t.length===0)return e.jsx("div",{className:"w-full h-40 flex items-center justify-center bg-white rounded-lg border",children:e.jsx("div",{className:"text-gray-500 text-sm",children:"No data to show."})});const I=(w==null?void 0:w.filter(a=>a.variant!=="danger"))??[],p=(w==null?void 0:w.filter(a=>a.variant==="danger"))??[],x=c?t.find((a,S)=>(a.id??S.toString())===c.rowId):null;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full bg-white rounded-b-lg border border-gray-200 overflow-x-scroll md:overflow-hidden",children:[e.jsx("div",{className:"bg-gray-50 border-b border-gray-200",children:e.jsxs("div",{className:"flex",children:[s&&e.jsx("div",{className:"w-16 p-4 flex items-center justify-center",children:e.jsx("input",{type:"checkbox",checked:j,ref:a=>{a&&(a.indeterminate=T)},onChange:n,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"})}),r.map(a=>e.jsx("div",{className:`flex-1 p-4 ${a.width?a.width:""}`,children:e.jsxs("button",{onClick:()=>a.sortable&&u(a.key),className:`w-full flex items-center justify-between text-sm font-semibold text-gray-800 uppercase tracking-wider ${a.sortable?"cursor-pointer hover:text-blue-600":"cursor-default"}`,disabled:!a.sortable,children:[a.label,a.sortable&&e.jsx("span",{className:"ml-2 text-gray-400",children:v(a.key)})]})},a.key)),$&&e.jsx("div",{className:"w-16 p-4"})]})}),e.jsx("div",{className:"divide-y divide-gray-200",children:t.map((a,S)=>{const k=a.id??S.toString(),A=(o==null?void 0:o.enabled)&&y.has(k),U=(o==null?void 0:o.enabled)&&(o.expandableField?a[o.expandableField]:o.renderExpandedContent),Z=(c==null?void 0:c.rowId)===k;return e.jsxs(Tt.Fragment,{children:[e.jsxs("div",{className:"flex hover:bg-gray-50",children:[s&&e.jsx("div",{className:"w-16 p-4 flex items-center justify-center",children:e.jsx("input",{type:"checkbox",checked:i.includes(k),onChange:()=>h(k),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"})}),r.map(E=>e.jsx("div",{className:`flex-1 p-4 ${E.width?E.width:""} ${E.maxWidth?E.maxWidth:""}`,children:q(E,a)},E.key)),$&&e.jsxs("div",{className:"w-16 p-4 flex items-center justify-center",children:[e.jsx("button",{onClick:E=>z(E,k),"aria-label":"Row actions","aria-expanded":Z,className:`rounded-md p-1 transition-colors ${Z?"bg-gray-100 text-gray-700":"text-gray-400 hover:bg-gray-100 hover:text-gray-600"}`,children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})})}),U&&e.jsx("button",{onClick:()=>d==null?void 0:d(k),className:"text-gray-400 hover:text-gray-600","aria-label":A?"Collapse row":"Expand row",children:e.jsx("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",className:`transition-transform ${A?"rotate-180":""}`,children:e.jsx("path",{d:"M1 1L6 6L11 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),A&&U&&e.jsx("div",{className:"bg-gray-50 border-t border-gray-200",children:o.renderExpandedContent?o.renderExpandedContent(a):o.expandableField&&a[o.expandableField]?e.jsx("div",{className:"p-4",children:Array.isArray(a[o.expandableField])&&a[o.expandableField].length>0?e.jsx("div",{className:"space-y-2",children:a[o.expandableField].map((E,H)=>e.jsxs("div",{className:"p-4 border-b border-slate-100 last:border-b-0 flex justify-between items-center bg-white rounded",children:[e.jsx("div",{className:"w-48 text-sm font-semibold text-neutral-900",children:E.name}),e.jsxs("div",{className:"w-14 text-right text-sm font-normal text-neutral-900",children:["Qty: ",E.qty??"n/a"]}),e.jsx("div",{className:"w-14 text-right text-sm font-semibold text-neutral-900",children:E.price??"$0.00"})]},H))}):e.jsx("div",{className:"text-sm text-gray-500",children:"No items available"})}):null})]},k)})})]}),c&&x&&$&&e.jsxs("div",{ref:N,role:"menu","aria-label":"Row actions",style:{position:"fixed",top:c.top,right:c.right,zIndex:50},className:"w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg",children:[I.map(a=>e.jsxs("button",{role:"menuitem",disabled:a.disabled,onClick:()=>F(a,x),className:["flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",a.disabled?"cursor-not-allowed text-gray-300":"cursor-pointer text-gray-700 hover:bg-gray-50"].join(" "),children:[a.icon&&e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center text-gray-400",children:a.icon}),a.label]},a.label)),I.length>0&&p.length>0&&e.jsx("div",{className:"my-1 border-t border-gray-100"}),p.map(a=>e.jsxs("button",{role:"menuitem",disabled:a.disabled,onClick:()=>F(a,x),className:["flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",a.disabled?"cursor-not-allowed text-red-200":"cursor-pointer text-red-600 hover:bg-red-50"].join(" "),children:[a.icon&&e.jsx("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center text-red-400",children:a.icon}),a.label]},a.label))]})]})}mt.__docgenInfo={description:"",methods:[],displayName:"TableContent",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TableData"}],raw:"TableData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectedRows:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},sortColumn:{required:!0,tsType:{name:"string"},description:""},sortDirection:{required:!0,tsType:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},description:""},onSort:{required:!0,tsType:{name:"signature",type:"function",raw:"(column: string) => void",signature:{arguments:[{type:{name:"string"},name:"column"}],return:{name:"void"}}},description:""},onRowSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(rowId: string) => void",signature:{arguments:[{type:{name:"string"},name:"rowId"}],return:{name:"void"}}},description:""},onSelectAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},expandableRow:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  enabled: boolean;\r
  renderExpandedContent?: (row: TableData) => React.ReactNode;\r
  expandableField?: string;\r
}`,signature:{properties:[{key:"enabled",value:{name:"boolean",required:!0}},{key:"renderExpandedContent",value:{name:"signature",type:"function",raw:"(row: TableData) => React.ReactNode",signature:{arguments:[{type:{name:"TableData"},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"expandableField",value:{name:"string",required:!1}}]}},description:""},expandedRows:{required:!1,tsType:{name:"Set",elements:[{name:"string"}],raw:"Set<string>"},description:"",defaultValue:{value:"new Set()",computed:!1}},onToggleExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(rowId: string) => void",signature:{arguments:[{type:{name:"string"},name:"rowId"}],return:{name:"void"}}},description:""},rowActions:{required:!1,tsType:{name:"Array",elements:[{name:"RowAction"}],raw:"RowAction[]"},description:""}}};function pt({isOpen:t,onClose:r,anchorRect:s,children:i,className:g,align:l="right"}){const u=b.useRef(null);if(b.useEffect(()=>{if(!t)return;function n(y){u.current&&!u.current.contains(y.target)&&r()}function o(y){y.key==="Escape"&&r()}return document.addEventListener("pointerdown",n),document.addEventListener("keydown",o),()=>{document.removeEventListener("pointerdown",n),document.removeEventListener("keydown",o)}},[t,r]),!t||!s)return null;const h=l==="right"?{top:s.bottom+4,right:window.innerWidth-s.right}:{top:s.bottom+4,left:s.left};return e.jsx("div",{ref:u,style:{position:"fixed",zIndex:50,...h},className:`rounded-lg border border-gray-200 bg-white shadow-lg ${g??""}`,children:i})}pt.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchorRect:{required:!1,tsType:{name:"union",raw:"DOMRect | null",elements:[{name:"DOMRect"},{name:"null"}]},description:"DOMRect of the trigger element used to anchor the popover."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Which edge of the anchor to align the popover to.\r
- 'right': popover's right edge aligns with anchor's right edge (default)\r
- 'left': popover's left edge aligns with anchor's left edge`,defaultValue:{value:"'right'",computed:!1}}}};function Dt({filter:t,value:r,onChange:s}){var i,g;switch(t.type){case"boolean":{const l=[{label:"All",val:void 0},{label:"Yes",val:!0},{label:"No",val:!1}];return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:t.label}),e.jsx("div",{className:"flex gap-1.5",children:l.map(u=>e.jsx("button",{type:"button",onClick:()=>s(u.val),className:`px-3 py-1 rounded-full text-xs font-medium transition-colors ${r===u.val?"bg-blue-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:u.label},String(u.val)))})]})}case"select":return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:t.label}),e.jsx("div",{className:"space-y-1",children:(i=t.options)==null?void 0:i.map(l=>{const u=r===l.value;return e.jsx("button",{type:"button",onClick:()=>s(u?void 0:l.value),className:`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${u?"bg-blue-50 text-blue-700 font-medium":"text-gray-700 hover:bg-gray-50"}`,children:l.label},l.value)})})]});case"multiselect":{const l=Array.isArray(r)?r:[];return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:t.label}),e.jsx("div",{className:"space-y-1",children:(g=t.options)==null?void 0:g.map(u=>{const h=l.includes(u.value);return e.jsxs("label",{className:"flex items-center gap-2.5 cursor-pointer px-1 py-1 rounded-md hover:bg-gray-50",children:[e.jsx("input",{type:"checkbox",checked:h,onChange:()=>{const n=h?l.filter(o=>o!==u.value):[...l,u.value];s(n.length>0?n:void 0)},className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"}),e.jsx("span",{className:"text-sm text-gray-700",children:u.label})]},u.value)})})]})}case"text":return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:t.label}),e.jsx("input",{type:"text",value:r??"",onChange:l=>s(l.target.value||void 0),placeholder:`Filtrar por ${t.label.toLowerCase()}…`,className:"w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]});case"number":return e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:t.label}),e.jsx("input",{type:"number",value:r??"",onChange:l=>s(l.target.value!==""?Number(l.target.value):void 0),placeholder:`Filtrar por ${t.label.toLowerCase()}…`,className:"w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]});default:return null}}function gt({isOpen:t,onClose:r,anchorRect:s,filters:i,activeFilters:g,onChange:l,onClearAll:u,className:h}){const n=Object.keys(g).length>0;return e.jsxs(pt,{isOpen:t,onClose:r,anchorRect:s,className:`w-72 ${h??""}`,align:"left",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-100",children:[e.jsx("span",{className:"text-sm font-semibold text-gray-800",children:"Filters"}),n&&e.jsx("button",{type:"button",onClick:u,className:"text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors",children:"Clear all"})]}),e.jsx("div",{className:"px-4 py-3 space-y-5 max-h-96 overflow-y-auto",children:i.length===0?e.jsx("p",{className:"text-sm text-gray-400 text-center py-2",children:"No filters available"}):i.map(o=>e.jsx(Dt,{filter:o,value:g[o.key],onChange:y=>l(o.key,y)},o.key))})]})}gt.__docgenInfo={description:"",methods:[],displayName:"FilterPopover",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchorRect:{required:!1,tsType:{name:"union",raw:"DOMRect | null",elements:[{name:"DOMRect"},{name:"null"}]},description:""},filters:{required:!0,tsType:{name:"Array",elements:[{name:"FilterDefinition"}],raw:"FilterDefinition[]"},description:""},activeFilters:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | string[] | boolean | number | undefined",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"boolean"},{name:"number"},{name:"undefined"}]}],raw:"Record<string, FilterValue>"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, value: FilterValue) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:"string | string[] | boolean | number | undefined",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"boolean"},{name:"number"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},onClearAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function bt({totalItems:t,pageSize:r=10,currentPage:s,onPageChange:i,showPageSizeSelector:g=!1,pageSizeOptions:l=[10,20,50,100],onPageSizeChange:u,showTotal:h=!0,className:n=""}){const[o,y]=b.useState(1),[d,w]=b.useState(r),c=s!==void 0,C=c?s:o,N=c?r:d,j=Math.max(1,Math.ceil(t/N)),{startPage:T,endPage:$}=b.useMemo(()=>{let x=Math.max(1,C-Math.floor(3.5)),a=Math.min(j,x+7-1);return a-x<6&&(x=Math.max(1,a-7+1)),{startPage:x,endPage:a}},[C,j]),z=t===0?0:(C-1)*N+1,F=Math.min(C*N,t),v=p=>{p<1||p>j||(c||y(p),i==null||i(p))},q=p=>{const x=Number(p.target.value),a=Math.ceil(t/x),S=Math.min(C,a);c?(u==null||u(x),i&&i(1)):(w(x),y(S),u==null||u(x),i==null||i(S))},I=b.useMemo(()=>{const p=[];if(j<=7)for(let x=1;x<=j;x++)p.push(x);else{p.push(1),T>2&&p.push("ellipsis");for(let x=T;x<=$;x++)x!==1&&x!==j&&p.push(x);$<j-1&&p.push("ellipsis"),j>1&&p.push(j)}return p},[T,$,j]);return t===0?e.jsx("div",{className:`flex items-center justify-between px-4 py-3 border-t border-slate-200 ${n}`,children:e.jsx("div",{className:"text-sm text-slate-600",children:"No items to display"})}):e.jsxs("div",{className:`flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t border-slate-200 ${n}`,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[h&&e.jsxs("div",{className:"text-sm text-slate-600",children:["Showing ",e.jsx("span",{className:"font-medium",children:z})," to"," ",e.jsx("span",{className:"font-medium",children:F})," of"," ",e.jsx("span",{className:"font-medium",children:t})," results"]}),g&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"page-size-select",className:"text-sm text-slate-600",children:"Show:"}),e.jsx("select",{id:"page-size-select",value:N,onChange:q,className:"px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-900",children:l.map(p=>e.jsx("option",{value:p,children:p},p))})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>v(C-1),disabled:C===1,className:"flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2","aria-label":"Previous page",children:e.jsx(Et,{className:"w-4 h-4"})}),e.jsx("div",{className:"flex items-center gap-1",children:I.map((p,x)=>{if(p==="ellipsis")return e.jsx("span",{className:"px-2 text-slate-500",children:"..."},`ellipsis-${x}`);const a=p===C;return e.jsx("button",{type:"button",onClick:()=>v(p),className:`flex items-center justify-center min-w-[36px] h-9 px-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${a?"bg-sky-500 text-white border-sky-500 font-medium":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,"aria-label":`Go to page ${p}`,"aria-current":a?"page":void 0,children:p},p)})}),e.jsx("button",{type:"button",onClick:()=>v(C+1),disabled:C===j,className:"flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2","aria-label":"Next page",children:e.jsx(Pt,{className:"w-4 h-4"})})]})]})}bt.__docgenInfo={description:`Pagination component for tables and data lists.\r
Can be used in controlled or uncontrolled mode.`,methods:[],displayName:"Pagination",props:{totalItems:{required:!0,tsType:{name:"number"},description:"Total number of items"},pageSize:{required:!1,tsType:{name:"number"},description:"Number of items per page",defaultValue:{value:"10",computed:!1}},currentPage:{required:!1,tsType:{name:"number"},description:"Current page (1-indexed). If provided, component is controlled."},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes"},showPageSizeSelector:{required:!1,tsType:{name:"boolean"},description:"Show page size selector",defaultValue:{value:"false",computed:!1}},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Available page sizes",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:"Callback when page size changes"},showTotal:{required:!1,tsType:{name:"boolean"},description:"Show total items count",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}}}};function Rt(t,r){var i,g,l,u;const s=[];for(const[h,n]of Object.entries(r)){if(n==null||n==="")continue;const o=t.find(y=>y.key===h);if(o)if(o.type==="multiselect"&&Array.isArray(n))for(const y of n){const d=((g=(i=o.options)==null?void 0:i.find(w=>w.value===y))==null?void 0:g.label)??y;s.push({filterKey:h,label:`${o.label}: ${d}`,value:y})}else if(o.type==="boolean")s.push({filterKey:h,label:`${o.label}: ${n===!0?"Yes":"No"}`});else if(o.type==="select"){const y=((u=(l=o.options)==null?void 0:l.find(d=>d.value===String(n)))==null?void 0:u.label)??String(n);s.push({filterKey:h,label:`${o.label}: ${y}`})}else s.push({filterKey:h,label:`${o.label}: ${n}`})}return s}function ft({searchable:t=!0,filterable:r=!0,searchTerm:s,onSearchChange:i,bulkActions:g,onBulkAction:l,selectedCount:u,totalCount:h,filterDefinitions:n,activeFilters:o,onFilterChange:y,onClearAllFilters:d}){const[w,c]=b.useState(!1),[C,N]=b.useState(null),j=b.useRef(null),T=Object.keys(o).length,$=Rt(n,o),z=()=>{var q;if(w){c(!1);return}const v=((q=j.current)==null?void 0:q.getBoundingClientRect())??null;N(v),c(!0)},F=v=>{if(v.value!==void 0){const q=o[v.filterKey],p=(Array.isArray(q)?q:[]).filter(x=>x!==v.value);y(v.filterKey,p.length>0?p:void 0)}else y(v.filterKey,void 0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full rounded-t-lg p-4 bg-white border-b border border-gray-200",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[g.length>0&&e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-600",children:"Bulk actions"}),u>0&&e.jsxs("div",{className:"text-sm text-blue-600 font-medium",children:[u," of ",h," selected"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:g.map(v=>e.jsxs("button",{disabled:u===0,className:"h-10 px-4 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-md flex items-center gap-2 transition-colors",onClick:()=>l(v.action,[]),children:[v.icon,e.jsx("span",{className:"text-sm font-semibold text-gray-600 md:block hidden",children:v.label})]},v.action))})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-3",children:[t&&e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-400",children:e.jsx("path",{d:"M20.3457 18.3164L15.6035 13.5742C15.5137 13.4844 15.3965 13.4375 15.2715 13.4375H14.7559C15.9863 12.0117 16.7324 10.1562 16.7324 8.125C16.7324 3.63672 13.0957 0 8.60742 0C4.11914 0 0.482422 3.63672 0.482422 8.125C0.482422 12.6133 4.11914 16.25 8.60742 16.25C10.6387 16.25 12.4941 15.5039 13.9199 14.2734V14.7891C13.9199 14.9141 13.9707 15.0312 14.0566 15.1211L18.7988 19.8633C18.9824 20.0469 19.2793 20.0469 19.4629 19.8633L20.3457 18.9805C20.5293 18.7969 20.5293 18.5 20.3457 18.3164ZM8.60742 14.375C5.1543 14.375 2.35742 11.5781 2.35742 8.125C2.35742 4.67188 5.1543 1.875 8.60742 1.875C12.0605 1.875 14.8574 4.67188 14.8574 8.125C14.8574 11.5781 12.0605 14.375 8.60742 14.375Z"})})}),e.jsx(qt,{type:"text",placeholder:"Search...",value:s,onChange:v=>i(v.target.value)})]}),r&&n.length>0&&e.jsx("div",{className:"relative",children:e.jsxs("button",{ref:j,type:"button",onClick:z,"aria-label":"Open filters","aria-expanded":w,className:`relative p-2 rounded-md transition-colors ${w||T>0?"bg-blue-50 text-blue-600":"text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M10.8799 13.75H9.94238V0.625C9.94238 0.28125 9.66113 0 9.31738 0H8.69238C8.34863 0 8.06738 0.28125 8.06738 0.625V13.75H7.12988C6.78613 13.75 6.50488 14.0312 6.50488 14.375V15.625C6.50488 15.9688 6.78613 16.25 7.12988 16.25H8.06738V19.375C8.06738 19.7188 8.34863 20 8.69238 20H9.31738C9.66113 20 9.94238 19.7188 9.94238 19.375V16.25H10.8799C11.2236 16.25 11.5049 15.9688 11.5049 15.625V14.375C11.5049 14.0312 11.2236 13.75 10.8799 13.75ZM4.62988 3.75H3.69238V0.625C3.69238 0.28125 3.41113 0 3.06738 0H2.44238C2.09863 0 1.81738 0.28125 1.81738 0.625V3.75H0.879883C0.536133 3.75 0.254883 4.03125 0.254883 4.375V5.625C0.254883 5.96875 0.536133 6.25 0.879883 6.25H1.81738V19.375C1.81738 19.7188 2.09863 20 2.44238 20H3.06738C3.41113 20 3.69238 19.7188 3.69238 19.375V6.25H4.62988C4.97363 6.25 5.25488 5.96875 5.25488 5.625V4.375C5.25488 4.03125 4.97363 3.75 4.62988 3.75ZM17.1299 8.75H16.1924V0.625C16.1924 0.28125 15.9111 0 15.5674 0H14.9424C14.5986 0 14.3174 0.28125 14.3174 0.625V8.75H13.3799C13.0361 8.75 12.7549 9.03125 12.7549 9.375V10.625C12.7549 10.9688 13.0361 11.25 13.3799 11.25H14.3174V19.375C14.3174 19.7188 14.5986 20 14.9424 20H15.5674C15.9111 20 16.1924 19.7188 16.1924 19.375V11.25H17.1299C17.4736 11.25 17.7549 10.9688 17.7549 10.625V9.375C17.7549 9.03125 17.4736 8.75 17.1299 8.75Z"})}),T>0&&e.jsx("span",{className:"absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-bold leading-none",children:T})]})})]})]}),$.length>0&&e.jsxs("div",{className:"flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100",children:[$.map((v,q)=>e.jsxs("span",{className:"inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium",children:[v.label,e.jsx("button",{type:"button",onClick:()=>F(v),"aria-label":`Remove filter ${v.label}`,className:"flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 transition-colors text-blue-500",children:e.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"currentColor",children:e.jsx("path",{d:"M7.5 1.5L4 5 0.5 1.5M0.5 6.5L4 3l3.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"})})})]},q)),$.length>1&&e.jsx("button",{type:"button",onClick:d,className:"text-xs text-gray-500 hover:text-gray-700 font-medium self-center ml-1 transition-colors",children:"Clear all"})]})]}),e.jsx(gt,{isOpen:w,onClose:()=>c(!1),anchorRect:C,filters:n,activeFilters:o,onChange:y,onClearAll:()=>{d(),c(!1)}})]})}ft.__docgenInfo={description:"",methods:[],displayName:"TableControlBar",props:{searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},filterable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},searchTerm:{required:!0,tsType:{name:"string"},description:""},onSearchChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(term: string) => void",signature:{arguments:[{type:{name:"string"},name:"term"}],return:{name:"void"}}},description:""},bulkActions:{required:!0,tsType:{name:"Array",elements:[{name:"BulkAction"}],raw:"BulkAction[]"},description:""},onBulkAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(action: string, selectedRows: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedRows"}],return:{name:"void"}}},description:""},selectedCount:{required:!0,tsType:{name:"number"},description:""},totalCount:{required:!0,tsType:{name:"number"},description:""},filterDefinitions:{required:!0,tsType:{name:"Array",elements:[{name:"FilterDefinition"}],raw:"FilterDefinition[]"},description:""},activeFilters:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | string[] | boolean | number | undefined",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"boolean"},{name:"number"},{name:"undefined"}]}],raw:"Record<string, FilterValue>"},description:""},onFilterChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, value: FilterValue) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:"string | string[] | boolean | number | undefined",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"boolean"},{name:"number"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},onClearAllFilters:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function zt(t,r){return t===r?0:t==null||t===""?1:r==null||r===""?-1:t instanceof Date&&r instanceof Date?t.getTime()-r.getTime():typeof t=="number"&&typeof r=="number"?t-r:typeof t=="boolean"&&typeof r=="boolean"?t===r?0:t?1:-1:String(t).localeCompare(String(r),void 0,{numeric:!0,sensitivity:"base"})}function Lt(t,r){return t.map(s=>{const i=r.map(l=>l[s.key]).filter(l=>l!=null&&l!=="");if(i.length===0)return null;if(i.every(l=>typeof l=="boolean"))return{key:s.key,label:s.label,type:"boolean"};const g=Array.from(new Set(i.map(l=>String(l))));return g.length<=8?{key:s.key,label:s.label,type:"select",options:g.map(l=>({value:l,label:l}))}:{key:s.key,label:s.label,type:"text"}}).filter(Boolean)}function O({data:t,columns:r,onSort:s,onRowSelect:i,bulkActions:g=[],onBulkAction:l,searchable:u=!0,filterable:h=!0,filters:n,expandableRow:o,rowActions:y,pagination:d,className:w=""}){const[c,C]=b.useState([]),[N,j]=b.useState(""),[T,$]=b.useState("asc"),[z,F]=b.useState(""),[v,q]=b.useState(new Set),[I,p]=b.useState((n==null?void 0:n.defaultValues)??{}),x=b.useMemo(()=>{if(!n)return[];const m=n.definitions??[];if(!n.infer)return m;const f=Lt(r,t),D=new Set(m.map(P=>P.key));return[...m,...f.filter(P=>!D.has(P.key))]},[n,r,t]),a=m=>{var D;if(!((D=r.find(P=>P.key===m))!=null&&D.sortable))return;const f=N===m&&T==="asc"?"desc":"asc";j(m),$(f),s==null||s(m,f)},S=m=>{const f=c.includes(m)?c.filter(D=>D!==m):[...c,m];C(f),i==null||i(f)},k=()=>{const m=c.length===t.length?[]:t.map(f=>f.id||f.key);C(m),i==null||i(m)},A=m=>{l==null||l(m,c)},U=m=>{const f=new Set(v);f.has(m)?f.delete(m):f.add(m),q(f)},Z=(m,f)=>{p(D=>{var ge,M;if(f==null||f===""||Array.isArray(f)&&f.length===0){const B={...D};return delete B[m],(ge=n==null?void 0:n.onChange)==null||ge.call(n,B),B}const R={...D,[m]:f};return(M=n==null?void 0:n.onChange)==null||M.call(n,R),R})},E=()=>{var m;p({}),(m=n==null?void 0:n.onChange)==null||m.call(n,{})},H=t.filter(m=>{const f=!z||Object.values(m).some(P=>String(P).toLowerCase().includes(z.toLowerCase())),D=Object.entries(I).every(([P,R])=>{if(R==null||R===""||Array.isArray(R)&&R.length===0)return!0;const M=m[P],B=x.find(At=>At.key===P);if(!B)return!0;switch(B.type){case"boolean":return M===R;case"select":return String(M)===String(R);case"multiselect":return R.includes(String(M));case"text":return String(M).toLowerCase().includes(String(R).toLowerCase());case"number":return Number(M)===Number(R);default:return!0}});return f&&D}),me=b.useMemo(()=>{const m=r.find(f=>f.key===N);return!N||!(m!=null&&m.sortable)?H:[...H].sort((f,D)=>{const P=zt(f[N],D[N]);return T==="asc"?P:-P})},[H,N,T,r]),V=(d==null?void 0:d.currentPage)!==void 0,be=(d==null?void 0:d.pageSize)!==void 0,[pe,K]=b.useState((d==null?void 0:d.currentPage)??1),[vt,wt]=b.useState((d==null?void 0:d.pageSize)??10),kt=V?d.currentPage:pe,Y=be?d.pageSize:vt,fe=me.length,G=Math.max(1,Math.ceil(fe/Y)),he=Math.min(kt,G),xe=(he-1)*Y,St=xe+Y,Ct=d!=null&&d.enabled?me.slice(xe,St):me;b.useEffect(()=>{!V&&pe>G&&K(G)},[pe,G,V]),b.useEffect(()=>{V||K(1)},[z,I,V]);const Nt=m=>{var f;V||K(m),(f=d==null?void 0:d.onPageChange)==null||f.call(d,m)},jt=m=>{var f;be||wt(m),V||K(1),(f=d==null?void 0:d.onPageSizeChange)==null||f.call(d,m)};return e.jsxs("div",{className:`w-full ${w}`,children:[e.jsx(ft,{searchable:u,filterable:h,searchTerm:z,onSearchChange:F,bulkActions:g,onBulkAction:A,selectedCount:c.length,totalCount:t.length,filterDefinitions:x,activeFilters:I,onFilterChange:Z,onClearAllFilters:E}),e.jsx(mt,{data:Ct,columns:r,selectable:g.length>0,selectedRows:c,sortColumn:N,sortDirection:T,onSort:a,onRowSelect:S,onSelectAll:k,expandableRow:o,expandedRows:v,onToggleExpand:U,rowActions:y}),(d==null?void 0:d.enabled)&&e.jsx(bt,{totalItems:fe,pageSize:Y,currentPage:he,onPageChange:Nt,showPageSizeSelector:d.showPageSizeSelector,pageSizeOptions:d.pageSizeOptions,onPageSizeChange:jt,showTotal:d.showTotal})]})}O.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"TableData"}],raw:"TableData[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:""},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(column: string, direction: "asc" | "desc") => void',signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedRows"}],return:{name:"void"}}},description:""},bulkActions:{required:!1,tsType:{name:"Array",elements:[{name:"BulkAction"}],raw:"BulkAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},onBulkAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: string, selectedRows: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedRows"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},filterable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},filters:{required:!1,tsType:{name:"TableFiltersConfig"},description:""},expandableRow:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  enabled: boolean;\r
  renderExpandedContent?: (row: TableData) => React.ReactNode;\r
  expandableField?: string;\r
}`,signature:{properties:[{key:"enabled",value:{name:"boolean",required:!0}},{key:"renderExpandedContent",value:{name:"signature",type:"function",raw:"(row: TableData) => React.ReactNode",signature:{arguments:[{type:{name:"TableData"},name:"row"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}},{key:"expandableField",value:{name:"string",required:!1}}]}},description:""},rowActions:{required:!1,tsType:{name:"Array",elements:[{name:"RowAction"}],raw:"RowAction[]"},description:""},pagination:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  enabled: boolean;\r
  pageSize?: number;\r
  currentPage?: number;\r
  onPageChange?: (page: number) => void;\r
  showPageSizeSelector?: boolean;\r
  pageSizeOptions?: number[];\r
  onPageSizeChange?: (pageSize: number) => void;\r
  showTotal?: boolean;\r
}`,signature:{properties:[{key:"enabled",value:{name:"boolean",required:!0}},{key:"pageSize",value:{name:"number",required:!1}},{key:"currentPage",value:{name:"number",required:!1}},{key:"onPageChange",value:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}},required:!1}},{key:"showPageSizeSelector",value:{name:"boolean",required:!1}},{key:"pageSizeOptions",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1}},{key:"onPageSizeChange",value:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}},required:!1}},{key:"showTotal",value:{name:"boolean",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ft=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,i)=>i?i.toUpperCase():s.toLowerCase()),ve=t=>{const r=Ft(t);return r.charAt(0).toUpperCase()+r.slice(1)},ht=(...t)=>t.filter((r,s,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===s).join(" ").trim(),Mt=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=b.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:g="",children:l,iconNode:u,...h},n)=>b.createElement("svg",{ref:n,...Ut,width:r,height:r,stroke:t,strokeWidth:i?Number(s)*24/Number(r):s,className:ht("lucide",g),...!l&&!Mt(h)&&{"aria-hidden":"true"},...h},[...u.map(([o,y])=>b.createElement(o,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=(t,r)=>{const s=b.forwardRef(({className:i,...g},l)=>b.createElement(Vt,{ref:l,iconNode:r,className:ht(`lucide-${It(ve(t))}`,`lucide-${t}`,i),...g}));return s.displayName=ve(t),s};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",key:"5z9253"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",key:"19zklq"}]],Ht=Bt("axe",Ot),nr={title:"Components/Table",component:O,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{searchable:{control:"boolean",description:"If the table have search"},filterable:{control:"boolean",description:"If the table have filters"},onSort:{action:"sorted",description:"Callback for culumn  order."},onRowSelect:{action:"rowSelected",description:"Callback for column selection."},onBulkAction:{action:"bulkAction",description:"Callback for bulk actions."}}},W=[{id:"1",name:"Craig Fisher",email:"craigf@example.com",role:"Admin",status:"Active",lastLogin:"2025-06-15"},{id:"2",name:"Chanda Roberts",email:"chanda_r@example.com",role:"User",status:"Inactive",lastLogin:"2023-01-10"},{id:"3",name:"Zephania Holt",email:"zeph_holt@example.com",role:"Editor",status:"Active",lastLogin:"2025-07-14"},{id:"4",name:"Ana Martinez",email:"ana@example.com",role:"User",status:"Active",lastLogin:"2025-08-29"},{id:"5",name:"Victoria Roberts",email:"vic_rob@example.com",role:"Admin",status:"Inactive",lastLogin:"2023-04-08"}],L=[{key:"name",label:"Name",sortable:!0,width:"w-48"},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0,render:t=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${t==="Active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t})},{key:"lastLogin",label:"Last Login",sortable:!0}],xt=[{id:"P001",name:"Laptop Pro",category:"Electronics",price:"$1,299",stock:45,status:"In Stock"},{id:"P002",name:"Mouse Wireless",category:"Accesories",price:"$29.99",stock:120,status:"In Stock"},{id:"P003",name:"Keyboard with lazer lights",category:"Accesories",price:"$89.99",stock:0,status:"Out of Stock"},{id:"P004",name:"Monitor 4K",category:"Electronics",price:"$499.99",stock:12,status:"Low Stock"}],yt=[{key:"id",label:"ID",sortable:!0,width:"w-20"},{key:"name",label:"Name",sortable:!0,width:"w-48"},{key:"category",label:"Categy",sortable:!0},{key:"price",label:"Price",sortable:!0},{key:"stock",label:"Stock",sortable:!0},{key:"status",label:"Status",sortable:!0,render:t=>{const r={"In Stock":"bg-green-100 text-green-800","Out of Stock":"bg-red-100 text-red-800","Low Stock":"bg-yellow-100 text-yellow-800"};return e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${r[t]||"bg-gray-100 text-gray-800"}`,children:t})}}],J={args:{data:W,columns:L,searchable:!0,filterable:!0}},Q={args:{data:W,columns:L,searchable:!1,filterable:!0}},X={args:{data:W,columns:L,searchable:!0,filterable:!1}},ee={args:{data:xt,columns:yt,searchable:!0,filterable:!0}},te={args:{data:[],columns:L,searchable:!0,filterable:!0}},re={args:{data:Array.from({length:50},(t,r)=>({id:(r+1).toString(),name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":r%2===0?"Editor":"User",status:r%4===0?"Inactive":"Active",lastLogin:`2024-01-${String(r%28+1).padStart(2,"0")}`})),columns:L,searchable:!0,filterable:!0}},ae={args:{data:Array.from({length:25},(t,r)=>({id:(r+1).toString(),name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":r%2===0?"Editor":"User",status:r%4===0?"Inactive":"Active",lastLogin:`2024-01-${String(r%28+1).padStart(2,"0")}`})),columns:L,searchable:!0,filterable:!0,pagination:{enabled:!0,pageSize:5,showTotal:!0}}},ne={args:{data:Array.from({length:30},(t,r)=>({id:(r+1).toString(),name:`User ${r+1}`,email:`user${r+1}@example.com`,role:r%3===0?"Admin":r%2===0?"Editor":"User",status:r%4===0?"Inactive":"Active",lastLogin:`2024-01-${String(r%28+1).padStart(2,"0")}`})),columns:L,searchable:!0,filterable:!0,pagination:{enabled:!0,pageSize:10,showPageSizeSelector:!0,pageSizeOptions:[5,10,20,50],showTotal:!0}}},se={render:()=>{const[t,r]=b.useState(1),[s,i]=b.useState(5),g=Array.from({length:30},(h,n)=>({id:(n+1).toString(),name:`User ${n+1}`,email:`user${n+1}@example.com`,role:n%3===0?"Admin":n%2===0?"Editor":"User",status:n%4===0?"Inactive":"Active",lastLogin:`2024-01-${String(n%28+1).padStart(2,"0")}`})),l=[{label:"Chop Trees",action:"chop",icon:e.jsx(Ht,{})},{label:"Print Tickets",action:"print",icon:e.jsx($t,{})}];function u(h,n){alert(`Executed ${h} on ${n.length} rows`)}return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800",children:"Pagination State"}),e.jsxs("p",{className:"text-blue-600 text-sm",children:["Current Page: ",t," | Page Size: ",s," | Total Items: ",g.length]})]}),e.jsx(O,{data:g,columns:L,bulkActions:l,onBulkAction:u,searchable:!0,filterable:!0,pagination:{enabled:!0,currentPage:t,pageSize:s,onPageChange:r,onPageSizeChange:i,showPageSizeSelector:!0,pageSizeOptions:[5,10,20,50],showTotal:!0}})]})}},le={args:{data:W,columns:[...L,{key:"actions",label:"Actions",sortable:!1,width:"w-32",render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-2 py-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600",children:"Edit"}),e.jsx("button",{className:"px-2 py-2 bg-red-500 text-white text-xs rounded hover:bg-red-600",children:"Delete"})]})}],searchable:!0,filterable:!0}},ie={render:()=>{const[t,r]=b.useState(W),[s,i]=b.useState([]),g=(h,n)=>{const o=[...t].sort((y,d)=>{const w=y[h],c=d[h];return n==="asc"?w<c?-1:w>c?1:0:w>c?-1:w<c?1:0});r(o)},l=h=>{i(h)},u=(h,n)=>{alert(`Executed ${h} on ${n.length} rows`)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-blue-800",children:"Table state"}),e.jsxs("p",{className:"text-blue-600 text-sm",children:["Selected rows: ",s.length," | Total: ",t.length]})]}),e.jsx(O,{data:t,columns:L,onSort:g,onRowSelect:l,onBulkAction:u,searchable:!0,filterable:!0,filters:{definitions:[{key:"status",label:"Status",type:"select",options:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]}]}})]})}},oe={name:"Filters / Explicit Definitions",render:()=>{const t=[{id:"1",name:"Craig Fisher",email:"craig@example.com",role:"Admin",status:"Active",verified:!0},{id:"2",name:"Chanda Roberts",email:"chanda@example.com",role:"User",status:"Inactive",verified:!1},{id:"3",name:"Zephania Holt",email:"zeph@example.com",role:"Editor",status:"Active",verified:!0},{id:"4",name:"Ana Martinez",email:"ana@example.com",role:"User",status:"Active",verified:!1},{id:"5",name:"Victoria Roberts",email:"vic@example.com",role:"Admin",status:"Inactive",verified:!0},{id:"6",name:"Marcus Lee",email:"marcus@example.com",role:"Editor",status:"Active",verified:!0},{id:"7",name:"Priya Nair",email:"priya@example.com",role:"User",status:"Active",verified:!1}],r=[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0,render:s=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${s==="Active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:s})},{key:"verified",label:"Verified",sortable:!0,render:s=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${s?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-500"}`,children:s?"Yes":"No"})}];return e.jsx(O,{data:t,columns:r,searchable:!0,filterable:!0,filters:{definitions:[{key:"role",label:"Role",type:"multiselect",options:[{value:"Admin",label:"Admin"},{value:"Editor",label:"Editor"},{value:"User",label:"User"}]},{key:"status",label:"Status",type:"select",options:[{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}]},{key:"verified",label:"Verified",type:"boolean"}]}})}},de={name:"Filters / Auto-inferred",args:{data:xt,columns:yt,searchable:!0,filterable:!0,filters:{infer:!0}}},ce={name:"Filters / Controlled (with state)",render:()=>{const[t,r]=b.useState({}),s=[{id:"1",name:"Craig Fisher",role:"Admin",status:"Active",department:"Engineering",verified:!0},{id:"2",name:"Chanda Roberts",role:"User",status:"Inactive",department:"Marketing",verified:!1},{id:"3",name:"Zephania Holt",role:"Editor",status:"Active",department:"Design",verified:!0},{id:"4",name:"Ana Martinez",role:"User",status:"Active",department:"Engineering",verified:!1},{id:"5",name:"Victoria Roberts",role:"Admin",status:"Inactive",department:"Marketing",verified:!0},{id:"6",name:"Marcus Lee",role:"Editor",status:"Active",department:"Design",verified:!0},{id:"7",name:"Priya Nair",role:"User",status:"Active",department:"Engineering",verified:!1}],i=[{key:"name",label:"Name",sortable:!1},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"verified",label:"Verified",sortable:!0,render:g=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${g?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-500"}`,children:g?"Yes":"No"})}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 border border-gray-200 rounded-lg p-4",children:[e.jsx("p",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1",children:"Active filters (onChange output)"}),e.jsx("pre",{className:"text-sm text-gray-800 font-mono",children:Object.keys(t).length===0?"none":JSON.stringify(t,null,2)})]}),e.jsx(O,{data:s,columns:i,searchable:!0,filterable:!0,filters:{definitions:[{key:"role",label:"Role",type:"multiselect",options:[{value:"Admin",label:"Admin"},{value:"Editor",label:"Editor"},{value:"User",label:"User"}]},{key:"department",label:"Department",type:"select",options:[{value:"Engineering",label:"Engineering"},{value:"Marketing",label:"Marketing"},{value:"Design",label:"Design"}]},{key:"verified",label:"Verified",type:"boolean"}],infer:!0,onChange:r}})]})}},ue={args:{data:[{id:"1",name:"Simple text",number:42,boolean:!0,date:"2024-01-15",array:["item1","item2"]},{id:"2",name:"Another text",number:3.14,boolean:!1,date:"2027-06-15",array:["item3"]}],columns:[{key:"name",label:"Text",sortable:!0},{key:"number",label:"Number",sortable:!0},{key:"boolean",label:"Boolean",sortable:!0},{key:"date",label:"Date",sortable:!0},{key:"array",label:"Array",sortable:!1,render:t=>e.jsx("span",{className:"text-sm text-gray-600",children:Array.isArray(t)?t.join(", "):String(t)})}],searchable:!0,filterable:!0}};var we,ke,Se;J.parameters={...J.parameters,docs:{...(we=J.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    data: userData,
    columns: userColumns,
    searchable: true,
    filterable: true
  }
}`,...(Se=(ke=J.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Ce,Ne,je;Q.parameters={...Q.parameters,docs:{...(Ce=Q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    data: userData,
    columns: userColumns,
    searchable: false,
    filterable: true
  }
}`,...(je=(Ne=Q.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Ae,Te,Ee;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    data: userData,
    columns: userColumns,
    searchable: true,
    filterable: false
  }
}`,...(Ee=(Te=X.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Pe,$e,qe;ee.parameters={...ee.parameters,docs:{...(Pe=ee.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    data: productData,
    columns: productColumns,
    searchable: true,
    filterable: true
  }
}`,...(qe=($e=ee.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var De,Re,ze;te.parameters={...te.parameters,docs:{...(De=te.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    searchable: true,
    filterable: true
  }
}`,...(ze=(Re=te.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var Le,Ie,Fe;re.parameters={...re.parameters,docs:{...(Le=re.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    data: Array.from({
      length: 50
    }, (_, i) => ({
      id: (i + 1).toString(),
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: \`2024-01-\${String(i % 28 + 1).padStart(2, '0')}\`
    })),
    columns: userColumns,
    searchable: true,
    filterable: true
  }
}`,...(Fe=(Ie=re.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var Me,Ue,Ve;ae.parameters={...ae.parameters,docs:{...(Me=ae.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    data: Array.from({
      length: 25
    }, (_, i) => ({
      id: (i + 1).toString(),
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: \`2024-01-\${String(i % 28 + 1).padStart(2, '0')}\`
    })),
    columns: userColumns,
    searchable: true,
    filterable: true,
    pagination: {
      enabled: true,
      pageSize: 5,
      showTotal: true
    }
  }
}`,...(Ve=(Ue=ae.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var Be,Oe,He;ne.parameters={...ne.parameters,docs:{...(Be=ne.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    data: Array.from({
      length: 30
    }, (_, i) => ({
      id: (i + 1).toString(),
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: \`2024-01-\${String(i % 28 + 1).padStart(2, '0')}\`
    })),
    columns: userColumns,
    searchable: true,
    filterable: true,
    pagination: {
      enabled: true,
      pageSize: 10,
      showPageSizeSelector: true,
      pageSizeOptions: [5, 10, 20, 50],
      showTotal: true
    }
  }
}`,...(He=(Oe=ne.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var _e,We,Ze;se.parameters={...se.parameters,docs:{...(_e=se.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const paginatedData = Array.from({
      length: 30
    }, (_, i) => ({
      id: (i + 1).toString(),
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: \`2024-01-\${String(i % 28 + 1).padStart(2, '0')}\`
    }));
    const bulkActions = [{
      label: "Chop Trees",
      action: "chop",
      icon: <AxeIcon />
    }, {
      label: "Print Tickets",
      action: "print",
      icon: <PrintIcon />
    }];
    function handleBulkAction(action: string, rows: string[]) {
      alert(\`Executed \${action} on \${rows.length} rows\`);
    }
    return <div className="space-y-4">\r
        <div className="bg-blue-50 p-4 rounded-lg">\r
          <h3 className="font-semibold text-blue-800">Pagination State</h3>\r
          <p className="text-blue-600 text-sm">\r
            Current Page: {currentPage} | Page Size: {pageSize} | Total Items: {paginatedData.length}\r
          </p>\r
        </div>\r
\r
        <Table data={paginatedData} columns={userColumns} bulkActions={bulkActions} onBulkAction={handleBulkAction} searchable={true} filterable={true} pagination={{
        enabled: true,
        currentPage,
        pageSize,
        onPageChange: setCurrentPage,
        onPageSizeChange: setPageSize,
        showPageSizeSelector: true,
        pageSizeOptions: [5, 10, 20, 50],
        showTotal: true
      }} />\r
      </div>;
  }
}`,...(Ze=(We=se.parameters)==null?void 0:We.docs)==null?void 0:Ze.source}}};var Ke,Ye,Ge;le.parameters={...le.parameters,docs:{...(Ke=le.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    data: userData,
    columns: [...userColumns, {
      key: 'actions',
      label: 'Actions',
      sortable: false,
      width: 'w-32',
      render: () => <div className="flex gap-2">\r
            <button className="px-2 py-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">\r
              Edit\r
            </button>\r
            <button className="px-2 py-2 bg-red-500 text-white text-xs rounded hover:bg-red-600">\r
              Delete\r
            </button>\r
          </div>
    }],
    searchable: true,
    filterable: true
  }
}`,...(Ge=(Ye=le.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Je,Qe,Xe;ie.parameters={...ie.parameters,docs:{...(Je=ie.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(userData);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const handleSort = (column: string, direction: 'asc' | 'desc') => {
      const sorted = [...data].sort((a, b) => {
        const aVal = a[column];
        const bVal = b[column];
        if (direction === 'asc') {
          return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
          return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
      });
      setData(sorted);
    };
    const handleRowSelect = (rows: string[]) => {
      setSelectedRows(rows);
    };
    const handleBulkAction = (action: string, rows: string[]) => {
      //console.log(\`Action: \${action}\`, rows);
      alert(\`Executed \${action} on \${rows.length} rows\`);
    };
    return <div className="space-y-4">\r
        <div className="bg-blue-50 p-4 rounded-lg">\r
          <h3 className="font-semibold text-blue-800">Table state</h3>\r
          <p className="text-blue-600 text-sm">\r
            Selected rows: {selectedRows.length} | Total: {data.length}\r
          </p>\r
        </div>\r
\r
        <Table data={data} columns={userColumns} onSort={handleSort} onRowSelect={handleRowSelect} onBulkAction={handleBulkAction} searchable={true} filterable={true} filters={{
        definitions: [{
          key: "status",
          label: "Status",
          type: "select",
          options: [{
            label: "Active",
            value: "Active"
          }, {
            label: "Inactive",
            value: "Inactive"
          }]
        }]
      }} />\r
      </div>;
  }
}`,...(Xe=(Qe=ie.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var et,tt,rt;oe.parameters={...oe.parameters,docs:{...(et=oe.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: 'Filters / Explicit Definitions',
  render: () => {
    const data: TableData[] = [{
      id: '1',
      name: 'Craig Fisher',
      email: 'craig@example.com',
      role: 'Admin',
      status: 'Active',
      verified: true
    }, {
      id: '2',
      name: 'Chanda Roberts',
      email: 'chanda@example.com',
      role: 'User',
      status: 'Inactive',
      verified: false
    }, {
      id: '3',
      name: 'Zephania Holt',
      email: 'zeph@example.com',
      role: 'Editor',
      status: 'Active',
      verified: true
    }, {
      id: '4',
      name: 'Ana Martinez',
      email: 'ana@example.com',
      role: 'User',
      status: 'Active',
      verified: false
    }, {
      id: '5',
      name: 'Victoria Roberts',
      email: 'vic@example.com',
      role: 'Admin',
      status: 'Inactive',
      verified: true
    }, {
      id: '6',
      name: 'Marcus Lee',
      email: 'marcus@example.com',
      role: 'Editor',
      status: 'Active',
      verified: true
    }, {
      id: '7',
      name: 'Priya Nair',
      email: 'priya@example.com',
      role: 'User',
      status: 'Active',
      verified: false
    }];
    const columns: TableColumn[] = [{
      key: 'name',
      label: 'Name',
      sortable: true
    }, {
      key: 'email',
      label: 'Email',
      sortable: true
    }, {
      key: 'role',
      label: 'Role',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: v => <span className={\`px-2 py-1 rounded-full text-xs font-medium \${v === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}\`}>\r
            {v}\r
          </span>
    }, {
      key: 'verified',
      label: 'Verified',
      sortable: true,
      render: v => <span className={\`px-2 py-1 rounded-full text-xs font-medium \${v ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'}\`}>\r
            {v ? 'Yes' : 'No'}\r
          </span>
    }];
    return <Table data={data} columns={columns} searchable filterable filters={{
      definitions: [{
        key: 'role',
        label: 'Role',
        type: 'multiselect',
        options: [{
          value: 'Admin',
          label: 'Admin'
        }, {
          value: 'Editor',
          label: 'Editor'
        }, {
          value: 'User',
          label: 'User'
        }]
      }, {
        key: 'status',
        label: 'Status',
        type: 'select',
        options: [{
          value: 'Active',
          label: 'Active'
        }, {
          value: 'Inactive',
          label: 'Inactive'
        }]
      }, {
        key: 'verified',
        label: 'Verified',
        type: 'boolean'
      }]
    }} />;
  }
}`,...(rt=(tt=oe.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var at,nt,st;de.parameters={...de.parameters,docs:{...(at=de.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Filters / Auto-inferred',
  args: {
    data: productData,
    columns: productColumns,
    searchable: true,
    filterable: true,
    filters: {
      infer: true
    }
  }
}`,...(st=(nt=de.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var lt,it,ot;ce.parameters={...ce.parameters,docs:{...(lt=ce.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: 'Filters / Controlled (with state)',
  render: () => {
    const [activeFilters, setActiveFilters] = useState<Record<string, unknown>>({});
    const data: TableData[] = [{
      id: '1',
      name: 'Craig Fisher',
      role: 'Admin',
      status: 'Active',
      department: 'Engineering',
      verified: true
    }, {
      id: '2',
      name: 'Chanda Roberts',
      role: 'User',
      status: 'Inactive',
      department: 'Marketing',
      verified: false
    }, {
      id: '3',
      name: 'Zephania Holt',
      role: 'Editor',
      status: 'Active',
      department: 'Design',
      verified: true
    }, {
      id: '4',
      name: 'Ana Martinez',
      role: 'User',
      status: 'Active',
      department: 'Engineering',
      verified: false
    }, {
      id: '5',
      name: 'Victoria Roberts',
      role: 'Admin',
      status: 'Inactive',
      department: 'Marketing',
      verified: true
    }, {
      id: '6',
      name: 'Marcus Lee',
      role: 'Editor',
      status: 'Active',
      department: 'Design',
      verified: true
    }, {
      id: '7',
      name: 'Priya Nair',
      role: 'User',
      status: 'Active',
      department: 'Engineering',
      verified: false
    }];
    const columns: TableColumn[] = [{
      key: 'name',
      label: 'Name',
      sortable: false
    }, {
      key: 'role',
      label: 'Role',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      sortable: true
    }, {
      key: 'department',
      label: 'Department',
      sortable: true
    }, {
      key: 'verified',
      label: 'Verified',
      sortable: true,
      render: v => <span className={\`px-2 py-1 rounded-full text-xs font-medium \${v ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'}\`}>\r
            {v ? 'Yes' : 'No'}\r
          </span>
    }];
    return <div className="space-y-4">\r
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">\r
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Active filters (onChange output)</p>\r
          <pre className="text-sm text-gray-800 font-mono">\r
            {Object.keys(activeFilters).length === 0 ? 'none' : JSON.stringify(activeFilters, null, 2)}\r
          </pre>\r
        </div>\r
\r
        <Table data={data} columns={columns} searchable filterable filters={{
        definitions: [{
          key: 'role',
          label: 'Role',
          type: 'multiselect',
          options: [{
            value: 'Admin',
            label: 'Admin'
          }, {
            value: 'Editor',
            label: 'Editor'
          }, {
            value: 'User',
            label: 'User'
          }]
        }, {
          key: 'department',
          label: 'Department',
          type: 'select',
          options: [{
            value: 'Engineering',
            label: 'Engineering'
          }, {
            value: 'Marketing',
            label: 'Marketing'
          }, {
            value: 'Design',
            label: 'Design'
          }]
        }, {
          key: 'verified',
          label: 'Verified',
          type: 'boolean'
        }],
        infer: true,
        onChange: setActiveFilters
      }} />\r
      </div>;
  }
}`,...(ot=(it=ce.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var dt,ct,ut;ue.parameters={...ue.parameters,docs:{...(dt=ue.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      name: 'Simple text',
      number: 42,
      boolean: true,
      date: '2024-01-15',
      array: ['item1', 'item2']
    }, {
      id: '2',
      name: 'Another text',
      number: 3.14,
      boolean: false,
      date: '2027-06-15',
      array: ['item3']
    }],
    columns: [{
      key: 'name',
      label: 'Text',
      sortable: true
    }, {
      key: 'number',
      label: 'Number',
      sortable: true
    }, {
      key: 'boolean',
      label: 'Boolean',
      sortable: true
    }, {
      key: 'date',
      label: 'Date',
      sortable: true
    }, {
      key: 'array',
      label: 'Array',
      sortable: false,
      render: value => <span className="text-sm text-gray-600">\r
            {Array.isArray(value) ? value.join(', ') : String(value)}\r
          </span>
    }],
    searchable: true,
    filterable: true
  }
}`,...(ut=(ct=ue.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};const sr=["TableDefault","NoSearch","NoFilters","Products","Empty","LargeDataset","WithPagination","WithPaginationAndPageSize","ControlledPagination","CustomColumns","Controlled","WithFiltersExplicit","WithFiltersInferred","WithFiltersControlled","MixedDataTypes"];export{ie as Controlled,se as ControlledPagination,le as CustomColumns,te as Empty,re as LargeDataset,ue as MixedDataTypes,X as NoFilters,Q as NoSearch,ee as Products,J as TableDefault,ce as WithFiltersControlled,oe as WithFiltersExplicit,de as WithFiltersInferred,ae as WithPagination,ne as WithPaginationAndPageSize,sr as __namedExportsOrder,nr as default};
