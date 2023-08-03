document.addEventListener("DOMContentLoaded", function() {
    const pizzaIdInput = document.getElementById("pizzaIdInput");
    const searchButton = document.getElementById("searchButton");
    const resultContainer = document.getElementById("resultContainer");

    searchButton.addEventListener("click", function() {
        const pizzaId = parseInt(pizzaIdInput.value);
        const pizza = findPizzaById(pizzaId);

        if (pizza) {
            renderPizzaCard(pizza);
            saveLastSearchedPizza(pizza);
        } else {
            renderErrorMessage("Pizza no encontrada.");
        }
    });

    function findPizzaById(id) {
        return pizzaArray.find(pizza => pizza.id === id);
    }

    function renderPizzaCard(pizza) {
        resultContainer.innerHTML = `
            <div class="pizza-card">
                <h2>${pizza.name}</h2>
                <img src="img/${pizza.image}" alt="${pizza.name}">
                <p>Precio: $${pizza.priceARS.toLocaleString()} ARS</p>
            </div>
        `;
    }

    function renderErrorMessage(message) {
        resultContainer.innerHTML = `<p class="error-message">${message}</p>`;
    }

    function saveLastSearchedPizza(pizza) {
        localStorage.setItem("lastSearchedPizza", JSON.stringify(pizza));
    }

    const pizzaArray = [
        { id: 1, name: "4 Quesos", priceARS: 1950, image: "4quesos.png" },
        { id: 2, name: "Cebolla", priceARS: 1700, image: "cebolla.png" },
        { id: 3, name: "Ananá", priceARS: 1450, image: "anana.png" },
        { id: 4, name: "Especial", priceARS: 2125, image: "especial.png" },
        { id: 5, name: "Muzzarella", priceARS: 1530, image: "muzzarella.png" },
    ];
});
