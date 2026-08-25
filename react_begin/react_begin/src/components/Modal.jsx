function Modal({children, handleClose}){
    return(
        <div style={{position: "fixed", 
      top: 0, left: 0, width: "100%", height: "100%", 
      backgroundColor: "rgba(0,0,0,0.5)", 
      display: "flex", justifyContent: "center", alignItems: "center"}}>
           <div style={{background: "#fff", padding: "20px", borderRadius: "8px", color: "#000"}}>
            {children}
            <button onClick={handleClose} style={{marginTop: "10px"}}>Yopish</button>
           </div>
        </div>
    )
}
export default Modal