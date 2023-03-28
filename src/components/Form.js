import React from 'react'

const Form = () => {

    const send = () => {
        let name = document.getElementById("name").value;
        let date = document.getElementById("date").value;
        let text = document.getElementById("text").value;
        if(name.length !== 0 && date.length !== 0 && text.length !== 0){
            alert("Köszönjük a megkeresését!");
        }
    }

  return (
    <div className="formContainer">
        <form>
            <p>
                <label>
                    Név:<br />
                    <input name="name" type="text" id="name" required placeholder="Név..."/>
                </label>
            </p>
            <p>
                <label>
                    Dátum:<br />
                    <input name="date" type="date" id="date" required/>
                </label>
            </p>
            <p> 
                <label>
                    Üzenet:<br />
                    <textarea rows={6} id="text" required placeholder="Ide írd az üzeneted...">
                    </textarea>
                </label>
            </p>
            <p>
                <input type="submit" value="OK" id="submit" onClick={()=> send()} />
            </p> 
        </form>
    </div>
  )
}

export default Form