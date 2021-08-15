document.getElementById('add-driver-button').addEventListener('click', () => {
    document.getElementById('add-passenger-availability').style.display = 'None'
    document.getElementById('add-driver-availability').style.display = 'Block'
})

document.getElementById('add-passenger-button').addEventListener('click', () => {
    document.getElementById('add-driver-availability').style.display = 'none'
    document.getElementById('add-passenger-availability').style.display = 'Block'
})

document.getElementById('back-from-driver-page').addEventListener('click', () => {
    document.getElementById('add-driver-availability').style.display = 'None'
})

document.getElementById('back-from-passenger-page').addEventListener('click', () => {
    document.getElementById('add-passenger-availability').style.display = 'None'
})

document.getElementById('driver-submit').addEventListener('click', () =>
{
    let name = document.getElementById('dname').value.split(' ').join('')
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

    let city = document.getElementById('dcity').value.split(' ').join('')
    city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()

    let email = document.getElementById('demail').value.split(' ').join('')

    let time = document.getElementById('dtime').value.split(' ').join('')

    if (name === '' || city === '' || email === '' || time === '') {
        alert('Please fill out all the slots provided.')
    } else {
        let div = document.createElement('div')
        div.className = 'driver-available'

        let status = document.createElement('h1')
        let driverName = document.createElement('h1')
        status.className = 'name-and-status'
        driverName.className = 'name-and-status'

        let driverCity = document.createElement('p')
        let driverTime = document.createElement('p')
        let driverEmail = document.createElement('button')
        status.innerHTML = 'Driver: '
        driverName.innerHTML = name
        driverCity.innerHTML = city
        driverEmail.innerHTML = 'Contact'
        driverEmail.className = 'contact-button'
        driverTime.innerHTML = time

        driverEmail.onclick = function () {
            window.location.href = `mailto:${email}`
        }

        div.appendChild(status)
        div.appendChild(driverName)
        div.appendChild(driverCity)
        div.appendChild(driverTime)
        div.appendChild(driverEmail)

        passengersAndDrivers = document.getElementById('passengers-and-drivers')
        passengersAndDrivers.appendChild(div)
        document.getElementById('add-driver-availability').style.display = 'None'
    }
})


document.getElementById('passenger-submit').addEventListener('click', () =>
{
    let name = document.getElementById('pname').value.split(' ').join('')
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

    let city = document.getElementById('pcity').value.split(' ').join('')
    city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()

    let email = document.getElementById('pemail').value.split(' ').join('')

    let time = document.getElementById('ptime').value.split(' ').join('')

    if (name === '' || city === '' || email === '' || time === '') {
        alert('Please fill out all the slots provided.')
    } else {
        let div = document.createElement('div')
        div.className = 'passenger-available'

        let status = document.createElement('h1')
        let passengerName = document.createElement('h1')
        status.className = 'name-and-status'
        passengerName.className = 'name-and-status'

        let passengerCity = document.createElement('p')
        let passengerTime = document.createElement('p')
        let passengerEmail = document.createElement('button')
        status.innerHTML = 'Passenger: '
        passengerName.innerHTML = name
        passengerCity.innerHTML = city
        passengerEmail.innerHTML = 'Contact'
        passengerEmail.className = 'contact-button'
        passengerTime.innerHTML = time

        passengerEmail.onclick = function () {
            window.location.href = `mailto:${email}`
        }

        div.appendChild(status)
        div.appendChild(passengerName)
        div.appendChild(passengerCity)
        div.appendChild(passengerTime)
        div.appendChild(passengerEmail)

        passengersAndDrivers = document.getElementById('passengers-and-drivers')
        passengersAndDrivers.appendChild(div)

        document.getElementById('add-passenger-availability').style.display = 'None'
    }
})