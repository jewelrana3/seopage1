import { useEffect, useState } from "react";

export default function useData() {
  const [head, setHead] = useState([]);
  useEffect(() => {
    fetch("head.json")
      .then((res) => res.json())
      .then((head) => {
        setHead(head);
      });
  }, []);
  return [head];
}
