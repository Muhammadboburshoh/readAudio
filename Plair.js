const { LinkedList } = require("./LinkedList")
const ll = new LinkedList()

class Plair {

  setPlaylist(playListArray) {

    for (let audio of playListArray) {
      ll.insert(audio)
    }
  }

  play () {

    console.log("START")

    let time = 0
    for (let audio of ll) {

      function myFunction () {
        console.log(`Audio Name: ${audio.data[0]}`)
        console.log(`    after ${audio.data[1]} seconds`)
      }

      setTimeout(myFunction, time)

      time = time + Number(audio.data[1]) * 1000
    }

    setTimeout(() => {
      console.log("Fenished");
    }, time)

  }

}

module.exports.Plair = Plair
