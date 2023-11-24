import React, { useState } from "react";
import { addOne } from './services/students'
const AddStudent = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addOne({ fullName: name, email: email });
      console.log('ok', response);
      setName('');
      setEmail('');
    } catch (error) {
      console.log('error', error);
    }
     };
  return (
<div className="container">
  <form onSubmit={handleSubmit}>
  <br></br>
  <div className="form-group row">
    <br></br>
    
    <label htmlFor="fullName" className="col-sm-2 col-form-label">Emri Mbiemri</label>
    <div className="col-sm-10">
      <input type="text"
             className="form-control" 
             id="fullName" 
             placeholder="Emri dhe mbiemri i klientit"
             name="fullName"
             value={name}
             onChange={(e) => setName(e.target.value)} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="email" className="col-sm-2 col-form-label">Produkti</label>
    <div className="col-sm-10">
      <input type="string" 
            className="form-control" 
            id="email" 
            placeholder="Produkti i kërkuar nga klienti"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            
    </div>
    
  </div>
  
  <div className="form-group row">
    <div style={{ width: '100vw' }} className="col-sm-10">
      <button type="submit" style={{ width: '100%' }} className="btn btn-secondary">Shto porosinë </button>
    </div>
  </div>
</form>
    </div>
  );
};
export default AddStudent