import { useWeb3Contract } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
export default function LotteryEntrance() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainIdDec = parseInt(chainId)
    const raffleAddress = chainIdDec in contractAddresses ? contractAddresses[chainIdDec][0] : null
    console.log(raffleAddress)
    const [entranceFee, setEntranceFee] = useState("0")
    // const {runContractFunction:enterRaffle}=useWeb3Contract({
    //     abi:abi,
    //     contractAddress:raffleAddress,
    //     functionName:"enterRaffle",
    //     params:{},
    //     msgValue:
    // })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            async function updateUI() {
                const entranceFeeFromCall = (await getEntranceFee()).toString()
                setEntranceFee(entranceFeeFromCall)
            }
            updateUI()
        }
    }, [isWeb3Enabled])

    return <div>Hi from lottery entrance:{entranceFee}</div>
}
