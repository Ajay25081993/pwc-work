import axios from "axios"
import { useEffect, useState } from "react"
import {API_WEATHER_DATA} from "../config/endpoints"
import WeatherItem from "./WeatherItem"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';


 const Weather=()=>{
     const [cityDetails,setCityDetails]=useState({})
     const [weatherList,setWeatherList]=useState([])
     useEffect(()=>{
        fetchWeatherData()
     },[])
    const fetchWeatherData=()=>{
        axios.get(API_WEATHER_DATA).then((response,err)=>{
            let {city,list}=response.data;
            setCityDetails(city)
            setWeatherList(list.slice(0,7))

        }).catch(err=>{

        })

     }
    return(
        <div>
           {weatherList.length?<Card variant="outlined" style={{margin:"20px",padding:"20px"}}>
                <div>
                    <div style={{display:"inline-block",minWidth:"200px"}}>
                        <Typography variant="h5" component="div">
                            {cityDetails.name}
                        </Typography>
                        <span>Thusday ,January 13th</span>
                        <h5>Overcaste</h5>
                    </div>
                    <div style={{display:"inline-block"}}>
                        <Typography variant="h12" component="div">
                            Precipitation: 100%<br></br>
                            <span>Humidity:97%</span><br></br>
                            <span>Wind: 4 kph SW</span><br></br>
                            <span>Polen Count: 36</span><br></br>
                        </Typography>
                    </div>
                </div>
            {weatherList&&weatherList.map(item=><div style={{display:"inline-block",marginLeft:"5px"}}><WeatherItem item={item}></WeatherItem></div>)}
            </Card>:<Alert severity="warning">Data not found!</Alert>
            }
        </div>
    )
        
    

}
export default Weather;