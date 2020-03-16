const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const students = [
    {
        "name": "Spirit Wonder",
        "dob": "1/12/1998",
        "program": "BSC ICT",
        "level": "400",
        "image": "/images/1.jpeg"
    },
    {
        "name": "Anaba Malcom",
        "dob": "10/1/2000",
        "program": "BSC CS",
        "level": "200",
        "image": "/images/2.jpeg"
    },
    {
        "name": "Caleb Asare",
        "dob": "10/10/2000",
        "program": "BSC MIS",
        "level": "300",
        "image": "/images/3.jpeg"
    }
]


app.get('/', (req, res)=>{
    res.render("home", {
        students
    });
});

//This is a route to a single student
app.get('/student/:id', (req, res)=>{
       const id = req.params.id;
       const student = students[id];
    res.render("details", {
        student,
        title: 'Details'
    });
});

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});

