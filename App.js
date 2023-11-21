import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const PersonagensTela = () => {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const fetchPersonagens = async () => {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();
        const personagensList = data.results.slice(0, 10);
        setPersonagens(personagensList);
    };

    fetchPersonagens();
  }, []);

  const renderPersonagem = ({ item }) => {
    return (
      <View>
        <Text>Nome: {item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Lista de Personagens</Text>
      <FlatList
        data={personagens}
        renderItem={renderPersonagem}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: '100%' }}
      />
    </View>
  );
};

export default PersonagensTela;