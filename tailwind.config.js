/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'professional' : 'url(data/images/about/prof.jpg)',
        'convention' : 'url(data/images/about/convention.png)',
        'bowling' : 'url(data/images/about/bowling.png)'
      },
      animation: {
        fade_in: "fade_in 2s",
        slide_right: "slide_right 1s",
        slide_left: "slide_left 1s"
      },
      keyframes: {

        fade_in: {
          "from" :{
            opacity: 0,
            transform: `translateX(-20px)`
          },
          "to" :{
            opacity: 1,
            transform: `translateX(0)`
          }
        },

        slide_right: {
          "from" :{
            opacity: 0,
            transform: `translateX(500px)`
          },
          "to" :{
            opacity: 1,
            transform: `translateX(0)`
          }
        },

        slide_left: {
          "from" :{
            opacity: 0,
            transform: `translateX(-500px)`
          },
          "to" :{
            opacity: 1,
            transform: `translateX(0)`
          }
        },
      }
    }
  },
  plugins: [],
}

