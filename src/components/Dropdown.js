import React, { useState } from 'react';
import './Dropdown.css';
import View from './View';
import {Link} from 'react-router-dom'; 
import { gql ,useMutation} from '@apollo/client';

const dellead=gql`
mutation dlead($id:ID!){
    deleteLead(id:$id)
    {
        data{
            id
        }
    }
  }
`;





const Dropdown = ({info, userInfo, setUserInfo}) => {
    const menuItems = [
        { name: 'View Lead', index: 1 , l:"/viewlead"},
        { name: 'Edit Lead', index: 2, l:"/editlead"},
        { name: 'Delete Lead', index: 3, l:"/"},
      ];
  const [showMenu, setShowMenu] = useState(false);
  var id_
  if(userInfo){
    id_ = userInfo.info.id
  } else {
    id_ = 0
  }

  console.log(id_)
  
    const [dlead, {data,loading, error}]= useMutation(dellead,{
        variables:{
            id:id_
        }
    })
  
  
  const toggleList = () => {
    setShowMenu(!showMenu);
  };

  const action = (command) => {
    setUserInfo({
        action: command.index
        
    })
    setShowMenu(!showMenu);
    if(command.index==3){
        console.log(userInfo.info.id)
        setUserInfo({action: 0})
        dlead();
        //console.log(data)
        console.log('yo2')
        window.location.reload()
    }
   
  }

  return (
    <div className="kebab-menu">
      <button className="kebab-menu-button" onClick={toggleList}>
        &#x22EE;
      </button>
      {showMenu && (
        <ul className="kebab-menu-items">
          {menuItems.map((item,id) => (
            <Link key={id} className="kebab-menu-item" to={item.l} onClick={() => action(item) }>
                {item.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;