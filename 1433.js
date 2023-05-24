var checkIfCanBreak = function(s1, s2) {
    // convert strings to arrays of characters and sort them
    let arr1 = s1.split('').sort();
    let arr2 = s2.split('').sort();
    
    // initialize variables for tracking whether s1 can break s2 and vice versa
    let s1_can_break_s2 = true;
    let s2_can_break_s1 = true;
    
    // check if s1 can break s2
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < arr2[i]) {
            s1_can_break_s2 = false;
            break;
        }
    }
    
    // check if s2 can break s1
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < arr1[i]) {
            s2_can_break_s1 = false;
            break;
        }
    }
    
    // return whether either s1 can break s2 or s2 can break s1
    return s1_can_break_s2 || s2_can_break_s1;
};
