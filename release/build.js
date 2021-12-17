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
                //if (files.redirect) log_info(`install file: "${new URL("file:\\\\" + files.redirect).href}"`)
            })
        })
    })
}

function resolve_files() {
    return {
        output: path.resolve(__dirname, "wrdplus.user.js"),
        metadata: path.resolve(__dirname, "meta.js"),
        userscript: path.resolve(__dirname, "bundle.js"),
        redirect: path.resolve(__dirname, "redirect.html"),
    }
}

log_cmd("yarn webpack")
process.exec("yarn webpack", (err) => {
    if (err) return
    format_userscript(resolve_files())
})
