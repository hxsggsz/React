import React from 'react'
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native'

const IMGPROFILE = 'https://i.pinimg.com/564x/9f/15/41/9f154142e4edc36865edf0df66e86042.jpg';
const urlToMyGithub = 'https://github.com/victorhugo-js';
const urlToMyLinkedin = 'https://www.linkedin.com/in/victor-hugo-victor-994967241/';

const App = () => {
    const handlePressGoToGithub = async () =>{
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            await Linking.canOpenURL(urlToMyGithub);
        }
    }
    const handlePressGoToLinkedin = async () =>{
       const res = await Linking.canOpenURL(urlToMyLinkedin);
       if (res){
        await Linking.canOpenURL(urlToMyLinkedin);
       }
    }

        return (
            <SafeAreaView  style={style.container}>
                <StatusBar backgroundColor={'#010409'} barStyle="light-content" />
                    <View style={style.content}>
                        <Image style={style.Avatar} source={{uri:IMGPROFILE}}/>
                        <Text style={style.name}>Victor Hugo</Text>
                        <Text style={style.nickname}>Hxggsz</Text>
                        <Text style={style.descrição}>Estudante iniciante em React Native e um amante de programação Front-End</Text>
                    </View>
                    <View style={style.content}>
                        <Pressable onPress={handlePressGoToGithub}>
                            <Text style={[style.buttom, style.textButton]}>Acesse o meu Github</Text>
                        </Pressable>

                        <Pressable onPress={handlePressGoToLinkedin}>
                            <Text style={[style.buttom, style.textButton]}>Acesse o meu Linkdln</Text>
                        </Pressable>
                    </View>
            </SafeAreaView>
        );
    };
export default App;

    const style = StyleSheet.create({
        container: {
            backgroundColor: '#010409',
            flex: 1,
            justifyContent: 'center'
        },
        content: {
            alignItems: 'center',
            padding: 20,
        },
        Avatar: {
            height: 220,
            width: 220,
            borderRadius: 90, 
            borderColor: 'whitesmoke',
            borderWidth: 1,
        },
        name: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
        },
        nickname: {
            color: 'gray',
            fontSize: 20,
        },
        descrição: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
        },
        buttom: {
            backgroundColor: '#4F565E',
            borderRadius: 15,
            marginTop: 10,
            padding: 15,
            width: 170,
        },
        textButton: {
            color: 'white',
        },
    });  