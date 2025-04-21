import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "@/constants/colors";
import { Link } from "expo-router";
import { useState } from "react"

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleLogin = () => {
        if(!email){
            alert('Preencher o email')
            return
        }
        if(!senha){
            alert('Preencher a senha')
            return
        }
        alert('hello' + email)
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoText}>
                    App<Text style={{color: colors.purpleEspecial, fontWeight: '700'}}>Supa</Text>
                </Text>
                <Text style={styles.slogan}>
                    React Expo desenvolvimento Android & IOS
                </Text>
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput 
                        value={email} onChangeText={setEmail}
                        placeholder="Digite seu email" 
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput 
                        value={senha} onChangeText={setSenha}
                        style={styles.input} secureTextEntry
                        placeholder="*********" 
                    />
                </View>

                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>

                <Link href='/(auth)/signup/page' style={styles.link}>
                    <Text style={styles.linkText}>Ainda não tem cadastro ?</Text>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc
    },
    header:{
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 50,
    },
    logoText:{
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.grayEspecial3,
        marginBottom: 8,
    },
    slogan:{
        fontSize: 18,
        fontWeight: '500',
        color: colors.grayEspecial3,
        marginBottom: 8,
        textAlign: 'center'
    },
    form:{
        flex:1,
        // margin: 10,
        padding: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: colors.blackSecondary,
    },
    label:{
        color: colors.white,
        marginTop: 10,
        marginBottom: 3,
        fontSize: 18,
    },
    input:{
        fontSize: 18,
        color: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.purpleEspecial,
        paddingHorizontal: 8,
        paddingVertical: 15,
    },
    button:{
        backgroundColor: colors.purpleEspecial,
        marginTop: 20,
        borderRadius: 5,
        padding: 16,
    },
    buttonText:{
        fontSize: 18,
        textAlign: 'center',
        color: colors.white
    },
    link:{
        width: '100%',
        marginTop: 20,
        textAlign: 'center',
    },
    linkText:{
        fontSize: 16,
        color: colors.purpleEspecial,
        
    }

})