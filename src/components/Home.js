import React, {useState} from "react"
import {Link} from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";
import Table from './Table.js';

const get_leads=gql`
query{
    leads{
      data{
        id
        attributes{
          Name,
          email,
          Source,
          Status,
          date,
          Time,
          Notes,
          createdAt,
          updatedAt

        }
      }
    }
  }
`;

const Home =({userInfo, setUserInfo})=>{

    const {error,data,loading}=useQuery(get_leads);
    
    return(
        <div>
           <h1>Leads Information</h1> 
           <Table data={data} userInfo={userInfo} setUserInfo={setUserInfo}/>
        </div>
    );
}

export default Home;