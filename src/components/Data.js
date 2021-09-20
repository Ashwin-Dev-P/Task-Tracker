const Data = (mydata) => {
    console.log("Data inside data.js" )
    console.log(mydata)
      return (
        <>
        <table>
            <tbody>
        {   
        
            mydata['data'].length > 0 ? (
                console.log(mydata['data']['0']),
                
                mydata['data'].map((data)=>(
                    //<tr key={data._id}><td>Hello</td></tr>
                    <tr key={data._id}><td key={data._id}>{data.name?data.name:"NULL"}</td><td >{data.email?data.email:"N/A"}</td><td>{data.year_of_joining?data.year_of_joining:"N/A"}</td><td>{data.year_passed_out?data.year_passed_out:"N/A"}</td></tr>
                    )
                )
                
            ) : (<tr><td>Nodata</td></tr>)
        }
            </tbody>
        </table>
        </>
    )
}

export default Data
