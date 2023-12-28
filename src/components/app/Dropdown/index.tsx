"use client";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function Example(props: {
  item: any[];
  buttonStyle?: string;
  title?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  labelClassName?: string;
  label?: string;
}) {
  const [selected, setSelected] = useState(props.item[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <label htmlFor={props.label} className={props.labelClassName}>
            {props.label}
          </label>
          <Listbox.Button className={props.buttonStyle}>
            <div className="flex items-center justify-between">
              <span className="">{props.title}</span>
              <Image
                src={props.src || ""}
                alt={props.alt || ""}
                width={props.width}
                height={props.height}
              />
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {props.item.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#E2F5FF] text-[#144B66]" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
