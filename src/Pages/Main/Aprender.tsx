import { CustomLittleButton } from "../../components/Button";

const Aprender = () => {
  return (
    <div className="w-[100vw] h-[100%] bg-[#000]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:w-[1200px] h-[100%] py-12">
          <div className="flex items-center justify-center flex-wrap p-7">
            <div className="flex items-center justify-center text-center mb-7 md:w-1/2">
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
                    <CustomLittleButton />
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
                    <CustomLittleButton />
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
                    <CustomLittleButton />
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
                    <CustomLittleButton />
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
                    <CustomLittleButton />
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
                    <CustomLittleButton />
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
                    <CustomLittleButton />
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
