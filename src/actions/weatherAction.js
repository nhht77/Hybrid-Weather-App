import axios from 'axios';

export const getWeather = (city) => {
    return new Promise((resolve, reject) => 
    {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=c9ca3fdada77609e76fec6e849b11dd1`)
    .then( (res) => { 

        // console.log(res.data);
        // this.setState({temperature:res.data.main.temp});
        resolve(res.data);
    })
    .catch( (err) => { 
        console.log(err);
        reject(err);
    })

    })
} 