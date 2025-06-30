class PasswordGeerator {
  constructor(len, upperCase, numbers, symbols) {
    this.upperCase = upperCase;
    this.numbers = numbers;
    this.symbols = symbols;
    this.len = parseInt(len);
  }

  genPass() {

    let charset = "abcdefghijklmnopqrstuvwxyz";

    if (this.upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (this.numbers) charset += "0123456789";
    if (this.symbols) charset += "!@#$%^&*()_+-=[]{}|;:',.<>/?";

    const s = chance.string({
      length: this.len,
      pool: charset,
    });

    return s
  }



}

//variables

// range

const range = document.querySelector("#customRange1");

// chk 1
// chk 2
// chk 3

const checkBoxes = document.querySelectorAll('[type="checkbox"]');
const checkBoxValues = [...checkBoxes].map((cb) => cb.checked);

//input field

const output = document.querySelector('input[type="text"]');

// button
const genButton = document.querySelector("#gen-button");

// constrator



//event listner
genButton.addEventListener("click", () => {
  const [upperCaseCB, numbersCB, symbolsCB] = checkBoxes;

  const pwgt = new PasswordGeerator(
    range.value,
    upperCaseCB.checked,
    numbersCB.checked,
    symbolsCB.checked
  );

  output.value = pwgt.genPass();
});
