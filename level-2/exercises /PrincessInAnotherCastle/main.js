class Player {
  constructor() {
    this.name = "";
    this.totalCoins = 0;
    this.status = "Big";
    this.hasStar = false;
  }

  setName(namePicked) {
    if (namePicked === "Mario" || namePicked === "Luigi") {
      this.name = namePicked;
    }
  }

  gotHit() {
    if (this.status === "Powered Up") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Small";
    } else if (this.status === "Small") {
      this.status = "Dead";
    }
    this.hasStar = false;
  }

  gotPowerUp() {
    if (this.status === "Small") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Powered Up";
    } else if (this.status === "Powered Up") {
      if (this.hasStar) {
        this.hasStar = false;
      } else {
        this.hasStar = true;
      }
    }
  }

  addCoin() {
    this.totalCoins += 1;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Status: ${this.status}`);
    console.log(`Star in Possession: ${this.hasStar ? "Yes" : "No"}`);
  }
}

const player = new Player();
player.setName("Mario");

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function actionButton() {
  const random = randomRange(0, 2);
  if (random === 0) {
    player.gotHit();
  } else if (random === 1) {
    player.gotPowerUp();
  } else if (random === 2) {
    player.addCoin();
  }
  player.print();

  if (player.status === "Dead") {
    clearInterval(interval);
  }
}

const interval = setInterval(actionButton, 1000);
