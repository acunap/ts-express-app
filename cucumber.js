module.exports = {
  default: {
    paths: ['tests/**/*.feature'],
    require: ['tests/**/*.steps.ts'],
    requireModule: ['ts-node/register', 'tsconfig-paths/register'],
    publishQuiet: true,
  },
};
