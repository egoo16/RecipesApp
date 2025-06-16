import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Linking,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useGetRecipeDetailsQuery } from '../services/recipes.service';
import { RootStackParamList } from '../types/navigation';
import { IRecipeDetails } from '../interfaces/recipes';
import LoadingScreen from '../components/LoadingScreen';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function RecipeDetailsScreen() {
    const { params } = useRoute<DetailsRouteProp>();
    const { mealId } = params;

    const { data, isLoading, isError } = useGetRecipeDetailsQuery(mealId);

    if (isLoading) {
        return (
            <LoadingScreen />
        );
    }
    if (isError || !data?.meals?.length) {
        return (
            <View style={[styles.centered, styles.padding]}>
                <Text style={styles.errorText}>Error al cargar la receta.</Text>
            </View>
        );
    }

    const meal = data.meals[0] as IRecipeDetails;
    console.log("🚀 ~ RecipeDetailsScreen ~ meal:", meal)

    const ingredients: { ingredient: string; measure: string }[] = [];

    // 20 ingredients by recipe
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}` as keyof IRecipeDetails;
        const measureKey = `strMeasure${i}` as keyof IRecipeDetails;

        const ing = meal[ingredientKey]?.trim();
        const meas = meal[measureKey] ?? '';

        if (ing) {
            ingredients.push({ ingredient: ing, measure: meas });
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: meal.strMealThumb }}
                style={styles.image}
            />

            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.subtitle}>
                {meal.strCategory} • {meal.strArea}
            </Text>

            <Text style={styles.sectionText}>{meal.strInstructions}</Text>
            <View>


                <Text style={styles.sectionHeader}>Ingredientes</Text>
                {ingredients.map(({ ingredient, measure }) => (
                    <Text key={ingredient} style={styles.ingredientText}>
                        • {ingredient} – {measure}
                    </Text>
                ))}
            </View>
            <View style={styles.padding}>


            {meal.strYoutube ? (
                <TouchableOpacity
                onPress={() => Linking.openURL(meal.strYoutube!)}
                style={styles.youtubeButton}
                >
                    <Text style={styles.youtubeText}>▶ Ver video en YouTube</Text>
                </TouchableOpacity>
            ) : null}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    padding: {
        paddingBottom: 70,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 12,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#1b110d',
    },
    subtitle: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 12,
    },
    sectionText: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 16,
        color: '#333333',
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        color: '#1b110d',
    },
    ingredientText: {
        fontSize: 16,
        marginBottom: 4,
        color: '#333333',
    },
    youtubeButton: {
        marginTop: 16,
    },
    youtubeText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1e90ff',
    },
    errorText: {
        fontSize: 18,
        color: '#cc0000',
    },
});
