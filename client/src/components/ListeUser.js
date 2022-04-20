import React, { Fragment , useEffect , useState }  from "react";
import EditUser from "./EditUser";
const ListeUser = () => {
  const [utilisateur, setUser] = useState([]); 
 // const [roles, setRoles] = useState([]); 

  //delete function 
  const deleteUser = async (id) => {
      try {
       const deleteUser = await fetch(`http://localhost:5000/users/${id}`,{
           method: "DELETE"
       }); 
        console.log(deleteUser); 
       setUser(utilisateur.filter(utilisateur => utilisateur.iduser !== id)) 
      } catch (err) {
          console.error(err.message); 
      }
  }; 

const getUser = async () => {
    try {
        const response = await fetch("http://localhost:5000/users"); 
        const jsonData = await response.json(); 

        setUser(jsonData); 
       
       // console.log(jsonData); 
    } catch (err) {
        console.log(err.message); 
        
    }
}
    useEffect(() => {
    getUser();
    }, []); 

    console.log(utilisateur); 

return (

<Fragment>
    {""}
    <h4 className="text-center mt-5"> Liste Users </h4>
<table className="table mt-5 text-center"  >
    <thead  >
      <tr>
        <th >id User  </th>
        <th  >User Email </th>
        <th >User Role </th>
        <th style={{width: 20 , align: "center"}}> Actions</th>
      </tr>
    </thead>
    <tbody >
  
    
  {utilisateur.map(user => (
     <tr key={user.iduser   }  >
           <td >{ user.iduser }</td>
         <td >{ user.email }</td>
         <td>{  user.role_id }</td>

         <td  > <EditUser user={user} />  </td>


         <td>  <button className="btn btn-danger"  onClick={() =>{  if ((window.confirm('Are you sure you to delete this user ?')) === true ){
           deleteUser(user.iduser)
         } 
         else{this.onSave(user.iduser) } 
         }
      } > Delete</button> </td>     </tr> 
  ) )}

    </tbody>
  </table>



</Fragment>

)


}
export default ListeUser ; 