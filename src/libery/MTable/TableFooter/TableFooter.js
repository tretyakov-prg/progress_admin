import React, { useEffect } from "react";

const TableFooter = ({ range, setPage, page, slice }) => {
  
  const DOTS = "...";
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  const PagButton = ({numPag, rangePage}) => {
    return <button className={`button ${numPag === rangePage ? "activeButton" : "inactiveButton"}`} onClick={() => setPage(rangePage)} >{rangePage}</button>
  }
  console.log(range.length);
  return (
    <div className="tableFooter">
      { !range.length ? "Нет данных" : <PagButton numPag = {page} rangePage = {range[0]} />}
      {/*------...................---------*/}
      {page > 3 ? <button disabled>{DOTS}</button> : ""}
      {/*------...................---------*/}

      {
        page <= 3 ?
          <>
            {
              range.length < 3 ?
                range.map((data, index) => (
                  <>
                    {index === 0 ? "" : <PagButton key={index} numPag = {page} rangePage = {data} />}
                  </>
                ))
              :
              <>
                {!range[1] ? "" : <PagButton numPag = {page} rangePage = {range[1]} />}
                {!range[2] ? "" : <PagButton numPag = {page} rangePage = {range[2]} />}
                {!range[3] ? "" : <PagButton numPag = {page} rangePage = {range[3]} />}
              </>
            }
          </>
        :
        page > range.length - 3
        ?
        <>
          <PagButton numPag = {page} rangePage = {range[range.length - 4]} />
          <PagButton numPag = {page} rangePage = {range[range.length - 3]} />
          <PagButton numPag = {page} rangePage = {range[range.length - 2]} />
        </>
        :
        <>
          <PagButton numPag = {page} rangePage = {range[page-2]} />
          <PagButton numPag = {page} rangePage = {range[page-1]} />
          <PagButton numPag = {page} rangePage = {range[page]} />
        </>
      }

      {/*------...................---------*/}
      {page >= range[range.length - 3] || !range.length ? "" : <button disabled>{DOTS}</button>}
      {/*------...................---------*/}
      { range.length >= 5 ?
        <PagButton numPag = {page} rangePage = {range[range.length - 1]} />
      :
      ""}
    </div>
  );
};

export default TableFooter;