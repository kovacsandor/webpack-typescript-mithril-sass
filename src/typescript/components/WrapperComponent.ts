import * as m from 'mithril'
import { Component } from 'mithril'

import { AsideComponent } from './AsideComponent'
import { FooterComponent } from './FooterComponent'
import { HeaderComponent } from './HeaderComponent'
import { MainComponent } from './MainComponent'

export interface Attrs { }
interface State { }

type Vnode = m.Vnode<Attrs, State>
type VnodeDOM = m.VnodeDOM<Attrs, State>

export let WrapperComponent: Component<Attrs, State> = {

    // oninit(vnode) { },

    view(vnode) {
        return [
            m(HeaderComponent),
            m(MainComponent),
            m(AsideComponent),
            m(FooterComponent)
        ]
    },

    // oncreate(vnode) { },
    // onbeforeupdate(vnode, old) { },
    // onupdate(vnode) { },
    // onbeforeremove(vnode) { },
    // onremove(vnode) { }
}  