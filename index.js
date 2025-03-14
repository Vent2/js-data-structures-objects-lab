const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {
        [key]: value
    })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const drive = Object.assign({}, driver, {
        [key]: undefined
    })
    delete drive.key
    return drive
}



function destructivelyDeleteFromDriverByKey(driver, key) {
    return Object.assign(driver, {
        [key]: undefined
    })
}