class Character {
  constructor(position, speed) {
    this.position = position; 
    this.speed = speed; 
  }

  move(direction) {
    switch (direction) {
      case 'up':
        this.position.move(0, -this.speed);
        break;
      case 'down':
        this.position.move(0, this.speed);
        break;
      case 'left':
        this.position.move(-this.speed, 0);
        break;
      case 'right':
        this.position.move(this.speed, 0);
        break;
      default:
        console.warn("Invalid direction");
    }
  }
}