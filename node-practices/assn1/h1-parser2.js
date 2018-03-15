const https = require('https')

const url = 'https://github.com'
https.get(url, (response) => {
    let webpageText = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
        //console.log(webpageText)

        //1.Find the h1
        //2.Get the stuff between the <h1 class='big'> and the </h1>
        //  Split at the closing h1 tag, get rid of crap in the opening h1 tag
        //3.Split strings into a array of words

        // YOUR CODE HERE:
        let allWords = []
        const headings = webpageText.split('</h1>')
        //console.log(headings)
        //console.log(headings.length)
        headings.pop()
        headings.forEach((heading) => {
            const len = heading.split('>').length
            const headingText = heading.split('>')[len -1]
            const words = headingText.split(' ')
            //console.log(words)
            allWords = allWords.concat(words)
        })
        console.log(allWords)

    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
