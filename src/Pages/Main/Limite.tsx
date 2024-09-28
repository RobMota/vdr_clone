const Limite = () => {
  return (
    <div className="bg-[#8c2fff] flex justify-center items-center">
      <div className="flex md:w-[1200px] h-[100%] py-12 p-7">
        <div className="flex flex-wrap justify-center items-center">
          <p className="text-[#b2ec05] font-bold flex flex-col justify-center items-center animate-pulse">
            <span className="text-[40px]">APENAS</span>
            <span className="text-[70px]">1200</span>
            <span className="text-[40px]">VAGAS</span>
          </p>
          <hr className="w-52 mt-7 mb-5 md:w-0 md:m-0 md:border-r-[1px] md:h-[150px] md:mx-10" />
          <p className="text-white text-[24px] text-center md:flex-1">
            Esta turma terá um limite de participantes e,{" "}
            <span className="font-bold">
              quando as 1200 vagas forem preenchidas, encerraremos as
              inscrições.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Limite;
