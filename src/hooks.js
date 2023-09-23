import { useState } from 'react';
import axios from 'axios';

const useFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(prevFlip => !prevFlip);
  };

  return [isFlipped, toggleFlip];
};

const useAxios = (initialUrl) => {
  const [data, setData] = useState([]);

  const addCard = async () => {
    const response = await axios.get(initialUrl);
    setData([...data, response.data]);
  };

  const removeAllCards = () => {
    setData([]);
  };

  return [data, addCard, removeAllCards];
};

export { useFlip, useAxios };