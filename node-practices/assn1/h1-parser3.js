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

        // Notes:
        // const nums = [1,2,3,4]
        //
        // // forEach is not meant for data manipulation
        // // const double = nums.forEach((nums) => {
        // //     nums * 2
        // // })
        //
        // // but map is
        // const double = nums.map((nums) => {
        //     return nums * 2
        // })
        //
        // // reduce .. how to use reduce to find the biggest number
        // const total = nums.reduce((n1,n2) => {
        // if (a > b) {
        //      return a
        // } else {
        //      return b
        // }
        // // return n1 + n2
        // })
        //
        // // What if you have a lot of spaces?
        // const string = 'hello         word!'
        // const arrayofWords = string.split(' ')
        // const cleanArray = arrayOfWords.filter((word) => {
        //      return word.length > 0
        // })
        //

        // YOUR CODE HERE:
        let allWords = []
        const headings = webpageText.split('</h1>')
        //console.log(headings)
        //console.log(headings.length)
        headings.pop()
        //headings.forEach((heading) => {
        const arrayOfWords = headings.map((heading) => {
            const len = heading.split('>').length
            const headingText = heading.split('>')[len -1]
            return headingText.split(' ')
            //console.log(words)
        })
        const words = arrayOfWords.reduce((n1, n2) => n1.concat(n2))
        console.log(words)

    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
