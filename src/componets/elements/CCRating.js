//import { useState } from "react";

function CCRating(props) {

    let raiting = props.data;

    const sum = (data) => {
        let x = 0;
        return data.map(i => x+=i, x).reverse()[0];
    }
    
    const progress = (summ, param) => {
        return (param * 100)/summ;
    }

    const Raiting = (marray) => {
        let Ones = 0;
        let pOnes = [];
        let pSumm = 0;
    
        let mSum = marray.map((number) => 
            {
                return Ones += number;
            }
        ).reverse()[0];
        
        marray.map ((number)=>{
    
            let ch = ((number*100)/mSum)/100;
            pOnes.push(ch);
            return 0;
        });
    
        let mRat = pOnes.map((number, i) => {
            return pSumm += number * (5 - i);
        }).reverse()[0];
    
    
        return mRat.toFixed(1);
    }

    return ( 
        <div className="col-xl-4 col-md-6">
            <div className="card user-list">
                <div className="card-header">
                    <h5>Rating</h5>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center m-b-20">
                        <div className="col-6">
                            <h2 className="f-w-300 d-flex align-items-center float-left m-0">{Raiting(raiting)}<i className="fas fa-star f-10 m-l-10 text-c-yellow"></i></h2>
                        </div>
                        <div className="col-6">
                            <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fas fa-caret-up text-c-green f-22 m-l-10"></i></h6>
                        </div>
                    </div>
                    <div className="row">
                        {raiting.map((data, i)=>{
                            return(
                                <div key={i} className="col-xl-12">
                                    <h6 className="align-items-center float-left"><i className="fas fa-star f-10 m-r-10 text-c-yellow"></i>{5-i}</h6>
                                    <h6 className="align-items-center float-right">{data}</h6>
                                    <div className="progress m-t-30 m-b-20" >
                                        <div className="progress-bar progress-c-theme" role="progressbar"  style={{width: progress(sum(raiting), data)*7}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CCRating;