import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetRoomsQuery } from '../app/api/apiSlice'
import { getPrice } from '../app/api/featchers/priceSlice/priceSlice'



export default function Modal() {
    let [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const {price} = useSelector((state)=>state.price)
    const [userRangeValue,setUserRangeValue]= useState('')
    
       
    
    
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
                                    <input
                                        onChange={(e) => sendeingData(e.target.value)}
                                        type="range"
                                        min={100}
                                        max={900}
                                        defaultValue={100}
                                        className="range range-primary"
                                    />
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
