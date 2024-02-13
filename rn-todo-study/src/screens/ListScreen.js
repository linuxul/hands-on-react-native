import { Alert, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmptyList from "../components/EmptyList";
import List from "../components/List";
import InputFAB from "../components/InputFAB";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [todos, setTodos] = useState([]);
  const { getItem, setItem } = useAsyncStorage("todos");

  const [isBottom, setIsBottom] = useState(false);

  const save = async data => {
    try {
      await setItem(JSON.stringify(data));
      setTodos(data);
    } catch (error) {
      conlose.log("error : " + error);
      Alert.alert("저장하기 실패", "데이터 자장에 실패했습니다.");
    }
  };

  const load = async () => {
    try {
      const data = await getItem();
      const todos = JSON.parse(data || "[]");
      setTodos(todos);
    } catch (error) {
      conlose.log("error : " + error);
      Alert.alert("불러오기 실패", "데이터 불러오기에 실패했습니다.");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onInsert = task => {
    const id = nanoid();
    const newTodos = [{ id, task, isDone: false }, ...todos];
    save(newTodos);
  };

  const onDelete = id => {
    const newTodos = todos.filter(item => item.id !== id);
    save(newTodos);
  };

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? (
        <List data={todos} setIsBottom={setIsBottom} onDelete={onDelete}></List>
      ) : (
        <EmptyList></EmptyList>
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom}></InputFAB>
    </View>
  );
};

export default ListScreen;
