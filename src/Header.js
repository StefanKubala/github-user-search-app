export default function Header({isDark, toggleDarkMode}){
    return(
        <header className='header'>
        <h1 className='title'>devfinder</h1>
        <div className='btn-mode' onClick={toggleDarkMode}>
          <p className='mode-text'>{isDark ? "LIGHT" : "DARK"}</p>
          <div className='mode-container'>
            <img className='search-icon' src={`${isDark ? 
              "https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-sun.svg"
              :"https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-moon.svg" } `} 
              alt='search-icon'>  
            </img>
          </div>
        </div>
      </header>
    )
}