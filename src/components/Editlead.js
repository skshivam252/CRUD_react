import React, {useState,useEffect} from "react";

import {useHistory,useParams} from "react-router-dom";



const Editlead=({userInfo})=>{

    const [lead,setlead]=useState({
        name:"",
        email:"",
        source:"",
        status:"",
        date:"",
        time:"",
        createdAt:"",
        updatedAt:"",
        publishedAt:"",
        notes:""

    });

    // useEffect(() => {
    //     const name = userInfo.info.attributes.Name?userInfo.info.attributes.Name:"";
    //     const email = userInfo.info.attributes.email?userInfo.info.attributes.email:"";
    //     const source = userInfo.info.attributes.Source?userInfo.info.attributes.Source:"";
    //     const status = userInfo.info.attributes.Status?userInfo.info.attributes.Status:"";
    //     const date = userInfo.info.attributes.date?userInfo.info.attributes.date:"";
    //     const time = userInfo.info.attributes.time?userInfo.info.attributes.time:"";
    //     const createdAt = userInfo.info.attributes.createdAt?userInfo.info.attributes.createdAt:"";
    //     const updatedAt = userInfo.info.attributes.updatedAt?userInfo.info.attributes.updatedAt:"";
    //     const notes = userInfo.info.attributes.notes?userInfo.info.attributes.notes:"";
    //     setlead({
    //         name,
    //         email,
    //         source,
    //         status,
    //         date,
    //         time,
    //         createdAt,
    //         updatedAt,
    //         notes
    //     })
    // }, [])
    
    const {name, email, source, status,date,time,createdAt,updatedAt,publishedAt, notes}=lead;

    const onInputChange= e=>{
        setlead({...lead,[e.target.name]:e.target.value})
    }

    const onSubmit= async e=>{
        e.preventDefault();
          
    }
    console.log(userInfo.action)
    

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Lead</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your name"
                        name="name"
                        value={name?name:""}
                        onChange={e=>onInputChange(e)}
                        />
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        name="email"
                        value={email?email:""}
                        onChange={e=>onInputChange(e)}
                         />
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Source"
                        name="source"
                        value={source?source:""}
                        onChange={e=>onInputChange(e)}
                          />
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Status"
                        name="status"
                        value={status?status:""}
                        onChange={e=>onInputChange(e)}
                          />
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter date"
                        name="date"
                        value={date?date:""}
                        onChange={e=>onInputChange(e)}
                        />
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter time"
                        name="time"
                        value={time?time:""}
                        onChange={e=>onInputChange(e)}
                        />
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Notes"
                        value={notes?notes:""}
                        name="notes"
                        onChange={e=>onInputChange(e)}
                         />
                        
                    </div>
                    <button className="btn btn-primary btn-block"> Add lead </button>
                    
                </form>
            </div>
        </div>
    );
    
    return null;
}

export default Editlead;