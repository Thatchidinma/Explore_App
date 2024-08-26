import { Search } from "./search"
import {useEffect, useState, useRef} from "react"
import night from '../images/clouds-night.jpg'
import day from '../images/clear.jpg'
// import icon from '../images/icons/4d2.svg'

export function Weather(){
const [search, setSearch] = useState('')
const [loading, setloading] = useState(false)
const [weatherData, setWeatherData] = useState(null)
const [timeOfDay, setTimeOfDay] = useState(null)
const appRef = useRef(null);

function fetchWeatherData(param){
    setloading(true)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(data =>{
        setWeatherData(data)
        setloading(false)
    })
.catch (error =>{
    setloading(false)
    console.log(error)
})
}

function handleSearch(){
    if (!search){
        fetchWeatherData('lagos')
    }
    fetchWeatherData(search)
}

function getCurrentDate(){
    return new Date().toLocaleDateString('en-ng',
    {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

useEffect(() => {
    fetchWeatherData("lagos")
   
}, [])

useEffect(()=> {
   if(weatherData?.cod !== '400' && weatherData?.cod !== '404') {setTimeOfDay(weatherData?.list[0].sys.pod)

    const changeBackground = () =>{
        if(appRef){
            if(timeOfDay === "d"){
                document.body.style.backgroundImage = `url(${day})`
            }
            if(timeOfDay === "n"){
                document.body.style.backgroundImage = `url(${night})`
            } 
        }
    }
    changeBackground()}
}, [timeOfDay,weatherData])

console.log(weatherData)
console.log(loading)

    return (
    <div className=" h-full " ref={appRef}>
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        />
        <div className=" lg:h-5/6 backdrop-blur-sm bg-white/5" >
            {
                loading ?( <div className="flex flex-col items-center h-full text-3xl ">loading...</div>) : (weatherData?.cod === '200'? 
            ( <div className=" lg:grid grid-cols-3 grid-rows-1 h-full ">
                    <div className="col-span-2 lg:border-r-8 lg:p-16 " >

                        <div className="flex flex-col justify-end h-full">
                            <div className="">
                                <h2 className=" text-3xl lg:text-6xl">{weatherData?.city.name}, {weatherData?.city?.country}</h2>
                            </div>
                            <div className="">
                                <span>{getCurrentDate()}</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className=" flex flex-col text-end justify-end">
                            <div className="font-bold text-6xl">{Math.floor(weatherData?.list[0].main?.temp - 273.15)}<sup>o</sup>C</div>
                            <div>feels like {Math.floor(weatherData?.list[0].main?.feels_like - 273.15)}<sup>o</sup>C </div>
                        </div>
                        <hr className="flex-grow border-4 border-t "></hr>
                        <div >
                            { weatherData.list[0].weather[0].main }, { weatherData && weatherData.list[0].weather && weatherData.list[0].weather[0] ? weatherData.list[0].weather[0].description : ''}
                        </div>
                        <hr className="flex-grow border-t w-11/12 mx-auto"></hr>
                        <div> Wind: {weatherData?.list[0].wind?.gust}</div>
                        <hr className="flex-grow border-t  w-11/12 mx-auto"></hr>
                        <div> Humidity: {weatherData?.list[0].main?.humidity}</div>
                        <hr className ="flex-grow border-t w-11/12 mx-auto "></hr>
                        <div>{weatherData?.list[0].sys.pod}</div>    
                    </div>
                </div>
                ) : <div className="flex flex-col justify-center items-center h-full text-3xl ">Can't find location</div>)
            }
        </div>
    </div>
    )
}
