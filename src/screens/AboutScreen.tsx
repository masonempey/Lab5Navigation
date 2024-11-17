import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {Button} from 'react-native';

function AboutScreen({navigation}: any) {
  return (
    <MainLayout>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </MainLayout>
  );
}

export default AboutScreen;
