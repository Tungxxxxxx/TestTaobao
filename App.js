import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Route from "./src/navigation/Route";
import store from "./src/redux/store/Store";
import { Text, View } from "react-native";
export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>Dit me may</Text>
      </View>
      <Route />
    </Provider>
  );
}
