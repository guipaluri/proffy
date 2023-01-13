import React, { ReactNode } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { propsStack } from '../../routes/types';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './styles';

interface PageHeaderProps {
    children?: any;
    title: string,
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
    const { navigate } = useNavigation<propsStack>();

    function handleGoBack() {
        return navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode={'contain'} />
                </BorderlessButton>

                <Image source={logoImg} resizeMode={'contain'} />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    )
}

export default PageHeader;