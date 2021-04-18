import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    onSubmit() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Success')
        })
        .catch((err) => {
            console.error(err.message)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder='Email'
                    leftIcon={
                      <Icon
                        name='user'
                        size={24}
                        color="red"
                      />
                    }
                    autoCapitalize="none"
                    value={this.state.email}
                    onChangeText={value => this.setState({email: value})}
                />
                <Input
                    placeholder='Password'
                    leftIcon={
                      <Icon
                        name='key'
                        size={24}
                        color="red"
                      />
                    }
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={value => this.setState({password: value})}
                />
                <Button
                    icon={
                    <Icon
                        name="sign-in"
                        size={30}
                        color="red"
                    />
                    }
                    title='Đăng nhập'
                    type='outline'
                    titleStyle={{color: 'red', fontSize: 20, padding: 30}}
                    buttonStyle={{borderRadius: 50, borderColor: 'red', borderWidth: 1}}
                    onPress={this.onSubmit.bind(this)}
                    containerStyle={{padding: 5}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginForm