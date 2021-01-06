import {useEffect, useState} from "react";
import Employee from "./Employee";
function EmployeeList() {

    const [employees, setEmployees] = useState([{
            name: "Eli Svensson",
            email: "default@gmail.com",
            phone: "xxxx-xxxxxx",
            skills: "Java, html, css, Javascript",
            avatar: "https://i.imgur.com/ebHfuth.png"
        },]);

    function addEmployee(prevState) {
        setEmployees((prevState )=>{
            return[
                ...prevState,
                {name: "Shepard",
                    email: "galacticHero@citadel.com",
                    phone: "xxxx-xxxxxx",
                    skills: "saving the galaxy",
                    avatar: "https://i.imgur.com/t9HFQvX.png"}];

        });

    }
    return (
        <div>
            <h3>EmployeeList</h3>
            <button className="button" onClick={addEmployee}>Add Employee</button>
            {
            employees.map((employee) => (
                <Employee EmployeeData={employee}/>))
        } </div>
    );
}

export default EmployeeList;
