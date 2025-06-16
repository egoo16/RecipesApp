# React Native Recipe App

This README provides setup instructions, key assumptions, questions for consideration, and performance optimization details for the Recipe App project.

---

## Configuration Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/egoo16/RecipesApp
   cd RecipesApp


Install dependencies
>   npm install
### or
> yarn install

## Run the app

Expo

expo start
Scan the QR code with your device or run on an emulator.

## Environment

No additional environment variables are required; the app uses the public MealDB test API key (1).

## Directory Structure
```
modules/recipe/        # Feature-specific screens and services
│       ├──components/        # Reusable UI components (ListComponent, CardMeal, LoadingScreen, ErrorMessage)
│       ├── views/     # Screen components (ListMeal, DetailRecipe)
│       └── services/  # RTK Query API slice
│       └── store/     # Redux to Recipe Module
│       └── interfaces/# All Types from Code
│       └── utils/     # Services utils in the project
│       └── services/  # RTK Query API slice
├── store/             # Redux store setup (RTK Query integration)
```

## Assumptions & Questions
Home Screen
We decided to create a Home screen displaying all available recipe categories. Tapping a category navigates to a list of meals for that category.

## Search Page
A search page was planned but not implemented due to time constraints.

## Styling
Although NativeWind (Tailwind) was installed and I'm familiar with Tailwind CSS, for practicality this project uses standard React Native StyleSheet styles.

## Questions

Was it necessary to implement code-splitting (lazy loading)? I used RTK Query for data fetching and caching.

I initially considered using Redux Toolkit slices for additional state management, but RTK Query covered most needs. I do have experience with Redux Toolkit if deeper state logic is required.

## Performance Optimization
### RTK Query Caching
Implemented RTK Query for all data fetching to leverage automatic caching, deduplication, and background refetching. This minimizes duplicate network requests and improves perceived performance.

### Loading & Error States
Created LoadingScreen and ErrorMessage components with retry capabilities to provide clear feedback to users during slow or failed network operations.

Next Steps: If you think any additional sections or topics should be included, let me know before integrating further changes.