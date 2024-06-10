// Utils
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/";
// Components
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Carousel from "../../components/Carousel";
import Details from "../../components/Details";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Property = () => {
  const { propertyId } = useParams();

  let { isLoading, data, error } = useFetch(
    `${location.origin}/data/logements.json`,
  );
  data = data.filter((item) => item.id == propertyId)[0];

  return (
    <>
      <Nav />
      <Layout cssClass="place-main">
        {error ? (
          <Error
            type="500"
            message="Oups! Une erreur est survenue sur le serveur."
          />
        ) : isLoading ? (
          <Loader />
        ) : data ? (
          <>
            <Carousel pictures={data.pictures} />
            <Details
              title={data.title}
              location={data.location}
              description={data.description}
              equipments={data.equipments}
              rating={data.rating}
              tags={data.tags}
              author={data.host.name}
              profile={data.host.picture}
            />
          </>
        ) : (
          <Error
            type="404"
            message="Oups! La page que vous demandez n'existe pas."
          />
        )}
      </Layout>
      <Footer />
    </>
  );
};

export default Property;
