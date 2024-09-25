const SvgIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5 ml-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

const Aprender = () => {
  return (
    <div className="w-[100%] h-[100%] bg-[#000]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:w-[1200px] h-[100%] py-12">
          <div className="flex items-center justify-center flex-wrap p-7">
            <div className="flex items-center justify-center text-center mb-7 w-1/2">
              <p className="text-white text-[40px]">
                O QUE VOCÊ VAI APRENDER NO
                <span className="text-[#b2ec05]"> VIVER DE RENDA:</span>
              </p>
            </div>

            <ul className="text-white text-[20px]">
              <div className="md:flex md:items-center md:border-b-[1px] md:border-[#8c2fff]">
                <div className="flex py-5 border-b-[1px] border-[#8c2fff] md:border-none">
                  <li className="flex flex-1 flex-col items-center py-7">
                    <p className="text-[16px] mb-4">MÓDULO 01</p>
                    <div className="w-[54px] h-[54px] bg-slate-500">
                      <img src="" alt="" />
                    </div>
                    <p className="text-[18px] md:text-[22px] font-bold text-center my-auto">
                      Mentalidade
                    </p>
                    <button
                      className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1
                    flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto"
                    >
                      LER MAIS
                      {/* icon */}
                      <SvgIcon />
                    </button>
                  </li>
                  <hr className="w-0 border-r-[1px] h-[300px] border-[#8c2fff] mx-5" />
                  <li className="flex flex-1 flex-col items-center py-7">
                    <p className="text-[16px] mb-4">MÓDULO 02</p>
                    <div className="w-[54px] h-[54px] bg-slate-500">
                      <img src="" alt="" />
                    </div>
                    <p className="text-[18px] md:text-[22px] font-bold text-center my-auto">
                      Poupança, orçamento e gastos
                    </p>
                    <button
                      className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1
                    flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto"
                    >
                      LER MAIS
                      {/* icon */}
                      <SvgIcon />
                    </button>
                  </li>
                </div>
                <hr className="w-0 md:border-r-[1px] md:h-[300px] md:border-[#8c2fff] md:mx-5" />
                <div className="flex py-5 border-b-[1px] border-[#8c2fff] md:border-none">
                  <li className="flex flex-1 flex-col items-center py-7">
                    <p className="text-[16px] mb-4">MÓDULO 03</p>
                    <div className="w-[54px] h-[54px] bg-slate-500">
                      <img src="" alt="" />
                    </div>
                    <p className="text-[18px] md:text-[22px] font-bold text-center my-auto">
                      Renda Fixa
                    </p>
                    <button
                      className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1
                    flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto"
                    >
                      LER MAIS
                      {/* icon */}
                      <SvgIcon />
                    </button>
                  </li>
                  <hr className="w-0 border-r-[1px] h-[300px] border-[#8c2fff] mx-5" />
                  <li className="flex flex-1 flex-col items-center py-7">
                    <p className="text-[16px] mb-4">MÓDULO 04</p>
                    <div className="w-[54px] h-[54px] bg-slate-500">
                      <img src="" alt="" />
                    </div>
                    <p className="text-[18px] md:text-[22px] font-bold text-center my-auto">
                      Investimento em renda variável
                    </p>
                    <button
                      className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1
                    flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto"
                    >
                      LER MAIS
                      {/* icon */}
                      <SvgIcon />
                    </button>
                  </li>
                </div>{" "}
              </div>

              <div className="md:flex md:items-center md:justify-center">
                <div className="flex py-5 border-b-[1px] border-[#8c2fff] md:border-none">
                  <li className="flex flex-1 flex-col items-center py-7">
                    <p className="text-[16px] mb-4">MÓDULO 05</p>
                    <div className="w-[54px] h-[54px] bg-slate-500">
                      <img src="" alt="" />
                    </div>
                    <p className="text-[18px] md:text-[22px] font-bold text-center my-auto">
                      Investimento no exterior
                    </p>
                    <button className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1 flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto">
                      LER MAIS
                      {/* icon */}
                      <SvgIcon />
                    </button>
                  </li>
                  <hr className="w-0 border-r-[1px] h-[300px] border-[#8c2fff] mx-5" />
                  <li className="flex flex-1 flex-col items-center py-7">
                    <p className="text-[16px] mb-4">MÓDULO 06</p>
                    <div className="w-[54px] h-[54px] bg-slate-500">
                      <img src="" alt="" />
                    </div>
                    <p className="text-[14px] md:text-[22px] font-bold text-center my-auto">
                      Empreendedorismo
                    </p>
                    <button className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1 flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto">
                      LER MAIS
                      {/* icon */}
                      <SvgIcon />
                    </button>
                  </li>
                </div>
                <hr className="w-0 md:border-r-[1px] md:h-[300px] md:border-[#8c2fff] md:mx-5" />
                <div className="flex py-5 ">
                  <li className="flex flex-1 flex-col items-center py-7 h-[300px]">
                    <p className="text-[16px] mb-4">MÓDULO 07</p>
                    <div className="w-[54px] h-[54px] bg-slate-500">
                      <img src="" alt="" />
                    </div>
                    <p
                      className="text-[18px] md:text-[22px] font-bold text-center my-auto 
                    w-[300px]
                    "
                    >
                      Simplificação, seguros e sucessão patrimonial
                    </p>
                    <button className="border-[1px] border-[#b2ec05] text-[#b2ec05] rounded-3xl px-3 py-1 flex items-center justify-between hover:bg-[#b2ec05] hover:text-[#000] transition-all text-[14px] font-bold mt-auto">
                      LER MAIS
                      {/* icon */}
                      <SvgIcon />
                    </button>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aprender;
