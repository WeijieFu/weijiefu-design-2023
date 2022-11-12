import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import useNavStore from "../../../../state/navigation"
import styles from "../../../../styles/components/Menu/List.module.css"
import ListItem from "./ListItem"
import { data } from "./data"

const List = () => {
  const nav = useNavStore()
  const itemsRef = useRef([])
  itemsRef.current = []

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item)
    }
    // console.log(itemsRef)
  }
  useEffect(() => {
    let tl = gsap.timeline({ delay: 0.75 })
    if (!!nav.current) {
      if (itemsRef.current.length === data[nav.current].length) {
        itemsRef.current.map((item, index) => {
          tl.fromTo(
            item,
            { x: "2rem", opacity: 0 },
            { x: 0, opacity: 1, duration: 1 },
            "-=0.75"
          )
        })
      }
    }
  }, [itemsRef.current])
  return (
    <div className={styles["container"]}>
      {!!nav.current &&
        data[nav.current].map((item, index) => {
          return (
            <ListItem
              data={item}
              index={index}
              key={nav.current + index}
              ref={addToRefs}
            />
          )
        })}
    </div>
  )
}

export default List
