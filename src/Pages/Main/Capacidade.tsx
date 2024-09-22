const Capacidade = () => {
  return (
    <div
      className="w-[100vw] h-[100%] 
		bg-gradient-to-b from-[#000000] to-[#1e1e1e]"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:w-[1200px] h-[100%] py-12">
          <div className="flex items-center justify-center flex-wrap p-7">
            <div className="flex items-center justify-center text-center">
              <p className="text-white text-[40px]">
                AO FINAL DO TREINAMENTO{" "}
                <span className="text-[#b2ec05]"> VOCÊ SERÁ CAPAZ DE:</span>
              </p>
            </div>

            <div>
              <ul className="text-white text-[20px]">
                <div className="md:flex md:items-center md:justify-center md:text-center md:py-7 md:border-b-[1px] md:border-[#8c2fff]">
                  <li className="border-b-[1px] py-5 border-[#8c2fff] md:border-none flex-1">
                    <p>
                      Organizar a vida financeira e criar uma reserva de
                      emergência
                    </p>
                  </li>
                  <hr className="w-0 md:w-0 md:m-0 md:border-r-[1px] md:h-[150px] md:mx-10 md:border-[#8c2fff]" />
                  <li className="border-b-[1px] py-5 border-[#8c2fff] md:border-none flex-1">
                    <p>
                      Começar a investir do zero, tomando decisões de um
                      investidor de longo prazo
                    </p>
                  </li>
                </div>
                <div className="md:flex md:items-center md:justify-center md:text-center md:py-7 md:border-b-[1px] md:border-[#8c2fff]">
                  <li className="border-b-[1px] py-5 border-[#8c2fff] md:border-none flex-1">
                    <p>
                      Entender o cenário macroeconômico e os ciclos de mercado
                    </p>
                  </li>
                  <hr className="w-0 md:w-0 md:m-0 md:border-r-[1px] md:h-[150px] md:mx-10 md:border-[#8c2fff]" />
                  <li className="border-b-[1px] py-5 border-[#8c2fff] md:border-none flex-1">
                    <p>
                      Diversificar e proteger seus investimentos de forma
                      inteligente
                    </p>
                  </li>
                </div>
                <div className="md:flex md:items-center md:justify-center md:text-center md:py-7">
                  <li className="border-b-[1px] py-5 border-[#8c2fff] md:border-none flex-1">
                    <p>
                      Criar um plano de aposentadoria e sucessão patrimonial
                    </p>
                  </li>
                  <hr className="w-0 md:w-0 md:m-0 md:border-r-[1px] md:h-[150px] md:mx-10 md:border-[#8c2fff]" />
                  <li className="pt-5 flex-1">
                    <p>Montar sua própria carteira de investimento</p>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capacidade;
