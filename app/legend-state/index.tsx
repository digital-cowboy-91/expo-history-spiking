import { Text } from "react-native";
import Todos, { NewTodo } from "../../components/Todos";
import PageTitle from "../../components/PageTitle";

export default function index() {
  return (
    <>
      <PageTitle>Legend-State Test Page</PageTitle>
      <NewTodo />
      <Todos />
    </>
  );
}
