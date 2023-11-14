import express from "express"
 import { Book } from "../models/bookModel.js"

const router = express.Router()




router.post("/", async(req, res)=>{
    try {
       if(!req.body.title || !req.body.author || !req.body.publishYear){
        return res.status(400).send({message:"Fill all the necessary details"})
       }
       const newBook =   {
       title: req.body.title,
       author: req.body.author,
       publishYear: req.body.publishYear,
       }
       const book =  await Book.create(newBook)
      return res.status(201).send(book)

        // OR
    //   const book =  new Book(newBook)
    //   const saved = await book.save()
    //  return res.status(201).send(saved)
        
    } catch (error) {
        res.json({message: error.message})
    }
})



// get all the data
router.get('/', async (req, res)=>{
    try {
        const books = await Book.find({})
         return res.status(200).json({
            count: books.length,
            data: books
         })
        
    } catch (error) {
         res.status.send({message: error.message})
    }

})


// get one the data
router.get('/:id', async (req, res)=>{
    try {
        const { id }  = req.params
        const books = await Book.findById(id)
         return res.status(200).json(books)
        
    } catch (error) {
         res.status(500).send({message: error.message})
    }

})
// update one the data
router.put('/:id', async (req, res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:"Fill all the necessary details"})
           }


        const { id }  = req.params

        const result = await Book.findByIdAndUpdate(id, req.body)
        if(!result){
            res.status(404).json({message: "books not found"})
        }
         return res.status(200).send("books updated successfully")
        
    } catch (error) {
         res.status(500).send({message: error.message})
    }

})
  

// delete the data

// delete the data
router.delete('/:id', async (req, res)=>{
    try {
        const { id }  = req.params
        const result = await Book.findByIdAndDelete(id, req.body)
        if(!result){
            res.status(404).json({message: "books not found"})
        }
         return res.status(200).send("books deleted successfully")
                
    } catch (error) {
         res.status(500).send({message: error.message})
    }

})



export default router