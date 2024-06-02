// Utils
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/";
// Components
import Nav from "../../components/Nav";
import MainWrapper from "../../components/MainWrapper";
import Carousel from "../../components/Carousel";
import Placeinfo from "../../components/Placeinfo";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Place = () => {
  const { placeId } = useParams();

  let { isLoading, data, error } = useFetch(
    `${location.origin}/data/logements.json`,
  );
  data = data.filter((item) => item.id == placeId)[0];

  return (
    <>
      <Nav />
      <MainWrapper cssClass="place-main">
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
            <Placeinfo
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
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Place;
