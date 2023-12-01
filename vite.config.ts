import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  build: {
    outDir: "dist", // 构建输出目录
    lib: {
      entry: "./packages/components/index.ts",
      name: "sekiro-ui",
    },
  },
  plugins: [vue()],
});
