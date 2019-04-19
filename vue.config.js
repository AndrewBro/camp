module.exports = {
  // publicPath: 'camp/dist'
  publicPath: process.env.NODE_ENV === 'production' ? '/' : 'camp/dist'
};
