'use client';

import {Fragment, useRef, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import DayForm from './day-form';

export default function DayCard({index, calendarId, text, imageUrl}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const cancelButtonRef = useRef(null);

  return (
    <div>
      <div
        onClick={handleOpen}
        className="mb-5 p-5 size-56 mx-auto rounded-xl shadow-lg  space-x-4"
      >
        {/* use imageURL to show the image on the edit days page */ }
        
        {/* <div
          className="bg-cover bg-center"
          style="background-image: url(https://tse1.mm.bing.net/th?id=OIP.Wx-LCIeN0EXmEtlLI6KGcAHaEe&pid=Api)"
        ></div> */}

        {/* <div className="shrink-0"> */}

        {/* <img
            className="object-cover"
            src="https://tse1.mm.bing.net/th?id=OIP.Wx-LCIeN0EXmEtlLI6KGcAHaEe&pid=Api"
          /> */}
        {/* </div> */}
        <div>
          <div className="text-xl font-medium text-black bg-slate-100">
            DAY {index + 1}
          </div>
          <p className="text-slate-500">{text}</p>
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
                          // as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          DAY {index + 1}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            What message do you want to share with your loved
                            one? Additionally, you can enter the URL of an image
                            that you want to share.
                          </p>
                          <DayForm
                            handleOpen={handleOpen}
                            calendarId={calendarId}
                            index={index}
                            text={text}
                            imageUrl={imageUrl}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}