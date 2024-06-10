// Components
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import CardGroup from "../../components/CardGroup";
import Footer from "../../components/Footer";
// Assets
import homeBanner from "../../assets/img/home-banner.png";

const Home = () => {
  return (
    <>
      <Nav />
      <Layout cssClass="home-main">
        <Banner
          title="Chez vous, partout et ailleurs"
          filter={60}
          image={homeBanner}
        />
        <CardGroup />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
