import {React,useState} from "react";
import { gql, useMutation } from "@apollo/client";
import { redirect, Link } from "react-router-dom";

const mutelead=gql`
mutation mLead($name:String, $email:String,$notes:String,$date:Date,$time:Time){
    createLead(data:{
        Name: $name,
        email:$email,
        date: $date,
        Notes: $notes,
        Time: $time
      }){
      data{
        id
      }
    }
  }
`;


const Addlead=()=>{

    const [lead,setlead]=useState({
        name:null,
        email:null,
        source:null,
        status:null,
        date:null,
        time:null,
        createdAt:null,
        notes:null,
        updatedAt:null,
        publishedAt:null

    });

    const {name, email, source, status,date,time,createdAt,notes,updatedAt,publishedAt}=lead;

    const onInputChange= e=>{
        setlead({...lead,[e.target.name]:e.target.value})
    }

    const [mLead, {data,loading, error}]= useMutation(mutelead,{
        variables:{
            name: lead.name,
            email:lead.email,
            notes:lead.notes,
            date:lead.date,
            time:lead.time  
        }
    })

    const onSubmit= e=>{
        e.preventDefault();
        mLead();
        setlead({
            name:null,
            email:null,
            source:null,
            status:null,
            date:null,
            time:null,
            createdAt:null,
            notes:null,
            updatedAt:null,
            publishedAt:null
    
        })
    }
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a Lead</h2>
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
}

export default Addlead


/*

mutation{
  createLead(data:{
      Name: "ajkd",
      email:"ghfjkfj@hgfh.com",
      Source: google,
      Status: New,
      date: "2011-12-01",
      Time: "12:12:12.111",
      Notes: "assjlhfdslk"
    }){
    data{
      id
      attributes{
        Name
      }
    }
  }
}

*/