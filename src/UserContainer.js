import { useEffect } from "react";

export default function UserContainer({userData, isDark}){
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

      useEffect(function(){
        if(!name) return
        document.title = `User | ${name}`
    
        return function(){
          document.title = "Github user search app";
        }
      }, [name])

      const datasegments = created_at?.split("T").shift().split("-");
    return(
        <div className={`user-container ${isDark ? "dark-mode-background-light": ""}`}>
          <div className='user-content'>
            <div className='user-header'>
            <img className='avatar' src={userData ? avatar_url : "https://avatars.githubusercontent.com/u/583231?v=4"} alt="avatar"></img>
              <div className='user'>
                <p className={`user-name ${isDark ? "dark-mode": ""}`}>{userData ? name : "The Octocoat"}</p>
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
            <div className={`user-stats-wrapper ${isDark ? "dark-mode-background-dark": ""}`}>
              <div className="user-stat">
                <p className="stat-title">Repos</p>
                <p id="repos" className={`stat-value ${isDark ? "dark-mode": ""}`}>{userData ? public_repos : 8}</p>
              </div>
              <div className="user-stat">
                <p className="stat-title">Followers</p>
                <p id="followers" className={`stat-value ${isDark ? "dark-mode": ""}`}>{userData ? followers : 10782}</p>
              </div>
              <div className="user-stat">
                <p className="stat-title">Following</p>
                <p id="following" className={`stat-value ${isDark ? "dark-mode": ""}`}>{userData ? following : 9}</p>
              </div>
            </div>
            <div className="user-bottom-wrapper">
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-location.svg" alt=""></img></div>
                <p className={location === null ? "not-available": ""}>{userData ? location===null ? "Not available": location : "San Francisco"}</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-twitter.svg" alt=""></img></div>
                <p  className={twitter_username === null ? "not-available": ""}>{userData ? twitter_username===null ? "Not available":twitter_username : "Not available"}</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-website.svg" alt=""></img></div>
                <p className={blog === "" ? "not-available": ""}>{userData ? blog==="" ? "Not available": blog : "https://github.blog"}</p>
              </div>
              <div className="user-info">
                <div className="bottom-icons"><img src="https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-company.svg" alt=""></img></div>
                <p className={company === null ? "not-available": ""}>{userData ? company===null ? "Not available" :company : "@Github"}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
}