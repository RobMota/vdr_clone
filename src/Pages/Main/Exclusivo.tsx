import bg from "../../assets/image/bg.jpg";

const Exclusivo = () => {
  return (
    <div
      className="w-[100%] md:h-[100vh] h-[100%] bg-cover flex justify-center  items-center"
      style={{ backgroundImage: "url(" + bg + ")" }}
    >
      <div className="flex flex-col md:w-[1200px] h-[100%] flex-wrap justify-between pt-12 pb-24 md:py-12">
        <div className="flex flex-col items-center justify-center  ">
          <p className="text-[40px] text-center">
            <p className="text-[#b2ec05]">BÔNUS EXCLUSIVOS</p>
            <p className="text-white">PARA OS ALUNOS VIVER DE RENDA</p>
          </p>
          <div className="flex flex-wrap mt-7">
            <div className="h-[100%] md:h-[500px] w-[100%] md:w-[360px] rounded-xl">
              <div
                className="bg-[#b2ec05] rounded-t-xl
            flex justify-center items-center py-5"
              >
                <div className="w-[290px] h-[194px] bg-gray-400">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="w-[100%] h-[60%] rounded-b-xl bg-[#1d1d1d] flex flex-col items-start px-7 py-7">
                <p className="text-[24px]">
                  <p className="text-white">3 Meses</p>
                  <p>
                    {" "}
                    <span className="text-white">de</span>{" "}
                    <span className="text-[#b2ec05]">myProfit</span>
                  </p>
                </p>
                <p className="text-white text-[18px] mt-3">
                  Esqueça as planilhas. IR de investimentos resolvidos, e sua
                  carteira online.
                </p>
              </div>
            </div>

            <div className="md:ml-7 h-[500px] md:w-[360px] rounded-xl w-[100%] mt-10 md:mt-0">
              <div className="bg-[#b2ec05] rounded-t-xl flex justify-center items-center py-5">
                <div className="w-[290px] h-[194px] bg-gray-400">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="w-[100%] h-[60%] rounded-b-xl bg-[#1d1d1d] flex flex-col items-start px-7 py-5">
                <p className="text-[24px]">
                  <span className="text-white">Manuscrito dos </span>
                  <span className="text-[#b2ec05]">
                    primeiros capítulos do meu livro
                  </span>
                </p>
                <p className="text-white text-[18px] mt-3">
                  Quer ler meu livro antes de todo mundo? Esse ano iria terminar
                  o meu primeiro livro e os primeiros capítulos já estão
                  prontos. Quem fizer parte da turma 26 do Viver de Renda terá
                  acesso a eles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusivo;
