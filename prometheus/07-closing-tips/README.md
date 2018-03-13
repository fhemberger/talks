# Closing tips

## Disk usage

Check available disk space for Prometheus regularly. When you collecting lots of metrics (e.g. node_exporter's systemd metrics), they might fill up your disk. (Hint: Create an alert on that!)

What you can do about it:

- Get a bigger disk, d'uh!
- Reduce the retention time of the samples in the database (via prometheus' `--storage.tsdb.retention` startup parameter), the default is 15 days
- Reduce the scraping interval
- [Drop unused metrics at scrape time](https://www.robustperception.io/dropping-metrics-at-scrape-time-with-prometheus/)


## Limit access to metrics endpoints

Although they don't contain sensitive data, you may want to block outside access to the `/metrics` route of your microservices in your reverse proxy.


## Useful links

- [Prometheus Documenation](https://prometheus.io/docs/)
- [Robust Perception Blog](https://www.robustperception.io/tag/prometheus/)
