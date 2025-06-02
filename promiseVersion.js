function isAwake(probabilityAwake = 0.7) {
    return Math.random() < probabilityAwake;
}

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve();
        }, 2000);
    });
}

function weedEat(name, choreCompleted) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (choreCompleted) {
                console.log(`${name} finished using the weed eater.`);
                resolve();
            } else {
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, 1500);
    });
}

function trimHedges(name, choreCompleted) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (choreCompleted) {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
}

function collectWood(name, choreCompleted) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (choreCompleted) {
                console.log(`${name} finished collecting wood.`);
                resolve();
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
}

function waterGarden(name, choreCompleted) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (choreCompleted) {
                console.log(`${name} finished watering the garden.`);
                resolve();
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    });
}

function doSummerChores(name) {
    mowYard(name)
        .then(() => {
            return weedEat(name, true);
        })
        .then(() => {
            return trimHedges(name, true);
        })
        .then(() => {
            return collectWood(name, true);
        })
        .then(() => {
            return waterGarden(name, true);
        })
        .then(() => {
            console.log(`${name} finished all their chores!`);
        })
        .catch((error) => {
            console.log(error);
        });
}

doSummerChores("Alex");