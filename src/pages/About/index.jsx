// Utils
import { toggleState } from "../../utils/src/index.jsx";
import { useState } from "react";
// Components
import Nav from "../../components/Nav";
import Layout from "../../components/Layout";
import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
// Assets
import aboutBanner from "../../assets/img/about-banner.png";
// Styles
import "./index.scss";

const About = () => {
  const [isOpen, setIsOpen] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  const aboutContent = {
    fiabilite:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    securite:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  return (
    <>
      <Nav />
      <Layout cssClass="about-main">
        <Banner filter={30} image={aboutBanner} />
        <div className="about-collapse">
          <Collapse
            title="Fiabilité"
            content={aboutContent.fiabilite}
            state={isOpen.fiabilite}
            setState={() => toggleState("fiabilite", setIsOpen)}
          />
          <Collapse
            title="Respect"
            content={aboutContent.respect}
            state={isOpen.respect}
            setState={() => toggleState("respect", setIsOpen)}
          />
          <Collapse
            title="Service"
            content={aboutContent.service}
            state={isOpen.service}
            setState={() => toggleState("service", setIsOpen)}
          />
          <Collapse
            title="Sécurité"
            content={aboutContent.securite}
            state={isOpen.securite}
            setState={() => toggleState("securite", setIsOpen)}
          />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
