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

module.exports = Park