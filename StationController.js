import StationService from "./StationService.js";

class StationController {
    async create(request, response) {
        try {
            const station = await StationService.create(request.body)
            response.json(station)
        } catch (e) {
            response.status(500).json(e)
        }
    }

    async getAllStations(request, response) {
        try {
            const stations = await StationService.getAllStations();
            return response.json(stations);
        } catch (e) {
            response.status(500).json(e)
        }
    }

    async getStation(request, response) {
        try {
            const station = await StationService.getStation(request.params.id)
            return response.json(station)
        } catch (e) {
            response.status(500).json(e)
        }
    }

    async updateStation(request, response) {
        try {
            
            const updatedStation = await StationService.updateStation(request.body)
            return response.json(updatedStation)
        } catch (e) {
            response.status(500).json(e.message)
        }
    }
    async deleteStation(request, response) {
        const station = await StationService.deleteStation(request.params.id)
        return response.json(station)
    }
}


export default new StationController();