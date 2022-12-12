const ContactItem = (props) => {
    return (
        <article id="contactItem">
            {/* <img src={props.pictureUrl} alt="photp" /> */}
            <img src={props.pictureUrl}
                onError={(e) => (e.target.onerror = null, e.target.src = "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")} alt="photo" />
            <h6>{props.name}</h6>
            <h5>{props.popularity.toFixed(2)}</h5>
            <input className="delete-btn btn" type="button" value="Delete" onClick={() => props.deleteContact(props.popularity)} />
        </article>
    )
}
export default ContactItem