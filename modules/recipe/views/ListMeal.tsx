import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ListComponent from '../components/ListComponent';
import { useGetRecipesByCategoryQuery } from '../services/recipes.service';
import ErrorMessage from '../components/ErrorMessaje';
import { getErrorMessage } from '../utils/utils';
import LoadingScreen from '../components/LoadingScreen';
import CardMeal from '../components/CardMeal';
import { RootStackParamList } from '../types/navigation';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';


type MealRouteProp = RouteProp<RootStackParamList, 'ListMeal'>;
type MealNavProp = NavigationProp<RootStackParamList, 'ListMeal'>;


export const ListMeal = () => {
    const route = useRoute<MealRouteProp>();
    const navigate = useNavigation<MealNavProp>();
    const { categoryName } = route.params;
    console.log("🚀 ~ ListMeal ~ idCategory:", categoryName)


    const { data, error, isError, isLoading, refetch } = useGetRecipesByCategoryQuery(categoryName)
    console.log("🚀 ~ ListMeal ~ data:", data)
    console.log("🚀 ~ ListMeal ~ error:", error)
    const meals = data?.meals || [];

    const errorMessage = getErrorMessage(isError, error);

    const goRecipeDetails = (mealId: string) => {
        navigate.navigate('Details', { mealId });
    }

    return (
        <ListComponent>
            {isLoading ? <LoadingScreen /> :
                <>
                    {errorMessage && <ErrorMessage message={errorMessage} onRetry={refetch} />}
                    {
                        meals && meals.length > 0 &&
                        <>
                            <Text style={{ ...styles.sectionTitle }}>Meals you can prepare with {categoryName}</Text>
                            {meals.map((meal) => (
                                <View key={meal.idMeal} style={{ marginBottom: 16 }}>
                                    <TouchableOpacity onPress={() => goRecipeDetails(meal.idMeal)} >
                                        <CardMeal meal={meal} />
                                    </TouchableOpacity>
                                </View>

                            ))}
                        </>
                    }
                </>
            }
        </ListComponent>
    )
}



export default ListMeal
const styles = StyleSheet.create({
    sectionTitle: { margin: 5, color: '#1b110d', fontSize: 22, fontWeight: '700' },
})