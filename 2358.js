/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
    grades.sort((a, b) => b - a); // Sort grades in descending order
    let groups = 1; // Initialize with one group

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < grades[i - 1]) {
            groups++; // Increase the number of groups if condition is met
        }
    }

    return groups;
};
