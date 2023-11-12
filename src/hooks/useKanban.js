import { useState } from "react";
import axios from 'axios';

const API_URL = "task";
const Port = 5000;
const baseurl = 'http://' + window.location.hostname + ':' + Port + '/' + API_URL;

const useKanban = () => {
    const [kdata, setKdata]  = useState([]);
    
    const [data, setData] = useState();

    const [status, setStatus] = useState([]);

    const GetTasks = () =>{
        axios.get(baseurl)
        .then(res => setKdata(res.data.data))
        .catch(error => console.log(error));
    }
    const GetTasksId = (data) =>{
        axios
        .get(baseurl + '/' + data.id)
        .then(response => {
            setData(response.data.data[0]);
        })
        .catch(error => console.log(error));
    }
    const InsertTaskItem = (data) => {
        axios
        .post(baseurl, data)
        //.then(response => console.log(response.data)) //response.data
        //.catch(error => console.log(error));
    }
    const UpdateTaskItem = (_guid, _status) => {
        axios
        .put(baseurl, {
            guid: _guid,
            status: _status
        })
        //.then(response => console.log(response.data))
        //.catch(error => console.log(error));
    }
    const GetStatus = () =>{
        axios
        .get(baseurl + '/status')
        .then(response => {
            setStatus(response.data.data);
        })
        //.catch(error => console.log(error));
    }
    const DelTasksId = (data) =>{
        axios
        .delete(baseurl + '/' + data.id)
        //.then(response => {console.log("Delete: " + data)})
        //.catch(error => console.log(error));
    }
    return {kdata, data, status, setKdata, GetStatus, GetTasks, GetTasksId, InsertTaskItem, UpdateTaskItem, DelTasksId};
}

export default useKanban;