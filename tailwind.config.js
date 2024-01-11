/** @type {import('tailwindcss').Config} */
const sizeList = (arrayLength = 101, multiple = 4, unit = "px") => {
  let object = {};
  const multipleArray = {
    ...Array.from(Array(arrayLength)).map(
      (_, i) => `${Number(i) * multiple}${unit}`,
    ),
  };

  for (const j in multipleArray) {
    const key = multipleArray[j];
    object = { ...object, ...{ [key]: multipleArray[j] } };
  }

  return object;
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: { ...sizeList(51, 2) }, // 0-100
      width: { ...sizeList(201, 4) }, // 0-800
    },
    padding: { ...sizeList(51, 4) }, // 0-100
    margin: { ...sizeList(51, 4) }, // 0-100
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
