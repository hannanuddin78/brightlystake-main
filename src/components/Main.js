import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dark from './Theme/Dark/Dark';
import Light from './Theme/Light/Light';
import { IoIosMoon,IoIosSunny } from "react-icons/io";


class Main extends Component {
    state = {
        them: '',
    }

    toggleModal = () => {
        if (localStorage.getItem("themchoose-16354968743116546") == 1) {
            localStorage.setItem("themchoose-16354968743116546",2)
            this.setState({
        them:'light'
    })
        } else {
            localStorage.setItem("themchoose-16354968743116546",1)
            this.setState({
        them:'dark'
    })
        }
    }

    componentDidMount(){
        if (localStorage.getItem("themchoose-16354968743116546") == 1) {
            this.setState({
                   them:'dark'
              });
        } else {
            this.setState({
        them:'light'
    })
        }
    }

    render(){
        let  button =  <button className='thembutton' onClick={this.toggleModal}>{(this.state.them == 'light') ? <IoIosMoon style={{ color:'black' }} /> : <IoIosSunny/>  }</button>
        return (
            <div className={this.state.them}>
                {button}
                {(this.state.them == 'dark') ? <Light /> : <Dark/>  }
                
            </div>
        )
    }
}


export default Main;