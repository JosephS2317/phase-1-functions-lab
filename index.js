// Code your solution in this file!
// Return distance from 42nd street in blocks
function distanceFromHqInBlocks(blocks){
    const distance = Math.abs(blocks - 42);
    return distance;
    console.log ('You are ${blocks} away from HQ.');
}

const feetPerBlock = 264
// Return distance from 42nd street in feet
function distanceFromHqInFeet(blocks){
const Feet = Math.abs ((blocks - 42) * feetPerBlock);
return Feet;
}
//Returns distance traveled in feet
function distanceTravelledInFeet(startingBlock, endingBlock){
    const distanceInFeet = Math.abs ((startingBlock - endingBlock)* feetPerBlock);

    return distanceInFeet;
}

// Returns different rates based on distance traveled
function calculatesFarePrice(start, destination){
   const feet = Math.abs((start - destination) * feetPerBlock);
    const firstDistance = 400;
    const extraDistance = 2000;
    const maxDistance = 2500;
    ///Rate is .02$ per foot up to 400ft
    const basicRate = .02;
    // charges 25$ for distances above 200ft
    const longTravelRate = 25;

    switch (true) {
     case feet <= firstDistance:
            return 0
            

        case  feet <= extraDistance:
            return (feet - firstDistance) * basicRate;
            break;
            
        case  feet <= maxDistance:
            return longTravelRate;
            break;
            
        case feet > maxDistance:
            return 'cannot travel that far';
            

    }




}