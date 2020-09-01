/* Apply a global theme */


import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'




const theme = createMuiTheme({
    palette: {
        primary: {
            //light: '#fafafa',
            light: '#CFDBD5',
            main: '#A4BEB1',
            dark: '#78A38D',
            contrastText: '#000',
        },

        text: {
            primary: '#5f6461',
        },

        background: {
            paper: '#CFDBD5',
            default: '#CFDBD5'
        },


    },
    typography: {
        button: {
          textTransform: 'none',
        },
        fontSize: 16,
    }

})

export default theme