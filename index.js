require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true }).
catch(err => console.error(err));

const projectSchema = new mongoose.Schema({
    title: String,
    due: Date,
    priority: String,
    status: String
});

const Project = mongoose.model('Project', projectSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/allprojects', (req, res) => {
    Project.find({}, (err, projects) => {
        if(err){
            console.log(err);
        }else{
            projectCount = projects.length;
            res.send(projects); // sends an array of objects - JSON data
        }
    })
})

app.post('/newproject', (req,res) => {
    const newProject = new Project({
        title: req.body.title,
        due: req.body.due,
        priority: req.body.priority,
        status: req.body.status
    });
    newProject.save(err => {
        if(err)
            console.log(err);
        else
            res.redirect('/');
    });
})

app.patch('/updateproject', (req, res) => {
    const tid = req.body.id; 
    Project.updateOne(
        {_id: tid},
        {status: 'Completed'},
        (err, response) => {
            if(err)
                console.log(err);
            else{
                res.send('Update Successful');
            }
        })
})

app.delete('/deleteproject', (req, res) => {
    const tid = req.body.id; 
    Project.deleteOne(
        {_id: tid},
        (err, response) => {
            if(err)
                console.log(err);
            else
                res.send('Deletion Successful');
        })
})

app.listen(3000, ()=>{
    console.log('Server is live on port 3000');
})