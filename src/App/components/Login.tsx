import React from "react";
import { useAds } from "../providers/AdsProvider";
import { Dropdown, Button, Card, Inline } from "braid-design-system";

export default ({}) => {
  const { login, state } = useAds();
  const { companies } = state;
  const [ value, setValue ] = React.useState("");
  const updateLoginValue = (value:string) => {
    setValue(value)
  }
  return (
    <React.Fragment>
      <Card>
      <Inline space="medium">
        <Dropdown
          onChange={e => updateLoginValue(e.target.value)}
          id="id"
          placeholder="Please select a company to login"
          value={value}
        >
          {Object.keys(companies).map(company => (
            <option
              key={companies[company].value}
              value={companies[company].value}
            >
              {companies[company].label}
            </option>
          ))}
        </Dropdown>
        {value !== "" ? <Button onClick={() => login(value)}>Submit</Button>:null}
        </Inline>
      </Card>
    </React.Fragment>
  );
};
