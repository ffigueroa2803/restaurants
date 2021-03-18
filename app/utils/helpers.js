import RNLocation from 'react-native-location'

RNLocation.configure({
    distanceFilter: 5.0,
})

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

export const fileToBlob = async(path) => {
    const file = await fetch(path) 
    const blob = file.blob()
    return blob
}

export const getCurrentLocation = async() => {
    const response = { status: false, location: null }

    let permission = await RNLocation.checkPermission({
        ios: 'whenInUse', // or 'always'
        android: {
          detail: 'coarse' // or 'fine'
        }
    })
    
    let position
    let location

    if(permission) {
        permission = await RNLocation.requestPermission({
          ios: "whenInUse",
          android: {
            detail: "coarse",
            rationale: {
              title: "Necesitamos acceder a su ubicación.",
              message: "Usamos su ubicación para mostrar dónde se encuentra en el mapa.",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        })

        position = await RNLocation.getLatestLocation({timeout: 100})

        location = {
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
        }
        
      } else {
        location = await RNLocation.getLatestLocation({timeout: 100})
        console.log(location)
      }
    response.status = true
    response.location = location

    return response
}

export const formatPhone = (callingCode, phone) => {
    return `+(${callingCode}) ${phone.substr(0, 3)} ${phone.substr(3, 3)} ${phone.substr(6, 4)}`
}
