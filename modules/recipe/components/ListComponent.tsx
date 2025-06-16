import { PropsWithChildren } from 'react'
import { ScrollView, StyleSheet } from 'react-native';

export const ListComponent = ({ children }: PropsWithChildren) => {


    return (
        <ScrollView style={{ ...styles.categoryContainer }}>
            {children}
        </ScrollView>
    )
}


export default ListComponent

const styles = StyleSheet.create({
    categoryContainer: { flex: 1, paddingHorizontal: 16 },

})