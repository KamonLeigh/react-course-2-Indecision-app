

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick =  this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    
    componentDidMount(){
       
       try{
        const json =  localStorage.getItem('options');
        const options = JSON.parse(json);

        if(options){
            this.setState(()=>({options}));
        }

       } catch(e){

            //Do nothing.
       }
       
       
       
    }

    componentDidUpdate(preProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
        
    }

    handleDeleteOptions(){
        this.setState(()=> ({option:[]}))
    }
    componentWillUnmount(){
        console.log('componentWillunmount');
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

   
    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random];
        return alert(option);
    }

    handleAddOption(option){

        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

    //    this.setState((prevState) => {
    //     return {
    //         options: prevState.options.concat(option)
    //     }
    //    });

       this.setState(prevState => ({options: prevState.options.concat(option)})); 
    }

    
    //handleDelateOptions
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header  subtitle={subtitle}/>
                <Action  
                hasOption = {this.state.options.length > 0}
                handlePick = {this.handlePick}
                />
                <Options options ={this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOptions 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}



const Header = (props) =>{
    return (
        <div> 
            <h1>{props.title}</h1>
           {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}


Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOption}
            >
            What Should I do?
            </button>
        </div>
    );
}


// Add Remove All Button
// Setup handle remove all -> alert some message
// setp up onclick to fire method


const Options = (props) => {
    return (
        <div>
             <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Plesae add an option to get started </p>}
             {
              
              props.options.map(option => (
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOption = {props.handleDeleteOption}
                />
              ))
          }
          
        </div>
    )
}


const Option = (props) =>{
    return (
        <div>
            {props.optionText}
            <button onClick={(e) =>{
                    props.handleDeleteOption(props.optionText);
                }}>
            Remove
            </button>
        </div>
    )
}


// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined
        };
    }
    
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim() ;
        const error =  this.props.handleAddOption(option);


        this.setState(()=>({error}))

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
               </form>
            </div>
        )
    }
}





// Options -> Options component here
// Add Option -> AddOption component here
// Option -> Option component here

// const User = (props) => {
//     return (
//         <div>
//         <p>Name:{props.name}</p>
//         <p>Age: {props.age}</p>
//         </div>
//     )
// }


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));



class Oldsyntax {
    constructor(){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting(){
        return `Hi. My name is ${this.name}`
    }
}

const oldsyntax = new Oldsyntax();


const getGreeting = oldsyntax.getGreeting;

console.log(getGreeting());

// -------

class NewSytax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}

const newSytax = new NewSytax();
const newGetGreeting = newSyntax.getGreeting;

console.log(newGetGreeting());