'use client';

import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';

export default function DayCard({dayNb, calendarId, text, imageUrl}) {
  const [open, setOpen] = useState(false);
  const today = new Date('2024-01-04').getDate();
  const handleOpen = () => {
    if (today >= dayNb) {
      setOpen(!open);
    } else {
      alert(`You have to wait until Dec ${dayNb} to open this card 🙂`);
    }
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className={`mb-5 p-5 mx-auto size-40 rounded-md shadow-lg flex flex-col justify-center items-center ${
          today >= dayNb ? 'bg-green-400/30' : 'bg-red-800'
        }`}
      >
        <img src={`${today >= dayNb ? '/day-open.png' : '/day-closed.png'}`} />
        <div className={`text-3xl font-medium text-center text-green-50`}>
          {dayNb}
        </div>
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
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title className="text-2xl font-semibold text-green-700">
                          DAY {dayNb}
                        </Dialog.Title>
                        <div className="my-3">
                          <img
                            src={imageUrl}
                            className="max-w-full max-h-48 mx-auto mb-3"
                          />
                          <p className="font-semibold text-lg">
                            Message for you:{' '}
                          </p>
                          <p className="text-sm text-gray-800">{text}</p>
                        </div>
                      </div>
                    </div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-700 mt-3 px-3 py-2 text-sm font-semibold text-white
                      transition-colors hover:bg-green-600 shadow-sm sm:ml-3 sm:w-auto outline-none"
                    onClick={handleOpen}
                  >
                    Close
                  </button>
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
