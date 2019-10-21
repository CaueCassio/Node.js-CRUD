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


app.get('/', (req, res) => {
  return res.json({ message: " ok " })
})





app.listen(4000)
