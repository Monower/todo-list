const Modal = ({trigger, children, subFunc, subFuncTitle})=> {
    return (
      <>
        <button
          className=""
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          {trigger}
        </button>
        <dialog
          id="my_modal_1"
          className="modal flex justify-center items-center cursor-default"
        >
          <div className="modal-box bg-white">
            {children}
            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded active:scale-90 transition-all duration-300 font-bold">
                  Cancel
                </button>
                {subFunc && subFuncTitle && (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded active:scale-90 transition-all duration-300 font-bold"
                    onClick={() => subFunc()}
                  >
                    {subFuncTitle}
                  </button>
                )}
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
};

export default Modal;