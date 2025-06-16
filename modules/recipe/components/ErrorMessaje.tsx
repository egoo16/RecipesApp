// components/ErrorMessage.js
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface IErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: IErrorMessageProps) => {
    if (!message) return null;
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{message}</Text>
            {onRetry && <Button title="Reintentar" onPress={onRetry} />}
        </View>
    );
};

const styles = StyleSheet.create({
    errorContainer: {
        backgroundColor: '#f44336',
        padding: 16,
        margin: 16,
        borderRadius: 8,
    },
    errorText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ErrorMessage;
