// Components
import Nav from "../../../components/Nav";
import Layout from "../../../components/Layout";
import Error from "../../../components/Error";
import Footer from "../../../components/Footer";

const NotFound = () => {
  return (
    <>
      <Nav />
      <Layout>
        <Error
          type="404"
          message="Oups! La page que vous demandez n'existe pas."
        />
      </Layout>
      <Footer />
    </>
  );
};

export default NotFound;
