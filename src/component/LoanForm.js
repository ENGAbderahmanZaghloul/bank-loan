import './cssFile/loanform.css'
import Modal from './Modal';
import { useState } from 'react';


export default function LoanForm(){
    const [errorMsg, setErrorMsg] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loanValue, setLoanValue] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salarySelect:<option>less than 3000 L.E</option>,
    });

function handleBtn(event){
    event.preventDefault();
    if(loanValue.age < 18 || loanValue.age > 100){
        setErrorMsg("the age isn't allowed");
    }else{
        setErrorMsg(null);
    }
    if(loanValue.phoneNumber.length !== 11  ){
        setErrorMsg("The phone number isn't allowed");
    }else {
        setErrorMsg(null);
    }
    setShowModal(true);
    };
function handleDiv(){
    if(showModal){
        setShowModal(false);
    }
    };
    return (
        <div onClick={handleDiv} className='form-container'>
            <form className='form-inputs'>
                <h1>Requesting a Loan</h1>
                <hr></hr>

                    <label>Name:</label>
                    <input type="text" placeholder="Name" required
                    value={loanValue.name}
                    onChange={(event)=>{
                        setLoanValue({...loanValue,name:event.target.value})
                    }}
                    ></input>
                
                    <label>Phone Number:</label>
                    <input type="Tel" placeholder="+20##########" required
                    value={loanValue.phoneNumber}
                    onChange={(event)=>{
                        setLoanValue({ ...loanValue,phoneNumber:event.target.value})
                    }}
                    ></input>
                
                    <label>Age:</label>
                    <input type="number" placeholder="## Y old" required
                    value={loanValue.age}
                    onChange={(event)=>{
                        setLoanValue({...loanValue,age:event.target.value})
                    }}
                    ></input>
                
                    <label style={{margin:"10px"}}>Are you an employee?</label>
                    <input type="checkbox" style={{cursor:"pointer"}}
                    checked={loanValue.isEmployee}
                    onChange={(event)=>{
                        setLoanValue({...loanValue,isEmployee:event.target.checked})
                    }}
                    ></input>
                
                    <label style={{margin:"10px"}}>Your Salary:</label>
                    <select value={loanValue.salarySelect}
                    onChange={(event)=>{
                        setLoanValue({...loanValue,salarySelect:event.target.value})
                    }}
                    >
                        <option>less than 3000 L.E</option>
                        <option>In range 3000:6000 L.E</option>
                        <option>More than 6000 L.E</option>
                    </select>
                    
                    <button
                    disabled={loanValue.name === "" || loanValue.age === "" || loanValue.phoneNumber === "" || loanValue.salarySelect === "" || loanValue.isEmployee === false}
                    onClick={handleBtn}
                    >Submit</button>

            </form>
            <Modal errorMsg={errorMsg} isVisible={showModal} />
        </div>
    )
}