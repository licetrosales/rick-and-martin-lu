import {ChangeEvent, useState} from "react"

type ActionBarProps = {
    // myCallBackFunction: (searchText: string) => void
    myCallBackFunction(searchText: string): void
}
export default function ActionBar(props: ActionBarProps) {

    const onSearhTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("ActionBar")
        props.myCallBackFunction(event.target.value)

    }
    return (
        <input onChange={onSearhTextChange}/>
    )

}