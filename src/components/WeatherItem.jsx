import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const WeatherItem=({item})=>{
     console.log("new Date(item.dt)-",new Date(1642075200));
     let date_name=days[new Date(item.dt).getDate()%7-1];
     
     return(
         <div>
             <Card variant="outlined" style={{minWidth:"180px",padding:"2px"}}>
                <Typography variant="h8" component="div">
                   {date_name}
                </Typography>
                <BrightnessLowIcon color="primary"></BrightnessLowIcon>
                <Typography variant="h10" component="div">
                   {item.main.temp}<sup>o</sup>
                </Typography>
                <Typography variant="h10" component="div" style={{color:"gray"}}>
                {item.weather[0].description}
                </Typography>
             </Card>
         </div>


     )

 }
 export default WeatherItem;