import React, { useState } from 'react';
import {
    SafeAreaView, 
    StyleSheet, 
    View, 
    Text, 
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Button} from '../components/Button';

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);

    function handleInputBlur(){
        setIsFocused(false)
    }

    function handleInputFocus(){
        setIsFocused(true)
    }

    return(
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView 
            style = {styles.container}
            behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.form}>

                         <Text style={styles.emoji}>
                           😃  
                         </Text>
                         <Text style={styles.title}>
                             Como podemos {'\n'}
                             chamar você?
                         </Text>
                      </View>

                      <TextInput 
                        style={[
                          styles.imput,
                          isFocused && {borderColor: colors.green}
                        ]}
                        placeholder="Digite seu nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus} 
                      />

                      <View style={styles.footer}>
                           <Button/>
                      </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },

    header: {
        alignItems: 'center',
    },

    emoji: {
        fontSize: 44,
    },

    imput: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.gray,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },

    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },

    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    }
})