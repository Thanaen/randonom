export default {
  "*.{ts,tsx}": () => "tsc -p tsconfig.json",
  "*.{ts,tsx,json}": "eslint --cache --fix",
  "*.{ts,tsx,css,md,json}": "prettier --write",
};
