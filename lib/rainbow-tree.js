'use babel';

import RainbowTreeView from './rainbow-tree-view';
import { CompositeDisposable } from 'atom';

export default {

  rainbowTreeView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.rainbowTreeView = new RainbowTreeView(state.rainbowTreeViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.rainbowTreeView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rainbow-tree:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rainbowTreeView.destroy();
  },

  serialize() {
    return {
      rainbowTreeViewState: this.rainbowTreeView.serialize()
    };
  },

  toggle() {
    console.log('RainbowTree was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
