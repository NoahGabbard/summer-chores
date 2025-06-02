function isAwake(probabilityAwake = 0.7) {
    return Math.random() < probabilityAwake;
}

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        if (typeof callback === 'function') {
            callback();
        }
    }, 2000);
}

function weedEat(name, choreCompleted, callback) {
    setTimeout(() => {
        if (choreCompleted) {
            console.log(`${name} finished using the weed eater.`);
            if (typeof callback === 'function') {
                callback();
            }
        } else {
            console.log(`${name} fell asleep after mowing the yard.`);
        }
    }, 1500);
}

function trimHedges(name, choreCompleted, callback) {
    setTimeout(() => {
        if (choreCompleted) {
            console.log(`${name} finished trimming the hedges.`);
            if (typeof callback === 'function') {
                callback();
            }
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`);
        }
    }, 1000);
}

function collectWood(name, choreCompleted, callback) {
    setTimeout(() => {
        if (choreCompleted) {
            console.log(`${name} finished collecting wood.`);
            if (typeof callback === 'function') {
                callback();
            }
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`);
        }
    }, 2500);
}

function waterGarden(name, choreCompleted, callback) {
    setTimeout(() => {
        if (choreCompleted) {
            console.log(`${name} finished watering the garden.`);
            if (typeof callback === 'function') {
                callback();
            }
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, 500);
}

function doSummerChores(name) {
    mowYard(name, function() {
        weedEat(name, true, function() {
            trimHedges(name, true, function() {
                collectWood(name, true, function() {
                    waterGarden(name, true, function() {
                        console.log(`${name} finished all their chores!`);
                    });
                });
            });
        });
    });
}