const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#212529',
        primary_half: '#495057',
        secondary: '#343a40',
        secondary_half: '#6c757d',
        textcolor: '#dee2e6',
        accent: '#f5cb5c',
        shadow: '',
      },
    },
  },

  plugins: [require('daisyui')],
};

module.exports = config;
