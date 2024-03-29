import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  setIsModalDeposit: () => void;
}

const ModalDeposit: React.FC<ModalProps> = ({ setIsModalDeposit }) => {
  return (
    <div className="container-modal">
      <div className="content-modal">
        <div className="flex justify-between items-center border-b-1 border-[#374B6D] pb-6">
          <span className="text-2xl">Deposit</span>
          <AiOutlineClose onClick={() => setIsModalDeposit()} className="cursor-pointer" />
        </div>
        <div className="flex justify-between border border-[#374B6D] rounded-[18px] p-4 mt-6">
          <div className="flex flex-col justify-center gap-4">
            <input
              type="text"
              className="text-4xl bg-transparent border-none focus:outline-none"
              placeholder="0"
            ></input>
            <span className="text-xl">Balance : 0.67 (Max)</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src="/DAI.png" alt="Dai" width={45} height={45}></Image>
              <span>DAI</span>
            </div>
          </div>
        </div>
        <Button onClick={() => setIsModalDeposit()}>Deposit</Button>
      </div>
    </div>
  );
};

export default ModalDeposit;
