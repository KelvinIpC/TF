import React, { Component }from 'react';


class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:
                return 'Loading';
            case false:
                return 'Click here to use your own toilet';
            default:
                return 'you are in some toilet room';
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" class="left brand-logo">Logo</a>

                    <ul class="right hide-on-med-and-down">
                            <li><a class="waves-effect waves-light btn">Button</a></li>
                            <li><a class="waves-effect waves-light btn">Button <i class="material-icons right">cloud</i></a></li>
                            <li><a class="waves-effect waves-light btn-large">Large Button</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;