# Debug & Remove Lovable References - TODO

## Found Issues
1. `vite.config.ts` imported from `@lovable.dev/vite-tanstack-config`
2. `package.json` had `@lovable.dev/vite-tanstack-config` as devDependency
3. `src/routes/__root.tsx` had `{ name: "twitter:site", content: "@Lovable" }`

## Plan
- [x] Read `@lovable.dev/vite-tanstack-config` source to understand what it configures
- [x] Replace vite.config.ts with equivalent standard Vite + TanStack config
- [x] Remove `@lovable.dev/vite-tanstack-config` from package.json devDependencies
- [x] Update twitter meta tag in __root.tsx from `@Lovable` to `@BrainStormAI`
- [x] Run build/test to verify fixes

## Result
- Build succeeded (client + SSR)
- Zero remaining "lovable" references in codebase


