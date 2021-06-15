const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  beforeEach(function () {

    dino1 = new Dinosaur("Velociraptor", "Carnivore", 50)
    dino2 = new Dinosaur("Triceratops", "Herbivore", 45)
    dino3 = new Dinosaur("Tyrannosaurus", "Carnivore", 100)
    dino4 = new Dinosaur("Triceratops", "Herbivore", 45)

    park = new Park("Jurassic Park", 20)
  })

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection.length
    assert.strictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dino1)
    const actual = park.dinosaurCollection[0].species
    assert.strictEqual(actual, "Velociraptor")
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.removeDinosaur(dino2)
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, [dino1, dino3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.attractsMost()
    assert.strictEqual(actual, dino3)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)
    const actual = park.findBySpecies("Herbivore")
    assert.deepStrictEqual(actual, [dino2, dino4])
  });

  xit('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.totalVisitorsDay()
    assert.strictEqual(actual, 195)
  });

  xit('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = park.totalVisitorsYear()
    assert.strictEqual(actual, 71175)
  });

  xit('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dino1)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    const actual = parl.yearlyRevenue()
    assert.strictEqual(actual, 14235000)
  });

});
