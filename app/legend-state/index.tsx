import { Text } from "react-native";
import Todos, { NewTodo } from "../../components/Todos";

export default function index() {
  return (
    <>
      <Text>Legend-State Test Page</Text>
      <NewTodo />
      <Todos />
    </>
  );
}
