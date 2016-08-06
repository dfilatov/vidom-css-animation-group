# vidom-css-animation-group [![Build Status](https://secure.travis-ci.org/dfilatov/vidom-css-animation-group.png)](http://travis-ci.org/dfilatov/vidom-css-animation-group) [![npm version](https://badge.fury.io/js/vidom-css-animation-group.svg)](http://badge.fury.io/js/vidom-css-animation-group)

## What is it?

This module provides API for "appearance", "entering" and "leaving" animation via CSS transitions and animations inside [Vidom](https://github.com/dfilatov/vidom). It's a high-level component based on low-level [vidom-animation-group](https://github.com/dfilatov/vidom-animation-group).

## Demo

[Circles](https://dfilatov.github.io/vidom-css-animation-group/)

## Installation

```
npm i vidom-css-animation-group
```

## How to use

This module provides two components: [CssTransitionGroup](#csstransitiongroup) and [CssAnimationGroup](#cssanimationgroup). If you animation is based on CSS transition, you should use the first one, or if you use CSS animation then use the second one.

### CssTransitionGroup

CssTransitionGroup supports following pairs of attributes:

#### Appearing phase
CSS-classes which are set for each child after group has been mounted.
  * *{String}* `appearFrom` CSS class which describes initial state of your appearing transition
  * *{String}* `appearTo` CSS class which describes final state of your appearing transition

#### Entering phase
CSS-classes which are set when a new child enters to already mounted group.
  * *{String}* `enterFrom` CSS class which describes initial state of your entering transition
  * *{String}* `enterTo` CSS class which describes final state of your entering transition

#### Leaving phase  
CSS-classes which are set when a child leaves from mounted group.
  * *{String}* `leaveFrom` CSS class which describes initial state of your leaving transition
  * *{String}* `leaveTo` CSS class which describes final state of your leaving transition
  
*Note* Any of these pairs are optional, but if you specify either CSS-class from pair, you have to specify another one. For instance, if you specify `enterFrom`, you must specify `enterTo` and vice versa.
```jsx
import { Component } from 'vidom';
import { CssTransitionGroup } from 'vidom-css-animation-group';

class MyListComponent extend Component {
    onRender({ items }) {
        return (
            <CssTransitionGroup
                appearFrom="list-item_appear-from"
                appearTo="list-item_appear-to"
                enterFrom="list-item_enter-from"
                enterTo="list-item_enter-to"
                leaveFrom="list-item_leave-from"
                leaveTo="list-item_leave-to">
                { items.map(({ id, text }) => <div key={ id }>{ text }</div> }
            </CssTransitionGroup>
        );
    }
}
```

### CssAnimationGroup

CssTransitionGroup supports following attributes:

  * *{String}* `appear` CSS class which describes appearing animation
  * *{String}* `enter` CSS class which describes entering animation
  * *{String}* `leave` CSS class which describes leaving animation

```jsx
import { Component } from 'vidom';
import { CssAnimationGroup } from 'vidom-css-animation-group';

class MyListComponent extend Component {
    onRender({ items }) {
        return (
            <CssAnimationGroup
                appear="list-item_appear"
                enter="list-item_enter"
                leave="list-item_leave">
                { items.map(({ id, text }) => <div key={ id }>{ text }</div> }
            </CssAnimationGroup>
        );
    }
}
```
