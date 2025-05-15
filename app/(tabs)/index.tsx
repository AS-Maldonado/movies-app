import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
    const router = useRouter();

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
    } = useFetch(() => fetchMovies());

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />
            <View className="flex-1 px-5">
                <Image
                    source={icons.logo}
                    className="w-12 h-10 mt-20 mb-5 mx-auto"
                />
                {moviesLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="#0000FF"
                        className="mt-10 self-center"
                    />
                ) : moviesError ? (
                    <Text className="text-white">
                        Error: {moviesError?.message}
                    </Text>
                ) : (
                    <View className="flex-1 mt-5">
                        <SearchBar
                            onPress={() => router.push("/search")}
                            placeholder="Search for a movie"
                        />
                        <Text className="text-lg text-white font-bold mt-5 mb-3">
                            Latest Movies
                        </Text>

                        <FlatList
                            data={movies}
                            numColumns={3}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <MovieCard {...item} />}
                            columnWrapperStyle={{
                                justifyContent: "flex-start",
                                gap: 20,
                                paddingRight: 5,
                                marginBottom: 10,
                            }}
                            className="mt-2 pb-32"
                        />
                    </View>
                )}
            </View>
        </View>
    );
}
