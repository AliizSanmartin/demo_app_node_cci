'use strict';
var tasks = [{
    name : "Nombre1",
    apellido : "Apellido1"
},{
    name : "Nombre2",
    apellido : "Apellido1"
}]
exports.list_all_tasks = function(req, res) {
    res.json(tasks)
};


exports.create_a_task = function(req, res) {
  tasks.push(req.body)
  res.json(req.body)
};
