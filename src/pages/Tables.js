import { useEffect, useState } from "react";
import tables from "../jul2021.json";
import MTable from "../libery/MTable/MTable";
import { Form, Button} from 'react-bootstrap';

function Tables() {
    
    const [ datatable, setDatatable] = useState(tables.data);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        let filteredData = tables.data.filter(value => {
                return (
                    value[0].toLowerCase().includes(search.toLowerCase()) ||
                    value[1].toLowerCase().includes(search.toLowerCase()) ||
                    value[2].toString().toLowerCase().includes(search.toLowerCase()) ||
                    value[3].toLowerCase().includes(search.toLowerCase()) ||
                    value[4].toLowerCase().includes(search.toLowerCase())
                );
                });
            setDatatable(filteredData);
    },[search])

    const tname = ["Дата","Клиент","Номер исх. док.","Наименование техники","Адрес доставки","Цена клиенту","Кол-во","Сумма клиенту","Поставщик","Цена нам","Кол-во","Сумма нам","Оплата пост","Прибыль","765,714.05"]
    
    return ( 
        <>
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5>Striped Table</h5>
                    </div>
                    <div className="card-block table-border-style">
                        <Form className="d-flex-my">
                            <Form.Control
                            type="search"
                            placeholder="Search in Table..."
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearch}
                            />
                            <Button variant="primary">Clear</Button>
                        </Form>
                        <div className="table-responsive">
                            <MTable data={datatable} rowsPerPage={15} title={tname} limitcol={8}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Tables;