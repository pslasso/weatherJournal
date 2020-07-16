/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=21169f4766caa10a95b0475b73671de5';
const feelings = document.getElementById('feelings').value;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
console.log(newDate);

//WEB API call
//api call pathern => api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
document.getElementById('generate').addEventListener('click', perfomeAction);

function perfomeAction(e) {
    let zipCode = document.getElementById('zip').value;
    addTemp(`${baseURL}${zipCode}${apiKey}`)
        .then(function(data) {
            console.log(data)
            postData('/', { newDate: newDate, temp: data.temp, feelings: feelings })
            updateUI()
        })
}

const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch (error) {
        console.log("error", error);
    }

}

const addTemp = async(url) => {
    const res = await fetch(url)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
    }

}

const updateUI = async() => {
    const request = await fetch('/')
    try {
        const allData = await request.json()
        console.log(allData);
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temp;
        document.getElementById('content').innerHTML = allData[0].content;
    } catch (error) {
        console.log('error', error)
    }
}