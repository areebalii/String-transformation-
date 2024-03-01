const inputEl = document.querySelector("input");
const upperCaseEl = document.querySelector("#upper-case span")
const lowerCaseEl = document.querySelector("#lower-case span");
const camelCaseEl = document.querySelector("#camel-case span");
const pascalCaseEl = document.querySelector("#pascal-case span");
const snakeCaseEl = document.querySelector("#snake-case span");
const kebabCaseEl = document.querySelector("#kebab-case span");
const trimEl = document.querySelector("#trim span");


function capitalizeString(str) {
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length);
}
function toCamelCase(string) {
    const lowerCaseString = string.toLowerCase();
    const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word;
        return capitalizeString(word);
    })
    return finalArray.join("");
}
function toPascalCase(string) {
    const lowerCaseString = string.toLowerCase();
    const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
        return capitalizeString(word);
    })
    return finalArray.join("");
}
function toSnakeCase(string) {
    return string.replaceAll(" ", "_");

}
function toKababCase(string) {
    return string.replaceAll(" ", "-");
}
function trimCase(string) {
    return string.replaceAll(" ", "")
}


function updateTransform() {
    upperCaseEl.innerText = inputEl.value.toUpperCase();
    lowerCaseEl.innerText = inputEl.value.toLowerCase();
    camelCaseEl.innerText = toCamelCase(inputEl.value);
    pascalCaseEl.innerText = toPascalCase(inputEl.value);
    snakeCaseEl.innerText = toSnakeCase(inputEl.value);
    kebabCaseEl.innerText = toKababCase(inputEl.value);
    trimEl.innerText = trimCase(inputEl.value);
}
updateTransform();

inputEl.addEventListener("input", () => {
    updateTransform();
})