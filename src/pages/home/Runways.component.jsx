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
      } else if(icon >= 500 && icon <= 531){
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
        <p className='btn border-bottom text-uppercase font-weight-bold d-flex justify-content-between'>
             <span className='city'>{Tbilisi} : {tbilisi.temp === undefined ? '' : `${tbilisi.temp}°`}  {weathIcon(tbilisi.skye)} </span>
             <span className='wind'>{wind} : {`${tbilisi.wind}${speed}`}</span> <span className='visibility'>{visibility} : {`${tbilisi.visibility}${km}`}</span>
        </p> 
         <p className='btn border-bottom text-uppercase font-weight-bold d-flex justify-content-between'>
             <span className='city'>{Batumi} : {batumi.temp === undefined ? '' : `${batumi.temp}°`}  {weathIcon(batumi.skye)}</span>
             <span className='wind'>{wind} : {`${batumi.wind}${speed}`}</span> <span className='visibility'>{visibility} : {`${batumi.visibility}${km}`}</span>
         </p>
         <p className='btn border-bottom text-uppercase font-weight-bold d-flex justify-content-between'>
             <span className='city'>{Kutaisi} : {kutaisi.temp === undefined ? '' : `${kutaisi.temp}°`}  {weathIcon(kutaisi.skye)}</span>
             <span className='wind'>{wind} : {`${kutaisi.wind}${speed}`} </span> <span className='visibility'>{visibility} : {`${kutaisi.visibility}${km}`} </span>
         </p>
         <p className='btn border-bottom text-uppercase font-weight-bold d-flex justify-content-between'>
             <span className='city'>{Mestia} : {mestia.temp === undefined ? '' : `${mestia.temp}°`}  {weathIcon(mestia.skye)}</span>
             <span className='wind'>{wind} : {`${mestia.wind}${speed}`}</span> <span className='visibility'>{visibility} : {`${mestia.visibility}${km}`} </span>
         </p>
         <p className='btn border-bottom text-uppercase font-weight-bold d-flex justify-content-between'>
             <span className='city'>{Telavi} : {telavi.temp === undefined ? '' : `${telavi.temp}°`}  {weathIcon(telavi.skye)} </span>
             <span className='wind'>{wind}: {`${telavi.wind}${speed}`}</span>  <span className='visibility'>{visibility} : {`${telavi.visibility}${km}`} </span>
         </p> 
         <p className='btn border-bottom text-uppercase font-weight-bold d-flex justify-content-between'>
             <span className='city'>{Ambrolauri} : {ambrolauri.temp === undefined ? '' : `${ambrolauri.temp}°`}  {weathIcon(ambrolauri.skye)}</span>
             <span className='wind'>{wind}: {`${ambrolauri.wind}${speed}`} </span>  <span className='visibility'>{visibility} : {`${ambrolauri.visibility}${km}`} </span>
         </p>  
    </div>
  )
};

export default Runways;
