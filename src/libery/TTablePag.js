import React, { useState, useMemo } from "react";
import Pagination from '../libery/Pagination';
import TBPagination from "./TBPagination";


function TTablePag({namecols, tbody}) {

    const style = {
        input_pag: {
            "padding": "4px",
            "minWidth": "60px"
        },
        pcenter:{
            "textAlign": "center"
        },
        bdisp: {
            "display": "inline-flex"
        },
        count:{
          "display": "inline-block"
        }
        
    }

    const [inPageSize, setPageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const [inSearch, setSearch] = useState({id: 0 , col: ""});    

    const temp_data = (arr) => {

        let temp = [];

        arr.filter(user => (user[inSearch.id].toString().toLowerCase().includes(inSearch.col) ? temp.push(user) : ""));

        return temp;
    }
    
    const variant  = (table) => {
        if(inSearch.col){
            return temp_data(table);
        }
        else
        {
            return table;
        }
    }

    const currentTableData = useMemo(() => {

        const firstPageIndex = (currentPage - 1) * inPageSize;
        const lastPageIndex = firstPageIndex + inPageSize;

        return variant(tbody).slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return(
    <>
        <table className="table table-striped">
            <thead>
                <tr>
                    {namecols.map((data, k)=>{
                        return (
                        <th key={k}>
                            {data}
                            <input type="text" className="form-control" style={style.input_pag} placeholder={k} onChange={(event) => 
                                {
                                    setSearch({id:k , col: event.target.value.toLowerCase()})
                                }
                            }
                            />
                        </th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {   variant(tbody).map((item, i) => {
                        console.log(item);
                        if(i <= 10)
                        {
                        return (
                                    <tr key={i}>
                                        {item.map((tdata, j)=>(
                                            j===0 ? 
                                            <th key={j} scope="row">
                                                {tdata}
                                            </th> : 
                                            <td key={j}>
                                                {tdata}
                                            </td>
                                        ))}
                                    </tr>
                            ); 
                        }    
                        
                    })
                }
            </tbody>
        </table>
        <nav aria-label="..." style={style.pcenter}>
            <TBPagination index={currentPage} data={variant(tbody)}/>
            <div className="form-group" style={style.count}>
                <label>Записей на листе</label>
                <select 
                    className="form-control" 
                    onChange={(e) => {
                        setPageSize(parseInt(e.target.value, 10));
                        setCurrentPage(1)
                    }}
                >
                    <option>{5}</option>
                    <option>{10}</option>
                    <option>{15}</option>
                    <option>{20}</option>
                </select>
            </div>   
        </nav>
        
    </>
    )
}

export default TTablePag;

{/* <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={variant(tbody).length}
                pageSize={inPageSize}
                onPageChange={page => setCurrentPage(page)}
            /> */}