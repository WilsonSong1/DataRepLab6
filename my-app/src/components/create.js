import { useState } from "react";

function Create(){
    //
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    //Printing out submitted values from user input
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(year);
        console.log(poster);

    }

    return(
        <div>
            <h2>
                This is my Create Component.
            </h2>
            {/*Essentially a button to submit user entry*/}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        //Essentially a button to submit user entry changes value for title
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <label>Add Movie Year: </label>
                    <input type="number"
                        className="form-control"
                        value={year}
                        //Changes value for Year
                        onChange={(e) => {setYear(e.target.value) }}
                    />
                    <label>Add Movie Poster: </label>

                    <input type="text"
                        className="form-control"
                        value={poster}
                        //Changes value for Poster
                        onChange={(e) => {setPoster(e.target.value) }}
                    />
                </div>
                <input type="submit" value = "Add movie"/>
            </form>
        </div>
    )

}
export default Create;