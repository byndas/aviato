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
        <div className='d-flex justify-content-between'>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Tbilisi} : {tbilisi.temp === undefined ? '' : `${tbilisi.temp}°`}  {weathIcon(tbilisi.skye)} 
             <span className='windTb'>{wind} : {`${tbilisi.wind}${speed}`}</span> <span className='windTb'>{visibility} : {`${tbilisi.visibility}${km}`}</span>
         </p>  
         </div>
         <div className='d-flex justify-content-between'>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Batumi} : {batumi.temp === undefined ? '' : `${batumi.temp}°`}  {weathIcon(batumi.skye)}
             <span className='windBt'>{wind} : {`${batumi.wind}${speed}`}</span> <span className='windTb'>{visibility} : {`${batumi.visibility}${km}`}</span>
         </p>
         </div>
         <div className='d-flex justify-content-between'>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Kutaisi} : {kutaisi.temp === undefined ? '' : `${kutaisi.temp}°`}  {weathIcon(kutaisi.skye)}
             <span className='windKt'>{wind} : {`${kutaisi.wind}${speed}`} </span> <span className='windTb'>{visibility} : {`${kutaisi.visibility}${km}`} </span>
         </p>   
         </div>
         <div className='d-flex justify-content-between'>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Mestia} : {mestia.temp === undefined ? '' : `${mestia.temp}°`}  {weathIcon(mestia.skye)}
             <span className='windMe'>{wind} : {`${mestia.wind}${speed}`}</span> <span className='windTb'>{visibility} : {`${mestia.visibility}${km}`} </span>
         </p>
         </div>
         <div className='d-flex justify-content-between'>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Telavi} : {telavi.temp === undefined ? '' : `${telavi.temp}°`}  {weathIcon(telavi.skye)} 
             <span className='windTe'>{wind}: {`${telavi.wind}${speed}`}</span>  <span className='windTb'>{visibility} : {`${telavi.visibility}${km}`} </span>
         </p> 
         </div>
         <div className='d-flex justify-content-between'>
         <p className='btn border-bottom text-uppercase font-weight-bold'>
             {Ambrolauri} : {ambrolauri.temp === undefined ? '' : `${ambrolauri.temp}°`}  {weathIcon(ambrolauri.skye)}
             <span className='windAm'>{wind}: {`${ambrolauri.wind}${speed}`} </span>  <span className='windMe'>{visibility} : {`${ambrolauri.visibility}${km}`} </span>
         </p>  
         </div>    
    </div>
  )
};

export default Runways;
