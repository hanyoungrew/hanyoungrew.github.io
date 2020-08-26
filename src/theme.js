/* Apply a global theme */


import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#f1faee',
            dark: '#002884',
            contrastText: '#000',
        },

        secondary: {
            light: '#daffff',
            main: '#a8dadc',
            dark: '#78a8aa',
            contrastText: '#000',
        },

    },

})


export default theme