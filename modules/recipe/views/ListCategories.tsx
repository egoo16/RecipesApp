import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ListComponent from '../components/ListComponent';
import CardCategory from '../components/CardCategory';
import { useGetCategoriesQuery } from '../services/recipes.service';
import ErrorMessage from '../components/ErrorMessaje';
import { getErrorMessage } from '../utils/utils';
import LoadingScreen from '../components/LoadingScreen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const ListCategories = () => {
    const navigation = useNavigation<HomeNavProp>();
    const { data, error, isError, isLoading, refetch } = useGetCategoriesQuery()
    const categories = data?.categories || [];

    const errorMessage = getErrorMessage(isError, error);

    const goMealById = (categoryName: string) => {
        navigation.navigate('ListMeal', { categoryName });
    }



    return (
        <ListComponent>
            {isLoading ? <LoadingScreen /> :
                < >
                    {errorMessage && <ErrorMessage message={errorMessage} onRetry={refetch} />}
                    {
                        categories && categories.length > 0 &&
                        <>
                            <Text style={{ ...styles.sectionTitle }}>Categories</Text>
                            {categories.map((cat) => (
                                <View key={cat.idCategory} style={{ marginBottom: 16 }}>
                                    <TouchableOpacity onPress={() => goMealById(cat.strCategory)} style={{ flex: 1 }}>
                                        <CardCategory category={cat} />
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



export default ListCategories
const styles = StyleSheet.create({
    sectionTitle: { margin: 5, color: '#1b110d', fontSize: 22, fontWeight: '700' },
    categoryContainer: { flex: 1, paddingHorizontal: 16 },

})