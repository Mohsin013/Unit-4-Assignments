import React from 'react'
import styles from "./Form.module.css";
import Table from './Table';

const Form = () => {
  const [form, setForm] = React.useState({maritalStatus: false});
  const [showTable, setShowTable] = React.useState(false);

  const handleChange = (e) => {
    let inpVal = e.target.name;

    if(e.target.type==="checkbox") {
        setForm({...form,[inpVal]: e.target.checked})
    }
    else {
        setForm({...form,[inpVal]: e.target.value})
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(form) 
    })
    setShowTable(true);
  }

  return ( showTable ? 
    <div>
        <table>
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                    <td>Marital Status</td>
                    <td>Salary</td>
                </tr>
            </thead>
            <Table />
        </table>
    </div>
    : <div className={styles.container}>
        <h2>Employee Details</h2>
        <form onSubmit={handleSubmit} className={styles.maindiv}>
            <div className={styles.input}>
                <label>Name</label>
                <input type="text" name='empName' onChange={handleChange} />
            </div>
            <div className={styles.input}>
                <label>Age</label>
                <input type="number" name='age' onChange={handleChange} />
            </div>
            <div className={styles.input}>
                <label>Address</label>
                <input type="text" name='address' onChange={handleChange} />
            </div>
            <div className={styles.input}>
                <label>Department</label>
                <select name="dept" onChange={handleChange}>
                    <option value="Finance">FINANCE</option>
                    <option value="Logistic">LOGISTIC</option>
                    <option value="IT">IT</option>
                </select>
            </div>
            <div className={styles.input}>
                <label>Salary</label>
                <input type="number" name='salary' onChange={handleChange} />
            </div>
            <div className={styles.input}>
                <label>Martital Status</label>
                <span>
                    <input type="checkbox" name='maritalStatus' onChange={handleChange} />Yes
                </span>
            </div>
            <div style={{margin: "auto"}}>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Form