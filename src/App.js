import { useState } from 'react';
import './App.css';
import Header from './Header';
import SearchContainer from './SearchContainer';
import UserContainer from './UserContainer';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [error, setError] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) { 
      document.body.classList.remove('dark-mode-body');
    } else {
      document.body.classList.add('dark-mode-body');
    }
  };

  async function handleSubmit(e){ 
    e.preventDefault();
    try {
      const res = await fetch(`https://api.github.com/users/${inputValue}`);
      if(!res.ok) setError(true);
      if(res.ok) setError(false);
      const data = await res.json();
      // console.log(data);
      setUserData(data)
    } catch (err) {
      setError(true)
    }
  }

  return(
    <div className={`container ${isDark ? "dark-mode" : ""}`}>
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />

      <SearchContainer isDark={isDark} onSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} />

      {!error && <UserContainer userData={userData} isDark={isDark}/>}
      {error && <p className='error-message'>User not found</p>}
    </div>
  )
}

export default App;
