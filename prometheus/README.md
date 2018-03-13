# Introduction to Monitoring with Prometheus

## Prerequisites

Before we can start with the demo, we need a couple of things. Please download the following tools and make sure you choose the right platform for you (Linux, macOs, Windows, etc):

- [Prometheus](https://github.com/prometheus/prometheus/releases)
- [Prometheus node_exporter](https://github.com/prometheus/node_exporter/releases) - Not available for Windows (you can run it in a VM or in a remote Linux machine instead)
- [Prometheus blackbox_exporter](https://github.com/prometheus/blackbox_exporter/releases)
- [Prometheus Alertmanager](https://github.com/prometheus/alertmanager/releases)
- [Mailslurper](https://github.com/mailslurper/mailslurper/releases) - Development SMTP mail server for receiving alert mails
- [Grafana](https://grafana.com/grafana/download) - Shiny dashboards for our metrics
- [Node.js](https://nodejs.org/en/download/) - Required for examples in chapter 3 and 5

For all tutorials, I expect you have either installed those files somewhere in your `$PATH`, otherwise please prefix commands with the installation directory accordingly. Windows users, don't forget to add `.exe` to the commands. 😉

If you have any trouble with the examples or find that something's missing, please raise an [issue](https://github.com/fhemberger/talks/issues/new) or submit a PR. And now, let's get started …

## Chapters:

- [01. Getting Started](./01-getting-started/)
- [02. Monitoring Nodes](./02-monitoring-nodes/)
- [03. Monitoring Apps](./03-monitoring-apps/)
- [04. Blackbox Monitoring](./04-blackbox-monitoring/)
- [05. Alerting](./05-alerting/)
- [06. Dashboards](./06-dashboards/)
- [07. Closing Tips](./07-closing-tips/)
