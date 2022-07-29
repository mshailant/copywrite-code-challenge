const isPalindrome = (text) => {
  let textReversedNormalized = text
    .split("")
    .reverse()
    .join("")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
  let textNormalized = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
  return textReversedNormalized === textNormalized;
};

const iechoController = (req, res) => {
  let text = req.query.text.trim();
  text.length > 0
    ? res.status(200).json({
        text: text.split("").reverse().join(""),
        palindrome: isPalindrome(text),
      })
    : res.status(400).json({ error: "No text" });
};

export default iechoController;
