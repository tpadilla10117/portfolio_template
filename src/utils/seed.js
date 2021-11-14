/* For default data to be used in project: */

    import DesignerLife from '../assets/images/designerlife.svg';

    export const navData = [
        {
            title: 'About',
            path: 'about',
            cName: 'nav-text',
            activeObject: null,
            id: 1,
            smooth: true,
            duration: 500,
            spy: true,
            exact: 'true',
            offset: -80,
        },

        {
            title: 'Discover',
            path: 'discover',
            cName: 'nav-text',
            activeObject: null,
            id: 2,
            smooth: true,
            duration: 500,
            spy: true,
            exact: 'true',
            offset: -80,
        },
        {
            title: 'Services',
            path: 'services',
            cName: 'nav-text',
            activeObject: null,
            id: 3,
            smooth: true,
            duration: 500,
            spy: true,
            exact: 'true',
            offset: -80,
        },
        {
            title: 'Sign Up',
            path: 'signup',
            cName: 'nav-text',
            activeObject: null,
            id: 4,
            smooth: true,
            duration: 500,
            spy: true,
            exact: 'true',
            offset: -80,
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
        imgStart: true,
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

    export const carouselData = [
        {
            image: 'https://images.unsplash.com/photo-1620165366489-d08eff58ccf5?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            image: 'https://images.unsplash.com/photo-1636888302671-de09823cddac?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            image: 'https://images.unsplash.com/photo-1636844799799-fb41e4dc62ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ]

