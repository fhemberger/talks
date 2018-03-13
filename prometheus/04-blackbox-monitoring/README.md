# 4. Blackbox Monitoring

So far we instrumented our setup from the inside: We had access to metrics from machines and our app, which is also called »Whitebox Monitoring«. While this already covers a lot of information, it doesn't reflect how a user may perceive our website. So for the »outside view«, there's a different approach called »Blackbox Monitoring«, which allows us to monitor our site from a different perspective.

While all our services might be perfectly healthy from the inside and running smoothly, there are still aspects which may hinder users from interacting with it:

- Network problems
- DNS problems
- Domain issues
- etc.

Blackbox monitoring allows us to view our site from the outside, even from multiple destinations (e.g. different continents, network or cloud providers, etc).

Start the blackbox_exporter, it will automatically look for its config file [`blackbox.yml`](./blackbox.yml) in the current directory:

```
blackbox_exporter
```

(Again, after that start `prometheus` in a separate Terminal window.)

Let's check the metrics from the [Prometheus website](https://prometheus.io):
http://localhost:9115/probe?target=prometheus.io&module=http_2xx

```
# HELP content_length Length of http content response
# TYPE content_length gauge
content_length -1

# HELP probe_dns_lookup_time_seconds Returns the time taken for probe dns lookup in seconds
# TYPE probe_dns_lookup_time_seconds gauge
probe_dns_lookup_time_seconds 0.003056745

# HELP probe_duration_seconds Returns how long the probe took to complete in seconds
# TYPE probe_duration_seconds gauge
probe_duration_seconds 0.462925915

# HELP probe_failed_due_to_regex Indicates if probe failed due to regex
# TYPE probe_failed_due_to_regex gauge
probe_failed_due_to_regex 0

# HELP probe_http_duration_seconds Duration of http request by phase, summed over all redirects
# TYPE probe_http_duration_seconds gauge
probe_http_duration_seconds{phase="connect"} 0.039660996
probe_http_duration_seconds{phase="processing"} 0.344621531
probe_http_duration_seconds{phase="resolve"} 0.0059253
probe_http_duration_seconds{phase="tls"} 0.091492683
probe_http_duration_seconds{phase="transfer"} 0.000111103

# HELP probe_http_redirects The number of redirects
# TYPE probe_http_redirects gauge
probe_http_redirects 1

# HELP probe_http_ssl Indicates if SSL was used for the final redirect
# TYPE probe_http_ssl gauge
probe_http_ssl 1

# HELP probe_http_status_code Response HTTP status code
# TYPE probe_http_status_code gauge
probe_http_status_code 200

# HELP probe_http_version Returns the version of HTTP of the probe response
# TYPE probe_http_version gauge
probe_http_version 1.1

# HELP probe_ip_protocol Specifies whether probe ip protocol is IP4 or IP6
# TYPE probe_ip_protocol gauge
probe_ip_protocol 4

# HELP probe_ssl_earliest_cert_expiry Returns earliest SSL cert expiry in unixtime
# TYPE probe_ssl_earliest_cert_expiry gauge
probe_ssl_earliest_cert_expiry 1.530835199e+09

# HELP probe_success Displays whether or not the probe was a success
# TYPE probe_success gauge
probe_success 1
```

So with a single check we found out (among others):

- That the site was reachable (`probe_success`)
- What the status code of the result was (`probe_http_status_code`)
- How long it took to do the DNS lookup (`probe_dns_lookup_time_seconds`)
- How long the different phases of the request took (`probe_http_duration_seconds`)
- If there has been a redirect (`probe_http_redirects`)
- If we ended up on a https page (`probe_http_ssl`)
- When the TLS certificate for this domain is about to expire (`probe_ssl_earliest_cert_expiry`)

These are great metrics to define [Alerts](../05-alerting/README.md), when the website is not reachable from the outside or our TLS certificates are about to expire.
