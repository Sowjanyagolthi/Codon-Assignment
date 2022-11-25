import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Registration.css'

 function Registration() {
    const [values,setValues]=useState({
        customer_name: '',
        email:'',
        password:'',
        retypePassword:'',
        phone:'',
        Gender:'',
        zipcode:'',
        address:'',
        state:'',
        city:''
    })
    const handleNameChange = (event) => {
        setValues(() => ({
            ...values,
         customer_name: event.target.value,
        }));
    };
   
    const handleEmailChange=(event)=>{
        setValues(() => ({
            ...values,
            email: event.target.value,
        }));
    }

     const handlePasswordChange =(event)=>{
        setValues(() => ({
            ...values,
            password : event.target.value,
        }));
    }
    const handlePhoneNumberChange =(event)=>{
        console.log(event.target.value)
        setValues(() => ({
            ...values,
            phone : event.target.value,
        }));
    }

    const handleGenderChange=(event)=>{
        setValues(() => ({
            ...values,
            Gender : event.target.value,
        }));
    }

    const handleAddressChange=(event)=>{
        setValues(() => ({
            ...values,
            address: event.target.value,
        }));
    }

    const handleRetypePasswordChange=(event)=>{
        setValues(() => ({
            ...values,
        retypePassword:event.target.value,
        }));
    }

    const handleZipCode=(event)=>{
        setValues(() => ({
            address:'',
            state:'',
            city:'',
            zipcode : event.target.value,
        }));
    }
 
     useEffect(()=>{

    const fetchTheData =()=>{
         const{zipcode}=values;
         let post={};
        if(zipcode.length===6)
        {
        axios.get(`https://api.postalpincode.in/pincode/${zipcode}`)
        .then(res=>{
            post=res.data[0].PostOffice[0]
            setValues({
                ...values,
                state:post.State,
                city:post.District   
            })})
        .catch(err=>console.log(err))        
      }

    }
      fetchTheData()
    },[values.zipcode])

    const onSubmitButton=()=>{
        console.log(values)
    }
  return (
    <div>
     <form name="registration" className="registartion-form">
            <table>
            <tr>
                    <td><label for="name">Name:</label></td>
                    <td>
                        <input 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder="Name"
                        value={values.customer_name}
                        onChange={handleNameChange}
                        required/></td>
            </tr>
            <tr>
                    <td><label for="email">Email:</label></td>
                    <td>
                        <input 
                        type="email"
                        name="email" 
                        id="email"
                        placeholder="Email" 
                        value={values.email}
                        onChange={handleEmailChange}
                        required /></td>
                </tr>
                <tr>
                    <td><label for="password">Password:</label></td>
                    <td>
                        <input
                         type="password" 
                         name="password" 
                         id="password" 
                         value={values.password}
                         onChange={handlePasswordChange}
                         required
                   /></td>
                </tr>
                <tr>
                    <td><label for="password">Retype Password:</label></td>
                    <td>
                    <input 
                          type="password" 
                          name="password" 
                          id="retypePassword" 
                          value={values.retypePassword}
                          onChange={handleRetypePasswordChange}
                          required/></td>
                </tr>
               {(values.password!==values.retypePassword)?<p>Password Doesnot Match</p>:""}
                <tr>
                    <td><label for="phoneNumber">Phone Number:</label></td>
                    <td>
                    <input 
                    type="text"
                     name="phoneNumber"
                    id="phoneNumber" 
                    value={values.phone}
                    onChange={handlePhoneNumberChange}
                    required/></td>
                </tr>
                <tr>
                    <td><label for="gender">Gender:</label></td>
                    <td><input type="radio" name="gender" value="male" onChange={handleGenderChange} /> Male
                        <input type="radio" name="gender" value="female" onChange={handleGenderChange} /> Female
                        <input type="radio" name="gender" value="other" onChange={handleGenderChange}/> Other
                    </td>
                </tr>
                <tr>
                    <td><label for="zipcode">Zip Code:</label></td>
                    <td><input type="number" name="zipcode" onChange={handleZipCode}/></td>
                </tr>
                <tr>
                    <td><label for="State">State:</label></td>
                    <td><input type="text" name="State" placeholder="State"  value={values.state} required/></td>
                </tr>
            <tr>
                    <td><label for="City">City:</label></td>
                    <td><input type="text" name="City" placeholder="City" value={values.city} required/></td>
            </tr>
            <tr>
                    <td><label for="Address">Address:</label></td>
                    <td><textarea 
                    name="Address"
                     placeholder="Address" 
                    value={values.address} 
                    onChange={handleAddressChange}
                    ></textarea></td>
                </tr>
                
                <tr>
                    <td><input type="submit" class="submit" value="Register" onClick={onSubmitButton} /></td>
                </tr>
            
            </table>
  </form>
    </div>
  )
}


export default Registration;