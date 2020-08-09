import React, {Component} from 'react';
import '../styles/ToggleButton.css' 

class ToggleButton extends Component {

    state = {
        active : true,
        one_degree: 45,
        one_translate_x : 5,
        one_translate_y : 5,
        two_opacity : 0,
        three_degree : -45,
        three_translate_x : 7,
        three_translate_y : -8,
    }

    /* 버튼을 클릭했을 때 
    active가 true냐, false냐에 따라 
    버튼의 state가 바뀌면서 애니메이션이 실행되는 방식 */
    onClickButton = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        if(this.state.active){
            this.setState({ 
                one_degree: 0,
                one_translate_x : 0,
                one_translate_y : 0,
                two_opacity : 100,
                three_degree : 0,
                three_translate_x : 0,
                three_translate_y : 0,

             });
        } else {
            this.setState({ 
                one_degree: 45,
                one_translate_x : 5,
                one_translate_y : 5,
                two_opacity : 0,
                three_degree : -45,
                three_translate_x : 7,
                three_translate_y : -8,
             });
        }
    }

    render(){
        /*        ES6 문법 
        (this.state)를 생략하게 해줌 */
        const { 
            active, one_degree, one_translate_x, one_translate_y,
            two_opacity, three_degree, three_translate_x, three_translate_y
        } = this.state;

        /* 첫번째 막대 스타일링 */
        const styles_one = {
            transform: `rotate(${one_degree}deg) translate(${one_translate_x}px, ${one_translate_y}px)` 
        }

        /* 두번째 막대 스타일링 */
        const styles_two = {
            opacity: `${two_opacity}` 
        }

        /* 세번째 막대 스타일링 */
        const styles_three = {
            transform: `rotate(${three_degree}deg) translate(${three_translate_x}px, ${three_translate_y}px)` 
        }

        return(
            <div onClick={this.onClickButton} className="toggle">
                <div style={styles_one}></div>
                <div style={styles_two}></div>
                <div style={styles_three}></div>
            </div>
        );
    }
}

export default ToggleButton;