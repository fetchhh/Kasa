// Components
import Nav from "../../components/Nav";
import MainWrapper from "../../components/MainWrapper";
import Banner from "../../components/Banner";
import CardsWrapper from "../../components/CardsWrapper";
import Footer from "../../components/Footer";
// Assets
import homeBanner from "../../assets/img/home-banner.png";

const Home = () => {
  return (
    <>
      <Nav />
      <MainWrapper cssClass="home-main">
        <Banner
          title="Chez vous, partout et ailleurs"
          filter={60}
          image={homeBanner}
        />
        <CardsWrapper />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Home;
