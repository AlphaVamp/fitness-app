export const exerciseOptions = {
    method: 'GET',
    headers: {
        //'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',

        'X-RapidAPI-Key': 'c84994802emsha30802dea6cf0a2p1a1d90jsnc084dbac45cb'
    }
  };
  
  
export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data; 
}