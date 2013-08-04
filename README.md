# Site build on Jekyll and deployed on S3

See the [Jeckyll docs](http://jekyllrb.com/)

## Setup

```bash
$ bundle install
$ jekyll serve --watch
$ guard
```

## Deploy

See [s3_website docs](https://github.com/laurilehmijoki/s3_website)

```bash
$ jekyll build
$ s3_website push
```

## License

[MIT](http://opensource.org/licenses/MIT)
