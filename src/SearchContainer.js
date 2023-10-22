export default function SearchContainer({isDark, onSubmit, inputValue, setInputValue}){
    return(
        <div className={`search-container ${isDark ? "dark-mode-background-light": ""}`}>
        <form onSubmit={onSubmit} className='form'>
          <img className='form-icon' src='https://untalpeluca.github.io/GitHubUserSearchApp/assets/icon-search.svg' alt='search'></img>
          <input 
          className={`search-input ${isDark ? "dark-mode-background-light dark-mode": ""}`}
          type='text'
          placeholder='Search Github Username ...'
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          >
          </input>
            <p className='error'></p>
            <button className="btn-submit">Search</button>
          </form>
        </div>
    )
}