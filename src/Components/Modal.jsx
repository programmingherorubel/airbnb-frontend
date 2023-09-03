import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBadRoom } from '../app/api/featchers/badroomSlice/badroomSlice'
import { getPrice } from '../app/api/featchers/priceSlice/priceSlice'



export default function Modal() {
    let [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const selector = useSelector((state)=> console.log(state))
    
    
    
       
    const badroomHaneler = (e)=>{
        dispatch(getBadRoom(e))
    }
    
  const sendeingData = (e)=>{
    dispatch(getPrice(e));
  }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    return (
        <>
            <div >
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-gray-300 px-4 py-2 text-sm font-bold text-white "
                >
                    <i className="mx-2 fa-solid fa-filter"></i>Filter
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {/* content */}
                                    <h2 className='text-2xl py-4'>Price Range </h2>
                                    <input
                                        onChange={(e) => sendeingData(e.target.value)}
                                        type="range"
                                        min={100}
                                        max={900}
                                        defaultValue={100}
                                        className="range range-primary"
                                    />
                                    <div>
                                        <h3 className='text-2xl py-4'>Bedrooms</h3>
                                        <div className='flex justify-between gap-2'>
                                            <button onClick={()=>badroomHaneler(1)} className='bg-gray-200 p-4 font-bold rounded-full '>1</button>
                                            <button onClick={()=>badroomHaneler(2)} className='bg-gray-200 p-4 font-bold rounded-full '>2</button>
                                            <button onClick={()=>badroomHaneler(3)} className='bg-gray-200 p-4 font-bold rounded-full '>3</button>
                                            <button onClick={()=>badroomHaneler(4)} className='bg-gray-200 p-4 font-bold rounded-full '>4</button>
                                            <button onClick={()=>badroomHaneler(5)} className='bg-gray-200 p-4 font-bold rounded-full '>5</button>
                                        </div>
                                    </div>
                                    {/* content */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
