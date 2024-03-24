import { faker } from "@faker-js/faker";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomPagination from "../components/CustomPagination/CustomPagination";
import { Fragment, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";

export const InterestForm = () => {
  const { pageNo } = useParams();
  const getUserName = () => faker.person.fullName();
  const [nameArray, setNameArray] = useState([]);

  useEffect(() => {
    const newNames = [];
    for (let i = 0; i < 99; ++i) {
      newNames.push(getUserName());
    }
    setNameArray(newNames);
  }, []);

  return (
    <div>
      <h3>Please mark your interests!</h3>
      <p>We will keep you notified</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "30px",
          justifyContent: "flex-start",
          textAlign: "start",
        }}
      >
        <b>My saved interests!</b>
        <br />
        {nameArray.slice(pageNo - 1, pageNo - 1 + 6).map((name) => (
          <Fragment key={nanoid()}>
            <CustomCheckbox text={name} />
          </Fragment>
        ))}
        <br />
        <br />
        <br />
        <CustomPagination activePageNo={pageNo} />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
