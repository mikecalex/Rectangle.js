class Rectangle {
  constructor(width, height) {
    this.width = width;

    if (!!height) {
      this.height = height;
    } else {
      this.height = width
    }
  }

  area() {
    return this.width * this.height
  }
}

let rect = new Rectangle(2)
console.log(rect)
console.log(rect.area())
