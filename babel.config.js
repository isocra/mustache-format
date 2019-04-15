module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['latest'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
          ],
          root: ['./src']
        },
      ],
    ]
  }
}