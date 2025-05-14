import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

interface SearchProps {
    placeholder: string;
    onPress?: () => void;
}

export function SearchBar({ placeholder, onPress }: SearchProps) {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image
                source={icons.search}
                className="size-5"
                resizeMode="contain"
                tintColor="#AB8BFF"
            />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=""
                onChangeText={() => {}}
                placeholderTextColor="#AB8BFF"
                className="flex-1 ml-2 text-white"
            />
        </View>
    );
}
