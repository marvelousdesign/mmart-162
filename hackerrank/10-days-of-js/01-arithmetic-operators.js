/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the rectangle's area.
**/
const getArea = (length, width) => {
    // Write your code here
    let area = length * width
    return area
}

/**
*   Calculate the perimeter of a rectangle.
*
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*
*	Return a number denoting the perimeter of a rectangle.
**/
const getPerimeter = (length, width) => {
    // Write your code here
    let perimeter = (2 * (length + width))
    return perimeter
}
