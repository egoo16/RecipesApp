import React from 'react'
import { ImageBackground, View, Text, StyleSheet } from 'react-native'
import { ICategoryMeal } from '../interfaces/recipes'

interface ICategoryCardProps {
    category: ICategoryMeal
}

export const CardCategory = ({ category }: ICategoryCardProps) => {
    return (
        <View style={{ ...styles.categoryCard }}>
            <ImageBackground source={{ uri: category.strCategoryThumb }} style={styles.categoryImage} />
            <View style={styles.categoryInfo}>
                <Text style={styles.categoryTitle}>{category.strCategory}</Text>
                <Text style={styles.categoryDesc}>{category.strCategoryDescription}</Text>
            </View>
        </View>)
}


export default CardCategory

const styles = StyleSheet.create({
    categoryCard: { marginBottom: 16, borderWidth: 1, borderColor: 'gray', borderRadius: 12, overflow: 'hidden', backgroundColor: '#fff', padding: 5 },
    categoryImage: { width: '100%', height: 200, borderRadius: 12, overflow: 'hidden' },
    categoryInfo: { paddingTop: 12 },
    categoryTitle: { color: '#0E49B8', fontSize: 18, fontWeight: '700', marginBottom: 4 },
    categoryDesc: { color: '#9a5e4c', fontSize: 14 },
})