
// VisibilityToggle, constructor handleToggleVisibility
// Visibility -> false



class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            outcome: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) =>{
            return {
                outcome: !prevState.outcome
            }
        })
    }
    render(){
        return (
            <div>
               <h1>Visibility Toggle</h1>
               <button onClick={this.handleToggleVisibility}>{this.state.outcome ? 'Hide Details' : 'Show Details'}</button>
             {this.state.outcome && <p>Hey there it is me!!</p>}
            </div>
        )
    }

}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
    

// let outcome = false;



// const displayMessage = () => {
//     outcome = !outcome;
//     renderVisibiltyApp();
    
// };



// const renderVisibiltyApp = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={displayMessage}>{outcome ? 'Hide Details' : 'Show Details'}</button>
//         {outcome && <p>Hey there it is me!!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }




// const appRoot = document.getElementById('app');
// renderVisibiltyApp();

