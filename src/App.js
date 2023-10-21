import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState("");

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
        <form className='form'>
          <input 
          className='search-input'
          type='text'
          placeholder='Search Github Username ...'
          >
          </input>
            <p className='error'>Error</p>
            <button className="btn-submit">Search</button>
          </form>
        </div>

        <div className='user-container'>
          <div className='user-content'>
            <div className='user-header'>
            <img className='avatar' src="https://avatars.githubusercontent.com/u/583231?v=4" alt="avatar"></img>
              <div className='user'>
                <p className='user-name'>The Octocat</p>
                <p className='user-nick'>@octocat</p>
              </div>
              <div className='user-date'>
                <p>Joined 25 Jan 2011</p>
              </div>
            </div>
            <div className='text-right'>
            <p className='user-bio'>This profile has no bio</p>
            <div className="user-stats-wrapper">
              <div className="user-stat">
                <p className="stat-title">Repos</p>
                <p id="repos" className="stat-value">8</p>
              </div>
              <div className="user-stat">
                <p className="stat-title">Followers</p>
                <p id="followers" className="stat-value">10782</p>
              </div>
              <div className="user-stat">
                <p className="stat-title">Following</p>
                <p id="following" className="stat-value">9</p>
              </div>
            </div>
            <div className="user-bottom-wrapper">
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-location.svg" alt=""></img></div>
                <p id="location">San Francisco</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-website.svg" alt=""></img></div>
                <p id="page">https://github.blog</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-twitter.svg" alt=""></img></div>
                <p id="twitter">Not available</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-company.svg" alt=""></img></div>
                <p id="company">@github</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;
