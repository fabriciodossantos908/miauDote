import { Alert } from "react-native";

// futuro modal

export const showAlertMessage = (tittle, message) => {
    Alert.alert(tittle, message)
}