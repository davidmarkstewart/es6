class Drone {
    constructor(id) {
        this.id = id;
    }

    fly() {
        return `${this.id} is flying...`;
    }
}

module.exports = Drone;