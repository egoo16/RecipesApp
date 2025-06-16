import { Provider } from 'react-redux';
import { store } from './store';

import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import ScreenContent from './modules/recipe/ScreenContent';
import ListMeal from './modules/recipe/views/ListMeal';
import { RootStackParamList } from './modules/recipe/types/navigation';
import RecipeDetailsScreen from './modules/recipe/views/DetailRecipe';


export const navigationRef =
  createNavigationContainerRef<RootStackParamList>();

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={ScreenContent}
            options={{ title: 'Recipes' }}
          />
          <Stack.Screen
            name="ListMeal"
            component={ListMeal}
            options={{ title: 'Recipes By Category' }}
          />
          <Stack.Screen
            name="Details"
            component={RecipeDetailsScreen}
            options={{ title: 'Detail Recipe' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
