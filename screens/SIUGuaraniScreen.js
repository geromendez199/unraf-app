import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";

export default function SIUGuaraniScreen() {
  const [loading, setLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const webviewRef = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {canGoBack && (
          <TouchableOpacity onPress={() => webviewRef.current.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#00588B" />
          </TouchableOpacity>
        )}
        <Text style={styles.navText}>SIU Guaraní</Text>
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#00588B" />
        </View>
      )}

      <WebView
        ref={webviewRef}
        source={{ uri: "https://guarani.unraf.edu.ar/autogestion/" }}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#F0F0F0",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  navText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00588B",
    marginLeft: 10,
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 10,
  },
});
