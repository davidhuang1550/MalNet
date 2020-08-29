export const PARTICLES = {

    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 700
            }
        },
        color: {
            value: '#01579b'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: .2,
                color: '#145ea8'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.7,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: '#007ecc',
            opacity: 0.5,
            width: 2
        },
        move: {
            enable: true,
            speed: 2,
            direction: top,
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    }
};

export const PARTICLES_VALUES = {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
};
