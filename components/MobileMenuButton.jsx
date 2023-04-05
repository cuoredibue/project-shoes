import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const MobileMenuButton = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="hover:bg-gray-200 rounded-full h-8 w-8"
        type="button"
        onClick={openModal}
      >
        <MenuOutlinedIcon />
      </button>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="-translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen  max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute  top-0 right-0 flex mt-4 mr-5">
                        <button
                          type="button"
                          className="rounded-full h-8 w-8 text-black  hover:bg-gray-200 focus:outline-none focus:ring-2  focus:ring-white"
                          onClick={closeModal}
                        >
                          <span className="sr-only text-black">
                            Close panel
                          </span>
                          <CloseIcon />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full overflow-y-scroll bg-white py-6 ">
                      <div className="relative mt-10 flex-1 px-6 space-y-4 text-2xl ">
                        <Link
                          href={{
                            pathname: "/products/buySomething",
                            query: { title: "novità", item: "scarpe" },
                          }}
                          className="flex justify-between cursor-pointer"
                        >
                          <p>Novità e in evidenza</p>
                          <button>
                            <ArrowForwardIosIcon />
                          </button>
                        </Link>
                        <Link
                          href="/products/buySomething"
                          className="flex justify-between cursor-pointer"
                        >
                          <p>Uomo</p>
                          <button>
                            <ArrowForwardIosIcon />
                          </button>
                        </Link>
                        <Link
                          href="/products/buySomething"
                          className="flex justify-between cursor-pointer"
                        >
                          <p>Donna</p>
                          <button>
                            <ArrowForwardIosIcon />
                          </button>
                        </Link>
                        <Link
                          href="/products/buySomething"
                          className="flex justify-between cursor-pointer"
                        >
                          <p>Bambini</p>
                          <button>
                            <ArrowForwardIosIcon />
                          </button>
                        </Link>
                        <Link
                          href="/products/buySomething"
                          className="flex justify-between cursor-pointer"
                        >
                          <p>Outlet</p>
                          <button>
                            <ArrowForwardIosIcon />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default MobileMenuButton;
