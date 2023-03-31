import { useState } from "react";

function HBSearch () {
    
    const style = {
        open: {
            width: "130px"
        },
        close: {
            width: "0px"
        }
    }
    
    const [isOpenSearch, setOpenSearch] = useState(true);
    const [isSearch, setSearch] = useState();

    const OpenSearch = (e) => {
        if(!isOpenSearch){
            alert('Вы искали: ' + isSearch);
        }
        else{
            setOpenSearch(false);   
        }
    }
    const inputHandler = (e) => {
        setSearch(e.target.value);
    }
    const CloseSearch = () => {
        setOpenSearch(true);
        handleReset();
    }
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        setSearch('');
      };

    return ( 
        <div  className={isOpenSearch ? "main-search" : "main-search open"}>
            <div  className="input-group">
                <input type="text" id="m-search"  onChange={inputHandler} className="form-control" placeholder="Search . . ." style={isOpenSearch ? style.close : style.open}/>
                <a href="#!"  onClick={CloseSearch} className="input-group-append search-close">
                    <i  className="feather icon-x input-group-text"></i>
                </a>
                <span  className="input-group-append search-btn btn btn-primary">
                    <i  onClick={OpenSearch} className="feather icon-search input-group-text"></i>
                </span>
            </div>
        </div>
     );
}

export default HBSearch ;