import React, {useState,useEffect} from "react";
import {Link, useHistory,useParams} from "react-router-dom";

const View=({info, userInfo})=>{

    console.log(userInfo)

    if(userInfo.action == 1) {
    return(
        
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                Back to Home
            </Link>
            <h1 className="display-4"> ID: {userInfo.info.id} </h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item"> Name: {userInfo.info.attributes.Name}</li>
                <li className="list-group-item"> Email: {userInfo.info.attributes.email}</li>
                <li className="list-group-item"> Status: {userInfo.info.attributes.Status}</li>
                <li className="list-group-item"> Source: {userInfo.info.attributes.Source}</li>
                <li className="list-group-item"> date: {userInfo.info.attributes.date}</li>
                <li className="list-group-item"> time: {userInfo.info.attributes.time}</li>
                <li className="list-group-item"> Note: {userInfo.info.attributes.Notes}</li>
                <li className="list-group-item"> createdAt: {userInfo.info.attributes.createdAt}</li>
                <li className="list-group-item"> updatedAt: {userInfo.info.attributes.updatedAt}</li>
            </ul>
            
        </div>
    );
    }
    return null;
}

export default View;