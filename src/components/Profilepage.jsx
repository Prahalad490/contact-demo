import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams , Link} from "react-router-dom";
import { Fab , Zoom } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const Profilepage = () => {

    const { id } = useParams();

    const [ isloading, setloading ] = useState(false);

    const [ specificUser , setSpecificUser ] = useState({})


    useEffect(() => {
        const fetchdata = async() => {
    
          setloading(true);
          await axios.get(`https://reqres.in/api/users/${id}`)
          .then(res => {
            console.log(res.data);
            setSpecificUser(res.data.data)
          })
          setloading(false);
        }
        fetchdata();
      },[id])

    return(
        <div>
    
            {isloading ? 
                <div className="loader-container">
                    <div className="loader"></div>
                    <h1>loading...</h1>
                </div>
            :
                
                <div className="profile-body">
                    
                    <Zoom in={true}>
                        <div className="profile-container">
                            <Link to={"/"}>
                                <Fab >
                                    <CloseIcon/>    
                                </Fab>
                            </Link>
                            <h1>{specificUser.first_name + " " + specificUser.last_name}</h1>
                            <img src={specificUser.avatar} alt="contact"></img>
                            <h6>Email: {specificUser.email}</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis.
                            </p>
                        </div>
                    </Zoom>
                </div>
            }
            
        </div>
    )
}

export default Profilepage;