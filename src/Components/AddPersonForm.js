import React from 'react';

function AddPersonForm(props) {
    const [ person, setPerson ] = React.useState("");
  
    function handleChange(event) {
        setPerson(event.target.value);
    }
  
    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(person);
        setPerson('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Добавить контакт" 
        onChange={handleChange} 
        value={person} />
        <button type="submit">Добавить</button>
        </form>
        );
  }

  export default AddPersonForm;