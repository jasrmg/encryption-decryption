const encryptModalBtn = document.querySelector(".encrypt");
const decryptModalBtn = document.querySelector(".decrypt");
const processBtn = document.getElementById("process");

const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const inputText = document.getElementById("input-text");
const shiftText = document.getElementById("shift");
const output = document.getElementById("output-result");
// console.log(output);

const encrypt = (text, shift) => {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let shiftAmount = shift % 26;
      if (code >= 65 && code <= 90)
        char = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
      else if (code >= 97 && code <= 122)
        char = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
    }
    result += char;
  }
  return result;
};

const decrypt = (text, shift) => {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let shiftAmount = shift % 26;
      if (code >= 65 && code <= 90)
        char = String.fromCharCode(((code - 65 - shiftAmount + 26) % 26) + 65);
      else if (code >= 97 && code <= 122)
        char = String.fromCharCode(((code - 97 - shiftAmount + 26) % 26) + 97);
    }
    result += char;
  }
  return result;
};

const closeModal = (modal) => {
  modal.style.display = "none";
};

const openModal = (modal, text) => {
  modal.style.display = "flex";
  modalTitle.textContent = text;
  inputText.value = "";
  shift.value = "";
  inputText.placeholder = `Enter text to ${text}. . .`;
  output.textContent = `${text}ed output goes here.`;
  processBtn.textContent = `${text}`;
};

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

encryptModalBtn.addEventListener("click", () => {
  if (modalTitle.classList.contains("error-title")) {
    modalTitle.classList.remove("error-title");
  }
  openModal(modal, "Encrypt");
});
decryptModalBtn.addEventListener("click", () => {
  openModal(modal, "Decrypt");
});
closeBtn.addEventListener("click", () => {
  closeModal(modal);
});

processBtn.addEventListener("click", () => {
  if (inputText.value === "") {
    output.innerText = "Please enter a valid input!";
    return;
  }
  if (shiftText.value === "") {
    output.textContent = "Please enter a valid shift value!";
    return;
  }
  if (processBtn.textContent === "Encrypt") {
    const input = inputText.value;
    const shift = shiftText.value;
    output.textContent = encrypt(input, shift);
  } else {
    const input = inputText.value;
    const shift = shiftText.value;
    output.textContent = decrypt(input, shift);
  }
});
