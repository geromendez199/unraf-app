import React, { useState, useRef } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

export default function InicioScreen() {
  const [loading, setLoading] = useState(true);
  const webviewRef = useRef(null);
  const navigation = useNavigation();

  const handleNavigation = (navState) => {
    const url = navState.url;

    // Detectar URLs importantes y redirigir
    if (url.includes("campusvirtual.unraf.edu.ar")) {
      webviewRef.current.stopLoading();
      navigation.navigate("Campus Virtual");
    } else if (url.includes("guarani.unraf.edu.ar")) {
      webviewRef.current.stopLoading();
      navigation.navigate("Guaraní");
    } else if (url.includes("calendario")) {
      webviewRef.current.stopLoading();
      navigation.navigate("Calendario");
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#00588B" />
        </View>
      )}
      <WebView
        ref={webviewRef}
        source={{ uri: "https://www.unraf.edu.ar/" }}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={handleNavigation}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 10,
  },
});
