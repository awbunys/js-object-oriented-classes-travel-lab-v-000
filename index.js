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
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    if(this.beginningLocation === this.endingLocation) {
      return Math.abs(this.beginningLocation - this.endingLocation)
    }
  }
}
