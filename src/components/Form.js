import React from 'react'

const Form = () => {

    const send = () => {
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let text = document.getElementById("text").value;
        if(email.length !== 0 && date.length !== 0 && text.length !== 0){
            alert("Köszönjük!");
        }
    }

  return (
    <div className="formContainer">
        <form>
            <p>
                <label>
                    Név:<br />
                    <input name="email" type="text" id="email" required/>
                </label>
            </p>
            <p>
                <label>
                    Dátum:<br />
                    <input name="date" type="date" id="date" required/>
                </label>
            </p>
            <p>
                <textarea rows={6} id="text" required>

                </textarea>
            </p>
            <p>
                <input type="submit" value="OK" id="submit" onClick={()=> send()} />
            </p> 
        </form>
    </div>
  )
}

export default Form