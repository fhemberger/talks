#!/bin/sh

git remote add reveal-a11y https://github.com/marcysutton/reveal-a11y.git || true
git subtree add --squash --prefix=_reveal.js/plugin/reveal-a11y/ reveal-a11y master || true
