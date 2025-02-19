import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./App.navigator";
export const Navigator = () => {
return (
<NavigationContainer>
<AppNavigator />
</NavigationContainer>
);
};
