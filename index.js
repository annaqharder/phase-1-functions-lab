// Code your solution in this file!

function distanceFromHqInBlocks(numberOfBlocks) {
    if (numberOfBlocks > 42) {
        return numberOfBlocks - 42
    } else {
        return 42 - numberOfBlocks 
    }
}
console.log(numberOfBlocks); 

function distanceFromHqInFeet(numberOfBlocks) {
    distanceFromHqInBlocks(numberOfBlocks); 
    if (numberOfBlocks > 42) {
        return ((numberOfBlocks - 42) * 264)
    } else {
        return ((42 - numberOfBlocks) * 264)
    }
}
console.log(numberOfBlocks); 

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return ((destination - start) * 264)
    } else {
        return ((start - destination) * 264)
    }
}
console.log(start, destination); 

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 

    if (distance < 400) {
        return (0)
    } else if (distance > 400 && distance < 2000) {
        return ((distance - 400) * 0.02) 
    } else if ((distance >= 2000) && distance <= 2500) {
        return (25)
    } else if (distance > 2500) {  
        return ('cannot travel that far')
    } 
}
console.log(start, destination); 