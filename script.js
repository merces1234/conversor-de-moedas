const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-covert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
        .then(response => response.json());

    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value === "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImg.src = "assets/8bd85ff979da7dabc33201d95eb1a05fdea139971.png";
    }

    if (currencySelect.value === "Euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "assets/design sem nome 3.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);