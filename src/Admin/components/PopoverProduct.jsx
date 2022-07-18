import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import trashIcon from "../../Assets/trash-icon.png";
import editIcon from "../../Assets/edit-icon.png";

function PopoverProduct(props) {
  const { openModalEdit, id, setEditId } = props;
  const [deleteProducts, setDeleteProducts] = useState([]);
  const deleteProduct = (i) => {
    setDeleteProducts((prev) => {
      console.log(prev);
      let result = [...prev];
      result.splice(i, 1);
      return result;
    });
  };
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button className="btn-plain rounded-full h-8 aspect-square border flex justify-center items-center border-primary/20 hover:bg-primary/20">
            <DotsVerticalIcon className="h-5" />
          </Popover.Button>
          <AnimatePresence>
            {open && (
              <Popover.Panel
                as={motion.div}
                static
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, type: "tween" }}
                className="absolute right-9 -top-2 z-10 bg-putih rounded focus:outline-none shadow-xl shadow-black/20 overflow-hidden bg-white flex p-2 gap-x-2"
              >
                <button
                  className="btn-plain rounded-full h-8 aspect-square border flex justify-center items-center border-primary/20 hover:bg-primary/20"
                  onClick={() => {
                    setEditId(id);
                    close();
                    setTimeout(() => {
                      openModalEdit();
                    }, 500);
                  }}
                >
                  <img src={editIcon} alt="" className="h-4" />
                </button>
                <button
                  className="btn-plain rounded-full h-8 aspect-square border flex justify-center items-center border-primary/20 hover:bg-primary/20"
                  onClick={() => deleteProduct()}
                >
                  <img src={trashIcon} alt="" className="h-5" />
                </button>
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}

export default PopoverProduct;
