import './App.css'

function App() {
  
  const xhttpr = new XMLHttpRequest();

  xhttpr.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true);

  xhttpr.send();

  xhttpr.onload = ()=> {
    if (xhttpr.status === 200) {
        const response = JSON.parse(xhttpr.response);
          console.log(response.meals[0].strMeal);
    } 
    else {
        console.log("error")
    }
  };

  return (
    <>
      <p>nothing</p>
    </>
  )
}

export default App
