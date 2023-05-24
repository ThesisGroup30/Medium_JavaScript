/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b); // Sort the people in ascending order
    let left = 0; // Pointer to the lightest person
    let right = people.length - 1; // Pointer to the heaviest person
    let boats = 0; // Count of boats needed
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            // If the sum of the lightest person and the heaviest person is within the limit,
            // they can be placed in the same boat
            left++;
            right--;
        } else {
            // Otherwise, only the heaviest person can be placed in a boat
            right--;
        }
        boats++; // Increment the count of boats used
    }
    
    return boats;
};
