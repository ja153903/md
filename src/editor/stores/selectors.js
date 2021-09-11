import { useSelector } from "react-redux";

import { EDITOR } from "./index";

export const useSelectTitle = () =>
  useSelector((state) => state[EDITOR]?.title ?? "");
export const useSelectContent = () =>
  useSelector((state) => state[EDITOR]?.content ?? "");
