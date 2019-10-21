const express = require('express');
const app = express();


app.use(express.json());


const projects = [];


function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = project.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not foud' })
  }
  return next();
}

function logRequest(req, res, next) {
  console.count("Número de requisições")

  return next();
}

app.use(logRequests);


app.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    tasks:[]
  };

  project.push(project);

  return res.json(project);

})


app.get('/project', (req, res) => {
  return res.json(projects)
})





app.listen(4000)
