// app/layout.tsx
import { useColorSystem } from './hooks/useColorSystem'
import './styles/index.css'
import { Layout } from './components/layout'
import { ChevronLeftIcon } from './icons/icons'
import { sampleSidebarMenuData } from './components/navigation'
import { CTA } from './components/actions/CTA'
import { ColorVariant } from './themes/colorSystem'

function App() {
    useColorSystem('default-light' as ColorVariant)


    const columns = [
        {
            id: 'left-panel',
            title: 'Panel Izquierdo',
            width: '1/3' as const,
            content: (
                <div >
                    <div className="self-stretch p-4 bg-blue-200 rounded-tl-sm rounded-tr-sm border-b border-indigo-300 flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch justify-start text-gray-900 text-base font-bold font-['Mulish'] uppercase tracking-widest">historical data</div>
                    </div>
                    <img className="w-[701px] h-96" src="https://placehold.co/701x394" />
                    <img className="w-[701px] h-96" src="https://placehold.co/701x394" />
                </div>
            )
        },
        {
            id: 'main-content',
            title: 'Lista de Eventos',
            width: '1/3' as const,
            content: (
                <div>
                    <div className="self-stretch flex-1 flex flex-col justify-start items-end">
                        <div className="self-stretch flex flex-col justify-start items-end">
                            <div className="self-stretch p-4 bg-blue-200 rounded-tl-sm rounded-tr-sm border-b border-indigo-300 flex flex-col justify-start items-start gap-2">
                                <div className="self-stretch justify-start text-gray-900 text-base font-bold font-['Mulish'] uppercase tracking-widest">ticket overview</div>
                            </div>
                            <div className="self-stretch py-4 bg-white border-b border-slate-100 flex flex-col justify-center items-center gap-4">
                                <div className="self-stretch inline-flex justify-end items-start gap-4">
                                    <div data-show-help-text="false" data-show-icons="true" data-show-label="false" className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                                        <div className="self-stretch h-10 px-4 bg-slate-100 rounded-lg inline-flex justify-between items-center">
                                            <div className="flex-1 h-10 py-3 flex justify-between items-center">
                                                <div className="flex-1 justify-center text-slate-500 text-base font-semibold font-['Mulish']">Search</div>
                                                <div data-icon="Search" className="size-6 relative overflow-hidden">
                                                    <div className="size-6 left-0 top-0 absolute" />
                                                    <div className="size-5 left-[2px] top-[2px] absolute bg-zinc-900" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-hierarchy="Tertiary" data-size="Small" data-state="Default" className="h-10 flex justify-start items-start">
                                        <div data-icon-left="true" data-icon-right="false" className="self-stretch px-2 bg-slate-100 rounded-lg flex justify-center items-center gap-2">
                                            <div data-icon="Filters" className="size-6 relative overflow-hidden">
                                                <div className="size-6 left-0 top-0 absolute" />
                                                <div className="w-4 h-5 left-[3.59px] top-[2px] absolute overflow-hidden">
                                                    <div className="w-4 h-5 left-0 top-0 absolute bg-gray-900" />
                                                </div>
                                            </div>
                                            <div className="size- p-2.5 flex justify-center items-center gap-2.5">
                                                <div className="justify-center text-gray-900 text-base font-bold font-['Mulish'] uppercase tracking-widest">filter</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-hierarchy="Tertiary" data-size="Small" data-state="Default" className="h-10 flex justify-start items-start">
                                        <div data-icon-left="true" data-icon-right="false" className="self-stretch px-2 bg-slate-100 rounded-lg flex justify-center items-center gap-2">
                                            <div data-icon="Swap" className="size-6 relative overflow-hidden">
                                                <div className="size-6 left-0 top-0 absolute" />
                                                <div className="w-3.5 h-5 left-[5px] top-[2px] absolute overflow-hidden">
                                                    <div className="w-3.5 h-4 left-[0.62px] top-[1.25px] absolute bg-gray-900" />
                                                </div>
                                            </div>
                                            <div className="size- p-2.5 flex justify-center items-center gap-2.5">
                                                <div className="justify-center text-gray-900 text-base font-bold font-['Mulish'] uppercase tracking-widest">sort</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch border-b border-indigo-300 flex flex-col justify-center items-center">
                                    <div className="self-stretch p-4 bg-white border-b border-indigo-300 inline-flex justify-start items-end gap-4">
                                        <div className="flex-1 flex justify-start items-start gap-2">
                                            <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                                <div className="size- inline-flex justify-start items-center gap-2">
                                                    <div className="justify-start text-neutral-900 text-base font-bold font-['Mulish']">Museum</div>
                                                    <div className="justify-start text-sky-600 text-xs font-normal font-['Mulish'] underline">Edit</div>
                                                </div>
                                                <div className="size- inline-flex justify-start items-start gap-2">
                                                    <div className="size- flex justify-start items-start gap-1">
                                                        <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Category:</div>
                                                        <div className="justify-start text-black text-sm font-normal font-['Mulish']">Museum</div>
                                                    </div>
                                                    <div className="size- flex justify-start items-start gap-1">
                                                        <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Type:</div>
                                                        <div className="justify-start text-black text-sm font-normal font-['Mulish']">General Admission</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="size- inline-flex flex-col justify-center items-end gap-2">
                                            <div className="size- inline-flex justify-start items-center gap-1">
                                                <div className="size- px-2 py-1 bg-green-300 rounded-[80px] flex justify-center items-center gap-2.5">
                                                    <div className="justify-center text-gray-800 text-sm font-normal font-['Mulish'] leading-tight">Published</div>
                                                </div>
                                                <div data-icon="Chevron Up" className="size-6 relative overflow-hidden">
                                                    <div className="size-6 left-0 top-0 absolute" />
                                                    <div className="w-3 h-5 left-[6.18px] top-[1.50px] absolute overflow-hidden">
                                                        <div className="w-3 h-2 left-0 top-[6.27px] absolute bg-black" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch p-4 border-b border-slate-100 inline-flex justify-between items-center">
                                        <div className="w-48 justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">Adult</div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-normal font-['Mulish']">Qty: n/a</div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">$29.99</div>
                                    </div>
                                    <div className="self-stretch p-4 border-b border-slate-100 inline-flex justify-between items-center">
                                        <div className="w-48 justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">Youth</div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-normal font-['Mulish']">Qty: n/a</div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">$19.99</div>
                                    </div>
                                    <div className="self-stretch p-4 border-slate-100 inline-flex justify-between items-center">
                                        <div className="w-48 justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">Child</div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-normal font-['Mulish']">Qty: n/a</div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">$0.00</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-b border-indigo-300 flex flex-col justify-center items-center">
                                    <div className="self-stretch p-4 bg-white border-b border-indigo-300 inline-flex justify-start items-end gap-4">
                                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                                            <div className="size- flex flex-col justify-start items-start gap-1">
                                                <div className="size- inline-flex justify-start items-center gap-2">
                                                    <div className="justify-start text-neutral-900 text-base font-bold font-['Mulish']">Prince Caspian 2024/25</div>
                                                    <div className="justify-start text-sky-600 text-xs font-normal font-['Mulish'] underline">Edit</div>
                                                </div>
                                                <div className="size- inline-flex justify-start items-start gap-2">
                                                    <div className="size- flex justify-start items-start gap-1">
                                                        <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Category:</div>
                                                        <div className="justify-start text-black text-sm font-normal font-['Mulish']">Theater</div>
                                                    </div>
                                                    <div className="size- flex justify-start items-start gap-1">
                                                        <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Type:</div>
                                                        <div className="justify-start text-black text-sm font-normal font-['Mulish']">Theater Performance</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="size- flex justify-start items-center gap-1">
                                            <div className="size- px-2 py-1 bg-red-300 rounded-[80px] flex justify-center items-center gap-2.5">
                                                <div className="justify-center text-gray-800 text-sm font-normal font-['Mulish'] leading-tight">Draft</div>
                                            </div>
                                            <div data-icon="Chevron Up" className="size-6 relative overflow-hidden">
                                                <div className="size-6 left-0 top-0 absolute" />
                                                <div className="w-3 h-5 left-[6.18px] top-[1.50px] absolute overflow-hidden">
                                                    <div className="w-3 h-2 left-0 top-[6.27px] absolute bg-black" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch p-4 border-b border-slate-100 inline-flex justify-between items-center">
                                        <div className="w-48 justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">Base</div>
                                        <div className="size- flex justify-start items-start gap-1">
                                            <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Qty:</div>
                                            <div className="justify-start text-black text-sm font-normal font-['Mulish']">100</div>
                                        </div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">$59.99</div>
                                    </div>
                                    <div className="self-stretch p-4 border-b border-slate-100 inline-flex justify-between items-center">
                                        <div className="w-48 justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">Gold Circle</div>
                                        <div className="size- flex justify-start items-start gap-1">
                                            <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Qty:</div>
                                            <div className="justify-start text-black text-sm font-normal font-['Mulish']">160</div>
                                        </div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">$49.99</div>
                                    </div>
                                    <div className="self-stretch p-4 border-b border-indigo-300 inline-flex justify-between items-center">
                                        <div className="w-48 justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">Back Orchestra</div>
                                        <div className="size- flex justify-start items-start gap-1">
                                            <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Qty:</div>
                                            <div className="justify-start text-black text-sm font-normal font-['Mulish']">140</div>
                                        </div>
                                        <div className="w-14 text-right justify-start text-neutral-900 text-sm font-semibold font-['Mulish']">$34.99</div>
                                    </div>
                                </div>
                                <div className="self-stretch p-4 border-b border-indigo-300 inline-flex justify-between items-end">
                                    <div className="w-56 inline-flex flex-col justify-start items-start gap-1">
                                        <div className="size- inline-flex justify-start items-center gap-2">
                                            <div className="justify-start text-neutral-900 text-base font-bold font-['Mulish']">Prince Caspian Signed Poster</div>
                                            <div className="justify-start text-sky-600 text-xs font-normal font-['Mulish'] underline">Edit</div>
                                        </div>
                                        <div className="size- inline-flex justify-start items-start gap-2">
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Category:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Add-on</div>
                                            </div>
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Type:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Merchandise</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="size- flex justify-start items-center gap-1">
                                        <div className="size- px-2 py-1 bg-amber-300 rounded-[80px] flex justify-center items-center gap-2.5">
                                            <div className="justify-center text-gray-800 text-sm font-normal font-['Mulish'] leading-tight">Pending Approval</div>
                                        </div>
                                        <div data-icon="Chevron Down" className="size-6 relative overflow-hidden">
                                            <div className="size-6 left-0 top-0 absolute" />
                                            <div className="w-3 h-5 left-[5.82px] top-[1.50px] absolute overflow-hidden">
                                                <div className="w-3 h-2 left-0 top-[6.27px] absolute bg-sky-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch p-4 border-b border-indigo-300 inline-flex justify-between items-end">
                                    <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                        <div className="size- inline-flex justify-center items-center gap-2">
                                            <div className="justify-start text-neutral-900 text-base font-bold font-['Mulish']">All Creations Sings</div>
                                            <div className="justify-start text-sky-600 text-xs font-normal font-['Mulish'] underline">Edit</div>
                                        </div>
                                        <div className="size- inline-flex justify-start items-start gap-2">
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Category:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Museum</div>
                                            </div>
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Type:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Attraction</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="size- inline-flex flex-col justify-center items-end gap-2">
                                        <div className="size- inline-flex justify-start items-center gap-1">
                                            <div className="size- px-2 py-1 bg-green-300 rounded-[80px] flex justify-center items-center gap-2.5">
                                                <div className="justify-center text-gray-800 text-sm font-normal font-['Mulish'] leading-tight">Published</div>
                                            </div>
                                            <div data-icon="Chevron Down" className="size-6 relative overflow-hidden">
                                                <div className="size-6 left-0 top-0 absolute" />
                                                <div className="w-3 h-5 left-[5.82px] top-[1.50px] absolute overflow-hidden">
                                                    <div className="w-3 h-2 left-0 top-[6.27px] absolute bg-sky-600" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch p-4 border-b border-indigo-300 inline-flex justify-between items-end">
                                    <div className="size- inline-flex flex-col justify-start items-start gap-1">
                                        <div className="size- inline-flex justify-center items-center gap-2">
                                            <div className="justify-start text-neutral-900 text-base font-bold font-['Mulish']">Prince Caspian Digital Performance</div>
                                            <div className="justify-start text-sky-600 text-xs font-normal font-['Mulish'] underline">Edit</div>
                                        </div>
                                        <div className="size- inline-flex justify-start items-start gap-2">
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Category:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Add-on</div>
                                            </div>
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-semibold font-['Mulish']">Type:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Digital Product</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-4 flex justify-start items-center gap-1">
                                        <div className="justify-start text-green-700 text-sm font-semibold font-['Mulish']">Published</div>
                                        <div data-icon="Chevron Down" className="size-6 relative overflow-hidden">
                                            <div className="size-6 left-0 top-0 absolute" />
                                            <div className="w-3 h-5 left-[5.82px] top-[1.50px] absolute overflow-hidden">
                                                <div className="w-3 h-2 left-0 top-[6.27px] absolute bg-sky-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch p-4 border-b border-indigo-300 inline-flex justify-between items-end">
                                    <div className="w-56 inline-flex flex-col justify-start items-start gap-1">
                                        <div className="size- inline-flex justify-start items-center gap-2">
                                            <div className="justify-start text-neutral-900 text-base font-semibold font-['Mulish']">Prince Caspian Signed Poster</div>
                                            <div className="justify-start text-sky-600 text-xs font-normal font-['Mulish'] underline">Edit</div>
                                        </div>
                                        <div className="size- inline-flex justify-start items-start gap-2">
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Category:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Add-on</div>
                                            </div>
                                            <div className="size- flex justify-start items-start gap-1">
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Type:</div>
                                                <div className="justify-start text-black text-sm font-normal font-['Mulish']">Merchandise</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-4 flex justify-start items-center gap-1">
                                        <div className="justify-start text-yellow-600 text-sm font-semibold font-['Mulish']">Draft</div>
                                        <div data-icon="Chevron Down" className="size-6 relative overflow-hidden">
                                            <div className="size-6 left-0 top-0 absolute" />
                                            <div className="w-3 h-5 left-[5.82px] top-[1.50px] absolute overflow-hidden">
                                                <div className="w-3 h-2 left-0 top-[6.27px] absolute bg-sky-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

    ];
    const actionBar = {
        title: 'Panel Principal',
        subtitle: 'Contenido personalizado',
        position: 'bottom' as const,
        children: (
            <>
                <div data-icon="User" className="size-6 relative overflow-hidden">
                    <div className="w-4 h-5 left-[3.25px] top-[2px] absolute overflow-hidden">
                        <div className="w-4 h-5 left-0 top-0 absolute bg-gray-900" />
                    </div>
                </div>
                <div className="text-center justify-center text-gray-900 text-xl font-semibold font-['Muli']">Welcome [test]</div>
            </>),
        actions: (
            <>
                <CTA variant="tertiary" size='lg' leftIcon={<ChevronLeftIcon />}>Create Ticket</CTA>
                <CTA variant="tertiary" size='lg'>Reports Analytics22</CTA>
                <CTA variant="tertiary" size='lg'>Tertiary</CTA>
            </>
        )
    }

    const children = <>Somethig here as special element</>

    return (
        <Layout
            sidebarSections={sampleSidebarMenuData}
            actionBar={actionBar}
            sidebarExpanded={false}
            columns={columns}>
            {children}
        </Layout>
    )
}

export default App;