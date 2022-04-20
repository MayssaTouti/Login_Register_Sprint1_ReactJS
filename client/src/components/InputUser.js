import React , {Fragment, useState , useEffect} from "react";

const InputUser = () => {
const [email, setEmail] = useState(""); 
const [name, setName] = useState(""); 
const [password, setPassword] = useState(""); 
const [role_id, setRoleId] = useState(""); 

const initialvalues={email:"" ,name:"",password:"", role_id:""};
const [formValues ,setFormValues] =useState(initialvalues);
const [formErrors ,setFormErrors] =useState({});
const [isSubmit, setIsSubmit] = useState(false); 

const handleChange=(e) =>{
    const {name,value }  =e.target ;
    setFormValues({...formValues,[name]:value});
    setIsSubmit(true)    
}
const onSubmitForm = async e => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    e.preventDefault();     try {
     const body = { email,name,password,role_id}; 
        const response = await fetch("http://localhost:5000/users", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body)
            }); 
         window.location="/"; 
     console.log(response); 

    } catch (err) {
        console.error(err.message); 
        }}; 

        useEffect (()  =>  {
            console.log (formErrors);
              if(Object.keys(formErrors).length === 0 && isSubmit){
              }
            },[formErrors]);
                const validate =(values)  =>{
               const errors={};
    //var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

               if (!values.email) {
                 errors.email = "Please enter valid email address.";
             
               }
                   if(!values.name){
                    errors.name ="  Name is required !!"
                   }
                   if(!values.password){
                    errors.password =" Password is required !!";
                  }
                  if(!values.role_id){
                    errors.role_id =" Role user is required !!";
                  }
                      return errors ;
               
                }
            
return (
 <Fragment>
        
<h1 className="text-center mt-5"> User List </h1>
<form className="/" onSubmit={onSubmitForm}>

<input type="email" className="form-control" width={45} placeholder="email@gmail.com"  onBlur={handleChange} name="email" value={email} onChange={e => setEmail(e.target.value)}
 />
 <p  style={{color:"red"}}>{formErrors.email}</p>

 <br></br>
 <input type="text" className="form-control" name="name" onBlur={handleChange}
 placeholder="name" value={name} onChange={e => setName(e.target.value)}
 />
 <p  style={{color:"red"}}>{formErrors.name}</p>
 <br></br>
 <input type="password" className="form-control" name="password" placeholder="password" onBlur={handleChange} value={password} onChange={e => setPassword(e.target.value)}
 />
 <p  style={{color:"red"}}>{formErrors.password}</p>

 <br></br>
<input type="text" className="form-control"  name="role_id" placeholder="role user" onBlur={handleChange} value={role_id} onChange={e => setRoleId(e.target.value)} /><br/>
<p  style={{color:"red"}}>{formErrors.role_id}</p>
<button className="btn btn-success"> Add</button>


</form>

</Fragment>


); 


}; 
export default InputUser; 