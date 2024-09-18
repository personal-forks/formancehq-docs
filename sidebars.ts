/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

//import { Collapse } from "@mui/material"
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars = {
  main: [
    {
      label: "Introduction",
      type: "doc",
      id: "index",
    },
    {
      label: "Getting Started",
      type: "category",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "getting-started/fctl-quick-start",
          customProps: {
            // icon: '💾',
          },
        },
        {
          type: "doc",
          id: "guides/newSandbox",
        },
        {
          type: "category",
          label: "Setup the SDK",
          link: {
            type: "doc",
            id: "getting-started/sdk/index",
          },
          items: [
            {
              type: "doc",
              id: "getting-started/sdk/setup-ts-js",
            },
            {
              type: "doc",
              id: "getting-started/sdk/setup-golang",
            },
          ],
        },
        {
          type: "doc",
          id: "getting-started/cleanup",
        },
      ],
    },
    {
      label: "Components",
      type: "category",
      collapsible: true,
      collapsed: false,
      items: [
        {
          label: "Ledger",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "ledger/index",
              label: "Introduction",
            },
            {
              label: "Tutorials",
              type: "category",
              collapsible: true,
              collapsed: true,
              link: { type: "doc", id: "ledger/get-started/index" },
              items: [
                // {
                //   type: 'doc',
                //   id: 'ledger/get-started/installation',
                //   customProps: {
                //     // icon: '💾',
                //   }
                // },
                {
                  label: "Hello World",
                  type: "category",
                  collapsible: true,
                  collapsed: true,
                  customProps: {
                    // icon: '👋🏾',
                    description:
                      "Get started by creating your first transaction.",
                  },
                  link: {
                    type: "doc",
                    id: "ledger/get-started/hello-world/index",
                  },
                  items: [
                    // 'get-started/hello-world/start-the-server',
                    "ledger/get-started/hello-world/introducing-money",
                    "ledger/get-started/hello-world/checking-balances",
                    "ledger/get-started/hello-world/your-first-transaction",
                  ],
                },
              ],
            },
            {
              label: "Guides",
              type: "category",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "doc",
                  id: "ledger/advanced/asset-conversion",
                  label: "Currency conversion",
                },
                {
                  type: "doc",
                  id: "ledger/advanced/scale",
                },
                {
                  type: "doc",
                  id: "ledger/advanced/temporality",
                },
                "ledger/advanced/filtering",
                "ledger/advanced/buckets",
                {
                  type: 'category',
                  label: 'Accounting model',
                  link: { type: 'doc', id: 'ledger/advanced/accounting' },
                  items: [{
                    type: 'autogenerated',
                    dirName: 'ledger/advanced/accounting',
                  }]
                }
              ],
            },
            {
              label: "Reference",
              type: "category",
              collapsible: true,
              collapsed: true,
              items: [
                "ledger/reference/ledgers",
                "ledger/reference/accounting-model",
                // 'ledger/reference/accounts',
                // 'ledger/reference/transactions',
                // 'ledger/reference/architecture',
                "ledger/reference/concurrency-model",
                "ledger/advanced/publisher",
                "ledger/reference/performance",
                "ledger/reference/v2-breaking-changes",
              ],
            },
            {
              label: "Deployment",
              type: "category",
              collapsible: true,
              collapsed: true,
              items: [
                // "ledger/operations/installation",
                "ledger/operations/env-vars",
                // "ledger/operations/storages",
                // "ledger/operations/upgrade",
                "ledger/operations/metric_reference",
                // 'ledger/api/sdks'
              ],
            },
          ],
        },
        {
          label: "Numscript",
          type: "category",
          link: { id: "numscript", type: "doc" },
          items: [
            {
              type: "autogenerated",
              dirName: "numscript",
            },
          ],
        },
        {
          label: "Connectivity (f.k.a: Payments)",
          type: "category",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "payments/index" },
          items: [
            {
              type: "doc",
              id: "payments/index",
              label: "Introduction",
            },
            {
              type: "category",
              label: "Connectors",
              link: {
                type: "doc",
                id: "payments/get-started/connectors/index",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "payments/connectors",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/adyen",
                  label: "Adyen",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/atlar",
                  label: "Atlar",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/bankingcircle",
                  label: "BankingCircle",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/currencycloud",
                  label: "CurrencyCloud",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/mangopay",
                  label: "Mangopay",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/modulr",
                  label: "Modulr",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/moneycorp",
                  label: "Moneycorp",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/stripe",
                  label: "Stripe",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/wise",
                  label: "Wise",
                },
              ],
            },
            {
              type: "category",
              label: "Tutorials",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "payments/get-started/index",
              },
              items: [
                {
                  type: "doc",
                  id: "payments/get-started/installation",
                },
                {
                  type: "doc",
                  id: "payments/get-started/connectors/framework",
                  label: "Framework",
                },
                {
                  type: "category",
                  label: "Guides",
                  collapsible: true,
                  collapsed: true,
                  link: {
                    type: "doc",
                    id: "payments/get-started/basic-guides/index",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "payments/get-started/basic-guides/accounts",
                      label: "Accounts",
                    },
                    {
                      type: "doc",
                      id: "payments/get-started/basic-guides/payments",
                      label: "Payments",
                    },
                    {
                      type: "doc",
                      id: "payments/get-started/basic-guides/transfer-initiation",
                      label: "Transfer Initiation",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Wallets",
          type: "category",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "wallets" },
          items: [
            {
              type: "autogenerated",
              dirName: "wallets",
            },
          ],
        },
        {
          label: "Flows",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "flows/index",
              label: "Introduction",
            },
            {
              type: "doc",
              id: "flows/definition",
              label: "Workflows definition",
            },
            {
              type: "doc",
              id: "flows/execution",
              label: "Workflows execution",
            },
            {
              type: "category",
              label: "Stages reference",
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: "doc",
                  id: "flows/stages/send",
                  label: "Send",
                },
                {
                  type: "doc",
                  id: "flows/stages/wait-event",
                  label: "Waiting for events",
                },
                {
                  type: "doc",
                  id: "flows/stages/wait-delay",
                  label: "Waiting for a delay",
                },
              ],
            },
            {
              type: "category",
              label: "Examples",
              items: [
                {
                  type: "doc",
                  id: "flows/examples/ledger-to-ledger",
                  label: "Ledger to Ledger",
                },
                {
                  type: "doc",
                  id: "flows/examples/payment-to-wallet",
                  label: "Payment to Wallet",
                },
                {
                  type: "doc",
                  id: "flows/examples/stripe-payout",
                  label: "Ledger to Payout",
                },
              ],
            },
          ],
        },
        {
          label: "Reconciliation",
          type: "category",
          collapsible: true,
          collapsed: true,
          link: { type: "doc", id: "reconciliation" },
          items: [
            {
              type: "autogenerated",
              dirName: "reconciliation",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Platform",
      items: [
        {
          type: "doc",
          id: "stack/architecture",
        },
        {
          type: "doc",
          id: "stack/authentication/index",
          label: "Authentication",
        },
        {
          type: "doc",
          id: "getting-started/invite",
        },
        {
          label: "Events",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "webhooks/index",
              label: "Webhooks",
            },
          ],
        },
        {
          type: "category",
          label: "Observability",
          items: [
            {
              type: "doc",
              id: "stack/observability/metrics",
            },
          ],
        },
        {
          type: "doc",
          id: "stack/sdk/index",
          label: "SDKs",
        },
        {
          type: "doc",
          id: "stack/versions",
        },
        {
          type: "category",
          label: "Enterprise",
          items: [
            {
              type: "doc",
              id: "stack/ee/audit-log",
            },
            // {
            //   type: "doc",
            //   id: "stack/ee/sso",
            // },
            // {
            //   type: "doc",
            //   id: "stack/ee/rbac",
            // },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      link: {
        type: "doc",
        id: "deployment/introduction",
      },
      items: [
        {
          label: "Formance Cloud Solutions",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "deployment/cloud/intro",
            },
            {
              type: "category",
              label: "Formance CloudPrem 1",
              items: [
                { type: "doc", id: "deployment/cloudprem/intro" },
                {
                  type: "link",
                  label: "Operator Deployment",
                  href: "/operator/Requirements",
                },
                {
                  type: "category",
                  label: "Private Region Deployment",
                  collapsed: false,
                  items: [
                    {
                      type: "doc",
                      id: "deployment/cloudprem/private-regions",
                    },
                    {
                      type: "doc",
                      id: "deployment/cloudprem/agent",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Stack Deployment",
                  link: {
                    type: "doc",
                    id: "deployment/cloudprem/usage",
                  },
                  collapsed: false,
                  items: [
                    {
                      type: "link",
                      label: "Creation",
                      href: "/deployment/cloudprem/usage#create-a-stack",
                    },
                    {
                      type: "link",
                      label: "Enable Modules",
                      href: "/deployment/cloudprem/usage#enabledisable-stack-modules",
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Formance CloudPrem 2",
              items: [
                { type: "doc", id: "deployment/cloudprem2/intro" },
                {
                  type: "doc",
                  id: "deployment/cloudprem2/cloudprem",
                },
                {
                  type: "doc",
                  id: "deployment/cloudprem2/operator",
                },
                {
                  type: "doc",
                  id: "deployment/cloudprem2/stack",
                },
              ],
            },
          ],
        },
        {
          label: "Operator",
          type: "category",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "operator",
            },
          ],
        },
        {
          type: "doc",
          id: "deployment/backups",
        },
      ],
    },
    {
      label: "Resources",
      type: "category",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "stack/unambiguous-monetary-notation",
          label: "Monetary notation (UMN)",
        },
        {
          type: "doc",
          id: "stack/releases",
        },
        {
          type: "doc",
          id: "stack/security",
        },
      ],
    },
    {
      type: "doc",
      id: "help",
      label: "Getting Help",
    },
    {
      type: "doc",
      id: "api",
      label: "API Reference",
    },
  ],
} satisfies SidebarsConfig;

module.exports = sidebars;
