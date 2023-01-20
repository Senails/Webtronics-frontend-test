export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'needBG',
    values: [
      {
        name: 'needBG',
        value: '#0C102D',
      },
      {
        name: 'dark',
        value: '#23263A',
      },
      {
        name: 'lite',
        value: '#ffffff',
      },
    ],
  },
}

