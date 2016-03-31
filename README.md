[![Build Status](https://travis-ci.org/zamiang/zamiang-dot-com.svg?branch=master)](https://travis-ci.org/zamiang/zamiang-dot-com)

## Code for zamiang.com

Site is built on Jekyll and deployed on S3. See the
[Jeckyll docs](http://jekyllrb.com/) and the
[s3_website docs](https://github.com/laurilehmijoki/s3_website). Travis
builds deploy the site to S3.

### Setup

```bash
$ bundle install
$ jekyll serve --watch
$ guard
```

### Deploy

The website is automatically deployed each time a change is committed
to this repository.

### License

[MIT](http://opensource.org/licenses/MIT)
