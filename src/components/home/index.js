import Image from "next/image";
import { useContext } from "react";
import socketIOClient from "socket.io-client";

import { EsquecameContext } from "../../contexts/esquecame";
import Version from "../version/version";

import styles from "./index.module.css";

export default function Home() {
  const contextData = useContext(EsquecameContext);

  function handleClick() {
    contextData.levelUp();
    console.log(contextData);
  }

  function socketLogin(pLogin, pMessage) {
    const socket = socketIOClient("https://push01.cloudrobot.com.br:3333/");
    socket.emit("login", "xxxxx");
    // socket.on("users", data => {
    //   console.log(JSON.parse(data))
    // })
  }

  return (
    <>
      <header>
        <div className={styles.tierHeader}>
          {/* <Image
            src="/rinaldi.png"
            alt=" rinaldi"
            layout="intrinsic"
            width={437}
            height={90}
          /> */}
        </div>
      </header>

      <main className={styles.tierMain}>
        <session className={styles.tierLogo}>
          <Image
            src="/logo.png"
            alt="logo"
            layout="intrinsic"
            width={995}
            height={884}
          />
        </session>

        <session className={styles.tierTitle}>
          <p>
            <Image
              src="/bruno-md.png"
              alt="logo"
              layout="intrinsic"
              width={256}
              height={56}
            />
          </p>
          <p>Experiência do Paciente</p>
          {/* <Link href="/">
            <a>MAIS INFORMAÇÕES</a>
          </Link> */}

          {/* <button id="a" onClick={handleClick}>
            testar context
          </button>

          <button id="b" onClick={socketLogin}>
            testar socket
          </button> */}

          <Version />
        </session>
      </main>
    </>
  );
}
