'use client';

import {Fragment, useRef, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import DayForm from './day-form';

export default function DayCard({dayNb, calendarId}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const cancelButtonRef = useRef(null);

  return (
    <div>
      <div onClick={handleOpen}>
        <div className="p-6 max-w-sm mx-auto bg-slate-100 rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            {/* <img
              className="h-16 w-16"
              src="https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=7&ab_channel=Codevolution"
            /> */}
          </div>
          <div>
            <div className="text-xl font-medium text-black">DAY {dayNb}</div>
            <p className="text-slate-500">Entered text</p>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          DAY
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            What message do you want to share with your loved
                            one? Additionally, you can enter the URL or an image
                            that you want to share.
                          </p>
                          <DayForm handleOpen={handleOpen} calendarId={calendarId} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={handleOpen}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleOpen}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
