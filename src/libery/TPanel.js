import React, { useState } from "react";
import PTable from "./PTable";

function TPanel(props) {

    //console.log(props.data);
    const table_data =
        {
            thead: ["User", "Activity", "Time", "Status", ""],
            tbody: [
  
                {
                    col_0: {
                            img: "assets/images/user/avatar-1.jpg",
                            name: "Ida Jorgensen"
                        },
                    col_1: "The quick brown fox",
                    col_2: "3:28 PM",
                    col_3: "Done",
                    col_4: ""
                },
                {
                    col_0: {
                            img: "assets/images/user/avatar-2.jpg",
                            name: "Ida Jorgensen"
                        },
                    col_1: "The quick brown fox",
                    col_2: "3:28 PM",
                    col_3: "Missed",
                    col_4: ""
                },
                {
                    col_0: {
                            img: "assets/images/user/avatar-3.jpg",
                            name: "Ida Jorgensen"
                        },
                    col_1: "The quick brown fox",
                    col_2: "3:28 PM",
                    col_3: "Delayed",
                    col_4: ""
                },
                {
                    col_0: {
                            img: "assets/images/user/avatar-1.jpg",
                            name: "Ida Jorgensen"
                        },
                    col_1: "The quick brown fox",
                    col_2: "3:28 PM",
                    col_3: "Done",
                    col_4: ""
                },
                {
                    col_0: {
                            img: "assets/images/user/avatar-3.jpg",
                            name: "Ida Jorgensen"
                        },
                    col_1: "The quick brown fox",
                    col_2: "3:28 PM",
                    col_3: "Done",
                    col_4: ""
                }
            ]
        }
    const table_data1 =
    {
        thead: ["User", "Activity", "Time", "Status", ""],
        tbody: [

            {
                col_0: {
                        img: "assets/images/user/avatar-3.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "3:28 PM",
                col_3: "Done",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-1.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "5:30 PM",
                col_3: "Done",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-2.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "13:28 PM",
                col_3: "Delayed",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-3.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "16:28 PM",
                col_3: "Delayed",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-1.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "3:28 PM",
                col_3: "Missed",
                col_4: ""
            }
        ]
    }
    const table_data2 =
    {
        thead: ["User", "Activity", "Time", "Status", ""],
        tbody: [

            {
                col_0: {
                        img: "assets/images/user/avatar-1.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "6:20 PM",
                col_3: "Missed",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-2.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "8:45 PM",
                col_3: "Missed",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-3.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "20:55 PM",
                col_3: "Delayed",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-1.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "13:05 PM",
                col_3: "Done",
                col_4: ""
            },
            {
                col_0: {
                        img: "assets/images/user/avatar-3.jpg",
                        name: "Ida Jorgensen"
                    },
                col_1: "The quick brown fox",
                col_2: "7:30 PM",
                col_3: "Delayed",
                col_4: ""
            }
        ]
    }
    const [isAvtives, setActives] = useState(0);

    return ( 
        <div className="col-xl-8 col-md-12 m-b-30">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className={isAvtives === 0 ? "nav-link active show" : "nav-link"} onClick={()=> setActives(0)} id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Today</a>
                </li>
                <li className="nav-item">
                    <a className={isAvtives === 1 ? "nav-link active show" : "nav-link"} onClick={()=> setActives(1)} id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">This Week</a>
                </li>
                <li className="nav-item">
                    <a className={isAvtives === 2 ? "nav-link active show" : "nav-link"} onClick={()=> setActives(2)} id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">All</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className={isAvtives === 0 ? "tab-pane fade active show" : "tab-pane fade"} id="home" role="tabpanel" aria-labelledby="home-tab">
                    <PTable table={table_data}/>
                </div>
                <div className={isAvtives === 1 ? "tab-pane fade active show" : "tab-pane fade"} role="tabpanel" aria-labelledby="profile-tab">
                    <PTable table={table_data1}/>
                </div>
                <div className={isAvtives === 2 ? "tab-pane fade active show" : "tab-pane fade"} role="tabpanel" aria-labelledby="contact-tab">
                    <PTable table={table_data2}/>
                </div>
            </div>
        </div>
     );
}

export default TPanel;

//active show