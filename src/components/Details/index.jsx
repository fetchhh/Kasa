// Utils
import { toggleState } from "../../utils/src/index.jsx";
import { useState } from "react";
import PropTypes from "prop-types";
// Components
import Dropdown from "../../components/Dropdown";
// Styles
import "./index.scss";

const Details = ({
  title,
  location,
  description,
  equipments,
  rating,
  tags,
  author,
  profile,
}) => {
  const [isOpen, setIsOpen] = useState({
    description: false,
    equipments: false,
  });

  const fullStar = (
    <svg
      className="rating-star"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
        fill="#FF6060"
      />
    </svg>
  );
  const emptyStar = (
    <svg
      className="rating-star"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
        fill="#E3E3E3"
      />
    </svg>
  );

  return (
    <div className="place-wrapper">
      <div className="place-header">
        <div className="location">
          <p>{title ? title : "Undefined"}</p>
          <p>{location ? location : "Undefined"}</p>
          <ul className="keywords">
            {tags?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="host">
          <div className="author">
            <p>{author}</p>
            <img src={profile} />
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) =>
              star <= parseInt(rating) ? (
                <span key={star}>{fullStar}</span>
              ) : (
                <span key={star}>{emptyStar}</span>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="place-description">
        <div className="place-dropdown">
          <Dropdown
            title="Description"
            content={description}
            state={isOpen.description}
            setState={() => toggleState("description", setIsOpen)}
          />
        </div>
        <div className="place-dropdown">
          <Dropdown
            title="Équipements"
            content={equipments}
            state={isOpen.equipments}
            setState={() => toggleState("equipments", setIsOpen)}
          />
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  equipments: PropTypes.array,
  rating: PropTypes.string,
  tags: PropTypes.array,
  author: PropTypes.string,
  profile: PropTypes.string,
};

export default Details;
