export {Button, View, Text} from "react-native";



export default function Detailscreen(){
    return (
        <View>
            <Text>Detail Screen</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
            />
            <Button
            title= "Go to Profile"
            onPress={() => navigation.navigate("Profile")}
            />
        </View>
    )
}