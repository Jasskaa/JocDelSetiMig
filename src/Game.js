class Game {
    constructor() {
        this.playerDeck = [];
        this.computerDeck = [];
        this.deck = new Deck(); // Crea una nova baralla de cartes
        this.cardsDealtToPlayer = 0;
        this.cardsDealtToComputer = 0;
    }

    calculatePoints(deck) {
        let points = 0;
        deck.forEach((card) => {
            points += card.getPointValue(); // Suma els punts de cada carta a la ma
        });
        return points;
    }

    updatePoints() {
        const playerPoints = this.calculatePoints(this.playerDeck);
        const dealerPoints = this.calculatePoints(this.computerDeck);
        updatePoints(playerPoints, dealerPoints); // Actualitza els punts a la pantalla
    }

    // butó New Game
    dealOneCard() {
        const cardToPlayer = this.deck.pop();
        const cardToComputer = this.deck.pop();
        this.playerDeck.push(cardToPlayer);
        this.computerDeck.push(cardToComputer);
        this.updatePoints();

        const dealerCardDiv = document.querySelector(".cards .card:nth-child(1)");
        const dealerCardImage = document.createElement("img");
        dealerCardImage.src = `cards/${cardToComputer.suit.toLowerCase()}_${cardToComputer.value}.jpg`;
        dealerCardDiv.innerHTML = "";
        dealerCardDiv.appendChild(dealerCardImage);

        const playerCardDiv = document.querySelector(".cards2 .card:nth-child(1)");
        const playerCardImage = document.createElement("img");
        playerCardImage.src = `cards/${cardToPlayer.suit.toLowerCase()}_${cardToPlayer.value}.jpg`;
        playerCardDiv.innerHTML = "";
        playerCardDiv.appendChild(playerCardImage);
    }

    // butó Hit
    dealOneCardToPlayer() {
        const cardToPlayer = this.deck.pop();
        this.playerDeck.push(cardToPlayer);
        this.updatePoints();

        const playerCardDiv = document.querySelector(`.cards2 .card:nth-child(${this.cardsDealtToPlayer + 2})`);
        const playerCardImage = document.createElement("img");
        playerCardImage.src = `cards/${cardToPlayer.suit.toLowerCase()}_${cardToPlayer.value}.jpg`;
        playerCardDiv.innerHTML = "";
        playerCardDiv.appendChild(playerCardImage);
        this.cardsDealtToPlayer++;
    }

    hit() {
        this.dealOneCardToPlayer();
        const playerPoints = this.calculatePoints(this.playerDeck);
        // const computerPoints = game.calculatePoints(game.computerDeck);
        if (playerPoints > 7.5) {
            Swal.fire({
                icon: "error",
                title: "Has Perdut",
                text: "T\'has Passat del Set i Mig!",
            });
        }
        this.updatePoints();
    }

    dealOneCardToComputer() {
        const cardToComputer = this.deck.pop();
        this.computerDeck.push(cardToComputer);
        this.updatePoints();

        const dealerCardDiv = document.querySelector(`.cards .card:nth-child(${this.cardsDealtToComputer + 2})`);
        const dealerCardImage = document.createElement("img");
        dealerCardImage.src = `cards/${cardToComputer.suit.toLowerCase()}_${cardToComputer.value}.jpg`;
        dealerCardDiv.innerHTML = "";
        dealerCardDiv.appendChild(dealerCardImage);
        this.cardsDealtToComputer++;
    }

    // butó Stay
    stay() {
        // Ordinador demana cartes fins a arribar a 6 punts
        while (this.calculatePoints(this.computerDeck) < 6) {
            this.dealOneCardToComputer();
        }

        const dealerPoints = this.calculatePoints(this.computerDeck);
        const playerPoints = this.calculatePoints(this.playerDeck);
        if (dealerPoints > 7.5 && playerPoints <= 7.5) {
            Swal.fire({
                icon: 'success',
                title: 'Has Guanyat',
                text: 'El dealer s\'ha Passat del Set i Mig!',
            })
        } else if (playerPoints > 7.5 && dealerPoints <= 7.5) {
            Swal.fire({
                icon: 'error',
                title: 'Has Perdut',
                text: 'T\'has Passat del Set i Mig!',
            })
        } else if (Math.abs(playerPoints - 7.5) < Math.abs(dealerPoints - 7.5)) {
            Swal.fire({
                icon: 'success',
                title: 'Has Guanyat',
                text: 'Has Guanyat t\'has acostat mes al Set i Mig!',
            })
        } else if (Math.abs(playerPoints - 7.5) > Math.abs(dealerPoints - 7.5)) {
            Swal.fire({
                icon: 'error',
                title: 'Has Perdut',
                text: 'El delaer s\'ha acostat mes al Set i Mig!',
            })
        } else if (playerPoints == 7.5) {
            Swal.fire({
                icon: 'success',
                title: 'Felicitats',
                text: 'Has Guanyat',
            })
        } else if (computerPoints == 7.5) {
            Swal.fire({
                icon: 'error',
                title: 'Has perdut',
                text: 'El dealer ha Guanyat!',
            })
        } else if (computerPoints == playerPoints) {
            Swal.fire({
                icon: 'error',
                title: 'Has perdut',
                text: 'Ha guanyat el Dealer!',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Has perdut',
                text: 'Ha guanyat el Dealer!',
            })
        }
        game.updatePoints();
    }
}