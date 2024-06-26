/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

//import { Collapse } from "@mui/material"
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

const sidebars = {
  main: [
    {
      label: 'Introduction',
      type: 'doc',
      id: 'index'
    },
    {
      label: 'Getting Started',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'getting-started/fctl-quick-start',
          customProps: {
            // icon: '💾',
          }
        },
        {
          type: 'doc',
          id: 'guides/newSandbox',
        },
        {
          type: 'category',
          label: 'Setup the SDK',
          link: {
            type: 'doc',
            id: 'getting-started/sdk/index'
          },
          items: [{
            type: 'doc',
            id: 'getting-started/sdk/setup-ts-js'
          }, {
            type: 'doc',
            id: 'getting-started/sdk/setup-golang'
          }]
        },
        {
          type: 'doc',
          id: 'getting-started/cleanup',
        }
      ],
    },
    {
      label: 'Components',
      type: 'category',
      collapsible: true,
      collapsed: false,
      items: [
        {
          label: 'Ledger',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'ledger/index',
              label: 'Introduction',
            },
            {
              label: 'Tutorials',
              type: 'category',
              collapsible: true,
              collapsed: true,
              link: { type: 'doc', id: 'ledger/get-started/index' },
              items: [
                // {
                //   type: 'doc',
                //   id: 'ledger/get-started/installation',
                //   customProps: {
                //     // icon: '💾',
                //   }
                // },
                {
                  label: 'Hello World',
                  type: 'category',
                  collapsible: true,
                  collapsed: true,
                  customProps: {
                    // icon: '👋🏾',
                    description: 'Get started by creating your first transaction.',
                  },
                  link: { type: 'doc', id: 'ledger/get-started/hello-world/index' },
                  items: [
                    // 'get-started/hello-world/start-the-server',
                    'ledger/get-started/hello-world/introducing-money',
                    'ledger/get-started/hello-world/checking-balances',
                    'ledger/get-started/hello-world/your-first-transaction'
                  ]
                },
                {
                  label: 'Mastering Numscript',
                  type: 'category',
                  collapsible: true,
                  collapsed: true,
                  link: { type: 'doc', id: 'ledger/numscript/index' },
                  customProps: {
                    // icon: '🔢',
                    description: 'Get started by creating your first transaction.',
                  },
                  items: [
                    {
                      type:'doc',
                      id: 'ledger/numscript/prerequisites',
                      customProps: {
                        // icon: '1️⃣',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/multi-destination/index',
                      customProps: {
                        // icon: '➗',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/multi-source/index',
                      customProps: {
                        // icon: '✖️',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/http/index',
                      customProps: {
                        // icon: '🕸',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/templates/index',
                      customProps: {
                        // icon: '📝',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/currencies/index',
                      customProps: {
                        // icon: '💴',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/metadata/index',
                      customProps: {
                        // icon: '📌',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/kept/index',
                      customProps: {
                        // icon: '🍕',
                      },
                    },
                    {
                      type:'doc',
                      id: 'ledger/numscript/overdraft/index',
                      customProps: {
                        // icon: '📌',
                      },
                    },
                  ],
                }
              ],
            },
            {
              label: 'Guides',
              type: 'category',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'ledger/advanced/asset-conversion',
                  label: 'Currency conversion',
                },
                {
                  type: 'doc',
                  id: 'ledger/advanced/scale',
                },
              ],
            },
            {
              label: 'Deployment',
              type: 'category',
              collapsible: true,
              collapsed: true,
              items: [
                'ledger/operations/installation',
                'ledger/operations/configuration',
                'ledger/operations/env-vars',
                'ledger/operations/storages',
                'ledger/operations/upgrade',
                'ledger/operations/authentication',
                'ledger/operations/metric_reference',
                // 'ledger/api/sdks'
              ],
            },
            {
              label: 'Reference',
              type: 'category',
              collapsible: true,
              collapsed: true,
              items: [
                'ledger/reference/ledgers',
                'ledger/reference/accounting-model',
                // 'ledger/reference/accounts',
                // 'ledger/reference/transactions',
                // 'ledger/reference/architecture',
                'ledger/reference/concurrency-model',
                'ledger/advanced/publisher',
                'ledger/reference/performance',
              ],
            },
            {
              label: 'Numscript',
              type: 'category',
              collapsible: true,
              collapsed: true,
              items: [
                'ledger/reference/numscript/machine',
                'ledger/reference/numscript/postings',
                'ledger/reference/numscript/sources',
                'ledger/reference/numscript/destinations',
                'ledger/reference/numscript/variables',
                'ledger/reference/numscript/metadata',
                'ledger/reference/numscript/rounding',
              ],
            },
          ],
        },
        {
          label: 'Payments',
          type: 'category',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'payments/index' },
          items: [
            {
              type: 'doc',
              id: 'payments/index',
              label: 'Introduction'
            },
            {
              type: 'category',
              label: 'Connectors',
              link: { type: 'doc', id: 'payments/get-started/connectors/index' },
              items: [{
                type: 'autogenerated',
                dirName: 'payments/connectors',

              }, {
                type: 'doc',
                id: 'payments/get-started/connectors/adyen',
                label: 'Adyen',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/atlar',
                label: 'Atlar',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/bankingcircle',
                label: 'BankingCircle',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/currencycloud',
                label: 'CurrencyCloud',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/mangopay',
                label: 'Mangopay',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/modulr',
                label: 'Modulr',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/moneycorp',
                label: 'Moneycorp',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/stripe',
                label: 'Stripe',
              },
              {
                type: 'doc',
                id: 'payments/get-started/connectors/wise',
                label: 'Wise',
              }]
            },
            {
              type: 'category',
              label: 'Tutorials',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'payments/get-started/index',
              },
              items: [
                {
                  type: 'doc',
                  id: 'payments/get-started/installation',
                },
                {
                  type: 'doc',
                  id: 'payments/get-started/connectors/framework',
                  label: 'Framework',
                },
                {
                  type: 'category',
                  label: 'Guides',
                  collapsible: true,
                  collapsed: true,
                  link: { type: 'doc', id: 'payments/get-started/basic-guides/index' },
                  items: [
                    {
                      type: 'doc',
                      id: 'payments/get-started/basic-guides/accounts',
                      label: 'Accounts'
                    },
                    {
                      type: 'doc',
                      id: 'payments/get-started/basic-guides/payments',
                      label: 'Payments'
                    },
                    {
                      type: 'doc',
                      id: 'payments/get-started/basic-guides/transfer-initiation',
                      label: 'Transfer Initiation'
                    }
                  ]
                }
              ],
            },
          ]
        },
        {
          label: 'Wallets',
          type: 'category',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'wallets' },
          items: [{
            type: 'autogenerated',
            dirName: 'wallets',
          }]
        }, 
        {
          label: 'Flows',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'flows/index',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'flows/definition',
              label: 'Workflows definition',
            },
            {
              type: 'doc',
              id: 'flows/execution',
              label: 'Workflows execution',
            },
            {
              type: 'category',
              label: 'Stages reference',
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: 'doc',
                  id: 'flows/stages/send',
                  label: 'Send',
                },
                {
                  type: 'doc',
                  id: 'flows/stages/wait-event',
                  label: 'Waiting for events',
                },
                {
                  type: 'doc',
                  id: 'flows/stages/wait-delay',
                  label: 'Waiting for a delay',
                }
              ],
            },
            {
              type: 'category',
              label: 'Examples',
              items: [
                {
                  type: 'doc',
                  id: 'flows/examples/ledger-to-ledger',
                  label: 'Ledger to Ledger',
                },
                {
                  type: 'doc',
                  id: 'flows/examples/payment-to-wallet',
                  label: 'Payment to Wallet',
                },
                {
                  type: 'doc',
                  id: 'flows/examples/stripe-payout',
                  label: 'Ledger to Payout',
                }
              ],
            }
          ],
        }, {
          label: 'Reconciliation',
          type: 'category',
          collapsible: true,
          collapsed: true,
          link: { type: 'doc', id: 'reconciliation' },
          items: [{
            type: 'autogenerated',
            dirName: 'reconciliation',
          }]
        }
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      items: [
        {
          type: 'doc',
          id: 'stack/architecture',
        },
        {
          type: 'doc',
          id: 'stack/authentication/index',
          label: 'Authentication',
        },
        {
          type: 'doc',
          id: 'getting-started/invite',
        },
        {
          label: 'Events',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'webhooks/index',
              label: 'Webhooks',
            },
          ],
        },
        {
          type: 'doc',
          id: 'stack/sdk/index',
          label: 'SDKs',
        },
        {
          type: 'doc',
          id: 'stack/versions',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      link: {
        type: 'doc',
        id: 'deployment/introduction',
      },
      items: [
        {
          label: 'Formance Cloud Solutions',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'deployment/cloud/intro'
            },
            {
              type: 'category',
              label: 'Formance CloudPrem 1',
              items: [
                { type: 'doc', id: 'deployment/cloudprem/intro' },
                {
                  type: 'doc',
                  id: 'deployment/cloudprem/private-regions',
                },
                {
                  type: 'doc',
                  id: 'deployment/cloudprem/agent',
                },
                {
                  type: 'doc',
                  id: 'deployment/cloudprem/usage',
                },
              ],
            },
            {
              type: 'category',
              label: 'Formance CloudPrem 2',
              items: [
                { type: 'doc', id: 'deployment/cloudprem2/intro' },
                {
                  type: 'doc',
                  id: 'deployment/cloudprem2/cloudprem',
                },
                {
                  type: 'doc',
                  id: 'deployment/cloudprem2/operator',
                },
                {
                  type: 'doc',
                  id: 'deployment/cloudprem2/stack',
                },
              ],
            },
          ],
        },
        {
          label: 'Operator',
          type: 'category',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'operator/installation/requirements',
            },
            {
              type: 'doc',
              id: 'operator/installation/deployments',
            },
            'operator/demo/demo',
            {
              type: 'category',
              label: 'Modules',
              items: [
                {
                  type: 'doc',
                  id: 'operator/crd/modules/stack',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/gateway',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/ledger',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/payments',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/auth',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/orchestration',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/search',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/reconciliation',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/wallets',
                },
                {
                  type: 'doc',
                  id: 'operator/crd/modules/webhooks',
                },
              ],
            },
            {
              type: "category",
              label: "Infrastructure services",
              items: [
                {
                  type: "doc",
                  id: "operator/infra/postgres",
                },
                {
                  type: "doc",
                  id: "operator/infra/broker",
                },
                {
                  type: "doc",
                  id: "operator/infra/elasticsearch",
                },
                {
                  type: "doc",
                  id: "operator/infra/temporal",
                },
              ],
            },
            {
              type: 'category',
              label: 'Observability',
              items: [
                {
                  type: 'doc',
                  id: 'operator/observability/opentelemetry-configurations',
                },
              ]
            },
            {
              type: 'category',
              label: 'Upgrade',
              items: [
                'operator/upgrade/upgrade',
                'operator/upgrade/db_migration',
              ]
            },
            'operator/troubleshooting',
            {
              type: 'category',
              label: 'Configuration reference',
              items: [
                'operator/crd/settings',
                {
                  id: 'operator/crd',
                  label: 'Custom Resource Definitions',
                  type: 'doc'
                }
              ]
            }
          ],
        },
        {
          type: 'doc',
          id: 'deployment/backups',
        }
      ],
    },
    {
      label: 'Resources',
      type: 'category',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'stack/unambiguous-monetary-notation',
          label: 'Monetary notation (UMN)',
        },
        {
          type: 'doc',
          id: 'stack/releases',
        },
        {
          type: 'doc',
          id: 'stack/security',
        }
      ],
    },
    {
      type: 'doc',
      id: 'help',
      label: 'Getting Help',
    },
    {
      type: 'doc',
      id: 'api',
      label: 'API Reference',
    },
  ],
} satisfies SidebarsConfig;

module.exports = sidebars;
