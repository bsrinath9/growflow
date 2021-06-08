const Employee = require('../models/employeeModel')
const mongoose = require('mongoose')

function create(req, res, next) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let Id = req.body.Id;
    let email = req.body.email;
    let telephone = req.body.telephone;
    let role = req.body.role;

    let employee = new Employee({
        firstName,
        lastName,
        Id,
        email,
        telephone,
        role
    })
    employee.save().then((data) => {
        res.send(data)
    })

}

function view(req, res, next) {
    Employee.find({}).then((data) => {
        res.send(data)
    })
}

function update(req, res, next) {
    Employee.findByIdAndUpdate(req.params.id, req.body, (err, employee) => {
        if (err) {
            return res.status(500).send({ error: "Problem with updating the employee record" })
        };
        res.send({ success: "Employee record updated successfully" });
    })
}

function remove(req, res, next) {
    Employee.findByIdAndDelete(req.params.id, (err, employee) => {
        if (err) {
            return res.status(500).send({ error: "Prolem deleting the employee record" })
        }
        res.send({ success: "Employee record deleted successfully" })
    })
}

module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove