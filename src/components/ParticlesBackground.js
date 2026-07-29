import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // ...
  }, []);

  useEffect(() => {
    const body = document.body;
    const syncTheme = () =>
      setIsLightMode(body.classList.contains("theme-light"));

    syncTheme();

    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => themeObserver.disconnect();
  }, []);

  const particlePalette = isLightMode
    ? ["#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff"]
    : ["#ffffff", "#f7f1ff", "#e0aaff", "#c77dff", "#9d4edd", "#b46cff"];

  return (
    <Particles
      id="particles-box"
      className="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 170,
              links: {
                opacity: 0.35,
              },
            },
          },
        },
        particles: {
          color: {
            value: particlePalette,
          },
          links: {
            color: isLightMode ? "#7b2cbf" : "#b46cff",
            distance: 135,
            enable: true,
            opacity: isLightMode ? 0.22 : 0.13,
            triangles: {
              enable: false,
              color: "#7b2cbf",
              opacity: 0.01,
            },
            width: 0.6,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.28,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 68,
          },
          opacity: {
            value: isLightMode
              ? { min: 0.28, max: 0.62 }
              : { min: 0.24, max: 0.68 },
            animation: {
              enable: true,
              speed: 0.2,
              minimumValue: 0.12,
              sync: false,
            },
          },
          shadow: {
            blur: 6,
            color: isLightMode ? "#5a189a" : "#7b2cbf",
            enable: true,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.7, max: 2.9 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.5,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              color: isLightMode ? "#7b2cbf" : "#f7f1ff",
              frequency: 0.01,
              opacity: { min: 0.4, max: 0.78 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
