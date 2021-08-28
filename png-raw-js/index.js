var fs = require("fs"),
    PNG = require("pngjs").PNG,
    base64js = require('base64-js'),
    argv = process.argv.slice(2);

if (argv.length != 0)
    fs.createReadStream(argv[0])
    .pipe(
        new PNG({
        filterType: 4,
        })
    )
    .on("parsed", function () {
        console.log(base64js.fromByteArray(this.data));
    });
