import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

const Home = () => {
  return (
    <div className="flex flex-col items-center flex-1 ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
