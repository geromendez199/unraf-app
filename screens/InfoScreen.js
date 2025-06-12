import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InfoScreen() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  const confirmWhatsApp = () => {
    Alert.alert(
      "¿Abrir WhatsApp?",
      "¿Querés enviarle un mensaje a UNRaf por WhatsApp?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sí",
          onPress: () =>
            openLink(
              "https://api.whatsapp.com/send?phone=5493492395946&text=%C2%A1Hola%20UNRaf!%20Tengo%20una%20consulta%20%C2%BFMe%20pueden%20ayudar?"
            ),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Universidad Nacional de Rafaela</Text>
      <Text style={styles.text}>
        📍 Bv. Roca 989, Rafaela, Santa Fe, Argentina
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink("tel:+543492501155")}
      >
        <Ionicons name="call-outline" size={22} color="white" />
        <Text style={styles.buttonText}>Llamar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink("mailto:info@unraf.edu.ar")}
      >
        <Ionicons name="mail-outline" size={22} color="white" />
        <Text style={styles.buttonText}>Enviar e-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink("https://www.unraf.edu.ar")}
      >
        <Ionicons name="globe-outline" size={22} color="white" />
        <Text style={styles.buttonText}>Visitar sitio web</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.whatsapp]}
        onPress={confirmWhatsApp}
      >
        <Ionicons name="logo-whatsapp" size={22} color="white" />
        <Text style={styles.buttonText}>Enviar WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00588B",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00588B",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  whatsapp: {
    backgroundColor: "#25D366",
  },
});
