// Components
import Nav from "../../../components/Nav";
import MainWrapper from "../../../components/MainWrapper";
import Error from "../../../components/Error";
import Footer from "../../../components/Footer";

const NotFound = () => {
  return (
    <>
      <Nav />
      <MainWrapper>
        <Error
          type="404"
          message="Oups! La page que vous demandez n'existe pas."
        />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default NotFound;
