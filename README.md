# Dom Highlight

jQuery plugin for highlightning dom elements

## Example

```
$("#element").domHighlight({
    backdropBackground: 'rgba(0,0,0, .5)',
    zIndex: 1000,
    highlightClass: 'dom-highlight',
    fakeElemClass: 'dh-fake-element',
    disableOnClickOut: true,
    disableCallback: function () {
        console.log('highlight hidden!');
    }
});
```