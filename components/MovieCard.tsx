import { Link } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";

export function MovieCard({
    id,
    description,
    primaryImage,
    originalTitle,
}: Movie) {
    return (
        <Link href={`/movie/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                    source={{
                        uri: primaryImage ?? "../assets/images/logo.png",
                    }}
                />

                <Text className="text-sm font-bold text-white mt-2">
                    {originalTitle}
                </Text>
            </TouchableOpacity>
        </Link>
    );
}
