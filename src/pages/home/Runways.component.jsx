import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faSnowflake, faCloudSun, faSmog } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../../context/LanguageContext';
import translate from '../../language/translate';

const Runways = ({tbilisi, batumi, kutaisi, telavi, ambrolauri, mestia}) => {
  const { language } = useContext(LanguageContext);
  const { Tbilisi, Batumi, Telavi, Mestia, Ambrolauri, Kutaisi } = translate[language];
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
         <p className='btn border-bottom text-uppercase'>
             {Tbilisi} : {tbilisi.temp === undefined ? '' : `${tbilisi.temp}°`}  {weathIcon(tbilisi.skye)} 
         </p>  
         <p className='btn border-bottom text-uppercase'>
             {Batumi} : {batumi.temp === undefined ? '' : `${batumi.temp}°`}  {weathIcon(batumi.skye)} 
         </p>
         <p className='btn border-bottom text-uppercase'>
             {Kutaisi} : {kutaisi.temp === undefined ? '' : `${kutaisi.temp}°`}  {weathIcon(kutaisi.skye)} 
         </p>   
         <p className='btn border-bottom text-uppercase'>
             {Mestia} : {mestia.temp === undefined ? '' : `${mestia.temp}°`}  {weathIcon(mestia.skye)} 
         </p>
         <p className='btn border-bottom text-uppercase'>
             {Telavi} : {telavi.temp === undefined ? '' : `${telavi.temp}°`}  {weathIcon(telavi.skye)} 
         </p> 
         <p className='btn border-bottom text-uppercase'>
             {Ambrolauri} : {ambrolauri.temp === undefined ? '' : `${ambrolauri.temp}°`}  {weathIcon(ambrolauri.skye)} 
         </p>      
    </div>
  )
};

export default Runways;
