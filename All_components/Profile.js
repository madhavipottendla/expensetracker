import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Modal, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from './ThemeContext';
import { globalStyles } from './globalStyles';
import { useTranslation } from 'react-i18next';

const windowHeight = Dimensions.get('window').height;

const Profile = ({ route,navigation }) => {
    // Extract user data from navigation props
    const { userData } = route.params;

    // for theme
    const { isDarkMode } = useTheme();
    // for language
    const { t, i18n } = useTranslation();

    // modal
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[globalStyles.containerProfile, isDarkMode && globalStyles.darkContainer]}>
            <View style={globalStyles.profileContainerpr}>
                <View style={globalStyles.profileInfopr}>
                    <Image
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/ff5c/c365/0faa155c0df565445e57248a3e7f6dc3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOY7uQ7vauQSfms90NcydgAX09Mo75SJqjEoJPqu5CD8qeGt3ckfHvJJSl6AOTJuZXkw36a54h5aiTrEB9GOhVEsPjFqQz4Wt5EEkhLUE4GXcZ2xJdt6s3H1AjzKz3chtBvre7QQFpRkNSQTfL7EPy7G827urKwoeBdelN4SNrzmA~DeESuV7rH6JQg0Ho3FnterqQxjepMvGEIhiCvdwuZ7KA1kZ6dJEFvP2FHJnlkTNV~SqVA2LaIg~JsWxhju0SiXnQWNhDKD-PDKveCmFOjPk8Z-lEXaeoTtUdFkbANTMqWvCXx7lUX65VMkbLrcGePBPwaGSkCKnbDZeVUHIQ__' }}
                        style={globalStyles.profileImage}
                    />
                    <View style={globalStyles.userInfopr}>
                        <View>
                            <Text style={[globalStyles.usernameprofile]}>{t('Username')}</Text>
                            <Text style={[globalStyles.usernamepr, isDarkMode && globalStyles.usernameprDark]}>{userData.username}</Text>
                        </View>
                        <TouchableOpacity onPress={() => console.log('Edit profile')} style={[globalStyles.pencil]}>
                            <Icon name="pencil" size={24} color="grey" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[globalStyles.menuContainerpr, isDarkMode && globalStyles.menuContainerprDark]} >
                <TouchableOpacity style={globalStyles.menuItempr} onPress={() => navigation.navigate("SetupAccount")}>
                    <MaterialCommunityIcons name="account-arrow-down-outline" size={40} color="#7F3DFF" style={globalStyles.DownICON4} />
                    <Text style={globalStyles.menuprofile4}>{t('Account')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.menuItempr} onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings" size={40} color="#7F3DFF" style={globalStyles.DownICON4} />
                    <Text style={globalStyles.menuprofile4}>{t('Settings')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.menuItempr}>
                    <MaterialCommunityIcons name="file-export" size={40} color="#7F3DFF" style={globalStyles.DownICON4} />
                    <Text style={globalStyles.menuprofile4}>{t('ExportData')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.menuItempr} onPress={() => setModalVisible(true)}>
                    <MaterialCommunityIcons name="logout" size={40} color="red" style={globalStyles.DownICON4L} />
                    <Text style={globalStyles.menuprofile4}>{t('Logout')}</Text>
                </TouchableOpacity>
            </View>

            <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
        Alert.alert('Cancel the logout!');
        setModalVisible(!modalVisible);
    }}>
    <View  style={[styles.centeredView]}>
        <View  style={[styles.modalView, isDarkMode && globalStyles.modalViewDark]}>
            {/* Content centered at the top */}
            <Text style={styles.modalText}>Logout?</Text>

            {/* Message in the middle */}
            <Text style={[styles.messageText, isDarkMode && globalStyles.messageTextDark]}>Are you sure you want to logout?</Text>

            {/* Buttons at the bottom */}
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyleno}>No</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.textStyleyes}>Yes</Text>
                </Pressable>
            </View>
        </View>
    </View>
</Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderTopLeftRadius: 30,
        height: windowHeight * 0.3,
        borderTopRightRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 20,
    },
    modalText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 30,
        marginTop:10,

    },
    messageText: {
        textAlign: 'center',
        marginBottom: 40,
        fontSize: 18,
        color:'grey'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 20,
        paddingVertical: 18,
        paddingHorizontal: 20,
        elevation: 2,
        width: '45%', 
       
    },
    buttonClose: {
        backgroundColor: '#EEE5FF',
    },
    buttonOpen: {
        backgroundColor: '#7f3dff',
    },
    textStyleyes: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:18,
    },
    textStyleno: {
        color: '#7f3dff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:18,
    },
});

export default Profile;
