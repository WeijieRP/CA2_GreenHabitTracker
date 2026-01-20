import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

export default function ProgressRing({ value = 0, label = "goal", size = 86 }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);

  const outer = size;
  const inner = Math.round(size * 0.82);
  const border = Math.max(6, Math.round(size * 0.08));

  return (
    <View style={styles.wrap}>
      <View style={[styles.ringOuter, { width: outer, height: outer, borderRadius: outer / 2 }]}>
        <View
          style={[
            styles.ringInner,
            { width: inner, height: inner, borderRadius: inner / 2, borderWidth: border },
          ]}
        >
          <Text style={styles.big}>{pct}%</Text>
          <Text style={styles.small}>{label}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", justifyContent: "center" },
  ringOuter: {
    backgroundColor: THEME.primarySoft2 || "#E8FFF0",
    alignItems: "center",
    justifyContent: "center",
  },
  ringInner: {
    borderColor: THEME.primary,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  big: { fontSize: 16, fontWeight: "900", color: THEME.text },
  small: { marginTop: 2, fontSize: 11, fontWeight: "800", color: THEME.subtext },
});
