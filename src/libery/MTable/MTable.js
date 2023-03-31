import React, { useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter/TableFooter";

const MTable = ({ data, rowsPerPage , title, limitcol}) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table>
        <thead>
          <tr>
            {title.map((title, index)=>(index <= limitcol ? <th key={index}>{title}</th> : ""))}
          </tr>
        </thead>
        <tbody>
          {slice.map((el, index) => (
            <tr key={index}>
              {el.map((data, index) =>(index <= limitcol ? <td key={index}>{data}</td> : ""))}
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default MTable;