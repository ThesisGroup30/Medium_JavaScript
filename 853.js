/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const n = position.length;
    const cars = [];
    
    for (let i = 0; i < n; i++) {
        cars.push({ position: position[i], time: (target - position[i]) / speed[i] });
    }
    
    cars.sort((a, b) => b.position - a.position);
    
    let fleets = 0;
    let currMaxTime = 0;
    
    for (let i = 0; i < n; i++) {
        if (cars[i].time > currMaxTime) {
            fleets++;
            currMaxTime = cars[i].time;
        }
    }
    
    return fleets;
};
