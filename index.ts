import Server from "./classes/server";
import router from "./routes/router";
import { urlencoded, json } from "express";
import cors from 'cors'
const server = new Server()

server.app.use( urlencoded({extended: true}))
server.app.use(json())
server.app.use('/', router)

server.app.use( cors({origin: true, credentials: true}))


server.start (() => {
  console.log('Servidor corriendo en el puerto ' +  server.port);
  
})