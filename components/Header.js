import { ConnectButton } from "web3uikit"
export default function Header() {
    return (
        <div>
            <div>去中心化抽奖</div>
            <ConnectButton moralisAuth={false}></ConnectButton>
        </div>
    )
}
