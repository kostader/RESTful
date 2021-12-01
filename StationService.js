import Station from "./Station.js";

class StationService {
    async create(station) {
        const createdStation = await Station.create(station);
        return createdStation;
    }

    async getAllStations() {
        const stations = await Station.find()
        return stations;
    }


    async getStation(id) {
        if (!id) {
            throw new Error("ID not specified")
        }
        const station = await Station.findById(id);
        return station;
    }


    async updateStation(station) {
            if (!station._id) {
                throw new Error("ID not specified")
            }
            const updatedStation = await Station.findByIdAndUpdate(station._id, station, { new: true });
            return updatedStation;
            
    }

    async deleteStation(id) {
        if (!id) {
            throw new Error("ID not specified")
        }
        const station = await Station.findByIdAndDelete(id)
        return station;
    }
}

export default new StationService();