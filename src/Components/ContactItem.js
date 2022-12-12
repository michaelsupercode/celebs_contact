import React, { useState } from "react";
import ContactItem from "./ContactList";
import contactData from "../Data/data.json"

const FameList = () => {

    const [contactArr, setContactArr] = useState(contactData.slice(0, 5))

    const [randomArr, setRandomArr] = useState(contactData)

    const [atoz, setAtoz] = useState(true)


    const addRandom = () => {
        let randomSort = Math.floor(Math.random() * randomArr.length)
        let newArr = contactArr.slice()


        console.log(randomSort);
        newArr.unshift(randomArr[randomSort]) 

        let newRandomArr = randomArr.slice()
        newRandomArr.splice(randomSort, 1)

        setRandomArr(newRandomArr)
        setContactArr(newArr)
    }



    const handleSort = () => {
        if (atoz) {
            const newArr = contactArr.slice()
            newArr.sort((elt1, elt2) => {
                let a = elt1.name.toUpperCase()
                let b = elt2.name.toUpperCase()
                if (a < b) {
                    return 1
                } else if (a > b) {
                    return -1
                } else {
                    return 0
                }
            })
            setContactArr(newArr)
            setAtoz(!atoz)
        } else {
            const newArr = contactArr.slice()
            newArr.sort((elt1, elt2) => {
                let a = elt1.name.toUpperCase()
                let b = elt2.name.toUpperCase()
                if (a < b) {
                    return -1
                } else if (a > b) {
                    return 1
                } else {
                    return 0
                }
            })
            setContactArr(newArr)
            setAtoz(!atoz)
        }
    }

    const deleteContact = (popularity) => {
        const newArr = contactArr.filter(contact => contact.popularity !== popularity)
        setContactArr(newArr)
    }



    return (
        <>
        <section id="contact-list">
            <input type="button" className="btn" value="Add random contact" onClick={addRandom} />
            <input type="button" className="btn" value="Sort By Name" onClick={handleSort} />
            <div>
                <h3>Picture</h3>
                <h3>Name</h3>
                <h3>Popularity</h3>
            </div>
        </section>

        <section id="celebCard">
            {contactArr.map((contact, i) =>
                <ContactItem
                    key={i}
                    pictureUrl={contact.pictureUrl}
                    name={contact.name}
                    popularity={contact.popularity}
                    deleteContact={deleteContact}
                    
                />
            )}
        </section>
        </>
    )
}

export default FameList



