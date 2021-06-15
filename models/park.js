const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = []
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur)
    this.dinosaurCollection.splice(indexOfDinosaur, 1)
}

Park.prototype.attractsMost = function () {
    let max = 0
    let maxIndex
    for (var i = 0; i < this.dinosaurCollection.length; i++){
        if (this.dinosaurCollection[i].guestsAttractedPerDay > max) {
            maxIndex = i
            max = this.dinosaurCollection[i].guestsAttractedPerDay
        }
    }
    return this.dinosaurCollection[maxIndex]
}

Park.prototype.findBySpecies = function (species) {
    let speciesList = []
    for (let dino of this.dinosaurCollection) {
        if (dino.species === species) {
            speciesList.push(dino)
        }
    }
    return speciesList
}

Park.prototype.totalVisitorsPerDay = function () {
    let total = 0
    for (dino of this.dinosaurCollection) {
        total += dino.guestsAttractedPerDay
    }
    return total
}

Park.prototype.totalVisitorsPerYear = function () {
    let totalYear = this.totalVisitorsPerDay() * 365
    return totalYear
}

Park.prototype.yearlyRevenue = function () {
    let totalRevenue = this.totalVisitorsPerYear() * this.ticketPrice
    return totalRevenue
}
module.exports = Park