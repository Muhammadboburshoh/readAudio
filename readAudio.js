const path = require("path")
const fs = require("fs")
const util = require("util")

const { Plair } = require("./Plair")
const plair = new Plair()

const pathName = path.resolve("./song.data")
const readFile = util.promisify(fs.readFile)


;(async function (path) {

  let array = (await readFile(path, "utf8")).split("\r\n")
  
  let newArray = []
  for (let el of array) {
    newArray.push(el.split("#"))
  }

  plair.setPlaylist(newArray)

  plair.play() // sh yerda ishlashligi uchun buyruq berilayabdi

})(pathName)
