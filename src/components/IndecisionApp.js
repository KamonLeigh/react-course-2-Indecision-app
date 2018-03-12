import React from 'react';
import AddOptions from './AddOptions';
import Header from './/Header';
import Action from './Action';
import Options from './Options';
import OptionModal from  './OptionModal';






export default class IndecisionApp extends React.Component{
    
    state = {
        options : [],
        selectedOption: undefined
    }
    
   
    handleDeleteOptions = () => {
        this.setState(()=> ({options:[]}))
    }
   
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

   
    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random];
        // return alert(option);
        // Use setState to set selectedOption

        this.setState(() => ({ 
            selectedOption: option
        }));
    }

    handleAddOption = (option) =>{
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

    clearSelectedOption = () =>{
        this.setState(() => ({
            selectedOption: undefined
        }));
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
 
     componentDidUpdate = (preProps, prevState) => {
         if(prevState.options.length !== this.state.options.length){
             const json = JSON.stringify(this.state.options);
             localStorage.setItem('options', json);
         }
         
         
     }
    //handleDelateOptions
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header  subtitle={subtitle}/>
                <div className="container">
                    <Action  
                    hasOption = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options options ={this.state.options} 
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOptions 
                        handleAddOption = {this.handleAddOption}
                        />
                    </div> 
                    <OptionModal clearSelectedOption={this.clearSelectedOption}
                    selectedOption={this.state.selectedOption}
                    />
                </div>
            </div>
        );
    }
}















