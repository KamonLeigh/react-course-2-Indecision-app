// count - setup default prop value 0


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleOne = this.handleOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
       const stringNumber = localStorage.getItem('counts');
       const count = parseInt(stringNumber, 10);

       if(!isNaN(count)){
           this.setState(() =>({count}));
       }
    }


    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state.count){
         localStorage.setItem('counts', this.state.count);
        }
    }
    handleOne (){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
        console.log(this)
    }

    handleMinusOne (){
       this.setState((prevState)=>{
           return {
               count : prevState.count - 1
           }
       })
    }

    handleReset (){
        this.setState(() =>{
            return {
                count : 0
            }
        })
    }

    
    render(){

        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () =>{
//     count++;
//    renderCounterApp();
// };

// const minusOne = () =>{
//     count--;
//     renderCounterApp();
// };

// const reset = () =>{
//    count = 0;
//    renderCounterApp();
// };


// const appRoot = document.getElementById('app');


// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);

// };

// renderCounterApp();


