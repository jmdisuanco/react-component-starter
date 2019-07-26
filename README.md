# JM's React Starter Component

This is my starter boilerplate for building React Components.

## Getting Started

### Prerequisites

- NodeJS

### Installing

- Clone this. `git clone https://github.com/jmdisuanco/jm-starter-component`
- remove the git reference `rm -rf .git`
- initialize the starter component `npm i`

### Commands

| command          | Description                                                              | the script                         |
| ---------------- | ------------------------------------------------------------------------ | ---------------------------------- |
| build            | build the the distribution version                                       | `./scripts/build.sh`               |
| test             | Test the component                                                       | `react-scripts test`               |
| eject            | eject the CRA                                                            | `react-scripts eject`              |
| start            | start storybook                                                          | `start-storybook -p 9999`          |
| build-storybook  | build storybook                                                          | `build-storybook`                  |
| deploy-storybook | deplay the storybook to github page                                      | `storybook-to-ghpages`             |
| pub:patch        | patch the package version and publish to NPM registry                    | `npm version patch && npm publish` |
| pub:minor        | minor the package version and publish to NPM registry                    | `npm version minor && npm publish` |
| pub:major        | major the package version and publish to NPM registry                    | `npm version major && npm publish` |
| postpublish      | runs automatically after any `pub:*` commands publish in GITHUB with tag | `git push --follow-tags"           |

## Contributing

- star this repo
- contribute to the code just `fork` and issue a `pull request`
- share to fellow devs

## Authors

- **JM Disuanco** - _React Starter Component_ - [JM Disuanco](https://jm.disuan.co)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
