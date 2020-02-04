import React from "react";
import { ButtonRenderer } from "braid-design-system";
import { Link } from "@reach/router";

interface IProps {
  linkPath: string,
  label: string
}

export default (props:IProps) => {
  const { linkPath, label } = props
  return (
    <ButtonRenderer>
      {(ButtonChildren, buttonProps) => (
      <Link to={linkPath} {...buttonProps}>
        <ButtonChildren>{label}</ButtonChildren>
      </Link>
    )}
    </ButtonRenderer>
  );
}
