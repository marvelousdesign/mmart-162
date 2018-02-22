/*
1. Declare a constant variable, PI, and assign it the value Math.PI.
   You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2. Read a number, r, denoting the radius of a circle from stdin.
3. Use PI and r to calculate the area and perimeter of a circle having radius r.
4. Print area as the first line of output and print perimeter as the second line of output.
*/

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let r = readLine()
    // Print the area of the circle:
    let area = r * r * PI
    console.log(area)
    // Print the perimeter of the circle:
    let perimeter = 2 * r * PI
    console.log(perimeter)
}
