// const heading = React.createElement('h1', {}, "Hello, World!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const heading = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement(
            'div',
            { id: 'child1' },
            [
                React.createElement('h1', {}, 'h1 tag'),
                React.createElement('p', {}, 'p tag'),
                React.createElement('h2', {}, 'h2 tag'),
            ]
        ),
        React.createElement(
            'div',
            { id: 'child2' },
            [
                React.createElement('h1', {}, 'h1 tag'),
                React.createElement('p', {}, 'p tag'),
                React.createElement('h2', {}, 'h2 tag'),
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);