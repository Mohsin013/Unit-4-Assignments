import React from 'react'

const Table = () => {
  const [value, setValue] = React.useState([])
  
  const getData = async () => {
      let res = await fetch("http://localhost:3000/data");
      let data = await res.json();
      setValue(data)
  }
  React.useEffect(()=> {
      getData()
  },[])
  console.log(value)
  return (
    <tbody>
        {value.map((el) => {
            return (
                <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.empName}</td>
                    <td>{el.age}</td>
                    <td>{el.address}</td>
                    <td>{el.maritalStatus.toString()}</td>
                    <td>{el.salary}</td>
                </tr>
            )
        })}
    </tbody>
  )
}

export default Table