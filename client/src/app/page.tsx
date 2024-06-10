import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";

export default function Home() {
  return (
    <main>
      <div className="container">
<LoginForm/>
      </div>
    </main>
  );
}
