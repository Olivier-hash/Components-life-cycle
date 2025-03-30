// ComponentDidMount(): is a lifecycle method in React that is called after a component
// its common uses is for fetching data, setting up subscriptions,timers
import React,{Component} from "react";

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true
        };
    }

    componentDidMount(){
        // simulating API call
        setTimeout(() =>{
            this.setState({data: "Fetched Data", loading: false});
        },2000);
    }

    componentDidUpdate(prevProps){
        if (prevProps.id !== this.props.id){
            console.log("ID prop changed! Fetch new Data...");
            
        }
    }

   render(){
    return(
        <div>
        {this.state.loading ? <p>loading ...</p> : <p>{this.state.data}</p>}
        </div>
    );

   }
}

export default DataFetcher;