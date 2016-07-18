import { Component, mountToDom } from 'vidom';
import { CssTransitionGroup } from '../src';

const PLAYGROUND_MARGIN = 30,
    PLAYGROUND_SIZE = 300;

class App extends Component {
    onInitialStateRequest() {
        return {
            circles : Array.apply(null, { length : 10 }).map(_ => generateCircle())
        };
    }

    onInit() {
        this._onPlaygroundClick = this._onPlaygroundClick.bind(this);
    }

    onRender() {
        return (
            <div class="app">
                <h1 class="app__title">CssTransitionGroup example</h1>
                <div class="app__info">
                    Click on circle to remove it.
                    <br/>
                    Click anywhere else to create a new circle.
                </div>
                <div
                    class="app__playground"
                    style={ { width : `${PLAYGROUND_SIZE}px`, height : `${PLAYGROUND_SIZE}px` } }
                    onClick={ this._onPlaygroundClick }>
                    <CssTransitionGroup
                        appearFrom="circle_appear-from"
                        appearTo="circle_appear-to"
                        enterFrom="circle_enter-from"
                        enterTo="circle_enter-to"
                        leaveFrom="circle_leave-from"
                        leaveTo="circle_leave-to">
                        {
                            this.getState().circles.map(({ key, style }) =>
                                <div
                                    key={ key }
                                    class="circle"
                                    style={ style }
                                    title="remove me"
                                    onClick={ e => this._onClick(e, key) }
                                />
                            )
                        }
                    </CssTransitionGroup>
                </div>
                <div class="app__link">
                    <a
                        href="//github.com/dfilatov/vidom-css-animation-group/tree/master/example"
                        target="_blank">
                        Source code
                    </a>
                </div>
            </div>
        );
    }

    _onPlaygroundClick({ nativeEvent }) {
        this.setState({
            circles : [
                ...this.getState().circles,
                generateCircle(nativeEvent.layerX, nativeEvent.layerY)
            ]
        })
    }

    _onClick(e, key) {
        e.stopPropagation();
        this.setState({ circles : this.getState().circles.filter(circle => key !== circle.key) })
    }
}

let nextKey = 1;

function generateKey() {
    return nextKey++;
}

function generateCircle(left, top) {
    return { key : generateKey(), style : generateStyle(left, top) };
}

function generateStyle(left = generateCoord(PLAYGROUND_SIZE), top = generateCoord(PLAYGROUND_SIZE)) {
    return {
        left : `${left}px`,
        top : `${top}px`,
        background : `rgb(${generateColor()},${generateColor()},${generateColor()})`
    };
}

function generateCoord(max) {
    return Math.floor(Math.random() * (max - 2 * PLAYGROUND_MARGIN)) + PLAYGROUND_MARGIN;
}

function generateColor() {
    return Math.floor(Math.random() * 255);
}

mountToDom(document.getElementById('root'), <App/>);
