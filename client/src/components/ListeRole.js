import React, { Fragment , useEffect , useState }  from "react";
import EditRole from "./EditRole";

const ListRole = () => {


const [roles, setRoles] = useState([]); 

 //delete function 
const deleteRoles = async (id) => {
      try {
       const deleteRoles = await fetch(`http://localhost:5000/roles/${id}`,{
       method: "DELETE"
       }); 
      console.log(deleteRoles); 
       setRoles(roles.filter(role => role.role_id !== id)) 
      } catch (err) {
          console.error(err.message); 
      }
  }; 

const getRoles = async () => {
    try {
        const response = await fetch("http://localhost:5000/roles"); 
        const jsonData = await response.json(); 

    setRoles(jsonData); 

       // console.log(jsonData); 
    } catch (err) {
        console.log(err.message); 
        
    }
}
  useEffect(() => {
    getRoles();
   
    
   }, []); 

    console.log(roles); 

return (

<Fragment>

   {/*   <div className="input-group" data-widget="sidebar-search">
        <input className="form-control "
        onChange={handleSearch}
        type="search" placeholder="Search..." aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar" onSubmit={handleSearch}>
            <i className="fas fa-search fa-fw" />
        </button>
        </div>
         {JSONDATA.map((val,key ) =>{
      return (
      <div  className="user" key={key}>
        <p>{val.role_name}</p>
      </div>
      )} )}
      
      </div>
      <div className="search"> 
     */}{/*roles
      .filtre((val)  =>{
      return val.title.toLowerCase().includes(search.toLowerCase());
      })
      .map ((val)  =>{
      return <div  className="search" key={val.role_id} >
      {val.role_name}
      {val.role_description}
       </div>
    
  
  })

 </div>*/}
 {""}
<h4 className="text-center mt-5"> Liste Roles </h4>
<table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>id Role  </th>
        <th>Role Name </th>
        <th>Role description</th>
        <th> Action </th>
      </tr>
    </thead>
    <tbody>
        
   
  { roles.map(role => (
     <tr key={role.role_id}>
           <td>{ role.role_id }</td>
         <td>{ role.role_name }</td>
         <td> {role.role_description}</td>
         <td> <EditRole role={role} />  </td>
 
     <td>  <button className="btn btn-danger"  onClick={() =>{  if ((window.confirm('Are you sure you to delete this role ?')) === true ){
           deleteRoles(role.role_id)
         } 
         else{this.onSave(role.role_id) } 
         }
      } > Delete</button> </td>
       </tr> 
  ) )}
  

    </tbody>
  </table>



</Fragment>

)


}
export default ListRole ; 