# dracula
hello and welcome to dracula! dracula is a template project that comes with baked in authentication. the intention is quickly get started building any new app, without having to worry about the authentication part. the project is still a WIP but by the end I hope to have be able to spin up many apps for clients quickly. 

**whats included?**
- aws amplify
- authentication
- next.js
- typescript
- eslint configuration
- jest
- cspell
- prettier

## table of contents
- [getting started](#getting-started)
- [folder structure](#folder-structure)



## getting started
clone the repository
`git clone git@github.com:joeybuenosdias/dracula-amplify-auth-template.git [NAME_OF_PROJECT]`

`cd [NAME_OF_PROJECT]`

run the development server:
`npm run dev`

## folder structure
- pages
    - no state or business logic, hierarchy and layout logic only

- components
    - dumb components
    - typically have no state
    - contain styles
    - can be reuseable
    - consume state values
    - PascalCase naming convention for files and components
    - new directory for each component with re-export index.ts file, unit test file and any files for sub components/hooks. sub components/hooks should also contain their own directory following the same pattern. try to keep only 1 level of sub components/hooks. 

- features
    - smart components
    - typically manage state and expose context, provider and hooks
    - PascalCase naming convention for files and components
    - new directory for each component with re-export index.ts file, unit test file and any files for sub components/hooks. sub components/hooks should also contain their own directory following the same pattern. try to keep only 1 level of sub components/hooks.

