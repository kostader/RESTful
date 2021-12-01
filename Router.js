import  Router  from "express";
import StationController from "./StationController.js";


const router = new Router()

router.post('/stations', StationController.create)
router.get('/stations', StationController.getAllStations)
router.get('/stations/:id', StationController.getStation)
router.put('/stations', StationController.updateStation)
router.delete('/stations/:id', StationController.deleteStation)


export default router;