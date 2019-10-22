function API() {}

API.getDataByInputText = function(form, input) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let inputValue = input.value;

        fetch('http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=' + inputValue)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                console.log(res);

                const products = res.response.products;

                const cardsContainer = new CardsContainer(products);
                cardsContainer.removeCards();

                const cards = cardsContainer.createAllCards();
                cardsContainer.showAllCards(cards);
            });
    });
};

API.getAllData = function() {
    fetch('http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=*')
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            console.log(res);

            const products = res.response.products;

            const cardsContainer = new CardsContainer(products);
            const cards = cardsContainer.createAllCards();
            cardsContainer.showAllCards(cards);
        });
};