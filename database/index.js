const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = 3000;
const dbEmp=require("./employee")

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("express is running")
});

app.post('/add', dbEmp.createEmployee)
app.get('/all', dbEmp.getEmployees)
app.get('/:id', dbEmp.getEmployeeById)
app.put('/:id', dbEmp.updateEmployee)
app.delete('/:id', dbEmp.deleteEmployee)

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});


