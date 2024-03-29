import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
//import ManualHeader from "../components/ManualHeader"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManualHeader />*/}
            <Header />
            <LotteryEntrance />
            {/**Header connect button */}
        </div>
    )
}
