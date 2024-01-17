'use client';

import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import DayForm from './day-form';

export default function DayCard({index, calendarId, text, imageUrl}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div
        onClick={handleOpen}
        className="mb-5 mx-auto rounded-md shadow-lg box-border size-40 bg-white relative"
      >
        <div className="text-xl leading-normal font-medium text-white bg-green-700 h-8 text-center rounded-t-md align-middle">
          DAY {index + 1}
        </div>
        <div
          className="w-full h-32 bg-no-repeat bg-cover flex rounded-b-md opacity-40 "
          style={{backgroundImage: `url(${imageUrl})`}}
        ></div>
        <p className="p-2 text-clip overflow-hidden text-sm absolute top-6 h-32">
          {text}
        </p>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-100 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          className="text-2xl font-semibold text-green-700"
                        >
                          DAY {index + 1}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-800">
                            What do you want to tell your loved one(s)?
                            Additionally, you can enter the URL of an image that
                            you want to share.
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
    </>
  );
}
