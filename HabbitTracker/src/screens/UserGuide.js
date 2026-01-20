import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../theme";
import Card from "../../Components/Card";

const LEAVES_BG = require("../screens/assets/greenLeave.jpg");
const GUIDE_ILLUS = require("../screens/assets/Person1.png");

export default function UserGuide({ navigation }) {
  return (
    <ImageBackground source={LEAVES_BG} resizeMode="cover" style={styles.bg}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.heroPill}>User Guide</Text>
            <Text style={styles.heroTitle}>How Green Habit Tracker Works</Text>
            <Text style={styles.heroSub}>
              Build sustainable routines aligned with the Singapore Green Plan 2030.
            </Text>
            <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={18} color={THEME.text} />
              <Text style={styles.backText}>Back</Text>
            </Pressable>
          </View>
          <Image source={GUIDE_ILLUS} style={styles.heroImg} />
        </View>

        {/* Step 1 */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="home-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>1. Dashboard Overview</Text>
          </View>
          <Text style={styles.stepText}>
            The Dashboard is your home screen. It shows your weekly progress, total habits logged,
            and ongoing eco-friendly actions. Use the filter chips to narrow by category and the
            counters to see <Text style={styles.bold}>Total Logged</Text>,
            <Text style={styles.bold}> This Week</Text>, and your <Text style={styles.bold}>Top Category</Text>.
          </Text>
        </Card>

        {/* Step 2 */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="add-circle-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>2. Add a Green Habit</Text>
          </View>
          <Text style={styles.stepText}>
            Tap <Text style={styles.bold}>“Add”</Text> to log an eco‑friendly action such as using public transport,
            recycling, or saving electricity. Select a category, pick the date, and optionally add notes to reflect on
            your behaviour. You can always edit or delete this later.
          </Text>
        </Card>

        {/* Step 3 */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="create-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>3. Edit Existing Habits</Text>
          </View>
          <Text style={styles.stepText}>
            Need to make changes? Tap on a habit from the list and choose <Text style={styles.bold}>Edit</Text> to update its
            title, category, date, or notes. This helps keep your sustainability log accurate and meaningful.
          </Text>
        </Card>

        {/* Step 4 */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="trash-outline" size={22} color={THEME.danger} />
            <Text style={styles.stepTitle}>4. Delete Habits</Text>
          </View>
          <Text style={styles.stepText}>
            Logged something by mistake? Use <Text style={styles.bold}>Delete</Text>. A confirmation prompt appears to prevent
            accidental removals. Deleted items are removed from your stats immediately.
          </Text>
        </Card>

        {/* Step 5 */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="analytics-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>5. Track Weekly Progress</Text>
          </View>
          <Text style={styles.stepText}>
            Your weekly goal keeps you motivated. The stats screen aggregates actions from
            <Text style={styles.bold}> Monday to Sunday</Text> and shows a mini bar chart of your activity this week, plus
            your top‑logged category.
          </Text>
        </Card>

        {/* Filters & Categories */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="filter-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>6. Filters & Categories</Text>
          </View>
          <Text style={styles.stepText}>
            Tap the category chips (e.g., Energy, Transport, Recycling) to filter the list. Use
            <Text style={styles.bold}> All</Text> to reset. Category badges on each habit card help you scan quickly.
          </Text>
        </Card>

        {/* Data & Sync */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="cloud-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>7. Data & Sync</Text>
          </View>
          <Text style={styles.stepText}>
            The app syncs with the server whenever you open the Dashboard, pull‑to‑refresh the list, or make changes
            (add/edit/delete). If a network error occurs, you’ll see a friendly alert—simply retry when you’re online.
          </Text>
        </Card>

        {/* Tips */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="bulb-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>Pro Tips</Text>
          </View>
          <Text style={styles.stepText}>
            • Log actions right after you do them—consistency builds momentum.{"\n"}
            • Use concise titles (e.g., “Took MRT instead of car”).{"\n"}
            • Add a short note to capture context (what made it easy or hard).{"\n"}
            • Review your stats weekly to spot patterns and set a simple target for the next week.
          </Text>
        </Card>

        {/* FAQ */}
        <Card style={styles.card}>
          <View style={styles.stepHeader}>
            <Ionicons name="help-circle-outline" size={22} color={THEME.primary} />
            <Text style={styles.stepTitle}>FAQ</Text>
          </View>
          <Text style={styles.stepText}>
            <Text style={styles.bold}>Q: Do edits affect my statistics?</Text>{"\n"}
            Yes. When you edit or delete a habit, the dashboard and stats recalculate automatically.{"\n\n"}
            <Text style={styles.bold}>Q: What counts as “This Week”?</Text>{"\n"}
            Actions from the last 7 days on the home screen, and Monday→Sunday on the stats screen.{"\n\n"}
            <Text style={styles.bold}>Q: Why don’t I see new categories?</Text>{"\n"}
            Categories are fetched from the server; pull down to refresh the list if needed.
          </Text>
        </Card>

        {/* Closing */}
        <Card style={styles.card}>
          <Text style={styles.finalTitle}>🌱 Build Greener Habits Daily</Text>
          <Text style={styles.stepText}>
            Small actions add up. By consistently logging green habits, you contribute to a more sustainable future while
            building awareness of your daily choices.
          </Text>
          <Pressable style={styles.primaryBtn} onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.primaryBtnText}>Go to Dashboard</Text>
          </Pressable>
        </Card>

        <View style={{ height: 20 }} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: THEME.bg },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(244, 251, 247, 0.86)",
  },
  screen: { padding: 16, paddingTop: 12 },
  hero: {
    borderRadius: 22,
    padding: 14,
    borderWidth: 1,
    borderColor: "#D7EFE0",
    backgroundColor: "#E8FFF0",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
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
  heroSub: { marginTop: 6, color: THEME.subtext, fontWeight: "700" },
  heroImg: { width: 110, height: 130, resizeMode: "contain" },
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
  stepHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  stepTitle: { fontSize: 15, fontWeight: "900", color: THEME.text },
  stepText: {
    color: THEME.subtext,
    fontWeight: "700",
    lineHeight: 18,
  },
  finalTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: THEME.text,
    marginBottom: 6,
  },
  primaryBtn: {
    marginTop: 14,
    backgroundColor: THEME.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primaryBtnText: { color: "#fff", fontWeight: "900" },
  bold: { fontWeight: "900", color: THEME.text },
});
