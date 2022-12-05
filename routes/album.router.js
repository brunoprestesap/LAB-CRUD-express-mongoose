import express from "express";
import albumModel from '../models/album.model.js'

const albumRoute = express.Router()

albumRoute.post('/create-album', async (req, res) => {
    try {

        const data = req.body
        await albumModel.create(data)
        return res.status(201).json(data)

    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Erro ao criar documento"})        
    }
})

albumRoute.get('/albums', async (req, res) => {
    try {
        const albumsData = await albumModel.find()
        return res.status(200).json(albumsData)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Erro ao buscar documento"})   
    }
})

albumRoute.get('/albums/:albumId', async (req, res) => {
    try {
        const {albumId} = req.params
        const data = await albumModel.findById(albumId)
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Erro ao buscar documento"})   
    }
})

albumRoute.put('/albums/:albumId', async (req, res) => {
    try {
        const {albumId} = req.params
        const data = req.body
        const updatedAlbum = await albumModel.findByIdAndUpdate(albumId, data, {new: true, runValidators: true})
        return res.status(200).json(updatedAlbum)
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Erro ao atualizar o documento"})   
    }
})

albumRoute.delete('/albums/:albumId', async (req, res) => {
    try {
        const {albumId} = req.params
        await albumModel.findByIdAndDelete(albumId)
        return res.status(204).json("Album deletado")
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Erro ao deletaro documento"})   
    }
})

export default albumRoute