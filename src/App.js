import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState("");

  const {
    avatar_url,
    name,
    login,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
    created_at
  } = userData;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  async function handleSubmit(e){
    e.preventDefault();

    const res = await fetch(`https://api.github.com/users/${inputValue}`);
    const data = await res.json();
    
    setUserData(data)
    console.log(data);
  }

  const datasegments = created_at?.split("T").shift().split("-");

  return(
    <div className='container'>
      <header className='header'>
        <h1 className='title'>devfinder</h1>
        <div className='btn-mode'>
          <p className='mode-text'>DARK</p>
          <div className='mode-container'>
            <img className='search-icon' src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-moon.svg" alt='search-icon'></img>
          </div>
        </div>
      </header>

        <div className='search-container'>
        <form onSubmit={handleSubmit} className='form'>
          <input 
          className='search-input'
          type='text'
          placeholder='Search Github Username ...'
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          >
          </input>
            <p className='error'>Error</p>
            <button className="btn-submit">Search</button>
          </form>
        </div>

        <div className='user-container'>
          <div className='user-content'>
            <div className='user-header'>
            <img className='avatar' src={userData ? avatar_url : "https://avatars.githubusercontent.com/u/583231?v=4"} alt="avatar"></img>
              <div className='user'>
                <p className='user-name'>{userData ? name : "The Octocoat"}</p>
                <p className='user-nick'>{userData? login : "@octocoat"}</p>
              </div>
              <div className='user-date'>
                <p>{created_at ?  `Joined 
                ${datasegments ? datasegments[2] : ""} 
                ${datasegments ? months[datasegments[1] - 1] : ""}  
                ${datasegments ? datasegments[0] : ""}` : "Joined 25 Jan 2011"}</p>
              </div>
            </div>
            <div className='text-right'>
            <p className='user-bio'>{userData ? bio : "This profile has no bio"}</p>
            <div className="user-stats-wrapper">
              <div className="user-stat">
                <p className="stat-title">Repos</p>
                <p id="repos" className="stat-value">{userData ? public_repos : 8}</p>
              </div>
              <div className="user-stat">
                <p className="stat-title">Followers</p>
                <p id="followers" className="stat-value">{userData ? followers : 10782}</p>
              </div>
              <div className="user-stat">
                <p className="stat-title">Following</p>
                <p id="following" className="stat-value">{userData ? following : 9}</p>
              </div>
            </div>
            <div className="user-bottom-wrapper">
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-location.svg" alt=""></img></div>
                <p id="location">{userData ? location==="" ? "Not available": location : "San Francisco"}</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-twitter.svg" alt=""></img></div>
                <p id="twitter">{userData ? twitter_username===null ? "Not available":twitter_username : "Not available"}</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-website.svg" alt=""></img></div>
                <p id="page">{userData ? blog==="" ? "Not available": blog : "https://github.blog"}</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-company.svg" alt=""></img></div>
                <p id="company">{userData ? company===null ? "@Github" :company : "Not available"}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;
