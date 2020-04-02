import React from "react";
import { FormattedMessage } from "react-intl";

const translate = (id, value = {}) => (
  <FormattedMessage id={id} defaultMessage={""} values={{ ...value }} />
);
export default translate;
