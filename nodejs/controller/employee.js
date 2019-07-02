var empModel = require('../model/employees');
var managerModel = require('../model/manager');
const XLSX = require('xlsx');
var fs = require("fs");
var path = require("path");
const readXlsxFile = require('read-excel-file/node');

var employee = {
    create: function (req, res) {

        console.log('Request File:', req.file.path);
        const workbook = XLSX.readFile(req.file.path);
        const sheet_name_list = workbook.SheetNames;
        res.status(200).json({ status: 'success', message: 'Document added Successfully.', doc: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]), doc1: XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]) });

    },
    CreateManager: function (req, res) {
        console.log("Within create function of Manager");
        managerModel.collection.insert(req.body, function (err, doc) {
            //    console.log(req.body)
            console.log(doc);
            if (err) {
                res.status(200).json({ status: 'error', message: 'Datebase Error:' + err, doc: '' });
            }
            else {
                res.status(200).json({ status: 'success', message: 'Document added Successfully.', doc: doc });
                console.log("DETAILS OF DOCUMENTS:", doc);
            }
        });
    },
    CreateEmp: function (req, res) {
        console.log("Within create function of EMP");
        console.log("Requested data======:", req.body)

        empModel.collection.insert(req.body, function (err, doc) {
            // console.log(req.body)
            console.log(doc);
            if (err) {
                res.status(200).json({ status: 'error', message: 'Datebase Error:' + err, doc: '' });
            }
            else {
                res.status(200).json({ status: 'success', message: 'Document added Successfully.', doc: doc });
                console.log("DETAILS OF DOCUMENTS:", doc);
            }
        });
    },


    download: function (req, res) {
        console.log("FILE NAME:", req.file.path);
        var file = req.file.path.split("/");
        console.log("FILE", file[1]);
        var filepath = path.join(__dirname, "../uploads") + '/' + file[1];
        console.log("FILE PATHSSSSsssssssssss", filepath);

        readXlsxFile(filepath).then((rows) => {
            // `rows` is an array of rows
            // each row being an array of cells.
           
            res.status(200).json({ status: 'success', message: 'Document added Successfully.', doc: rows });
        })


        // res.sendFile(filepath);
    }

}

module.exports = employee;