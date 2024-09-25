const Bonus = () => {
  return (
    <div className="w-full h-[100%] bg-black">
      <div className=" flex justify-center items-center">
        <div className="flex flex-col md:w-[1200px] h-[100%] py-12 md:py-28 p-7">
          <p className="text-[30px] text-white mb-7 md:w-1/2">
            O Viver de Renda com
            <span className="text-[#b2ec05] font-bold">
              {" "}
              12 meses de suporte
            </span>{" "}
            + uma série de{" "}
            <span className="text-[#b2ec05] font-bold">bônus</span>
          </p>
          <ul className="mt-7 text-[20px] text-white">
            <li>
              <p>7 módulos de treinamento</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>12 meses de suporte com especialista</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>Comunidade exclusiva de alunos</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>Descontos em outros produtos do Viver de Renda</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>Plantões de Dúvidas semanais</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>3 Meses de myProfit</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>Lives semanais sobre atualização de mercado</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>Manuscrito dos primeiros capítulos do meu livro</p>
            </li>
            <li className="mt-3 md:mt-7">
              <p>Desconto no Equity+</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
