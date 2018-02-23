const isPal = (word) => {
    // if (typeof word !== 'string') {
    //     console.log(`${word} is not a strings!`)
    //     return
    // }

    let firstWord = word.toString().toLowerCase().replace(/[\W_]/g, '')
    let reverseWord = firstWord.split('').reverse().join('')

	if (firstWord === reverseWord) {
		console.log(`"${firstWord}" is a palindrome!`)
	} else {
		console.log(`"${firstWord}" is not a palindrome!`)
	}
}

isPal('Hannah')
isPal('Amy')
isPal('707')
isPal(909)
isPal('what now')
isPal('was a saw')
