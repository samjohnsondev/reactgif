import React,{ Component } from 'react';
import BoxItem from './BoxItem';
import '../Button.css';

class BoxHolder extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: '',
            gifs: [],
            displayModal: false
        };

        this.clearPosts = this.clearPosts.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.getGif =  this.getGif.bind(this);
    }

    getGif(){
        if(this.state.searchTerm.length !== 0){
            fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=${process.env.REACT_APP_APIKEY}&limit=15`).then((res) =>{
                    
                if(res.status !== 200){
                    throw new Error(res.status + 'error');
                }
            
                res.json().then((data) =>{
                   this.setState({gifs: data.data});
                });
            });
        }
    }

    onInputChange(event){
        this.setState({searchTerm: event.target.value});
    }

    clearPosts(){
        this.setState({
            gifs: []
        });
    }

    render(){
       
        if(this.state.gifs.length >= 1){
            var gifFrame = this.state.gifs.map((gif) => {
                return <BoxItem key={gif.id} alt={gif.slug} gif={gif.images.fixed_height.url} />
            });
        }

        return(
            <div>
                <div className={'seachContainer'}>
                    <button className={'gifButton'} onClick={this.getGif}>Get Gifs!</button>
                    <input className={'gifInput'} onChange={this.onInputChange} />
                </div>
                <div className={'gifContainer'}>
                    {gifFrame}
                </div>
            </div>
            
        )
    }
}

export default BoxHolder;