import capa from "../../assets/image/capa.jpg";
import logo from "../../assets/image/logo_viver_de_renda.png";

const Header = () => {
  return (
    <div className="h-[100vh] bg-black">
      <div className="bg-gradient-to-r from-[#c8fd23] to-[#91e207] w-full  h-[100px] flex items-center justify-center ">
        <div className="flex items-center justify-between text-[20px] md:text-[24px] animate-pulse">
          <p className="max-w-48">AS INSCRIÇÕES ABREM NO DIA </p>
          <p className="ml-14 font-bold">14/10</p>
        </div>
      </div>

      <div
        className="w-[100%] h-[calc(100%-100px)] flex bg-no-repeat items-center justify-center"
        style={{ backgroundImage: "url(" + capa + ")" }}
      >
        <div className="md:w-[1200px]">
          <div className="items-start  md:w-1/2 h-full py-12 md:py-28">
            <img
              src={logo}
              alt="logo viver de renda"
              className="w-[216px] h-[82px] ml-4 animate-slide delay-200"
            />

            <p className="text-white font-poppins font-[300] text-[24px] mt-3 px-8 md:text-[32px] animate-slide delay-200">
              <span className="text-[#b2ec05] font-bold">
                O treinamento completo
              </span>{" "}
              de educação financeira que irá te ensinar a investir no Brasil e
              no exterior,
              <span className="text-[#b2ec05] font-bold">
                {" "}
                mesmo que hoje você não saiba nada sobre o assunto.
              </span>
            </p>

            <button className="bg-[#8c2fff] min-w-[340px] py-6 rounded-full ml-5 mt-7 md:w-[480px] md:mt-12 hover:bg-[#8d2fffbb] transition-all animate-shake">
              <span className="size-5 font-poppins font-extrabold uppercase text-white">
                Faça a sua pré-matricula agora!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


