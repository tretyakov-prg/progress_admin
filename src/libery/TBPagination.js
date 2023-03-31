import React, { useState } from "react";

function TBPagination(props) {
    
    const {index, data, from, to, step} = props;
    const style = {
        pcenter:{
            "textAlign": "center"
        },
        bdisp: {
            "display": "inline-flex"
        },
        count: {
            "display": "inline-block",
            "paddingLeft": "40px"
        }
    }
    //const isTotalPage = 10;
    const [isTotalPage, setTotalPage] = useState(10)
    const [inIndex, setIndex] = useState(index);

    const range = (ffrom, fto, fstep = 1) => {
        
        let i = ffrom;
        const range = [];
      
        while (i <= fto) {
          range.push(i);
          i += fstep;
        }
        return range;
    }

    return ( 
        <ul className="pagination" style={style.bdisp}>
            <li className={inIndex === 0 ? "page-item disabled" : "page-item"}> <span className="page-link" onClick={()=>setIndex(inIndex - 1)}>Назад</span></li>
            {range(0,isTotalPage - 1, 1).map((data, i)=>{
                return <li key={i} className={inIndex === i ? "page-item active" : "page-item"}><span className="page-link" onClick={()=>setIndex(i)}>{data+1}</span></li>
            })}
            <li className={inIndex === data.length ? "page-item disabled" : "page-item"}><span className="page-link" onClick={()=>setIndex(inIndex + 1)}>Вперед</span></li>
        </ul>
     );
}

export default TBPagination;