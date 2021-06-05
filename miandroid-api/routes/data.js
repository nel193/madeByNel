const express = require('express');
const DataService = require('../services/data')

function dataApi(app){
    const router = express.Router();
    app.use("/api/data", router);

    const dataService = new DataService()

    router.get("/", async function (req, res, next) {
        const {tags} = req.query
        try {
            const data = await dataService.getFullData({tags});//Añadir DB
            res.status(200).json({
                data: data,
                message: 'data listed'
            });
        } catch (err) {
            next(err)
        }
    })
    router.get("/:dataId", async function (req, res, next) {
        const {dataId} = req.params
        try {
            const data = await dataService.getSpecificData({dataId});
            res.status(200).json({
                data: data,
                message: 'data retrieved'
            });
        } catch (err) {
            next(err)
        }
    })  
    router.post("/", async function (req, res, next) {
        const {body: data} = req
        try {
            const createDataId = await dataService.createData({data});
            res.status(201).json({
                data: createDataId,
                message: 'data created'
            });
        } catch (err) {
            next(err)
        }
    })
    router.put("/:dataId", async function (req, res, next) {
        const {dataId} = req.params
        const {body: data} = req
        try {
            const updatedDataId = await dataService.updateData({dataId, data})
            res.status(200).json({
                data: updatedDataId,
                message: 'data updated'
            });
        } catch (err) {
            next(err)
        }
    })
    router.patch("/:dataId", async function (req, res, next) {
        const {dataId} = req.params
        const {body: data} = req
        try {
            const editedDataId = await dataService.editData({dataId, data})
            res.status(200).json({
                data: editedDataId,
                message: 'data edited'
            });
        } catch (err) {
            next(err)
        }
    }) 
    router.delete("/:dataId", async function (req, res, next) {
        const {dataId} = req.params
        try {
            const deleteDataId = await dataService.deleteData({dataId});
            res.status(200).json({
                data: deleteDataId,
                message: 'data deleted'
            });
        } catch (err) {
            next(err)
        }
    })   
}

module.exports = dataApi