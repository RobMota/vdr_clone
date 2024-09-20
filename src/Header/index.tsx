import capa from "../assets/image/capa.jpg";
import logo from "../assets/image/logo_viver_de_renda.png";

const Header = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <div
        className="bg-gradient-to-r from-[#c8fd23] to-[#91e207] w-full  h-[11vh]
          flex items-center justify-center "
      >
        <div className="flex  items-center justify-between  text-[20px]  md:text-[24px]">
          <p className="  max-w-48  ">AS INSCRIÇÕES ABREM NO DIA </p>
          <p className="ml-14 font-bold ">14/10</p>
        </div>
      </div>
      <div
        className="w-[100vw] bg-no-repeat h-[100vh] "
        style={{ backgroundImage: "url(" + capa + ")" }}
      >
        <div className=" flex justify-center items-center">
          <div className="md:w-[1200px] h-[100vh]">
            <div className="flex flex-col  items-start    h-full  md:w-[600px] ">
              <img
                src={logo}
                alt="logo viver de renda"
                className="w-[216px] h-[82px] mt-20 ml-4 md:mt-[120px]"
              />
              <p className="text-white font-poppins font-[300] text-[24px] mt-3 px-8    md:text-[32px] md:mt-8   ">
                <span className="text-[#b2ec05]  font-bold  ">
                  O treinamento completo
                </span>{" "}
                de educação financeira que irá te ensinar a investir no Brasil e
                no exterior,
                <span className="text-[#b2ec05] font-bold ">
                  {" "}
                  mesmo que hoje você não saiba nada sobre o assunto.
                </span>
              </p>

              <button className="bg-[#8c2fff] min-w-[340px] py-6 rounded-full  ml-5 mt-7  md:w-[480px] md:mt-12 hover:bg-[#8d2fffbb] transition-all">
                <span className="size-5 font-poppins font-extrabold uppercase text-white">
                  Faça a sua pré-matricula agora!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
