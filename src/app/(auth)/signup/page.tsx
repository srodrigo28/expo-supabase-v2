import colors from "@/constants/colors";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Signup(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                
                <Text style={styles.logoText}>
                    App<Text style={{color: colors.purpleEspecial, fontWeight: '700'}}>Supa</Text>
                </Text>

                <Text style={styles.slogan}>
                    Vamos criar sua conta : )
                </Text>
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>Nome completo:</Text>
                    <TextInput 
                        placeholder="Nome" 
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput 
                        placeholder="Digite seu email" 
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput 
                        placeholder="*********" 
                        style={styles.input} secureTextEntry
                    />
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>

                <Link href='/' style={styles.link}>
                    {/* <Ionicons style={styles.buttonIcon}  name="arrow-back" size={25} color={colors.white} /> */}
                    <Text style={styles.linkText}>Já tem uma conta ?</Text>
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
        height: 50,
        width: '100%',
        marginTop: 20,
        textAlign: 'center',
    },
    linkText:{
        fontSize: 16,
        color: colors.purpleEspecial,
    },
    buttonIcon:{
        padding: 7,
        borderRadius: 7,
        backgroundColor: colors.purpleEspecial
    }
})