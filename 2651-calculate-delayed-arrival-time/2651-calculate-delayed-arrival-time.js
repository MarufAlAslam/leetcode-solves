/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function calculateDelayed(arrTime, DelTime){
    return (arrTime + DelTime) % 24;
}