import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import LoginIcon from "./login-icon";

import { ContactContainer,ContactDetail,NameEmailContainer } from "./support-contact.style.jsx";

const SupportContact = ({ contact }) => {
  return (
    <ContactContainer>
      <h2>Your FEEFO Support Contact</h2>
      <ContactDetail>
      <LoginIcon name={contact.name} />
        <NameEmailContainer>
          <div>
            <strong>{contact.name}</strong>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} color="#606060" data-testid="fa-envelope" /> {contact.email} 020 3362 4208
          </div>
        </NameEmailContainer>
      </ContactDetail>
  
    </ContactContainer>
  );
};

SupportContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default SupportContact;
