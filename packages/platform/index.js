import { AppRegistry, Platform } from "react-native";
import App from "./src/App";

AppRegistry.registerComponent("platform", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("platform", {
    rootTag: document.getElementById("root")
  });
}
