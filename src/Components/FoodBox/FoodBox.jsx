import React from 'react';
import './FoodBox.css';
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ food: { name, image, calories, servings }, setFoodsArray }) {
  return (
    <Col className="FoodBox">
      <Card title={name} style={{ width: 230, height: 330, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button
          type="primary"
          onClick={() =>
            setFoodsArray((currentFA) =>
              [...currentFA].filter((foodEL) => foodEL.name !== name)
            )
          }
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
