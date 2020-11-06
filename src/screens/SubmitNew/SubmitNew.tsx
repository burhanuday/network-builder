import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import Input from "../../components/UI/TextInput";

export interface SubmitNewProps {}

const SubmitNew: React.FC<SubmitNewProps> = (props) => {
  const [communityTitle, setCommunityTitle] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Community Name</Text>
          <Input
            value={communityTitle}
            placeholder="Community Name"
            onChangeText={setCommunityTitle}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Community Description</Text>
          <Input
            value={communityDescription}
            onChangeText={setCommunityDescription}
            numberOfLines={5}
            multiline={true}
            placeholder="Enter a brief description about this community"
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 12,
  },
  label: {
    color: "rgba(0, 0, 0, 0.7)",
  },
  formGroup: {
    marginVertical: 7,
  },
});

export default SubmitNew;
