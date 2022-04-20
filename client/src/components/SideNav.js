import React from 'react'

//import InputUser from './InputUser';
//import ListeUser from './ListeUser';
const  SideNav= () =>{

  return (
<div>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <br></br>
  <a href="index3.html" className="brand-link">
    <img src="dist/img/wedo.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <br></br>
    <span className="brand-text font-weight-light">Wedo Consult </span>
  </a>
<br></br>
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
 
   
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>

    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
 
      
        <li className="nav-item">
       <a href="/" className="nav-link">
          <i className="nav-icon fas fa-table" />
            
            <p>
               Users Wedo
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
           
            <li className="nav-item">
             <a  href="/" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>  ADD User</p>
                
             
                </a>    
            </li>
        
            <li className="nav-item">
              <a href="/users" className="nav-link">
                <i className="far fa-circle nav-icon" />
               <p>List Users</p>
              </a>
            </li>
          </ul>
         
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
          <i className="nav-icon fas fa-edit" />
            
            <p>
               Roles Users
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/forms/validation.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>ADD Role User</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/forms/validation.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>List Roles</p>
              </a>
            </li>
          </ul>
        </li>
        
     
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Modeles
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
           
            <li className="nav-item">
              <a href="pages/examples/profile.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>ADD Modele</p>
              </a>
            </li>
           
            <li className="nav-item">
              <a href="pages/examples/projects.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>List Modeles</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/register" className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              Users Mobile
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>
                  Add User
                
                </p>
              </a>
              
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Listes Users</p>
                  </a>
                </li>
              
           
            </li>
          
         
         
          </ul>
        </li>
     
        
     
      
       
       
      
      </ul>
    </nav>
  
  </div>
 
</aside>

 </div>


 )

}

export default SideNav ;
