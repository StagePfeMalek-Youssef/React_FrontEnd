import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReunionService from '../../../services/AdminService/ReunionService';



const ListReunion = () => {

    const [reunions, setReunion] = useState([])

    useEffect(() => {

        getAllReunions();
    }, [])

    const getAllReunions = () => {
        ReunionService.getByActive().then((response) => {
            setReunion(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='main__container'>

              <marquee scrollamount="5" bgcolor="yellow" direction="left">
              {
                                    reunions.map(
                                        reunion =>
                                            <div key={reunion.id}>
                                                <p> on a reunion sur ChatRoom {reunion.datereunion} sur  {reunion.sujet}</p>
                    
                                            </div>
                                    )
                                }




              </marquee>



           
        </div>
    )
}

export default ListReunion;