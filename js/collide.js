export function collide(playerCar, traffic) {
    // console.log(playerCar)
    // let plyCarX = Number.parseInt(playerCar.lane);

    // for (let i = 0; i < traffic.length; i++) {
    //     let tfCarX = Number.parseInt(traffic[i].lane) + 1
    //     let tfCarY = Number.parseInt(traffic[i].offset)
    //     console.log(plyCarX, traffic[i].offset)
    //     if ([plyCarX == tfCarX] && [tfCarY >= 109 || tfCarY <= 142]) {
    //         return true
    //     }
    //     return false
    // }
    for (let i = 0; i < traffic.length; i++) {
        let trafficCar = traffic[i]
        // console.log(trafficCar)
        if (trafficCar.offset >= 109 && trafficCar.offset <= 142) {
            let tfCarX = Number.parseInt(trafficCar.lane) + 1
            let plyCarX = Number.parseInt(playerCar.lane);
            if (tfCarX == plyCarX) return true
        }
    }
    // traffic.forEach(tfCar => {

    //     // 89, 133, 177
    //     // [94, 137, 182]
    //     // 30, 20
    //     // // 24, 18
    //     // console.log(plyCarX)
    //     // console.log(plyCarY)
    //     // console.log(tfCarX)
    //     // console.log(tfCarY)

    //     // console.log((tfCarY + 18))

    // })
}