import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { propsStack } from '../../routes/types';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles';

function GiveClasses() {
    const { goBack } = useNavigation<propsStack>();

    function handleNavigateBack() {
        return goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBgImage}
                style={styles.content}
            >
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton 
                activeOpacity={0.8}
                onPress={handleNavigateBack}
                style={styles.okButton}
            >
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;