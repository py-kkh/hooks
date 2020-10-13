module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0],
    "scope-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore", // 构建过程或辅助工具的变动
        "ci",
        "docs", // 文档（documentation）
        "feat", // 新功能（feature）
        "fix", // 修补bug
        "perf",
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "revert",
        "style", // 格式（不影响代码运行的变动）
        "test", // 增加测试
        "infra",
      ],
    ],
  },
};
