import React from 'react';
import logo from '../logo.svg';

class MyCard extends React.Component {
    render(props) {
        const cardMargin = {
            marginTop : 59+"px",
        };
        const buttonSize = {
            fontSize : 20+"px",
        }
        const imgSize = {
            height : 200+"px",
            width : 200+"px"
        }
        var iterable = 1;
        var stringArray = ['bi bi-', iterable, '-circle-fill'].join('')
        const iterate = (iterVal) => {
            iterVal= iterVal + 1;
            console.log(iterVal);
            return iterVal;
        }
        return (<div class="container text-center" style={cardMargin}>
                    <div class="card">
                            <h5 class="card-header">{this.props.name}</h5>
                            <div class="card-body">
                            <img src={this.props.picture} style={imgSize}/>
                            <h5 class="card-title">{this.props.price}</h5>
                            <a href="#" class="btn btn-dark " onClick={()=>iterate(iterable)}><i class="bi bi-plus-circle" style={buttonSize}></i></a>
                            <i class={stringArray}></i>
                    </div>
                </div>
            </div>);
        }
}   
export default MyCard;
