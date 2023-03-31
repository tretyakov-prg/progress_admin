import React, { useState } from "react";

function TBSearch() {
    
    const [inSearch, setSearch] = useState({id: 0 , col: ""});

    const temp_data = (arr) => {
        let temp = [];

        arr.filter(user => (user[inSearch.id].toString().toLowerCase().includes(inSearch.col) ? temp.push(user) : ""));

        return temp;
    }

    return ( 
        <></>
     );
}

export default TBSearch;