import {GLOBAL} from '@utils'

export default theme = {
    colors: {
        primary: GLOBAL.PRIMARY,
        secondary:GLOBAL.SECONDARY,
    },
    Text:{
        style: {
            color: "red"
        }
    },
    Button: {
        raised: false,
        clear:true
    },
    Avatar: {
        rounded: true,
    },
    Badge: {
        textStyle: { fontSize: 30 },
    },
}