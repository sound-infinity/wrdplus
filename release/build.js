const process = require("child_process")
const path = require("path")
const fs = require("fs")

function log_cmd() {
    console.log("$", ...arguments)
}

function log_info() {
    console.log("wrdplus:", ...arguments)
}

async function format_userscript(files) {
    const buffer = []
    log_info("reading metadata and source-code")
    fs.readFile(files.metadata, "utf-8", (_, data) => {
        buffer.push(data)
        fs.readFile(files.userscript, "utf-8", (_, data) => {
            buffer.push(data)
            log_info("writing packed file...")
            fs.writeFile(files.output, buffer.join("\n"), "utf-8", (err) => {
                log_info(`output file: "${files.output}"`)
            })
        })
    })
}

function resolve_files() {
    return {
        output: path.resolve(__dirname, "wrdplusV4.user.js"),
        metadata: path.resolve(__dirname, "meta.js"),
        userscript: path.resolve(__dirname, "bundle.js"),
    }
}

log_cmd("yarn webpack")
process.exec("yarn webpack", (err, stdout, stderr) => {
    if (err) return
    format_userscript(resolve_files())
})
