# Resources: Running Node.js apps in production

This is a list of resources for my talk [»Running Node.js apps in production«](http://fhemberger.github.io/talks/nodejs-in-production/). Feel free to submit a pull-request with other helpful resources.


## Testing, Code Metrics, Code Complexity

### Testing

- [Mocha](http://visionmedia.github.io/mocha/), [Chai](http://chaijs.com/)
- [Jasmine](http://jasmine.github.io/2.0/introduction.html)
- [Sinon](http://sinonjs.org/) (Mocks, stubs and spies for tests)
- [Supertest](https://github.com/visionmedia/supertest) (e.g. for APIs)
- [Casper.js](http://casperjs.org/), [Karma](http://karma-runner.github.io/), [Dalek.js](http://dalekjs.com)

### Code Coverage

- [Istanbul](https://github.com/gotwarlost/istanbul) ([Example report](http://gotwarlost.github.io/istanbul/public/coverage/lcov-report/index.html))

### Code Complexity Analysis

- [jscomplexity.com](http://www.jscomplexity.org/)
- [plato](https://github.com/es-analysis/plato) ([Example complexity report for jQuery](http://es-analysis.github.io/plato/examples/jquery/))
- [grunt-complexity](https://github.com/vigetlabs/grunt-complexity)
- [grunt-plato](https://github.com/jsoverson/grunt-plato)


## Deployment

- [Git Hooks](http://www.git-scm.com/book/en/Customizing-Git-Git-Hooks)
- [GitHub Webhooks](https://help.github.com/articles/post-receive-hooks)
- [Capistrano](http://capistranorb.com/)
- [deploy.sh](https://github.com/visionmedia/deploy)

### Capistrano and Node.js

- [Bricolage - Deploying node.js applications with Capistrano](http://blog.evantahler.com/blog/deploying-node-js-applications-with-capistrano.html)
- [deploying node with Capistrano - Big elephants](http://big-elephants.com/2012-07/deploying-node-with-capistrano/)
- [loopj/capistrano-node-deploy](https://github.com/loopj/capistrano-node-deploy)
- [eBay: Deploying Node applications with Capistrano, GitHub, Nginx and Upstart](http://www.technology-ebay.de/the-teams/mobile-de/blog/deploying-node-applications-with-capistrano-github-nginx-and-upstart.html)


## Running Node.js (and keep it running)

- [forever](https://github.com/nodejitsu/forever)
- [nodemon](http://nodemon.io/)
- [pm2](https://github.com/Unitech/pm2) (Process manager with builtin load-balancer, [blogpost](http://devo.ps/blog/2013/06/26/goodbye-node-forever-hello-pm2.html))
- [Running node.js Apps with Upstart](https://github.com/cvee/node-upstart)


### Uptime
- [The 4 keys to 100% uptime with Node.js](http://engineering.spanishdict.com/blog/2013/12/20/the-4-keys-to-100-uptime-with-nodejs)
- [Towards 100% uptime](http://sandinmyjoints.github.io/towards-100-pct-uptime/)
- [node-toobusy](https://github.com/lloyd/node-toobusy)

### Production best practices
- [Node.js Production Practices](http://www.joyent.com/developers/node)
- [10 steps to Node.js nirvana in production](http://qzaidi.github.io/2013/05/14/node-in-production/)
- [Walmart Mobile node.js Setup](https://gist.github.com/hueniverse/7686452)

### Clustering
- [What’s New in Node.js v0.12: Cluster Round-Robin Load Balancing](http://strongloop.com/strongblog/whats-new-in-node-js-v0-12-cluster-round-robin-load-balancing/)
- [recluster](http://npmawesome.com/posts/2013-12-31-recluster/)
- [express-graceful-exit](https://github.com/mathrawka/express-graceful-exit)


## Logging

- [Service logging in JSON with Bunyan](http://blog.nodejs.org/2012/03/28/service-logging-in-json-with-bunyan/)
- [bunyan](https://www.npmjs.org/package/bunyan), [bunyan-format](https://www.npmjs.org/package/bunyan-format)
- [chatty](https://github.com/thomseddon/chatty) (Syslog, *nix only)


## Analytics

- [Piwik Tracker – A wrapper for the Piwik Tracking HTTP API](https://github.com/fhemberger/piwik-tracker)
- [Track deployments in Piwik](https://gist.github.com/fhemberger/8335559)


## Monitoring / Metrics

- [nodetime.com](http://nodetime.com), [look](https://github.com/baryshev/look)
- [New Relic](http://newrelic.com/)
- [logstash](http://logstash.net/)
- [Collect & visualize your logs with Logstash, Elasticsearch & Redis](http://michael.bouvy.net/blog/en/2013/11/19/collect-visualize-your-logs-logstash-elasticsearch-redis-kibana/)
- [statsd: Simple daemon for easy stats aggregation](https://github.com/etsy/statsd/)
- [Code as Craft: Tracking Every Release](http://codeascraft.com/2010/12/08/track-every-release/)
- [Code as Craft: Measure Anything, Measure Everything](http://codeascraft.com/2011/02/15/measure-anything-measure-everything/)
- [Application Monitoring](http://rubynaut.net/2012/08/30/application-monitoring/)
- [Graylog2](http://graylog2.org/)
- [node-memwatch: Leak Detection and Heap Diffing for Node.JS](https://github.com/lloyd/node-memwatch)
- [Yahoo! Enineering: NodeJS High Availability](http://yahooeng.tumblr.com/post/68823943185/nodejs-high-availability)


## Client side error logging

- [Errbit - The open source, self-hosted error catcher](http://errbit.github.io/errbit/)
- Commercial products: [bugsense.com](http://bugsense.com), [jslogger.com](http://jslogger.com), [qbaka.com](http://qbaka.com), [muscula.com](http://muscula.com), [errorception.com](http://errorception.com), [exceptionhub.com](http://exceptionhub.com), [bugsnag.com](http://bugsnag.com), [exceptional.io](http://exceptional.io), [airbrake.io](http://airbrake.io), [getsentry.com](http://getsentry.com)


## Security

- [nodesecurity.io](https://nodesecurity.io/)
- [Go on an educational Web security adventure!](https://github.com/toolness/)- [Top 10 Proactive Web Application Security Measures](https://blog.whitehatsec.com/top-10-proactive-web-application-security-measures/)
- [Top Overlooked Security Threats to Node.js Web Applications](https://speakerdeck.com/ckarande/top-overlooked-security-threats-to-node-dot-js-web-applications)
- [duraconf - A collection of hardened configuration files for SSL/TLS services](https://github.com/ioerror/duraconf)
- [helmet - security middleware for Express/Connect](https://github.com/evilpacket/helmet)
- [CSRF protection middleware](http://www.senchalabs.org/connect/csrf.html), [csurf](https://github.com/expressjs/csurf)
- [Open Web Application Security Project (OWASP)](https://www.owasp.org/)
- [OWASP: Top Ten Critical Security Risks 2013](https://www.owasp.org/index.php/Top_10_2013-Top_10)
- [OWASP: XSS Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_Prevention_Cheat_Sheet)
- [HTML5 Rocks: An Introduction to Content Security Policy](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
