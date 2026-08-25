function forma() {
    const handleSubmit =(e)=>{
        e.preventDefault()
        alert("futbolchi malumoti")
    }
    return(
        <form
        onSubmit={handleSubmit}>
            <input
             type="text"
             placeholder="Futbolchi ismi"
             />
             <input
              type="text"
              placeholder="Futbolchi klubi"
              />
             <button type="submit">yuborish</button>
        </form>
    )
}
export default forma