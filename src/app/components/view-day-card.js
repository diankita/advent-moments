'use client';

import {Fragment, useRef, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {updateCalendarDay} from '../lib/actions';
import {getCalendarById} from '../lib/data';

export default function DayCard({dayNb, calendarId, text, imageUrl}) {
  const [open, setOpen] = useState(false);
  const today = new Date('2024-01-10').getDate();
  const handleOpen = () => {
    if (today >= dayNb) {
      setOpen(!open);
    } else {
      alert('Not the right day');
    }
  };

  const cancelButtonRef = useRef(null);

  return (
    <>
      <div
        onClick={handleOpen}
        className={`mb-5 p-5 mx-auto size-40 rounded-xl shadow-lg flex flex-col justify-center items-center ${
          today >= dayNb ? 'bg-green-400/30' : 'bg-red-800'
        }`}
      >
        <img src={`${today >= dayNb ? '/day-open.png' : '/day-closed.png'}`} />
        <div className={`text-3xl font-medium text-center`}>{dayNb}</div>
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
                  <div className="bg-slate-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">
                          DAY {dayNb}
                        </Dialog.Title>
                        <div className="mt-2">
                          <img
                            src={imageUrl}
                            className="max-w-[80%] max-h-48 mx-auto"
                          />
                          <p className="font-semibold">Message for you: </p>
                          <p className="text-sm text-slate-400">{text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto outline-none"
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
