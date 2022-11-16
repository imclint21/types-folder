import {useState} from "react";
import Animal from "@types/Animal";
// import Animal from "../@types/Animal"; // <-- this one is working

export default function Home() {
  const [t, setT] = useState<Animal>();
  return (
    <h1>Welcome</h1>
  )
}
