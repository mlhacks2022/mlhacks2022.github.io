export const theme = {
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    colors: {
        background: '#EFEFEF',
        darkBackground: '#2F4858',
        purple: '#5A3FFF',
        purple2: '#705bff',
        purple3: '#472bff',
        lightPurple: '#E0DBFE',
        lightPurpleGray: '#EBE9F3',
        orange: '#EA9A28',
        darkOrange: '#CA8522',
        lightGray: '#DFDEDE',
        mediumGray: '#464646',
        placeholderGray: 'rgba(0, 0, 0, 0.5)',
        easyGreen: '#27B12A',
        medOrange: '#EA9A28',
        hardRed: '#DA1C1C',
        brightRed: '#ff7a7a',
        blue: '#2589FE'
    },
    styles: {
        root: {
          fontFamily: 'body',
          lineHeight: 'body',
          fontWeight: 'body',
          overflowWrap: 'break-word',
          fontSize: 3,
          boxSizing: 'border-box',
          scrollBehavior: 'smooth',
        },
        h1: {
          variant: 'text.heading',
          fontSize: 7,
        },
        h2: {
          variant: 'text.heading',
          fontSize: 6,
        },
        h3: {
          variant: 'text.heading',
          fontSize: 5,
          fontWeight: 'bold',
        },
        h4: {
          variant: 'text.medium',
          fontSize: 4,
        },
        h5: {
          fontWeight: 'bold',
          fontsize: '18px',
        },
    },
};

export default theme;