import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faSnowflake, faCloudSun, faSmog } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../../context/LanguageContext';
import translate from '../../language/translate';
import "./Home.styles.css";

const Runways = ({tbilisi, batumi, kutaisi, telavi, ambrolauri, mestia}) => {
  const { language } = useContext(LanguageContext);
  const { Tbilisi, Batumi, Telavi, Mestia, Ambrolauri, Kutaisi, km, visibility, speed, wind } = translate[language];
  const weathIcon = (icon) => {
      if(icon === 800) {
        return <FontAwesomeIcon style={{color: 'yellow'}} icon={faSun}/>
      }  else if (icon >= 801 && icon <= 804){
          return <FontAwesomeIcon style={{color: 'yellow'}} icon={faCloudSun}/>
      } else if(icon >= 500 && icon <= 504){
        return <FontAwesomeIcon style={{color: 'grey'}}icon={faCloudRain}/>
      }  else if (icon >= 600 && icon <= 622){
        return <FontAwesomeIcon style={{color: 'grey'}} icon={faSnowflake}/>
      }  else if (icon >= 701 && icon <= 781){
           return <FontAwesomeIcon style={{color: 'grey'}} icon={faSmog}/>
      } else {
        return '';
      }
    }  
  return (
     <div className="list-group">
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Tbilisi} : {tbilisi.temp === undefined ? '' : `${tbilisi.temp}°`}  {weathIcon(tbilisi.skye)} 
             <span className='ml-3'>{wind}</span> : {`${tbilisi.wind}${speed}`} <span className='ml-3'>{visibility}</span> : {`${tbilisi.visibility}${km}`}
         </p>  
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Batumi} : {batumi.temp === undefined ? '' : `${batumi.temp}°`}  {weathIcon(batumi.skye)}
             <span className='ml-3'>{wind}</span> : {`${batumi.wind}${speed}`} <span className='ml-3'>{visibility}</span> : {`${batumi.visibility}${km}`}
         </p>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Kutaisi} : {kutaisi.temp === undefined ? '' : `${kutaisi.temp}°`}  {weathIcon(kutaisi.skye)}
             <span className='ml-3'>{wind}</span> : {`${kutaisi.wind}${speed}`} <span className='ml-3'>{visibility}</span> : {`${kutaisi.visibility}${km}`} 
         </p>   
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Mestia} : {mestia.temp === undefined ? '' : `${mestia.temp}°`}  {weathIcon(mestia.skye)}
             <span className='ml-3'>{wind}</span> : {`${mestia.wind}${speed}`} <span className='ml-3'>{visibility}</span> : {`${mestia.visibility}${km}`} 
         </p>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Telavi} : {telavi.temp === undefined ? '' : `${telavi.temp}°`}  {weathIcon(telavi.skye)} 
             <span className='ml-3'>{wind}</span> : {`${telavi.wind}${speed}`} <span className='ml-3'>{visibility}</span> : {`${telavi.visibility}${km}`}
         </p> 
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Ambrolauri} : {ambrolauri.temp === undefined ? '' : `${ambrolauri.temp}°`}  {weathIcon(ambrolauri.skye)}
             <span className='ml-3'>{wind}</span> : {`${ambrolauri.wind}${speed}`} <span className='ml-3'>{visibility}</span> : {`${ambrolauri.visibility}${km}`} 
         </p>      
    </div>
  )
};

export default Runways;
