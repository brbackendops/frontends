module.exports =  {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
    {
      target: {
        node:'current'
      }
    }
  ],
};