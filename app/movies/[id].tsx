import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function MovieDetails() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Details: {id}</Text>
        </View>
    );
}
