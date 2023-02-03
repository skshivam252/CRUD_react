import React from "react"
import {Link} from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";
import Dropdown from './Dropdown';

const Table =({data, userInfo, setUserInfo})=>{

    const handleClick = (info) => {
        setUserInfo({info: {id: info.id }})
    }

    if(data) {
    return(
           <table class="table">
            <thead>
                <tr className="bg-dark text-white">
                    <th scope="col"> No. </th>
                    <th scope="col"> Name </th>
                    <th scope="col"> Email </th>
                    <th scope="col"> Status </th>
                    <th scope="col"> Action </th>
                </tr>
            </thead>
            <tbody>
             {
            data.leads.data.map((lead,index)=>(
                    <tr>
                    <th scope="row"> {index+1} </th>
                    <td>{lead.attributes.Name}</td>
                    <td> {lead.attributes.email}</td>
                    <td> {lead.attributes.Status} </td>
                    <td onClick={() => handleClick(lead)}>
                        <Dropdown info={lead} userInfo={userInfo} setUserInfo={setUserInfo}/>

                    </td>
                    </tr>
                ))}
            
            </tbody>

           </table>
    ) }
    else {
        return null;
    }
}

export default Table;