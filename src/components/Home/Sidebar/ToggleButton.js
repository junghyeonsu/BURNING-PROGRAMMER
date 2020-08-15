import React, {Component} from 'react';
import '../../../styles/ToggleButton.css' 
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class ToggleButton extends Component {
    render(){
        const { store } = this.props;

        /* 첫번째 막대 스타일링 */
        var styles_one = {
            transform: `rotate(${store.one_degree}deg) translate(${store.one_translate_x}px, ${store.one_translate_y}px)` 
        }

        /* 두번째 막대 스타일링 */
        var styles_two = {
            opacity: `${store.two_opacity}` 
        }

        /* 세번째 막대 스타일링 */
        var styles_three = {
            transform: `rotate(${store.three_degree}deg) translate(${store.three_translate_x}px, ${store.three_translate_y}px)` 
        }

        return(
            <div onClick={store.clickToggleButtonAnimation} className="toggle">
                <div style={styles_one}></div>
                <div style={styles_two}></div>
                <div style={styles_three}></div>
            </div>
        );
    }
}

export default ToggleButton;