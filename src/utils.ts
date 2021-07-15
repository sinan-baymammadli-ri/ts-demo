import { useRouteMatch } from "react-router-dom";

export function useRouteId() {
  const match = useRouteMatch<{ id: string }>();
  return match.params.id;
}
