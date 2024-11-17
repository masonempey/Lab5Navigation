import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {Button} from 'react-native';

function HomeScreen({navigation}: any) {
  // ...

  return (
    <MainLayout>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}

export default HomeScreen;
