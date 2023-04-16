import HBDropNoti from "./HBDropNoti";
import HBDropUser from "./HBDropUser";

const user = {img: 'http://localhost:3000/assets/images/user/avatar-1.jpg' , name: 'John Doe'};

const noti = [
    {img: 'http://localhost:3000/assets/images/user/avatar-1.jpg', name: 'John Doe', time: '30 min', desc: 'New ticket Added'},
    {img: 'http://localhost:3000/assets/images/user/avatar-2.jpg', name: 'Joseph William', time: '30 min', desc: 'Prchace New Theme and make payment'},
    {img: 'http://localhost:3000/assets/images/user/avatar-3.jpg', name: 'Sara Soudein', time: '30 min', desc: 'currently login'},
];


function HBRight () {

    return ( 
        <ul  className="navbar-nav ml-auto">
            <li>
                <HBDropNoti noti={noti}/>
            </li>
            <li>
                <HBDropUser user={user}/>
            </li>
        </ul>
     );
}

export default HBRight ;