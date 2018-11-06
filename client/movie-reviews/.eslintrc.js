module.exports = {
  "extends": ["airbnb-standard"],
  "rules": {
  	// "prefer-template": "off",
  	// "no-plusplus": 0,
    "max-len": 0,
    "no-param-reassign": 0,
  	"no-console": 0
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "jest": true,
    "es6": true
  },
  "parser": "babel-eslint"
};