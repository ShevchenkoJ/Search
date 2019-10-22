function CardsContainer(data) {
    this.cardsContainer = document.querySelector('.products-previews_container');
    this.data = data;
}

CardsContainer.prototype.showAllCards = function(allCards) {
    if (!allCards.length) {
        alert('Nothing found.');
        return;
    }

    const container = $('div', {
        class: 'cardsContainer'
    });

    allCards.forEach(function (item) {
        container.appendChild(item);
    });

    this.cardsContainer.appendChild(container);
};

CardsContainer.prototype.createAllCards = function () {
    let cards = [];

    this.data.forEach(function (dataItem) {
        const title = dataItem.title;
        const price = dataItem.price;
        const imgUrl = dataItem.imageUrl[0];
        const colorsLength = dataItem.colors.length;
        const sizesLength = dataItem.size.length;

        cards.push(new ProductCard(title, price, imgUrl, colorsLength, sizesLength).createCard());
    });

    return cards;
};

CardsContainer.prototype.removeCards = function () {
    const container = document.querySelector('.cardsContainer');

    if (!container) {
        return;
    }

    container.remove();
};