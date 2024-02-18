import snabbdom from "snabbdom";

// Define the VNode interface
interface VNode {
    tag: string;
    attrs?: { [key: string]: string };
    children?: VNode[] | string;
}

// Function to create a VNode
function h(tag: string, attrs?: { [key: string]: string }, ...children: any[]): VNode {
    return { tag, attrs, children };
}

// Component state
let state = { count: 0 };

// Function to update state and re-render
function updateState(updater: (state: any) => any) {
    state = updater(state);
    render();
    console.log("State updated:", state);
}

// Function to render the component
function render() {
    const view = h(
        "div",
        {},
        [
            h("h1", {}, ${ state.count }),
            h(
                "button",
                { onClick: () => updateState((s) => ({ ...s, count: s.count + 1 })) },
                "Add"
            ),
        ]
    );
    snabbdom.patch(document.getElementById("app"), view);
}

// Lifecycle hook for component mount
function mounted() {
    console.log("Component mounted");
}

// Mount the component
mounted();
render();

export { h, updateState };