const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//const a= "request";
// const request=require("request");

// const url= "http://api.weatherstack.com/current?access_key=2238413487770fdaa7c4f4773a6b246d&query=37.8267,-122.4233";

// request({url:url, json:true}, (error, response) =>{
//     if(error)
//     {
//         console.log("Unable to connect with weather services!");
//     }

//     else if(response.body.error)
//     {
//         console.log("Unable to find location.");
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0]+". It is currently "+response.body.current.temperature+" degrees. There is "+response.body.current.precip+" percent chances of rain" );
// }});

// const url2= "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic291bXlhLXNyaSIsImEiOiJja2d4cXM0cjAwbWQ3MnNvZjI5bjIyMGswIn0.OpxcMBarNVboCK3GjG_54w&limit=1";

// request({url: url2, json:true}, (error, response) =>{
//     if(error)
//     {
//         console.log("Unable to connect with locaton services!");
//     }

//     else if(response.body.features.length===0)
//     {
//         console.log("Unable to find location.");
//     }
//     else{
//     console.log(response.body.features[0].center[1]+ "    "+response.body.features[0].center[0] )
// }});

//const location = "";

if(process.argv.length===2)
console.log("Enter a location!");
else
{
    const location = process.argv[2].toString();

    geocode(location, (error, response)=>{
        if (error)
            console.log(error);
        else
        {
            const {latitude, longitude, location}= response;
            forecast(latitude, longitude, (error, forecastData)=>{
                if(error)
                    console.log(error);
            
                else
                    {
                        console.log(location);
                        console.log(forecastData);
                    }
            
            })
        }
            
    })}

// forecast(37.8267, -122.4233, (error, response)=>{
//     if(error)
//         console.log(error);

//     else
//         console.log(response);

// })