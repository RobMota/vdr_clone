import { CustomBigButton } from "../../components/Button";

const Mari = () => {
  return (
    <div
      className=" w-[100vw] h-[100%] 
      bg-gradient-to-b from-[#1e1e1e] from-1% via-[#000000] via-50% to-[#1e1e1e] to-100%"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:w-[1200px] h-[100%] py-12 md:py-28">
          <div className=" flex flex-wrap p-7 md:flex-nowrap">
            <div className="w-[244px] h-[185px] md:w-[445px] md:h-[336px] bg-slate-500">
              <img src="" alt="" />
            </div>

            <div className="flex-1  md:py-5 md:px-10">
              <p className="text-white font-poppins font-[300] text-[24px] mt-7 md:text-[32px]">
                <span className="my-7">
                  Essa é a
                  <span className="text-[#b2ec05] font-bold underline">
                    {" "}
                    Mari.
                  </span>
                </span>
                <span>
                  A{" "}
                  <span className="text-[#b2ec05]  font-bold">
                    <span className=" underline">Mari</span>, antes de entrar no
                    Viver de Renda,{" "}
                  </span>
                  era aquela pessoa que
                </span>
                <span className="text-[#b2ec05]  font-bold">
                  {" "}
                  gastava tudo o que ganhava
                </span>{" "}
                com “brusinhas”.
              </p>
            </div>
          </div>

          <div className="border border-[#8c2fff] px-7 py-28 rounded-3xl mt-7">
            <p className="text-white font-poppins font-[300] text-[24px]  md:text-[32px] ">
              <span className="text-[#b2ec05] font-bold mb-5">
                <span className=" underline"> Mari</span> decidiu mudar!
              </span>
              Mesmo arrependida das escolhas errôneas do passado,{" "}
              <span className="text-[#b2ec05]  font-bold">
                Mari decidiu entrar no Viver de Renda
              </span>{" "}
              e levar cada aula extremamente a sério.
            </p>
          </div>

          <div className="font-poppins  flex flex-col items-center justify-center p-5 text-center md:text-[32px]">
            <p className="text-white text-[24px] font-[300] mt-7">
              O que aconteceu depois disso...
            </p>
            <p className="text-[#b2ec05] text-[28px] font-bold mt-7">
              ...o conhecimento transformou!
            </p>
          </div>
          <div className="bg-[#b2ec05] flex mt-7 px-7 rounded-3xl flex-wrap">
            <div className="flex-1 pt-16 mb-7 md:pb-28">
              <p className="font-poppins text-[24px] md:text-[32px] font-bold md:flex-1">
                "Da compradora compulsiva, para uma investidora seria. Hoje até
                sou a “consultora” da minha família e amigos. Já perdi a conta
                da quantidade de pessoas que eu influenciei..."
              </p>
            </div>
            <div className="flex items-end mb-7">
              <p className="text-[#696969] font-poppins text-[20px] md:mr-5">
                Mari A. Martin
              </p>
              <img src="" alt="" className="h-[194px] w-[197px] bg-gray-500" />
            </div>
          </div>
          <div className="my-7 flex flex-col text-center items-center justify-center">
            <p className=" text-white font-poppins text-[24px] my-7 p-7 font-normal">
              Esse é apenas um dos{" "}
              <span className="text-[#b2ec05] font-bold">
                {" "}
                mais de 40 mil casos de alunos
              </span>{" "}
              que transformaram suas vidas através do Viver de Renda.
            </p>
            <p className="text-[24px] font-poppins font-bold text-[#b2ec05]">
              Você quer ser o próximo?
            </p>
            <CustomBigButton text="FAÇA SUA MATRÍCULA!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mari;
