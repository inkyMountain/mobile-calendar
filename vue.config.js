module.exports = {
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/entries/calendar.js',
      template: 'public/calendar.html',
      filename: 'index.html',
      title: '日历',
      chunks: ['chunk-vendors', 'chunk-common', 'calendar']
    },
    calendar: {
      entry: 'src/entries/calendar.js',
      template: 'public/calendar.html',
      filename: 'calendar.html',
      title: '日历',
      chunks: ['chunk-vendors', 'chunk-common', 'calendar']
    },
    clock: {
      entry: 'src/entries/clock.js',
      template: 'public/clock.html',
      filename: 'clock.html',
      title: '时钟',
      chunks: ['chunk-vendors', 'chunk-common', 'clock']
    },
  },

  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined
}