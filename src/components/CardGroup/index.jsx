// Utils
import { useFetch } from "../../utils/hooks/";
// Components
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
// Styles
import "./index.scss";

const CardGroup = () => {
  const { isLoading, data, error } = useFetch(
    `${location.origin}/data/logements.json`,
  );

  return (
    <>
      {error ? (
        <Error
          type="500"
          message="Oups! Une erreur est survenue sur le serveur."
        />
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <div className="cards-wrapper">
          {data.map(({ id, title, cover }) => (
            <Card key={`${title}-${id}`} id={id} title={title} cover={cover} />
          ))}
        </div>
      ) : (
        <p>Pas d'annonce disponible</p>
      )}
    </>
  );
};

export default CardGroup;
