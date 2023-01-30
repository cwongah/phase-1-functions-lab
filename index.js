function distanceFromHqInBlocks(block){
    return Math.abs(block - 42)
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1, block2){
    return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice(block1, block2){
    let distance = distanceTravelledInFeet(block1, block2)
    let farePrice
    if(distance <= 400){
        farePrice = 0
    }
    if(distance > 400 && distance <= 2000){
        farePrice = 0.02 * (distance - 400)
    }
    if(distance > 2000 && distance <=2500){
        farePrice = 25
    }
    if(distance > 2500){
        farePrice = "cannot travel that far"
    }
    return farePrice
}