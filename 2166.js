/**
 * @param {number} size
 */
var Bitset = function(size) {
    this.bits = new Array(size).fill(0);
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
    this.bits[idx] = 1;
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    this.bits[idx] = 0;
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
    for (let i = 0; i < this.bits.length; i++) {
        this.bits[i] = 1 - this.bits[i];
    }
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    return this.bits.every((bit) => bit === 1);
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
    return this.bits.some((bit) => bit === 1);
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
    return this.bits.reduce((count, bit) => count + bit, 0);
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    return this.bits.join('');
};
