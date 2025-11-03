/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "josefinsans-bold": ["JosefinSans-Bold", "sans-serif"],
        "josefinsans-semibold": ["JosefinSans-SemiBold", "sans-serif"],
        "josefinsans-medium": ["JosefinSans-Medium", "sans-serif"],
        "josefinsans-regular": ["JosefinSans-Regular", "sans-serif"],
        "josefinsans-light": ["JosefinSans-Light", "sans-serif"],
      }
    },
  },
  plugins: [],
}