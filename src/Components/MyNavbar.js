import React from 'react';

class MyNavbar extends React.Component {
    render() {
        const styling = {
            backgroundColor : "black"
        };
        const buttonSize = {
            fontSize : 30+"px",
        }
    return(<nav class="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid">
                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                    <i class="bi bi-cart2" style={buttonSize}></i>
                    </span>
                </div>
            </div>
        </nav>);
    }
}
export default MyNavbar;