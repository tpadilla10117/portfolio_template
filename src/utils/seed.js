/* For default data to be used in project: */

    import DesignerLife from '../assets/images/designerlife.svg';

    export const navData = [
        {
            title: 'About',
            path: '/about',
            cName: 'nav-text',
            activeObject: null,
            id: 1,
        },

        {
            title: 'Discover',
            path: '/discover',
            cName: 'nav-text',
            activeObject: null,
            id: 2,
        },
        {
            title: 'Services',
            path: '/services',
            cName: 'nav-text',
            activeObject: null,
            id: 3,
        },
        {
            title: 'Sign Up',
            path: '/signup',
            cName: 'nav-text',
            activeObject: null,
            id: 4,
        }
    ]

    export const homeObjOne = {
        id: 'about',
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine: 'Premium Templates',
        headline: 'Unlimited templating at a low cost',
        description: 'Get access to our templates that allow you to create sites at a relatively fast pace.',
        buttonLabel: 'Get started',
        imgStart: true,
        img: `${DesignerLife}`,
        alt: 'Designer',
        dark: true,
        primary: true,
        darkText: false
    };

    export const homeObjTwo = {
        id: 'discover',
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'Unlimited Power',
        headline: 'Unlimited templating at a low cost',
        description: 'Get access to our templates that allow you to create sites at a relatively fast pace.',
        buttonLabel: 'Get started',
        imgStart: false,
        img: `${DesignerLife}`,
        alt: 'Designer',
        dark: false,
        primary: false,
        darkText: true,
    };

    export const homeObjThree = {
        id: 'about',
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine: 'Premium Templates',
        headline: 'Unlimited templating at a low cost',
        description: 'Get access to our templates that allow you to create sites at a relatively fast pace.',
        buttonLabel: 'Get started',
        imgStart: true,
        img: `${DesignerLife}`,
        alt: 'Designer',
        dark: true,
        primary: true,
        darkText: false
    };

