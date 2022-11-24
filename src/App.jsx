// import logo from './logo.svg';
// import logovide from 'videlogo.png';
import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import Search from './Components/Search/Search';

// function Example() {
//   // After importing the components we can render them directly:
//   return (
//     <div>
//       <Row>
//         <Col>
//           <Divider>Fancy Input</Divider>
//           <Input value={''} onChange={() => {}} />
//         </Col>

//         <Col>
//           <Card title={'Fancy Card'}>
//             <Button onClick={() => {}}>Fancy Button</Button>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }

function App() {
  const [foodsArray, setFoodsArray] = useState(foods);
  const [searchString, setSearchString] = useState('');
  const [hideForm, setHideForm] = useState(false);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* {Example()} */}
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }} 
      />*/}
      {hideForm ? (
        <AddFoodForm setFoodsArray={setFoodsArray}></AddFoodForm>
      ) : (
        ''
      )}

      <Button
        onClick={() => {
          setHideForm((cs) => !cs);
        }}
      >
        {hideForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Search
        searchString={searchString}
        setSearchString={setSearchString}
      ></Search>
      <Divider>Food List</Divider>
      {foodsArray
        .filter((foodEl) => foodEl.name.includes(searchString))
        .map((food) => {
          // return (
          //   <div key={food.name}>
          //     <p> {food.name} </p>
          //     <img src={food.image} width={100} />
          //   </div>
          // );
          return (
            <FoodBox
              key={food.name}
              food={food}
              setFoodsArray={setFoodsArray}
            />
          );
        })}
      {foodsArray.length ? (
        ''
      ) : (
        <div className="EmptyDiv">
          <h2>Oops! There is no more content to show.</h2>
          <picture>
            <img className="EmptyLogo" src="videlogo.png" alt="emptylogo" />
          </picture>
        </div>
      )}
    </div>
  );
}

export default App;
