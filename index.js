class Polygon {
    constructor (sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let addSides = (acc, side) => acc + side
        return this.sides.reduce(addSides)
    }
}

class Triangle extends Polygon {

    get isValid() {
        let [side1, side2, side3] = this.sides
        let check = ((side1 + side2) > side3)
        return check
    }
}

class Square extends Polygon {
    
    get isValid() {
        let [side1, side2, side3, side4] = this.sides
        return (side1 === side2 === side3 === side4)
    }

    get area() {
        let [side] = this.sides
        if (this.isValid) return side * side
    }
}