const express = require ("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
const app = express();

const router = express.Router();
//CREATE
router.post("/", async (req, res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//CONSULTAR
router.get("/", async (req,res) => {
    const respuesta= await ModelUser.find({})
    res.send(respuesta)
})

//CONSULTAR POR ID
router.get("/:id", async (req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById({id:id})
    res.send(respuesta)
})

//ACTUALIZAR
router.get("/", async (req,res) => {
    const respuesta= await ModelUser.find({})
    res.send(respuesta)
})

//ELIMINAR
router.delete("/:id", async ( req,res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)

})

app.use(express.json());
app.use(router);

app.listen(3005,()=>{
    console.log("el servidor esta en el puero 3005")
})

dbconnect();