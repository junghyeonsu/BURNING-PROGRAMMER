import React, {Component} from 'react';
import '../styles/Content.css' 
// import { Transition, TransitionGroup } from "react-transition-group";
// import posed, { PoseGroup } from 'react-pose';

/*

https://popmotion.io/pose/learn/react-exit-enter-transitions/
react-pose 참고 사이트 

//tech.devsisters.com/posts/page-navigation-animation
react-transition-group 참고 사이트

*/

// const Shade = posed.div({
//     enter: { opacity: 1 },
//     exit: { 
//         opacity: 0,
//         y : 50,
//         transition: { duration: 1000 } },
//   });

// const Modal = posed.div({
//     enter: { y: 0, opacity: 1, delay: 300 },
//     exit: {
//       y: 50,
//       opacity: 0,
//       transition: { duration: 200 }
//     }
//   });

class Content extends Component {
    state = {
        language : [this.props.language],
    }

    render(){
        return(
            <div className="Content">
                <a href="#">
                    <img src={this.props.image}></img>
                    <br />
                    <div className="Text">
                        {this.props.name}
                    </div>
                </a>
            </div>
        );
    }
}


            // 아래는 나중에 라우터 적용하면 시작
            // <>
            // <TransitionGroup component={null}>
            //     <Transition timeout={{ enter: 300, exit: 300 }} classNames="fade">
            //         { status => (
            //             <div className={`Content ${status}`}>
            //                 <a href="#">
            //                 <img src={this.props.image}></img>
            //                 <br />
            //                 <div className="Text">
            //                     {this.props.name}
            //                 </div>
            //                 </a>
            //             </div>
            //         )}
            //     </Transition>
            // </TransitionGroup>
            // </>

export default Content;