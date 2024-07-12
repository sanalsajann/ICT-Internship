const express=require('express');   //the first two lines a reapplicable for any programs, 'express' is predefined, whereas express in const express can be interchanged 
const cors=require('cors')
const app=new express();
const PORT=4000;  //any number above 1024 is applicable
const movieModel=require('./model/movieData')
require('./connection');
app.use(cors())
app.use(express.json())
//to fetch the movie data

app.get('/movies',async(req,res)=>{
    console.log('inside')
    try{
        const data=await movieModel.find();
        console.log(data)
        res.send(data);
    } catch (error) {
        console.log(error);
    }

})

//add a new document
app.post('/newmovie',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new movieModel(item);
        const saveddata= await datasave.save();
        res.send('Post successful');
    }
    catch(error){
        console.log(error)
    }
})

//to delete a document
app.delete('/movieremoval/:id',async(req,res)=>{
    try{
        await movieModel.findByIDAndDelete(req.params.id);
    res.send('Deleted successfully') 
    } catch(error) {
        console.log(error)
    }
})
app.listen(PORT,()=>{  // to keep the port running
    console.log('Server is running on PORT 4000')       
})