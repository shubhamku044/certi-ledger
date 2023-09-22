import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

const Stars = () => {
  const particlesInit = useCallback(async (engine: Engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container;
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: true,
        backgroundMask: {
          composite: 'difference',
          cover: {
            color: {
              value: 'white'
            },
            opacity: 1
          }
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'attract',
              parallax: {
                enable: true,
                force: 4,
                smooth: 40
              }
            },
            resize: true
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
          }
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 12
              },
              value: 1
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            }
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1
                },
                value: 1
              }
            },
            enable: true,
            mode: 'destroy'
          },
          color: {
            value: '#cecece',
            animation: {
              enable: false,
              speed: 100,
              sync: false
            }
          },
          life: {
            count: 37,
            delay: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              sync: false
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001
              },
              value: 0,
              sync: true
            }
          },
          move: {
            angle: {
              offset: 45,
              value: 90
            },
            attract: {
              enable: false,
              rotate: {
                x: 3000,
                y: 3000
              }
            },
            direction: 'top-right',
            distance: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              maxSpeed: 50
            },
            noise: {
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0
              },
              enable: false
            },
            outModes: {
              default: 'out'
            },
            random: false,
            size: false,
            speed: 2,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: '#000000'
              }
            },
            vibrate: false,
            warp: false
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000
            },
            limit: 0,
            value: 100
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.3
            },
            value: 0.8,
            animation: {
              enable: true,
              minimumValue: 0.3,
              speed: 0.5,
              sync: false
            }
          },
          reduceDuplicates: false,
          rotate: {
            random: false,
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false
            },
            direction: 'clockwise',
            path: false
          },
          shadow: {
            blur: 51,
            color: {
              value: '#000000'
            },
            enable: false,
            offset: {
              x: 0,
              y: 0
            }
          },
          shape: {
            options: {},
            type: 'circle'
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1
            },
            value: 3,
            animation: {
              destroy: 'none',
              enable: true,
              minimumValue: 1,
              speed: 3,
              startValue: 'max',
              sync: false
            }
          },
        },
      }}
    />
  );
};

export default Stars;
