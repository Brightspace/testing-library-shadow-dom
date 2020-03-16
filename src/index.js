export * from '@testing-library/dom';

export function deepQuerySelector(selectors) {
    const matches = this.deepQuerySelectorAll(selectors);

    if (Array.isArray(matches) && matches.length) {
        return matches[0];
    }

    return null;
}

export function deepQuerySelectorAll(selectors) {
    const matches = [];
    const nodes = [this, ...getDescendantOpenShadowRoots(this)];
    
    for (const node of nodes) {
        matches.push(...Array.from(node.querySelectorAll(selectors) || []));
    }
    
    return matches;
}

function getDescendantOpenShadowRoots(target) {
    const shadowRoots = [];

    if (target.shadowRoot && target.shadowRoot.mode === 'open') {
        shadowRoots.push(...[target.shadowRoot, ...getDescendantOpenShadowRoots(target.shadowRoot)]);
    }

    const collection = target.length ? target : target.children || [];
    for (let i = 0; i < collection.length; i++) {
        shadowRoots.push(...getDescendantOpenShadowRoots(collection[i]));
    }

    return shadowRoots;
}

[Document, HTMLElement, ShadowRoot].forEach(target => {
    target.prototype.deepQuerySelector = deepQuerySelector;
    target.prototype.deepQuerySelectorAll = deepQuerySelectorAll;
});
