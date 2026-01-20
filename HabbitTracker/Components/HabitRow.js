import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

export default function HabitRow({ item, onEdit, onDelete }) {
  const title = item?.title || "";
  const notes = item?.notes || "";
  const cat = item?.category_name || "Category";
  const date = formatDate(item?.date);

  return (
    <Pressable
      style={styles.card}
      onPress={onEdit}
      android_ripple={{ color: "#00000010" }}
    >
      {/* LEFT content */}
      <View style={{ flex: 1 }}>
        {/* ✅ Top small row: category pill only */}
        <View style={styles.topRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText} numberOfLines={1}>
              {cat}
            </Text>
          </View>
        </View>

        {/* ✅ Title BELOW */}
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        {/* ✅ Date */}
        <Text style={styles.date}>{date}</Text>

        {/* ✅ Notes */}
        {notes ? (
          <Text style={styles.notes} numberOfLines={2}>
            {notes}
          </Text>
        ) : (
          <Text style={styles.notesPlaceholder} numberOfLines={1}>
            No notes added
          </Text>
        )}
      </View>

      {/* ✅ Right: icon delete */}
      <Pressable
        onPress={(e) => {
          e.stopPropagation(); // prevent opening edit screen
          onDelete();
        }}
        style={styles.iconBtn}
        android_ripple={{ color: "#00000010" }}
      >
        <Ionicons name="trash-outline" size={18} color={THEME.danger} />
      </Pressable>
    </Pressable>
  );
}

function formatDate(iso) {
  if (!iso) return "";
  const d = String(iso).slice(0, 10); // supports "2026-01-12T..."
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E6EEF0",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 8,
  },

  pill: {
    backgroundColor: "#DFFAE7",
    borderWidth: 1,
    borderColor: "#B7F2C9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    maxWidth: 160,
  },
  pillText: {
    fontWeight: "900",
    color: "#166534",
    fontSize: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "900",
    color: THEME.text,
    lineHeight: 20,
  },

  date: {
    marginTop: 8,
    fontWeight: "800",
    color: THEME.subtext,
  },

  notes: {
    marginTop: 8,
    fontWeight: "600",
    color: THEME.subtext,
    lineHeight: 18,
  },

  notesPlaceholder: {
    marginTop: 8,
    fontWeight: "600",
    color: "#94A3B8",
    fontStyle: "italic",
  },

  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FDA4AF",
    backgroundColor: "#FFF1F2",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    margin:"auto",
    overflow: "hidden",
  },
});
