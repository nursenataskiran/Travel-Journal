import { useState } from 'react'
import './App.css'
import earthLogo from './assets/earth-logo.png';
import locationPın from './assets/location-pin.png';
import { journalData } from './data';

function Header(){
  return (
    <header>
      <img src={earthLogo} alt="Earth Logo" />  
        <h1>my travel journal</h1>
    </header>
  )
}

function CountryInfoCard({ info }) {
  if (!info) return null;

  return (
    <div className="country-info-card">
      <div className="country-info-header">
        {info.flag && (
          <img
            src={info.flag}
            alt={`${info.name} flag`}
            className="country-flag"
          />
        )}
        <h3>{info.name}</h3>
      </div>

      <ul className="country-info-list">
        <li>
          <strong>Capital:</strong> {info.capital}
        </li>
        <li>
          <strong>Region:</strong>{' '}
          {info.region}
          {info.subregion ? ` – ${info.subregion}` : ''}
        </li>
        <li>
          <strong>Population:</strong> {info.population}
        </li>
        <li>
          <strong>Area:</strong> {info.area} km²
        </li>
      </ul>
    </div>
  );
}

function JournalEntry({ imageSrc, imageAlt, country, googleMapsUrl, title, startDate, endDate, description }) 
{
  const [countryInfo, setCountryInfo] = useState(null);
  const [isLoadingInfo, setIsLoadingInfo] = useState(false);
  const [infoError, setInfoError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const shortText = description.length >120 && !expanded
    ? description.slice(0,120) + '...'
    : description;

  async function handleCountryInfoClick() {
    // Açıkken tekrar basılırsa kapat
    if (countryInfo || infoError) {
      setCountryInfo(null);
      setInfoError(null);
      return;
    } 
        setIsLoadingInfo(true);
    setInfoError(null);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(
          country
        )}?fields=name,capital,region,subregion,population,area,flags`
      );

      if (!response.ok) {
        throw new Error('Country not found');
      }
            const data = await response.json();
      const info = data[0];

      setCountryInfo({
        name: info?.name?.common ?? country,
        capital: info?.capital?.[0] ?? 'N/A',
        region: info?.region ?? 'N/A',
        subregion: info?.subregion ?? '',
        population: info?.population?.toLocaleString() ?? 'N/A',
        area: info?.area?.toLocaleString() ?? 'N/A',
        flag: info?.flags?.png || info?.flags?.svg || null,
      });
    } catch (err) {
      console.error(err);
      setInfoError('Country info could not be loaded.');
    } finally {
      setIsLoadingInfo(false);
    }
    }
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img 
        className='main-image' 
        src={imageSrc} 
        alt={imageAlt}/>
      </div>
      
      <div className='info-container'>
          <img 
            className="marker"
            src={locationPın} 
            alt="map marker icon"
          />
          <span className="country">{country}</span>
          <a href={googleMapsUrl}>View on Google Maps</a>
          <button className='country-info' type="button" onClick={handleCountryInfoClick}>
              {isLoadingInfo
              ? 'Loading...'
              : countryInfo || infoError
              ? 'Hide country info'
              : 'Country info'}
          </button>
          <h2 className="entry-title">{title}</h2>
          <p className="trip-dates">{startDate} - {endDate}</p>
          <p className={`entry-text ${expanded ? "expanded" : "collapsed"}`}>{shortText}</p>
          {description.length >120 && (
            <button 
            className="toggle-btn"
            onClick={ () =>setExpanded(prev =>!prev)}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          )}
          {infoError && (
          <p className="country-info-error">
            {infoError}
          </p>
        )}

        <CountryInfoCard info={countryInfo} />

      </div>
    </article>
  )
}

function App() {
  const [selectedCountry,setSelectedCountry]= useState('All');
  
  const countries = ['All', ...new Set(journalData.map(entry => entry.country))];

  const filteredEntries = journalData.filter(entry =>{
    if (selectedCountry === 'All') return true;
    return entry.country === selectedCountry;
    });

    return (
    <>
      <Header />

      <div className="container">
      <div className='filters'>

        <select
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
          >
        {/* Placeholder gibi davranan seçenek */}
        <option value="All" disabled hidden>
          Country
        </option>

        {/* Gerçek ülkeler */}
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
          ))}
        </select>
      </div>

        <div className="entries">
          {filteredEntries.map(entry =>
            <JournalEntry key={entry.id} {...entry} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
