import React, {Component} from 'react';
import { Image } from 'react-native';


class Logo extends Component{
    constructor(props){
        super(props);
        this.state = {
            logo:require('./../../assets/images/logo2.png')
        }

    };
    render(){
        return(
            <Image source={this.state.logo} 
                    style={{height:this.props.altura,
                            width:this.props.largura,
                            padding:100}} 
            />
        );
    }

}

export default Logo;