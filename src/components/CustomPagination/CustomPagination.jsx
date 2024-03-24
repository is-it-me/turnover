/* eslint-disable react/prop-types */
import CustomPaginationPage from "./CustomPaginationPage";
import { Fragment } from "react";
import { nanoid } from "nanoid";

const CustomPagination = ({ activePageNo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <CustomPaginationPage
        text={"<<"}
        to={1}
        disabled={Number(activePageNo) === 1}
      />
      <CustomPaginationPage
        text={"<"}
        to={activePageNo - 1}
        disabled={Number(activePageNo) === 1}
      />
      {new Array(5).fill(0).map((num, _i) => (
        <Fragment key={nanoid()}>
          <CustomPaginationPage
            isActive={_i === Number(activePageNo) - 1}
            text={_i + 1}
            to={_i + 1}
          />
        </Fragment>
      ))}
      <CustomPaginationPage text={"..."} to={activePageNo} />
      <CustomPaginationPage
        text={">"}
        to={activePageNo + 1}
        disabled={Number(activePageNo) === 5}
      />
      <CustomPaginationPage
        text={">>"}
        to={5}
        disabled={Number(activePageNo) === 5}
      />
    </div>
  );
};

export default CustomPagination;
