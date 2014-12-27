[![Build Status](https://magnum.travis-ci.com/zamiang/zamiang-dot-com.svg)](https://magnum.travis-ci.com/zamiang/zamiang-dot-com)

## Code for zamiang.com

Site is built on Jekyll and deployed on S3. See the [Jeckyll docs](http://jekyllrb.com/) and the [s3_website docs](https://github.com/laurilehmijoki/s3_website)

### Setup

```bash
$ bundle install
$ jekyll serve --watch
$ guard
```

### Deploy

```bash
$ jekyll build
$ s3_website push
```

### License

[MIT](http://opensource.org/licenses/MIT)
