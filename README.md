# Ristorante Da Michele Baden-Baden

<https://da-michele.com>

## Statūs of workflows in use

| Workflow status | Test Output | Live Output |
| --------------- | ----------- | ----------- |
| [![continuous-deployment](https://github.com/da-michele/da-michele.com/workflows/continuous-deployment/badge.svg)](https://github.com/da-michele/da-michele.com/actions?query=workflow%3Acontinuous-deployment) | <https://da-michele.github.io/da-michele.com/> | <https://da-michele.com> |

<!--
| [![continuous-integration](https://github.com/da-michele/da-michele.com/workflows/continuous-integration/badge.svg?event=push) on `push`](https://github.com/da-michele/da-michele.com/actions?query=workflow%3Acontinuous-integration) | Test for dead links in `Markdown` documents |
-->

## Community health files ⚕️

This repository adapts our **default community health files** hosted at:

[`da-michele/.github`](https://github.com/da-michele/.github)

### Code of conduct

[`CODE_OF_CONDUCT`](https://github.com/da-michele/.github/blob/master/CODE_OF_CONDUCT.md)

### Contributing guide

[`CONTRIBUTING`](https://github.com/da-michele/.github/blob/master/CONTRIBUTING.md)

For quick edits compare our repository structure:

```text
.
└─ packages
   └─ docs                  # website content
      ├─ .vuepress          # Vuepress config:      https://vuepress.vuejs.org/config/
      │  ├─ components      # components:           https://vuepress.vuejs.org/guide/using-vue.html#using-components
      │  └─ public
      │     └─ food         # food images
      ├─ en                 # English pages
      │  ├─ README.md       #   (en) homepage:      https://da-michele.com/en/
      │  └─ menu.md         #   (en) menu:          https://da-michele.com/en/menu.html
      │                     # German pages
      ├─ README.md          #   (de) homepage:      https://da-michele.com/
      └─ menu.md            #   (de) menu:          https://da-michele.com/menu.html
```

### Security policy

[`SECURITY`](https://github.com/da-michele/.github/blob/master/SECURITY.md)

### Support

[`SUPPORT`](https://github.com/da-michele/.github/blob/master/SUPPORT.md)
