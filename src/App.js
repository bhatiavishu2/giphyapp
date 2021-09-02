import logo from './logo.svg';
import './App.css';
import Giphy from './giphy'
import react, {useState} from 'react'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); 
  return (
    <div className={isDarkTheme? 'App dark':'App'}>
      <div className="demo">
          <div className="demoSearchBox">
            <div className="searchBox">
              <Giphy
                apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                // eslint-disable-next-line no-console
                onSelect={item => console.log(item)}
                library="stickers"
                searchPlaceholder="Search for Stickers"
                masonryConfig={[
                  { columns: 2, imageWidth: 110, gutter: 5 },
                  { mq: '700px', columns: 3, imageWidth: 400, gutter: 5 },
                ]}
                gifListHeight={800}
              />
            </div>
          </div>
          </div>
          <div>
        <input type="checkbox" className="checkbox" onChange={()=>{setIsDarkTheme(!isDarkTheme)}} id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon" />
          <i className="fas fa-sun" />
          <div className="ball">
          </div>
        </label></div>
    </div>
  );
}

export default App;
