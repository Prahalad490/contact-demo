import React, { useEffect, useState } from "react";
import axios from "axios";
import { Zoom } from "@material-ui/core";
import Contactcard from "./components/Contactcard";
import { Link } from "react-router-dom";


function App() {

  // hook for fetch Api data    
  const [ contacts , setContacts ] = useState([]);
  
  // hook for loading screen 
  const [ isloading, setloading ] = useState(false);

  const [ data, setData] = useState([]);

  const [ sortType, setSortType] = useState("id");

  // useEffect run only once to get the data 
  useEffect(() => {
    const fetchdata = async() => {

      setloading(true);
      await axios.get("https://reqres.in/api/users?delay=3")
      .then(res => {
        console.log(res.data.data);
        setContacts(res.data.data)
      })
      setloading(false);
    }
    fetchdata();
  },[])

  

  useEffect(() => {
    function sortarray(sortType) {
      const first_name = "first_name";
      const id = "id";
      const last_name = "last_name";

      var sorted;

      if (id === sortType) {
        sorted = [...contacts];
      }

      if (first_name === sortType) {
        sorted = [...contacts].sort((a, b) => a.first_name.localeCompare(b.first_name));
      } 
      else if (last_name === sortType) {
        sorted = [...contacts].sort((a, b) => a.last_name.localeCompare(b.last_name));
      }

      setData(sorted);
    }
    sortarray(sortType);
  },[sortType,contacts]);


  function dropdownController(e) {
    setSortType(e.target.value);
  }



  return (
    <div>
      <div className="heading">
        <h1>USERS</h1>
      </div>
      <div className="contact-container">
        
        
        {isloading ? 
          (<div className="loader-container">
            <div className="loader"></div>
            <h1>loading...</h1>
          </div>)
          :
          <div>
            
              <div className="sort-tags">
                <p>Sort By:</p>
                <select onChange={dropdownController} >
                    <option value="id">Default</option>
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                </select>
              </div>
              
            <Zoom in={true}>
              <div className="row">
                
                {data.map(contact => {
                  return(
                        <div className="col-lg-4 col-md-6" key={contact.id}>
                          <Link to={"/" + contact.id}>
                            <Contactcard  src={contact.avatar} firstname={contact.first_name} lastname={contact.last_name} email={contact.email}/>
                          </Link>
                        </div>
                  )
                })}
              </div>
            </Zoom>
          </div>
        }
        
        
      </div>
    </div>
  );
}

export default App;
