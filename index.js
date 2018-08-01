class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    let calcYear = this.startDate
    let test = calcYear.getFullYear()
    return (year - test - 1)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let hor = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horiztonal)

    if (this.beginningLocation.horizontal === this.endingLocation.horizontal) {
    return vert
    }
    return hor + 1 + vert
  }
}
