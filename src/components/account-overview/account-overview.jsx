import React from "react";
import PropTypes from "prop-types";

import SupportContact from "../support-contact/support-contact";
import SalesOverview from "../sales-overview/sales-overview";

import { Container, Header, CenteredWrapper } from "./account-overview.style";

export const AccountOverview = ({ data }) => {
  return (
    <CenteredWrapper>
      <Container>
        <Header>
          <h1>Account Overview</h1>
          <SupportContact contact={data.supportContact} />
        </Header>

        <SalesOverview sales={data.salesOverview} />
      </Container>
    </CenteredWrapper>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      lastUploadDate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AccountOverview;
