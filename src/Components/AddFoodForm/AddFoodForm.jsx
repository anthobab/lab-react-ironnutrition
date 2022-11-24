import React, { useState } from 'react';
import './AddFoodForm.css';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const handleName = ({ target: { value } }) => {
    setName(value);
  };

  const handleImageUrl = ({ target: { value } }) => {
    setImageUrl(value);
  };

  const handleCalories = ({ target: { value } }) => {
    setCalories(value);
  };

  const handleServings = ({ target }) => {
    setServings(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFoodsArray((currentFoods) => {
      return [
        {
          name: name,
          calories: calories,
          image: imageUrl,
          servings: servings,
        },
        ...currentFoods,
      ];
    });
  };

  return (
    <form onSubmit={handleSubmit} className="AddFoodForm">
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        placeholder="Food Name"
        onChange={handleName}
      />

      <label>Image</label>
      <Input
        value={imageUrl}
        type="text"
        placeholder="https://example.com/image-name.jpg"
        onChange={handleImageUrl}
      />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;
