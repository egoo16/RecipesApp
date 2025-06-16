import { ImageBackground, View, Text, StyleSheet } from 'react-native'
import { IMeal } from '../interfaces/recipes'

interface ICategoryCardProps {
    meal: IMeal
}

export const CardMeal = ({ meal }: ICategoryCardProps) => {
    return (
        <View style={{ ...styles.mealCard }}>
            <ImageBackground source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
            <View style={styles.mealInfo}>
                <Text style={styles.mealTitle}>{meal.strMeal}</Text>
            </View>
        </View>)
}


export default CardMeal

const styles = StyleSheet.create({
    mealCard: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#fff', padding: 5 },
    mealImage: { width: '100%', height: 200, borderRadius: 12, overflow: 'hidden' },
    mealInfo: { paddingTop: 12 },
    mealTitle: { color: 'green', fontSize: 18, fontWeight: '700', marginBottom: 4 },
    mealDesc: { color: '#9a5e4c', fontSize: 14 },
})