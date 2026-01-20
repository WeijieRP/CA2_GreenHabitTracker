import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../../theme";
import Card from "../../Components/Card";

const BASE_URL = "https://ca2-greenhabittracker.onrender.com";

const LEAVES_BG = require("../screens/assets/greenLeave.jpg");
const ADD_ILLUS = require("../screens/assets/Illusatrton.png");

function toYMD(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function AddHabitScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [notes, setNotes] = useState("");

  // ✅ date picker state
  const [dateObj, setDateObj] = useState(new Date());
  const [date, setDate] = useState(toYMD(new Date()));
  const [showPicker, setShowPicker] = useState(false);

  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const res = await fetch(`${BASE_URL}/categories`);
      const data = await res.json();
      const list = Array.isArray(data) ? data : [];
      setCategories(list);
      if (list.length > 0) setCategoryId(String(list[0].id));
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Failed to load categories");
    } finally {
      setLoadingCats(false);
    }
  }

  function onPickDate(event, selectedDate) {
    // Android: event.type can be "dismissed"
    setShowPicker(false);

    if (!selectedDate) return; // dismissed
    setDateObj(selectedDate);
    setDate(toYMD(selectedDate));
  }

  async function onSave() {
    if (!title.trim()) return Alert.alert("Missing", "Please enter habit title.");
    if (!categoryId) return Alert.alert("Missing", "Please choose a category.");

    setSaving(true);
    try {
      const res = await fetch(`${BASE_URL}/habits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          category_id: Number(categoryId),
          date, // ✅ YYYY-MM-DD
          notes: notes.trim() || null,
        }),
      });

      const data = await res.json();
      if (!res.ok) return Alert.alert("Error", data?.message || "Failed to add habit");

      Alert.alert("Success", "Habit added!");
      navigation.goBack();
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Failed to add habit");
    } finally {
      setSaving(false);
    }
  }

  return (
    <ImageBackground source={LEAVES_BG} resizeMode="cover" style={styles.bg}>
      <View style={styles.overlay} />

      <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.heroPill}>Add Habit</Text>
            <Text style={styles.heroTitle}>Log a Green Action 🌿</Text>
            <Text style={styles.heroSub}>
              Track sustainable behaviours aligned with Singapore Green Plan 2030.
            </Text>

            <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={18} color={THEME.text} />
              <Text style={styles.backText}>Back</Text>
            </Pressable>
          </View>

          <Image source={ADD_ILLUS} style={styles.heroImg} />
        </View>

        {/* Form */}
        <Card style={styles.card}>
          <Text style={styles.title}>Add a Green Habit</Text>
          <Text style={styles.sub}>Log one eco-friendly action you did today.</Text>

          <Text style={styles.label}>Habit Title *</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Used MRT instead of ride-hailing"
            placeholderTextColor="#94A3B8"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Category *</Text>
          {loadingCats ? (
            <View style={styles.row}>
              <ActivityIndicator />
              <Text style={{ marginLeft: 10, color: THEME.subtext, fontWeight: "800" }}>
                Loading categories…
              </Text>
            </View>
          ) : (
            <View style={styles.pickerWrap}>
              <Picker selectedValue={categoryId} onValueChange={(v) => setCategoryId(String(v))}>
                {categories.map((c) => (
                  <Picker.Item key={c.id} label={`${c.name}`} value={String(c.id)} />
                ))}
              </Picker>
            </View>
          )}

          {/* ✅ Real Date Picker */}
          <Text style={styles.label}>Date *</Text>

          <Pressable style={styles.dateField} onPress={() => setShowPicker(true)}>
            <Ionicons name="calendar-outline" size={18} color={THEME.subtext} />
            <Text style={styles.dateText}>{date}</Text>
            <Ionicons name="chevron-down" size={18} color={THEME.subtext} />
          </Pressable>

          {showPicker && (
            <DateTimePicker
              value={dateObj}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onPickDate}
            />
          )}

          <Text style={styles.label}>Notes (optional)</Text>
          <TextInput
            style={[styles.input, { height: 92 }]}
            placeholder="Small details help you reflect…"
            placeholderTextColor="#94A3B8"
            value={notes}
            onChangeText={setNotes}
            multiline
          />

          <Pressable style={styles.primaryBtn} onPress={onSave} disabled={saving}>
            <Text style={styles.primaryBtnText}>{saving ? "Saving..." : "Save Habit"}</Text>
          </Pressable>

          <Pressable style={styles.secondaryBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.secondaryText}>Cancel</Text>
          </Pressable>
        </Card>

        <View style={{ height: 18 }} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: THEME.bg },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(244, 251, 247, 0.86)" },
  screen: { padding: 16, paddingTop: 12 },

  hero: {
    borderRadius: 22,
    padding: 14,
    borderWidth: 1,
    borderColor: "#D7EFE0",
    backgroundColor: "#E8FFF0",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 2,
  },
  heroText: { flex: 1 },
  heroPill: {
    alignSelf: "flex-start",
    backgroundColor: "#DFFAE7",
    borderWidth: 1,
    borderColor: "#B7F2C9",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: "900",
    color: "#166534",
    fontSize: 12,
  },
  heroTitle: { marginTop: 10, fontSize: 18, fontWeight: "900", color: THEME.text },
  heroSub: { marginTop: 6, color: THEME.subtext, fontWeight: "700", lineHeight: 18 },
  heroImg: { width: 120, height: 140, resizeMode: "contain", alignSelf: "flex-end" },

  backBtn: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFFAA",
    borderWidth: 1,
    borderColor: "#E6EEF0",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
  },
  backText: { fontWeight: "900", color: THEME.text },

  card: { marginTop: 14 },

  title: { fontSize: 18, fontWeight: "900", color: THEME.text },
  sub: { marginTop: 4, color: THEME.subtext, fontWeight: "600", marginBottom: 12 },

  label: { fontWeight: "900", marginTop: 10, color: THEME.text },

  input: {
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 6,
    color: THEME.text,
    fontWeight: "700",
    backgroundColor: "#FFFFFF",
  },

  pickerWrap: {
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 14,
    overflow: "hidden",
    marginTop: 6,
    backgroundColor: "#fff",
  },
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 12 },

  // ✅ Date field (looks like input but opens picker)
  dateField: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: { fontWeight: "800", color: THEME.text },

  primaryBtn: {
    marginTop: 16,
    backgroundColor: THEME.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primaryBtnText: { color: "#fff", fontWeight: "900" },

  secondaryBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: THEME.border,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  secondaryText: { fontWeight: "900", color: THEME.subtext },
});
