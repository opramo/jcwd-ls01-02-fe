import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentProofModal({ paymentProofModal, setPaymentProofModal }) {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen top-0 fixed bg-black/30 flex justify-center items-center"
      onClick={(e) => {
        setPaymentProofModal(false);
        console.log("bg close");
      }}
    >
      <div
        className="h-96 aspect-square bg-white flex flex-col p-7 gap-y-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1/6 flex items-center border-black border">
          <button
            className="h-6 aspect-square border border-gray-700 flex items-center justify-center hover:bg-gray-700"
            onClick={() => setPaymentProofModal(false)}
          >
            x
          </button>
          bukti pembayaran
        </div>
        <div className="h-4/6 border-black border">content</div>
        <div className="h-1/6 border-black border flex justify-center items-center">
          <button
            className="border border-green-500 hover:bg-green-500"
            onClick={() => navigate("/myaccount")}
          >
            upload pembayaran
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentProofModal;
