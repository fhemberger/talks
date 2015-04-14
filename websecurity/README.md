# Web security related resources

* [OWASP: Top Ten Critical Security Risks](https://www.owasp.org/index.php/Top_10_2013-Top_10)  
*Top 10 list of the most important web application security weaknesses. It also provides basic techniques to protect against these high risk problem areas. Some of those are explained in detail in the links and references below.*

* [Article: Starting Up Security](https://medium.com/@magoo/starting-up-security-87839ab21bae)  
*A good introduction to company code and infrastructure security measures, not only for startups*

* [Article: Security Breach 101](https://medium.com/@magoo/security-breach-101-b0f7897c027c)  
*How to react calmly and go through all necessary steps when things went south and you got attacked. I hope you’ll never need it, but I highly recommend to have a process for handling security breaches.*


## Secure foundations

### Dependencies

Find known vulnerabilities in packages and frameworks.

* [CVE Security Vulnerability Database](http://www.cvedetails.com/index.php)  
*General database for security vulnerabilities, exploits and references. You can search for product names, attack types, or CVE number (Common Vulnerabilities and Exposures)*

* [Node.js Blog: Security related fixes](http://blog.nodejs.org/vulnerability/) ([RSS](http://blog.nodejs.org/feed/vulnerability/))  

* [Node Security Project: Advisories](https://nodesecurity.io/advisories) ([RSS](https://nodesecurity.io/rss.xml)) 

* [A database of vulnerable Ruby Gems (GitHub)](https://github.com/rubysec/ruby-advisory-db)  

* [A database of PHP security advisories (GitHub)](https://github.com/FriendsOfPHP/security-advisories), [Website](https://security.sensiolabs.org/database)

* [PHP Secure Configuration Checker](https://github.com/sektioneins/pcc)

* [Article: Checking for vulnerable Node.js modules](http://nodeexamples.com/2014/08/16/checking-for-vulnerable-node-js-modules/)  
*Describes tools to detect outdated/vulnerable packages and how to automate these steps in your build process*

* [David](http://david-dm.org)  
*Get badges for your GitHub project, find outdated or vulnerable Node.js dependencies*

* [VersionEye](https://www.versioneye.com/)  
*Checks outdated dependencies in your GitHub project for different languages (commercial)*

* [requires.io](https://requires.io/)  
*Requires.io keeps your python projects secure by monitoring their dependencies (commercial)*

* [requiresafe.com](https://requiresafe.com/)  
*Integrate checks against the Node Security Project's advisories into your deployment process, including module code audit (commercial, beta)*


### Database security settings

* [Security in MySQL](https://dev.mysql.com/doc/mysql-security-excerpt/5.1/en/index.html)
* [Article: MongoDB - Security Weaknesses in a typical NoSQL database](https://www.trustwave.com/Resources/SpiderLabs-Blog/Mongodb---Security-Weaknesses-in-a-typical-NoSQL-database/)
* [PDF: MongoDB at risk](http://cispa.saarland/wp-content/uploads/2015/02/MongoDB_documentation.pdf)  
*Students of the Center for IT-Security, Privacy and Accountability discover Several thousand MongoDBs without access control on the Internet*
* [MongoDB Security Tutorials](http://docs.mongodb.org/manual/administration/security/)
* [CouchDB – The Definitive Guide: Security](http://guide.couchdb.org/draft/security.html)


## Secure communication: TLS

* [How To Migrate To HTTPS](https://docs.google.com/document/d/1oRXJUIttqQxuxmjj2tgYjj096IKw4Zcw6eAoIKWZ2oQ)  
*This document describes a series of steps you can follow to gradually migrate a small or large web site from HTTP to HTTPS.*


### Obtaining TLS certificates

* [Let’s Encrypt](https://letsencrypt.org/)  
*A free and open Certificate Authority by Mozilla, Akamai, Cisco and the EFF, arriving mid-2015*

* [ioerror/duraconf: Getting a free certificate](https://github.com/ioerror/duraconf/blob/master/startssl/README.markdown)  
*If you use this guide to generate a free certificate at StartSSL, make sure to use __this__ command to generate a public/private keypair (original description is a bit outdated):*  
`openssl req -new -newkey rsa:4096 -sha256 -keyout example.com.key -nodes -out example.com.csr`

* [SSLMate](https://sslmate.com/)  
*Buy SSL certs from the command line.*

(Just a few examples, there are lots of different Certificate Authorities and vendors.)


### Configuring your server, installing certificates

Assumed you have full administration rights on your server, the following links help you to get your TLS certificate up and running. If you don’t, please talk to your hoster if he is offering  the use of TLS as well.

* [Mozilla SSL Configuration Generator](https://mozilla.github.io/server-side-tls/ssl-config-generator/)  
*Generates the SSL configuration for Apache, nginx or HAProxy with the cipher suite combination best matching your server version and supported browsers*

* [ioerror/duraconf: Secure configuration settings](https://github.com/ioerror/duraconf/tree/master/configs)  
*Secure configuration settings for Apache, GnuPG, IIS, Lighttpd, nginx, postfix and sshd*

* [Article: Adding an (SHA256 signed) SSL certificate](https://remysharp.com/2014/10/17/how-to-add-ssl)  
*Remy Sharp goes through the process of installing a new SSL certificate*

* [Creating a .pem File for SSL Certificate Installations](https://www.digicert.com/ssl-support/pem-ssl-creation.htm)  

* [Article: 19.5% of HTTPS sites trigger browser warning as they use SHA-1 signed certificates](https://www.elie.net/blog/security/19.5-percent-of-https-sites-trigger-browser-warning-as-they-use-sha-1-signed-certificates)  
*Why you should update your certificates if they still use a SHA-1 signature*

* [SSL Labs](https://www.ssllabs.com/)  
*Test your site’s certificate and configuration, your browser’s SSL implementation and learn how to deploy SSL/TLS correctly*

* [Public Key Pinning](https://developer.mozilla.org/en-US/docs/Web/Security/Public_Key_Pinning)  
*Security feature to associate your certificate's specific public key with your web server to prevent "Man In The Middle" attacks with forged certificates.*


## Secure applications

### Safer interaction with the browser

* [OWASP: HTML5 Security Cheat Sheet](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet)  
*A good overview how to handle HTML5 features like Web Sockets, Storage APIs, Web Workers, iframes safely. Also lists some useful HTTP headers to encance security.*

* [Talk: In the DOM, no one will hear you scream](http://slideshare.net/x00mario/in-the-dom-no-one-will-hear-you-scream)  
*A journey into the moldy layer between HTML and JavaScript*

* [helmet](https://github.com/helmetjs/helmet)  
*Express: Set various security headers for your application (including Content-Security-Policy, HTTP Strict Transport Security, X-Frame-Options, XSS-Filter)*

* [lusca](https://github.com/krakenjs/lusca)  
*Application security for Express apps*


### Cross-Site-Scripting (XSS) prevention

Cross-Site-Scripting describes an attack of executing foreign (potentially malicious) code in the context of your website. It can for example extract cookies, security tokens, all sorts of user data and alter the content and functionality of your website.

* [html5sec.org](https://html5sec.org/) ([GitHub](https://github.com/cure53/H5SC))  
*Wide list of XSS vector examples and affected browsers. The GitHub repository contains links to further tools, file upload tests, feed reader XSS tests, etc.*

[Article: Finding Zero-Day XSS Vulns via Doc Metadata](http://pen-testing.sans.org/blog/pen-testing/2014/12/04/cross-site-scripting-through-file-metedata)  
*XSS attacks can also occur where you wouldn't expect them in the first place. For example in metadata of files uploaded to your website (e.g. EXIF data stored in photos).*

* [OWASP: XSS Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_Prevention_Cheat_Sheet)

* [OWASP: XSS Filter Evasion Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)  
*Test your XSS filtering with this list of different injection methods*

* [HTML Purifier](http://htmlpurifier.org/)  
*HTML filtering implementation in PHP*

* [OWASP AntiSamy](https://www.owasp.org/index.php/AntiSamy)  
*HTML filtering implementation in Java and .NET*

* [DOMPurify](https://github.com/cure53/DOMPurify)  
*DOMPurify is a XSS sanitizer for HTML, MathML and SVG written in JavaScript*

* [jPurify](https://github.com/cure53/jPurify)  
*jPurify is a plug-in based on DOMPurify that automatically adds XSS-safety to jQuery. Early release.*


### Content-Security-Policy (CSP)

The Content-Security-Policy HTTP header acts as a whitelist for different content types (scripts, stylesheets, images, webfonts, …) on your website. It helps to prevent execution of malicious code (e.g. through XSS attacks).

* [Article: An Introduction to Content Security Policy (HTML5 Rocks)](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)

* [Content Security Policy (CSP) Quick Reference Guide](http://content-security-policy.com/)  

* [CSP Is Awesome](http://cspisawesome.com/)  
*Generate a Content-Security-Policy header*

* [blankie](https://github.com/nlf/blankie)  
*hapi.js: A plug-in that makes Content-Security-Policy headers easy*

* [simple-csp](https://www.npmjs.com/package/simple-csp)  
*Very simple Content Security Policy manager for Node.js*


### Cross-Site Request Forgery (CSRF)

In this attack, a malicious source causes the user’s browser to perform unwanted actions in the name of the currently logged in user on a website (e.g. editing/deleting data, creating posts).

* [OWASP: Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)

* [csurf](https://github.com/expressjs/csurf)  
*Express: CSRF protection middleware*

* [crumb](https://github.com/hapijs/crumb)  
*hapi.js: CSRF crumb generation and validation*


