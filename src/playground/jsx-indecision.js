console.log('App.ja is running!')

//JSX - javascript XML


    //Create app object title/subtitle
    //use title/subtitle in the template
    //render template


// if statements
// ternary operators 
// logical and operator

// only render the subtitle (and p tag) if subtitle exiat - logical and operator
// render new p tag -  if options.length > 0 'Here are your options' 'No options' 



const story = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options:[]
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * story.options.length);
    const option = story.options[randomNum];
    alert(option);
};

const renderIndecisionApp = () =>{
    const template = (
        <div>
            <h1>{story.title}</h1>
           {story.subtitle &&  <p>{story.subtitle}</p>}
            <p>{story.options.length > 0? 'Here are your options' : 'No Options'}</p>
            <button disabled = {story.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeItems}>Remove All</button>
            <ol>
                {
                    story.options.map((element, i ) => <li key={i}>{element}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
         </div>
    );
    ReactDOM.render(template, appRoot);

}

const removeItems = ()=>{
    story.options = [];
    renderIndecisionApp();
}

const onFormSubmit = (e) => {
    e.preventDefault();
   
    const option = e.target.elements.option.value;

    if(option){
        story.options.push(option);
        e.target.elements.option.value = ''
        renderIndecisionApp();
    }
};


// Create "Remove All" button above list
// on click  -> wipe the array -> rerender





const appRoot = document.getElementById('app');

renderIndecisionApp();
// Create render functio that renders the new jsx
// Call it right away
// Call it after options array added to
