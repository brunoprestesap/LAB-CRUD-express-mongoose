import express from "express";
import purchaseModel from '../models/purchase.model.js'
import albumModel from '../models/album.model.js'

const purchaseRoute = express.Router()

purchaseRoute.post('/purchases', async (req, res) => {
    try {
        const data = req.body
        await purchaseModel.create(data)
        return res.status(201).json(data)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Erro ao criar documento"})           
    }
})

purchaseRoute.get('/purchases/:purchaseId', async (req, res) => {
    try {
        const {purchaseId} = req.params
        const data = await purchaseModel.findById(purchaseId)
        return res.status(200).json(data)

    } catch (error) {
        console.log(error)
        return res.status(401).json({msg: "Erro ao bsucar documento"})      
    }
})

export default purchaseRoute