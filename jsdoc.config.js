module.exports = {
  source: {
    include: ["src", "package.json", "README.md"],
    includePattern: ".js$",
    excludePattern: "(node_modules/|docs)",
  },
  plugins: ["plugins/markdown", "jsdoc-plugin-typescript"],
  typescript: {
    moduleRoot: "./",
  },
  opts: {
    encoding: "utf8",
    readme: "./README.md",
    destination: "docs",
    recurse: true,
    verbose: true,
  },
};
