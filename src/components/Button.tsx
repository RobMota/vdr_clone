import PlusIcon from "../assets/icons/plus";

export const CustomBigButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#8c2fff] min-w-[340px] py-6 rounded-full ml-5 mt-7 md:w-[480px] md:mt-12 hover:bg-[#8d2fffbb] transition-all animate-shake">
      <span className="size-5 font-poppins font-extrabold uppercase text-white">
        {text}
      </span>
    </button>
  );
};

export const CustomLittleButton = () => {
  return (
    <button
      className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1
    flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto"
    >
      LER MAIS
      {/* icon */}
      <PlusIcon />
    </button>
  );
};
