module.exports = {
  truncate(text, length) {
    if (!text || typeof text !== "string") return "";
    if (text.length <= length) return text;
    return text.substring(0, length) + "…";
  },

  ife(condition, truthyValue, falsyValue = "") {
    return condition ? truthyValue : falsyValue;
  },
};
