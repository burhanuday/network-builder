import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import Button from "../../components/UI/Button";
import Select from "../../components/UI/Select";
import Input from "../../components/UI/TextInput";
import { categories } from "../../constants/categories";
import { types } from "../../constants/types";

export interface SubmitNewProps {}

const SubmitNew: React.FC<SubmitNewProps> = (props) => {
  const [communityTitle, setCommunityTitle] = useState<string>("");
  const [communityDescription, setCommunityDescription] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Community name</Text>
          <Input
            value={communityTitle}
            placeholder="Community name"
            onChangeText={setCommunityTitle}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Community description</Text>
          <Input
            value={communityDescription}
            onChangeText={setCommunityDescription}
            numberOfLines={5}
            multiline={true}
            placeholder="Enter a brief description about this community"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Category</Text>
          <Select
            selectedValue={category}
            onValueChange={(value) => setCategory(value as string)}
            options={categories.map((c) => ({
              label: c,
              value: c.toLowerCase(),
              key: c.toLowerCase(),
            }))}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Platform</Text>
          <Select
            selectedValue={type}
            onValueChange={(value) => setType(value as string)}
            options={types.map((t) => ({
              label: t,
              value: t.toLowerCase(),
              key: t.toLowerCase(),
            }))}
          />
        </View>

        <View style={styles.formGroup}>
          <Button style={styles.submit}>
            <Text style={styles.submitText}>Submit</Text>
          </Button>
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
  submit: {
    backgroundColor: "#3498db",
  },
  submitText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SubmitNew;
