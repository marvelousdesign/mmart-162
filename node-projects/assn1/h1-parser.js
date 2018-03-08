const https = require('https')
const htmlparser = require("htmlparser2")

const url = 'https://github.com'
https.get(url, (response) => {
    let webpageText = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
        //console.log(webpageText)
        /*
        Write some code that
        (a) finds all of the words from inside the <h1> tag of a webpage, and
        (b) converts those words into an array.
        So, if a webpage has the following tags:
        ------------------------------------------------------------------------
        <body>
            ...
            <h1>Welcome to Node.js!</h1>
            ......
            <h1>Working with npm</h1>
            ....
            <h1>Installing MongoDB</h1>
            ...
        </body>
        ------------------------------------------------------------------------
        Your array should look like this:
        ['Welcome', 'to', 'Node.js!', 'Working', 'with', 'npm', 'Installing', 'MongoDB']
        */

        // YOUR CODE HERE:
        let h1 = []
        let hasH1 = false
        let parser = new htmlparser.Parser({
        	onopentag: (name) => {
        		if(name === "h1"){
                    hasH1 = true
        			//console.log("H1! Hooray!")
        		}
        	},
        	ontext: (text) => {
                if (hasH1) {
                    //console.log(text)
                    h1.push(text.split(' '))
                }
        	},
            onclosetag: function(tagname){
                if(tagname === "h1"){
                    hasH1 = false
                    //console.log("That's it?!")
                }
            }
        }, {decodeEntities: true})
        parser.write(webpageText)
        parser.end()
        //const mergedH1 = [].concat.apply([], h1) //same as below
        console.log(h1.reduce((a,b) => a.concat(b)))

        // OLD CODE:
        // let el = document.createElement('html')
        // el.innerHTML = `"${webpageText}"` //don't work
        // const array = []
        // const body = webpageText.split('<body')[1]
        // const list = body.split('<h1') //gives alot of gibberish
        // console.log(list)
        // list.forEach(list => {
        //     list = list.split('>')[0]
        //     if (list.substring(0, 6) === 'mb-1">') {
        //         array.push(list)
        //     }
        // })
        //console.log(array)
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})

//results
//node h1-parser.js
// [ 'Built',
//   'for',
//   'developers',
//   'Ariya',
//   'Hidayat',
//   'Russell',
//   'Keith-Magee',
//   'MailChimp',
//   'Kris',
//   'Nova',
//   'Evan',
//   'You',
//   'Mapbox',
//   'Jess',
//   'Frazelle' ] //this is one line each because of the parser?
